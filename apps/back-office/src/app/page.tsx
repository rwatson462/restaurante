import { PageHeader } from '@restaurante/ui-components';

async function getBackendData(): Promise<{ data?: string; error?: string; url?: string }> {
  try {
    const backendUrl = process.env.BACKEND_URL || 'http://localhost:4000';
    console.log('Fetching from:', backendUrl);
    const response = await fetch(`${backendUrl}/`, {
      cache: 'no-store', // Ensure fresh data on each request
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.text();
    return { data, url: backendUrl };
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Unknown error', url: process.env.BACKEND_URL || 'http://localhost:4000' };
  }
}

export default async function Page() {
  const { data: backendData, error, url } = await getBackendData();

  return (
    <div>
      <PageHeader title="Back Office" />

      <div style={{ padding: '20px' }}>
        <h2>Backend Response</h2>
        <p><em>Raw response text fetched server-side during rendering</em></p>
        <p><strong>Fetching from URL:</strong> {url}</p>

        {error && (
          <div style={{ color: 'red', padding: '10px', border: '1px solid red', borderRadius: '4px' }}>
            <strong>Error:</strong> {error}
          </div>
        )}

        {backendData && (
          <div style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}>
            <h3>Backend Response:</h3>
            <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{backendData}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
