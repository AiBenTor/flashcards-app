import { Outlet } from 'react-router-dom'
import { ErrorPage } from '@/pages/ErrorPage'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import '@/styles/pageLayout.scss'

export const PageLayout = ({ isError = false }) => {
  return (
    <>
      <Header />
      <main className='main--page'>
        {isError ? <ErrorPage /> : <Outlet />}
      </main>
      <Footer />
    </>
  )
}
