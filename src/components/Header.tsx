import { Button, Stack } from '@mui/material'

export const Header = () => {
  return (
    <header>
      <Stack direction="row" spacing={2}>
        <Button href="#">Home</Button>
        <Button href="#">My Decks</Button>
      </Stack>
    </header>
  )
}
