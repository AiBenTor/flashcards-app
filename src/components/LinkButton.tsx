import { Link } from 'react-router-dom'
import { HeaderButton } from './HeaderButton'
import { useMobileMenu } from '@/hooks/useMobileMenu'

interface Props {
  text: string
  url: string
}

export const LinkButton: React.FC<Props> = ({ text, url }) => {
  const { closeMenu } = useMobileMenu()

  return (
    <Link to={url}>
      <HeaderButton text={text} handleClick={closeMenu} />
    </Link>
  )
}
