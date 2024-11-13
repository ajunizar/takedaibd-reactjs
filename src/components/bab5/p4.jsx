import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Bab5P4() {

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
        window.location.href = '/bab5-p3';
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }

    const handleOnClickUlang = (event) => {
        event.preventDefault();
        go(event, [{ n: 1, id: 92596, act: 'play' }, { n: 1, link: 1, id: 10506, act: 'play' }, { n: 1, id: 10484, act: 'play' }, { n: 1, id: 10528, act: 'play' }, { n: 1, id: 92571, act: 'play' }]);
    }

    const handleOnClickNextPage = (event) => {
        window.location.href = '/bab5-p5';
    }


    return (
        <div >
            <ul className="pages" id="slider">
                <li className="page" data-name="23">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" style={{width:'1920px',height:'1080px'}}>
                        <img src={blankImage} alt="Polygon" style={{left:'-3988px',top:'381px'}} id="item128618" className="pageItem " data-src="assets/images/item_128618.png" />
                        <div id="item162988" className="pageItem" alt="Movie">
                            <video width="1920" height="1400" data-id="162988" data-autoplay="1" data-autodelay="0" data-stoplast="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/slide 22_2.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div id="item158031" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <Navigation />
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item14133" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item14134" className="pageItem " data-src="assets/images/item_14134.png" />
                            <div alt="Group" style={{top:'132px'}} id="item14157" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item14158" className="pageItem " data-src="assets/images/item_14158.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item14159" className="pageItem " data-src="assets/images/item_14159.png" />
                            </div>
                        </div>
                        <button data-id="128933" name="icon back 27" onClick={handleOnClickPreviousPage} aria-label="icon back 27" id="item128933" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item128941" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item128943" className="pageItem " data-src="assets/images/item_128943.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item128936" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item128938" className="pageItem " data-src="assets/images/item_128938.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item128946" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item128947" className="pageItem " data-src="assets/images/item_128947.png" />
                            </div>
                        </button>
                        <button data-id="128948" name="icon next 27" onClick={handleOnClickNextPage} aria-label="icon next 27" id="item128948" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item128955" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item128957" className="pageItem " data-src="assets/images/item_128957.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item128951" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item128952" className="pageItem " data-src="assets/images/item_128952.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item128959" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item128960" className="pageItem " data-src="assets/images/item_128960.png" />
                            </div>
                        </button>
                        <button data-id="128961" name="icon beranda 22" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 22" id="item128961" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item128969" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item128970" className="pageItem " data-src="assets/images/item_128970.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item128971" className="pageItem " data-src="assets/images/item_128971.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item128973" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item128974" className="pageItem " data-src="assets/images/item_128974.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item128975" className="pageItem " data-src="assets/images/item_128975.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item128964" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item128966" className="pageItem " data-src="assets/images/item_128966.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item128967" className="pageItem " data-src="assets/images/item_128967.png" />
                            </div>
                        </button>
                        <button data-id="128976" name="button ulang 23" data-click-play="162988" aria-label="button ulang 23" id="item128976" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item128986" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item128987" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item128989" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item128990" className="pageItem " data-src="assets/images/item_128990.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item128992" className="pageItem " data-src="assets/images/item_128992.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item128979" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item128980" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#3055ad" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item128981" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item128982" className="pageItem " data-src="assets/images/item_128982.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item128984" className="pageItem " data-src="assets/images/item_128984.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item128994" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item128995" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item128997" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item128998" className="pageItem " data-src="assets/images/item_128998.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item128999" className="pageItem " data-src="assets/images/item_128999.png" />
                                </div>
                            </div>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Bab5P4;