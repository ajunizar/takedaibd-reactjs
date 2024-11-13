import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Bab4P3() {

    const navigate = useNavigate();

    const handleOnClickGoToBab1 = () => {
        window.location.href = '/bab1-start';
    };
    //var referrer = document.referrer;
    //console.log("referrer url",referrer);
    
    const handleOnClickPreviousPage = () => {
        window.location.href = '/bab4-p2';
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }


    const handleOnClickUlang = (event) => {
        event.preventDefault();
        jQuery("#item155297 video")[0].currentTime = 0;
        jQuery("#item155297 video")[0].play();
        go(event,[{n:1,id:10022,act:'play'}]);
    }

    const handleOnClickNextPage = (event) => {
        window.location.href = '/bab5-start';
    }


    return (
        <div >
            <ul className="pages" id="slider">
                <li className="page" data-name="18">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:10022,act:'play'}], 'pageload');" style={{width:'1920px',height:'1080px'}}>
                        <div id="item155297" className="pageItem" alt="Movie">
                            <video width="1920" height="1456" data-id="155297" data-autoplay="1" data-autodelay="0" data-stoplast="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/slide 17.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div id="item150596" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <Navigation />
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item9933" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item9953" className="pageItem " data-src="assets/images/item_9953.png" />
                            <div alt="Group" style={{top:'132px'}} id="item9956" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item9957" className="pageItem " data-src="assets/images/item_9957.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item9958" className="pageItem " data-src="assets/images/item_9958.png" />
                            </div>
                        </div>
                        <button data-id="106255" name="icon back 16" onClick={handleOnClickPreviousPage} aria-label="icon back 16" id="item106255" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item106262" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item106263" className="pageItem " data-src="assets/images/item_106263.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item106265" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item106266" className="pageItem " data-src="assets/images/item_106266.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item106258" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item106260" className="pageItem " data-src="assets/images/item_106260.png" />
                            </div>
                        </button>
                        <button data-id="106268" name="icon next 16" onClick={handleOnClickNextPage} aria-label="icon next 16" id="item106268" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item106275" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item106276" className="pageItem " data-src="assets/images/item_106276.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item106278" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item106280" className="pageItem " data-src="assets/images/item_106280.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item106272" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item106273" className="pageItem " data-src="assets/images/item_106273.png" />
                            </div>
                        </button>
                        <button data-id="126915" name="button ulang 16" onClick={handleOnClickUlang} aria-label="button ulang 16" id="item126915" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item126927" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126928" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126929" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126930" className="pageItem " data-src="assets/images/item_126930.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126931" className="pageItem " data-src="assets/images/item_126931.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item126933" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126934" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#fa635e" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126936" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126937" className="pageItem " data-src="assets/images/item_126937.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126940" className="pageItem " data-src="assets/images/item_126940.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item126918" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126919" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126922" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126923" className="pageItem " data-src="assets/images/item_126923.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126925" className="pageItem " data-src="assets/images/item_126925.png" />
                                </div>
                            </div>
                        </button>
                        <button data-id="221314" name="icon beranda 80" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 80" id="item221314" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221321" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221322" className="pageItem " data-src="assets/images/item_221322.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221323" className="pageItem " data-src="assets/images/item_221323.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221325" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221327" className="pageItem " data-src="assets/images/item_221327.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221328" className="pageItem " data-src="assets/images/item_221328.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221317" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221318" className="pageItem " data-src="assets/images/item_221318.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221319" className="pageItem " data-src="assets/images/item_221319.png" />
                            </div>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Bab4P3;