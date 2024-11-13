import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Bab2P1() {

    const navigate = useNavigate();

    const handleOnClickGoToBab1 = () => {
        window.location.href = '/bab1-start';
    };
    //var referrer = document.referrer;
    //console.log("referrer url",referrer);

    const handleOnClickPreviousPage = () => {
        window.location.href = '/bab2-start';
    };

    const handleOnClickUlang = (event) => {
        event.preventDefault();
        jQuery("#item151113 video")[0].currentTime = 0;
        jQuery("#item151113 video")[0].play();
        go(event,[{n:1,id:3957,act:'play'}]);
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }


    const handleOnClickNextPage = (event) => {
        window.location.href = '/bab2-p2';
    }


    return (
        <div >
            <ul className="pages" id="slider">
                <li className="page" data-name="9">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:3957,act:'play'}], 'pageload');" style={{width:'1920px',height:'1080px'}}>
                        <div id="item151113" className="pageItem" alt="Movie" style={{left:'-178px',top:'-50px'}}>
                            <video width="2276" height="1280" data-id="151113" data-autoplay="1" data-autodelay="0" data-stoplast="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/wording slide 8.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div id="item114677" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <Navigation />
                        <img src={blankImage} data-ani="appear-3957 0.6s linear 1" data-id="3957" id="item3957" data-hidestart="1" className="pageItem hidden" alt="Epidemiologi IBD6" style={{left:'97px',top:'143px'}} data-src="assets/images/item_3957.png" />
                        <img src={blankImage} alt="Bab 2" style={{left:'100px',top:'100px'}} id="item3979" className="pageItem " data-src="assets/images/item_3979.png" />
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item4004" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item4024" className="pageItem " data-src="assets/images/item_4024.png" />
                            <div alt="Group" style={{top:'132px'}} id="item4027" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item4028" className="pageItem " data-src="assets/images/item_4028.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item4029" className="pageItem " data-src="assets/images/item_4029.png" />
                            </div>
                        </div>
                        <div alt="Group" style={{left:'1752px',top:'980px'}} id="item79237" className="pageItem group ">
                            <div alt="Oval" id="item79238" className="pageItem ">
                                <svg version="1.1" width="70" height="70" >
                                    <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                </svg>
                            </div>
                            <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item79239" className="pageItem " data-src="assets/images/item_79239.png" />
                        </div>
                        <div alt="Group" style={{left:'1667px',top:'980px'}} id="item79240" className="pageItem group ">
                            <div alt="Oval" id="item79241" className="pageItem ">
                                <svg version="1.1" width="70" height="70" >
                                    <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                </svg>
                            </div>
                            <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item79242" className="pageItem " data-src="assets/images/item_79242.png" />
                        </div>
                        <button data-id="79263" name="icon back 6" onClick={handleOnClickPreviousPage} aria-label="icon back 6" id="item79263" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item79269" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item79270" className="pageItem " data-src="assets/images/item_79270.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item79272" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item79273" className="pageItem " data-src="assets/images/item_79273.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item79266" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item79267" className="pageItem " data-src="assets/images/item_79267.png" />
                            </div>
                        </button>
                        <button data-id="79275" name="icon next 6" onClick={handleOnClickNextPage} aria-label="icon next 6" id="item79275" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item79283" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item79284" className="pageItem " data-src="assets/images/item_79284.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item79286" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item79288" className="pageItem " data-src="assets/images/item_79288.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item79278" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item79279" className="pageItem " data-src="assets/images/item_79279.png" />
                            </div>
                        </button>
                        <button data-id="126485" name="button ulang 7" onClick={handleOnClickUlang} aria-label="button ulang 7" id="item126485" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item126496" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126497" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126498" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126499" className="pageItem " data-src="assets/images/item_126499.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126500" className="pageItem " data-src="assets/images/item_126500.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item126502" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126503" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#fa635e" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126505" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126506" className="pageItem " data-src="assets/images/item_126506.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126508" className="pageItem " data-src="assets/images/item_126508.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item126488" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126489" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126491" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126492" className="pageItem " data-src="assets/images/item_126492.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126494" className="pageItem " data-src="assets/images/item_126494.png" />
                                </div>
                            </div>
                        </button>
                        <button data-id="221191" name="icon beranda 73" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 73" id="item221191" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221200" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221201" className="pageItem " data-src="assets/images/item_221201.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221202" className="pageItem " data-src="assets/images/item_221202.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221204" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221205" className="pageItem " data-src="assets/images/item_221205.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221206" className="pageItem " data-src="assets/images/item_221206.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221195" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221196" className="pageItem " data-src="assets/images/item_221196.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221197" className="pageItem " data-src="assets/images/item_221197.png" />
                            </div>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Bab2P1;