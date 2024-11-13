import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Bab3Awal() {

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
        window.location.href = '/bab2-p4';
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }

    const handleOnClickUlang = (event) => {
        event.preventDefault();
        jQuery("#item151331 video")[0].currentTime = 0;
        jQuery("#item151331 video")[0].play();
        go(event,[{n:1,id:6316,act:'play'},{n:1,link:1,id:125899,act:'play'},{n:1,id:19506,act:'play'},{del:0.5,n:1,id:6495,act:'play'},{del:4.5,n:1,id:126048,act:'play'},{del:2.5,n:1,id:126071,act:'play'},{del:0.5,n:1,id:126098,act:'play'}]);
    }

    const handleOnClickNextPage = (event) => {
        window.location.href = '/bab3-p1';
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
                <li className="page" data-name="13">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:6316,act:'play'},{n:1,link:1,id:125899,act:'play'},{n:1,id:19506,sn:1,act:'play'},{del:0.5,n:1,id:6495,act:'play'},{del:4.5,n:1,id:126048,act:'play'},{del:2.5,n:1,id:126071,act:'play'},{del:0.5,n:1,id:126098,act:'play'}], 'pageload');" style={{width:'1920px',height:'1080px'}}>
                        <div id="item151331" className="pageItem" alt="Movie" style={{left:'-392px',top:'114px'}}>
                            <video width="2212" height="1244" data-id="151331" data-autoplay="1" data-autodelay="0" data-stoplast="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/page 12 FULL.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div id="item207444" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <img src={blankImage} data-ani="flyinfromleft-6316 1s cubic-bezier(.2,.6,.35,1) 1" data-id="6316" id="item6316" data-hidestart="1" className="pageItem hidden" alt="Polygon" style={{left:'-640px',top:'-630px'}} data-src="assets/images/item_6316.png" />
                        <div id="item207446" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item147907" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <Navigation />
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item125980" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item125981" className="pageItem " data-src="assets/images/item_125981.png" />
                            <div alt="Group" style={{top:'132px'}} id="item126004" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item126005" className="pageItem " data-src="assets/images/item_126005.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item126006" className="pageItem " data-src="assets/images/item_126006.png" />
                            </div>
                        </div>
                        <div id="item126026" className="pageItem" style={{height:'60px',width:'60px',left:'530px',top:'987px'}} alt="Sound">
                            <audio data-id="126026" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 12-1.mp3" />
                            </audio>
                        </div>
                        <div id="item126032" className="pageItem" style={{height:'60px',width:'60px',left:'595px',top:'987px'}} alt="Sound">
                            <audio data-id="126032" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 12-2.mp3" />
                            </audio>
                        </div>
                        <div id="item126037" className="pageItem" style={{height:'60px',width:'60px',left:'660px',top:'987px'}} alt="Sound">
                            <audio data-id="126037" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 12-3.mp3" />
                            </audio>
                        </div>
                        <div id="item126045" className="pageItem" style={{height:'60px',width:'60px',left:'720px',top:'987px'}} alt="Sound">
                            <audio data-id="126045" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 12-4.mp3" />
                            </audio>
                        </div>
                        <div id="item126121" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <img src={blankImage} data-ani="fadein-6495 1s linear 1" data-id="6495" id="item6495" data-hidestart="1" className="pageItem hidden" alt="Etiologi IBD belum jelas. " style={{left:'100px',top:'562px'}} data-src="assets/images/item_6495.png" />
                        <img src={blankImage} data-ani="fadein-126048 0.5s linear 1" data-id="126048" id="item126048" data-hidestart="1" className="pageItem hidden" alt="Berdasarkan hipotesis, penyebab IBD berkaitan dengan interaksi antara:11,12" style={{left:'100px',top:'605px'}} data-src="assets/images/item_126048.png" />
                        <img src={blankImage} data-ani="fadein-126071 0.2s linear 1" data-id="126071" id="item126071" data-hidestart="1" className="pageItem hidden" alt="• Faktor intrinsik" style={{left:'100px',top:'722px'}} data-src="assets/images/item_126071.png" />
                        <img src={blankImage} data-ani="fadein-126098 0.2s linear 1" data-id="126098" id="item126098" data-hidestart="1" className="pageItem hidden" alt="• Faktor ekstrinsik" style={{left:'100px',top:'759px'}} data-src="assets/images/item_126098.png" />
                        <img src={blankImage} data-ani="fadein-19506 1s linear 1" data-id="19506" id="item19506" data-hidestart="1" className="pageItem hidden" alt="Etiologi & Faktor Risiko IBD" style={{left:'97px',top:'266px'}} data-src="assets/images/item_19506.png" />
                        <img src={blankImage} data-ani="fadein-125899 1s linear 1" data-id="125899" id="item125899" data-hidestart="1" className="pageItem hidden" alt="Bab 3" style={{left:'100px',top:'220px'}} data-src="assets/images/item_125899.png" />
                        <button data-id="103274" name="icon back 11" onClick={handleOnClickPreviousPage} aria-label="icon back 11" id="item103274" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item103280" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item103281" className="pageItem " data-src="assets/images/item_103281.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item103283" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item103284" className="pageItem " data-src="assets/images/item_103284.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item103277" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item103278" className="pageItem " data-src="assets/images/item_103278.png" />
                            </div>
                        </button>
                        <button data-id="103286" name="icon next 11" onClick={handleOnClickNextPage} aria-label="icon next 11" id="item103286" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item103292" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item103293" className="pageItem " data-src="assets/images/item_103293.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item103295" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item103297" className="pageItem " data-src="assets/images/item_103297.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item103289" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item103290" className="pageItem " data-src="assets/images/item_103290.png" />
                            </div>
                        </button>
                        <button data-id="126702" name="button ulang 11" onClick={handleOnClickUlang} aria-label="button ulang 11" id="item126702" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item126714" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126715" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126716" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126717" className="pageItem " data-src="assets/images/item_126717.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126718" className="pageItem " data-src="assets/images/item_126718.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item126721" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126722" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#fa635e" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126724" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126725" className="pageItem " data-src="assets/images/item_126725.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126727" className="pageItem " data-src="assets/images/item_126727.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item126705" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126706" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126708" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126709" className="pageItem " data-src="assets/images/item_126709.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126711" className="pageItem " data-src="assets/images/item_126711.png" />
                                </div>
                            </div>
                        </button>
                        <button data-id="221245" name="icon beranda 76" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 76" id="item221245" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221253" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221254" className="pageItem " data-src="assets/images/item_221254.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221255" className="pageItem " data-src="assets/images/item_221255.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221257" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221258" className="pageItem " data-src="assets/images/item_221258.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221259" className="pageItem " data-src="assets/images/item_221259.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221248" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221250" className="pageItem " data-src="assets/images/item_221250.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221251" className="pageItem " data-src="assets/images/item_221251.png" />
                            </div>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Bab3Awal;