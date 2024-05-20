import { Link } from 'react-router-dom'
import { Button, styled } from '@mui/material'
import { useColor } from '@/hooks/useColor'

interface Props {
  text: string
  url: string
}

export const HeaderButton: React.FC<Props> = ({ text, url }) => {
  const { color } = useColor()
  const CustomButton = styled(Button)({
    color: color.black,
    '&:hover': {
      backgroundColor: color.blueDark,
    },
  })

  return (
    <Link to={url}>
      <CustomButton>{text}</CustomButton>
    </Link>
  )
}
