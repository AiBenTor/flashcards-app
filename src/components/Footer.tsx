import { FooterLink } from './FooterLink'
import '@/styles/footer.scss'

export const Footer = () => {
  return (
    <footer className="footer">
      <FooterLink url="https://github.com/AiBenTor/flashcards-app" name="GitHub" />
    </footer>
  )
}
