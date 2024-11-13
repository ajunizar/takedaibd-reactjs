import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Bab5P7() {

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
        window.location.href = '/bab5-p6';
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }

    const handleOnClickUlang = (event) => {
        event.preventDefault();
        go(event, [{ n: 1, id: 92596, act: 'play' }, { n: 1, link: 1, id: 10506, act: 'play' }, { n: 1, id: 10484, act: 'play' }, { n: 1, id: 10528, act: 'play' }, { n: 1, id: 92571, act: 'play' }]);
    }

    const handleOnClickNextPage = (event) => {
        window.location.href = '/bab5-p8';
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
                <li className="page" data-name="26">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" style={{width:'1920px',height:'1080px'}}>
                        <div id="item163044" className="pageItem" alt="Movie">
                            <video width="1920" height="1400" data-id="163044" data-autoplay="1" data-autodelay="0" data-stoplast="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/slide 25.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <Navigation />
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item18341" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item18342" className="pageItem " data-src="assets/images/item_18342.png" />
                            <div alt="Group" style={{top:'132px'}} id="item18365" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item18366" className="pageItem " data-src="assets/images/item_18366.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item18367" className="pageItem " data-src="assets/images/item_18367.png" />
                            </div>
                        </div>
                        <button data-id="130702" name="icon back 23" onClick={handleOnClickPreviousPage} aria-label="icon back 23" id="item130702" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item130711" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item130712" className="pageItem " data-src="assets/images/item_130712.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item130714" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item130715" className="pageItem " data-src="assets/images/item_130715.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item130705" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item130707" className="pageItem " data-src="assets/images/item_130707.png" />
                            </div>
                        </button>
                        <button data-id="130717" name="icon next 23" onClick={handleOnClickNextPage} aria-label="icon next 23" id="item130717" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item130723" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item130724" className="pageItem " data-src="assets/images/item_130724.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item130726" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item130728" className="pageItem " data-src="assets/images/item_130728.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item130720" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item130721" className="pageItem " data-src="assets/images/item_130721.png" />
                            </div>
                        </button>
                        <button data-id="130744" name="button ulang 25" data-click-play="163044" aria-label="button ulang 25" id="item130744" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item130755" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item130756" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item130758" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item130759" className="pageItem " data-src="assets/images/item_130759.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item130760" className="pageItem " data-src="assets/images/item_130760.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item130762" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item130763" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#fa635e" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item130766" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item130767" className="pageItem " data-src="assets/images/item_130767.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item130769" className="pageItem " data-src="assets/images/item_130769.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item130747" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item130748" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item130750" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item130751" className="pageItem " data-src="assets/images/item_130751.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item130753" className="pageItem " data-src="assets/images/item_130753.png" />
                                </div>
                            </div>
                        </button>
                        <button data-id="221443" name="icon beranda 87" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 87" id="item221443" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221450" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221451" className="pageItem " data-src="assets/images/item_221451.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221452" className="pageItem " data-src="assets/images/item_221452.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221454" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221455" className="pageItem " data-src="assets/images/item_221455.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221456" className="pageItem " data-src="assets/images/item_221456.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221446" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221447" className="pageItem " data-src="assets/images/item_221447.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221448" className="pageItem " data-src="assets/images/item_221448.png" />
                            </div>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Bab5P7;