import Image from "next/image"
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Replace \"/aay-logo.png\" with your actual logo copied into the /public directory */}
      <Image
        src="/aay-logo.png"
        alt="AAY Logo"
        width={400}
        height={400}
        priority
      />
      <h1 className={styles.welcome}>
        WELCOME TO AAY <span role="img" aria-label="medal">🏅</span>
      </h1>
    </main>
  )
}