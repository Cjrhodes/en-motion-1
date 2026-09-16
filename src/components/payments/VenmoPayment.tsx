import styles from './VenmoPayment.module.css';

export default function VenmoPayment() {
  return (
    <aside className={styles.panel} aria-label="Manual Venmo payment">
      <h3>Pay with Venmo</h3>
      <p>Confirm service availability and the total with En Motion before sending payment.</p>
      <p>Recipient: <strong>Miguel Ricaurte · @Miguel-Ricaurte</strong> (personal profile).</p>
      <a href="https://venmo.com/Miguel-Ricaurte" target="_blank" rel="noopener noreferrer">
        Open Venmo profile
      </a>
      <p className={styles.instructions}>
        Verify the recipient and amount in Venmo. Include the service or package name
        in your payment note and mark the payment as a purchase (goods and services).
        If that option is unavailable, do not send payment; contact En Motion for another method.
      </p>
      <p className={styles.instructions}>
        Payments are verified manually. Opening Venmo or submitting a form does not
        confirm payment or reserve a booking. This option does not set up recurring billing.
      </p>
    </aside>
  );
}