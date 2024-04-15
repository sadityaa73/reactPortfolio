import './App.css';
import Header from './components/headerComponent/header';
import Content from './components/contentComponent/content';
import { useState } from 'react';
function App() {
  const[active,setActive]=useState("");
  const[mode,setMode]= useState(false);
  const child = (data)=>{
     setActive(data);
     return active;
  }
  const isMode =()=>{
     setMode(prevState => !prevState)
     if(mode === false)
     {
        document.getElementById("main-container").style.background="#202021";
     }
     else{
        document.getElementById("main-container").style.background="white";
     }
  }
  return (
    <div className="mainContainer" id="main-container">
       <Header currentTab={active}/>
       <Content child={child} Mode={isMode}/>
    </div>
  );
}

export default App;
