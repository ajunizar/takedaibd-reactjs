import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Bab5Awal() {

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
        window.location.href = '/bab4-p3';
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }

    const handleOnClickUlang = (event) => {
        event.preventDefault();
        jQuery("#item264969 video")[0].currentTime = 0;
        jQuery("#item264969 video")[0].play();
        go(event,[{n:1,id:92596,act:'play'},{n:1,link:1,id:10506,act:'play'},{n:1,id:10484,act:'play'},{n:1,id:10528,act:'play'},{n:1,id:92571,act:'play'}]);
    }

    const handleOnClickNextPage = (event) => {
        window.location.href = '/bab5-p1';
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
                <li className="page" data-name="19">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:92596,act:'play'},{n:1,link:1,id:10506,act:'play'},{n:1,id:10484,sn:1,act:'play'},{n:1,id:10528,act:'play'},{n:1,id:92571,act:'play'}], 'pageload');" style={{width:'1920px',height:'1080px'}}>
                        <div id="item264969" className="pageItem" alt="Movie" style={{left:'284px',top:'116px'}}>
                            <video width="1920" height="1080" data-id="264969" data-autoplay="1" data-autodelay="0" data-stoplast="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/page 18 FULL.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div id="item264982" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item264980" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <img src={blankImage} data-ani="flyinfromleft-92596 1s cubic-bezier(.2,.6,.35,1) 1" data-id="92596" id="item92596" data-hidestart="1" className="pageItem hidden" alt="Polygon" style={{left:'-637px',top:'-602px'}} data-src="assets/images/item_92596.png" />
                        <div id="item119639" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <Navigation />
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item10439" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item10459" className="pageItem " data-src="assets/images/item_10459.png" />
                            <div alt="Group" style={{top:'132px'}} id="item10462" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item10463" className="pageItem " data-src="assets/images/item_10463.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item10464" className="pageItem " data-src="assets/images/item_10464.png" />
                            </div>
                        </div>
                        <img src={blankImage} data-ani="fadein-10484 1s linear 1" data-id="10484" id="item10484" data-hidestart="1" className="pageItem hidden" alt="Diagnosis IBD" style={{left:'94px',top:'271px'}} data-src="assets/images/item_10484.png" />
                        <img src={blankImage} data-ani="fadein-10506 1s linear 1" data-id="10506" id="item10506" data-hidestart="1" className="pageItem hidden" alt="Bab 5" style={{left:'102px',top:'231px'}} data-src="assets/images/item_10506.png" />
                        <img src={blankImage} data-ani="fadein-10528 1s linear 1" data-id="10528" id="item10528" data-hidestart="1" className="pageItem hidden" alt="Hingga saat ini, tidak ada pemeriksaan gold standard untuk mendiagnosis IBD.28 " style={{left:'100px',top:'447px'}} data-src="assets/images/item_10528.png" />
                        <img src={blankImage} data-ani="fadein-92571 1s linear 1" data-id="92571" id="item92571" data-hidestart="1" className="pageItem hidden" alt="Diagnosis IBD ditegakan berdasarkan:5,29 " style={{left:'100px',top:'606px'}} data-src="assets/images/item_92571.png" />
                        <div id="item123917" className="pageItem" style={{height:'60px',width:'60px',left:'574px',top:'1014px'}} alt="Sound">
                            <audio data-id="123917" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 18-1.mp3" />
                            </audio>
                        </div>
                        <div id="item123923" className="pageItem" style={{height:'60px',width:'60px',left:'646px',top:'1014px'}} alt="Sound">
                            <audio data-id="123923" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 18-2.mp3" />
                            </audio>
                        </div>
                        <div id="item123929" className="pageItem" style={{height:'60px',width:'60px',left:'706px',top:'1014px'}} alt="Sound">
                            <audio data-id="123929" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 18-3.mp3" />
                            </audio>
                        </div>
                        <div id="item263769" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item123981" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <button data-id="106819" name="icon back 17" onClick={handleOnClickPreviousPage} aria-label="icon back 17" id="item106819" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item106825" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item106826" className="pageItem " data-src="assets/images/item_106826.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item106829" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item106830" className="pageItem " data-src="assets/images/item_106830.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item106822" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item106823" className="pageItem " data-src="assets/images/item_106823.png" />
                            </div>
                        </button>
                        <button data-id="106832" name="icon next 17" onClick={handleOnClickNextPage} aria-label="icon next 17" id="item106832" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item106838" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item106839" className="pageItem " data-src="assets/images/item_106839.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item106842" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item106844" className="pageItem " data-src="assets/images/item_106844.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item106835" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item106836" className="pageItem " data-src="assets/images/item_106836.png" />
                            </div>
                        </button>
                        <button data-id="126955" name="button ulang 17" onClick={handleOnClickUlang} aria-label="button ulang 17" id="item126955" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item126966" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126967" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126968" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126970" className="pageItem " data-src="assets/images/item_126970.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126971" className="pageItem " data-src="assets/images/item_126971.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item126973" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126974" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#fa635e" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126976" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126977" className="pageItem " data-src="assets/images/item_126977.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126980" className="pageItem " data-src="assets/images/item_126980.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item126958" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126959" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126961" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126962" className="pageItem " data-src="assets/images/item_126962.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126964" className="pageItem " data-src="assets/images/item_126964.png" />
                                </div>
                            </div>
                        </button>
                        <button data-id="221340" name="icon beranda 81" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 81" id="item221340" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221348" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221349" className="pageItem " data-src="assets/images/item_221349.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221350" className="pageItem " data-src="assets/images/item_221350.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221352" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221353" className="pageItem " data-src="assets/images/item_221353.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221354" className="pageItem " data-src="assets/images/item_221354.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221344" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221345" className="pageItem " data-src="assets/images/item_221345.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221346" className="pageItem " data-src="assets/images/item_221346.png" />
                            </div>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Bab5Awal;