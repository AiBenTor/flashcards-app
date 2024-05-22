import { IconButton } from '@mui/material'
import { Delete } from '@mui/icons-material'

export const DeleteButton = () => {
  return (
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
  )
}
