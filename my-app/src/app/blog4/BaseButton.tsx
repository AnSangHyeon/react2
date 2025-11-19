import styles from './base-button.module.css'
 
interface BaseButtonProps {
  className?: string
}

export function BaseButton({ className }: BaseButtonProps) {
  return <button className={`${styles.primary} ${className ?? ''}`} />
}