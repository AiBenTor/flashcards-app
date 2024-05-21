import { Link } from 'react-router-dom'
import { HeaderButton } from './HeaderButton'

interface Props {
  text: string
  url: string
  theme: 'light' | 'dark'
}

export const LinkButton: React.FC<Props> = ({ text, url, theme }) => {
  return (
    <Link to={url}>
      <HeaderButton text={text} theme={theme} />
    </Link>
  )
}
