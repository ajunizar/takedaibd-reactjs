import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

//import Navigation from "./navigation";

function DaftarPusaka1() {

    const navigate = useNavigate();

    const handleOnClickGoToDaftarPusaka2 = () => {
        window.location.href = '/daftar-pusaka-2'; // #54
    };
    const handleOnClickGoToQuizEnd = () => {
        window.location.href = '/quiz-terima-kasih'; // #54
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

    return (
        <div >
            <ul className="pages" id="slider">
                <li className="page" data-name="66">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" style={{width:'1920px',height:'1080px'}}>
                        <div id="item182115" className="pageItem" style={{height:'60px',width:'60px',left:'20px',top:'35px'}} alt="Sound">
                            <audio data-id="182115" className="mejs-no-controls" data-autoplay="1" data-autodelay="0" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 51.mp3" />
                            </audio>
                        </div>
                        <div id="item59609" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item51277" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item51278" className="pageItem " data-src="assets/images/item_51278.png" />
                            <div alt="Group" style={{top:'132px'}} id="item51302" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item51303" className="pageItem " data-src="assets/images/item_51303.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item51304" className="pageItem " data-src="assets/images/item_51304.png" />
                            </div>
                        </div>
                        <img src={blankImage} alt="Daftar Pustaka" style={{left:'100px',top:'129px'}} id="item51305" className="pageItem " data-src="assets/images/item_51305.png" />
                        <img src={blankImage} alt="Liverani E, Scaioli E, Digby RJ, Bellanova M, Belluzzi A. How to predict clinical relapse in inflammatory bowel disea..." style={{left:'126px',top:'237px'}} id="item51642" className="pageItem " data-src="assets/images/item_51642.png" />
                        <img src={blankImage} alt="1" style={{left:'100px',top:'237px'}} id="item51837" className="pageItem " data-src="assets/images/item_51837.png" />
                        <img src={blankImage} alt="16" style={{left:'989px',top:'237px'}} id="item52283" className="pageItem " data-src="assets/images/item_52283.png" />
                        <img src={blankImage} alt="2" style={{left:'100px',top:'285px'}} id="item51908" className="pageItem " data-src="assets/images/item_51908.png" />
                        <img src={blankImage} alt="17" style={{left:'989px',top:'285px'}} id="item52306" className="pageItem " data-src="assets/images/item_52306.png" />
                        <img src={blankImage} alt="3" style={{left:'100px',top:'333px'}} id="item51931" className="pageItem " data-src="assets/images/item_51931.png" />
                        <img src={blankImage} alt="18" style={{left:'989px',top:'333px'}} id="item52329" className="pageItem " data-src="assets/images/item_52329.png" />
                        <img src={blankImage} alt="4" style={{left:'100px',top:'381px'}} id="item51954" className="pageItem " data-src="assets/images/item_51954.png" />
                        <img src={blankImage} alt="19" style={{left:'989px',top:'397px'}} id="item52352" className="pageItem " data-src="assets/images/item_52352.png" />
                        <img src={blankImage} alt="5" style={{left:'100px',top:'429px'}} id="item51977" className="pageItem " data-src="assets/images/item_51977.png" />
                        <img src={blankImage} alt="20" style={{left:'989px',top:'429px'}} id="item52375" className="pageItem " data-src="assets/images/item_52375.png" />
                        <img src={blankImage} alt="6" style={{left:'100px',top:'477px'}} id="item52041" className="pageItem " data-src="assets/images/item_52041.png" />
                        <img src={blankImage} alt="21" style={{left:'989px',top:'461px'}} id="item52398" className="pageItem " data-src="assets/images/item_52398.png" />
                        <img src={blankImage} alt="7" style={{left:'100px',top:'525px'}} id="item52064" className="pageItem " data-src="assets/images/item_52064.png" />
                        <img src={blankImage} alt="22" style={{left:'989px',top:'493px'}} id="item52421" className="pageItem " data-src="assets/images/item_52421.png" />
                        <img src={blankImage} alt="8" style={{left:'100px',top:'589px'}} id="item52087" className="pageItem " data-src="assets/images/item_52087.png" />
                        <img src={blankImage} alt="23" style={{left:'989px',top:'541px'}} id="item52444" className="pageItem " data-src="assets/images/item_52444.png" />
                        <img src={blankImage} alt="9" style={{left:'100px',top:'637px'}} id="item52114" className="pageItem " data-src="assets/images/item_52114.png" />
                        <img src={blankImage} alt="24" style={{left:'989px',top:'605px'}} id="item52467" className="pageItem " data-src="assets/images/item_52467.png" />
                        <img src={blankImage} alt="10" style={{left:'100px',top:'669px'}} id="item52137" className="pageItem " data-src="assets/images/item_52137.png" />
                        <img src={blankImage} alt="25" style={{left:'989px',top:'637px'}} id="item52490" className="pageItem " data-src="assets/images/item_52490.png" />
                        <img src={blankImage} alt="11" style={{left:'100px',top:'733px'}} id="item52160" className="pageItem " data-src="assets/images/item_52160.png" />
                        <img src={blankImage} alt="26" style={{left:'989px',top:'685px'}} id="item52513" className="pageItem " data-src="assets/images/item_52513.png" />
                        <img src={blankImage} alt="12" style={{left:'100px',top:'781px'}} id="item52187" className="pageItem " data-src="assets/images/item_52187.png" />
                        <img src={blankImage} alt="28" style={{left:'989px',top:'781px'}} id="item52536" className="pageItem " data-src="assets/images/item_52536.png" />
                        <img src={blankImage} alt="27" style={{left:'989px',top:'733px'}} id="item52646" className="pageItem " data-src="assets/images/item_52646.png" />
                        <img src={blankImage} alt="13" style={{left:'100px',top:'829px'}} id="item52210" className="pageItem " data-src="assets/images/item_52210.png" />
                        <img src={blankImage} alt="29" style={{left:'989px',top:'813px'}} id="item52559" className="pageItem " data-src="assets/images/item_52559.png" />
                        <img src={blankImage} alt="14" style={{left:'100px',top:'893px'}} id="item52233" className="pageItem " data-src="assets/images/item_52233.png" />
                        <img src={blankImage} alt="30" style={{left:'989px',top:'845px'}} id="item52582" className="pageItem " data-src="assets/images/item_52582.png" />
                        <img src={blankImage} alt="15" style={{left:'100px',top:'941px'}} id="item52260" className="pageItem " data-src="assets/images/item_52260.png" />
                        <img src={blankImage} alt="31" style={{left:'989px',top:'893px'}} id="item52606" className="pageItem " data-src="assets/images/item_52606.png" />
                        <img src={blankImage} alt="32" style={{left:'989px',top:'925px'}} id="item52669" className="pageItem " data-src="assets/images/item_52669.png" />
                        <img src={blankImage} alt="33" style={{left:'989px',top:'957px'}} id="item52693" className="pageItem " data-src="assets/images/item_52693.png" />
                        <img src={blankImage} alt="Levine JS, Burakoff R. Extraintestinal manifestations of inflammatory bowel disease. Gastroenterol Hepatol (N Y). 201..." style={{left:'1015px',top:'237px'}} id="item51800" className="pageItem " data-src="assets/images/item_51800.png" />
                        <button data-id="222796" name="icon beranda 123" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 123" id="item222796" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item222803" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" stroke-width="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item222804" className="pageItem " data-src="assets/images/item_222804.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item222805" className="pageItem " data-src="assets/images/item_222805.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item222807" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" stroke-width="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item222808" className="pageItem " data-src="assets/images/item_222808.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item222809" className="pageItem " data-src="assets/images/item_222809.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item222799" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" stroke-width="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item222800" className="pageItem " data-src="assets/images/item_222800.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item222801" className="pageItem " data-src="assets/images/item_222801.png" />
                            </div>
                        </button>
                        <button data-id="222810" name="icon back 68" onClick={handleOnClickGoToQuizEnd} aria-label="icon back 68" id="item222810" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item222818" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" stroke-width="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item222819" className="pageItem " data-src="assets/images/item_222819.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item222822" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" stroke-width="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item222823" className="pageItem " data-src="assets/images/item_222823.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item222813" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" stroke-width="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item222815" className="pageItem " data-src="assets/images/item_222815.png" />
                            </div>
                        </button>
                        <button data-id="222825" name="icon next 59" onClick={handleOnClickGoToDaftarPusaka2} aria-label="icon next 59" id="item222825" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item222831" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" stroke-width="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item222832" className="pageItem " data-src="assets/images/item_222832.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item222834" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" stroke-width="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item222836" className="pageItem " data-src="assets/images/item_222836.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item222828" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" stroke-width="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item222829" className="pageItem " data-src="assets/images/item_222829.png" />
                            </div>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default DaftarPusaka1;