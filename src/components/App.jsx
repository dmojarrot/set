import Card from './Card'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className='bg-gradient-to-r from-zinc-700 to-zinc-900 dark:bg-gray-100 h-screen'>
      <div className='flex justify-center'>
        <Card />
        <Toaster />
      </div>
    </div>
  )
}

export default App
