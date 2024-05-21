import { Stack } from '@mui/material'
import '@/styles/header.scss'
import { LinkButton } from './LinkButton'
import { ThemeButton } from './ThemeButton'
import { useTheme } from '@/hooks/useTheme'

export const Header = () => {
  const { theme, setDarkTheme, setLightTheme } = useTheme()

  const handleClick = () => {
    if (theme === 'light') {
      setDarkTheme()
    } else {
      setLightTheme()
    }
  }

  return (
    <header className="header">
      <Stack direction="row" spacing={2}>
        <LinkButton url="/" text="Home" theme={theme} />
        <LinkButton url="/decks" text="My Decks" theme={theme} />
        <ThemeButton theme={theme} handleClick={handleClick} />
      </Stack>
    </header>
  )
}
