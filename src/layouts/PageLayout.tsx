import { Outlet } from 'react-router-dom'
import { ErrorPage } from '@/pages/ErrorPage'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export const PageLayout = ({ isError = false }) => {
  return (
    <div id="app" className="app">
      <Header />
      <main className="main--page">{isError ? <ErrorPage /> : <Outlet />}</main>
      <Footer />
    </div>
  )
}
