import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

interface StaticPageProps {
  message: String
}

const StaticPage: NextPage<StaticPageProps> = ({
  message
}) => {
  const now = (new Date()).toString()
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Static Rendering Example</h1>
      <div className={styles.body}>
        <p>This is generated in the client: {now}</p>
        <p>{message}</p>
        <Link href="/server"><a>Server-Side Rendering Example</a></Link>
      </div>
    </main>
  )
}

const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      message: `This was generated statically at build time: ${new Date()}`
    }
  }
}

export default StaticPage
export {
  getStaticProps
}
