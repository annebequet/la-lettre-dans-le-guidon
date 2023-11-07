import { useEffect, useState } from 'react'



function App() {
  [count] = useState(0);
useEffect(()=>{
  console.log({count});
},[count]);
  return (
   <div>
    <p>Salut je suis un futur stylée de Vélo Litteraire</p>
   </div>
  )
}

export default App
