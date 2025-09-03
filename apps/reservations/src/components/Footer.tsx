import { checkBackendHealth } from '../services/api';
import styles from './Footer.module.css';

export async function Footer() {
  const health = await checkBackendHealth();
  const isHealthy = health.status === 'healthy';
  const statusDotClass = isHealthy ? styles.statusDotConnected : styles.statusDotDisconnected;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.statusContainer}>
          <span className={styles.statusLabel}>Backend Status:</span>
          <div className={styles.statusIndicator}>
            <div className={`${styles.statusDot} ${statusDotClass}`} />
            <span className={styles.statusText}>{health.status}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}