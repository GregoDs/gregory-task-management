const API_URL = 'http://localhost:5000';  // Adjust the backend URL accordingly

export const fetchTasks = async () => {
  const response = await fetch(`${API_URL}/tasks`);
  return response.json();
};

export const fetchTask = async (id) => {
  const response = await fetch(`${API_URL}/tasks/${id}`);
  return response.json();
};

export const createTask = async (task) => {
  const response = await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  return response.json();
};

// Add other CRUD actions as needed
