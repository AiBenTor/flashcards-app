import { Stack } from '@mui/material'
import { HeaderButton } from './HeaderButton'
import '@/styles/header.scss'

export const Header = () => {
  return (
    <header className="header">
      <Stack direction="row" spacing={2}>
        <HeaderButton url='/' text='Home' />
        <HeaderButton url='/decks' text='My Decks' />
      </Stack>
    </header>
  )
}
