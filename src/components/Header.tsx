import { Stack } from '@mui/material'
import '@/styles/header.scss'
import { LinkButton } from './LinkButton'
import { ThemeButton } from './ThemeButton'

export const Header = () => {
  return (
    <header className="header">
      <Stack direction="row" spacing={2}>
        <LinkButton url="/" text="Home" />
        <LinkButton url="/decks" text="My Decks" />
        <ThemeButton />
      </Stack>
    </header>
  )
}
