interface Props {
  name: string
  url: string
}

export const FooterLink: React.FC<Props> = ({ name, url }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {name}
    </a>
  )
}
