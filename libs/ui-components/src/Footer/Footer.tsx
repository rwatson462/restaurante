import styles from './Footer.module.css';

interface FooterProps {
  healthStatus: 'healthy';
}

export function Footer({ healthStatus }: FooterProps) {
  const isHealthy = healthStatus === 'healthy';
  const statusDotClass = isHealthy ? styles.statusDotConnected : styles.statusDotDisconnected;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.statusContainer}>
          <span className={styles.statusLabel}>Backend Status:</span>
          <div className={styles.statusIndicator}>
            <div className={`${styles.statusDot} ${statusDotClass}`} />
            <span className={styles.statusText}>{healthStatus}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
