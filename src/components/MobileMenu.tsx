import { CloseButton } from './CloseButton'
import { LinkButton } from './LinkButton'
import { ThemeButton } from './ThemeButton'

export const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <div className="mobile-menu__close">
        <CloseButton />
      </div>
      <div className="mobile-menu__links">
        <LinkButton url="/" text="Home" />
        <LinkButton url="/decks" text="My Decks" />
        <ThemeButton />
      </div>
    </div>
  )
}
