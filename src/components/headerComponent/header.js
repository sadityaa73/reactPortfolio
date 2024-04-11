import "./header.css";
import home from "./assets/home.png";
import Contact from "./assets/contact.png";
import profolio from  "./assets/porfolio.png";
import code from "./assets/code.png";
import insta from "./assets/instagram.png";
import facebook from "./assets/facebook.png";
import dp from "./assets/dp1.jpg";
export default function Header(props) {
  if(props.currentTab === "home")
  { 
    document.getElementById(`${props.currentTab}`).style.backgroundColor="#b79a33";
    document.getElementById(`${props.currentTab}`).style.boxShadow="1px 1px 6px -1px #b79a33";
    document.getElementById("portfolio").style.backgroundColor="white";
    document.getElementById("who i am").style.backgroundColor="white";
    document.getElementById("who i am").style.boxShadow="0px 0px 0px 0px";
    document.getElementById("portfolio").style.boxShadow="0px 0px 0px 0px";
  }
  else if( props.currentTab === "portfolio"){
    document.getElementById(`${props.currentTab}`).style.backgroundColor="#b79a33";
    document.getElementById(`${props.currentTab}`).style.boxShadow="1px 1px 6px -1px #b79a33";
    document.getElementById("home").style.backgroundColor="white";
    document.getElementById("home").style.boxShadow="0px 0px 0px 0px";
    document.getElementById("who i am").style.backgroundColor="white";
    document.getElementById("who i am").style.boxShadow="0px 0px 0px 0px";
  }
  else if( props.currentTab === "who i am")
  {
    document.getElementById(`${props.currentTab}`).style.backgroundColor="#b79a33";
    document.getElementById(`${props.currentTab}`).style.boxShadow="1px 1px 6px -1px #b79a33";
    document.getElementById("home").style.backgroundColor="white";
    document.getElementById("portfolio").style.backgroundColor="white";
    document.getElementById("portfolio").style.boxShadow="0px 0px 0px 0px";
  }
  return (
    <div className="header">
      <div className="dpContainer">
        <div className="dp">
          <img src={dp} alt="dp image" style={{borderRadius:"5px",objectFit:"cover"}}/>
        </div>
      </div>
      <div className="navigationContainer">
        <a className="anchor" id="home">
            <img src={home} alt="Home"/>
            <h5>Home</h5>
        </a>
        <a className="anchor" id="portfolio">
            <img src={profolio} alt="portfolio"/>
            <h5>Portfolio</h5>
        </a>
        <a className="anchor" id="who i am">
            <img src={Contact} alt="contact"/>
            <h5>Who i am</h5>
        </a>
      </div>
      <div className="socialContainer">
      <a className="anchor">
            <img src={code} alt="git" style={{width:"24px" ,height:"24px"}}/>
            <h5>Git</h5>
        </a>
        <a className="anchor">
            <img src={insta} alt="instagram" style={{width:"24px" ,height:"24px"}}/>
            <h5>Instagram</h5>
        </a>
        <a className="anchor">
            <img src={facebook} alt="facbook" style={{width:"24px" ,height:"24px"}}/>
            <h5>Facbook</h5>
        </a>
      </div>
    </div>
  );
}
