// A simple array to hold our tickets
let tickets = [
  {
    id: 1,
    title: "Database connection failed on API server",
    description: "The main API server failed to connect to the production database after a recent deployment.",
    status: "open", // open → Green tone
    priority: "High",
    createdAt: "2025-10-25",
  },
  {
    id: 2,
    title: "Update contact page phone number",
    description: "The phone number listed on the contact page is outdated. Need to update it to (555) 555-1234.",
    status: "in_progress", // in_progress → Amber tone
    priority: "Medium",
    createdAt: "2025-10-26",
  },
  {
    id: 3,
    title: "Improve dashboard loading speed",
    description: "Dashboard takes more than 5 seconds to load after login. Requires optimization.",
    status: "closed", // closed → Gray tone
    priority: "High",
    createdAt: "2025-10-27",
  },
];

let nextId = tickets.length + 1;

// --- CRUD Functions using localStorage for persistence (better than nothing) ---
const STORAGE_KEY = 'ticket_data';
localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));

// Load initial data from storage
const loadTickets = () => {
    try {
        const storedTickets = localStorage.getItem(STORAGE_KEY);
        if (storedTickets) {
            tickets = JSON.parse(storedTickets);
            nextId = tickets.length > 0 ? Math.max(...tickets.map(t => t.id)) + 1 : 1;
        }
    } catch (e) {
        console.error("Could not load tickets from storage", e);
    }
    return tickets;
};

const saveTickets = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
};

export const getTickets = () => {
    return loadTickets();
};

export const createTicket = (newTicket) => {
    const ticket = {
        ...newTicket,
        id: nextId++,
        createdAt: new Date().toISOString().split('T')[0],
    };
    tickets.push(ticket);
    saveTickets();
    return ticket;
};

export const updateTicket = (id, updatedDetails) => {
    const index = tickets.findIndex(t => t.id === id);
    if (index !== -1) {
        tickets[index] = { ...tickets[index], ...updatedDetails };
        saveTickets();
        return tickets[index];
    }
    return null;
};

export const deleteTicket = (id) => {
    const initialLength = tickets.length;
    tickets = tickets.filter(t => t.id !== id);
    saveTickets();
    return tickets.length < initialLength; // Return true if deleted
};

// Ensure data is loaded when this file is imported
loadTickets();