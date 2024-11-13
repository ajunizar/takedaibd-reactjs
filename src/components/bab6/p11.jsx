import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Bab6P11() {

    const navigate = useNavigate();

    const handleOnClickPreviousPage = () => {
        window.location.href = '/bab6-p10';
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }

    const handleOnClickUlang = (event) => {
        event.preventDefault();
        go(event, [{ n: 1, id: 92596, act: 'play' }, { n: 1, link: 1, id: 10506, act: 'play' }, { n: 1, id: 10484, act: 'play' }, { n: 1, id: 10528, act: 'play' }, { n: 1, id: 92571, act: 'play' }]);
    }

    const handleOnClickNextPage = (event) => {
        window.location.href = '/bab6-p12';
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
                <li className="page" data-name="42">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" style={{width:'1920px',height:'1080px'}}>
                        <img src={blankImage} alt="Polygon" style={{left:'1002px',top:'385px'}} id="item172415" className="pageItem " data-src="assets/images/item_172415.png" />
                        <div id="item175745" className="pageItem" alt="Movie">
                            <video width="1920" height="1400" data-id="175745" data-autoplay="1" data-autodelay="0" data-stoplast="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/slide 41.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item35277" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item35278" className="pageItem " data-src="assets/images/item_35278.png" />
                            <div alt="Group" style={{top:'132px'}} id="item35301" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item35302" className="pageItem " data-src="assets/images/item_35302.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item35303" className="pageItem " data-src="assets/images/item_35303.png" />
                            </div>
                        </div>
                        <button data-id="173293" name="icon back 46" onClick={handleOnClickPreviousPage} aria-label="icon back 46" id="item173293" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item173301" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item173302" className="pageItem " data-src="assets/images/item_173302.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item173304" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item173305" className="pageItem " data-src="assets/images/item_173305.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item173296" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item173298" className="pageItem " data-src="assets/images/item_173298.png" />
                            </div>
                        </button>
                        <button data-id="173307" name="icon next 46" onClick={handleOnClickNextPage} aria-label="icon next 46" id="item173307" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item173313" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item173314" className="pageItem " data-src="assets/images/item_173314.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item173316" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item173318" className="pageItem " data-src="assets/images/item_173318.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item173310" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item173311" className="pageItem " data-src="assets/images/item_173311.png" />
                            </div>
                        </button>
                        <button data-id="173320" name="button ulang 43" data-click-play="175745" aria-label="button ulang 43" id="item173320" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item173330" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item173331" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item173332" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item173333" className="pageItem " data-src="assets/images/item_173333.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item173334" className="pageItem " data-src="assets/images/item_173334.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item173336" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item173337" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#fa635e" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item173339" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item173340" className="pageItem " data-src="assets/images/item_173340.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item173343" className="pageItem " data-src="assets/images/item_173343.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item173322" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item173323" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item173325" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item173326" className="pageItem " data-src="assets/images/item_173326.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item173328" className="pageItem " data-src="assets/images/item_173328.png" />
                                </div>
                            </div>
                        </button>
                        <button data-id="221713" name="icon beranda 101" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 101" id="item221713" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221720" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221721" className="pageItem " data-src="assets/images/item_221721.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221722" className="pageItem " data-src="assets/images/item_221722.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221724" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221725" className="pageItem " data-src="assets/images/item_221725.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221727" className="pageItem " data-src="assets/images/item_221727.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221716" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221717" className="pageItem " data-src="assets/images/item_221717.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221718" className="pageItem " data-src="assets/images/item_221718.png" />
                            </div>
                        </button>
                        <Navigation />
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Bab6P11;