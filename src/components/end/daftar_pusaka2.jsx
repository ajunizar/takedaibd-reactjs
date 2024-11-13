import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
//import Navigation from "./navigation";

function DaftarPusaka2() {

    const navigate = useNavigate();

    const handleOnClickGoToDaftarPusaka1 = () => {
        window.location.href = '/daftar-pusaka-1'; // #54
    };
    const handleOnClickGoToDaftarPusaka3 = () => {
        window.location.href = '/daftar-pusaka-3'; // #54
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
                <li className="page" data-name="67">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" style={{width:'1920px',height:'1080px'}}>
                        <div id="item59629" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item53914" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item53915" className="pageItem " data-src="assets/images/item_53915.png" />
                            <div alt="Group" style={{top:'132px'}} id="item53938" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item53939" className="pageItem " data-src="assets/images/item_53939.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item53940" className="pageItem " data-src="assets/images/item_53940.png" />
                            </div>
                        </div>
                        <img src={blankImage} alt="Daftar Pustaka" style={{left:'100px',top:'129px'}} id="item53941" className="pageItem " data-src="assets/images/item_53941.png" />
                        <img src={blankImage} alt="Negreanu L, et al. Endoscopy in inflammatory bowel disease: from guidelines to real life. Ther Adv Gastroenterol 2019..." style={{left:'126px',top:'210px'}} id="item53964" className="pageItem " data-src="assets/images/item_53964.png" />
                        <img src={blankImage} alt="Dash, A.K. and Brittain, H.G. (1998a) ‘Mesalamine’, Analytical Profiles of Drug Substances and Excipients, pp. 209–24..." style={{left:'998px',top:'210px'}} id="item55111" className="pageItem " data-src="assets/images/item_55111.png" />
                        <img src={blankImage} alt="34" style={{left:'100px',top:'210px'}} id="item53988" className="pageItem " data-src="assets/images/item_53988.png" />
                        <img src={blankImage} alt="53" style={{left:'972px',top:'210px'}} id="item55134" className="pageItem " data-src="assets/images/item_55134.png" />
                        <img src={blankImage} alt="35" style={{left:'100px',top:'256px'}} id="item54034" className="pageItem " data-src="assets/images/item_54034.png" />
                        <img src={blankImage} alt="54" style={{left:'972px',top:'256px'}} id="item55157" className="pageItem " data-src="assets/images/item_55157.png" />
                        <img src={blankImage} alt="36" style={{left:'100px',top:'315px'}} id="item54080" className="pageItem " data-src="assets/images/item_54080.png" />
                        <img src={blankImage} alt="55" style={{left:'972px',top:'300px'}} id="item55180" className="pageItem " data-src="assets/images/item_55180.png" />
                        <img src={blankImage} alt="37" style={{left:'100px',top:'360px'}} id="item54126" className="pageItem " data-src="assets/images/item_54126.png" />
                        <img src={blankImage} alt="56" style={{left:'972px',top:'345px'}} id="item55203" className="pageItem " data-src="assets/images/item_55203.png" />
                        <img src={blankImage} alt="38" style={{left:'100px',top:'405px'}} id="item54172" className="pageItem " data-src="assets/images/item_54172.png" />
                        <img src={blankImage} alt="57" style={{left:'972px',top:'375px'}} id="item55227" className="pageItem " data-src="assets/images/item_55227.png" />
                        <img src={blankImage} alt="39" style={{left:'100px',top:'465px'}} id="item54218" className="pageItem " data-src="assets/images/item_54218.png" />
                        <img src={blankImage} alt="58" style={{left:'972px',top:'420px'}} id="item55250" className="pageItem " data-src="assets/images/item_55250.png" />
                        <img src={blankImage} alt="40" style={{left:'100px',top:'510px'}} id="item54265" className="pageItem " data-src="assets/images/item_54265.png" />
                        <img src={blankImage} alt="59" style={{left:'972px',top:'465px'}} id="item55273" className="pageItem " data-src="assets/images/item_55273.png" />
                        <img src={blankImage} alt="41" style={{left:'100px',top:'570px'}} id="item54311" className="pageItem " data-src="assets/images/item_54311.png" />
                        <img src={blankImage} alt="60" style={{left:'972px',top:'510px'}} id="item55296" className="pageItem " data-src="assets/images/item_55296.png" />
                        <img src={blankImage} alt="42" style={{left:'100px',top:'615px'}} id="item54358" className="pageItem " data-src="assets/images/item_54358.png" />
                        <img src={blankImage} alt="61" style={{left:'972px',top:'555px'}} id="item55319" className="pageItem " data-src="assets/images/item_55319.png" />
                        <img src={blankImage} alt="43" style={{left:'100px',top:'645px'}} id="item54406" className="pageItem " data-src="assets/images/item_54406.png" />
                        <img src={blankImage} alt="62" style={{left:'972px',top:'600px'}} id="item55342" className="pageItem " data-src="assets/images/item_55342.png" />
                        <img src={blankImage} alt="44" style={{left:'100px',top:'675px'}} id="item54452" className="pageItem " data-src="assets/images/item_54452.png" />
                        <img src={blankImage} alt="63" style={{left:'972px',top:'645px'}} id="item55365" className="pageItem " data-src="assets/images/item_55365.png" />
                        <img src={blankImage} alt="45" style={{left:'100px',top:'705px'}} id="item54498" className="pageItem " data-src="assets/images/item_54498.png" />
                        <img src={blankImage} alt="64" style={{left:'972px',top:'690px'}} id="item55388" className="pageItem " data-src="assets/images/item_55388.png" />
                        <img src={blankImage} alt="46" style={{left:'100px',top:'735px'}} id="item54567" className="pageItem " data-src="assets/images/item_54567.png" />
                        <img src={blankImage} alt="65" style={{left:'972px',top:'735px'}} id="item55411" className="pageItem " data-src="assets/images/item_55411.png" />
                        <img src={blankImage} alt="47" style={{left:'100px',top:'765px'}} id="item54613" className="pageItem " data-src="assets/images/item_54613.png" />
                        <img src={blankImage} alt="66" style={{left:'972px',top:'780px'}} id="item55434" className="pageItem " data-src="assets/images/item_55434.png" />
                        <img src={blankImage} alt="48" style={{left:'100px',top:'795px'}} id="item55017" className="pageItem " data-src="assets/images/item_55017.png" />
                        <img src={blankImage} alt="67" style={{left:'972px',top:'825px'}} id="item55457" className="pageItem " data-src="assets/images/item_55457.png" />
                        <img src={blankImage} alt="49" style={{left:'100px',top:'825px'}} id="item55040" className="pageItem " data-src="assets/images/item_55040.png" />
                        <img src={blankImage} alt="50" style={{left:'100px',top:'855px'}} id="item55065" className="pageItem " data-src="assets/images/item_55065.png" />
                        <img src={blankImage} alt="68" style={{left:'972px',top:'870px'}} id="item55504" className="pageItem " data-src="assets/images/item_55504.png" />
                        <img src={blankImage} alt="51" style={{left:'100px',top:'900px'}} id="item54659" className="pageItem " data-src="assets/images/item_54659.png" />
                        <img src={blankImage} alt="69" style={{left:'972px',top:'900px'}} id="item55527" className="pageItem " data-src="assets/images/item_55527.png" />
                        <img src={blankImage} alt="52" style={{left:'100px',top:'945px'}} id="item55088" className="pageItem " data-src="assets/images/item_55088.png" />
                        <button data-id="180918" name="icon back 57" onClick={handleOnClickGoToDaftarPusaka1} aria-label="icon back 57" id="item180918" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item180927" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item180928" className="pageItem " data-src="assets/images/item_180928.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item180930" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item180931" className="pageItem " data-src="assets/images/item_180931.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item180922" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item180924" className="pageItem " data-src="assets/images/item_180924.png" />
                            </div>
                        </button>
                        <button data-id="180933" name="icon next 57" onClick={handleOnClickGoToDaftarPusaka3} aria-label="icon next 57" id="item180933" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item180939" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item180940" className="pageItem " data-src="assets/images/item_180940.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item180942" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item180944" className="pageItem " data-src="assets/images/item_180944.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item180936" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item180937" className="pageItem " data-src="assets/images/item_180937.png" />
                            </div>
                        </button>
                        <button data-id="222151" name="icon beranda 119" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 119" id="item222151" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item222158" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item222159" className="pageItem " data-src="assets/images/item_222159.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item222160" className="pageItem " data-src="assets/images/item_222160.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item222163" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item222164" className="pageItem " data-src="assets/images/item_222164.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item222165" className="pageItem " data-src="assets/images/item_222165.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item222154" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item222155" className="pageItem " data-src="assets/images/item_222155.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item222156" className="pageItem " data-src="assets/images/item_222156.png" />
                            </div>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default DaftarPusaka2;