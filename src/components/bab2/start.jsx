import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Bab2Awal() {

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
        window.location.href = '/bab1-p1';
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }

    const handleOnClickUlang = (event) => {
        event.preventDefault();
        jQuery("#item145587 video")[0].currentTime = 0;
        jQuery("#item145587 video")[0].play();
        go(event,[{n:1,id:3155,act:'play'},{n:1,link:1,id:3268,act:'play'},{n:1,id:3246,act:'play'}]);
    }

    const handleOnClickNextPage = (event) => {
        window.location.href = '/bab2-p1';
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
                <li className="page" data-name="8">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:3155,act:'play'},{n:1,link:1,id:3268,act:'play'},{n:1,id:3246,sn:1,act:'play'}], 'pageload');" style={{width:'1920px',height:'1080px'}}>
                        <div id="item145587" className="pageItem" alt="Movie" style={{left:'100px',top:'189px'}}>
                            <video width="1920" height="1080" data-id="145587" data-autoplay="1" data-autodelay="0" data-stoplast="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                {/*<source src="assets/media/WorldMap2.mp4" type="video/mp4" />*/}
                                <source src="assets/media/WorldMap.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div id="item145573" className="pageItem" style={{height:'60px',width:'60px',left:'12px',top:'540px'}} alt="Sound">
                            <audio data-id="145573" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 7-1.mp3" />
                            </audio>
                        </div>
                        <div id="item114166" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <Navigation />
                        <div id="item207440" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item207442" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <img src={blankImage} data-ani="flyinfromleft-3155 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="3155" id="item3155" data-hidestart="1" className="pageItem hidden" alt="Polygon" style={{left:'-712px',top:'-1186px'}} data-src="assets/images/item_3155.png" />
                        <img src={blankImage} data-ani="fadein-3268 0.5s linear 1" data-id="3268" id="item3268" data-hidestart="1" className="pageItem hidden" alt="Bab 2" style={{left:'100px',top:'100px'}} data-src="assets/images/item_3268.png" />
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item3635" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item3655" className="pageItem " data-src="assets/images/item_3655.png" />
                            <div alt="Group" style={{top:'132px'}} id="item3658" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item3659" className="pageItem " data-src="assets/images/item_3659.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item3660" className="pageItem " data-src="assets/images/item_3660.png" />
                            </div>
                        </div>
                        <img src={blankImage} data-ani="fadein-3246 0.5s linear 1" data-id="3246" id="item3246" data-hidestart="1" className="pageItem hidden" alt="Epidemiologi IBD" style={{left:'97px',top:'143px'}} data-src="assets/images/item_3246.png" />
                        <button data-id="124126" name="icon back 28" onClick={handleOnClickPreviousPage} aria-label="icon back 28" id="item124126" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item124133" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item124134" className="pageItem " data-src="assets/images/item_124134.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item124136" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item124137" className="pageItem " data-src="assets/images/item_124137.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item124130" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item124131" className="pageItem " data-src="assets/images/item_124131.png" />
                            </div>
                        </button>
                        <button data-id="124138" name="icon next 28" onClick={handleOnClickNextPage} aria-label="icon next 28" id="item124138" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item124144" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item124145" className="pageItem " data-src="assets/images/item_124145.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item124147" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item124148" className="pageItem " data-src="assets/images/item_124148.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item124141" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item124142" className="pageItem " data-src="assets/images/item_124142.png" />
                            </div>
                        </button>
                        <button data-id="126443" name="button ulang 6" onClick={handleOnClickUlang} aria-label="button ulang 6" id="item126443" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item126454" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126455" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126456" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126457" className="pageItem " data-src="assets/images/item_126457.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126458" className="pageItem " data-src="assets/images/item_126458.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item126460" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126461" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#fa635e" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126464" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126465" className="pageItem " data-src="assets/images/item_126465.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126467" className="pageItem " data-src="assets/images/item_126467.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item126446" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126447" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126449" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126450" className="pageItem " data-src="assets/images/item_126450.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126452" className="pageItem " data-src="assets/images/item_126452.png" />
                                </div>
                            </div>
                        </button>
                        <button data-id="221174" name="icon beranda 72" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 72" id="item221174" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221181" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221182" className="pageItem " data-src="assets/images/item_221182.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221183" className="pageItem " data-src="assets/images/item_221183.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221185" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221186" className="pageItem " data-src="assets/images/item_221186.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221187" className="pageItem " data-src="assets/images/item_221187.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221177" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221178" className="pageItem " data-src="assets/images/item_221178.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221179" className="pageItem " data-src="assets/images/item_221179.png" />
                            </div>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Bab2Awal;