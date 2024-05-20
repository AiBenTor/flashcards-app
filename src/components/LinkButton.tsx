import { Link } from 'react-router-dom'
import { HeaderButton } from './HeaderButton'

interface Props {
  text: string
  url: string
}

export const LinkButton: React.FC<Props> = ({ text, url }) => {
  return (
    <Link to={url}>
      <HeaderButton text={text} />
    </Link>
  )
}
