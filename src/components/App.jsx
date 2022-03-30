import Card from './Card'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className='bg-gradient-to-r from-zinc-700 to-zinc-900 dark:bg-gray-100 min-h-screen '>
      <div>
        <div className='flex justify-center'>
          <Card />
          <Toaster />
        </div>

        <div className='fixed md:right-0 bottom-0 pb-5 px-1'>
          <p className='text-pink-600 text-md'>In progress...</p>
          <p className='text-zinc-300 text-xs'>
            One set at a time, then refresh
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
