import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Bab6P12() {

    const navigate = useNavigate();

    const handleOnClickPreviousPage = () => {
        window.location.href = '/bab6-p11';
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }

    const handleOnClickUlang = (event) => {
        event.preventDefault();
        go(event, [{ n: 1, id: 92596, act: 'play' }, { n: 1, link: 1, id: 10506, act: 'play' }, { n: 1, id: 10484, act: 'play' }, { n: 1, id: 10528, act: 'play' }, { n: 1, id: 92571, act: 'play' }]);
    }

    const handleOnClickNextPage = (event) => {
        window.location.href = '/bab6-p13';
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
                <li className="page" data-name="43">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" style={{width:'1920px',height:'1080px'}}>
                        <img src={blankImage} alt="Polygon" style={{left:'-2950px',top:'432px'}} id="item70235" className="pageItem " data-src="assets/images/item_70235.png" />
                        <div id="item175758" className="pageItem" alt="Movie">
                            <video width="1920" height="1400" data-id="175758" data-autoplay="1" data-autodelay="0" data-stoplast="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/slide 42.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item37145" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item37146" className="pageItem " data-src="assets/images/item_37146.png" />
                            <div alt="Group" style={{top:'132px'}} id="item37169" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item37170" className="pageItem " data-src="assets/images/item_37170.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item37171" className="pageItem " data-src="assets/images/item_37171.png" />
                            </div>
                        </div>
                        <button data-id="173925" name="icon back 47" onClick={handleOnClickPreviousPage} aria-label="icon back 47" id="item173925" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item173933" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item173934" className="pageItem " data-src="assets/images/item_173934.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item173936" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item173937" className="pageItem " data-src="assets/images/item_173937.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item173928" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item173930" className="pageItem " data-src="assets/images/item_173930.png" />
                            </div>
                        </button>
                        <button data-id="173939" name="icon next 47" onClick={handleOnClickNextPage} aria-label="icon next 47" id="item173939" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item173945" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item173946" className="pageItem " data-src="assets/images/item_173946.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item173949" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item173951" className="pageItem " data-src="assets/images/item_173951.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item173942" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item173943" className="pageItem " data-src="assets/images/item_173943.png" />
                            </div>
                        </button>
                        <button data-id="173953" name="button ulang 44" data-click-play="175758" aria-label="button ulang 44" id="item173953" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item173963" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item173964" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item173965" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item173966" className="pageItem " data-src="assets/images/item_173966.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item173967" className="pageItem " data-src="assets/images/item_173967.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item173969" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item173970" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#fa635e" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item173972" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item173973" className="pageItem " data-src="assets/images/item_173973.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item173975" className="pageItem " data-src="assets/images/item_173975.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item173955" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item173956" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item173958" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item173959" className="pageItem " data-src="assets/images/item_173959.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item173961" className="pageItem " data-src="assets/images/item_173961.png" />
                                </div>
                            </div>
                        </button>
                        <button data-id="221733" name="icon beranda 102" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 102" id="item221733" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221740" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221741" className="pageItem " data-src="assets/images/item_221741.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221742" className="pageItem " data-src="assets/images/item_221742.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221744" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221745" className="pageItem " data-src="assets/images/item_221745.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221746" className="pageItem " data-src="assets/images/item_221746.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221736" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221737" className="pageItem " data-src="assets/images/item_221737.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221738" className="pageItem " data-src="assets/images/item_221738.png" />
                            </div>
                        </button>
                        <Navigation />
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Bab6P12;