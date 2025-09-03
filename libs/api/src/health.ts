const API_URL = process.env.BACKEND_URL || 'http://localhost:4000';

export async function checkBackendHealth() {
  const response = await fetch(`${API_URL}/health`);
  if (!response.ok) {
    throw new Error('Backend health check failed');
  }
  return await response.json();
}