import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import '@/styles/pageLayout.scss'

interface Props {
  children?: JSX.Element
}

export const PageLayout: React.FC<Props> = ({ children = <></> }) => {
  return (
    <>
      <Header />
      <main className='main--page'>
        {children}
      </main>
      <Footer />
    </>
  )
}
