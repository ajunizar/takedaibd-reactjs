import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Bab6P4() {

    const navigate = useNavigate();

    const handleOnClickPreviousPage = () => {
        window.location.href = '/bab6-p3';
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }

    const handleOnClickUlang = (event) => {
        event.preventDefault();
        go(event, [{ n: 1, id: 92596, act: 'play' }, { n: 1, link: 1, id: 10506, act: 'play' }, { n: 1, id: 10484, act: 'play' }, { n: 1, id: 10528, act: 'play' }, { n: 1, id: 92571, act: 'play' }]);
    }

    const handleOnClickNextPage = (event) => {
        window.location.href = '/bab6-p5';
    }

    const handleOnClickPCButton = (event) => {
        event.preventDefault();
        jQuery("#item263631 audio")[0].play();
        go(event, [{ n: 1, id: 145196, act: 'play' }, { n: 1, id: 145287, act: 'play' }, { n: 1, id: 154690, act: 'play' }, { n: 1, id: 145154, act: 'play' }, { del: 9, n: 1, id: 145155, act: 'play' }, { del: 8, n: 1, id: 145156, act: 'play' }, { del: 5.1, n: 1, id: 145157, act: 'play' }]);
    }

    const handleOnClick1xButton = (event) => {
        event.preventDefault();
        jQuery("#item263625 audio")[0].currentTime = 0;
        jQuery("#item263625 audio")[0].pause();
        go(event, [{ n: 1, link: 1, id: 145152, act: 'reverse' }, { n: 1, link: 1, id: 145151, act: 'reverse' }, { n: 1, link: 1, id: 145150, act: 'reverse' }, { n: 1, link: 1, id: 145148, act: 'reverse' }, { n: 1, link: 1, id: 145250, act: 'reverse' }, { n: 1, id: 145123, act: 'reverse' }]);
    }

    const applyGIFImportantStyles1 = (element) => {
        if (element) {
            element.style.setProperty('width', '461px', 'important');
            element.style.setProperty('height', '461px', 'important');
            element.style.setProperty('left', '754px', 'important');
            element.style.setProperty('top', '316px', 'important');
        }
    };

    const applyGIFImportantStyles2 = (element) => {
        if (element) {
            element.style.setProperty('width', '456px', 'important');
            element.style.setProperty('height', '456px', 'important');
            element.style.setProperty('left', '1256px', 'important');
            element.style.setProperty('top', '309px', 'important');
        }
    };


    return (
        <div >
            <ul className="pages" id="slider">
                <li className="page" data-name="35">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" style={{width:'1920px',height:'1080px'}}>
                        <div id="item165563" className="pageItem" alt="Movie">
                            <video width="1920" height="1400" data-id="165563" data-autoplay="1" data-autodelay="0" data-stoplast="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/slide 34.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <button data-id="165569" name="icon back 21" onClick={handleOnClickPreviousPage} aria-label="icon back 21" id="item165569" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item165578" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item165580" className="pageItem " data-src="assets/images/item_165580.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item165572" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item165575" className="pageItem " data-src="assets/images/item_165575.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item165583" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item165584" className="pageItem " data-src="assets/images/item_165584.png" />
                            </div>
                        </button>
                        <button data-id="165585" name="icon next 21" onClick={handleOnClickNextPage} aria-label="icon next 21" id="item165585" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item165592" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item165593" className="pageItem " data-src="assets/images/item_165593.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item165588" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item165589" className="pageItem " data-src="assets/images/item_165589.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item165595" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item165596" className="pageItem " data-src="assets/images/item_165596.png" />
                            </div>
                        </button>
                        <button data-id="165597" name="icon beranda 28" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 28" id="item165597" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item165604" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item165605" className="pageItem " data-src="assets/images/item_165605.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item165606" className="pageItem " data-src="assets/images/item_165606.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item165609" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item165610" className="pageItem " data-src="assets/images/item_165610.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item165611" className="pageItem " data-src="assets/images/item_165611.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item165600" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item165601" className="pageItem " data-src="assets/images/item_165601.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item165602" className="pageItem " data-src="assets/images/item_165602.png" />
                            </div>
                        </button>
                        <button data-id="165612" name="button ulang 27" data-click-play="165563" aria-label="button ulang 27" id="item165612" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item165623" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item165624" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item165626" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item165627" className="pageItem " data-src="assets/images/item_165627.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item165629" className="pageItem " data-src="assets/images/item_165629.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item165614" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item165616" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#3055ad" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item165617" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item165618" className="pageItem " data-src="assets/images/item_165618.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item165620" className="pageItem " data-src="assets/images/item_165620.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item165631" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item165632" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item165633" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item165634" className="pageItem " data-src="assets/images/item_165634.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item165635" className="pageItem " data-src="assets/images/item_165635.png" />
                                </div>
                            </div>
                        </button>
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'910px'}} id="item29784" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item29785" className="pageItem " data-src="assets/images/item_29785.png" />
                            <div alt="Group" style={{top:'132px'}} id="item29808" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item29810" className="pageItem " data-src="assets/images/item_29810.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item29811" className="pageItem " data-src="assets/images/item_29811.png" />
                            </div>
                        </div>
                        <Navigation />
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Bab6P4;