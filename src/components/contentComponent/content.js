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

export default function Content() {
    const [scroll, setScroll] = useState(0);
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
          <div className="contact">
            <img src="" alt="" className="contact-img"></img>
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
            <div className="sec1_content"></div>
          </div>
          <a className="btn-readMore"><h6>readMore</h6><span><img src={arrow} alt="downArrow"/></span></a>
        </section>
        <section className="introSec" id="sec01">
          <div className="intro"></div>
        </section>
        <section className="introSec" id="sec01">
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
        </section><section className="introSec" id="sec01">
          <div className="intro"></div>
        </section>
        <section className="introSec" id="sec01">
          <div className="intro"></div>
        </section>
    </div>
  );
}
