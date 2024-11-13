import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Bab6P5() {

    const navigate = useNavigate();

    const handleOnClickPreviousPage = () => {
        window.location.href = '/bab6-p4';
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }

    const handleOnClickUlang = (event) => {
        event.preventDefault();
        go(event, [{ n: 1, id: 92596, act: 'play' }, { n: 1, link: 1, id: 10506, act: 'play' }, { n: 1, id: 10484, act: 'play' }, { n: 1, id: 10528, act: 'play' }, { n: 1, id: 92571, act: 'play' }]);
    }

    const handleOnClickNextPage = (event) => {
        window.location.href = '/bab6-p6';
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
                <li className="page" data-name="36">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" style={{width:'1920px',height:'1080px'}}>
                        <div id="item165655" className="pageItem" alt="Movie">
                            <video width="1920" height="1400" data-id="165655" data-autoplay="1" data-autodelay="0" data-stoplast="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/slide 35.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <button data-id="165668" name="icon back 25" onClick={handleOnClickPreviousPage} aria-label="icon back 25" id="item165668" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item165676" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src="assets/images/blank.gif" alt="Polygon" style={{left:'21px',top:'14px'}} id="item165678" className="pageItem " data-src="assets/images/item_165678.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item165671" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src="assets/images/blank.gif" alt="Polygon" style={{left:'21px',top:'14px'}} id="item165673" className="pageItem " data-src="assets/images/item_165673.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item165681" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src="assets/images/blank.gif" alt="Polygon" style={{left:'21px',top:'14px'}} id="item165682" className="pageItem " data-src="assets/images/item_165682.png" />
                            </div>
                        </button>
                        <button data-id="165683" name="icon next 25" onClick={handleOnClickNextPage} aria-label="icon next 25" id="item165683" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item165690" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src="assets/images/blank.gif" alt="Polygon" style={{left:'23px',top:'14px'}} id="item165691" className="pageItem " data-src="assets/images/item_165691.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item165686" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src="assets/images/blank.gif" alt="Polygon" style={{left:'23px',top:'14px'}} id="item165687" className="pageItem " data-src="assets/images/item_165687.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item165693" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src="assets/images/blank.gif" alt="Polygon" style={{left:'23px',top:'14px'}} id="item165694" className="pageItem " data-src="assets/images/item_165694.png" />
                            </div>
                        </button>
                        <button data-id="165695" name="icon beranda 30" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 30" id="item165695" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item165702" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src="assets/images/blank.gif" alt="Polygon" style={{left:'14px',top:'15px'}} id="item165703" className="pageItem " data-src="assets/images/item_165703.png" />
                                <img src="assets/images/blank.gif" alt="Polygon" style={{left:'17px',top:'18px'}} id="item165704" className="pageItem " data-src="assets/images/item_165704.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item165706" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src="assets/images/blank.gif" alt="Polygon" style={{left:'14px',top:'15px'}} id="item165707" className="pageItem " data-src="assets/images/item_165707.png" />
                                <img src="assets/images/blank.gif" alt="Polygon" style={{left:'17px',top:'18px'}} id="item165708" className="pageItem " data-src="assets/images/item_165708.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item165698" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src="assets/images/blank.gif" alt="Polygon" style={{left:'17px',top:'18px'}} id="item165699" className="pageItem " data-src="assets/images/item_165699.png" />
                                <img src="assets/images/blank.gif" alt="Polygon" style={{left:'14px',top:'15px'}} id="item165700" className="pageItem " data-src="assets/images/item_165700.png" />
                            </div>
                        </button>
                        <button data-id="165710" name="button ulang 29" data-click-play="165655" aria-label="button ulang 29" id="item165710" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item165720" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item165721" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item165723" className="pageItem group ">
                                    <img src="assets/images/blank.gif" alt="Polygon" style={{top:'20px'}} id="item165724" className="pageItem " data-src="assets/images/item_165724.png" />
                                    <img src="assets/images/blank.gif" alt="Polygon" style={{left:'4px'}} id="item165726" className="pageItem " data-src="assets/images/item_165726.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item165713" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item165714" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#3055ad" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item165715" className="pageItem group ">
                                    <img src="assets/images/blank.gif" alt="Polygon" style={{top:'20px'}} id="item165716" className="pageItem " data-src="assets/images/item_165716.png" />
                                    <img src="assets/images/blank.gif" alt="Polygon" style={{left:'4px'}} id="item165718" className="pageItem " data-src="assets/images/item_165718.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item165728" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item165729" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item165730" className="pageItem group ">
                                    <img src="assets/images/blank.gif" alt="Polygon" style={{top:'20px'}} id="item165731" className="pageItem " data-src="assets/images/item_165731.png" />
                                    <img src="assets/images/blank.gif" alt="Polygon" style={{left:'4px'}} id="item165732" className="pageItem " data-src="assets/images/item_165732.png" />
                                </div>
                            </div>
                        </button>
                        <Navigation />
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item30423" className="pageItem group ">
                            <img src="assets/images/blank.gif" alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item30424" className="pageItem " data-src="assets/images/item_30424.png" />
                            <div alt="Group" style={{top:'132px'}} id="item30447" className="pageItem group ">
                                <img src="assets/images/blank.gif" alt="Polygon" id="item30448" className="pageItem " data-src="assets/images/item_30448.png" />
                                <img src="assets/images/blank.gif" alt="Polygon" style={{left:'3px',top:'4px'}} id="item30449" className="pageItem " data-src="assets/images/item_30449.png" />
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Bab6P5;