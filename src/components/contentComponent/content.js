import { useState } from "react";
import "./content.css";
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
  window.addEventListener("scroll",onScroll);
  return (
    <div className="contentContainer" id="scrollContainer" onScroll={onScroll}>
        <div className="pageScrollerLoader">
          <div className="progressLoader" id="myBar" style={{width:`${scroll}%`}}></div>
        </div>
        <section className="introSec" id="sec01">
          <div className="intro"></div>
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
