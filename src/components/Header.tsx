import { useTheme } from '@/hooks/useTheme'
import { LinkButton } from './LinkButton'
import { ThemeButton } from './ThemeButton'
import { MenuButton } from './MenuButton'

export const Header = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="header">
      <div className="header__container--web">
        <LinkButton url="/" text="Home" theme={theme} />
        <LinkButton url="/decks" text="My Decks" theme={theme} />
        <ThemeButton theme={theme} handleClick={toggleTheme} />
      </div>

      <div className="header__container--mobile">
        <MenuButton theme={theme} />
      </div>
    </header>
  )
}
