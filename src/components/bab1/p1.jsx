import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Bab1P1() {

    const navigate = useNavigate();

    const handleOnClickGoToBab1 = () => {
        window.location.href = '/bab1-start';
    };
    //var referrer = document.referrer;
    //console.log("referrer url",referrer);
    const handleOnClickBack = () => {
        window.location.href = '/bab1-start';
    };
    const handleOnClickPreviousPage = () => {
        window.location.href = '/beranda-no-sound';
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }


    const handleOnClickKUButton = (event) => {
        event.preventDefault();
        jQuery("#item263625 audio")[0].play();
        go(event, [{ n: 1, link: 1, id: 145123, act: 'play' }, { n: 1, id: 145250, act: 'play' }, { n: 1, id: 154678, act: 'play' }, { n: 1, id: 145148, act: 'play' }, { del: 6.2, n: 1, id: 145150, act: 'play' }, { del: 4, n: 1, id: 145151, act: 'play' }, { del: 5.2, n: 1, id: 145152, act: 'play' }]);
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

    const handleOnClickNextPage = (event) => {
        window.location.href = '/bab2-start';
    }

    const handleOnClickUlang = (event) => {
        event.preventDefault();
        jQuery("#item263613 audio")[0].currentTime = 0;
        jQuery("#item263613 audio")[0].play();
        go(event,[{n:1,id:2889,act:'play'},{del:2,n:1,id:73850,act:'play'},{del:1,n:1,id:145067,act:'play'},{del:0.5,n:1,id:145068,act:'play'},{del:0.5,n:1,id:145069,act:'play'},{del:1.5,n:1,id:145070,act:'play'},{n:1,id:145311,act:'play'},{n:1,link:1,id:145159,act:'play'},{n:1,id:153072,act:'play'},{n:1,link:1,id:145252,act:'play'},{n:1,id:153105,act:'play'}]);
    }

    
    const applyGIFImportantStyles1 = (element) => {
        if (element) {
            element.style.setProperty('width', '383px', 'important');
            element.style.setProperty('height', '383px', 'important');
            element.style.setProperty('left', '946px', 'important');
            element.style.setProperty('top', '121px', 'important');
        }
    };

    const applyGIFImportantStyles2 = (element) => {
        if (element) {
            element.style.setProperty('width', '387px', 'important');
            element.style.setProperty('height', '387px', 'important');
            element.style.setProperty('left', '1344px', 'important');
            element.style.setProperty('top', '117px', 'important');
        }
    };

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
                <li className="page" data-name="7">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:2889,act:'play'},{del:2,n:1,id:73850,act:'play'},{del:1,n:1,id:145067,act:'play'},{del:0.5,n:1,id:145068,act:'play'},{del:0.5,n:1,id:145069,act:'play'},{del:1.5,n:1,id:145070,act:'play'},{n:1,id:145311,act:'play'},{n:1,link:1,id:145159,act:'play'},{n:1,id:153072,sn:1,act:'play'},{n:1,link:1,id:145252,act:'play'},{n:1,id:153105,sn:1,act:'play'}], 'pageload');" style={{ width: '1920px', height: '1080px' }}>
                        <img src={blankImage} data-ani="flyinfromleft-73850 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="73850" id="item73850" data-hidestart="1" className="pageItem hidden" alt="Kategori" style={{ left: '695px', top: '526px' }} data-src="assets/images/item_73850.png" />
                        <div data-ani="flyinfromleft-145067 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="145067" id="item145067" data-hidestart="1" className="pageItem group hidden" alt="lokasi imflamsi" style={{ left: '695px', top: '625px', width: ' 244px', height: '35px' }}>
                            <img src={blankImage} alt="lokasi inflamasi" id="item73758" className="pageItem " data-src="assets/images/item_73758.png" />
                            <img src={blankImage} alt="GraphicLine" style={{ height: ' 1px', top: '34px' }} id="item73873" className="pageItem " data-src="assets/images/item_73873.png" />
                        </div>
                        <div data-ani="flyinfromleft-145069 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="145069" id="item145069" data-hidestart="1" className="pageItem group hidden" alt="gambar imflamasi" style={{ left: '695px', top: '768px', width: ' 246px', height: '35px' }}>
                            <img src={blankImage} alt="Gambaran Inflamasi" id="item73781" className="pageItem " data-src="assets/images/item_73781.png" />
                            <img src={blankImage} alt="GraphicLine" style={{ height: ' 1px', top: '34px' }} id="item73874" className="pageItem " data-src="assets/images/item_73874.png" />
                        </div>
                        <div data-ani="flyinfromleft-145070 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="145070" id="item145070" data-hidestart="1" className="pageItem group hidden" alt="pendarahan rektum" style={{ left: '695px', top: '829px', width: ' 247px', height: '35px' }}>
                            <img src={blankImage} alt="Perdarahan Rektum" id="item73804" className="pageItem " data-src="assets/images/item_73804.png" />
                            <img src={blankImage} alt="GraphicLine" style={{ height: ' 1px', top: '34px' }} id="item73875" className="pageItem " data-src="assets/images/item_73875.png" />
                        </div>
                        <div data-ani="flyinfromleft-145068 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="145068" id="item145068" data-hidestart="1" className="pageItem group hidden" alt="pola imflamasi" style={{ left: '695px', top: '708px', width: ' 244px', height: '35px' }}>
                            <img src={blankImage} alt="Pola Inflamasi" id="item73827" className="pageItem " data-src="assets/images/item_73827.png" />
                            <img src={blankImage} alt="GraphicLine" style={{ height: ' 1px', top: '34px' }} id="item73876" className="pageItem " data-src="assets/images/item_73876.png" />
                        </div>
                        <div id="item145196" data-ani="flyinfromtop-145196 1s cubic-bezier(.2,.6,.35,1) 1" data-id="145196" data-hidestart="1" className="pageItem hidden" alt="rectangle 2">&nbsp;</div>
                        <img src={blankImage} alt="Polygon" style={{ left: '-664px', top: '-614px' }} id="item2499" className="pageItem " data-src="assets/images/item_2499.png" />
                        <div id="item145123" data-ani="flyinfromtop-145123 1s cubic-bezier(.2,.6,.35,1) 1" data-id="145123" data-hidestart="1" className="pageItem hidden" alt="rectangle 1">&nbsp;</div>
                        <div data-ani="fadein-145311 1s linear 1" data-id="145311" id="item145311" data-hidestart="1" className="pageItem group hidden" alt="Klik gambar untuk informasi lebih lanju" style={{ left: '99px', top: '457px', width: ' 479px', height: '47px' }}>
                            <div id="item145078" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Klik gambar untuk informasi lebih lanjut" style={{ left: '19px', top: '9px' }} id="item145098" className="pageItem " data-src="assets/images/item_145098.png" />
                        </div>
                        <div id="item263613" className="pageItem" style={{ height: '60px', width: '60px', left: '460px', top: '1017px' }} alt="Sound">
                            <audio data-id="263613" className="mejs-no-controls" data-autoplay="1" data-autodelay="0" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 6 FULL.mp3" />
                            </audio>
                        </div>
                        <button data-ani="fadein-145159 1s linear 1" data-id="145159" id="item145159" data-hidestart="1" className="pageItem has-down has-on hidden" name="KU button" onClick={handleOnClickKUButton} aria-label="KU button">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" style={{ left: '5px', top: '24px' }} id="item2505" className="pageItem ">
                                    <svg version="1.1" width="384" height="382" >
                                        <ellipse cx="191.65" cy="190.67" rx="191.65" ry="190.67" fill="#c9ddff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Rectangle" id="item2506" className="pageItem " data-src="assets/images/item_2506.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" style={{ left: '5px', top: '24px' }} id="item145224" className="pageItem ">
                                    <svg version="1.1" width="384" height="382" >
                                        <ellipse cx="191.65" cy="190.67" rx="191.65" ry="190.67" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Rectangle" id="item145225" className="pageItem " data-src="assets/images/item_145225.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" style={{ left: '5px', top: '24px' }} id="item145229" className="pageItem ">
                                    <svg version="1.1" width="384" height="382" >
                                        <ellipse cx="191.65" cy="190.67" rx="191.65" ry="190.67" fill="#c9ddff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Rectangle" id="item145230" className="pageItem " data-src="assets/images/item_145230.png" />
                            </div>
                        </button>
                        <button data-ani="fadein-145252 1s linear 1" data-id="145252" id="item145252" data-hidestart="1" className="pageItem has-down has-on hidden" name="PC button" onClick={handleOnClickPCButton} aria-label="PC button">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" style={{ left: '13px', top: '28px' }} id="item2503" className="pageItem ">
                                    <svg version="1.1" width="384" height="382" >
                                        <ellipse cx="191.65" cy="190.67" rx="191.65" ry="190.67" fill="#f9b1a8" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Rectangle" id="item2513" className="pageItem " data-src="assets/images/item_2513.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" style={{ left: '13px', top: '28px' }} id="item145255" className="pageItem ">
                                    <svg version="1.1" width="384" height="382" >
                                        <ellipse cx="191.65" cy="190.67" rx="191.65" ry="190.67" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Rectangle" id="item145256" className="pageItem " data-src="assets/images/item_145256.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" style={{ left: '13px', top: '28px' }} id="item145266" className="pageItem ">
                                    <svg version="1.1" width="384" height="382" >
                                        <ellipse cx="191.65" cy="190.67" rx="191.65" ry="190.67" fill="#f9b1a8" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Rectangle" id="item145267" className="pageItem " data-src="assets/images/item_145267.png" />
                            </div>
                        </button>
                        <img src={blankImage} data-ani="appear-154678 0.6s linear 1" data-id="154678" id="item154678" data-hidestart="1" className="pageItem hidden" alt="Rectangle" ref={applyGIFImportantStyles1} data-src="assets/images/Picture3.gif" />
                        <img src={blankImage} data-ani="appear-154690 0.6s linear 1" data-id="154690" id="item154690" data-hidestart="1" className="pageItem hidden" alt="Rectangle" ref={applyGIFImportantStyles2} data-src="assets/images/Picture4.gif" />
                        <div id="item263625" className="pageItem" style={{ height: '60px', width: '60px', left: '591px', top: '1004px' }} alt="Sound">
                            <audio data-id="263625" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 6 KU FULL.mp3" />
                            </audio>
                        </div>
                        <div id="item263631" className="pageItem" style={{ height: '60px', width: '60px', left: '635px', top: '1014px' }} alt="Sound">
                            <audio data-id="263631" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 6 PC FULL.mp3" />
                            </audio>
                        </div>
                        <div data-ani="fadein-145148 0.2s linear 1" data-id="145148" id="item145148" className="pageItem group hidden" data-hidestart="1" alt="terbatas pada kolon dan rektum" ref={applyItem145148} >
                            <img src={blankImage} alt="Terbatas pada kolon dan rektum" id="item2561" className="pageItem " data-src="assets/images/item_2561.png" />
                            <img src={blankImage} alt="GraphicLine" style={{ height: ' 1px', left: '25px', top: '63px' }} id="item2851" className="pageItem " data-src="assets/images/item_2851.png" />
                        </div>
                        <div data-ani="fadein-145154 0.2s linear 1" data-id="145154" id="item145154" className="pageItem group hidden" data-hidestart="1" alt="disepanjang saluran cerna (mulut sampai anus)" style={{ left: '1344px', top: '599px', width: ' 407px', height: '64px' }}>
                            <img src={blankImage} alt="Disepanjang saluran cerna (mulut sampai anus)" id="item2583" className="pageItem " data-src="assets/images/item_2583.png" />
                            <img src={blankImage} alt="GraphicLine" style={{ height: ' 1px', left: '34px', top: '63px' }} id="item2852" className="pageItem " data-src="assets/images/item_2852.png" />
                        </div>
                        <div data-ani="fadein-145151 0.2s linear 1" data-id="145151" id="item145151" className="pageItem group hidden" data-hidestart="1" alt="lapisan mukosa" style={{ left: '973px', top: '769px', width: ' 339px', height: '36px' }}>
                            <img src={blankImage} alt="Lapisan Mukosa" style={{ left: '80px' }} id="item2627" className="pageItem " data-src="assets/images/item_2627.png" />
                            <img src={blankImage} alt="GraphicLine" style={{ height: ' 1px', top: '35px' }} id="item2854" className="pageItem " data-src="assets/images/item_2854.png" />
                        </div>
                        <div data-ani="fadein-145156 0.2s linear 1" data-id="145156" id="item145156" className="pageItem group hidden" data-hidestart="1" alt="transmural" style={{ left: '1378px', top: '769px', width: ' 339px', height: '36px' }}>
                            <img src={blankImage} alt="Transmural" style={{ left: '108px' }} id="item2649" className="pageItem " data-src="assets/images/item_2649.png" />
                            <img src={blankImage} alt="GraphicLine" style={{ height: ' 1px', top: '35px' }} id="item2855" className="pageItem " data-src="assets/images/item_2855.png" />
                        </div>
                        <div data-ani="fadein-145152 0.2s linear 1" data-id="145152" id="item145152" className="pageItem group hidden" data-hidestart="1" alt="sering" style={{ left: '973px', top: '830px', width: ' 339px', height: '36px' }}>
                            <img src={blankImage} alt="Sering" style={{ left: '134px' }} id="item2693" className="pageItem " data-src="assets/images/item_2693.png" />
                            <img src={blankImage} alt="GraphicLine" style={{ height: ' 1px', top: '35px' }} id="item2857" className="pageItem " data-src="assets/images/item_2857.png" />
                        </div>
                        <div data-ani="fadein-145157 0.2s linear 1" data-id="145157" id="item145157" data-hidestart="1" className="pageItem group hidden" alt="jarang" style={{ left: '1378px', top: '830px', width: ' 339px', height: '36px' }}>
                            <img src={blankImage} alt="Jarang" style={{ left: '135px' }} id="item2715" className="pageItem " data-src="assets/images/item_2715.png" />
                            <img src={blankImage} alt="GraphicLine" style={{ height: ' 1px', top: '35px' }} id="item2858" className="pageItem " data-src="assets/images/item_2858.png" />
                        </div>
                        <div data-ani="fadein-145150 0.2s linear 1" data-id="145150" id="item145150" data-hidestart="1" className="pageItem group hidden" alt="kontinu" style={{ left: '973px', top: '709px', width: ' 339px', height: '36px' }}>
                            <img src={blankImage} alt="Kontinu" style={{ left: '127px' }} id="item2759" className="pageItem " data-src="assets/images/item_2759.png" />
                            <img src={blankImage} alt="GraphicLine" style={{ height: ' 1px', top: '35px' }} id="item2860" className="pageItem " data-src="assets/images/item_2860.png" />
                        </div>
                        <div data-ani="fadein-145155 0.2s linear 1" data-id="145155" id="item145155" data-hidestart="1" className="pageItem group hidden" alt="diskontiu/ patchy disebut juga “skipped lession&quot;" style={{ left: '1378px', top: '681px', width: ' 339px', height: '65px' }}>
                            <img src={blankImage} alt="Diskontinu / patchy disebut juga “skipped lession”" style={{ left: '10px' }} id="item2781" className="pageItem " data-src="assets/images/item_2781.png" />
                            <img src={blankImage} alt="GraphicLine" style={{ height: ' 1px', top: '64px' }} id="item2861" className="pageItem " data-src="assets/images/item_2861.png" />
                        </div>
                        <img src={blankImage} data-ani="fadein-2889 1s linear 1" data-id="2889" id="item2889" data-hidestart="1" className="pageItem hidden" alt="Karakteristik IBD4" style={{ left: '96px', top: '271px' }} data-src="assets/images/item_2889.png" />
                        <img src={blankImage} alt="Bab 1" style={{ left: '101px', top: '231px' }} id="item2911" className="pageItem " data-src="assets/images/item_2911.png" />
                        <div alt="Takeda Indonesia, 202" style={{ left: '1885px', top: '913px' }} id="item2936" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{ left: '1px' }} id="item2956" className="pageItem " data-src="assets/images/item_2956.png" />
                            <div alt="Group" style={{ top: '132px' }} id="item2959" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item2960" className="pageItem " data-src="assets/images/item_2960.png" />
                                <img src={blankImage} alt="Polygon" style={{ left: '3px', top: '4px' }} id="item2961" className="pageItem " data-src="assets/images/item_2961.png" />
                            </div>
                        </div>
                        <button data-ani="fadein-145250 0.5s linear 1" data-id="145250" id="item145250" data-hidestart="1" className="pageItem has-on has-down hidden" name="x 1 button" onClick={handleOnClick1xButton} aria-label="x 1 button">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item145111" className="pageItem " data-src="assets/images/item_145111.png" />
                                <img src={blankImage} alt="Polygon" id="item145112" className="pageItem " data-src="assets/images/item_145112.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <img src={blankImage} alt="Polygon" id="item145273" className="pageItem " data-src="assets/images/item_145273.png" />
                                <img src={blankImage} alt="Polygon" id="item145274" className="pageItem " data-src="assets/images/item_145274.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <img src={blankImage} alt="Polygon" id="item145276" className="pageItem " data-src="assets/images/item_145276.png" />
                                <img src={blankImage} alt="Polygon" id="item145278" className="pageItem " data-src="assets/images/item_145278.png" />
                            </div>
                        </button>
                        <button data-ani="fadein-145287 0.5s linear 1" data-id="145287" id="item145287" data-hidestart="1" className="pageItem has-on has-down hidden" name="x 2 button" onClick={handleOnClick2xButton} aria-label="x 2 button">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item145292" className="pageItem " data-src="assets/images/item_145292.png" />
                                <img src={blankImage} alt="Polygon" id="item145293" className="pageItem " data-src="assets/images/item_145293.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <img src={blankImage} alt="Polygon" id="item145295" className="pageItem " data-src="assets/images/item_145295.png" />
                                <img src={blankImage} alt="Polygon" id="item145296" className="pageItem " data-src="assets/images/item_145296.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <img src={blankImage} alt="Polygon" id="item145289" className="pageItem " data-src="assets/images/item_145289.png" />
                                <img src={blankImage} alt="Polygon" id="item145290" className="pageItem " data-src="assets/images/item_145290.png" />
                            </div>
                        </button>
                        <div id="item145325" className="pageItem" style={{ height: '60px', width: '60px', left: '400px', top: '1004px' }} alt="Sound">
                            <audio data-id="145325" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 6-1.mp3" />
                            </audio>
                        </div>
                        <div id="item145329" className="pageItem" style={{ height: '60px', width: '60px', left: '564px', top: '1010px' }} alt="Sound">
                            <audio data-id="145329" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 6-2.mp3" />
                            </audio>
                        </div>
                        <div id="item145355" className="pageItem" style={{ height: '60px', width: '60px', left: '712px', top: '1010px' }} alt="Sound">
                            <audio data-id="145355" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 6-8.mp3" />
                            </audio>
                        </div>
                        <div id="item145361" className="pageItem" style={{ height: '60px', width: '60px', left: '967px', top: '1010px' }} alt="Sound">
                            <audio data-id="145361" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 6-3.mp3" />
                            </audio>
                        </div>
                        <div id="item145368" className="pageItem" style={{ height: '60px', width: '60px', left: '1044px', top: '1010px' }} alt="Sound">
                            <audio data-id="145368" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 6-9.mp3" />
                            </audio>
                        </div>
                        <div id="item145376" className="pageItem" style={{ height: '60px', width: '60px', left: '788px', top: '1019px' }} alt="Sound">
                            <audio data-id="145376" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 6-10.mp3" />
                            </audio>
                        </div>
                        <div id="item145386" className="pageItem" style={{ height: '60px', width: '60px', left: '1120px', top: '1010px' }} alt="Sound">
                            <audio data-id="145386" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 6-11.mp3" />
                            </audio>
                        </div>
                        <div id="item145395" className="pageItem" style={{ height: '60px', width: '60px', left: '864px', top: '1019px' }} alt="Sound">
                            <audio data-id="145395" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 6-12.mp3" />
                            </audio>
                        </div>
                        <div id="item145401" className="pageItem" style={{ height: '60px', width: '60px', left: '1202px', top: '1019px' }} alt="Sound">
                            <audio data-id="145401" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 6-13.mp3" />
                            </audio>
                        </div>
                        <div id="item145412" className="pageItem" style={{ height: '60px', width: '60px', left: '478px', top: '1004px' }} alt="Sound">
                            <audio data-id="145412" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 5-9.mp3" />
                            </audio>
                        </div>
                        <img src={blankImage} data-ani="fadein-153072 0.5s linear 1" data-id="153072" id="item153072" data-hidestart="1" className="pageItem hidden" alt="Kolitis Ulseratif (KU)" style={{ left: '994px', top: '526px' }} data-src="assets/images/item_153072.png" />
                        <img src={blankImage} data-ani="fadein-153105 0.5s linear 1" data-id="153105" id="item153105" data-hidestart="1" className="pageItem hidden" alt="Penyakit Crohn (PC)" style={{ left: '1411px', top: '526px' }} data-src="assets/images/item_153105.png" />
                        <div id="item79475" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <button data-id="100388" name="icon back 26" onClick={handleOnClickBack} aria-label="icon back 26" id="item100388" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item100394" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '21px', top: '14px' }} id="item100395" className="pageItem " data-src="assets/images/item_100395.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item100397" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '21px', top: '14px' }} id="item100398" className="pageItem " data-src="assets/images/item_100398.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item100391" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '21px', top: '14px' }} id="item100392" className="pageItem " data-src="assets/images/item_100392.png" />
                            </div>
                        </button>
                        <button data-id="100400" name="icon next 26" onClick={handleOnClickNextPage} aria-label="icon next 26" id="item100400" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item100406" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '23px', top: '14px' }} id="item100407" className="pageItem " data-src="assets/images/item_100407.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item100410" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '23px', top: '14px' }} id="item100412" className="pageItem " data-src="assets/images/item_100412.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item100403" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '23px', top: '14px' }} id="item100404" className="pageItem " data-src="assets/images/item_100404.png" />
                            </div>
                        </button>
                        <div id="item113686" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <Navigation />
                        <button data-id="126394" name="button ulang 5"
                            onClick={handleOnClickUlang} aria-label="button ulang 5" id="item126394" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item126406" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:'67px',height:'67px'}} id="item126407"
                                        className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126408"
                                    className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126409"
                                        className="pageItem " data-src="assets/images/item_126409.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126410"
                                        className="pageItem " data-src="assets/images/item_126410.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item126412" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:'67px',height:'67px'}} id="item126413"
                                        className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#fa635e" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126415"
                                    className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126416"
                                        className="pageItem " data-src="assets/images/item_126416.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126418"
                                        className="pageItem " data-src="assets/images/item_126418.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item126397" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:'67px',height:'67px'}} id="item126398"
                                        className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126400"
                                    className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126401"
                                        className="pageItem " data-src="assets/images/item_126401.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126404"
                                        className="pageItem " data-src="assets/images/item_126404.png" />
                                </div>
                            </div>
                        </button>
                        <button data-id="221157" name="icon beranda 71" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 71"
                            id="item221157" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221164" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}}
                                    id="item221165" className="pageItem " data-src="assets/images/item_221165.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}}
                                    id="item221166" className="pageItem " data-src="assets/images/item_221166.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221168" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}}
                                    id="item221169" className="pageItem " data-src="assets/images/item_221169.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}}
                                    id="item221170" className="pageItem " data-src="assets/images/item_221170.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221160" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}}
                                    id="item221161" className="pageItem " data-src="assets/images/item_221161.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}}
                                    id="item221162" className="pageItem " data-src="assets/images/item_221162.png" />
                            </div>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Bab1P1;