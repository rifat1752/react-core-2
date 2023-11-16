
import './App.css'
import Team from './Team';
import User from './User';
import Friends from './Friends';

function App() {
  function handleClick(){
    alert('button clicked');

  }

  const handleClick2=()=>{
    alert('button 2 clicked'); 
  }


  const adToFive= (num) =>{
    alert(num+5);
  }
  return (
    <>
  
           <Team></Team>
      <h1>counter 0</h1>
      <button onClick={handleClick}>add</button>
      <button onClick={handleClick2}>Reduce</button>
      <button onClick={()=>{alert('clicked 3')} }>click me</button>
      <button onClick={()=>adToFive(4)}>four</button>


        <User></User>   
        <Friends></Friends>   
    </>
  )
}

export default App
