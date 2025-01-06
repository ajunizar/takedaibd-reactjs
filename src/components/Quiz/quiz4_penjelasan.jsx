import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Quiz4Penjelasan() {

    const navigate = useNavigate();

    const handleOnClickGoToQuiz4 = () => {
        window.location.href = '/quiz4'; // #54
    };
    //var referrer = document.referrer;
    //console.log("referrer url",referrer);
    const handleOnClickBack = () => {
        window.location.href = '/Quiz40';
    };
    const handleOnClickPreviousPage = () => {
        navigate(-1);
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }

    const handleOnClickCekPenjelasan = (event) => {
        window.location.href = '/FocusStudy4';
    }
    //useEffect(() => {
    /*const reloadCount = sessionStorage.getItem('reloadCountHomepage2');
    if (reloadCount == null) {
        sessionStorage.setItem('reloadCount', 1);
 
    } else {
        sessionStorage.removeItem('reloadCount');
        window.location.href = '/';
    }*/
    //}, []);

    return (
        <div >
            <ul className="pages" id="slider">
                <li className="page" data-name="59">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" style={{width:'1920px',height:'1080px'}}>
                        <div id="item227507" className="pageItem" alt="Movie">
                            <video width="1920" height="1400" data-id="227507" data-autoplay="1" data-autodelay="0" data-stoplast="1" data-nopause="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/quiz 4 penjelasan.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item196826" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item196827" className="pageItem " data-src="assets/images/item_196827.png" />
                            <div alt="Group" style={{top:'132px'}} id="item196850" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item196851" className="pageItem " data-src="assets/images/item_196851.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item196852" className="pageItem " data-src="assets/images/item_196852.png" />
                            </div>
                        </div>
                        <button data-id="219469" name="icon back 65" onClick={handleOnClickGoToQuiz4} aria-label="icon back 65" id="item219469" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item219478" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item219479" className="pageItem " data-src="assets/images/item_219479.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item219481" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item219482" className="pageItem " data-src="assets/images/item_219482.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item219473" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item219475" className="pageItem " data-src="assets/images/item_219475.png" />
                            </div>
                        </button>
                        <button data-id="222004" name="icon beranda 112" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 112" id="item222004" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item222011" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item222012" className="pageItem " data-src="assets/images/item_222012.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item222013" className="pageItem " data-src="assets/images/item_222013.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item222015" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item222016" className="pageItem " data-src="assets/images/item_222016.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item222017" className="pageItem " data-src="assets/images/item_222017.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item222007" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item222008" className="pageItem " data-src="assets/images/item_222008.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item222009" className="pageItem " data-src="assets/images/item_222009.png" />
                            </div>
                        </button>
                        <Navigation />
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Quiz4Penjelasan;