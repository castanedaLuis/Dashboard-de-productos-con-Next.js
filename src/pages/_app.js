import '@styles/tailwind.css'
import Layout from '@layout/MainLayout'
import { ProviderAuth } from '@hooks/useAuth'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <ProviderAuth>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProviderAuth>
    </>
  )
}

export default MyApp
