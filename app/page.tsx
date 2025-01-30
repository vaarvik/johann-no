import Heading from '@/components/typography/components/Heading/Heading';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Heading level={2} color="neutral">
          Home
        </Heading>
      </main>
    </div>
  );
}
