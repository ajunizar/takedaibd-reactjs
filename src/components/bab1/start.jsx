import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Bab1Awal() {

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
        window.location.href = '/beranda-no-sound';
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }

    const handleOnClickUlang = (event) => {
        event.preventDefault();
        jQuery("#item263606 audio")[0].currentTime = 0;
        jQuery("#item263606 audio")[0].play();
        go(event,[{n:1,id:2048,act:'play'},{n:1,link:1,id:2230,act:'play'},{n:1,id:2098,act:'play'},{n:1,id:2252,act:'play'},{del:12,n:1,id:78991,act:'play'},{del:7.5,n:1,id:73751,act:'play'},{del:3.5,n:1,id:79020,act:'play'},{n:1,link:1,id:2142,act:'play'},{n:1,id:154615,act:'play'},{n:1,id:2186,act:'play'},{del:5.2,n:1,id:79021,act:'play'},{n:1,link:1,id:2164,act:'play'},{n:1,id:154632,act:'play'},{n:1,id:2208,act:'play'}]);
    }

    const handleOnClickNextPage = (event) => {
        window.location.href = '/bab1-p1';
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
                <li className="page" data-name="6">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:2048,act:'play'},{n:1,link:1,id:2230,act:'play'},{n:1,id:2098,sn:1,act:'play'},{n:1,id:2252,act:'play'},{del:12,n:1,id:78991,act:'play'},{del:7.5,n:1,id:73751,act:'play'},{del:3.5,n:1,id:79020,act:'play'},{n:1,link:1,id:2142,act:'play'},{n:1,id:154615,sn:1,act:'play'},{n:1,id:2186,act:'play'},{del:5.2,n:1,id:79021,act:'play'},{n:1,link:1,id:2164,act:'play'},{n:1,id:154632,sn:1,act:'play'},{n:1,id:2208,act:'play'}], 'pageload');" style={{ width: '1920px', height: '1080px' }}>
                        <img src={blankImage} data-ani="flyinfromleft-2048 1s cubic-bezier(.2,.6,.35,1) 1" data-id="2048" id="item2048" data-hidestart="1" className="pageItem hidden" alt="Polygon" style={{ left: '-637px', top: '-562px' }} data-src="assets/images/item_2048.png" />
                        <div data-ani="flyinfrombottom-79021 1s cubic-bezier(.2,.6,.35,1) 1" data-id="79021" id="item79021" data-hidestart="1" className="pageItem group hidden" alt="pic KU" style={{ left: '1256px', top: '309px', width: ' 456px', height: '478px' }}>
                            <div alt="Oval" style={{ left: '17px', top: '45px' }} id="item2052" className="pageItem ">
                                <svg version="1.1" width="434" height="434" >
                                    <ellipse cx="216.61" cy="216.61" rx="216.61" ry="216.61" fill="#c9ddff" />
                                </svg>
                            </div>
                            <img src={blankImage} alt="Rectangle" id="item2054" className="pageItem " data-src="assets/images/item_2054.png" />
                        </div>
                        <div data-ani="flyinfrombottom-79020 1s cubic-bezier(.2,.6,.35,1) 1" data-id="79020" id="item79020" data-hidestart="1" className="pageItem group hidden" alt="pict PC" style={{ left: '754px', top: '316px', width: ' 461px', height: '472px' }}>
                            <div alt="Oval" style={{ left: '23px', top: '39px' }} id="item2051" className="pageItem ">
                                <svg version="1.1" width="434" height="434" >
                                    <ellipse cx="216.61" cy="216.61" rx="216.61" ry="216.61" fill="#c9ddff" />
                                </svg>
                            </div>
                            <img src={blankImage} alt="Rectangle" id="item2067" className="pageItem " data-src="assets/images/item_2067.png" />
                        </div>
                        <img src={blankImage} data-ani="appear-154615 0.6s linear 1" ref={applyGIFImportantStyles1} data-id="154615" id="item154615" data-hidestart="1" className="pageItem hidden" alt="Rectangle"  data-src="assets/images/Picture4.gif" />
                        <img src={blankImage} data-ani="appear-154632 0.6s linear 1" ref={applyGIFImportantStyles2} data-id="154632" id="item154632" data-hidestart="1" className="pageItem hidden" alt="Rectangle" data-src="assets/images/Picture3.gif" />
                        <div id="item263606" className="pageItem" style={{ height: '60px', width: '60px', left: '586px', top: '994px' }} alt="Sound">
                            <audio data-id="263606" className="mejs-no-controls" data-autoplay="1" data-autodelay="0">
                                <source type="audio/mp3" src="assets/media/page 5 FULL.mp3" />
                            </audio>
                        </div>
                        <img src={blankImage} data-ani="fadein-2098 1s linear 1" data-id="2098" id="item2098" data-hidestart="1" className="pageItem hidden" alt="Definisi IBD" style={{ left: '95px', top: '268px' }} data-src="assets/images/item_2098.png" />
                        <div data-ani="fadein-73751 1s linear 1" data-id="73751" id="item73751" data-hidestart="1" className="pageItem group hidden" alt="jenis ibd" style={{ left: '746px', top: '250px', width: ' 960px', height: '59px' }}>
                            <div id="item2053" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Jenis IBD yang paling umum terjadi:1" style={{ left: '223px', top: '12px' }} id="item2120" className="pageItem " data-src="assets/images/item_2120.png" />
                        </div>
                        <img src={blankImage} data-ani="fadein-2142 1s linear 1" data-id="2142" id="item2142" data-hidestart="1" className="pageItem hidden" alt="PENYAKIT CROHN (PC)" style={{ left: '836px', top: '809px' }} data-src="assets/images/item_2142.png" />
                        <img src={blankImage} data-ani="fadein-2164 1s linear 1" data-id="2164" id="item2164" data-hidestart="1" className="pageItem hidden" alt="KOLITIS ULSERATIF (KU)" style={{ left: '1320px', top: '809px' }} data-src="assets/images/item_2164.png" />
                        <img src={blankImage} data-ani="fadein-2186 0.5s linear 1" data-id="2186" id="item2186" data-hidestart="1" className="pageItem hidden" alt="Inflamasi kronis pada seluruh lapisan dinding saluran cerna.3 " style={{ left: '775px', top: '846px' }} data-src="assets/images/item_2186.png" />
                        <img src={blankImage} data-ani="fadein-2208 0.5s linear 1" data-id="2208" id="item2208" data-hidestart="1" className="pageItem hidden" alt="Inflamasi kronis pada kolon dan rektum.3 " style={{ left: '1257px', top: '846px' }} data-src="assets/images/item_2208.png" />
                        <img src={blankImage} data-ani="fadein-2230 1s linear 1" data-id="2230" id="item2230" data-hidestart="1" className="pageItem hidden" alt="Bab 1" style={{ left: '98px', top: '231px' }} data-src="assets/images/item_2230.png" />
                        <img src={blankImage} data-ani="fadein-2252 1s linear 1" data-id="2252" id="item2252" data-hidestart="1" className="pageItem hidden" alt="Inflammatory Bowel Disease (IBD) adalah peradangan/inflamasi saluran cerna yang bersifat kronis, progresif dan kambuh..." style={{ left: '100px', top: '370px' }} data-src="assets/images/item_2252.png" />
                        {/*<img src={blankImage} data-ani="fadein-78991 1s linear 1" data-id="78991" id="item78991" data-hidestart="1" className="pageItem hidden" alt="IBD tidak dapat benar benar disembuhkan, namun penderitanya dapat mencapai remisi melalui pengobatan yang tepat.2" style={{ left: '100px', top: '560px' }} data-src="assets/images/item_78991.png" />*/}
                        <div data-ani="fadein-78991 1s linear 1" data-id="78991" id="item78991" data-hidestart="1" className="pageItem hidden" alt="IBD tidak dapat benar benar disembuhkan, namun penderitanya dapat mencapai remisi melalui pengobatan yang tepat.2" style={{ left: '100px', top: '560px' }} data-src="assets/images/item_78991.png">
                            IBD tidak dapat disembuhkan, namun<br />
                            penderitanya dapat mencapai remisi<br />
                            melalui pengobatan yang tepat.<sup>2</sup>
                        </div>
                        <div alt="Takeda Indonesia, 202" style={{ left: '1885px', top: '913px' }} id="item2285" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{ left: '1px' }} id="item2305" className="pageItem " data-src="assets/images/item_2305.png" />
                            <div alt="Group" style={{ top: '132px' }} id="item2308" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item2309" className="pageItem " data-src="assets/images/item_2309.png" />
                                <img src={blankImage} alt="Polygon" style={{ left: '3px', top: '4px' }} id="item2310" className="pageItem " data-src="assets/images/item_2310.png" />
                            </div>
                        </div>
                        <div id="item78928" className="pageItem" style={{ height: '60px', width: '60px', left: '510px', top: '987px' }} alt="Sound">
                            <audio data-id="78928" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 5-1.mp3" />
                            </audio>
                        </div>
                        <div id="item78933" className="pageItem" style={{ height: '60px', width: '60px', left: '586px', top: '987px' }} alt="Sound">
                            <audio data-id="78933" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 5-2.mp3" />
                            </audio>
                        </div>
                        <div id="item78946" className="pageItem" style={{ height: '60px', width: '60px', left: '726px', top: '987px' }} alt="Sound">
                            <audio data-id="78946" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 5-4.mp3" />
                            </audio>
                        </div>
                        <div id="item78956" className="pageItem" style={{ height: '60px', width: '60px', left: '808px', top: '987px' }} alt="Sound">
                            <audio data-id="78956" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 5-5.mp3" />
                            </audio>
                        </div>
                        <div id="item78963" className="pageItem" style={{ height: '60px', width: '60px', left: '888px', top: '987px' }} alt="Sound">
                            <audio data-id="78963" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 5-6.mp3" />
                            </audio>
                        </div>
                        <div id="item78968" className="pageItem" style={{ height: '60px', width: '60px', left: '966px', top: '994px' }} alt="Sound">
                            <audio data-id="78968" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 5-7.mp3" />
                            </audio>
                        </div>
                        <div id="item78973" className="pageItem" style={{ height: '60px', width: '60px', left: '1042px', top: '1002px' }} alt="Sound">
                            <audio data-id="78973" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 5-8.mp3" />
                            </audio>
                        </div>
                        <div id="item78982" className="pageItem" style={{ height: '60px', width: '60px', left: '1128px', top: '1002px' }} alt="Sound">
                            <audio data-id="78982" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 5-9.mp3" />
                            </audio>
                        </div>
                        <div alt="Group" style={{ left: '1753px', top: '980px' }} id="item79030" className="pageItem group ">
                            <div alt="Oval" id="item79031" className="pageItem ">
                                <svg version="1.1" width="70" height="70" >
                                    <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                </svg>
                            </div>
                            <img src={blankImage} alt="Polygon" style={{ left: '23px', top: '14px' }} id="item79032" className="pageItem " data-src="assets/images/item_79032.png" />
                        </div>
                        <div alt="Group" style={{ left: '1667px', top: '980px' }} id="item79033" className="pageItem group ">
                            <div alt="Oval" id="item79034" className="pageItem ">
                                <svg version="1.1" width="70" height="70" >
                                    <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                </svg>
                            </div>
                            <img src={blankImage} alt="Polygon" style={{ left: '21px', top: '14px' }} id="item79035" className="pageItem " data-src="assets/images/item_79035.png" />
                        </div>
                        <div alt="Group" style={{ left: '1581px', top: '980px' }} id="item79036" className="pageItem group ">
                            <div alt="Oval" id="item79037" className="pageItem ">
                                <svg version="1.1" width="70" height="70" >
                                    <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                </svg>
                            </div>
                            <img src={blankImage} alt="Polygon" style={{ left: '14px', top: '15px' }} id="item79038" className="pageItem " data-src="assets/images/item_79038.png" />
                            <img src={blankImage} alt="Polygon" style={{ left: '17px', top: '18px' }} id="item79039" className="pageItem " data-src="assets/images/item_79039.png" />
                        </div>
                        <button data-id="79058" name="icon back 7" onClick={handleOnClickBerandaNoSound} aria-label="icon back 7" id="item79058" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item79064" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '21px', top: '14px' }} id="item79065" className="pageItem " data-src="assets/images/item_79065.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item79067" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '21px', top: '14px' }} id="item79068" className="pageItem " data-src="assets/images/item_79068.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item79061" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '21px', top: '14px' }} id="item79062" className="pageItem " data-src="assets/images/item_79062.png" />
                            </div>
                        </button>
                        <button data-id="79070" name="icon next 7" onClick={handleOnClickNextPage} aria-label="icon next 7" id="item79070" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item79076" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '23px', top: '14px' }} id="item79077" className="pageItem " data-src="assets/images/item_79077.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item79079" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '23px', top: '14px' }} id="item79081" className="pageItem " data-src="assets/images/item_79081.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item79073" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '23px', top: '14px' }} id="item79074" className="pageItem " data-src="assets/images/item_79074.png" />
                            </div>
                        </button>
                        <button data-id="126350" name="button ulang 4" onClick={handleOnClickUlang} aria-label="button ulang 4" id="item126350" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item126362" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{ width: ' 67px', height: '67px' }} id="item126363" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{ left: '10px', top: '13px' }} id="item126364" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{ top: '20px' }} id="item126365" className="pageItem " data-src="assets/images/item_126365.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '4px' }} id="item126366" className="pageItem " data-src="assets/images/item_126366.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item126368" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{ width: ' 67px', height: '67px' }} id="item126369" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#fa635e" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{ left: '10px', top: '13px' }} id="item126371" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{ top: '20px' }} id="item126372" className="pageItem " data-src="assets/images/item_126372.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '4px' }} id="item126374" className="pageItem " data-src="assets/images/item_126374.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item126353" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{ width: ' 67px', height: '67px' }} id="item126354" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{ left: '10px', top: '13px' }} id="item126357" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{ top: '20px' }} id="item126358" className="pageItem " data-src="assets/images/item_126358.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '4px' }} id="item126360" className="pageItem " data-src="assets/images/item_126360.png" />
                                </div>
                            </div>
                        </button>
                        <div id="item145745" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <Navigation />
                        <button data-id="221142" name="icon beranda 69" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 69" id="item221142" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221149" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '14px', top: '15px' }} id="item221150" className="pageItem " data-src="assets/images/item_221150.png" />
                                <img src={blankImage} alt="Polygon" style={{ left: '17px', top: '18px' }} id="item221152" className="pageItem " data-src="assets/images/item_221152.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221154" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '14px', top: '15px' }} id="item221155" className="pageItem " data-src="assets/images/item_221155.png" />
                                <img src={blankImage} alt="Polygon" style={{ left: '17px', top: '18px' }} id="item221156" className="pageItem " data-src="assets/images/item_221156.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221145" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '17px', top: '18px' }} id="item221146" className="pageItem " data-src="assets/images/item_221146.png" />
                                <img src={blankImage} alt="Polygon" style={{ left: '14px', top: '15px' }} id="item221147" className="pageItem " data-src="assets/images/item_221147.png" />
                            </div>
                        </button>
                        <div id="item79290" alt="Rectangle" className="pageItem ">&nbsp;</div>
                    </div>
                </li>

            </ul>
        </div>
    )
}
export default Bab1Awal;