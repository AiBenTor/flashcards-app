import { IconButton } from '@mui/material'
import { Delete } from '@mui/icons-material'

interface Props {
  handleDelete: () => void
}

export const DeleteButton: React.FC<Props> = ({ handleDelete }) => {
  return (
    <IconButton
      onTouchStart={(event) => event.stopPropagation()}
      onMouseDown={(event) => event.stopPropagation()}
      onClick={(event) => {
        event.stopPropagation()
        event.preventDefault()
        handleDelete()
      }}
    >
      <Delete />
    </IconButton>
  )
}
