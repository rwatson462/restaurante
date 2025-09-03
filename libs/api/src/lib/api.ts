const BASE_URL = process.env['BACKEND_URL'];

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
}

export async function makeRequest<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function getServerStatus(): Promise<any> {
  return makeRequest('/');
}
