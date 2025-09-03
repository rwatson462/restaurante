const API_URL = process.env.BACKEND_URL;

export async function checkBackendHealth() {
  try {
    const response = await fetch(`${API_URL}/health`);
    if (!response.ok) {
      throw new Error('Backend health check failed');
    }
    return await response.json();
  } catch (error) {
    console.error('Backend health check error:', error);
    throw error;
  }
}
