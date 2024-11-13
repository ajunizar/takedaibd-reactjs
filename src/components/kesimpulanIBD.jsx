import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "./navigation";

function KesimpulanIBD() {

    const navigate = useNavigate();

    const handleOnClickPreviousPage = () => {
        window.location.href = '/bab6-p19';
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }

    const handleOnClickNextPage = (event) => {
        window.location.href = '/quiz1';
    }


    return (
        <div >
            <ul className="pages" id="slider">
                <li className="page" data-name="51">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" style={{width:'1920px',height:'1080px'}}>
                        <img src={blankImage} alt="Polygon" style={{left:'-3201px',top:'370px'}} id="item70770" className="pageItem " data-src="assets/images/item_70770.png" />
                        <div id="item182091" className="pageItem" alt="Movie">
                            <video width="1920" height="1400" data-id="182091" data-autoplay="1" data-autodelay="0" data-stoplast="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/slide 50.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item50242" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item50243" className="pageItem " data-src="assets/images/item_50243.png" />
                            <div alt="Group" style={{top:'132px'}} id="item50266" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item50267" className="pageItem " data-src="assets/images/item_50267.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item50268" className="pageItem " data-src="assets/images/item_50268.png" />
                            </div>
                        </div>
                        <button data-id="178663" name="icon back 55" onClick={handleOnClickPreviousPage} aria-label="icon back 55" id="item178663" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item178671" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item178672" className="pageItem " data-src="assets/images/item_178672.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item178675" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item178676" className="pageItem " data-src="assets/images/item_178676.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item178666" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item178668" className="pageItem " data-src="assets/images/item_178668.png" />
                            </div>
                        </button>
                        <button data-id="178678" name="icon next 55" onClick={handleOnClickNextPage} aria-label="icon next 55" id="item178678" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item178685" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item178686" className="pageItem " data-src="assets/images/item_178686.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item178688" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item178690" className="pageItem " data-src="assets/images/item_178690.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item178681" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item178683" className="pageItem " data-src="assets/images/item_178683.png" />
                            </div>
                        </button>
                        <button data-id="178692" name="button ulang 52" data-click-play="182091" aria-label="button ulang 52" id="item178692" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item178702" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item178703" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item178704" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item178705" className="pageItem " data-src="assets/images/item_178705.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item178706" className="pageItem " data-src="assets/images/item_178706.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item178708" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item178709" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#fa635e" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item178711" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item178712" className="pageItem " data-src="assets/images/item_178712.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item178714" className="pageItem " data-src="assets/images/item_178714.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item178694" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item178695" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item178697" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item178698" className="pageItem " data-src="assets/images/item_178698.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item178700" className="pageItem " data-src="assets/images/item_178700.png" />
                                </div>
                            </div>
                        </button>
                        <button data-id="221859" name="icon beranda 51" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 51" id="item221859" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221867" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221868" className="pageItem " data-src="assets/images/item_221868.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221869" className="pageItem " data-src="assets/images/item_221869.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221871" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221872" className="pageItem " data-src="assets/images/item_221872.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221873" className="pageItem " data-src="assets/images/item_221873.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221862" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221863" className="pageItem " data-src="assets/images/item_221863.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221865" className="pageItem " data-src="assets/images/item_221865.png" />
                            </div>
                        </button>
                        <Navigation />
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default KesimpulanIBD;