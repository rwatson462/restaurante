import { PageHeader } from '@restaurante/ui-components';
import { getServerStatus } from '@restaurante/api';

export default async function Page() {
  const apiResponse = await getServerStatus();

  return (
    <div>
      <PageHeader title="Front of House" />
      <div style={{ padding: '1rem' }}>
        <h3>Backend Status:</h3>
        <pre style={{ padding: '1rem', borderRadius: '4px' }}>
          {JSON.stringify(apiResponse, null, 2)}
        </pre>
      </div>
    </div>
  );
}