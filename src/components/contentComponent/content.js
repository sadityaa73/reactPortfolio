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

export default function Content() {
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
          <img src={vue} alt="vue.js" className="skill1"/>
          <img src={react} alt="react.js" className="skill2"/>
          <img src={js} alt="javascript" className="skill3"/>
          <img src={html} alt="html" className="skill4"/>
          <img src={css} alt="css" className="skill5"/>
          <img src={wordpress} alt="wordpress" className="skill6"/>
          <img src={node} alt="node.js" className="skill7"/>
          <div className="sec1Content">
            <div className="yellow"></div>
            <div className="sec1_content">
              <div className="text-anim-type">
                <div className="line">
                  <p style={{margin:"0px",fontSize:"28px",fontFamily:"Pixelify Sans"}}>01</p>
                  <h2 style={{margin:"0px",marginLeft:"4px",fontSize:"40px",fontFamily:"Pixelify Sans"}}>{"<"} Hi , I'm <span style={{color:"#ddba07"}}> Aditya </span>{">"}</h2>
                </div>
                <div className="line">
                  <p style={{margin:"0px",fontSize:"28px",fontFamily:"Pixelify Sans"}}>02</p>
                  <h2 style={{margin:"0px",marginLeft:"4px",fontSize:"40px",fontFamily:"Pixelify Sans"}}>{"<"} I <span style={{color:"#ddba07"}} > Design </span><span><img src={design} alt="design" style={{width: "28px",height: "27px",objectFit:"cover"}}/></span> and <span style={{color:"#ddba07"}}> Develop </span><span><img src={develop} alt="develop" style={{width: "28px",height: "27px",objectFit:"cover"}}/></span>{">"}</h2>
                </div>
                <div className="line">
                  <p style={{margin:"0px",fontSize:"28px",fontFamily:"Pixelify Sans"}}>03 </p>
                  <h2 style={{color:"#ddba07",margin:"0px",marginLeft:"4px",fontSize:"40px",fontFamily:"Pixelify Sans"}}> Web Sites .</h2><h2 style={{margin:"0px",marginLeft:"4px",fontSize:"40px",fontFamily:"Pixelify Sans"}}> {">"}</h2>
                </div>
              </div>
            </div>
            <div className="belowline">
                  <h2 style={{color:"black",margin:"0px",marginLeft:"4px",fontSize:"40px",fontFamily:"Pixelify Sans"}}> I also design your branding logo... </h2>
                </div>
          </div>
          <a className="btn-readMore"><h6>readMore</h6><span><img src={arrow} alt="downArrow"/></span></a>
        </section>
        <section className="introSec" id="sec01">
          <div className="intro"></div>
        </section>
        <section className="introSec" id="sec01">
          <div className="intro"></div>
        </section>
        <section className="introSec" id="sec03">
          <div className="intro"></div>
        </section><section className="introSec" id="sec01">
          <div className="intro"></div>
        </section>
        <section className="introSec" id="sec01">
          <div className="intro"></div>
        </section><section className="introSec" id="sec01">
          <div className="intro"></div>
        </section>
        <section className="introSec" id="sec01">
          <div className="intro"></div>
        </section><section className="introSec" id="sec01">
          <div className="intro"></div>
        </section>
        <section className="introSec" id="sec01">
          <div className="intro"></div>
        </section>
    </div>
  );
}
