import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useAudioPlayer } from 'react-use-audio-player';

function Home() {

    //const navigate = useNavigate();
    //navigate('/homepage');
    const audioRef = useRef(null);
    window.audioPlayed = false;

    const handleOnClick = () => {
        window.location.href = '/homepage';
        //window.location.href = '/bab3-p1';
    };

    sessionStorage.removeItem('reloadCount');

    return (
        <div>
            <ul className="pages" id="slider">
                <li className="page" data-name="1">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:228729,act:'play'}], 'pageload');" style={{width:'1920px',height:'1080px'}}>
                        <div alt="Group" style={{left:'189px ',top:'420px '}} id="item228382" className="pageItem group ">
                            <img src={blankImage} alt="Polygon" id="item228383" className="pageItem " data-src="assets/images/item_228383.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'63px ',top:'7px '}} id="item228384" className="pageItem " data-src="assets/images/item_228384.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'114px ',top:'77px '}} id="item228385" className="pageItem " data-src="assets/images/item_228385.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'158px ',top:'77px '}} id="item228386" className="pageItem " data-src="assets/images/item_228386.png" />
                        </div>
                        <button data-ani="fadein-228729 1s linear 1" data-id="228729" id="item228729" data-hidestart="1" className="pageItem has-down has-on hidden" name="masuk cover 2" onClick={handleOnClick} aria-label="masuk cover 2">
                            <div className="pageItem state btn-off">
                                <div id="item228758" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="IBD 01 Inflammatory Bowel Disease" style={{left:'85px ',top:'29px '}} id="item228759" className="pageItem " data-src="assets/images/item_228759.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item228783" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="IBD 01 Inflammatory Bowel Disease" style={{left:'85px ',top:'29px '}} id="item228785" className="pageItem " data-src="assets/images/item_228785.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item228733" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="IBD 01 Inflammatory Bowel Disease" style={{left:'85px ',top:'29px '}} id="item228734" className="pageItem " data-src="assets/images/item_228734.png" />
                            </div>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Home;