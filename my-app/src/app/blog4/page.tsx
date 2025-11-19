import { BaseButton } from '@/app/blog4/BaseButton'
import styles from './page.module.css'

export default function Blog4() {
  return (
    <div>
      <h1>Blog Post 4</h1>
      <p>This is the content of blog post 4.</p>
      <BaseButton className={styles.primary} />
    </div>
  );
}