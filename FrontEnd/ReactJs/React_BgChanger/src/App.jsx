import { useState } from "react"


function App() {
 const [color , setColor] =useState("white")

  return (
  
  
    <div className="w-full   duration-200 h-screen flex justify-center items-center "
    style={{backgroundColor:color}}>
      
      <div className="fixed gap-6 w-full max-w-2xl mx-auto flex flex-wrap justify-center items-center bottom-12 h-16 rounded-3xl inset-x-0 bg-slate-200 px-2">
      <button onClick={()=>{setColor("yellow")}} className="bg-yellow-300  rounded-3xl h-8 w-16 ">yellow</button>
      <button onClick={()=>{setColor("black")}} className="bg-black text-white rounded-3xl h-8 w-16 ">Black</button>
      <button onClick={()=>{setColor("white")}} className="bg-white rounded-3xl h-8 w-16 ">white</button>
      <button onClick={()=>{setColor("red")}} className="bg-red-800  rounded-3xl h-8 w-16 ">Red</button>
      <button onClick={()=>{setColor("green")}} className="bg-green-800  rounded-3xl h-8 w-16 ">Green</button>
      <button onClick={()=>{setColor("cyan")}} className="bg-cyan-300  rounded-3xl h-8 w-16 ">Cyan</button>
      </div>
     
    </div>
  )
}

export default App
