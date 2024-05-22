import { Delete } from '@mui/icons-material'
import { Card, CardActionArea, CardContent, CardHeader, IconButton, Typography } from '@mui/material'

interface Props {
  title: string
  description: string
  newCards: number
  learningCards: number
  scheduledCards: number
}

export const Deck: React.FC<Props> = ({ title, description, newCards, learningCards, scheduledCards }) => {
  return (
    <>
      {/* <div
        style={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'flex-end',
          width: 350,
        }}
      >
        <IconButton
          sx={{
            marginRight: 3,
            marginTop: 3,
            zIndex: 100,
          }}
          onClick={() => {
            console.log('DELETE DECK')
          }}
        >
          <Delete />
        </IconButton>
      </div> */}

      <Card sx={{ height: 225, width: 350 }}>
        <CardActionArea sx={{ height: '100%', padding: 2 }}>
          <CardHeader
            sx={{ height: '20%' }}
            title={`${title.substring(0, 20)}${title.length > 20 ? '...' : ''}`}
            action={
              <IconButton
                onTouchStart={(event) => event.stopPropagation()}
                onMouseDown={(event) => event.stopPropagation()}
                onClick={(event) => {
                  event.stopPropagation()
                  event.preventDefault()
                  console.log('DELETE DECK')
                }}
              >
                <Delete />
              </IconButton>
            }
          />
          <CardContent sx={{ height: '80%' }}>
            <Typography
              variant="body1"
              color="text.secondary"
              overflow="hidden"
              textOverflow="ellipsis"
              sx={{ height: '30%', mb: 2 }}
            >
              {`${description.substring(0, 65)}${description.length > 66 ? '...' : ''}`}
            </Typography>
            <Typography variant="body2" sx={{ height: 30 }}>
              {newCards} | {learningCards} | {scheduledCards}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}
