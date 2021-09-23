import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

interface ServerPageProps {
  message: String
}

const ServerPage: NextPage<ServerPageProps> = ({
  message
}) => {
  const now = (new Date()).toString()
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Server-Side Rendering Example</h1>
      <div className={styles.body}>
        <p>This is generated in the client: {now}</p>
        <p>{message}</p>
        <Link href="/static"><a>Static Rendering Example</a></Link>
      </div>
    </main>
  )
}

const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      message: `This was generated dynamically at serve time: ${new Date()}.`
    }
  }
}

export default ServerPage
export {
  getServerSideProps
}
