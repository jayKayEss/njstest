import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'

interface ServerPageProps {
  message: String
}

const ServerPage: NextPage<ServerPageProps> = ({
  message
}) => {
  const now = (new Date()).toString()
  return (
    <div>
      <h1>Static Rendering Example</h1>
      <h2>This is generated in the client: {now}</h2>
      <h2>{message}</h2>
    </div>
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
