import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Quiz7() {

    const navigate = useNavigate();

    const handleOnClickGoToQuiz6 = () => {
        window.location.href = '/quiz6';
    };
    //var referrer = document.referrer;
    //console.log("referrer url",referrer);
    const handleOnClickBack = () => {
        window.location.href = '/Quiz40';
    };
    const handleOnClickPreviousPage = () => {
        navigate(-1);
    };

    const handleOnClickGoToTerimaKasih = () => {
        window.location.href = '/quiz-terima-kasih';
    }

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }


    const handleOnClickGoToCekPenjelasan = (event) => {
        window.location.href = '/quiz7Penjelasan';
    }

    const handleOnClickBenar = (event) => {
        event.preventDefault();
        jQuery("#item207157 video")[0].currentTime = 0;
        jQuery("#item207157 video")[0].play();
        jQuery("#item207147 audio")[0].currentTime = 0;
        jQuery("#item207147 audio")[0].play();
        go(event,[{n:1,link:1,id:206242,act:'hide'},{n:1,link:1,id:207238,act:'hide'}]);
        go(event,[{n:1,link:1,id:207232,act:'play'},{n:1,link:1,id:206435,act:'play'},{n:1,link:1,id:220073,act:'play'},{n:1,id:219947,act:'play'}]);   
    }

    const handleOnClickSalah = (event) => {
        event.preventDefault();
        jQuery("#item207152 video")[0].currentTime = 0;
        jQuery("#item207152 video")[0].play();
        jQuery("#item207143 audio")[0].currentTime = 0;
        jQuery("#item207143 audio")[0].play();
        go(event,[{n:1,link:1,id:206435,act:'hide'},{n:1,link:1,id:207232,act:'hide'},{n:1,link:1,id:219947,act:'hide'}]); 
        go(event,[{n:1,link:1,id:207238,act:'play'},{n:1,link:1,id:206242,act:'play'},{n:1,id:226741,act:'play'}]);    
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
                <li className="page" data-name="63">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:205354,act:'play'},{del:7,n:1,id:206237,act:'play'},{del:12,n:1,link:1,id:206235,act:'play'},{n:1,id:207242,sn:1,act:'play'},{n:1,link:1,id:206236,act:'play'},{n:1,id:207240,sn:1,act:'play'},{n:1,id:226741,act:'play'}], 'pageload');" style={{width:'1920px',height:'1080px'}}>
                        <div id="item264552" className="pageItem" style={{height:'60px',width:'60px',left:'37px',top:'301px'}} alt="Sound">
                            <audio data-id="264552" className="mejs-no-controls" data-autoplay="1" data-autodelay="0" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/Quiz 7 FULL.mp3" />
                            </audio>
                        </div>
                        <div id="item227338" className="pageItem" style={{height:'60px',width:'60px',left:'118px',top:'157px'}} alt="Sound">
                            <audio data-id="227338" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/quiz 7-3.mp3" />
                            </audio>
                        </div>
                        <div id="item207268" className="pageItem" style={{height:'60px',width:'60px',left:'396px',top:'44px'}} alt="Sound">
                            <audio data-id="207268" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/quiz 7-3.mp3" />
                            </audio>
                        </div>
                        <div id="item207152" className="pageItem" alt="Movie" style={{left:'-18px',top:'231px'}}>
                            <video width="640" height="360" data-id="207152" poster="assets/images/item_207152.png" data-stoplast="1" data-nopause="1" webkit-playsinline="playsinline" playsinline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/Correct Answer sound effect.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div id="item207157" className="pageItem" alt="Movie" style={{left:'48px',top:'162px'}}>
                            <video width="640" height="360" data-id="207157" poster="assets/images/item_207157.png" data-stoplast="1" data-nopause="1" webkit-playsinline="playsinline" playsinline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/Incorrect Answer sound effect.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div id="item207143" className="pageItem" style={{height:'60px',width:'60px',left:'255px',top:'38px'}} alt="Sound">
                            <audio data-id="207143" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/jawaban benar.mp3" />
                            </audio>
                        </div>
                        <div id="item207147" className="pageItem" style={{height:'60px',width:'60px',left:'336px',top:'38px'}} alt="Sound">
                            <audio data-id="207147" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/jawaban salah.mp3" />
                            </audio>
                        </div>
                        <div id="item207128" className="pageItem" style={{height:'60px',width:'60px',left:'37px',top:'29px'}} alt="Sound">
                            <audio data-id="207128" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/quiz 7-1.mp3" />
                            </audio>
                        </div>
                        <div id="item207137" className="pageItem" style={{height:'60px',width:'60px',left:'118px',top:'47px'}} alt="Sound">
                            <audio data-id="207137" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/quiz 7-2.mp3" />
                            </audio>
                        </div>
                        <div id="item205348" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div data-ani="flyinfromtop-206237 1s cubic-bezier(.2,.6,.35,1) 1" data-id="206237" id="item206237" data-hidestart="1" className="pageItem group hidden" alt="soal" style={{left:'278px',top:'331px',width:' 1364px',height:'187px'}}>
                            <div id="item206157" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Ustekinumab berperan menekan proses peradangan dengan menghambat interaksi antara integrin α4β7 dengan MADCAM 1, sehi..." style={{left:'37px',top:'27px'}} id="item206165" className="pageItem " data-src="assets/images/item_206165.png" />
                        </div>
                        <div data-ani="fadein-206235 1s linear 1" data-id="206235" id="item206235" data-hidestart="1" className="pageItem group hidden" alt="benar" style={{left:'190px',top:'646px',width:' 695px',height:'97px'}}>
                            <div id="item206159" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Benar" style={{left:'174px',top:'17px'}} id="item206188" className="pageItem " data-src="assets/images/item_206188.png" />
                        </div>
                        <button data-ani="fadein-207242 1s linear 1" data-id="207242" id="item207242" data-hidestart="1" className="pageItem has-on has-down hidden" name="kotak 1" onClick={handleOnClickBenar} aria-label="kotak 1">
                            <div className="pageItem state btn-off">
                                <div id="item206160" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item207245" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item207247" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <div data-ani="fadein-206236 1s linear 1" data-id="206236" id="item206236" data-hidestart="1" className="pageItem group hidden" alt="salah" style={{left:'1046px',top:'646px',width:' 695px',height:'97px'}}>
                            <div id="item206163" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Salah" style={{left:'174px',top:'17px'}} id="item206211" className="pageItem " data-src="assets/images/item_206211.png" />
                        </div>
                        <button data-ani="fadein-207240 1s linear 1" data-id="207240" id="item207240" data-hidestart="1" className="pageItem has-on has-down hidden" name="kotak 2" onClick={handleOnClickSalah} aria-label="kotak 2">
                            <div className="pageItem state btn-off">
                                <div id="item206164" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item207249" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item207251" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-206242 1s cubic-bezier(.2,.6,.35,1) 1" data-id="206242" id="item206242" data-hidestart="1" className="pageItem hidden" name="jawaban benar 5" aria-label="jawaban benar 5">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" style={{top:'62px'}} id="item206244" className="pageItem ">
                                    <svg version="1.1" width="298" height="298" >
                                        <ellipse cx="148.72" cy="148.72" rx="148.72" ry="148.72" fill="#fff" />
                                    </svg>
                                </div>
                                <div alt="Group" style={{left:'273px',top:'63px'}} id="item206245" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" id="item206246" className="pageItem " data-src="assets/images/item_206246.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px',top:'98px'}} id="item206248" className="pageItem " data-src="assets/images/item_206248.png" />
                                </div>
                                <img src={blankImage} alt="Jawaban Kamu Benar! " style={{left:'284px',top:'84px'}} id="item206249" className="pageItem " data-src="assets/images/item_206249.png" />
                                <div alt="Group" style={{left:'31px'}} id="item206272" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{left:'66px',top:'95px'}} id="item206273" className="pageItem " data-src="assets/images/item_206273.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'110px',top:'84px'}} id="item206274" className="pageItem " data-src="assets/images/item_206274.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'32px',top:'269px'}} id="item206275" className="pageItem " data-src="assets/images/item_206275.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'201px',top:'50px'}} id="item206277" className="pageItem " data-src="assets/images/item_206277.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'212px',top:'54px'}} id="item206278" className="pageItem " data-src="assets/images/item_206278.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'172px',top:'50px'}} id="item206279" className="pageItem " data-src="assets/images/item_206279.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'183px',top:'71px'}} id="item206280" className="pageItem " data-src="assets/images/item_206280.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'172px',top:'50px'}} id="item206281" className="pageItem " data-src="assets/images/item_206281.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'202px',top:'50px'}} id="item206282" className="pageItem " data-src="assets/images/item_206282.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'207px',top:'54px'}} id="item206283" className="pageItem " data-src="assets/images/item_206283.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'201px',top:'65px'}} id="item206284" className="pageItem " data-src="assets/images/item_206284.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'201px',top:'58px'}} id="item206285" className="pageItem " data-src="assets/images/item_206285.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'209px',top:'60px'}} id="item206286" className="pageItem " data-src="assets/images/item_206286.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'207px',top:'68px'}} id="item206287" className="pageItem " data-src="assets/images/item_206287.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'212px',top:'75px'}} id="item206289" className="pageItem " data-src="assets/images/item_206289.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'215px',top:'70px'}} id="item206290" className="pageItem " data-src="assets/images/item_206290.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'192px',top:'70px'}} id="item206291" className="pageItem " data-src="assets/images/item_206291.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'186px',top:'77px'}} id="item206292" className="pageItem " data-src="assets/images/item_206292.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'189px',top:'98px'}} id="item206293" className="pageItem " data-src="assets/images/item_206293.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'185px',top:'71px'}} id="item206294" className="pageItem " data-src="assets/images/item_206294.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'185px',top:'69px'}} id="item206295" className="pageItem " data-src="assets/images/item_206295.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'183px',top:'71px'}} id="item206296" className="pageItem " data-src="assets/images/item_206296.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'193px',top:'81px'}} id="item206297" className="pageItem " data-src="assets/images/item_206297.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'193px',top:'81px'}} id="item206298" className="pageItem " data-src="assets/images/item_206298.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'106px',top:'23px'}} id="item206302" className="pageItem " data-src="assets/images/item_206302.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'106px',top:'24px'}} id="item206303" className="pageItem " data-src="assets/images/item_206303.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'106px',top:'29px'}} id="item206304" className="pageItem " data-src="assets/images/item_206304.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'71px',top:'60px'}} id="item206305" className="pageItem " data-src="assets/images/item_206305.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'84px',top:'60px'}} id="item206306" className="pageItem " data-src="assets/images/item_206306.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'59px',top:'98px'}} id="item206307" className="pageItem " data-src="assets/images/item_206307.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'63px',top:'42px'}} id="item206308" className="pageItem " data-src="assets/images/item_206308.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'114px',top:'44px'}} id="item206309" className="pageItem " data-src="assets/images/item_206309.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'116px',top:'45px'}} id="item206310" className="pageItem " data-src="assets/images/item_206310.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'64px'}} id="item206311" className="pageItem " data-src="assets/images/item_206311.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'66px',top:'13px'}} id="item206312" className="pageItem " data-src="assets/images/item_206312.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'92px',top:'34px'}} id="item206313" className="pageItem " data-src="assets/images/item_206313.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'69px',top:'35px'}} id="item206314" className="pageItem " data-src="assets/images/item_206314.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'66px',top:'13px'}} id="item206315" className="pageItem " data-src="assets/images/item_206315.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'79px',top:'55px'}} id="item206316" className="pageItem " data-src="assets/images/item_206316.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'69px',top:'41px'}} id="item206318" className="pageItem " data-src="assets/images/item_206318.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'69px',top:'41px'}} id="item206319" className="pageItem " data-src="assets/images/item_206319.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'69px',top:'41px'}} id="item206323" className="pageItem " data-src="assets/images/item_206323.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'69px',top:'39px'}} id="item206324" className="pageItem " data-src="assets/images/item_206324.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'94px',top:'41px'}} id="item206325" className="pageItem " data-src="assets/images/item_206325.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'94px',top:'41px'}} id="item206326" className="pageItem " data-src="assets/images/item_206326.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'94px',top:'40px'}} id="item206330" className="pageItem " data-src="assets/images/item_206330.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'93px',top:'43px'}} id="item206331" className="pageItem " data-src="assets/images/item_206331.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'69px',top:'43px'}} id="item206332" className="pageItem " data-src="assets/images/item_206332.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'93px',top:'39px'}} id="item206333" className="pageItem " data-src="assets/images/item_206333.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'93px',top:'34px'}} id="item206335" className="pageItem " data-src="assets/images/item_206335.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'66px',top:'34px'}} id="item206337" className="pageItem " data-src="assets/images/item_206337.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'80px',top:'46px'}} id="item206338" className="pageItem " data-src="assets/images/item_206338.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'78px',top:'39px'}} id="item206339" className="pageItem " data-src="assets/images/item_206339.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'90px',top:'40px'}} id="item206340" className="pageItem " data-src="assets/images/item_206340.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'102px',top:'39px'}} id="item206341" className="pageItem " data-src="assets/images/item_206341.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'106px',top:'39px'}} id="item206342" className="pageItem " data-src="assets/images/item_206342.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'94px',top:'42px'}} id="item206343" className="pageItem " data-src="assets/images/item_206343.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'99px',top:'45px'}} id="item206344" className="pageItem " data-src="assets/images/item_206344.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'104px',top:'42px'}} id="item206345" className="pageItem " data-src="assets/images/item_206345.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'93px',top:'43px'}} id="item206346" className="pageItem " data-src="assets/images/item_206346.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'94px',top:'40px'}} id="item206347" className="pageItem " data-src="assets/images/item_206347.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'97px',top:'39px'}} id="item206348" className="pageItem " data-src="assets/images/item_206348.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'102px',top:'39px'}} id="item206355" className="pageItem " data-src="assets/images/item_206355.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'90px',top:'40px'}} id="item206356" className="pageItem " data-src="assets/images/item_206356.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'92px',top:'39px'}} id="item206357" className="pageItem " data-src="assets/images/item_206357.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'94px',top:'41px'}} id="item206358" className="pageItem " data-src="assets/images/item_206358.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'97px',top:'41px'}} id="item206359" className="pageItem " data-src="assets/images/item_206359.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'98px',top:'42px'}} id="item206360" className="pageItem " data-src="assets/images/item_206360.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'94px',top:'40px'}} id="item206362" className="pageItem " data-src="assets/images/item_206362.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'93px',top:'39px'}} id="item206363" className="pageItem " data-src="assets/images/item_206363.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'89px',top:'39px'}} id="item206364" className="pageItem " data-src="assets/images/item_206364.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'62px',top:'39px'}} id="item206365" className="pageItem " data-src="assets/images/item_206365.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'63px',top:'45px'}} id="item206366" className="pageItem " data-src="assets/images/item_206366.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'65px',top:'39px'}} id="item206367" className="pageItem " data-src="assets/images/item_206367.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'66px',top:'40px'}} id="item206368" className="pageItem " data-src="assets/images/item_206368.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'72px',top:'39px'}} id="item206369" className="pageItem " data-src="assets/images/item_206369.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'66px',top:'39px'}} id="item206370" className="pageItem " data-src="assets/images/item_206370.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'72px',top:'43px'}} id="item206372" className="pageItem " data-src="assets/images/item_206372.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'74px',top:'42px'}} id="item206373" className="pageItem " data-src="assets/images/item_206373.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'75px',top:'42px'}} id="item206374" className="pageItem " data-src="assets/images/item_206374.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'76px',top:'41px'}} id="item206376" className="pageItem " data-src="assets/images/item_206376.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'73px',top:'39px'}} id="item206377" className="pageItem " data-src="assets/images/item_206377.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'70px',top:'45px'}} id="item206378" className="pageItem " data-src="assets/images/item_206378.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'62px',top:'39px'}} id="item206379" className="pageItem " data-src="assets/images/item_206379.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'63px',top:'43px'}} id="item206380" className="pageItem " data-src="assets/images/item_206380.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'65px',top:'39px'}} id="item206381" className="pageItem " data-src="assets/images/item_206381.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'66px',top:'40px'}} id="item206382" className="pageItem " data-src="assets/images/item_206382.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'69px',top:'39px'}} id="item206384" className="pageItem " data-src="assets/images/item_206384.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'66px',top:'39px'}} id="item206385" className="pageItem " data-src="assets/images/item_206385.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'69px',top:'41px'}} id="item206386" className="pageItem " data-src="assets/images/item_206386.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'74px',top:'41px'}} id="item206387" className="pageItem " data-src="assets/images/item_206387.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'69px',top:'41px'}} id="item206390" className="pageItem " data-src="assets/images/item_206390.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'69px',top:'39px'}} id="item206391" className="pageItem " data-src="assets/images/item_206391.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'69px',top:'43px'}} id="item206392" className="pageItem " data-src="assets/images/item_206392.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'62px',top:'39px'}} id="item206393" className="pageItem " data-src="assets/images/item_206393.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'81px',top:'40px'}} id="item206394" className="pageItem " data-src="assets/images/item_206394.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'71px',top:'1px'}} id="item206395" className="pageItem " data-src="assets/images/item_206395.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'115px',top:'54px'}} id="item206396" className="pageItem " data-src="assets/images/item_206396.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'2px',top:'114px'}} id="item206397" className="pageItem " data-src="assets/images/item_206397.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'27px',top:'88px'}} id="item206398" className="pageItem " data-src="assets/images/item_206398.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'63px',top:'84px'}} id="item206399" className="pageItem " data-src="assets/images/item_206399.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'115px',top:'102px'}} id="item206400" className="pageItem " data-src="assets/images/item_206400.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'87px',top:'230px'}} id="item206401" className="pageItem " data-src="assets/images/item_206401.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'68px',top:'80px'}} id="item206402" className="pageItem " data-src="assets/images/item_206402.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'68px',top:'173px'}} id="item206403" className="pageItem " data-src="assets/images/item_206403.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'65px',top:'207px'}} id="item206404" className="pageItem " data-src="assets/images/item_206404.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'64px',top:'239px'}} id="item206405" className="pageItem " data-src="assets/images/item_206405.png" />
                                    <div alt="Oval" style={{left:'63px',top:'264px'}} id="item206407" className="pageItem ">
                                        <svg version="1.1" width="7" height="7" >
                                            <ellipse cx="2.46" cy="2.46" rx="2.46" ry="2.46" stroke="" strokeWidth="1" fill="#bcced1" />
                                        </svg>
                                    </div>
                                    <img src={blankImage} alt="Polygon" style={{left:'127px',top:'100px'}} id="item206408" className="pageItem " data-src="assets/images/item_206408.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'131px',top:'104px'}} id="item206409" className="pageItem " data-src="assets/images/item_206409.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'184px',top:'107px'}} id="item206410" className="pageItem " data-src="assets/images/item_206410.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'153px',top:'112px'}} id="item206411" className="pageItem " data-src="assets/images/item_206411.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'13px',top:'136px'}} id="item206413" className="pageItem " data-src="assets/images/item_206413.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'13px',top:'135px'}} id="item206414" className="pageItem " data-src="assets/images/item_206414.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'23px',top:'213px'}} id="item206415" className="pageItem " data-src="assets/images/item_206415.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'25px',top:'190px'}} id="item206416" className="pageItem " data-src="assets/images/item_206416.png" />
                                    <img src={blankImage} alt="Polygon" style={{top:'181px'}} id="item206417" className="pageItem " data-src="assets/images/item_206417.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'33px',top:'175px'}} id="item206418" className="pageItem " data-src="assets/images/item_206418.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'33px',top:'175px'}} id="item206419" className="pageItem " data-src="assets/images/item_206419.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'45px',top:'198px'}} id="item206420" className="pageItem " data-src="assets/images/item_206420.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'47px',top:'204px'}} id="item206421" className="pageItem " data-src="assets/images/item_206421.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'49px',top:'211px'}} id="item206422" className="pageItem " data-src="assets/images/item_206422.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'121px',top:'86px'}} id="item206423" className="pageItem " data-src="assets/images/item_206423.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'119px',top:'140px'}} id="item206424" className="pageItem " data-src="assets/images/item_206424.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'121px',top:'142px'}} id="item206425" className="pageItem " data-src="assets/images/item_206425.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'56px',top:'82px'}} id="item206426" className="pageItem " data-src="assets/images/item_206426.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'55px',top:'96px'}} id="item206427" className="pageItem " data-src="assets/images/item_206427.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'53px',top:'132px'}} id="item206428" className="pageItem " data-src="assets/images/item_206428.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'58px',top:'172px'}} id="item206429" className="pageItem " data-src="assets/images/item_206429.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'66px',top:'171px'}} id="item206430" className="pageItem " data-src="assets/images/item_206430.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'52px',top:'132px'}} id="item206431" className="pageItem " data-src="assets/images/item_206431.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'78px',top:'61px'}} id="item206433" className="pageItem " data-src="assets/images/item_206433.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'80px',top:'64px'}} id="item206434" className="pageItem " data-src="assets/images/item_206434.png" />
                                </div>
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-206435 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="206435" id="item206435" data-hidestart="1" className="pageItem hidden" name="jawaban salah 6" aria-label="jawaban salah 6">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" style={{top:'63px'}} id="item206437" className="pageItem ">
                                    <svg version="1.1" width="298" height="298" >
                                        <ellipse cx="148.72" cy="148.72" rx="148.72" ry="148.72" fill="#fff" />
                                    </svg>
                                </div>
                                <div alt="Group" style={{left:'273px',top:'64px'}} id="item206438" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" id="item206439" className="pageItem " data-src="assets/images/item_206439.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px',top:'98px'}} id="item206441" className="pageItem " data-src="assets/images/item_206441.png" />
                                </div>
                                <img src={blankImage} alt="Jawaban Kamu Kurang Tepat! " style={{left:'263px',top:'89px'}} id="item206442" className="pageItem " data-src="assets/images/item_206442.png" />
                                <div alt="Group" style={{left:'71px'}} id="item206466" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{left:'39px',top:'27px'}} id="item206468" className="pageItem " data-src="assets/images/item_206468.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'46px',top:'31px'}} id="item206469" className="pageItem " data-src="assets/images/item_206469.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'59px',top:'56px'}} id="item206470" className="pageItem " data-src="assets/images/item_206470.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'55px',top:'56px'}} id="item206471" className="pageItem " data-src="assets/images/item_206471.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'47px',top:'40px'}} id="item206472" className="pageItem " data-src="assets/images/item_206472.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'48px',top:'42px'}} id="item206473" className="pageItem " data-src="assets/images/item_206473.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'96px',top:'41px'}} id="item206474" className="pageItem " data-src="assets/images/item_206474.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'99px',top:'42px'}} id="item206475" className="pageItem " data-src="assets/images/item_206475.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'52px',top:'13px'}} id="item206476" className="pageItem " data-src="assets/images/item_206476.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'52px',top:'13px'}} id="item206477" className="pageItem " data-src="assets/images/item_206477.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'50px',top:'38px'}} id="item206478" className="pageItem " data-src="assets/images/item_206478.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'84px',top:'47px'}} id="item206479" className="pageItem " data-src="assets/images/item_206479.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'76px',top:'32px'}} id="item206480" className="pageItem " data-src="assets/images/item_206480.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'54px',top:'32px'}} id="item206481" className="pageItem " data-src="assets/images/item_206481.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'77px',top:'38px'}} id="item206482" className="pageItem " data-src="assets/images/item_206482.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'77px',top:'38px'}} id="item206483" className="pageItem " data-src="assets/images/item_206483.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'77px',top:'38px'}} id="item206487" className="pageItem " data-src="assets/images/item_206487.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'77px',top:'41px'}} id="item206488" className="pageItem " data-src="assets/images/item_206488.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'77px',top:'37px'}} id="item206489" className="pageItem " data-src="assets/images/item_206489.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'55px',top:'38px'}} id="item206490" className="pageItem " data-src="assets/images/item_206490.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'55px',top:'38px'}} id="item206492" className="pageItem " data-src="assets/images/item_206492.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'55px',top:'38px'}} id="item206496" className="pageItem " data-src="assets/images/item_206496.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'55px',top:'41px'}} id="item206497" className="pageItem " data-src="assets/images/item_206497.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'55px',top:'36px'}} id="item206498" className="pageItem " data-src="assets/images/item_206498.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'77px',top:'30px'}} id="item206499" className="pageItem " data-src="assets/images/item_206499.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'52px',top:'31px'}} id="item206500" className="pageItem " data-src="assets/images/item_206500.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'67px',top:'43px'}} id="item206501" className="pageItem " data-src="assets/images/item_206501.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'66px',top:'51px'}} id="item206503" className="pageItem " data-src="assets/images/item_206503.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'64px',top:'36px'}} id="item206504" className="pageItem " data-src="assets/images/item_206504.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'64px',top:'11px'}} id="item206506" className="pageItem " data-src="assets/images/item_206506.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'38px'}} id="item206507" className="pageItem " data-src="assets/images/item_206507.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'83px',top:'16px'}} id="item206508" className="pageItem " data-src="assets/images/item_206508.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'75px',top:'34px'}} id="item206509" className="pageItem " data-src="assets/images/item_206509.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'52px',top:'34px'}} id="item206510" className="pageItem " data-src="assets/images/item_206510.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'67px',top:'37px'}} id="item206511" className="pageItem " data-src="assets/images/item_206511.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'91px',top:'41px'}} id="item206512" className="pageItem " data-src="assets/images/item_206512.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'60px',top:'98px'}} id="item206514" className="pageItem " data-src="assets/images/item_206514.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'29px',top:'257px'}} id="item206515" className="pageItem " data-src="assets/images/item_206515.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'21px',top:'83px'}} id="item206516" className="pageItem " data-src="assets/images/item_206516.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'21px',top:'183px'}} id="item206517" className="pageItem " data-src="assets/images/item_206517.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'71px',top:'83px'}} id="item206518" className="pageItem " data-src="assets/images/item_206518.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'70px',top:'183px'}} id="item206519" className="pageItem " data-src="assets/images/item_206519.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'53px',top:'99px'}} id="item206520" className="pageItem " data-src="assets/images/item_206520.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'114px',top:'148px'}} id="item206521" className="pageItem " data-src="assets/images/item_206521.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'112px',top:'104px'}} id="item206522" className="pageItem " data-src="assets/images/item_206522.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'116px',top:'125px'}} id="item206523" className="pageItem " data-src="assets/images/item_206523.png" />
                                    <img src={blankImage} alt="Polygon" style={{top:'105px'}} id="item206524" className="pageItem " data-src="assets/images/item_206524.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px',top:'105px'}} id="item206525" className="pageItem " data-src="assets/images/item_206525.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'6px',top:'164px'}} id="item206526" className="pageItem " data-src="assets/images/item_206526.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'26px',top:'104px'}} id="item206527" className="pageItem " data-src="assets/images/item_206527.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'31px',top:'138px'}} id="item206528" className="pageItem " data-src="assets/images/item_206528.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'102px',top:'148px'}} id="item206529" className="pageItem " data-src="assets/images/item_206529.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'108px',top:'150px'}} id="item206530" className="pageItem " data-src="assets/images/item_206530.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'114px',top:'157px'}} id="item206531" className="pageItem " data-src="assets/images/item_206531.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'117px',top:'148px'}} id="item206532" className="pageItem " data-src="assets/images/item_206532.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'120px',top:'149px'}} id="item206533" className="pageItem " data-src="assets/images/item_206533.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'122px',top:'156px'}} id="item206534" className="pageItem " data-src="assets/images/item_206534.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'108px',top:'153px'}} id="item206535" className="pageItem " data-src="assets/images/item_206535.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'112px',top:'159px'}} id="item206536" className="pageItem " data-src="assets/images/item_206536.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'6px',top:'161px'}} id="item206538" className="pageItem " data-src="assets/images/item_206538.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'8px',top:'165px'}} id="item206539" className="pageItem " data-src="assets/images/item_206539.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'16px',top:'189px'}} id="item206540" className="pageItem " data-src="assets/images/item_206540.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'6px',top:'175px'}} id="item206541" className="pageItem " data-src="assets/images/item_206541.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'8px',top:'180px'}} id="item206542" className="pageItem " data-src="assets/images/item_206542.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'49px',top:'169px'}} id="item206543" className="pageItem " data-src="assets/images/item_206543.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'55px',top:'162px'}} id="item206544" className="pageItem " data-src="assets/images/item_206544.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'48px',top:'78px'}} id="item206546" className="pageItem " data-src="assets/images/item_206546.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'48px',top:'78px'}} id="item206547" className="pageItem " data-src="assets/images/item_206547.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'62px',top:'81px'}} id="item206548" className="pageItem " data-src="assets/images/item_206548.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'62px',top:'81px'}} id="item206549" className="pageItem " data-src="assets/images/item_206549.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'56px',top:'193px'}} id="item206550" className="pageItem " data-src="assets/images/item_206550.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'94px',top:'216px'}} id="item206551" className="pageItem " data-src="assets/images/item_206551.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'29px',top:'219px'}} id="item206552" className="pageItem " data-src="assets/images/item_206552.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'51px',top:'76px'}} id="item206556" className="pageItem " data-src="assets/images/item_206556.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'48px',top:'119px'}} id="item206557" className="pageItem " data-src="assets/images/item_206557.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'54px',top:'166px'}} id="item206558" className="pageItem " data-src="assets/images/item_206558.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'64px',top:'165px'}} id="item206559" className="pageItem " data-src="assets/images/item_206559.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'47px',top:'119px'}} id="item206560" className="pageItem " data-src="assets/images/item_206560.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'90px',top:'77px'}} id="item206561" className="pageItem " data-src="assets/images/item_206561.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'109px',top:'137px'}} id="item206562" className="pageItem " data-src="assets/images/item_206562.png" />
                                    <div alt="Oval" style={{left:'111px',top:'139px'}} id="item206563" className="pageItem ">
                                        <svg version="1.1" width="8" height="8" >
                                            <ellipse cx="2.71" cy="2.71" rx="2.71" ry="2.71" stroke="" strokeWidth="1" fill="#8c8c9b" />
                                        </svg>
                                    </div>
                                    <img src={blankImage} alt="Polygon" style={{left:'62px',top:'59px'}} id="item206564" className="pageItem " data-src="assets/images/item_206564.png" />
                                </div>
                            </div>
                        </button>
                        <button data-ani="fadein-207238 1s linear 1" data-id="207238" id="item207238" data-hidestart="1" className="pageItem hidden" name="v" aria-label="v">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="v" id="item207125" className="pageItem " data-src="assets/images/item_207125.png" />
                            </div>
                        </button>
                        <button data-ani="fadein-207232 1s linear 1" data-id="207232" id="item207232" data-hidestart="1" className="pageItem hidden" name="x" aria-label="x">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item207234" className="pageItem " data-src="assets/images/item_207234.png" />
                                <img src={blankImage} alt="Polygon" id="item207236" className="pageItem " data-src="assets/images/item_207236.png" />
                            </div>
                        </button>
                        <div data-ani="flyinfrombottom-220073 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="220073" id="item220073" data-hidestart="1" className="pageItem group hidden" alt="mata" style={{left:'445px',top:'869px',width:' 26px',height:'5px'}}>
                            <div alt="Group" id="item220074" className="pageItem group ">
                                <div alt="Oval" id="item220075" className="pageItem ">
                                    <svg version="1.1" width="7" height="7" >
                                        <ellipse cx="2.2" cy="2.2" rx="2.2" ry="2.2" stroke="" strokeWidth="1" fill="#1c1463" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'1px',top:'1px'}} id="item220076" className="pageItem " data-src="assets/images/item_220076.png" />
                            </div>
                            <div alt="Group" style={{left:'22px'}} id="item220078" className="pageItem group ">
                                <div alt="Oval" id="item220079" className="pageItem ">
                                    <svg version="1.1" width="7" height="7" >
                                        <ellipse cx="2.2" cy="2.2" rx="2.2" ry="2.2" stroke="" strokeWidth="1" fill="#1c1463" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'1px',top:'1px'}} id="item220080" className="pageItem " data-src="assets/images/item_220080.png" />
                            </div>
                        </div>
                        <div id="item205350" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item205352" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <img src={blankImage} data-ani="fadein-205354 1s linear 1" data-id="205354" id="item205354" data-hidestart="1" className="pageItem hidden" alt="KUIS 7" style={{left:'712px',top:'157px'}} data-src="assets/images/item_205354.png" />
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item205601" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item205602" className="pageItem " data-src="assets/images/item_205602.png" />
                            <div alt="Group" style={{top:'132px'}} id="item205625" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item205626" className="pageItem " data-src="assets/images/item_205626.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item205627" className="pageItem " data-src="assets/images/item_205627.png" />
                            </div>
                        </div>
                        <button data-ani="fadein-219947 0.5s linear 1" data-id="219947" id="item219947" data-hidestart="1" className="pageItem has-on has-down hidden" name="cek penjelasan 10" onClick={handleOnClickGoToCekPenjelasan} aria-label="cek penjelasan 10">
                            <div className="pageItem state btn-off">
                                <div id="item219976" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Penjelasan" style={{left:'26px',top:'15px'}} id="item219978" className="pageItem " data-src="assets/images/item_219978.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item220002" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Penjelasan" style={{left:'26px',top:'15px'}} id="item220003" className="pageItem " data-src="assets/images/item_220003.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item219950" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Penjelasan" style={{left:'26px',top:'15px'}} id="item219952" className="pageItem " data-src="assets/images/item_219952.png" />
                            </div>
                        </button>
                        <button data-ani="fadein-226741 1s linear 1" data-id="226741" id="item226741" data-hidestart="1" className="pageItem has-down has-on hidden" name="icon next 68" onClick={handleOnClickGoToTerimaKasih} aria-label="icon next 68">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item226750" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item226751" className="pageItem " data-src="assets/images/item_226751.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item226753" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item226755" className="pageItem " data-src="assets/images/item_226755.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item226744" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item226746" className="pageItem " data-src="assets/images/item_226746.png" />
                            </div>
                        </button>
                        <button data-id="226757" name="icon beranda 118" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 118" id="item226757" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item226764" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item226765" className="pageItem " data-src="assets/images/item_226765.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item226766" className="pageItem " data-src="assets/images/item_226766.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item226768" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item226769" className="pageItem " data-src="assets/images/item_226769.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item226771" className="pageItem " data-src="assets/images/item_226771.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item226760" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item226761" className="pageItem " data-src="assets/images/item_226761.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item226762" className="pageItem " data-src="assets/images/item_226762.png" />
                            </div>
                        </button>
                        <button data-id="226772" name="icon back 74" onClick={handleOnClickGoToQuiz6} aria-label="icon back 74" id="item226772" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item226780" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item226781" className="pageItem " data-src="assets/images/item_226781.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item226783" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item226784" className="pageItem " data-src="assets/images/item_226784.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item226775" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item226777" className="pageItem " data-src="assets/images/item_226777.png" />
                            </div>
                        </button>
                        <Navigation />
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Quiz7;