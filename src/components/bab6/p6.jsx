import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Bab6P6() {

    const navigate = useNavigate();

    const handleOnClickPreviousPage = () => {
        window.location.href = '/bab6-p5';
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }

    const handleOnClickUlang = (event) => {
        event.preventDefault();
        go(event, [{ n: 1, id: 92596, act: 'play' }, { n: 1, link: 1, id: 10506, act: 'play' }, { n: 1, id: 10484, act: 'play' }, { n: 1, id: 10528, act: 'play' }, { n: 1, id: 92571, act: 'play' }]);
    }

    const handleOnClickNextPage = (event) => {
        window.location.href = '/bab6-p7';
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
                <li className="page" data-name="37">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" style={{width:'1920px',height:'1080px'}}>
                        <img src={blankImage} alt="Polygon" style={{left:'1800px',top:'275px'}} id="item69824" className="pageItem " data-src="assets/images/item_69824.png" />
                        <div id="item182266" className="pageItem" alt="Movie">
                            <video width="1920" height="1400" data-id="182266" data-autoplay="1" data-autodelay="0" data-stoplast="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/slide 36.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item30849" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item30850" className="pageItem " data-src="assets/images/item_30850.png" />
                            <div alt="Group" style={{top:'132px'}} id="item30873" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item30874" className="pageItem " data-src="assets/images/item_30874.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item30875" className="pageItem " data-src="assets/images/item_30875.png" />
                            </div>
                        </div>
                        <button data-id="171689" name="icon back 45" onClick={handleOnClickPreviousPage} aria-label="icon back 45" id="item171689" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item171697" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item171698" className="pageItem " data-src="assets/images/item_171698.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item171700" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item171702" className="pageItem " data-src="assets/images/item_171702.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item171692" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item171694" className="pageItem " data-src="assets/images/item_171694.png" />
                            </div>
                        </button>
                        <button data-id="171704" name="icon next 45" onClick={handleOnClickNextPage} aria-label="icon next 45" id="item171704" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item171710" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item171711" className="pageItem " data-src="assets/images/item_171711.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item171713" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item171715" className="pageItem " data-src="assets/images/item_171715.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item171707" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item171708" className="pageItem " data-src="assets/images/item_171708.png" />
                            </div>
                        </button>
                        <button data-id="171717" name="button ulang 42" data-click-play="182266,182266" aria-label="button ulang 42" id="item171717" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item171727" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item171728" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item171729" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item171730" className="pageItem " data-src="assets/images/item_171730.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item171731" className="pageItem " data-src="assets/images/item_171731.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item171733" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item171734" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#fa635e" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item171736" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item171737" className="pageItem " data-src="assets/images/item_171737.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item171739" className="pageItem " data-src="assets/images/item_171739.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item171719" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item171720" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item171722" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item171723" className="pageItem " data-src="assets/images/item_171723.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item171725" className="pageItem " data-src="assets/images/item_171725.png" />
                                </div>
                            </div>
                        </button>
                        <button data-id="221622" name="icon beranda 96" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 96" id="item221622" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221630" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221631" className="pageItem " data-src="assets/images/item_221631.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221632" className="pageItem " data-src="assets/images/item_221632.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221634" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221635" className="pageItem " data-src="assets/images/item_221635.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221636" className="pageItem " data-src="assets/images/item_221636.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221625" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221626" className="pageItem " data-src="assets/images/item_221626.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221627" className="pageItem " data-src="assets/images/item_221627.png" />
                            </div>
                        </button>
                        <Navigation />
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Bab6P6;