import { checkBackendHealth } from '@restaurante/api';
import { Footer } from '@restaurante/ui-components';

export async function FooterWrapper() {
  const health = await checkBackendHealth();
  
  return <Footer healthStatus={health.status} />;
}