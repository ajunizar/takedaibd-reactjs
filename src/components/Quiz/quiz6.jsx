import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Quiz6() {

    const navigate = useNavigate();

    const handleOnClickGoToQuiz7 = () => {
        window.location.href = '/quiz7'; // #54
    };
    //var referrer = document.referrer;
    //console.log("referrer url",referrer);
    const handleOnClickBack = () => {
        window.location.href = '/Quiz40';
    };
    const handleOnClickPreviousPage = () => {
        navigate(-1);
    };

    const handleOnClickGoToQuiz5 = () => {
        window.location.href = '/quiz5';
    }

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }


    const handleOnClickGoToCekPenjelasan = (event) => {
        window.location.href = '/quiz6Penjelasan';
    }

    const handleOnClickA = (event) => {
        event.preventDefault();
        jQuery("#item204297 video")[0].currentTime = 0;
        jQuery("#item204297 video")[0].play();
        jQuery("#item204328 audio")[0].currentTime = 0;
        jQuery("#item204328 audio")[0].play();
        go(event,[{n:1,link:1,id:218873,act:'hide'}]); // jawaban benar
        go(event,[{n:1,link:1,id:204264,act:'play'},{n:1,link:1,id:219067,act:'play'},{n:1,link:1,id:219196,act:'play'},{n:1,id:219325,act:'play'},{n:1,id:219246,act:'hide'}]);    
    }
    
    const handleOnClickB = (event) => {
        event.preventDefault();
        jQuery("#item204297 video")[0].currentTime = 0;
        jQuery("#item204297 video")[0].play();
        jQuery("#item204328 audio")[0].currentTime = 0;
        jQuery("#item204328 audio")[0].play();
        go(event,[{n:1,link:1,id:218873,act:'hide'}]); // jawaban benar
        go(event,[{n:1,link:1,id:204268,act:'play'},{n:1,link:1,id:219067,act:'play'},{n:1,link:1,id:219196,act:'play'},{n:1,id:219325,act:'play'},{n:1,id:219246,act:'hide'}]);
    }
    
    const handleOnClickC = (event) => {
        event.preventDefault();
        jQuery("#item204297 video")[0].currentTime = 0;
        jQuery("#item204297 video")[0].play();
        jQuery("#item204328 audio")[0].currentTime = 0;
        jQuery("#item204328 audio")[0].play();
        go(event,[{n:1,link:1,id:218873,act:'hide'}]); // jawaban benar
        go(event,[{n:1,link:1,id:204272,act:'play'},{n:1,link:1,id:219067,act:'play'},{n:1,link:1,id:219196,act:'play'},{n:1,id:219325,act:'play'},{n:1,id:219246,act:'hide'}]);
    }
    
    const handleOnClickD = (event) => {
        event.preventDefault();
        jQuery("#item204297 video")[0].currentTime = 0;
        jQuery("#item204297 video")[0].play();
        jQuery("#item204328 audio")[0].currentTime = 0;
        jQuery("#item204328 audio")[0].play();
        go(event,[{n:1,link:1,id:218873,act:'hide'}]); // jawaban benar
        go(event,[{n:1,link:1,id:204276,act:'play'},{n:1,link:1,id:219067,act:'play'},{n:1,link:1,id:219196,act:'play'},{n:1,id:219325,act:'play'},{n:1,id:219246,act:'hide'}]);
    }
    
    const handleOnClickE = (event) => {
        event.preventDefault();
        jQuery("#item204291 video")[0].currentTime = 0;
        jQuery("#item204291 video")[0].play();
        jQuery("#item204319 audio")[0].currentTime = 0;
        jQuery("#item204319 audio")[0].play();
        go(event,[{n:1,link:1,id:204276,act:'hide'},{n:1,link:1,id:219067,act:'hide'},{n:1,link:1,id:219196,act:'play'},{n:1,id:219325,act:'play'}]);
        go(event,[{n:1,link:1,id:204282,act:'play'},{n:1,id:218873,act:'play'},{n:1,id:219246,act:'play'}]);
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
                <li className="page" data-name="61">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:199117,act:'play'},{n:1,id:203935,act:'play'},{del:6,n:1,link:1,id:204284,act:'play'},{n:1,id:202837,sn:1,act:'play'},{n:1,link:1,id:204285,act:'play'},{n:1,id:202836,sn:1,act:'play'},{n:1,link:1,id:204286,act:'play'},{n:1,id:202834,sn:1,act:'play'},{n:1,link:1,id:204287,act:'play'},{n:1,id:202838,sn:1,act:'play'},{n:1,link:1,id:204288,act:'play'},{n:1,id:202839,sn:1,act:'play'}], 'pageload');" style={{width:'1920px',height:'1080px'}}>
                        <div id="item264527" className="pageItem" style={{height:'60px',width:'60px',left:'7px',top:'270px'}} alt="Sound">
                            <audio data-id="264527" className="mejs-no-controls" data-autoplay="1" data-autodelay="0" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/Quiz 6 FULL.mp3" />
                            </audio>
                        </div>
                        <div id="item264534" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item204291" className="pageItem" alt="Movie" style={{top:'270px'}}>
                            <video width="640" height="360" data-id="204291" poster="assets/images/item_204291.png" data-stoplast="1" data-nopause="1" webkit-playsinline="playsinline" playsinline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/Correct Answer sound effect.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div id="item204297" className="pageItem" alt="Movie" style={{left:'51px',top:'348px'}}>
                            <video width="640" height="360" data-id="204297" poster="assets/images/item_204297.png" data-stoplast="1" data-nopause="1" webkit-playsinline="playsinline" playsinline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/Incorrect Answer sound effect.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div id="item199113" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div data-ani="flyinfromtop-203935 1s cubic-bezier(.2,.6,.35,1) 1" data-id="203935" id="item203935" data-hidestart="1" className="pageItem group hidden" alt="soal" style={{left:'412px',top:'284px',width:' 1098px',height:'128px'}}>
                            <div id="item202554" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Terapi yang tidak direkomendasikan sebagai pemeliharaan remisi baik pada KU atau PC adalah..." style={{left:'37px',top:'22px'}} id="item202570" className="pageItem " data-src="assets/images/item_202570.png" />
                        </div>
                        <div id="item204309" className="pageItem" style={{height:'60px',width:'60px',left:'40px',top:'41px'}} alt="Sound">
                            <audio data-id="204309" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/quiz 6-1.mp3" />
                            </audio>
                        </div>
                        <div id="item204314" className="pageItem" style={{height:'60px',width:'60px',left:'122px',top:'41px'}} alt="Sound">
                            <audio data-id="204314" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/quiz 6-2.mp3" />
                            </audio>
                        </div>
                        <div id="item204319" className="pageItem" style={{height:'60px',width:'60px',left:'225px',top:'35px'}} alt="Sound">
                            <audio data-id="204319" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/jawaban benar.mp3" />
                            </audio>
                        </div>
                        <div id="item204328" className="pageItem" style={{height:'60px',width:'60px',left:'314px',top:'35px'}} alt="Sound">
                            <audio data-id="204328" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/jawaban salah.mp3" />
                            </audio>
                        </div>
                        <div data-ani="flyinfromright-202839 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="202839" id="item202839" data-hidestart="1" className="pageItem group hidden" alt="kortikosteroid" style={{left:'1034px',top:'578px',width:' 607px',height:'76px'}}>
                            <div id="item202557" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Kortikosteroid" style={{left:'136px',top:'14px'}} id="item202594" className="pageItem " data-src="assets/images/item_202594.png" />
                        </div>
                        <div data-ani="flyinfromleft-202834 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="202834" id="item202834" data-hidestart="1" className="pageItem group hidden" alt="vedolizumab" style={{left:'314px',top:'705px',width:' 607px',height:'76px'}}>
                            <div id="item202563" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Vedolizumab" style={{left:'136px',top:'14px'}} id="item202663" className="pageItem " data-src="assets/images/item_202663.png" />
                        </div>
                        <div data-ani="flyinfromright-202838 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="202838" id="item202838" data-hidestart="1" className="pageItem group hidden" alt="adalimumab" style={{left:'1034px',top:'451px',width:' 607px',height:'76px'}}>
                            <div id="item202556" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Adalimumab" style={{left:'136px',top:'14px'}} id="item202755" className="pageItem " data-src="assets/images/item_202755.png" />
                        </div>
                        <div data-ani="flyinfromleft-202837 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="202837" id="item202837" data-hidestart="1" className="pageItem group hidden" alt="azatioprin" style={{left:'314px',top:'451px',width:' 607px',height:'76px'}}>
                            <div id="item202561" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Azatioprin" style={{left:'136px',top:'13px'}} id="item202778" className="pageItem " data-src="assets/images/item_202778.png" />
                        </div>
                        <div data-ani="flyinfromleft-202836 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="202836" id="item202836" data-hidestart="1" className="pageItem group hidden" alt="5-asa" style={{left:'314px',top:'578px',width:' 607px',height:'76px'}}>
                            <div id="item202562" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="5 – ASA" style={{left:'136px',top:'14px'}} id="item202801" className="pageItem " data-src="assets/images/item_202801.png" />
                        </div>
                        <button data-ani="appear-204282 0.6s linear 1" data-id="204282" id="item204282" data-hidestart="1" className="pageItem hidden" name="5v" aria-label="5v">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item202568" className="pageItem " data-src="assets/images/item_202568.png" />
                            </div>
                        </button>
                        <button data-ani="flyinfromright-204287 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="204287" id="item204287" data-hidestart="1" className="pageItem has-on has-down hidden" name="d" onClick={handleOnClickD} aria-label="d">
                            <div className="pageItem state btn-off">
                                <div id="item202558" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="d" style={{left:'38px',top:'41px'}} id="item202617" className="pageItem " data-src="assets/images/item_202617.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item204492" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="d" style={{left:'38px',top:'41px'}} id="item204493" className="pageItem " data-src="assets/images/item_204493.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item204517" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="d" style={{left:'38px',top:'41px'}} id="item204518" className="pageItem " data-src="assets/images/item_204518.png" />
                            </div>
                        </button>
                        <button data-ani="flyinfromright-204288 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="204288" id="item204288" data-hidestart="1" className="pageItem has-on has-down hidden" name="e" onClick={handleOnClickE} aria-label="e">
                            <div className="pageItem state btn-off">
                                <div id="item202560" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="e" style={{left:'40px',top:'35px'}} id="item202640" className="pageItem " data-src="assets/images/item_202640.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item204542" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="e" style={{left:'40px',top:'35px'}} id="item204543" className="pageItem " data-src="assets/images/item_204543.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item204567" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="e" style={{left:'40px',top:'35px'}} id="item204568" className="pageItem " data-src="assets/images/item_204568.png" />
                            </div>
                        </button>
                        <button data-ani="flyinfromleft-204284 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="204284" id="item204284" data-hidestart="1" className="pageItem has-on has-down hidden" name="a" onClick={handleOnClickA} aria-label="a">
                            <div className="pageItem state btn-off">
                                <div id="item202564" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="a" style={{left:'40px',top:'35px'}} id="item202686" className="pageItem " data-src="assets/images/item_202686.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item204334" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="a" style={{left:'40px',top:'35px'}} id="item204335" className="pageItem " data-src="assets/images/item_204335.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item204359" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="a" style={{left:'40px',top:'35px'}} id="item204360" className="pageItem " data-src="assets/images/item_204360.png" />
                            </div>
                        </button>
                        <button data-ani="flyinfromleft-204285 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="204285" id="item204285" data-hidestart="1" className="pageItem has-on has-down hidden" name="b" onClick={handleOnClickB} aria-label="b">
                            <div className="pageItem state btn-off">
                                <div id="item202565" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="b" style={{left:'38px',top:'41px'}} id="item202709" className="pageItem " data-src="assets/images/item_202709.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item204384" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="b" style={{left:'38px',top:'41px'}} id="item204385" className="pageItem " data-src="assets/images/item_204385.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item204409" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="b" style={{left:'38px',top:'41px'}} id="item204410" className="pageItem " data-src="assets/images/item_204410.png" />
                            </div>
                        </button>
                        <button data-ani="flyinfromleft-204286 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="204286" id="item204286" data-hidestart="1" className="pageItem has-on has-down hidden" name="c" onClick={handleOnClickC} aria-label="c">
                            <div className="pageItem state btn-off">
                                <div id="item202566" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="c" style={{left:'42px',top:'35px'}} id="item202732" className="pageItem " data-src="assets/images/item_202732.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item204434" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="c" style={{left:'42px',top:'35px'}} id="item204436" className="pageItem " data-src="assets/images/item_204436.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item204460" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="c" style={{left:'42px',top:'35px'}} id="item204461" className="pageItem " data-src="assets/images/item_204461.png" />
                            </div>
                        </button>
                        <button data-ani="appear-204264 0.6s linear 1" data-id="204264" id="item204264" data-hidestart="1" className="pageItem hidden" name="1 x" aria-label="1 x">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item204266" className="pageItem " data-src="assets/images/item_204266.png" />
                                <img src={blankImage} alt="Polygon" id="item204267" className="pageItem " data-src="assets/images/item_204267.png" />
                            </div>
                        </button>
                        <button data-ani="appear-204268 0.6s linear 1" data-id="204268" id="item204268" data-hidestart="1" className="pageItem hidden" name="2x" aria-label="2x">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item204270" className="pageItem " data-src="assets/images/item_204270.png" />
                                <img src={blankImage} alt="Polygon" id="item204271" className="pageItem " data-src="assets/images/item_204271.png" />
                            </div>
                        </button>
                        <button data-ani="appear-204272 0.6s linear 1" data-id="204272" id="item204272" data-hidestart="1" className="pageItem hidden" name="3x" aria-label="3x">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item204274" className="pageItem " data-src="assets/images/item_204274.png" />
                                <img src={blankImage} alt="Polygon" id="item204275" className="pageItem " data-src="assets/images/item_204275.png" />
                            </div>
                        </button>
                        <button data-ani="appear-204276 0.6s linear 1" data-id="204276" id="item204276" data-hidestart="1" className="pageItem hidden" name="4x" aria-label="4x">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item204278" className="pageItem " data-src="assets/images/item_204278.png" />
                                <img src={blankImage} alt="Polygon" id="item204279" className="pageItem " data-src="assets/images/item_204279.png" />
                            </div>
                        </button>
                        <div id="item199111" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item199115" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <img src={blankImage} data-ani="fadein-199117 1s linear 1" data-id="199117" id="item199117" data-hidestart="1" className="pageItem hidden" alt="KUIS 6" style={{left:'712px',top:'157px'}} data-src="assets/images/item_199117.png" />
                        <button data-ani="flyinfrombottom-218873 1s cubic-bezier(.2,.6,.35,1) 1" data-id="218873" id="item218873" data-hidestart="1" className="pageItem hidden" name="jawaban benar 4" aria-label="jawaban benar 4">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" style={{top:'65px'}} id="item218875" className="pageItem ">
                                    <svg version="1.1" width="312" height="312" >
                                        <ellipse cx="155.88" cy="155.88" rx="155.88" ry="155.88" fill="#fff" />
                                    </svg>
                                </div>
                                <div alt="Group" style={{left:'286px',top:'66px'}} id="item218876" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" id="item218877" className="pageItem " data-src="assets/images/item_218877.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px',top:'103px'}} id="item218879" className="pageItem " data-src="assets/images/item_218879.png" />
                                </div>
                                <img src={blankImage} alt="Jawaban Kamu Benar! " style={{left:'298px',top:'88px'}} id="item218880" className="pageItem " data-src="assets/images/item_218880.png" />
                                <div alt="Group" style={{left:'33px'}} id="item218903" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{left:'70px',top:'99px'}} id="item218905" className="pageItem " data-src="assets/images/item_218905.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'115px',top:'88px'}} id="item218906" className="pageItem " data-src="assets/images/item_218906.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'33px',top:'282px'}} id="item218907" className="pageItem " data-src="assets/images/item_218907.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'211px',top:'53px'}} id="item218908" className="pageItem " data-src="assets/images/item_218908.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'222px',top:'57px'}} id="item218910" className="pageItem " data-src="assets/images/item_218910.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'180px',top:'53px'}} id="item218911" className="pageItem " data-src="assets/images/item_218911.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'192px',top:'75px'}} id="item218912" className="pageItem " data-src="assets/images/item_218912.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'180px',top:'53px'}} id="item218913" className="pageItem " data-src="assets/images/item_218913.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'212px',top:'53px'}} id="item218914" className="pageItem " data-src="assets/images/item_218914.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'217px',top:'57px'}} id="item218915" className="pageItem " data-src="assets/images/item_218915.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'211px',top:'68px'}} id="item218916" className="pageItem " data-src="assets/images/item_218916.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'211px',top:'61px'}} id="item218917" className="pageItem " data-src="assets/images/item_218917.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'219px',top:'63px'}} id="item218918" className="pageItem " data-src="assets/images/item_218918.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'217px',top:'71px'}} id="item218919" className="pageItem " data-src="assets/images/item_218919.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'222px',top:'79px'}} id="item218920" className="pageItem " data-src="assets/images/item_218920.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'225px',top:'73px'}} id="item218921" className="pageItem " data-src="assets/images/item_218921.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'202px',top:'73px'}} id="item218922" className="pageItem " data-src="assets/images/item_218922.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'195px',top:'81px'}} id="item218923" className="pageItem " data-src="assets/images/item_218923.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'198px',top:'103px'}} id="item218924" className="pageItem " data-src="assets/images/item_218924.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'194px',top:'74px'}} id="item218925" className="pageItem " data-src="assets/images/item_218925.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'194px',top:'72px'}} id="item218926" className="pageItem " data-src="assets/images/item_218926.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'192px',top:'74px'}} id="item218927" className="pageItem " data-src="assets/images/item_218927.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'203px',top:'85px'}} id="item218928" className="pageItem " data-src="assets/images/item_218928.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'202px',top:'85px'}} id="item218929" className="pageItem " data-src="assets/images/item_218929.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'112px',top:'24px'}} id="item218932" className="pageItem " data-src="assets/images/item_218932.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'112px',top:'25px'}} id="item218933" className="pageItem " data-src="assets/images/item_218933.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'111px',top:'31px'}} id="item218934" className="pageItem " data-src="assets/images/item_218934.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'75px',top:'63px'}} id="item218935" className="pageItem " data-src="assets/images/item_218935.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'88px',top:'63px'}} id="item218936" className="pageItem " data-src="assets/images/item_218936.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'62px',top:'102px'}} id="item218937" className="pageItem " data-src="assets/images/item_218937.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'66px',top:'44px'}} id="item218938" className="pageItem " data-src="assets/images/item_218938.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'119px',top:'46px'}} id="item218939" className="pageItem " data-src="assets/images/item_218939.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'122px',top:'47px'}} id="item218940" className="pageItem " data-src="assets/images/item_218940.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'67px'}} id="item218941" className="pageItem " data-src="assets/images/item_218941.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'69px',top:'14px'}} id="item218942" className="pageItem " data-src="assets/images/item_218942.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'97px',top:'36px'}} id="item218943" className="pageItem " data-src="assets/images/item_218943.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'72px',top:'36px'}} id="item218945" className="pageItem " data-src="assets/images/item_218945.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'69px',top:'14px'}} id="item218946" className="pageItem " data-src="assets/images/item_218946.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'83px',top:'58px'}} id="item218947" className="pageItem " data-src="assets/images/item_218947.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'73px',top:'43px'}} id="item218949" className="pageItem " data-src="assets/images/item_218949.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'73px',top:'43px'}} id="item218950" className="pageItem " data-src="assets/images/item_218950.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'72px',top:'43px'}} id="item218954" className="pageItem " data-src="assets/images/item_218954.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'72px',top:'41px'}} id="item218956" className="pageItem " data-src="assets/images/item_218956.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'98px',top:'43px'}} id="item218957" className="pageItem " data-src="assets/images/item_218957.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'98px',top:'43px'}} id="item218958" className="pageItem " data-src="assets/images/item_218958.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'98px',top:'42px'}} id="item218962" className="pageItem " data-src="assets/images/item_218962.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'98px',top:'45px'}} id="item218963" className="pageItem " data-src="assets/images/item_218963.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'72px',top:'45px'}} id="item218964" className="pageItem " data-src="assets/images/item_218964.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'98px',top:'41px'}} id="item218965" className="pageItem " data-src="assets/images/item_218965.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'98px',top:'36px'}} id="item218966" className="pageItem " data-src="assets/images/item_218966.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'69px',top:'36px'}} id="item218967" className="pageItem " data-src="assets/images/item_218967.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'84px',top:'48px'}} id="item218968" className="pageItem " data-src="assets/images/item_218968.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'81px',top:'41px'}} id="item218969" className="pageItem " data-src="assets/images/item_218969.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'94px',top:'42px'}} id="item218970" className="pageItem " data-src="assets/images/item_218970.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'106px',top:'41px'}} id="item218971" className="pageItem " data-src="assets/images/item_218971.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'111px',top:'41px'}} id="item218972" className="pageItem " data-src="assets/images/item_218972.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'99px',top:'44px'}} id="item218973" className="pageItem " data-src="assets/images/item_218973.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'103px',top:'47px'}} id="item218974" className="pageItem " data-src="assets/images/item_218974.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'109px',top:'44px'}} id="item218975" className="pageItem " data-src="assets/images/item_218975.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'98px',top:'45px'}} id="item218976" className="pageItem " data-src="assets/images/item_218976.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'99px',top:'42px'}} id="item218977" className="pageItem " data-src="assets/images/item_218977.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'102px',top:'41px'}} id="item218978" className="pageItem " data-src="assets/images/item_218978.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'97px',top:'42px'}} id="item218984" className="pageItem " data-src="assets/images/item_218984.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'106px',top:'41px'}} id="item218986" className="pageItem " data-src="assets/images/item_218986.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'94px',top:'42px'}} id="item218987" className="pageItem " data-src="assets/images/item_218987.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'97px',top:'41px'}} id="item218988" className="pageItem " data-src="assets/images/item_218988.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'98px',top:'43px'}} id="item218989" className="pageItem " data-src="assets/images/item_218989.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'102px',top:'43px'}} id="item218990" className="pageItem " data-src="assets/images/item_218990.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'103px',top:'44px'}} id="item218991" className="pageItem " data-src="assets/images/item_218991.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'98px',top:'42px'}} id="item218993" className="pageItem " data-src="assets/images/item_218993.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'98px',top:'41px'}} id="item218994" className="pageItem " data-src="assets/images/item_218994.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'94px',top:'41px'}} id="item218995" className="pageItem " data-src="assets/images/item_218995.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'65px',top:'41px'}} id="item218996" className="pageItem " data-src="assets/images/item_218996.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'66px',top:'47px'}} id="item218997" className="pageItem " data-src="assets/images/item_218997.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'68px',top:'41px'}} id="item218998" className="pageItem " data-src="assets/images/item_218998.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'69px',top:'42px'}} id="item218999" className="pageItem " data-src="assets/images/item_218999.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'75px',top:'41px'}} id="item219000" className="pageItem " data-src="assets/images/item_219000.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'69px',top:'41px'}} id="item219001" className="pageItem " data-src="assets/images/item_219001.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'76px',top:'45px'}} id="item219002" className="pageItem " data-src="assets/images/item_219002.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'77px',top:'44px'}} id="item219003" className="pageItem " data-src="assets/images/item_219003.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'79px',top:'44px'}} id="item219004" className="pageItem " data-src="assets/images/item_219004.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'80px',top:'43px'}} id="item219006" className="pageItem " data-src="assets/images/item_219006.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'76px',top:'41px'}} id="item219007" className="pageItem " data-src="assets/images/item_219007.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'73px',top:'48px'}} id="item219008" className="pageItem " data-src="assets/images/item_219008.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'65px',top:'41px'}} id="item219009" className="pageItem " data-src="assets/images/item_219009.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'66px',top:'45px'}} id="item219011" className="pageItem " data-src="assets/images/item_219011.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'68px',top:'41px'}} id="item219012" className="pageItem " data-src="assets/images/item_219012.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'69px',top:'42px'}} id="item219013" className="pageItem " data-src="assets/images/item_219013.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'73px',top:'41px'}} id="item219014" className="pageItem " data-src="assets/images/item_219014.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'69px',top:'41px'}} id="item219015" className="pageItem " data-src="assets/images/item_219015.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'73px',top:'43px'}} id="item219017" className="pageItem " data-src="assets/images/item_219017.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'77px',top:'43px'}} id="item219018" className="pageItem " data-src="assets/images/item_219018.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'72px',top:'43px'}} id="item219021" className="pageItem " data-src="assets/images/item_219021.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'72px',top:'41px'}} id="item219022" className="pageItem " data-src="assets/images/item_219022.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'72px',top:'45px'}} id="item219023" className="pageItem " data-src="assets/images/item_219023.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'65px',top:'41px'}} id="item219024" className="pageItem " data-src="assets/images/item_219024.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'85px',top:'42px'}} id="item219025" className="pageItem " data-src="assets/images/item_219025.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'75px',top:'1px'}} id="item219026" className="pageItem " data-src="assets/images/item_219026.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'121px',top:'56px'}} id="item219027" className="pageItem " data-src="assets/images/item_219027.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'2px',top:'119px'}} id="item219028" className="pageItem " data-src="assets/images/item_219028.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'28px',top:'92px'}} id="item219029" className="pageItem " data-src="assets/images/item_219029.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'66px',top:'88px'}} id="item219030" className="pageItem " data-src="assets/images/item_219030.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'121px',top:'107px'}} id="item219031" className="pageItem " data-src="assets/images/item_219031.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'91px',top:'241px'}} id="item219032" className="pageItem " data-src="assets/images/item_219032.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'71px',top:'84px'}} id="item219033" className="pageItem " data-src="assets/images/item_219033.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'72px',top:'181px'}} id="item219034" className="pageItem " data-src="assets/images/item_219034.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'68px',top:'217px'}} id="item219035" className="pageItem " data-src="assets/images/item_219035.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'67px',top:'250px'}} id="item219036" className="pageItem " data-src="assets/images/item_219036.png" />
                                    <div alt="Oval" style={{left:'66px',top:'277px'}} id="item219037" className="pageItem ">
                                        <svg version="1.1" width="8" height="8" >
                                            <ellipse cx="2.58" cy="2.58" rx="2.58" ry="2.58" stroke="" strokeWidth="1" fill="#bcced1" />
                                        </svg>
                                    </div>
                                    <img src={blankImage} alt="Polygon" style={{left:'133px',top:'105px'}} id="item219038" className="pageItem " data-src="assets/images/item_219038.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'138px',top:'109px'}} id="item219039" className="pageItem " data-src="assets/images/item_219039.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'193px',top:'112px'}} id="item219040" className="pageItem " data-src="assets/images/item_219040.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'161px',top:'117px'}} id="item219041" className="pageItem " data-src="assets/images/item_219041.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'14px',top:'142px'}} id="item219043" className="pageItem " data-src="assets/images/item_219043.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'14px',top:'141px'}} id="item219044" className="pageItem " data-src="assets/images/item_219044.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'25px',top:'223px'}} id="item219045" className="pageItem " data-src="assets/images/item_219045.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'26px',top:'199px'}} id="item219046" className="pageItem " data-src="assets/images/item_219046.png" />
                                    <img src={blankImage} alt="Polygon" style={{top:'190px'}} id="item219047" className="pageItem " data-src="assets/images/item_219047.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'35px',top:'184px'}} id="item219048" className="pageItem " data-src="assets/images/item_219048.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'35px',top:'184px'}} id="item219049" className="pageItem " data-src="assets/images/item_219049.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'47px',top:'208px'}} id="item219050" className="pageItem " data-src="assets/images/item_219050.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'49px',top:'214px'}} id="item219052" className="pageItem " data-src="assets/images/item_219052.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'51px',top:'221px'}} id="item219053" className="pageItem " data-src="assets/images/item_219053.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'127px',top:'90px'}} id="item219054" className="pageItem " data-src="assets/images/item_219054.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'125px',top:'147px'}} id="item219055" className="pageItem " data-src="assets/images/item_219055.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'127px',top:'149px'}} id="item219056" className="pageItem " data-src="assets/images/item_219056.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'59px',top:'86px'}} id="item219057" className="pageItem " data-src="assets/images/item_219057.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'58px',top:'101px'}} id="item219058" className="pageItem " data-src="assets/images/item_219058.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'55px',top:'138px'}} id="item219059" className="pageItem " data-src="assets/images/item_219059.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'61px',top:'180px'}} id="item219060" className="pageItem " data-src="assets/images/item_219060.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'70px',top:'179px'}} id="item219062" className="pageItem " data-src="assets/images/item_219062.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'55px',top:'138px'}} id="item219063" className="pageItem " data-src="assets/images/item_219063.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'81px',top:'64px'}} id="item219065" className="pageItem " data-src="assets/images/item_219065.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'84px',top:'67px'}} id="item219066" className="pageItem " data-src="assets/images/item_219066.png" />
                                </div>
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-219067 1s cubic-bezier(.2,.6,.35,1) 1" data-id="219067" id="item219067" data-hidestart="1" className="pageItem hidden" name="jawaban salah 5" aria-label="jawaban salah 5">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" style={{top:'67px'}} id="item219069" className="pageItem ">
                                    <svg version="1.1" width="312" height="312" >
                                        <ellipse cx="155.88" cy="155.88" rx="155.88" ry="155.88" fill="#fff" />
                                    </svg>
                                </div>
                                <div alt="Group" style={{left:'286px',top:'67px'}} id="item219070" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" id="item219071" className="pageItem " data-src="assets/images/item_219071.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px',top:'103px'}} id="item219073" className="pageItem " data-src="assets/images/item_219073.png" />
                                </div>
                                <img src={blankImage} alt="Jawaban Kamu Kurang Tepat! " style={{left:'283px',top:'92px'}} id="item219074" className="pageItem " data-src="assets/images/item_219074.png" />
                                <div alt="Group" style={{left:'75px'}} id="item219097" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{left:'41px',top:'28px'}} id="item219098" className="pageItem " data-src="assets/images/item_219098.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'48px',top:'33px'}} id="item219099" className="pageItem " data-src="assets/images/item_219099.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'61px',top:'59px'}} id="item219100" className="pageItem " data-src="assets/images/item_219100.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'58px',top:'59px'}} id="item219101" className="pageItem " data-src="assets/images/item_219101.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'49px',top:'42px'}} id="item219102" className="pageItem " data-src="assets/images/item_219102.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'50px',top:'44px'}} id="item219103" className="pageItem " data-src="assets/images/item_219103.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'101px',top:'43px'}} id="item219104" className="pageItem " data-src="assets/images/item_219104.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'103px',top:'44px'}} id="item219105" className="pageItem " data-src="assets/images/item_219105.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'54px',top:'13px'}} id="item219106" className="pageItem " data-src="assets/images/item_219106.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'54px',top:'13px'}} id="item219107" className="pageItem " data-src="assets/images/item_219107.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'53px',top:'39px'}} id="item219108" className="pageItem " data-src="assets/images/item_219108.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'88px',top:'49px'}} id="item219109" className="pageItem " data-src="assets/images/item_219109.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'80px',top:'34px'}} id="item219111" className="pageItem " data-src="assets/images/item_219111.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'57px',top:'34px'}} id="item219112" className="pageItem " data-src="assets/images/item_219112.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'81px',top:'40px'}} id="item219113" className="pageItem " data-src="assets/images/item_219113.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'81px',top:'40px'}} id="item219114" className="pageItem " data-src="assets/images/item_219114.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'81px',top:'40px'}} id="item219118" className="pageItem " data-src="assets/images/item_219118.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'81px',top:'43px'}} id="item219119" className="pageItem " data-src="assets/images/item_219119.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'81px',top:'38px'}} id="item219120" className="pageItem " data-src="assets/images/item_219120.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'58px',top:'40px'}} id="item219121" className="pageItem " data-src="assets/images/item_219121.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'58px',top:'40px'}} id="item219122" className="pageItem " data-src="assets/images/item_219122.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'58px',top:'39px'}} id="item219126" className="pageItem " data-src="assets/images/item_219126.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'58px',top:'43px'}} id="item219127" className="pageItem " data-src="assets/images/item_219127.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'58px',top:'38px'}} id="item219128" className="pageItem " data-src="assets/images/item_219128.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'81px',top:'32px'}} id="item219129" className="pageItem " data-src="assets/images/item_219129.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'55px',top:'33px'}} id="item219130" className="pageItem " data-src="assets/images/item_219130.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'70px',top:'45px'}} id="item219131" className="pageItem " data-src="assets/images/item_219131.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'69px',top:'54px'}} id="item219132" className="pageItem " data-src="assets/images/item_219132.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'68px',top:'38px'}} id="item219133" className="pageItem " data-src="assets/images/item_219133.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'67px',top:'11px'}} id="item219135" className="pageItem " data-src="assets/images/item_219135.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'40px'}} id="item219136" className="pageItem " data-src="assets/images/item_219136.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'87px',top:'17px'}} id="item219137" className="pageItem " data-src="assets/images/item_219137.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'78px',top:'36px'}} id="item219138" className="pageItem " data-src="assets/images/item_219138.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'54px',top:'36px'}} id="item219139" className="pageItem " data-src="assets/images/item_219139.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'70px',top:'39px'}} id="item219140" className="pageItem " data-src="assets/images/item_219140.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'95px',top:'43px'}} id="item219141" className="pageItem " data-src="assets/images/item_219141.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'63px',top:'103px'}} id="item219143" className="pageItem " data-src="assets/images/item_219143.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'30px',top:'269px'}} id="item219144" className="pageItem " data-src="assets/images/item_219144.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'22px',top:'87px'}} id="item219145" className="pageItem " data-src="assets/images/item_219145.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'22px',top:'192px'}} id="item219147" className="pageItem " data-src="assets/images/item_219147.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'74px',top:'87px'}} id="item219148" className="pageItem " data-src="assets/images/item_219148.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'74px',top:'192px'}} id="item219149" className="pageItem " data-src="assets/images/item_219149.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'56px',top:'103px'}} id="item219150" className="pageItem " data-src="assets/images/item_219150.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'120px',top:'155px'}} id="item219151" className="pageItem " data-src="assets/images/item_219151.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'117px',top:'109px'}} id="item219152" className="pageItem " data-src="assets/images/item_219152.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'122px',top:'131px'}} id="item219153" className="pageItem " data-src="assets/images/item_219153.png" />
                                    <img src={blankImage} alt="Polygon" style={{top:'110px'}} id="item219154" className="pageItem " data-src="assets/images/item_219154.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'5px',top:'110px'}} id="item219155" className="pageItem " data-src="assets/images/item_219155.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'7px',top:'172px'}} id="item219156" className="pageItem " data-src="assets/images/item_219156.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'27px',top:'109px'}} id="item219157" className="pageItem " data-src="assets/images/item_219157.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'33px',top:'144px'}} id="item219158" className="pageItem " data-src="assets/images/item_219158.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'107px',top:'155px'}} id="item219159" className="pageItem " data-src="assets/images/item_219159.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'114px',top:'157px'}} id="item219160" className="pageItem " data-src="assets/images/item_219160.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'120px',top:'164px'}} id="item219161" className="pageItem " data-src="assets/images/item_219161.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'122px',top:'155px'}} id="item219162" className="pageItem " data-src="assets/images/item_219162.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'126px',top:'157px'}} id="item219163" className="pageItem " data-src="assets/images/item_219163.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'128px',top:'164px'}} id="item219164" className="pageItem " data-src="assets/images/item_219164.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'113px',top:'160px'}} id="item219165" className="pageItem " data-src="assets/images/item_219165.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'117px',top:'167px'}} id="item219166" className="pageItem " data-src="assets/images/item_219166.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'7px',top:'169px'}} id="item219167" className="pageItem " data-src="assets/images/item_219167.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'9px',top:'173px'}} id="item219168" className="pageItem " data-src="assets/images/item_219168.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'17px',top:'198px'}} id="item219169" className="pageItem " data-src="assets/images/item_219169.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'7px',top:'184px'}} id="item219170" className="pageItem " data-src="assets/images/item_219170.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'8px',top:'189px'}} id="item219171" className="pageItem " data-src="assets/images/item_219171.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'52px',top:'178px'}} id="item219172" className="pageItem " data-src="assets/images/item_219172.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'58px',top:'170px'}} id="item219173" className="pageItem " data-src="assets/images/item_219173.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'50px',top:'82px'}} id="item219175" className="pageItem " data-src="assets/images/item_219175.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'50px',top:'82px'}} id="item219176" className="pageItem " data-src="assets/images/item_219176.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'65px',top:'85px'}} id="item219177" className="pageItem " data-src="assets/images/item_219177.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'65px',top:'85px'}} id="item219178" className="pageItem " data-src="assets/images/item_219178.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'59px',top:'203px'}} id="item219179" className="pageItem " data-src="assets/images/item_219179.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'98px',top:'227px'}} id="item219180" className="pageItem " data-src="assets/images/item_219180.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'30px',top:'229px'}} id="item219182" className="pageItem " data-src="assets/images/item_219182.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'53px',top:'80px'}} id="item219186" className="pageItem " data-src="assets/images/item_219186.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'50px',top:'125px'}} id="item219187" className="pageItem " data-src="assets/images/item_219187.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'57px',top:'174px'}} id="item219188" className="pageItem " data-src="assets/images/item_219188.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'67px',top:'173px'}} id="item219189" className="pageItem " data-src="assets/images/item_219189.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'50px',top:'124px'}} id="item219191" className="pageItem " data-src="assets/images/item_219191.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'94px',top:'81px'}} id="item219192" className="pageItem " data-src="assets/images/item_219192.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'115px',top:'144px'}} id="item219193" className="pageItem " data-src="assets/images/item_219193.png" />
                                    <div alt="Oval" style={{left:'117px',top:'146px'}} id="item219194" className="pageItem ">
                                        <svg version="1.1" width="8" height="8" >
                                            <ellipse cx="2.84" cy="2.84" rx="2.84" ry="2.84" stroke="" strokeWidth="1" fill="#8c8c9b" />
                                        </svg>
                                    </div>
                                    <img src={blankImage} alt="Polygon" style={{left:'65px',top:'62px'}} id="item219195" className="pageItem " data-src="assets/images/item_219195.png" />
                                </div>
                            </div>
                        </button>
                        <div data-ani="flyinfrombottom-219196 1s cubic-bezier(.2,.6,.35,1) 1" data-id="219196" id="item219196" data-hidestart="1" className="pageItem group hidden" alt="mata" style={{left:'222px',top:'861px',width:' 26px',height:'5px'}}>
                            <div alt="Group" id="item219197" className="pageItem group ">
                                <div alt="Oval" id="item219198" className="pageItem ">
                                    <svg version="1.1" width="7" height="7" >
                                        <ellipse cx="2.2" cy="2.2" rx="2.2" ry="2.2" stroke="" strokeWidth="1" fill="#1c1463" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'1px',top:'1px'}} id="item219199" className="pageItem " data-src="assets/images/item_219199.png" />
                            </div>
                            <div alt="Group" style={{left:'22px'}} id="item219201" className="pageItem group ">
                                <div alt="Oval" id="item219202" className="pageItem ">
                                    <svg version="1.1" width="7" height="7" >
                                        <ellipse cx="2.2" cy="2.2" rx="2.2" ry="2.2" stroke="" strokeWidth="1" fill="#1c1463" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'1px',top:'1px'}} id="item219203" className="pageItem " data-src="assets/images/item_219203.png" />
                            </div>
                        </div>
                        <button data-ani="fadein-219246 1s linear 1" data-id="219246" id="item219246" data-hidestart="1" className="pageItem has-on has-down hidden" name="soal selanjutnya 11" onClick={handleOnClickGoToQuiz7} aria-label="soal selanjutnya 11">
                            <div className="pageItem state btn-off">
                                <div id="item219275" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Soal Selanjutnya" style={{left:'23px',top:'15px'}} id="item219277" className="pageItem " data-src="assets/images/item_219277.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item219301" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Soal Selanjutnya" style={{left:'23px',top:'15px'}} id="item219302" className="pageItem " data-src="assets/images/item_219302.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item219249" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Soal Selanjutnya" style={{left:'23px',top:'15px'}} id="item219251" className="pageItem " data-src="assets/images/item_219251.png" />
                            </div>
                        </button>
                        <button data-ani="fadein-219325 0.5s linear 1" data-id="219325" id="item219325" data-hidestart="1" className="pageItem has-on has-down hidden" name="cek penjelasan 9" onClick={handleOnClickGoToCekPenjelasan} aria-label="cek penjelasan 9">
                            <div className="pageItem state btn-off">
                                <div id="item219353" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Penjelasan" style={{left:'26px',top:'15px'}} id="item219355" className="pageItem " data-src="assets/images/item_219355.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item219379" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Penjelasan" style={{left:'26px',top:'15px'}} id="item219380" className="pageItem " data-src="assets/images/item_219380.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item219327" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Penjelasan" style={{left:'26px',top:'15px'}} id="item219329" className="pageItem " data-src="assets/images/item_219329.png" />
                            </div>
                        </button>
                        <button data-id="222038" name="icon beranda 114" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 114" id="item222038" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item222045" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item222046" className="pageItem " data-src="assets/images/item_222046.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item222047" className="pageItem " data-src="assets/images/item_222047.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item222050" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item222051" className="pageItem " data-src="assets/images/item_222051.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item222052" className="pageItem " data-src="assets/images/item_222052.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item222041" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item222042" className="pageItem " data-src="assets/images/item_222042.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item222043" className="pageItem " data-src="assets/images/item_222043.png" />
                            </div>
                        </button>
                        <button data-id="223719" name="icon back 72" onClick={handleOnClickGoToQuiz5} aria-label="icon back 72" id="item223719" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item223727" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item223728" className="pageItem " data-src="assets/images/item_223728.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item223730" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item223731" className="pageItem " data-src="assets/images/item_223731.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item223722" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item223724" className="pageItem " data-src="assets/images/item_223724.png" />
                            </div>
                        </button>
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item198525" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item198526" className="pageItem " data-src="assets/images/item_198526.png" />
                            <div alt="Group" style={{top:'132px'}} id="item198550" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item198551" className="pageItem " data-src="assets/images/item_198551.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item198552" className="pageItem " data-src="assets/images/item_198552.png" />
                            </div>
                        </div>
                        <Navigation />
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Quiz6;