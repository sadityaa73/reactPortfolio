import { useState } from "react";
import "./content.css";
import vue from "./assets/vue.png";
import react from "./assets/react.png";
import js from "./assets/js.png";
import html from "./assets/html.png";
import css from "./assets/css.png";
import wordpress from "./assets/wordpress.png";
import node from "./assets/nodejs.png";
import arrow from "./assets/arrowDown.png";
import work from "./assets/workWithMe.png";
import design from "./assets/design.png";
import develop from "./assets/develop.png";
import backArrow from "./assets/back arrow.png";

export default function Content(props) {
    const [scroll, setScroll] = useState(0);
    const[back,setIsBack] = useState(false);
    const isBack = ()=>{
      setIsBack(prevState => !prevState);
       if(back === false)
       {
        document.getElementById("contact-card").style.left=`${74}%`;
       }
       else{
        document.getElementById("contact-card").style.left=`${100}%`;
       }
       return back;
    }
    const onScroll = () => {
        const Scrolled = document.getElementById("scrollContainer").scrollTop;
        const MaxHeight =
            document.getElementById("scrollContainer").scrollHeight -
            document.getElementById("scrollContainer").clientHeight;
        const ScrollPercent = (Scrolled / MaxHeight) * 100;
        setScroll(ScrollPercent);
        document.getElementById("myBar").style.width=scroll+"%";

        if (ScrollPercent > 15)
        {
           props.child("home");
           document.getElementById("sec02Skill").style.display="flex";
        }
        else{
          document.getElementById("sec02Skill").style.display="none";
        }
        if (ScrollPercent > 35)
        {
          props.child("portfolio");
           document.getElementById("skill-container").style.display="flex";
           document.getElementById("sec2BelowLine").style.display="flex";
        }
        else{
          document.getElementById("skill-container").style.display="none";
          document.getElementById("sec2BelowLine").style.display="none";
        }
        if (ScrollPercent > 65)
        {
          props.child("who i am");
           document.getElementById("sec03Portfolio").style.display="flex";
           document.getElementById("sec3BelowLine").style.display="flex";
        }
        else{
          document.getElementById("sec03Portfolio").style.display="none";
          document.getElementById("sec3BelowLine").style.display="none";
        }
  };
  return (
    <div className="contentContainer" id="scrollContainer" onScroll={onScroll}>
        <div className="pageScrollerLoader">
          <div className="progressLoader" id="myBar" style={{width:`${scroll}%`}}></div>
        </div>
        <section className="introSec" id="sec01">
          <div className="back"></div>
          <div className="contact"onClick={isBack} >
            <img src={work} alt="" className="contact-img"></img>
          </div>
          <div className="contactCard" id="contact-card">
            <div className="back-btn" onClick={isBack}>
              <button className="btn"><span style={{marginTop:"5px"}}><img src={backArrow} alt=""/></span>Back</button>
            </div>
            <div className="contact-conatiner">
              <p style={{fontSize:"25px",color:"grey",margin:"92px 0px 0px 18px"}}>Contact</p>
              <h6 style={{fontSize:"26px",color:"black",margin:"10px 0px 0px 18px"}}>sadityaa73@gmail.com</h6>
              <h6 style={{fontSize:"26px",color:"black",margin:"10px 0px 0px 18px"}}>+91-8709042918</h6>
            </div>
            <hr style={{border:"1px solid black",width:"90%"}}/>
            <div className="contact-info-container" style={{margin:"0px 0px 0px 18px",width:"100%",height:"30%"}}>
              <div style={{border: "1px solid black",borderRadius: "5px",width: "80%",marginTop:"20px",overflow:"hidden"}}><input type="text" placeholder="Your Email" style={{border: "none",width: "98%",height:"98%",textAlign: "center",fontSize: "20px",color: "black"}}/></div>
              <div style={{border: "1px solid black",borderRadius: "5px",width: "80%",marginTop:"20px",overflow:"hidden"}}><input type="text" placeholder="Your Full Name" style={{border: "none",width: "98%",height:"98%",textAlign: "center",fontSize: "20px",color: "black"}}/></div>
              <div style={{border: "1px solid black",borderRadius: "5px",width: "80%",height:"70%",marginTop:"20px",overflow:"hidden"}}><textarea  placeholder="How Can I Help you ?" style={{border: "none",width: "98%",height:"98%",textAlign: "center",fontSize: "20px",color: "black"}}/></div>
            </div>
            <div className="send-btn"><button className="send">send</button></div>
          </div>
          <img src={vue} alt="vue.js" className="skill1" id="Skill1"/>
          <img src={react} alt="react.js" className="skill2" id="Skill2"/>
          <img src={js} alt="javascript" className="skill3" id="Skill3"/>
          <img src={html} alt="html" className="skill4" id="Skill4"/>
          <img src={css} alt="css" className="skill5" id="Skill5"/>
          <img src={wordpress} alt="wordpress" className="skill6" id="Skill6"/>
          <img src={node} alt="node.js" className="skill7" id="Skill7"/>
          <div className="sec1Content">
            <div className="yellow"></div>
            <div className="sec1_content">
              <div className="text-anim-type">
                <div className="line">
                  <p style={{margin:"0px",fontSize:"28px",fontFamily:"PT Serif"}}>01</p>
                  <h2 style={{margin:"0px",marginLeft:"4px",fontSize:"40px",fontFamily:"PT Serif"}}>{"<"} Hi , I'm <span style={{color:"#ddba07"}}> Aditya </span>{">"}</h2>
                </div>
                <div className="line">
                  <p style={{margin:"0px",fontSize:"28px",fontFamily:"PT Serif"}}>02</p>
                  <h2 style={{margin:"0px",marginLeft:"4px",fontSize:"40px",fontFamily:"PT Serif"}}>{"<"} I <span style={{color:"#ddba07"}} > Design </span><span><img src={design} alt="design" style={{width: "28px",height: "27px",objectFit:"cover"}}/></span> and <span style={{color:"#ddba07"}}> Develop </span><span><img src={develop} alt="develop" style={{width: "28px",height: "27px",objectFit:"cover"}}/></span>{">"}</h2>
                </div>
                <div className="line">
                  <p style={{margin:"0px",fontSize:"28px",fontFamily:"PT Serif"}}>03 </p>
                  <h2 style={{color:"#ddba07",margin:"0px",marginLeft:"4px",fontSize:"40px",fontFamily:"PT Serif"}}> Web Sites .</h2><h2 style={{margin:"0px",marginLeft:"4px",fontSize:"40px",fontFamily:"PT Serif"}}> {">"}</h2>
                </div>
              </div>
            </div>
            <div className="belowline">
                  <h2 style={{color:"black",margin:"0px",marginLeft:"4px",fontSize:"40px",fontFamily:"PT Serif"}}> I also design your branding logo... </h2>
            </div>
          </div>
          <a className="btn-readMore"><h6>readMore</h6><span><img src={arrow} alt="downArrow"/></span></a>
        </section>
        <section className="skill-section" id="sec02">
          <div className="back">
            <div className="sec02-skill" id="sec02Skill">
              <div className="sec02-yellow"></div>
              <div className="sec02-content">
              <p style={{marginLeft:"11px",fontSize:"28px",fontFamily:"PT Serif"}}>04 </p>
                  <h2 style={{color:"#ddba07",margin:"0px",marginLeft:"4px",fontSize:"40px",fontFamily:"PT Serif"}}> Skills.</h2><h2 style={{margin:"0px",marginLeft:"4px",fontSize:"40px",fontFamily:"PT Serif"}}> {">"}</h2>
              </div>
            </div>
          </div>
          <div className="sec02-belowline" id="sec2BelowLine">
                  <h2 style={{color:"black",margin:"0px",marginLeft:"20px",fontSize:"38px",fontFamily:"PT Serif"}}> Experienced Programmer with Proficiency in C++, JavaScript, Vue.js, Node.js, MongoDB, and More</h2>
          </div>
          <div className="sec02-skill-container" id="skill-container">
            <div className="skills">
              <img src={html} alt="skill-icon" className="skill-icon"/>
            </div>
            <div className="skills">
              <img src={css} alt="skill-icon" className="skill-icon"/>
            </div>
            <div className="skills">
              <img src={js} alt="skill-icon" className="skill-icon"/>
            </div>
            <div className="skills">
              <img src={vue} alt="skill-icon" className="skill-icon"/>
            </div>
            <div className="skills">
              <img src={react} alt="skill-icon" className="skill-icon"/>
            </div>
            <div className="skills">
              <img src={wordpress} alt="skill-icon" className="skill-icon"/>
            </div>
            <div className="skills">
              <img src={node} alt="skill-icon" className="skill-icon"/>
            </div>
          </div>
        </section>
        <section className="portfolio-section" id="sec03">
          <div className="back-sec03">
            <div className="sec03-porfolio" id="sec03Portfolio">
              <div className="sec03-yellow"></div>
              <div className="sec03-content">
              <p style={{marginLeft:"11px",fontSize:"28px",fontFamily:"PT Serif"}}>05 </p>
                  <h2 style={{color:"#ddba07",margin:"0px",marginLeft:"4px",fontSize:"40px",fontFamily:"PT Serif"}}> Portfolio.</h2><h2 style={{margin:"0px",marginLeft:"4px",fontSize:"40px",fontFamily:"PT Serif"}}> {">"}</h2>
              </div>
            </div>
          </div>
          <div className="sec03-belowline" id="sec3BelowLine">
                  <h2 style={{color:"black",margin:"0px",marginLeft:"20px",fontSize:"38px",fontFamily:"PT Serif"}}> Welcome to my portfolio, where creativity meets functionality, showcasing my passion for Design & Development .</h2>
          </div>
        </section>
    </div>
  );
}
