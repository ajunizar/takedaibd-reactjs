import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Bab4P2() {

    const navigate = useNavigate();

    const handleOnClickGoToBab1 = () => {
        window.location.href = '/bab1-start';
    };
    //var referrer = document.referrer;
    //console.log("referrer url",referrer);
    
    const handleOnClickPreviousPage = () => {
        window.location.href = '/bab4-p1';
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }


    const handleOnClickKUButton = (event) => {
        event.preventDefault();
        jQuery("#item263625 audio")[0].play();
        go(event, [{ n: 1, link: 1, id: 145123, act: 'play' }, { n: 1, id: 145250, act: 'play' }, { n: 1, id: 154678, act: 'play' }, { n: 1, id: 145148, act: 'play' }, { del: 6.2, n: 1, id: 145150, act: 'play' }, { del: 4, n: 1, id: 145151, act: 'play' }, { del: 5.2, n: 1, id: 145152, act: 'play' }]);
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

    const handleOnClick2xButton = (event) => {
        event.preventDefault();
        jQuery("#item263631 audio")[0].currentTime = 0;
        jQuery("#item263631 audio")[0].pause();
        go(event, [{ n: 1, link: 1, id: 145157, act: 'reverse' }, { n: 1, link: 1, id: 145156, act: 'reverse' }, { n: 1, link: 1, id: 145155, act: 'reverse' }, { n: 1, link: 1, id: 145154, act: 'reverse' }, { n: 1, link: 1, id: 145287, act: 'reverse' }, { n: 1, id: 145196, act: 'reverse' }]);
    }

    const handleOnClickNextPage = (event) => {
        window.location.href = '/bab4-p3';
    }


    return (
        <div >
            <ul className="pages" id="slider">
                <li className="page" data-name="17">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" style={{width:'1920px',height:'1080px'}}>
                        <div id="item155280" className="pageItem" alt="Movie">
                            <video width="1920" height="1464" data-id="155280" data-autoplay="1" data-autodelay="0" data-stoplast="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/slide 16_1.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <Navigation />
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item9123" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item9143" className="pageItem " data-src="assets/images/item_9143.png" />
                            <div alt="Group" style={{top:'132px'}} id="item9146" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item9147" className="pageItem " data-src="assets/images/item_9147.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item9148" className="pageItem " data-src="assets/images/item_9148.png" />
                            </div>
                        </div>
                        <button data-id="105604" name="icon back 15" onClick={handleOnClickPreviousPage} aria-label="icon back 15" id="item105604" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item105611" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item105612" className="pageItem " data-src="assets/images/item_105612.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item105614" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item105615" className="pageItem " data-src="assets/images/item_105615.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item105607" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item105608" className="pageItem " data-src="assets/images/item_105608.png" />
                            </div>
                        </button>
                        <button data-id="105618" name="icon next 15" onClick={handleOnClickNextPage} aria-label="icon next 15" id="item105618" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item105624" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item105625" className="pageItem " data-src="assets/images/item_105625.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item105627" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item105629" className="pageItem " data-src="assets/images/item_105629.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item105621" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item105622" className="pageItem " data-src="assets/images/item_105622.png" />
                            </div>
                        </button>
                        <button data-id="126872" name="button ulang 15" data-click-play="155280" aria-label="button ulang 15" id="item126872" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item126884" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126885" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126886" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126887" className="pageItem " data-src="assets/images/item_126887.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126888" className="pageItem " data-src="assets/images/item_126888.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item126890" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126891" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#fa635e" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126893" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126894" className="pageItem " data-src="assets/images/item_126894.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126896" className="pageItem " data-src="assets/images/item_126896.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item126875" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126876" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126878" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126880" className="pageItem " data-src="assets/images/item_126880.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126882" className="pageItem " data-src="assets/images/item_126882.png" />
                                </div>
                            </div>
                        </button>
                        <button data-id="221295" name="icon beranda 79" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 79" id="item221295" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221302" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221303" className="pageItem " data-src="assets/images/item_221303.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221304" className="pageItem " data-src="assets/images/item_221304.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221306" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221307" className="pageItem " data-src="assets/images/item_221307.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221308" className="pageItem " data-src="assets/images/item_221308.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221298" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221299" className="pageItem " data-src="assets/images/item_221299.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221300" className="pageItem " data-src="assets/images/item_221300.png" />
                            </div>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Bab4P2;