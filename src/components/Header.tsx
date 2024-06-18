import { LinkButton } from './LinkButton'
import { ThemeButton } from './ThemeButton'
import { MenuButton } from './MenuButton'

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container--web">
        <LinkButton url="/" text="Home" />
        <LinkButton url="/decks" text="My Decks" />
        <ThemeButton />
      </div>

      <div className="header__container--mobile">
        <MenuButton />
      </div>
    </header>
  )
}
