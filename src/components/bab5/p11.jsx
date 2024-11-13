import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Bab5P11() {

    const navigate = useNavigate();

    const handleOnClickGoToBab1 = () => {
        window.location.href = '/bab1-start';
    };
    //var referrer = document.referrer;
    //console.log("referrer url",referrer);
    const handleOnClickBack = () => {
        window.location.href = '/Quiz40';
    };
    const handleOnClickPreviousPage = () => {
        window.location.href = '/bab5-p10';
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }

    const handleOnClickUlang = (event) => {
        event.preventDefault();
        go(event, [{ n: 1, id: 92596, act: 'play' }, { n: 1, link: 1, id: 10506, act: 'play' }, { n: 1, id: 10484, act: 'play' }, { n: 1, id: 10528, act: 'play' }, { n: 1, id: 92571, act: 'play' }]);
    }

    const handleOnClickNextPage = (event) => {
        window.location.href = '/bab6-start';
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
                <li className="page" data-name="30">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" style={{width:'1920px',height:'1080px'}}>
                        <div id="item164913" className="pageItem" alt="Movie">
                            <video width="1920" height="1400" data-id="164913" data-autoplay="1" data-autodelay="0" data-stoplast="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/slide 29.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item26039" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item26040" className="pageItem " data-src="assets/images/item_26040.png" />
                            <div alt="Group" style={{top:'132px'}} id="item26063" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item26064" className="pageItem " data-src="assets/images/item_26064.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item26065" className="pageItem " data-src="assets/images/item_26065.png" />
                            </div>
                        </div>
                        <button data-id="141324" name="icon back 36" onClick={handleOnClickPreviousPage} aria-label="icon back 36" id="item141324" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item141332" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item141333" className="pageItem " data-src="assets/images/item_141333.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item141335" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item141336" className="pageItem " data-src="assets/images/item_141336.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item141327" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item141329" className="pageItem " data-src="assets/images/item_141329.png" />
                            </div>
                        </button>
                        <button data-id="141338" name="icon next 36" onClick={handleOnClickNextPage} aria-label="icon next 36" id="item141338" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item141344" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item141345" className="pageItem " data-src="assets/images/item_141345.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item141347" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item141349" className="pageItem " data-src="assets/images/item_141349.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item141341" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item141342" className="pageItem " data-src="assets/images/item_141342.png" />
                            </div>
                        </button>
                        <button data-id="141366" name="button ulang 33" data-click-play="164913" aria-label="button ulang 33" id="item141366" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item141377" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item141378" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item141379" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item141380" className="pageItem " data-src="assets/images/item_141380.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item141381" className="pageItem " data-src="assets/images/item_141381.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item141383" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item141384" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#fa635e" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item141386" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item141387" className="pageItem " data-src="assets/images/item_141387.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item141389" className="pageItem " data-src="assets/images/item_141389.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item141369" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item141370" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item141372" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item141373" className="pageItem " data-src="assets/images/item_141373.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item141375" className="pageItem " data-src="assets/images/item_141375.png" />
                                </div>
                            </div>
                        </button>
                        <button data-id="221511" name="icon beranda 91" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 91" id="item221511" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221518" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221519" className="pageItem " data-src="assets/images/item_221519.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221520" className="pageItem " data-src="assets/images/item_221520.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221522" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221523" className="pageItem " data-src="assets/images/item_221523.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221524" className="pageItem " data-src="assets/images/item_221524.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221514" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221515" className="pageItem " data-src="assets/images/item_221515.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221516" className="pageItem " data-src="assets/images/item_221516.png" />
                            </div>
                        </button>
                        <Navigation />
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Bab5P11;