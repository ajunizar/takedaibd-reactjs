import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Quiz5() {

    const navigate = useNavigate();

    const handleOnClickGoToQuiz6 = () => {
        window.location.href = '/quiz6'; // #54
    };
    //var referrer = document.referrer;
    //console.log("referrer url",referrer);
    const handleOnClickBack = () => {
        window.location.href = '/Quiz40';
    };
    const handleOnClickPreviousPage = () => {
        navigate(-1);
    };

    const handleOnClickGoToQuiz4 = () => {
        window.location.href = '/quiz4';
    }

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }

    const handleOnClickGoToCekPenjelasan = (event) => {
        window.location.href = '/quiz5Penjelasan';
    }

    const handleOnClickA = (event) => {
        event.preventDefault();
        jQuery("#item200289 video")[0].currentTime = 0;
        jQuery("#item200289 video")[0].play();
        jQuery("#item200309 audio")[0].currentTime = 0;
        jQuery("#item200309 audio")[0].play();
        go(event,[{n:1,link:1,id:199927,act:'hide'},{n:1,link:1,id:200263,act:'hide'}]);
        go(event,[{n:1,link:1,id:200264,act:'play'},{n:1,link:1,id:200265,act:'play'},{n:1,link:1,id:200266,act:'play'},{n:1,link:1,id:200267,act:'play'},{n:1,link:1,id:200268,act:'play'}]);
        go(event,[{n:1,link:1,id:219442,act:'play'},{n:1,link:1,id:200120,act:'play'},{n:1,link:1,id:218224,act:'play'},{n:1,id:218103,act:'play'},{n:1,id:218023,act:'hide'}]);
    }
    
    const handleOnClickB = (event) => {
        event.preventDefault();
        jQuery("#item200289 video")[0].currentTime = 0;
        jQuery("#item200289 video")[0].play();
        jQuery("#item200309 audio")[0].currentTime = 0;
        jQuery("#item200309 audio")[0].play();
        go(event,[{n:1,link:1,id:200263,act:'hide'},{n:1,link:1,id:199927,act:'hide'}]);
        go(event,[{n:1,link:1,id:200264,act:'play'},{n:1,link:1,id:200265,act:'play'},{n:1,link:1,id:200266,act:'play'},{n:1,link:1,id:200267,act:'play'},{n:1,link:1,id:200268,act:'play'}]);
        go(event,[{n:1,link:1,id:219446,act:'play'},{n:1,link:1,id:200120,act:'play'},{n:1,link:1,id:218224,act:'play'},{n:1,id:218103,act:'play'},{n:1,id:218023,act:'hide'}]);
    }
    
    const handleOnClickC = (event) => {
        event.preventDefault();
        jQuery("#item200283 video")[0].currentTime = 0;
        jQuery("#item200283 video")[0].play();
        jQuery("#item200305 audio")[0].currentTime = 0;
        jQuery("#item200305 audio")[0].play();
        go(event,[{n:1,link:1,id:200120,act:'hide'}]);
        go(event,[{n:1,link:1,id:200263,act:'play'},{n:1,link:1,id:199927,act:'play'},{n:1,id:218023,act:'play'},{n:1,link:1,id:218224,act:'hidden'},{del:2,n:1,id:200264,act:'play'},{n:1,id:218103,act:'hide'}]);
    }

    const handleOnClickD = (event) => {
        event.preventDefault();
        jQuery("#item200289 video")[0].currentTime = 0;
        jQuery("#item200289 video")[0].play();
        jQuery("#item200309 audio")[0].currentTime = 0;
        jQuery("#item200309 audio")[0].play();
        go(event,[{n:1,link:1,id:199927,act:'hide'}]);
        go(event,[{n:1,link:1,id:200264,act:'play'},{n:1,link:1,id:200265,act:'play'},{n:1,link:1,id:200266,act:'play'},{n:1,link:1,id:200267,act:'play'},{n:1,link:1,id:200268,act:'play'}]);
        go(event,[{n:1,link:1,id:219450,act:'play'},{n:1,link:1,id:200120,act:'play'},{n:1,link:1,id:218224,act:'play'},{n:1,id:218103,act:'play'},{n:1,id:218023,act:'hide'}]);
    }
    
    const handleOnClickE = (event) => {
        event.preventDefault();
        jQuery("#item200289 video")[0].currentTime = 0;
        jQuery("#item200289 video")[0].play();
        jQuery("#item200309 audio")[0].currentTime = 0;
        jQuery("#item200309 audio")[0].play();
        go(event,[{n:1,link:1,id:199927,act:'hide'}]);
        go(event,[{n:1,link:1,id:200264,act:'play'},{n:1,link:1,id:200265,act:'play'},{n:1,link:1,id:200266,act:'play'},{n:1,link:1,id:200267,act:'play'},{n:1,link:1,id:200268,act:'play'}]);
        go(event,[{n:1,link:1,id:219455,act:'play'},{n:1,link:1,id:200120,act:'play'},{n:1,link:1,id:218224,act:'play'},{n:1,id:218103,act:'play'},{n:1,id:218023,act:'hide'}]);
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
                <li className="page" data-name="60">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:199088,act:'play'},{del:3,n:1,id:201942,act:'play'},{del:4,n:1,link:1,id:199521,act:'play'},{n:1,id:201937,sn:1,act:'play'},{n:1,link:1,id:199522,act:'play'},{n:1,id:201938,sn:1,act:'play'},{n:1,link:1,id:199523,act:'play'},{n:1,id:201939,sn:1,act:'play'},{n:1,link:1,id:199524,act:'play'},{n:1,id:201940,sn:1,act:'play'},{n:1,link:1,id:199525,act:'play'},{n:1,id:201941,sn:1,act:'play'}], 'pageload');" style={{width:'1920px',height:'1080px'}}>
                        <div id="item264515" className="pageItem" style={{height:'60px',width:'60px',left:'11px',top:'346px'}} alt="Sound">
                            <audio data-id="264515" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/Quiz 5 Penjelasan FULL.mp3" />
                            </audio>
                        </div>
                        <div id="item264509" className="pageItem" style={{height:'60px',width:'60px',left:'62px',top:'280px'}} alt="Sound">
                            <audio data-id="264509" className="mejs-no-controls" data-autoplay="1" data-autodelay="0" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/Quiz 5 FULL.mp3" />
                            </audio>
                        </div>
                        <div id="item201945" className="pageItem" style={{height:'60px',width:'60px',left:'58px',top:'295px'}} alt="Sound">
                            <audio data-id="201945" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/quiz 5-3.mp3" />
                            </audio>
                        </div>
                        <div id="item201953" className="pageItem" style={{height:'60px',width:'60px',left:'76px',top:'400px'}} alt="Sound">
                            <audio data-id="201953" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/quiz 5-4.mp3" />
                            </audio>
                        </div>
                        <div id="item200305" className="pageItem" style={{height:'60px',width:'60px',left:'154px',top:'82px'}} alt="Sound">
                            <audio data-id="200305" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/jawaban benar.mp3" />
                            </audio>
                        </div>
                        <div id="item200309" className="pageItem" style={{height:'60px',width:'60px',left:'162px',top:'24px'}} alt="Sound">
                            <audio data-id="200309" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/jawaban salah.mp3" />
                            </audio>
                        </div>
                        <div id="item200314" className="pageItem" style={{height:'60px',width:'60px',left:'100px',top:'220px'}} alt="Sound">
                            <audio data-id="200314" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/quiz 5-1.mp3" />
                            </audio>
                        </div>
                        <div id="item200321" className="pageItem" style={{height:'60px',width:'60px',left:'106px',top:'302px'}} alt="Sound">
                            <audio data-id="200321" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/quiz 5-2.mp3" />
                            </audio>
                        </div>
                        <div id="item200283" className="pageItem" alt="Movie" style={{left:'1238px',top:'696px'}}>
                            <video width="640" height="360" data-id="200283" poster="assets/images/item_200283.png" data-stoplast="1" data-nopause="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/Correct Answer sound effect.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div id="item200289" className="pageItem" alt="Movie" style={{left:'1236px',top:'650px'}}>
                            <video width="640" height="360" data-id="200289" poster="assets/images/item_200289.png" data-stoplast="1" data-nopause="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/Incorrect Answer sound effect.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div id="item199084" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div data-ani="flyinfrombottom-201937 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="201937" id="item201937" data-hidestart="1" className="pageItem group hidden" alt="infliximab" style={{left:'317px',top:'462px',width:' 603px',height:'75px'}}>
                            <div id="item199183" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Infliximab " style={{left:'135px',top:'13px'}} id="item199382" className="pageItem " data-src="assets/images/item_199382.png" />
                        </div>
                        <div data-ani="flyinfrombottom-201938 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="201938" id="item201938" data-hidestart="1" className="pageItem group hidden" alt="golimumab" style={{left:'317px',top:'589px',width:' 603px',height:'75px'}}>
                            <div id="item199184" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Golimumab " style={{left:'135px',top:'14px'}} id="item199405" className="pageItem " data-src="assets/images/item_199405.png" />
                        </div>
                        <div data-ani="flyinfrombottom-201941 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="201941" id="item201941" data-hidestart="1" className="pageItem group hidden" alt="adalimumab" style={{left:'1032px',top:'589px',width:' 603px',height:'75px'}}>
                            <div id="item199191" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Adalimumab" style={{left:'135px',top:'14px'}} id="item199290" className="pageItem " data-src="assets/images/item_199290.png" />
                        </div>
                        <div data-ani="flyinfrombottom-201940 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="201940" id="item201940" data-hidestart="1" className="pageItem group hidden" alt="certolizumab" style={{left:'1032px',top:'462px',width:' 603px',height:'75px'}}>
                            <div id="item199190" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Certolizumab pegol" style={{left:'135px',top:'14px'}} id="item199429" className="pageItem " data-src="assets/images/item_199429.png" />
                        </div>
                        <div data-ani="flyinfrombottom-201939 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="201939" id="item201939" data-hidestart="1" className="pageItem group hidden" alt="vedolizumab" style={{left:'315px',top:'711px',width:' 603px',height:'75px'}}>
                            <div id="item199185" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Vedolizumab " style={{left:'135px',top:'14px'}} id="item199198" className="pageItem " data-src="assets/images/item_199198.png" />
                        </div>
                        <button data-ani="flyinfrombottom-199521 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="199521" id="item199521" data-hidestart="1" className="pageItem has-on has-down hidden" name="a" onClick={handleOnClickA} aria-label="a">
                            <div className="pageItem state btn-off">
                                <div id="item199186" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="a" style={{left:'39px',top:'35px'}} id="item199221" className="pageItem " data-src="assets/images/item_199221.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item199530" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="a" style={{left:'39px',top:'35px'}} id="item199531" className="pageItem " data-src="assets/images/item_199531.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item199556" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="a" style={{left:'39px',top:'35px'}} id="item199557" className="pageItem " data-src="assets/images/item_199557.png" />
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-199522 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="199522" id="item199522" data-hidestart="1" className="pageItem has-on has-down hidden" name="b" onClick={handleOnClickB} aria-label="b">
                            <div className="pageItem state btn-off">
                                <div id="item199188" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="b" style={{left:'38px',top:'41px'}} id="item199244" className="pageItem " data-src="assets/images/item_199244.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item199582" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="b" style={{left:'38px',top:'41px'}} id="item199583" className="pageItem " data-src="assets/images/item_199583.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item199608" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="b" style={{left:'38px',top:'41px'}} id="item199609" className="pageItem " data-src="assets/images/item_199609.png" />
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-199523 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="199523" id="item199523" data-hidestart="1" className="pageItem has-down has-on hidden" name="c" onClick={handleOnClickC} aria-label="c">
                            <div className="pageItem state btn-off">
                                <div id="item199189" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="c" style={{left:'42px',top:'35px'}} id="item199267" className="pageItem " data-src="assets/images/item_199267.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item199633" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="c" style={{left:'42px',top:'35px'}} id="item199634" className="pageItem " data-src="assets/images/item_199634.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item199663" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="c" style={{left:'42px',top:'35px'}} id="item199664" className="pageItem " data-src="assets/images/item_199664.png" />
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-199524 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="199524" id="item199524" data-hidestart="1" className="pageItem has-down has-on hidden" name="d" onClick={handleOnClickD} aria-label="d">
                            <div className="pageItem state btn-off">
                                <div id="item199192" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="d" style={{left:'38px',top:'41px'}} id="item199313" className="pageItem " data-src="assets/images/item_199313.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item199688" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="d" style={{left:'38px',top:'41px'}} id="item199689" className="pageItem " data-src="assets/images/item_199689.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item199713" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="d" style={{left:'38px',top:'41px'}} id="item199714" className="pageItem " data-src="assets/images/item_199714.png" />
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-199525 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="199525" id="item199525" data-hidestart="1" className="pageItem has-on has-down hidden" name="e" onClick={handleOnClickE} aria-label="e">
                            <div className="pageItem state btn-off">
                                <div id="item199193" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="e" style={{left:'40px',top:'35px'}} id="item199336" className="pageItem " data-src="assets/images/item_199336.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item199738" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="e" style={{left:'40px',top:'35px'}} id="item199739" className="pageItem " data-src="assets/images/item_199739.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item199763" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="e" style={{left:'40px',top:'35px'}} id="item199764" className="pageItem " data-src="assets/images/item_199764.png" />
                            </div>
                        </button>
                        <button data-ani="appear-200266 0.6s linear 1" data-id="200266" id="item200266" data-hidestart="1" className="pageItem hidden" name="anti a 1" aria-label="anti a 1">
                            <div className="pageItem state btn-off">
                                <div id="item199793" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Anti TNF a " style={{left:'13px',top:'30px'}} id="item199795" className="pageItem " data-src="assets/images/item_199795.png" />
                            </div>
                        </button>
                        <button data-ani="appear-200265 0.6s linear 1" data-id="200265" id="item200265" data-hidestart="1" className="pageItem hidden" name="anti a 2" aria-label="anti a 2">
                            <div className="pageItem state btn-off">
                                <div id="item199820" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Anti TNF a " style={{left:'13px',top:'30px'}} id="item199821" className="pageItem " data-src="assets/images/item_199821.png" />
                            </div>
                        </button>
                        <button data-ani="fadein-200264 1s linear 1" data-id="200264" id="item200264" data-hidestart="1" className="pageItem hidden" name="anti integrin" aria-label="anti integrin">
                            <div className="pageItem state btn-off">
                                <div id="item199845" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Anti integrin " style={{left:'13px',top:'30px'}} id="item199847" className="pageItem " data-src="assets/images/item_199847.png" />
                            </div>
                        </button>
                        <button data-ani="appear-200267 0.6s linear 1" data-id="200267" id="item200267" data-hidestart="1" className="pageItem hidden" name="anti a 4" aria-label="anti a 4">
                            <div className="pageItem state btn-off">
                                <div id="item199871" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Anti TNF a " style={{left:'13px',top:'30px'}} id="item199872" className="pageItem " data-src="assets/images/item_199872.png" />
                            </div>
                        </button>
                        <button data-ani="appear-200268 0.6s linear 1" data-id="200268" id="item200268" data-hidestart="1" className="pageItem hidden" name="anti a 5" aria-label="anti a 5">
                            <div className="pageItem state btn-off">
                                <div id="item199896" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Anti TNF a " style={{left:'13px',top:'30px'}} id="item199897" className="pageItem " data-src="assets/images/item_199897.png" />
                            </div>
                        </button>
                        <div data-ani="flyinfromtop-201942 1s cubic-bezier(.2,.6,.35,1) 1" data-id="201942" id="item201942" data-hidestart="1" className="pageItem group hidden" alt="soal" style={{left:'360px',top:'295px',width:' 1221px',height:'118px'}}>
                            <div id="item199194" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Dibawah ini yang BUKAN merupakan anti TNF α adalah:" style={{left:'41px',top:'34px'}} id="item199359" className="pageItem " data-src="assets/images/item_199359.png" />
                        </div>
                        <button data-ani="appear-200263 0.6s linear 1" data-id="200263" id="item200263" data-hidestart="1" className="pageItem hidden" name="ceklist" aria-label="ceklist">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item199196" className="pageItem " data-src="assets/images/item_199196.png" />
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-199927 1s cubic-bezier(.2,.6,.35,1) 1" data-id="199927" id="item199927" data-hidestart="1" className="pageItem hidden" name="jawaban benar 3" aria-label="jawaban benar 3">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" style={{top:'65px'}} id="item199929" className="pageItem ">
                                    <svg version="1.1" width="312" height="312">
                                        <ellipse cx="155.88" cy="155.88" rx="155.88" ry="155.88" fill="#fff" />
                                    </svg>
                                </div>
                                <div alt="Group" style={{left:'286px',top:'66px'}} id="item199930" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" id="item199931" className="pageItem " data-src="assets/images/item_199931.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px',top:'103px'}} id="item199933" className="pageItem " data-src="assets/images/item_199933.png" />
                                </div>
                                <img src={blankImage} alt="Jawaban Kamu Benar! " style={{left:'298px',top:'88px'}} id="item199934" className="pageItem " data-src="assets/images/item_199934.png" />
                                <div alt="Group" style={{left:'33px'}} id="item199957" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{left:'70px',top:'99px'}} id="item199958" className="pageItem " data-src="assets/images/item_199958.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'115px',top:'88px'}} id="item199959" className="pageItem " data-src="assets/images/item_199959.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'33px',top:'282px'}} id="item199960" className="pageItem " data-src="assets/images/item_199960.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'211px',top:'53px'}} id="item199961" className="pageItem " data-src="assets/images/item_199961.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'222px',top:'57px'}} id="item199962" className="pageItem " data-src="assets/images/item_199962.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'180px',top:'53px'}} id="item199963" className="pageItem " data-src="assets/images/item_199963.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'192px',top:'75px'}} id="item199964" className="pageItem " data-src="assets/images/item_199964.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'180px',top:'53px'}} id="item199965" className="pageItem " data-src="assets/images/item_199965.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'212px',top:'53px'}} id="item199966" className="pageItem " data-src="assets/images/item_199966.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'217px',top:'57px'}} id="item199967" className="pageItem " data-src="assets/images/item_199967.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'211px',top:'68px'}} id="item199968" className="pageItem " data-src="assets/images/item_199968.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'211px',top:'61px'}} id="item199969" className="pageItem " data-src="assets/images/item_199969.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'219px',top:'63px'}} id="item199970" className="pageItem " data-src="assets/images/item_199970.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'217px',top:'71px'}} id="item199971" className="pageItem " data-src="assets/images/item_199971.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'222px',top:'79px'}} id="item199972" className="pageItem " data-src="assets/images/item_199972.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'225px',top:'73px'}} id="item199973" className="pageItem " data-src="assets/images/item_199973.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'202px',top:'73px'}} id="item199974" className="pageItem " data-src="assets/images/item_199974.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'195px',top:'81px'}} id="item199975" className="pageItem " data-src="assets/images/item_199975.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'198px',top:'103px'}} id="item199976" className="pageItem " data-src="assets/images/item_199976.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'194px',top:'74px'}} id="item199977" className="pageItem " data-src="assets/images/item_199977.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'194px',top:'72px'}} id="item199978" className="pageItem " data-src="assets/images/item_199978.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'192px',top:'74px'}} id="item199979" className="pageItem " data-src="assets/images/item_199979.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'203px',top:'85px'}} id="item199980" className="pageItem " data-src="assets/images/item_199980.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'202px',top:'85px'}} id="item199981" className="pageItem " data-src="assets/images/item_199981.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'112px',top:'24px'}} id="item199985" className="pageItem " data-src="assets/images/item_199985.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'112px',top:'25px'}} id="item199986" className="pageItem " data-src="assets/images/item_199986.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'111px',top:'31px'}} id="item199987" className="pageItem " data-src="assets/images/item_199987.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'75px',top:'63px'}} id="item199988" className="pageItem " data-src="assets/images/item_199988.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'88px',top:'63px'}} id="item199989" className="pageItem " data-src="assets/images/item_199989.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'62px',top:'102px'}} id="item199990" className="pageItem " data-src="assets/images/item_199990.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'66px',top:'44px'}} id="item199991" className="pageItem " data-src="assets/images/item_199991.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'119px',top:'46px'}} id="item199992" className="pageItem " data-src="assets/images/item_199992.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'122px',top:'47px'}} id="item199993" className="pageItem " data-src="assets/images/item_199993.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'67px'}} id="item199994" className="pageItem " data-src="assets/images/item_199994.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'69px',top:'14px'}} id="item199995" className="pageItem " data-src="assets/images/item_199995.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'97px',top:'36px'}} id="item199996" className="pageItem " data-src="assets/images/item_199996.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'72px',top:'36px'}} id="item199997" className="pageItem " data-src="assets/images/item_199997.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'69px',top:'14px'}} id="item199998" className="pageItem " data-src="assets/images/item_199998.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'83px',top:'58px'}} id="item199999" className="pageItem " data-src="assets/images/item_199999.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'73px',top:'43px'}} id="item200001" className="pageItem " data-src="assets/images/item_200001.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'73px',top:'43px'}} id="item200002" className="pageItem " data-src="assets/images/item_200002.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'72px',top:'43px'}} id="item200007" className="pageItem " data-src="assets/images/item_200007.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'72px',top:'41px'}} id="item200008" className="pageItem " data-src="assets/images/item_200008.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'98px',top:'43px'}} id="item200009" className="pageItem " data-src="assets/images/item_200009.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'98px',top:'43px'}} id="item200010" className="pageItem " data-src="assets/images/item_200010.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'98px',top:'42px'}} id="item200015" className="pageItem " data-src="assets/images/item_200015.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'98px',top:'45px'}} id="item200016" className="pageItem " data-src="assets/images/item_200016.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'72px',top:'45px'}} id="item200017" className="pageItem " data-src="assets/images/item_200017.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'98px',top:'41px'}} id="item200018" className="pageItem " data-src="assets/images/item_200018.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'98px',top:'36px'}} id="item200019" className="pageItem " data-src="assets/images/item_200019.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'69px',top:'36px'}} id="item200020" className="pageItem " data-src="assets/images/item_200020.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'84px',top:'48px'}} id="item200021" className="pageItem " data-src="assets/images/item_200021.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'81px',top:'41px'}} id="item200023" className="pageItem " data-src="assets/images/item_200023.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'94px',top:'42px'}} id="item200024" className="pageItem " data-src="assets/images/item_200024.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'106px',top:'41px'}} id="item200025" className="pageItem " data-src="assets/images/item_200025.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'111px',top:'41px'}} id="item200026" className="pageItem " data-src="assets/images/item_200026.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'99px',top:'44px'}} id="item200027" className="pageItem " data-src="assets/images/item_200027.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'103px',top:'47px'}} id="item200028" className="pageItem " data-src="assets/images/item_200028.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'109px',top:'44px'}} id="item200029" className="pageItem " data-src="assets/images/item_200029.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'98px',top:'45px'}} id="item200030" className="pageItem " data-src="assets/images/item_200030.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'99px',top:'42px'}} id="item200031" className="pageItem " data-src="assets/images/item_200031.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'102px',top:'41px'}} id="item200032" className="pageItem " data-src="assets/images/item_200032.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'97px',top:'42px'}} id="item200037" className="pageItem " data-src="assets/images/item_200037.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'106px',top:'41px'}} id="item200039" className="pageItem " data-src="assets/images/item_200039.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'94px',top:'42px'}} id="item200040" className="pageItem " data-src="assets/images/item_200040.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'97px',top:'41px'}} id="item200041" className="pageItem " data-src="assets/images/item_200041.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'98px',top:'43px'}} id="item200042" className="pageItem " data-src="assets/images/item_200042.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'102px',top:'43px'}} id="item200043" className="pageItem " data-src="assets/images/item_200043.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'103px',top:'44px'}} id="item200044" className="pageItem " data-src="assets/images/item_200044.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'98px',top:'42px'}} id="item200046" className="pageItem " data-src="assets/images/item_200046.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'98px',top:'41px'}} id="item200047" className="pageItem " data-src="assets/images/item_200047.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'94px',top:'41px'}} id="item200048" className="pageItem " data-src="assets/images/item_200048.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'65px',top:'41px'}} id="item200049" className="pageItem " data-src="assets/images/item_200049.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'66px',top:'47px'}} id="item200050" className="pageItem " data-src="assets/images/item_200050.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'68px',top:'41px'}} id="item200051" className="pageItem " data-src="assets/images/item_200051.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'69px',top:'42px'}} id="item200052" className="pageItem " data-src="assets/images/item_200052.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'75px',top:'41px'}} id="item200053" className="pageItem " data-src="assets/images/item_200053.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'69px',top:'41px'}} id="item200054" className="pageItem " data-src="assets/images/item_200054.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'76px',top:'45px'}} id="item200055" className="pageItem " data-src="assets/images/item_200055.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'77px',top:'44px'}} id="item200057" className="pageItem " data-src="assets/images/item_200057.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'79px',top:'44px'}} id="item200058" className="pageItem " data-src="assets/images/item_200058.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'80px',top:'43px'}} id="item200060" className="pageItem " data-src="assets/images/item_200060.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'76px',top:'41px'}} id="item200061" className="pageItem " data-src="assets/images/item_200061.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'73px',top:'48px'}} id="item200062" className="pageItem " data-src="assets/images/item_200062.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'65px',top:'41px'}} id="item200063" className="pageItem " data-src="assets/images/item_200063.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'66px',top:'45px'}} id="item200064" className="pageItem " data-src="assets/images/item_200064.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'68px',top:'41px'}} id="item200065" className="pageItem " data-src="assets/images/item_200065.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'69px',top:'42px'}} id="item200066" className="pageItem " data-src="assets/images/item_200066.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'73px',top:'41px'}} id="item200067" className="pageItem " data-src="assets/images/item_200067.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'69px',top:'41px'}} id="item200068" className="pageItem " data-src="assets/images/item_200068.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'73px',top:'43px'}} id="item200069" className="pageItem " data-src="assets/images/item_200069.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'77px',top:'43px'}} id="item200070" className="pageItem " data-src="assets/images/item_200070.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'72px',top:'43px'}} id="item200073" className="pageItem " data-src="assets/images/item_200073.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'72px',top:'41px'}} id="item200074" className="pageItem " data-src="assets/images/item_200074.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'72px',top:'45px'}} id="item200075" className="pageItem " data-src="assets/images/item_200075.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'65px',top:'41px'}} id="item200076" className="pageItem " data-src="assets/images/item_200076.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'85px',top:'42px'}} id="item200077" className="pageItem " data-src="assets/images/item_200077.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'75px',top:'1px'}} id="item200078" className="pageItem " data-src="assets/images/item_200078.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'121px',top:'56px'}} id="item200079" className="pageItem " data-src="assets/images/item_200079.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'2px',top:'119px'}} id="item200080" className="pageItem " data-src="assets/images/item_200080.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'28px',top:'92px'}} id="item200081" className="pageItem " data-src="assets/images/item_200081.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'66px',top:'88px'}} id="item200082" className="pageItem " data-src="assets/images/item_200082.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'121px',top:'107px'}} id="item200083" className="pageItem " data-src="assets/images/item_200083.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'91px',top:'241px'}} id="item200084" className="pageItem " data-src="assets/images/item_200084.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'71px',top:'84px'}} id="item200085" className="pageItem " data-src="assets/images/item_200085.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'72px',top:'181px'}} id="item200086" className="pageItem " data-src="assets/images/item_200086.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'68px',top:'217px'}} id="item200087" className="pageItem " data-src="assets/images/item_200087.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'67px',top:'250px'}} id="item200088" className="pageItem " data-src="assets/images/item_200088.png" />
                                    <div alt="Oval" style={{left:'66px',top:'277px'}} id="item200089" className="pageItem ">
                                        <svg version="1.1" width="8" height="8">
                                            <ellipse cx="2.58" cy="2.58" rx="2.58" ry="2.58" stroke="" strokeWidth="1" fill="#bcced1" />
                                        </svg>
                                    </div>
                                    <img src={blankImage} alt="Polygon" style={{left:'133px',top:'105px'}} id="item200090" className="pageItem " data-src="assets/images/item_200090.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'138px',top:'109px'}} id="item200092" className="pageItem " data-src="assets/images/item_200092.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'193px',top:'112px'}} id="item200093" className="pageItem " data-src="assets/images/item_200093.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'161px',top:'117px'}} id="item200094" className="pageItem " data-src="assets/images/item_200094.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'14px',top:'142px'}} id="item200096" className="pageItem " data-src="assets/images/item_200096.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'14px',top:'141px'}} id="item200097" className="pageItem " data-src="assets/images/item_200097.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'25px',top:'223px'}} id="item200098" className="pageItem " data-src="assets/images/item_200098.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'26px',top:'199px'}} id="item200099" className="pageItem " data-src="assets/images/item_200099.png" />
                                    <img src={blankImage} alt="Polygon" style={{top:'190px'}} id="item200100" className="pageItem " data-src="assets/images/item_200100.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'35px',top:'184px'}} id="item200101" className="pageItem " data-src="assets/images/item_200101.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'35px',top:'184px'}} id="item200102" className="pageItem " data-src="assets/images/item_200102.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'47px',top:'208px'}} id="item200103" className="pageItem " data-src="assets/images/item_200103.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'49px',top:'214px'}} id="item200104" className="pageItem " data-src="assets/images/item_200104.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'51px',top:'221px'}} id="item200105" className="pageItem " data-src="assets/images/item_200105.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'127px',top:'90px'}} id="item200106" className="pageItem " data-src="assets/images/item_200106.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'125px',top:'147px'}} id="item200107" className="pageItem " data-src="assets/images/item_200107.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'127px',top:'149px'}} id="item200108" className="pageItem " data-src="assets/images/item_200108.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'59px',top:'86px'}} id="item200109" className="pageItem " data-src="assets/images/item_200109.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'58px',top:'101px'}} id="item200110" className="pageItem " data-src="assets/images/item_200110.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'55px',top:'138px'}} id="item200111" className="pageItem " data-src="assets/images/item_200111.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'61px',top:'180px'}} id="item200113" className="pageItem " data-src="assets/images/item_200113.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'70px',top:'179px'}} id="item200114" className="pageItem " data-src="assets/images/item_200114.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'55px',top:'138px'}} id="item200115" className="pageItem " data-src="assets/images/item_200115.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'81px',top:'64px'}} id="item200118" className="pageItem " data-src="assets/images/item_200118.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'84px',top:'67px'}} id="item200119" className="pageItem " data-src="assets/images/item_200119.png" />
                                </div>
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-200120 1s cubic-bezier(.2,.6,.35,1) 1" data-id="200120" id="item200120" data-hidestart="1" className="pageItem hidden" name="jawaban salah 3" aria-label="jawaban salah 3">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" style={{top:'67px'}} id="item200122" className="pageItem ">
                                    <svg version="1.1" width="312" height="312">
                                        <ellipse cx="155.88" cy="155.88" rx="155.88" ry="155.88" fill="#fff" />
                                    </svg>
                                </div>
                                <div alt="Group" style={{left:'286px',top:'67px'}} id="item200123" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" id="item200124" className="pageItem " data-src="assets/images/item_200124.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px',top:'103px'}} id="item200126" className="pageItem " data-src="assets/images/item_200126.png" />
                                </div>
                                <img src={blankImage} alt="Jawaban Kamu Kurang Tepat! " style={{left:'283px',top:'92px'}} id="item200127" className="pageItem " data-src="assets/images/item_200127.png" />
                                <div alt="Group" style={{left:'75px'}} id="item200150" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{left:'41px',top:'28px'}} id="item200152" className="pageItem " data-src="assets/images/item_200152.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'48px',top:'33px'}} id="item200153" className="pageItem " data-src="assets/images/item_200153.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'61px',top:'59px'}} id="item200154" className="pageItem " data-src="assets/images/item_200154.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'58px',top:'59px'}} id="item200155" className="pageItem " data-src="assets/images/item_200155.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'49px',top:'42px'}} id="item200156" className="pageItem " data-src="assets/images/item_200156.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'50px',top:'44px'}} id="item200157" className="pageItem " data-src="assets/images/item_200157.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'101px',top:'43px'}} id="item200158" className="pageItem " data-src="assets/images/item_200158.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'103px',top:'44px'}} id="item200159" className="pageItem " data-src="assets/images/item_200159.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'54px',top:'13px'}} id="item200160" className="pageItem " data-src="assets/images/item_200160.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'54px',top:'13px'}} id="item200161" className="pageItem " data-src="assets/images/item_200161.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'53px',top:'39px'}} id="item200162" className="pageItem " data-src="assets/images/item_200162.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'88px',top:'49px'}} id="item200163" className="pageItem " data-src="assets/images/item_200163.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'80px',top:'34px'}} id="item200164" className="pageItem " data-src="assets/images/item_200164.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'57px',top:'34px'}} id="item200165" className="pageItem " data-src="assets/images/item_200165.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'81px',top:'40px'}} id="item200166" className="pageItem " data-src="assets/images/item_200166.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'81px',top:'40px'}} id="item200167" className="pageItem " data-src="assets/images/item_200167.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'81px',top:'40px'}} id="item200171" className="pageItem " data-src="assets/images/item_200171.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'81px',top:'43px'}} id="item200172" className="pageItem " data-src="assets/images/item_200172.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'81px',top:'38px'}} id="item200173" className="pageItem " data-src="assets/images/item_200173.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'58px',top:'40px'}} id="item200174" className="pageItem " data-src="assets/images/item_200174.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'58px',top:'40px'}} id="item200175" className="pageItem " data-src="assets/images/item_200175.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'58px',top:'39px'}} id="item200179" className="pageItem " data-src="assets/images/item_200179.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'58px',top:'43px'}} id="item200180" className="pageItem " data-src="assets/images/item_200180.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'58px',top:'38px'}} id="item200181" className="pageItem " data-src="assets/images/item_200181.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'81px',top:'32px'}} id="item200182" className="pageItem " data-src="assets/images/item_200182.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'55px',top:'33px'}} id="item200183" className="pageItem " data-src="assets/images/item_200183.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'70px',top:'45px'}} id="item200184" className="pageItem " data-src="assets/images/item_200184.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'69px',top:'54px'}} id="item200185" className="pageItem " data-src="assets/images/item_200185.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'68px',top:'38px'}} id="item200187" className="pageItem " data-src="assets/images/item_200187.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'67px',top:'11px'}} id="item200189" className="pageItem " data-src="assets/images/item_200189.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'40px'}} id="item200190" className="pageItem " data-src="assets/images/item_200190.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'87px',top:'17px'}} id="item200191" className="pageItem " data-src="assets/images/item_200191.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'78px',top:'36px'}} id="item200192" className="pageItem " data-src="assets/images/item_200192.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'54px',top:'36px'}} id="item200193" className="pageItem " data-src="assets/images/item_200193.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'70px',top:'39px'}} id="item200194" className="pageItem " data-src="assets/images/item_200194.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'95px',top:'43px'}} id="item200195" className="pageItem " data-src="assets/images/item_200195.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'63px',top:'103px'}} id="item200196" className="pageItem " data-src="assets/images/item_200196.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'30px',top:'269px'}} id="item200197" className="pageItem " data-src="assets/images/item_200197.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'22px',top:'87px'}} id="item200198" className="pageItem " data-src="assets/images/item_200198.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'22px',top:'192px'}} id="item200199" className="pageItem " data-src="assets/images/item_200199.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'74px',top:'87px'}} id="item200200" className="pageItem " data-src="assets/images/item_200200.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'74px',top:'192px'}} id="item200201" className="pageItem " data-src="assets/images/item_200201.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'56px',top:'103px'}} id="item200202" className="pageItem " data-src="assets/images/item_200202.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'120px',top:'155px'}} id="item200203" className="pageItem " data-src="assets/images/item_200203.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'117px',top:'109px'}} id="item200204" className="pageItem " data-src="assets/images/item_200204.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'122px',top:'131px'}} id="item200205" className="pageItem " data-src="assets/images/item_200205.png" />
                                    <img src={blankImage} alt="Polygon" style={{top:'110px'}} id="item200206" className="pageItem " data-src="assets/images/item_200206.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'5px',top:'110px'}} id="item200207" className="pageItem " data-src="assets/images/item_200207.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'7px',top:'172px'}} id="item200208" className="pageItem " data-src="assets/images/item_200208.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'27px',top:'109px'}} id="item200209" className="pageItem " data-src="assets/images/item_200209.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'33px',top:'144px'}} id="item200210" className="pageItem " data-src="assets/images/item_200210.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'107px',top:'155px'}} id="item200211" className="pageItem " data-src="assets/images/item_200211.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'114px',top:'157px'}} id="item200212" className="pageItem " data-src="assets/images/item_200212.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'120px',top:'164px'}} id="item200213" className="pageItem " data-src="assets/images/item_200213.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'122px',top:'155px'}} id="item200214" className="pageItem " data-src="assets/images/item_200214.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'126px',top:'157px'}} id="item200215" className="pageItem " data-src="assets/images/item_200215.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'128px',top:'164px'}} id="item200216" className="pageItem " data-src="assets/images/item_200216.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'113px',top:'160px'}} id="item200217" className="pageItem " data-src="assets/images/item_200217.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'117px',top:'167px'}} id="item200218" className="pageItem " data-src="assets/images/item_200218.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'7px',top:'169px'}} id="item200219" className="pageItem " data-src="assets/images/item_200219.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'9px',top:'173px'}} id="item200220" className="pageItem " data-src="assets/images/item_200220.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'17px',top:'198px'}} id="item200222" className="pageItem " data-src="assets/images/item_200222.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'7px',top:'184px'}} id="item200223" className="pageItem " data-src="assets/images/item_200223.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'8px',top:'189px'}} id="item200224" className="pageItem " data-src="assets/images/item_200224.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'52px',top:'178px'}} id="item200225" className="pageItem " data-src="assets/images/item_200225.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'58px',top:'170px'}} id="item200227" className="pageItem " data-src="assets/images/item_200227.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'50px',top:'82px'}} id="item200229" className="pageItem " data-src="assets/images/item_200229.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'50px',top:'82px'}} id="item200230" className="pageItem " data-src="assets/images/item_200230.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'65px',top:'85px'}} id="item200231" className="pageItem " data-src="assets/images/item_200231.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'65px',top:'85px'}} id="item200232" className="pageItem " data-src="assets/images/item_200232.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'59px',top:'203px'}} id="item200233" className="pageItem " data-src="assets/images/item_200233.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'98px',top:'227px'}} id="item200234" className="pageItem " data-src="assets/images/item_200234.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'30px',top:'229px'}} id="item200235" className="pageItem " data-src="assets/images/item_200235.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'53px',top:'80px'}} id="item200239" className="pageItem " data-src="assets/images/item_200239.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'50px',top:'125px'}} id="item200240" className="pageItem " data-src="assets/images/item_200240.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'57px',top:'174px'}} id="item200241" className="pageItem " data-src="assets/images/item_200241.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'67px',top:'173px'}} id="item200242" className="pageItem " data-src="assets/images/item_200242.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'50px',top:'124px'}} id="item200243" className="pageItem " data-src="assets/images/item_200243.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'94px',top:'81px'}} id="item200244" className="pageItem " data-src="assets/images/item_200244.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'115px',top:'144px'}} id="item200246" className="pageItem " data-src="assets/images/item_200246.png" />
                                    <div alt="Oval" style={{left:'117px',top:'146px'}} id="item200248" className="pageItem ">
                                        <svg version="1.1" width="8" height="8">
                                            <ellipse cx="2.84" cy="2.84" rx="2.84" ry="2.84" stroke="" strokeWidth="1" fill="#8c8c9b" />
                                        </svg>
                                    </div>
                                    <img src={blankImage} alt="Polygon" style={{left:'65px',top:'62px'}} id="item200249" className="pageItem " data-src="assets/images/item_200249.png" />
                                </div>
                            </div>
                        </button>
                        <div id="item199082" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item199086" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <img src={blankImage} data-ani="fadein-199088 1s linear 1" data-id="199088" id="item199088" data-hidestart="1" className="pageItem hidden" alt="KUIS 5" style={{left:'712px',top:'157px'}} data-src="assets/images/item_199088.png" />
                        <button data-ani="fadein-218023 1s linear 1" data-id="218023" id="item218023" data-hidestart="1" className="pageItem has-on has-down hidden" name="soal selanjutnya 10" onClick={handleOnClickGoToQuiz6} aria-label="soal selanjutnya 10">
                            <div className="pageItem state btn-off">
                                <div id="item218052" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Soal Selanjutnya" style={{left:'23px',top:'15px'}} id="item218054" className="pageItem " data-src="assets/images/item_218054.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item218079" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Soal Selanjutnya" style={{left:'23px',top:'15px'}} id="item218080" className="pageItem " data-src="assets/images/item_218080.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item218026" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Soal Selanjutnya" style={{left:'23px',top:'15px'}} id="item218028" className="pageItem " data-src="assets/images/item_218028.png" />
                            </div>
                        </button>
                        <button data-ani="fadein-218103 0.5s linear 1" data-id="218103" id="item218103" data-hidestart="1" className="pageItem has-on has-down hidden" name="cek penjelasan 8" onClick="go(event,[{del:2,n:1,id:200264,act:'play'},{del:5,n:1,id:200266,act:'play'},{del:1,n:1,id:200265,act:'play'},{del:1,n:1,id:200267,act:'play'},{del:1,n:1,id:200268,act:'play'}]);" data-click-play="264515" aria-label="cek penjelasan 8">
                            <div className="pageItem state btn-off">
                                <div id="item218132" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Penjelasan" style={{left:'26px',top:'15px'}} id="item218134" className="pageItem " data-src="assets/images/item_218134.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item218158" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Penjelasan" style={{left:'26px',top:'15px'}} id="item218159" className="pageItem " data-src="assets/images/item_218159.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item218106" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Penjelasan" style={{left:'26px',top:'15px'}} id="item218108" className="pageItem " data-src="assets/images/item_218108.png" />
                            </div>
                        </button>
                        <div data-ani="flyinfrombottom-218224 1s cubic-bezier(.2,.6,.35,1) 1" data-id="218224" id="item218224" data-hidestart="1" className="pageItem group hidden" alt="mata" style={{left:'222px',top:'861px',width:' 26px',height:'5px'}}>
                            <div alt="Group" id="item218225" className="pageItem group ">
                                <div alt="Oval" id="item218226" className="pageItem ">
                                    <svg version="1.1" width="7" height="7">
                                        <ellipse cx="2.2" cy="2.2" rx="2.2" ry="2.2" stroke="" strokeWidth="1" fill="#1c1463" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'1px',top:'1px'}} id="item218227" className="pageItem " data-src="assets/images/item_218227.png" />
                            </div>
                            <div alt="Group" style={{left:'22px'}} id="item218229" className="pageItem group ">
                                <div alt="Oval" id="item218230" className="pageItem ">
                                    <svg version="1.1" width="7" height="7">
                                        <ellipse cx="2.2" cy="2.2" rx="2.2" ry="2.2" stroke="" strokeWidth="1" fill="#1c1463" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'1px',top:'1px'}} id="item218231" className="pageItem " data-src="assets/images/item_218231.png" />
                            </div>
                        </div>
                        <button data-ani="appear-219442 0.6s linear 1" data-id="219442" id="item219442" data-hidestart="1" className="pageItem hidden" name="1 x 2" aria-label="1 x 2">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item219444" className="pageItem " data-src="assets/images/item_219444.png" />
                                <img src={blankImage} alt="Polygon" id="item219445" className="pageItem " data-src="assets/images/item_219445.png" />
                            </div>
                        </button>
                        <button data-ani="appear-219450 0.6s linear 1" data-id="219450" id="item219450" data-hidestart="1" className="pageItem hidden" name="1 x 4" aria-label="1 x 4">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item219452" className="pageItem " data-src="assets/images/item_219452.png" />
                                <img src={blankImage} alt="Polygon" id="item219453" className="pageItem " data-src="assets/images/item_219453.png" />
                            </div>
                        </button>
                        <button data-ani="appear-219446 0.6s linear 1" data-id="219446" id="item219446" data-hidestart="1" className="pageItem hidden" name="1 x 3" aria-label="1 x 3">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item219448" className="pageItem " data-src="assets/images/item_219448.png" />
                                <img src={blankImage} alt="Polygon" id="item219449" className="pageItem " data-src="assets/images/item_219449.png" />
                            </div>
                        </button>
                        <button data-ani="appear-219455 0.6s linear 1" data-id="219455" id="item219455" data-hidestart="1" className="pageItem hidden" name="1 x 5" aria-label="1 x 5">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item219457" className="pageItem " data-src="assets/images/item_219457.png" />
                                <img src={blankImage} alt="Polygon" id="item219458" className="pageItem " data-src="assets/images/item_219458.png" />
                            </div>
                        </button>
                        <button data-id="222023" name="icon beranda 113" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 113" id="item222023" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item222030" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item222031" className="pageItem " data-src="assets/images/item_222031.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item222032" className="pageItem " data-src="assets/images/item_222032.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item222034" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item222036" className="pageItem " data-src="assets/images/item_222036.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item222037" className="pageItem " data-src="assets/images/item_222037.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item222026" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item222027" className="pageItem " data-src="assets/images/item_222027.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item222028" className="pageItem " data-src="assets/images/item_222028.png" />
                            </div>
                        </button>
                        <button data-id="223646" name="icon back 69" onClick={handleOnClickGoToQuiz4} aria-label="icon back 69" id="item223646" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item223654" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item223655" className="pageItem " data-src="assets/images/item_223655.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item223658" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item223659" className="pageItem " data-src="assets/images/item_223659.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item223649" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item223651" className="pageItem " data-src="assets/images/item_223651.png" />
                            </div>
                        </button>
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item197968" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item197969" className="pageItem " data-src="assets/images/item_197969.png" />
                            <div alt="Group" style={{top:'132px'}} id="item197992" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item197993" className="pageItem " data-src="assets/images/item_197993.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item197994" className="pageItem " data-src="assets/images/item_197994.png" />
                            </div>
                        </div>
                        <Navigation />
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Quiz5;