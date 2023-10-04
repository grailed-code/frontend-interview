import styles from './layout.module.scss';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <header />
      <div className={styles.content}>{children}</div>
      <footer />
    </div>
  );
}

export default Layout;
