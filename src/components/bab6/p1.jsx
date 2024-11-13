import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Bab6P1() {

    const navigate = useNavigate();

    const handleOnClickPreviousPage = () => {
        window.location.href = '/bab6-start';
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }

    const handleOnClickUlang = (event) => {
        event.preventDefault();
        go(event, [{ n: 1, id: 92596, act: 'play' }, { n: 1, link: 1, id: 10506, act: 'play' }, { n: 1, id: 10484, act: 'play' }, { n: 1, id: 10528, act: 'play' }, { n: 1, id: 92571, act: 'play' }]);
    }

    const handleOnClickNextPage = (event) => {
        window.location.href = '/bab6-p2';
    }

    return (
        <div >
            <ul className="pages" id="slider">
                <li className="page" data-name="32">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" style={{width:'1920px',height:'1080px'}}>
                        <div id="item164948" className="pageItem" alt="Movie">
                            <video width="1920" height="1400" data-id="164948" data-autoplay="1" data-autodelay="0" data-stoplast="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/slide 31.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item27601" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item27602" className="pageItem " data-src="assets/images/item_27602.png" />
                            <div alt="Group" style={{top:'132px'}} id="item27625" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item27626" className="pageItem " data-src="assets/images/item_27626.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item27627" className="pageItem " data-src="assets/images/item_27627.png" />
                            </div>
                        </div>
                        <button data-id="164232" name="icon back 38" onClick={handleOnClickPreviousPage} aria-label="icon back 38" id="item164232" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item164240" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item164241" className="pageItem " data-src="assets/images/item_164241.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item164243" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item164244" className="pageItem " data-src="assets/images/item_164244.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item164235" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item164237" className="pageItem " data-src="assets/images/item_164237.png" />
                            </div>
                        </button>
                        <button data-id="164247" name="icon next 38" onClick={handleOnClickNextPage} aria-label="icon next 38" id="item164247" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item164254" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item164255" className="pageItem " data-src="assets/images/item_164255.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item164257" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item164260" className="pageItem " data-src="assets/images/item_164260.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item164251" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item164252" className="pageItem " data-src="assets/images/item_164252.png" />
                            </div>
                        </button>
                        <button data-id="164277" name="button ulang 35" data-click-play="164948" aria-label="button ulang 35" id="item164277" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item164287" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item164288" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item164289" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item164290" className="pageItem " data-src="assets/images/item_164290.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item164291" className="pageItem " data-src="assets/images/item_164291.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item164293" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item164294" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#fa635e" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item164296" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item164297" className="pageItem " data-src="assets/images/item_164297.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item164299" className="pageItem " data-src="assets/images/item_164299.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item164279" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item164280" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item164282" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item164283" className="pageItem " data-src="assets/images/item_164283.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item164285" className="pageItem " data-src="assets/images/item_164285.png" />
                                </div>
                            </div>
                        </button>
                        <button data-id="221542" name="icon beranda 93" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 93" id="item221542" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221549" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221550" className="pageItem " data-src="assets/images/item_221550.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221551" className="pageItem " data-src="assets/images/item_221551.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221553" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221554" className="pageItem " data-src="assets/images/item_221554.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221555" className="pageItem " data-src="assets/images/item_221555.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221545" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221546" className="pageItem " data-src="assets/images/item_221546.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221547" className="pageItem " data-src="assets/images/item_221547.png" />
                            </div>
                        </button>
                        <Navigation />
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Bab6P1;