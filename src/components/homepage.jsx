import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "./navigation";

function Homepage() {

    const navigate = useNavigate();

    //const audioRef = useRef(null);
    //window.audioPlayed = false;

    const handleOnClickNext = () => {
        window.location.href = '/homepage2';
    };

    //useEffect(() => {
    /*const reloadCount = sessionStorage.getItem('reloadCount');
    if (reloadCount == null) {
        sessionStorage.setItem('reloadCount', 1);
        
    } else {
        sessionStorage.removeItem('reloadCount');
        window.location.href = '/';
    }*/
    //}, []);


    return (
        <div>
            <ul className="pages" id="slider">
                <li className="page" data-name="2">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:406,act:'play'},{n:1,id:497,act:'play'},{del:3,n:1,id:519,act:'play'},{n:1,id:475,act:'play'},{n:1,id:72375,act:'play'}], 'pageload');" style={{width:'1920px',height:'1080px'}}>
                        <div id="item405" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item72462" className="pageItem" style={{height:'60px',width:'60px',left:'1788px ',top:'891px'}} alt="Sound">
                            <audio data-id="72462" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 1-1.mp3" />
                            </audio>
                        </div>
                        <div id="item72466" className="pageItem" style={{height:'60px',width:'60px',left:'1788px ',top:'795px'}} alt="Sound">
                            <audio data-id="72466" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 1-2.mp3" />
                            </audio>
                        </div>
                        <img src={blankImage} data-ani="flyinfromright-406 1s cubic-bezier(.2,.6,.35,1) 1" data-id="406" id="item406" data-hidestart="1" className="pageItem hidden" alt="Rectangle" style={{left:'125px',top:'260px'}} data-src="assets/images/item_406.png" />
                        <div alt="Group" style={{left:'1692px ',top:'58px '}} id="item417" className="pageItem group ">
                            <img src={blankImage} alt="Polygon" id="item418" className="pageItem " data-src="assets/images/item_418.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'14px ',top:'2px '}} id="item419" className="pageItem " data-src="assets/images/item_419.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'25px ',top:'17px '}} id="item420" className="pageItem " data-src="assets/images/item_420.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'35px ',top:'17px '}} id="item421" className="pageItem " data-src="assets/images/item_421.png" />
                        </div>
                        <img src={blankImage} data-ani="fadein-475 1s linear 1" data-id="475" id="item475" data-hidestart="1" className="pageItem hidden" alt="By Rare Disease Medical Team" style={{left:'98px',top:'382px'}} data-src="assets/images/item_475.png" />
                        <img src={blankImage} data-ani="fadein-497 1s linear 1" data-id="497" id="item497" data-hidestart="1" className="pageItem hidden" alt="IBD 01" style={{left:'100px',top:'100px'}} data-src="assets/images/item_497.png" />
                        <img src={blankImage} data-ani="flyinfromleft-519 1s cubic-bezier(.2,.6,.35,1) 1" data-id="519" id="item519" data-hidestart="1" className="pageItem hidden" alt="Kenali Inflammatory Bowel Disease (IBD) Lebih Dekat" style={{left:'93px',top:'168px'}} data-src="assets/images/item_519.png" />
                        <img src={blankImage} alt="VV MED 11224 // 25 Oct 23" style={{left:'28px ',top:'1042px '}} id="item541" className="pageItem " data-src="assets/images/item_541.png" />
                        <div alt="Takeda Indonesia, 202" style={{left:'1753px',top:'1039px '}} id="item544" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'20px',top:'1px'}} id="item564" className="pageItem " data-src="assets/images/item_564.png" />
                            <div alt="Group" id="item567" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item568" className="pageItem " data-src="assets/images/item_568.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'4px',top:'3px'}} id="item569" className="pageItem " data-src="assets/images/item_569.png" />
                            </div>
                        </div>
                        <div id="item263476" className="pageItem" style={{height:'60px',width:'60px',left:'1742px',top:'904px '}} alt="Sound">
                            <audio data-id="263476" className="mejs-no-controls" data-autoplay="1" data-autodelay="0" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 1 FULL_A01.mp3" />
                            </audio>
                        </div>
                        <button data-ani="fadein-72375 1s linear 1" data-id="72375" id="item72375" data-hidestart="1" className="pageItem has-down has-on hidden" name="masuk" onClick={handleOnClickNext} aria-label="masuk">
                            <div className="pageItem state btn-off">
                                <div id="item72309" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Masuk" style={{left:'29px ',top:'22px '}} id="item72310" className="pageItem " data-src="assets/images/item_72310.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item72378" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Masuk" style={{left:'29px ',top:'22px '}} id="item72379" className="pageItem " data-src="assets/images/item_72379.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item72626" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Masuk" style={{left:'29px',top:'22px '}} id="item72627" className="pageItem " data-src="assets/images/item_72627.png" />
                            </div>
                        </button>
                        <div id="item228219" alt="Rectangle" className="pageItem ">&nbsp;</div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Homepage;