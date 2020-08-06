import styles from '../styles/searchbar.module.scss'

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="text"/>
    </div>
  )
}
