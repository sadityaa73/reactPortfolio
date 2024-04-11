import './App.css';
import Header from './components/headerComponent/header';
import Content from './components/contentComponent/content';
import { useState } from 'react';
function App() {
  const[active,setActive]=useState("");
  const[loc,setloc]=useState("");

  const child = (data)=>{
     setActive(data);
     return active;
  }
  return (
    <div className="mainContainer">
       <Header currentTab={active}/>
       <Content child={child} loc={loc}/>
    </div>
  );
}

export default App;
