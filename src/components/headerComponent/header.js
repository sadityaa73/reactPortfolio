import "./header.css";
import home from "./assets/home.png";
import Contact from "./assets/contact.png";
import profolio from  "./assets/porfolio.png";
import code from "./assets/code.png";
import insta from "./assets/instagram.png";
import facebook from "./assets/facebook.png";
import dp from "./assets/profile.png"
export default function Header() {
  return (
    <div className="header">
      <div className="dpContainer">
        <div className="dp">
          <img src={dp} alt="dp image" />
        </div>
      </div>
      <div className="navigationContainer">
        <a className="anchor">
            <img src={home} alt="Home"/>
            <h5>Home</h5>
        </a>
        <a className="anchor">
            <img src={profolio} alt=""/>
            <h5>Portfolio</h5>
        </a>
        <a className="anchor">
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
