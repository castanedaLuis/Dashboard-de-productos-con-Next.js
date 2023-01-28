import '@styles/tailwind.css'
import Layout from '@layout/MainLayout'

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </>
  )
}

export default MyApp
