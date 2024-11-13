import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
//import Navigation from "./navigation";

function DaftarPusaka3() {

    const navigate = useNavigate();

    const handleOnClickGoToDaftarPusaka2 = () => {
        window.location.href = '/daftar-pusaka-2'; // #54
    };
    const handleOnClickGoToDaftarPusaka4 = () => {
        window.location.href = '/daftar-pusaka-4'; // #54
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
                <li className="page" data-name="68">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" style={{width:'1920px',height:'1080px'}}>
                        <div id="item59630" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item55626" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item55627" className="pageItem " data-src="assets/images/item_55627.png" />
                            <div alt="Group" style={{top:'132px'}} id="item55650" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item55651" className="pageItem " data-src="assets/images/item_55651.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item55652" className="pageItem " data-src="assets/images/item_55652.png" />
                            </div>
                        </div>
                        <img src={blankImage} alt="Daftar Pustaka" style={{left:'100px',top:'129px'}} id="item55653" className="pageItem " data-src="assets/images/item_55653.png" />
                        <img src={blankImage} alt="Tumor Necrosis Factor Inhibitors. https://rheumatology.org/patients/tumor necrosis factor tnf inhibitors. Accessed Ap..." style={{left:'126px',top:'237px'}} id="item55676" className="pageItem " data-src="assets/images/item_55676.png" />
                        <img src={blankImage} alt="70" style={{left:'100px',top:'237px'}} id="item55700" className="pageItem " data-src="assets/images/item_55700.png" />
                        <img src={blankImage} alt="83" style={{left:'989px',top:'237px'}} id="item55723" className="pageItem " data-src="assets/images/item_55723.png" />
                        <img src={blankImage} alt="71" style={{left:'100px',top:'285px'}} id="item55746" className="pageItem " data-src="assets/images/item_55746.png" />
                        <img src={blankImage} alt="84" style={{left:'989px',top:'285px'}} id="item55769" className="pageItem " data-src="assets/images/item_55769.png" />
                        <img src={blankImage} alt="72" style={{left:'100px',top:'333px'}} id="item55793" className="pageItem " data-src="assets/images/item_55793.png" />
                        <img src={blankImage} alt="85" style={{left:'989px',top:'349px'}} id="item55817" className="pageItem " data-src="assets/images/item_55817.png" />
                        <img src={blankImage} alt="73" style={{left:'100px',top:'397px'}} id="item55840" className="pageItem " data-src="assets/images/item_55840.png" />
                        <img src={blankImage} alt="86" style={{left:'989px',top:'397px'}} id="item55863" className="pageItem " data-src="assets/images/item_55863.png" />
                        <img src={blankImage} alt="87" style={{left:'989px',top:'445px'}} id="item55909" className="pageItem " data-src="assets/images/item_55909.png" />
                        <img src={blankImage} alt="74" style={{left:'100px',top:'461px'}} id="item55932" className="pageItem " data-src="assets/images/item_55932.png" />
                        <img src={blankImage} alt="75" style={{left:'100px',top:'525px'}} id="item55978" className="pageItem " data-src="assets/images/item_55978.png" />
                        <img src={blankImage} alt="88" style={{left:'989px',top:'493px'}} id="item56001" className="pageItem " data-src="assets/images/item_56001.png" />
                        <img src={blankImage} alt="76" style={{left:'100px',top:'589px'}} id="item56024" className="pageItem " data-src="assets/images/item_56024.png" />
                        <img src={blankImage} alt="89" style={{left:'989px',top:'557px'}} id="item56047" className="pageItem " data-src="assets/images/item_56047.png" />
                        <img src={blankImage} alt="77" style={{left:'100px',top:'637px'}} id="item56070" className="pageItem " data-src="assets/images/item_56070.png" />
                        <img src={blankImage} alt="90" style={{left:'989px',top:'589px'}} id="item56094" className="pageItem " data-src="assets/images/item_56094.png" />
                        <img src={blankImage} alt="78" style={{left:'100px',top:'701px'}} id="item56117" className="pageItem " data-src="assets/images/item_56117.png" />
                        <img src={blankImage} alt="91" style={{left:'989px',top:'621px'}} id="item56140" className="pageItem " data-src="assets/images/item_56140.png" />
                        <img src={blankImage} alt="92" style={{left:'989px',top:'653px'}} id="item56721" className="pageItem " data-src="assets/images/item_56721.png" />
                        <img src={blankImage} alt="79" style={{left:'100px',top:'765px'}} id="item56163" className="pageItem " data-src="assets/images/item_56163.png" />
                        <img src={blankImage} alt="93" style={{left:'989px',top:'685px'}} id="item56186" className="pageItem " data-src="assets/images/item_56186.png" />
                        <img src={blankImage} alt="95" style={{left:'989px',top:'749px'}} id="item56232" className="pageItem " data-src="assets/images/item_56232.png" />
                        <img src={blankImage} alt="94" style={{left:'989px',top:'717px'}} id="item56255" className="pageItem " data-src="assets/images/item_56255.png" />
                        <img src={blankImage} alt="80" style={{left:'100px',top:'829px'}} id="item56278" className="pageItem " data-src="assets/images/item_56278.png" />
                        <img src={blankImage} alt="96" style={{left:'989px',top:'781px'}} id="item56301" className="pageItem " data-src="assets/images/item_56301.png" />
                        <img src={blankImage} alt="81" style={{left:'100px',top:'893px'}} id="item56324" className="pageItem " data-src="assets/images/item_56324.png" />
                        <img src={blankImage} alt="97" style={{left:'989px',top:'845px'}} id="item56347" className="pageItem " data-src="assets/images/item_56347.png" />
                        <img src={blankImage} alt="82" style={{left:'100px',top:'941px'}} id="item56370" className="pageItem " data-src="assets/images/item_56370.png" />
                        <img src={blankImage} alt="98" style={{left:'989px',top:'909px'}} id="item56393" className="pageItem " data-src="assets/images/item_56393.png" />
                        <img src={blankImage} alt="99" style={{left:'989px',top:'941px'}} id="item56416" className="pageItem " data-src="assets/images/item_56416.png" />
                        <img src={blankImage} alt="Javier P Gisbert, PhD and others, Efficacy, Effectiveness, and Safety of Ustekinumab for the Treatment of Ulcerative ..." style={{left:'1015px',top:'237px'}} id="item56462" className="pageItem " data-src="assets/images/item_56462.png" />
                        <button data-id="180918" name="icon back 57" onClick={handleOnClickGoToDaftarPusaka2} aria-label="icon back 57" id="item180918" className="pageItem has-down has-on ">
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
                        <button data-id="180933" name="icon next 57" onClick={handleOnClickGoToDaftarPusaka4} aria-label="icon next 57" id="item180933" className="pageItem has-down has-on ">
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
                        <button data-id="222167" name="icon beranda 120" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 120" id="item222167" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item222174" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item222175" className="pageItem " data-src="assets/images/item_222175.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item222176" className="pageItem " data-src="assets/images/item_222176.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item222178" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item222179" className="pageItem " data-src="assets/images/item_222179.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item222180" className="pageItem " data-src="assets/images/item_222180.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item222170" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item222171" className="pageItem " data-src="assets/images/item_222171.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item222172" className="pageItem " data-src="assets/images/item_222172.png" />
                            </div>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default DaftarPusaka3;