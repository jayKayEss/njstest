import type { NextPage } from 'next'
import { GetStaticProps } from 'next'

interface StaticPageProps {
  message: String
}

const StaticPage: NextPage<StaticPageProps> = ({
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
