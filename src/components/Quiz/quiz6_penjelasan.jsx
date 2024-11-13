import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Quiz6Penjelasan() {

    const navigate = useNavigate();

    const handleOnClickGoToQuiz6 = () => {
        window.location.href = '/quiz6'; // #54
    };
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

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }

    const handleOnClickCekPenjelasan = (event) => {
        window.location.href = '/FocusStudy4';
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
                <li className="page" data-name="62">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:204633,act:'play'},{del:1,n:1,id:204634,act:'play'},{del:1,n:1,id:204635,act:'play'},{del:1,n:1,id:204636,act:'play'},{del:1,n:1,id:204631,act:'play'},{del:1,n:1,id:204637,act:'play'},{del:16,n:1,id:204638,act:'play'},{n:1,id:203981,act:'play'}], 'pageload');" style={{width:'1920px',height:'1080px'}}>
                        <div id="item264542" className="pageItem" style={{height:'60px',width:'60px',left:'73px',top:'270px'}} alt="Sound">
                            <audio data-id="264542" className="mejs-no-controls" data-autoplay="1" data-autodelay="0" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/Quiz 6 Penjelasan FULL.mp3" />
                            </audio>
                        </div>
                        <div id="item204647" className="pageItem" style={{height:'60px',width:'60px',left:'94px',top:'52px'}} alt="Sound">
                            <audio data-id="204647" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/quiz 6-3.mp3" />
                            </audio>
                        </div>
                        <div id="item204656" className="pageItem" style={{height:'60px',width:'60px',left:'174px',top:'58px'}} alt="Sound">
                            <audio data-id="204656" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/quiz 6-4.mp3" />
                            </audio>
                        </div>
                        <div id="item203295" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div data-ani="flyinfromleft-204637 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="204637" id="item204637" data-hidestart="1" className="pageItem group hidden" alt="penjelasan" style={{left:'801px',top:'497px',width:' 483px',height:'247px'}}>
                            <div id="item203964" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Direkomendasikan sebagai pemeliharaan remisi KU dan PC oleh Konsensus Nasional Penatalaksanaan IBD maupun European Cr..." style={{left:'26px',top:'19px'}} id="item203983" className="pageItem " data-src="assets/images/item_203983.png" />
                        </div>
                        <div data-ani="flyinfromleft-204631 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="204631" id="item204631" data-hidestart="1" className="pageItem group hidden" alt="line" style={{left:'686px',top:'476px',width:' 102px',height:'303px'}}>
                            <img src={blankImage} alt="GraphicLine" style={{height:' 5px'}} id="item203965" className="pageItem " data-src="assets/images/item_203965.png" />
                            <img src={blankImage} alt="GraphicLine" style={{height:' 5px',top:'298px'}} id="item203967" className="pageItem " data-src="assets/images/item_203967.png" />
                            <img src={blankImage} alt="GraphicLine" style={{height:' 302px',left:'72px'}} id="item203968" className="pageItem " data-src="assets/images/item_203968.png" />
                            <img src={blankImage} alt="GraphicLine" style={{height:' 5px',left:'73px',top:'142px'}} id="item203969" className="pageItem " data-src="assets/images/item_203969.png" />
                        </div>
                        <div alt="soal" style={{left:'412px',top:'284px'}} id="item203936" className="pageItem group ">
                            <div id="item203938" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Terapi yang tidak direkomendasikan sebagai pemeliharaan remisi baik pada KU atau PC adalah..." style={{left:'37px',top:'22px'}} id="item203941" className="pageItem " data-src="assets/images/item_203941.png" />
                        </div>
                        <div id="item203293" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item203297" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <img src={blankImage} data-ani="fadein-203299 1s linear 1" data-id="203299" id="item203299" data-hidestart="1" className="pageItem hidden" alt="KUIS 6" style={{left:'712px',top:'157px'}} data-src="assets/images/item_203299.png" />
                        <div data-ani="flyinfromleft-204635 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="204635" id="item204635" data-hidestart="1" className="pageItem group hidden" alt="c" style={{left:'164px',top:'631px',width:' 507px',height:'93px'}}>
                            <div id="item203974" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <div id="item203978" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Vedolizumab" style={{left:'127px',top:'27px'}} id="item204006" className="pageItem " data-src="assets/images/item_204006.png" />
                            <img src={blankImage} alt="c" style={{left:'35px',top:'29px'}} id="item204075" className="pageItem " data-src="assets/images/item_204075.png" />
                        </div>
                        <div data-ani="flyinfromleft-204633 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="204633" id="item204633" data-hidestart="1" className="pageItem group hidden" alt="a" style={{left:'164px',top:'432px',width:' 507px',height:'93px'}}>
                            <div id="item203972" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <div id="item203975" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="a" style={{left:'32px',top:'30px'}} id="item204029" className="pageItem " data-src="assets/images/item_204029.png" />
                            <img src={blankImage} alt="Azatioprin" style={{left:'127px',top:'26px'}} id="item204098" className="pageItem " data-src="assets/images/item_204098.png" />
                        </div>
                        <div data-ani="flyinfromleft-204634 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="204634" id="item204634" data-hidestart="1" className="pageItem group hidden" alt="b" style={{left:'164px',top:'531px',width:' 507px',height:'96px'}}>
                            <div id="item203973" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <div id="item203977" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="b" style={{left:'31px',top:'35px'}} id="item204052" className="pageItem " data-src="assets/images/item_204052.png" />
                            <img src={blankImage} alt="5 – ASA" style={{left:'127px',top:'26px'}} id="item204122" className="pageItem " data-src="assets/images/item_204122.png" />
                        </div>
                        <div data-ani="flyinfromleft-204636 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="204636" id="item204636" data-hidestart="1" className="pageItem group hidden" alt="d" style={{left:'164px',top:'730px',width:' 507px',height:'96px'}}>
                            <div id="item203971" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <div id="item203979" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="d" style={{left:'31px',top:'35px'}} id="item204146" className="pageItem " data-src="assets/images/item_204146.png" />
                            <img src={blankImage} alt="Adalimumab" style={{left:'127px',top:'26px'}} id="item204169" className="pageItem " data-src="assets/images/item_204169.png" />
                        </div>
                        <div data-ani="fadein-204638 1s linear 1" data-id="204638" id="item204638" data-hidestart="1" className="pageItem group hidden" alt="e" style={{left:'1338px',top:'568px',width:' 428px',height:'93px'}}>
                            <div id="item203970" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <div id="item203980" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Kortikosteroid" style={{left:'132px',top:'27px'}} id="item204192" className="pageItem " data-src="assets/images/item_204192.png" />
                            <img src={blankImage} alt="e" style={{left:'33px',top:'29px'}} id="item204215" className="pageItem " data-src="assets/images/item_204215.png" />
                        </div>
                        <img src={blankImage} data-ani="appear-203981 0.6s linear 1" data-id="203981" id="item203981" data-hidestart="1" className="pageItem hidden" alt="Polygon" style={{left:'1710px',top:'604px'}} data-src="assets/images/item_203981.png" />
                        <button data-ani="flyinfrombottom-219605 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="219605" id="item219605" data-hidestart="1" className="pageItem hidden" data-hideend="1" name="jawaban salah 8" aria-label="jawaban salah 8">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" style={{top:'67px'}} id="item219607" className="pageItem ">
                                    <svg version="1.1" width="312" height="312" >
                                        <ellipse cx="155.88" cy="155.88" rx="155.88" ry="155.88" fill="#fff" />
                                    </svg>
                                </div>
                                <div alt="Group" style={{left:'286px',top:'67px'}} id="item219608" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" id="item219609" className="pageItem " data-src="assets/images/item_219609.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px',top:'103px'}} id="item219611" className="pageItem " data-src="assets/images/item_219611.png" />
                                </div>
                                <img src={blankImage} alt="Jawaban Kamu Kurang Tepat! " style={{left:'283px',top:'92px'}} id="item219612" className="pageItem " data-src="assets/images/item_219612.png" />
                                <div alt="Group" style={{left:'75px'}} id="item219635" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{left:'41px',top:'28px'}} id="item219636" className="pageItem " data-src="assets/images/item_219636.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'48px',top:'33px'}} id="item219637" className="pageItem " data-src="assets/images/item_219637.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'61px',top:'59px'}} id="item219638" className="pageItem " data-src="assets/images/item_219638.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'58px',top:'59px'}} id="item219639" className="pageItem " data-src="assets/images/item_219639.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'49px',top:'42px'}} id="item219640" className="pageItem " data-src="assets/images/item_219640.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'50px',top:'44px'}} id="item219641" className="pageItem " data-src="assets/images/item_219641.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'101px',top:'43px'}} id="item219642" className="pageItem " data-src="assets/images/item_219642.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'103px',top:'44px'}} id="item219643" className="pageItem " data-src="assets/images/item_219643.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'54px',top:'13px'}} id="item219644" className="pageItem " data-src="assets/images/item_219644.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'54px',top:'13px'}} id="item219645" className="pageItem " data-src="assets/images/item_219645.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'53px',top:'39px'}} id="item219646" className="pageItem " data-src="assets/images/item_219646.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'88px',top:'49px'}} id="item219647" className="pageItem " data-src="assets/images/item_219647.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'80px',top:'34px'}} id="item219648" className="pageItem " data-src="assets/images/item_219648.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'57px',top:'34px'}} id="item219649" className="pageItem " data-src="assets/images/item_219649.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'81px',top:'40px'}} id="item219650" className="pageItem " data-src="assets/images/item_219650.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'81px',top:'40px'}} id="item219651" className="pageItem " data-src="assets/images/item_219651.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'81px',top:'40px'}} id="item219655" className="pageItem " data-src="assets/images/item_219655.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'81px',top:'43px'}} id="item219656" className="pageItem " data-src="assets/images/item_219656.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'81px',top:'38px'}} id="item219657" className="pageItem " data-src="assets/images/item_219657.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'58px',top:'40px'}} id="item219659" className="pageItem " data-src="assets/images/item_219659.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'58px',top:'40px'}} id="item219660" className="pageItem " data-src="assets/images/item_219660.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'58px',top:'39px'}} id="item219664" className="pageItem " data-src="assets/images/item_219664.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'58px',top:'43px'}} id="item219665" className="pageItem " data-src="assets/images/item_219665.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'58px',top:'38px'}} id="item219666" className="pageItem " data-src="assets/images/item_219666.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'81px',top:'32px'}} id="item219667" className="pageItem " data-src="assets/images/item_219667.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'55px',top:'33px'}} id="item219668" className="pageItem " data-src="assets/images/item_219668.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'70px',top:'45px'}} id="item219669" className="pageItem " data-src="assets/images/item_219669.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'69px',top:'54px'}} id="item219670" className="pageItem " data-src="assets/images/item_219670.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'68px',top:'38px'}} id="item219671" className="pageItem " data-src="assets/images/item_219671.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'67px',top:'11px'}} id="item219673" className="pageItem " data-src="assets/images/item_219673.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'40px'}} id="item219674" className="pageItem " data-src="assets/images/item_219674.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'87px',top:'17px'}} id="item219675" className="pageItem " data-src="assets/images/item_219675.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'78px',top:'36px'}} id="item219676" className="pageItem " data-src="assets/images/item_219676.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'54px',top:'36px'}} id="item219677" className="pageItem " data-src="assets/images/item_219677.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'70px',top:'39px'}} id="item219678" className="pageItem " data-src="assets/images/item_219678.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'95px',top:'43px'}} id="item219679" className="pageItem " data-src="assets/images/item_219679.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'63px',top:'103px'}} id="item219680" className="pageItem " data-src="assets/images/item_219680.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'30px',top:'269px'}} id="item219681" className="pageItem " data-src="assets/images/item_219681.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'22px',top:'87px'}} id="item219682" className="pageItem " data-src="assets/images/item_219682.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'22px',top:'192px'}} id="item219683" className="pageItem " data-src="assets/images/item_219683.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'74px',top:'87px'}} id="item219684" className="pageItem " data-src="assets/images/item_219684.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'74px',top:'192px'}} id="item219685" className="pageItem " data-src="assets/images/item_219685.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'56px',top:'103px'}} id="item219686" className="pageItem " data-src="assets/images/item_219686.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'120px',top:'155px'}} id="item219687" className="pageItem " data-src="assets/images/item_219687.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'117px',top:'109px'}} id="item219688" className="pageItem " data-src="assets/images/item_219688.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'122px',top:'131px'}} id="item219689" className="pageItem " data-src="assets/images/item_219689.png" />
                                    <img src={blankImage} alt="Polygon" style={{top:'110px'}} id="item219690" className="pageItem " data-src="assets/images/item_219690.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'5px',top:'110px'}} id="item219691" className="pageItem " data-src="assets/images/item_219691.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'7px',top:'172px'}} id="item219692" className="pageItem " data-src="assets/images/item_219692.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'27px',top:'109px'}} id="item219694" className="pageItem " data-src="assets/images/item_219694.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'33px',top:'144px'}} id="item219695" className="pageItem " data-src="assets/images/item_219695.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'107px',top:'155px'}} id="item219696" className="pageItem " data-src="assets/images/item_219696.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'114px',top:'157px'}} id="item219697" className="pageItem " data-src="assets/images/item_219697.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'120px',top:'164px'}} id="item219698" className="pageItem " data-src="assets/images/item_219698.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'122px',top:'155px'}} id="item219699" className="pageItem " data-src="assets/images/item_219699.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'126px',top:'157px'}} id="item219700" className="pageItem " data-src="assets/images/item_219700.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'128px',top:'164px'}} id="item219701" className="pageItem " data-src="assets/images/item_219701.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'113px',top:'160px'}} id="item219702" className="pageItem " data-src="assets/images/item_219702.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'117px',top:'167px'}} id="item219703" className="pageItem " data-src="assets/images/item_219703.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'7px',top:'169px'}} id="item219705" className="pageItem " data-src="assets/images/item_219705.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'9px',top:'173px'}} id="item219706" className="pageItem " data-src="assets/images/item_219706.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'17px',top:'198px'}} id="item219707" className="pageItem " data-src="assets/images/item_219707.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'7px',top:'184px'}} id="item219708" className="pageItem " data-src="assets/images/item_219708.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'8px',top:'189px'}} id="item219709" className="pageItem " data-src="assets/images/item_219709.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'52px',top:'178px'}} id="item219710" className="pageItem " data-src="assets/images/item_219710.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'58px',top:'170px'}} id="item219711" className="pageItem " data-src="assets/images/item_219711.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'50px',top:'82px'}} id="item219713" className="pageItem " data-src="assets/images/item_219713.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'50px',top:'82px'}} id="item219714" className="pageItem " data-src="assets/images/item_219714.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'65px',top:'85px'}} id="item219715" className="pageItem " data-src="assets/images/item_219715.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'65px',top:'85px'}} id="item219716" className="pageItem " data-src="assets/images/item_219716.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'59px',top:'203px'}} id="item219717" className="pageItem " data-src="assets/images/item_219717.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'98px',top:'227px'}} id="item219718" className="pageItem " data-src="assets/images/item_219718.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'30px',top:'229px'}} id="item219719" className="pageItem " data-src="assets/images/item_219719.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'53px',top:'80px'}} id="item219723" className="pageItem " data-src="assets/images/item_219723.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'50px',top:'125px'}} id="item219724" className="pageItem " data-src="assets/images/item_219724.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'57px',top:'174px'}} id="item219725" className="pageItem " data-src="assets/images/item_219725.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'67px',top:'173px'}} id="item219726" className="pageItem " data-src="assets/images/item_219726.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'50px',top:'124px'}} id="item219728" className="pageItem " data-src="assets/images/item_219728.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'94px',top:'81px'}} id="item219730" className="pageItem " data-src="assets/images/item_219730.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'115px',top:'144px'}} id="item219731" className="pageItem " data-src="assets/images/item_219731.png" />
                                    <div alt="Oval" style={{left:'117px',top:'146px'}} id="item219732" className="pageItem ">
                                        <svg version="1.1" width="8" height="8" >
                                            <ellipse cx="2.84" cy="2.84" rx="2.84" ry="2.84" stroke="" strokeWidth="1" fill="#8c8c9b" />
                                        </svg>
                                    </div>
                                    <img src={blankImage} alt="Polygon" style={{left:'65px',top:'62px'}} id="item219733" className="pageItem " data-src="assets/images/item_219733.png" />
                                </div>
                            </div>
                        </button>
                        <div data-ani="flyinfrombottom-219734 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="219734" id="item219734" data-hidestart="1" className="pageItem group hidden" data-hideend="1" alt="mata" style={{left:'464px',top:'863px',width:' 26px',height:'5px'}}>
                            <div alt="Group" id="item219735" className="pageItem group ">
                                <div alt="Oval" id="item219736" className="pageItem ">
                                    <svg version="1.1" width="7" height="7" >
                                        <ellipse cx="2.2" cy="2.2" rx="2.2" ry="2.2" stroke="" strokeWidth="1" fill="#1c1463" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'1px',top:'1px'}} id="item219737" className="pageItem " data-src="assets/images/item_219737.png" />
                            </div>
                            <div alt="Group" style={{left:'22px'}} id="item219739" className="pageItem group ">
                                <div alt="Oval" id="item219740" className="pageItem ">
                                    <svg version="1.1" width="7" height="7" >
                                        <ellipse cx="2.2" cy="2.2" rx="2.2" ry="2.2" stroke="" strokeWidth="1" fill="#1c1463" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'1px',top:'1px'}} id="item219741" className="pageItem " data-src="assets/images/item_219741.png" />
                            </div>
                        </div>
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item205263" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item205264" className="pageItem " data-src="assets/images/item_205264.png" />
                            <div alt="Group" style={{top:'132px'}} id="item205287" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item205288" className="pageItem " data-src="assets/images/item_205288.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item205289" className="pageItem " data-src="assets/images/item_205289.png" />
                            </div>
                        </div>
                        <button data-id="222056" name="icon beranda 115" onClick={handleOnClickGoToQuiz7} aria-label="icon beranda 115" id="item222056" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item222063" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item222064" className="pageItem " data-src="assets/images/item_222064.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item222065" className="pageItem " data-src="assets/images/item_222065.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item222067" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item222068" className="pageItem " data-src="assets/images/item_222068.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item222069" className="pageItem " data-src="assets/images/item_222069.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item222059" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item222060" className="pageItem " data-src="assets/images/item_222060.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item222061" className="pageItem " data-src="assets/images/item_222061.png" />
                            </div>
                        </button>
                        <button data-id="223668" name="icon back 66" onClick={handleOnClickGoToQuiz6} aria-label="icon back 66" id="item223668" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item223677" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item223678" className="pageItem " data-src="assets/images/item_223678.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item223680" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item223681" className="pageItem " data-src="assets/images/item_223681.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item223672" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item223674" className="pageItem " data-src="assets/images/item_223674.png" />
                            </div>
                        </button>
                        <Navigation />
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Quiz6Penjelasan;