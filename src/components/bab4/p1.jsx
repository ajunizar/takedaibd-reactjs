import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Bab4P1() {

    const navigate = useNavigate();

    const handleOnClickGoToBab1 = () => {
        window.location.href = '/bab1-start';
    };
    //var referrer = document.referrer;
    //console.log("referrer url",referrer);
    
    const handleOnClickPreviousPage = () => {
        window.location.href = '/bab4-start';
    };

    const handleOnClickNextPage = (event) => {
        window.location.href = '/bab4-p2';
    }

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }


    const handleOnClickUlang = (event) => {
        event.preventDefault();
        jQuery("#item263755 audio")[0].currentTime = 0;
        jQuery("#item263755 audio")[0].play();
        go(event,[{n:1,id:92241,act:'play'},{del:7,n:1,id:151338,act:'play'},{del:11,n:1,id:97021,act:'play'},{del:2,n:1,link:1,id:8453,act:'play'},{n:1,link:1,id:8497,act:'play'},{n:1,id:8519,act:'play'},{n:1,id:8307,act:'play'},{del:5,n:1,id:8541,act:'play'},{n:1,link:1,id:8808,act:'play'},{n:1,id:8809,act:'play'},{del:4,n:1,id:8629,act:'play'},{del:1.3,n:1,id:8717,act:'play'},{del:2.3,n:1,id:96557,act:'play'},{del:2,n:1,id:96723,act:'play'},{del:1.5,n:1,id:96604,act:'play'},{del:3,n:1,id:96627,act:'play'},{del:2,n:1,id:96747,act:'play'},{del:1,n:1,id:96696,act:'play'},{del:1.5,n:1,id:96770,act:'play'},{n:1,id:8308,act:'play'},{del:1,n:1,id:8563,act:'play'},{n:1,link:1,id:8811,act:'play'},{n:1,id:8810,act:'play'},{del:2.5,n:1,id:96897,act:'play'},{del:3,n:1,id:96944,act:'play'},{del:2,n:1,id:96920,act:'play'},{del:2,n:1,id:96967,act:'play'},{n:1,id:8309,act:'play'},{del:1,n:1,id:8585,act:'play'},{n:1,link:1,id:8814,act:'play'},{n:1,id:8815,act:'play'},{del:5,n:1,id:8673,act:'play'},{del:3,n:1,id:8761,act:'play'},{n:1,id:8310,act:'play'},{del:1,n:1,id:8607,act:'play'},{n:1,link:1,id:8812,act:'play'},{n:1,id:8813,act:'play'},{del:2,n:1,id:8695,act:'play'},{del:4,n:1,id:8783,act:'play'}]);
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

    const handleOnClick2xButton = (event) => {
        event.preventDefault();
        jQuery("#item263631 audio")[0].currentTime = 0;
        jQuery("#item263631 audio")[0].pause();
        go(event, [{ n: 1, link: 1, id: 145157, act: 'reverse' }, { n: 1, link: 1, id: 145156, act: 'reverse' }, { n: 1, link: 1, id: 145155, act: 'reverse' }, { n: 1, link: 1, id: 145154, act: 'reverse' }, { n: 1, link: 1, id: 145287, act: 'reverse' }, { n: 1, id: 145196, act: 'reverse' }]);
    }

    const applyItem145148 = (element) => {
        if (element) {
            element.style.setProperty('width', '391px', 'important');
            element.style.setProperty('height', '64px', 'important');
            element.style.setProperty('left', '948px', 'important');
            element.style.setProperty('top', '599px', 'important');
        }
    };


    return (
        <div >
            <ul className="pages" id="slider">
                <li className="page" data-name="16">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:92241,act:'play'},{del:7,n:1,id:151338,act:'play'},{del:11,n:1,id:97021,act:'play'},{n:1,link:1,id:8453,act:'play'},{n:1,link:1,id:8497,act:'play'},{n:1,id:8519,sn:1,act:'play'},{n:1,id:8307,act:'play'},{del:5,n:1,id:8541,act:'play'},{n:1,link:1,id:8808,act:'play'},{n:1,id:8809,sn:1,act:'play'},{del:4,n:1,id:8629,act:'play'},{del:1.3,n:1,id:8717,act:'play'},{del:2.3,n:1,id:96557,act:'play'},{del:2,n:1,id:96723,act:'play'},{del:1,n:1,id:96604,act:'play'},{del:2,n:1,id:96627,act:'play'},{del:2,n:1,id:96747,act:'play'},{del:1,n:1,id:96696,act:'play'},{del:1.5,n:1,id:96770,act:'play'},{n:1,id:8308,act:'play'},{del:1,n:1,id:8563,act:'play'},{n:1,link:1,id:8811,act:'play'},{n:1,id:8810,sn:1,act:'play'},{del:2.5,n:1,id:96897,act:'play'},{del:3,n:1,id:96944,act:'play'},{del:2,n:1,id:96920,act:'play'},{del:2,n:1,id:96967,act:'play'},{n:1,id:8309,act:'play'},{del:1,n:1,id:8585,act:'play'},{n:1,link:1,id:8814,act:'play'},{n:1,id:8815,sn:1,act:'play'},{del:5,n:1,id:8673,act:'play'},{del:3,n:1,id:8761,act:'play'},{n:1,id:8310,act:'play'},{del:1,n:1,id:8607,act:'play'},{n:1,link:1,id:8812,act:'play'},{n:1,id:8813,sn:1,act:'play'},{del:2,n:1,id:8695,act:'play'},{del:4,n:1,id:8783,act:'play'}], 'pageload');" style={{width:'1920px',height:'1080px'}}>
                        <div data-ani="flyinfromleft-97021 1s cubic-bezier(.2,.6,.35,1) 1" data-id="97021" id="item97021" data-hidestart="1" className="pageItem group hidden" alt="rectangle manifestasi" style={{left:'729px',top:'163px',width:' 972px',height:'108px'}}>
                            <div id="item97022" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Manifestasi ekstraintestinal yang paling umum berdasarkan sistem yang terlibat:" style={{left:'110px',top:'18px'}} id="item97023" className="pageItem " data-src="assets/images/item_97023.png" />
                        </div>
                        <Navigation />
                        <div id="item8307" data-ani="flyinfromleft-8307 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="8307" data-hidestart="1" className="pageItem hidden" alt="rectangle 1">&nbsp;</div>
                        <div id="item8308" data-ani="flyinfromleft-8308 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="8308" data-hidestart="1" className="pageItem hidden" alt="rectangle 2">&nbsp;</div>
                        <div id="item8309" data-ani="flyinfromleft-8309 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="8309" data-hidestart="1" className="pageItem hidden" alt="rectangle 3">&nbsp;</div>
                        <div id="item8310" data-ani="flyinfromleft-8310 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="8310" data-hidestart="1" className="pageItem hidden" alt="rectangle 4">&nbsp;</div>
                        <img src={blankImage} alt="Polygon" style={{left:'-637px',top:'-618px'}} id="item92116" className="pageItem " data-src="assets/images/item_92116.png" />
                        <div id="item123669" className="pageItem" style={{height:'60px',width:'60px',left:'524px',top:'964px'}} alt="Sound">
                            <audio data-id="123669" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 15-1.mp3" />
                            </audio>
                        </div>
                        <div id="item123675" className="pageItem" style={{height:'60px',width:'60px',left:'1307px',top:'980px'}} alt="Sound">
                            <audio data-id="123675" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 15-10.mp3" />
                            </audio>
                        </div>
                        <div id="item123682" className="pageItem" style={{height:'60px',width:'60px',left:'1377px',top:'980px'}} alt="Sound">
                            <audio data-id="123682" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 15-11.mp3" />
                            </audio>
                        </div>
                        <div id="item123691" className="pageItem" style={{height:'60px',width:'60px',left:'1453px',top:'980px'}} alt="Sound">
                            <audio data-id="123691" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 15-12.mp3" />
                            </audio>
                        </div>
                        <div id="item123697" className="pageItem" style={{height:'60px',width:'60px',left:'607px',top:'956px'}} alt="Sound">
                            <audio data-id="123697" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 15-2.mp3" />
                            </audio>
                        </div>
                        <div id="item123704" className="pageItem" style={{height:'60px',width:'60px',left:'687px',top:'964px'}} alt="Sound">
                            <audio data-id="123704" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 15-3.mp3" />
                            </audio>
                        </div>
                        <div id="item123710" className="pageItem" style={{height:'60px',width:'60px',left:'768px',top:'972px'}} alt="Sound">
                            <audio data-id="123710" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 15-4.mp3" />
                            </audio>
                        </div>
                        <div id="item123716" className="pageItem" style={{height:'60px',width:'60px',left:'861px',top:'964px'}} alt="Sound">
                            <audio data-id="123716" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 15-5.mp3" />
                            </audio>
                        </div>
                        <div id="item123724" className="pageItem" style={{height:'60px',width:'60px',left:'971px',top:'964px'}} alt="Sound">
                            <audio data-id="123724" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 15-6.mp3" />
                            </audio>
                        </div>
                        <div id="item123730" className="pageItem" style={{height:'60px',width:'60px',left:'1058px',top:'964px'}} alt="Sound">
                            <audio data-id="123730" className="mejs-no-controls">
                                <source type="audio/mp3" src="assets/media/page 15-7.mp3" />
                            </audio>
                        </div>
                        <div id="item123737" className="pageItem" style={{height:'60px',width:'60px',left:'1143px',top:'964px'}} alt="Sound">
                            <audio data-id="123737" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 15-8.mp3" />
                            </audio>
                        </div>
                        <div id="item123742" className="pageItem" style={{height:'60px',width:'60px',left:'1230px',top:'972px'}} alt="Sound">
                            <audio data-id="123742" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 15-9.mp3" />
                            </audio>
                        </div>
                        <div id="item263755" className="pageItem" style={{height:'60px',width:'60px',left:'567px',top:'972px'}} alt="Sound">
                            <audio data-id="263755" className="mejs-no-controls" data-autoplay="1" data-autodelay="0" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 15 FULL.mp3" />
                            </audio>
                        </div>
                        <div id="item123750" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item149531" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item8364" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item8384" className="pageItem " data-src="assets/images/item_8384.png" />
                            <div alt="Group" style={{top:'132px'}} id="item8387" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item8388" className="pageItem " data-src="assets/images/item_8388.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item8389" className="pageItem " data-src="assets/images/item_8389.png" />
                            </div>
                        </div>
                        <img src={blankImage} data-ani="fadein-8453 0.2s linear 1" data-id="8453" id="item8453" data-hidestart="1" className="pageItem hidden" alt="Sistem" style={{left:'794px',top:'306px'}} data-src="assets/images/item_8453.png" />
                        <img src={blankImage} data-ani="fadein-8497 0.2s linear 1" data-id="8497" id="item8497" data-hidestart="1" className="pageItem hidden" alt="Manifestasi / Gejala" style={{left:'1134px',top:'306px'}} data-src="assets/images/item_8497.png" />
                        <img src={blankImage} data-ani="fadein-8519 0.2s linear 1" data-id="8519" id="item8519" data-hidestart="1" className="pageItem hidden" alt="Prevalensi" style={{left:'1521px',top:'306px'}} data-src="assets/images/item_8519.png" />
                        <img src={blankImage} data-ani="fadein-8541 0.2s linear 1" data-id="8541" id="item8541" data-hidestart="1" className="pageItem hidden" alt="Muskuloskeletal" style={{left:'784px',top:'438px'}} data-src="assets/images/item_8541.png" />
                        <img src={blankImage} data-ani="fadein-8563 0.2s linear 1" data-id="8563" id="item8563" data-hidestart="1" className="pageItem hidden" alt="Dermatologis" style={{left:'784px',top:'602px'}} data-src="assets/images/item_8563.png" />
                        <img src={blankImage} data-ani="fadein-8585 0.2s linear 1" data-id="8585" id="item8585" data-hidestart="1" className="pageItem hidden" alt="Hepatopankreatobilier" style={{left:'784px',top:'712px'}} data-src="assets/images/item_8585.png" />
                        <img src={blankImage} data-ani="fadein-8607 0.2s linear 1" data-id="8607" id="item8607" data-hidestart="1" className="pageItem hidden" alt="Okular" style={{left:'785px',top:'834px'}} data-src="assets/images/item_8607.png" />
                        <img src={blankImage} data-ani="fadein-8629 0.2s linear 1" data-id="8629" id="item8629" data-hidestart="1" className="pageItem hidden" alt="Arthralgia16 " style={{left:'1140px',top:'376px'}} data-src="assets/images/item_8629.png" />
                        <img src={blankImage} data-ani="fadein-96897 0.2s linear 1" data-id="96897" id="item96897" data-hidestart="1" className="pageItem hidden" alt="Eritema nodosum20" style={{left:'1140px',top:'587px'}} data-src="assets/images/item_96897.png" />
                        <img src={blankImage} data-ani="fadein-96557 0.2s linear 1" data-id="96557" id="item96557" data-hidestart="1" className="pageItem hidden" alt="Spondiloartritis perifer16" style={{left:'1140px',top:'409px'}} data-src="assets/images/item_96557.png" />
                        <img src={blankImage} data-ani="fadein-96920 0.2s linear 1" data-id="96920" id="item96920" data-hidestart="1" className="pageItem hidden" alt="Pyoderma gangrenosum20" style={{left:'1140px',top:'620px'}} data-src="assets/images/item_96920.png" />
                        <img src={blankImage} data-ani="fadein-96604 0.2s linear 1" data-id="96604" id="item96604" data-hidestart="1" className="pageItem hidden" alt="Spondiloartritis aksial " style={{left:'1140px',top:'441px'}} data-src="assets/images/item_96604.png" />
                        <img src={blankImage} data-ani="fadein-96627 0.2s linear 1" data-id="96627" id="item96627" data-hidestart="1" className="pageItem hidden" alt="• Ankylosing spondylitis19,21" style={{left:'1140px',top:'474px'}} data-src="assets/images/item_96627.png" />
                        <img src={blankImage} data-ani="fadein-96696 0.2s linear 1" data-id="96696" id="item96696" data-hidestart="1" className="pageItem hidden" alt="• Sakroilitis21" style={{left:'1140px',top:'506px'}} data-src="assets/images/item_96696.png" />
                        <img src={blankImage} data-ani="fadein-8673 0.2s linear 1" data-id="8673" id="item8673" data-hidestart="1" className="pageItem hidden" alt="Primary Sclerosing Cholangitis (PSC)19" style={{left:'1140px',top:'696px'}} data-src="assets/images/item_8673.png" />
                        <img src={blankImage} data-ani="fadein-8695 0.2s linear 1" data-id="8695" id="item8695" data-hidestart="1" className="pageItem hidden" alt="Episkleritis21 Skleritis21 Uveitis21" style={{left:'1140px',top:'802px'}} data-src="assets/images/item_8695.png" />
                        <img src={blankImage} data-ani="fadein-8717 0.2s linear 1" data-id="8717" id="item8717" data-hidestart="1" className="pageItem hidden" alt="9 53%19" style={{left:'1521px',top:'376px'}} data-src="assets/images/item_8717.png" />
                        <img src={blankImage} data-ani="fadein-96747 0.2s linear 1" data-id="96747" id="item96747" data-hidestart="1" className="pageItem hidden" alt="3%22 " style={{left:'1521px',top:'473px'}} data-src="assets/images/item_96747.png" />
                        <img src={blankImage} data-ani="fadein-96944 0.2s linear 1" data-id="96944" id="item96944" data-hidestart="1" className="pageItem hidden" alt="0,7 1,9%21" style={{left:'1521px',top:'588px'}} data-src="assets/images/item_96944.png" />
                        <img src={blankImage} data-ani="fadein-96723 0.2s linear 1" data-id="96723" id="item96723" data-hidestart="1" className="pageItem hidden" alt="13%22" style={{left:'1521px',top:'409px'}} data-src="assets/images/item_96723.png" />
                        <img src={blankImage} data-ani="fadein-96770 0.2s linear 1" data-id="96770" id="item96770" data-hidestart="1" className="pageItem hidden" alt="10%22" style={{left:'1521px',top:'506px'}} data-src="assets/images/item_96770.png" />
                        <img src={blankImage} data-ani="fadein-96967 0.2s linear 1" data-id="96967" id="item96967" data-hidestart="1" className="pageItem hidden" alt="1%20" style={{left:'1521px',top:'621px'}} data-src="assets/images/item_96967.png" />
                        <img src={blankImage} data-ani="fadein-8761 0.2s linear 1" data-id="8761" id="item8761" data-hidestart="1" className="pageItem hidden" alt="2 5%19" style={{left:'1521px',top:'712px'}} data-src="assets/images/item_8761.png" />
                        <img src={blankImage} data-ani="fadein-8783 0.2s linear 1" data-id="8783" id="item8783" data-hidestart="1" className="pageItem hidden" alt="1,1 2,2%21" style={{left:'1521px',top:'830px'}} data-src="assets/images/item_8783.png" />
                        <div data-ani="fadein-151338 1s linear 1" data-id="151338" id="item151338" data-hidestart="1" className="pageItem group hidden" alt="manifestasi" style={{left:'99px',top:'625px',width:' 490px',height:'235px'}}>
                            <img src={blankImage} alt="Manifestasi ekstraintestinal: " id="item8805" className="pageItem " data-src="assets/images/item_8805.png" />
                            <img src={blankImage} alt="Gejala yang terjadi di luar saluran cerna, dan gejala bergantung pada lokasi dan sistem yang terlibat.17,18" style={{top:'38px'}} id="item96511" className="pageItem " data-src="assets/images/item_96511.png" />
                        </div>
                        <img src={blankImage} data-ani="fadein-92241 1s linear 1" data-id="92241" id="item92241" data-hidestart="1" className="pageItem hidden" alt="Sebanyak 25% 40% penderita IBD mengalami manifestasi ekstraintestinal.16" style={{left:'99px',top:'480px'}} data-src="assets/images/item_92241.png" />
                        <img src={blankImage} data-ani="fadein-8808 0.2s linear 1" data-id="8808" id="item8808" data-hidestart="1" className="pageItem hidden" alt="line 1" style={{height:' 168px',left:'1103px',top:'370px'}} data-src="assets/images/item_8808.png" />
                        <img src={blankImage} data-ani="fadein-8809 0.2s linear 1" data-id="8809" id="item8809" data-hidestart="1" className="pageItem hidden" alt="line 2" style={{height:' 168px',left:'1491px',top:'370px'}} data-src="assets/images/item_8809.png" />
                        <img src={blankImage} data-ani="fadein-8810 0.2s linear 1" data-id="8810" id="item8810" data-hidestart="1" className="pageItem hidden" alt="line 4" style={{height:' 86px',left:'1103px',top:'577px'}} data-src="assets/images/item_8810.png" />
                        <img src={blankImage} data-ani="fadein-8811 0.2s linear 1" data-id="8811" id="item8811" data-hidestart="1" className="pageItem hidden" alt="line 3" style={{height:' 86px',left:'1491px',top:'577px'}} data-src="assets/images/item_8811.png" />
                        <img src={blankImage} data-ani="fadein-8812 0.2s linear 1" data-id="8812" id="item8812" data-hidestart="1" className="pageItem hidden" alt="line 7" style={{height:' 106px',left:'1102px',top:'797px'}} data-src="assets/images/item_8812.png" />
                        <img src={blankImage} data-ani="fadein-8813 0.2s linear 1" data-id="8813" id="item8813" data-hidestart="1" className="pageItem hidden" alt="line 8" style={{height:' 106px',left:'1491px',top:'797px'}} data-src="assets/images/item_8813.png" />
                        <img src={blankImage} data-ani="fadein-8814 0.2s linear 1" data-id="8814" id="item8814" data-hidestart="1" className="pageItem hidden" alt="line 5" style={{height:' 53px',left:'1103px',top:'706px'}} data-src="assets/images/item_8814.png" />
                        <img src={blankImage} data-ani="fadein-8815 0.2s linear 1" data-id="8815" id="item8815" data-hidestart="1" className="pageItem hidden" alt="line 6" style={{height:' 53px',left:'1491px',top:'706px'}} data-src="assets/images/item_8815.png" />
                        <img src={blankImage} alt="Tanda & Gejala IBD" style={{left:'99px',top:'271px'}} id="item19457" className="pageItem " data-src="assets/images/item_19457.png" />
                        <img src={blankImage} alt="Bab 4" style={{left:'101px',top:'231px'}} id="item19480" className="pageItem " data-src="assets/images/item_19480.png" />
                        <button data-id="105037" name="icon back 14" onClick={handleOnClickPreviousPage} aria-label="icon back 14" id="item105037" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item105044" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item105045" className="pageItem " data-src="assets/images/item_105045.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item105047" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item105048" className="pageItem " data-src="assets/images/item_105048.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item105041" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item105042" className="pageItem " data-src="assets/images/item_105042.png" />
                            </div>
                        </button>
                        <button data-id="105050" name="icon next 14" onClick={handleOnClickNextPage} aria-label="icon next 14" id="item105050" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item105056" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item105057" className="pageItem " data-src="assets/images/item_105057.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item105059" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item105061" className="pageItem " data-src="assets/images/item_105061.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item105053" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item105054" className="pageItem " data-src="assets/images/item_105054.png" />
                            </div>
                        </button>
                        <button data-id="126832" name="button ulang 14" onClick={handleOnClickUlang} aria-label="button ulang 14" id="item126832" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item126843" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126844" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126845" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126846" className="pageItem " data-src="assets/images/item_126846.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126847" className="pageItem " data-src="assets/images/item_126847.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item126850" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126851" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#fa635e" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126853" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126854" className="pageItem " data-src="assets/images/item_126854.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126856" className="pageItem " data-src="assets/images/item_126856.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item126835" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126836" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126838" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126839" className="pageItem " data-src="assets/images/item_126839.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126841" className="pageItem " data-src="assets/images/item_126841.png" />
                                </div>
                            </div>
                        </button>
                        <button data-id="221278" name="icon beranda 78" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 78" id="item221278" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221285" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221286" className="pageItem " data-src="assets/images/item_221286.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221287" className="pageItem " data-src="assets/images/item_221287.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221289" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221290" className="pageItem " data-src="assets/images/item_221290.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221291" className="pageItem " data-src="assets/images/item_221291.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221281" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221282" className="pageItem " data-src="assets/images/item_221282.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221283" className="pageItem " data-src="assets/images/item_221283.png" />
                            </div>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Bab4P1;