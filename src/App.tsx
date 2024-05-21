import { RouterProvider } from 'react-router-dom'
import { router } from '@/routes/router'

function App() {
  return (
    <div id='app' className='app'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
