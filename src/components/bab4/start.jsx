import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Bab4Awal() {

    const navigate = useNavigate();

    const handleOnClickGoToBab1 = () => {
        window.location.href = '/bab1-start';
    };
    //var referrer = document.referrer;
    //console.log("referrer url",referrer);

    const handleOnClickPreviousPage = () => {
        window.location.href = '/bab3-p1';
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }

    const handleOnClickUlang = (event) => {
        event.preventDefault();
        jQuery("#item265100 video")[0].currentTime = 0;
        jQuery("#item265100 video")[0].play();
        go(event, [{ n: 1, id: 7635, act: 'play' }, { n: 1, link: 1, id: 7859, act: 'play' }, { n: 1, id: 7837, act: 'play' }, { n: 1, id: 7881, act: 'play' }]);
    }

    const handleOnClickNextPage = (event) => {
        window.location.href = '/bab4-p1';
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

    const applyItem263697 = (element) => {
        if (element) {
            element.style.setProperty('left', '-356px', 'important');
            element.style.setProperty('top', '56px', 'important');
        }
    };

    return (
        <div >
            <ul className="pages" id="slider">
                <li className="page" data-name="15">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:7635,act:'play'},{n:1,link:1,id:7859,act:'play'},{n:1,id:7837,sn:1,act:'play'},{n:1,id:7881,act:'play'}], 'pageload');" style={{width:'1920px',height:'1080px'}}>
                        <div id="item265100" className="pageItem" alt="Movie" style={{left:'-670px',top:'-186px'}}>
                            <video width="2867" height="1613" data-id="265100" data-autoplay="1" data-autodelay="0" data-stoplast="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/page 14 FULL.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div id="item151382" className="pageItem" style={{height:'60px',width:'60px',left:'358px',top:'991px'}} alt="Sound">
                            <audio data-id="151382" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 14-1.mp3" />
                            </audio>
                        </div>
                        <div id="item151386" className="pageItem" style={{height:'60px',width:'60px',left:'442px',top:'991px'}} alt="Sound">
                            <audio data-id="151386" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 14-2.mp3" />
                            </audio>
                        </div>
                        <div id="item151389" className="pageItem" style={{height:'60px',width:'60px',left:'522px',top:'991px'}} alt="Sound">
                            <audio data-id="151389" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 14-3.mp3" />
                            </audio>
                        </div>
                        <div id="item151392" className="pageItem" style={{height:'60px',width:'60px',left:'610px',top:'991px'}} alt="Sound">
                            <audio data-id="151392" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 14-4.mp3" />
                            </audio>
                        </div>
                        <div id="item151396" className="pageItem" style={{height:'60px',width:'60px',left:'692px',top:'991px'}} alt="Sound">
                            <audio data-id="151396" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 14-5.mp3" />
                            </audio>
                        </div>
                        <div id="item151399" className="pageItem" style={{height:'60px',width:'60px',left:'786px',top:'991px'}} alt="Sound">
                            <audio data-id="151399" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 14-6.mp3" />
                            </audio>
                        </div>
                        <div id="item151404" className="pageItem" style={{height:'60px',width:'60px',left:'873px',top:'991px'}} alt="Sound">
                            <audio data-id="151404" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 14-7.mp3" />
                            </audio>
                        </div>
                        <img src={blankImage} alt="Rectangle" style={{left:'573px',top:'-34px'}} id="item265109" className="pageItem " data-src="assets/images/item_265109.png" />
                        <div id="item151409" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <img src={blankImage} data-ani="flyinfromleft-7635 1s cubic-bezier(.2,.6,.35,1) 1" data-id="7635" id="item7635" data-hidestart="1" className="pageItem hidden" alt="Polygon" style={{left:'-637px',top:'-618px'}} data-src="assets/images/item_7635.png" />
                        <div id="item207450" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item7792" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item7812" className="pageItem " data-src="assets/images/item_7812.png" />
                            <div alt="Group" style={{top:'132px'}} id="item7815" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item7816" className="pageItem " data-src="assets/images/item_7816.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item7817" className="pageItem " data-src="assets/images/item_7817.png" />
                            </div>
                        </div>
                        <img src={blankImage} data-ani="fadein-7837 1s linear 1" data-id="7837" id="item7837" data-hidestart="1" className="pageItem hidden" alt="Tanda & Gejala IBD" style={{left:'99px',top:'271px'}} data-src="assets/images/item_7837.png" />
                        <img src={blankImage} data-ani="fadein-7859 1s linear 1" data-id="7859" id="item7859" data-hidestart="1" className="pageItem hidden" alt="Bab 4" style={{left:'101px',top:'231px'}} data-src="assets/images/item_7859.png" />
                        <img src={blankImage} data-ani="fadein-7881 0.5s linear 1" data-id="7881" id="item7881" data-hidestart="1" className="pageItem hidden" alt="Disamping merupakan manifestasi klinis IBD yang paling umum terjadi:14,15 " style={{left:'100px',top:'474px'}} data-src="assets/images/item_7881.png" />
                        <button data-id="104462" name="icon back 13" onClick={handleOnClickPreviousPage} aria-label="icon back 13" id="item104462" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item104468" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item104469" className="pageItem " data-src="assets/images/item_104469.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item104471" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item104472" className="pageItem " data-src="assets/images/item_104472.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item104465" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item104466" className="pageItem " data-src="assets/images/item_104466.png" />
                            </div>
                        </button>
                        <button data-id="104474" name="icon next 13" onClick={handleOnClickNextPage} aria-label="icon next 13" id="item104474" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item104481" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item104482" className="pageItem " data-src="assets/images/item_104482.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item104484" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item104486" className="pageItem " data-src="assets/images/item_104486.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item104478" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item104479" className="pageItem " data-src="assets/images/item_104479.png" />
                            </div>
                        </button>
                        <button data-id="126793" name="button ulang 13" onClick={handleOnClickUlang} aria-label="button ulang 13" id="item126793" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item126804" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126805" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126806" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126807" className="pageItem " data-src="assets/images/item_126807.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126808" className="pageItem " data-src="assets/images/item_126808.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item126810" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126811" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#fa635e" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126814" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126815" className="pageItem " data-src="assets/images/item_126815.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126817" className="pageItem " data-src="assets/images/item_126817.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item126796" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126797" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126799" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126800" className="pageItem " data-src="assets/images/item_126800.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126802" className="pageItem " data-src="assets/images/item_126802.png" />
                                </div>
                            </div>
                        </button>
                        <button data-id="221264" name="icon beranda 77" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 77" id="item221264" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221271" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221272" className="pageItem " data-src="assets/images/item_221272.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221273" className="pageItem " data-src="assets/images/item_221273.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221275" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221276" className="pageItem " data-src="assets/images/item_221276.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221277" className="pageItem " data-src="assets/images/item_221277.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221267" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221268" className="pageItem " data-src="assets/images/item_221268.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221269" className="pageItem " data-src="assets/images/item_221269.png" />
                            </div>
                        </button>
                        <Navigation />
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Bab4Awal;