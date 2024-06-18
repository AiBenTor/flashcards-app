import { Outlet } from 'react-router-dom'
import { ErrorPage } from '@/pages/ErrorPage'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MobileMenu } from '@/components/MobileMenu'
import { useMobileMenu } from '@/hooks/useMobileMenu'

export const PageLayout = ({ isError = false }) => {
  const { isMenuOpen } = useMobileMenu()

  return (
    <div id="app" className="app">
      {isMenuOpen ? (
        <MobileMenu />
      ) : (
        <>
          <Header />
          <main className="main--page">{isError ? <ErrorPage /> : <Outlet />}</main>
          <Footer />
        </>
      )}
    </div>
  )
}
