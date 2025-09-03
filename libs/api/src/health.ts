import { HealthResponse } from './responses';

const API_URL = process.env['BACKEND_URL'];

export async function checkBackendHealth(): Promise<HealthResponse> {
  const response = await fetch(`${API_URL}/health`);

  if (!response.ok) {
    throw new Error('Backend health check failed');
  }

  return await response.json();
}
