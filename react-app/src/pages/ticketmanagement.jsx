import React, { useState, useEffect } from "react";
import { getTickets, createTicket, updateTicket, deleteTicket } from "../data/mockTicket.js";
import "./TicketManagement.css";

// --- Ticket Card Component ---
const TicketCard = ({ ticket, onEdit, onDelete }) => {
  const statusClass = ticket.status.replace('_', '-'); // open, in-progress, closed

  return (
    <div className={`ticket-card ${statusClass}`}>
      <div className="card-header">
        <h3 className="card-title">{ticket.title}</h3>
        <span className={`status-tag ${statusClass}`}>{ticket.status.toUpperCase()}</span>
      </div>
      <p className="card-description">{ticket.description.substring(0, 100)}...</p>
      <div className="card-footer">
        <span className="priority">Priority: {ticket.priority || 'Low'}</span>
        <span className="date">Created: {ticket.createdAt}</span>
      </div>
      <div className="card-actions">
        <button className="btn-edit" onClick={() => onEdit(ticket)}>Edit</button>
        <button className="btn-delete" onClick={() => onDelete(ticket.id)}>Delete</button>
      </div>
    </div>
  );
};

// --- Main Ticket Management Component ---
export default function TicketManagement() {
  const [tickets, setTickets] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTicket, setEditingTicket] = useState(null);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  // Initial Data Load
  useEffect(() => {
    setTickets(getTickets());
  }, []);

  const refreshTickets = () => {
    setTickets(getTickets());
  };
  
  // --- CRUD Handlers ---
  const handleCreateOrUpdate = (formData) => {
    try {
      if (editingTicket) {
        // UPDATE
        updateTicket(editingTicket.id, formData);
        setFeedback({ type: 'success', message: 'Ticket updated successfully!' });
      } else {
        // CREATE
        createTicket(formData);
        setFeedback({ type: 'success', message: 'New ticket created successfully!' });
      }
      refreshTickets();
      setIsModalOpen(false);
      setEditingTicket(null);
    } catch (error) {
       setFeedback({ type: 'error', message: 'Failed to save ticket. Please retry.' });
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this ticket?")) {
      const success = deleteTicket(id);
      if (success) {
        setFeedback({ type: 'success', message: 'Ticket deleted successfully.' });
        refreshTickets();
      } else {
        setFeedback({ type: 'error', message: 'Failed to delete ticket.' });
      }
    }
  };
  
  const openCreateModal = () => {
    setEditingTicket(null);
    setIsModalOpen(true);
  };
  
  const openEditModal = (ticket) => {
    setEditingTicket(ticket);
    setIsModalOpen(true);
  };

  return (
    <div className="ticket-management-page">
      <h1>Ticket Management</h1>
      <button className="btn-primary" onClick={openCreateModal}>+ Create New Ticket</button>

      {feedback.message && (
          <div className={`feedback-toast ${feedback.type}`}>{feedback.message}</div>
      )}

      {/* Ticket List (Read) */}
      <div className="ticket-list-grid">
        {tickets.length > 0 ? (
          tickets.map(ticket => (
            <TicketCard 
              key={ticket.id} 
              ticket={ticket} 
              onEdit={openEditModal} 
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p>No tickets found. Create one to get started!</p>
        )}
      </div>
      
      {/* Create/Edit Modal */}
      {isModalOpen && (
        <TicketForm 
          ticket={editingTicket}
          onClose={() => setIsModalOpen(false)} 
          onSubmit={handleCreateOrUpdate}
        />
      )}
    </div>
  );
}


// --- Create/Edit Form Component ---
const STATUS_OPTIONS = ["open", "in_progress", "closed"];

const TicketForm = ({ ticket, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: ticket?.title || "",
    description: ticket?.description || "",
    status: ticket?.status || "open",
    priority: ticket?.priority || "Low",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = "Title field is mandatory.";
    }
    if (!formData.status) {
      newErrors.status = "Status field is mandatory.";
    } else if (!STATUS_OPTIONS.includes(formData.status)) {
      newErrors.status = `Status must be one of: ${STATUS_OPTIONS.join(", ")}.`;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    } else {
        // Show validation error feedback (will show inline)
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{ticket ? 'Edit Ticket' : 'Create New Ticket'}</h2>
        <form onSubmit={handleSubmit} className="ticket-form">
            
          <label>Title*</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="A brief title for the issue"
          />
          {errors.title && <p className="inline-error">{errors.title}</p>}
          
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
          />

          <label>Status*</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            {STATUS_OPTIONS.map(s => (
              <option key={s} value={s}>{s.toUpperCase()}</option>
            ))}
          </select>
          {errors.status && <p className="inline-error">{errors.status}</p>}

          <label>Priority</label>
          <select name="priority" value={formData.priority} onChange={handleChange}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <div className="form-actions">
            <button type="submit" className="btn-primary">
              {ticket ? 'Save Changes' : 'Create Ticket'}
            </button>
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};