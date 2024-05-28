import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { DeleteButton } from './DeleteButton'
import { COLOR } from '@/utils/consts'
import { Deck as DeckType } from '@/types/deck'

interface Props {
  deck: DeckType,
  handleDeleteDeck: (id: DeckType['id']) => void
}

export const Deck: React.FC<Props> = ({ deck, handleDeleteDeck }) => {
  const { id, title, description, newCards, learningCards, scheduledCards } = deck
  const titleShort = `${title.substring(0, 20)}${title.length > 20 ? '...' : ''}`
  const descriptionShort = `${description.substring(0, 65)}${description.length > 66 ? '...' : ''}`

  const handleDelete = () => {
    handleDeleteDeck(id)
  }

  return (
    <Card sx={{ height: 175, width: 350, padding: 2 }}>
      <Link to={`/decks/${id}`} style={{ color: COLOR.BLUE_DARK, textDecoration: 'none' }}>
        <CardHeader title={titleShort} action={<DeleteButton handleDelete={handleDelete} />} />
        <CardContent>
          <Typography variant="body1" color="text.secondary" overflow="hidden" textOverflow="ellipsis" sx={{ mb: 2 }}>
            {descriptionShort}
          </Typography>
          <Typography variant="body2" sx={{ height: 30 }}>
            {newCards} | {learningCards} | {scheduledCards}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  )
}
