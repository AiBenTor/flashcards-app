import { Params } from 'react-router-dom'

export interface DeckLoader {
  deckId: `${string}-${string}-${string}-${string}-${string}`
}

export async function loader({ params }: { params: Params }): Promise<DeckLoader> {
  // Throw Error when deck does not exit
  // throw new Response('', {
  //   status: 404,
  //   statusText: 'Not Found',
  // })

  return { deckId: params.deckId as DeckLoader['deckId'] }
}
