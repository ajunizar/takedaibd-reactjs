import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Bab6P16() {

    const navigate = useNavigate();

    const handleOnClickPreviousPage = () => {
        window.location.href = '/bab6-p15';
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }

    const handleOnClickUlang = (event) => {
        event.preventDefault();
        go(event, [{ n: 1, id: 92596, act: 'play' }, { n: 1, link: 1, id: 10506, act: 'play' }, { n: 1, id: 10484, act: 'play' }, { n: 1, id: 10528, act: 'play' }, { n: 1, id: 92571, act: 'play' }]);
    }

    const handleOnClickNextPage = (event) => {
        window.location.href = '/bab6-p17';
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
                <li className="page" data-name="47">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" style={{width:'1920px',height:'1080px'}}>
                        <div id="item178087" className="pageItem" alt="Movie">
                            <video width="1920" height="1400" data-id="178087" data-autoplay="1" data-autodelay="0" data-stoplast="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/slide 46.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item42951" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item42952" className="pageItem " data-src="assets/images/item_42952.png" />
                            <div alt="Group" style={{top:'132px'}} id="item42975" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item42976" className="pageItem " data-src="assets/images/item_42976.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item42977" className="pageItem " data-src="assets/images/item_42977.png" />
                            </div>
                        </div>
                        <button data-id="176286" name="icon back 51" onClick={handleOnClickPreviousPage} aria-label="icon back 51" id="item176286" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item176294" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item176295" className="pageItem " data-src="assets/images/item_176295.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item176297" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item176298" className="pageItem " data-src="assets/images/item_176298.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item176289" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item176291" className="pageItem " data-src="assets/images/item_176291.png" />
                            </div>
                        </button>
                        <button data-id="176300" name="icon next 51" onClick={handleOnClickNextPage} aria-label="icon next 51" id="item176300" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item176306" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item176307" className="pageItem " data-src="assets/images/item_176307.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item176309" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item176311" className="pageItem " data-src="assets/images/item_176311.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item176303" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item176304" className="pageItem " data-src="assets/images/item_176304.png" />
                            </div>
                        </button>
                        <button data-id="176313" name="button ulang 48" data-click-play="178087" aria-label="button ulang 48" id="item176313" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item176323" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item176325" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item176326" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item176327" className="pageItem " data-src="assets/images/item_176327.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item176328" className="pageItem " data-src="assets/images/item_176328.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item176330" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item176331" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#fa635e" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item176333" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item176334" className="pageItem " data-src="assets/images/item_176334.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item176336" className="pageItem " data-src="assets/images/item_176336.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item176315" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item176316" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item176318" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item176319" className="pageItem " data-src="assets/images/item_176319.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item176321" className="pageItem " data-src="assets/images/item_176321.png" />
                                </div>
                            </div>
                        </button>
                        <button data-id="221796" name="icon beranda 106" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 106" id="item221796" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221803" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221804" className="pageItem " data-src="assets/images/item_221804.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221805" className="pageItem " data-src="assets/images/item_221805.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221807" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221808" className="pageItem " data-src="assets/images/item_221808.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221809" className="pageItem " data-src="assets/images/item_221809.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221799" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221800" className="pageItem " data-src="assets/images/item_221800.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221801" className="pageItem " data-src="assets/images/item_221801.png" />
                            </div>
                        </button>
                        <Navigation />
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Bab6P16;