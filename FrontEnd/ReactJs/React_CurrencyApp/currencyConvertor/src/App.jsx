import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
       
        <div className='w-full max-w-4xl h-max mx-auto mt-10 bg-slate-50 border-2 border-slate-100  rounded-lg'>
        <h1 className='text-center '>Password Generator </h1>
        <div className='flex justify-center items-center mt-5 w-full max-w-5xl '>
          <input  className="w-8/12 p-2 bg-blue-50" type="text"  />
          <button className='bg-blue-500 p-2 rounded-r-2xl'>Copy </button>
        </div>
        <div className='flex gap-5  justify-center items-center mt-5 w-full max-w-5xl'  >
          <input type="checkbox" />Number 
          <input type="checkbox" />Character
          <input type="checkbox" />
        </div>
        
        </div>
    </>
  )
}

export default App
