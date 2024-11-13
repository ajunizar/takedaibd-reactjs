import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Quiz1Penjelasan() {

    const navigate = useNavigate();

    const handleOnClickGoToQuiz2 = () => {
        window.location.href = '/Quiz2'; // #54
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

    ////////////////////
    // #Page 52 - Kuis 1
    /////////////////////
    /*jQuery(document).ready(function () {

        // 7th option
        jQuery("#item186215").click(function () {
           
        });

        jQuery("#item186217").click(function () {
            
        });

        // Cek Jawaban
        jQuery("#item227827").click(function () {
            
        });
    */

    const handleOnClickCekPenjelasan = (event) => {
        window.location.href = '/FocusStudy4';
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

    return (
        <div >
            <ul className="pages" id="slider">
                <li className="page" data-name="53">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:187167,act:'play'},{n:1,id:187188,act:'play'},{n:1,id:187189,act:'play'},{n:1,id:187190,act:'play'},{del:3.8,n:1,id:187180,act:'play'},{del:4,n:1,id:187181,act:'play'},{del:4,n:1,id:187182,act:'play'},{del:6.5,n:1,id:187183,act:'play'},{del:6,n:1,id:187187,act:'play'},{del:5,n:1,id:187186,act:'play'},{del:8,n:1,id:187185,act:'play'},{del:5.5,n:1,id:187184,act:'play'}], 'pageload');" style={{width:'1920px',height:'1080px'}}>
                        <div id="item264642" className="pageItem" style={{height:'60px',width:'60px',left:'16px',top:'163px'}} alt="Sound">
                            <audio data-id="264642" className="mejs-no-controls" data-autoplay="1" data-autodelay="0" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/Quiz 1 Penjelasan.mp3" />
                            </audio>
                        </div>
                        <div id="item187161" className="pageItem" style={{height:'60px',width:'60px',left:'128px',top:'169px'}} alt="Sound">
                            <audio data-id="187161" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/quiz 1-4.mp3" />
                            </audio>
                        </div>
                        <div id="item187194" className="pageItem" style={{height:'60px',width:'60px',left:'225px',top:'169px'}} alt="Sound">
                            <audio data-id="187194" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/quiz 1-5.mp3" />
                            </audio>
                        </div>
                        <div id="item185069" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div data-ani="flyinfromright-187183 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="187183" id="item187183" data-hidestart="1" className="pageItem group hidden" alt="4a" style={{left:'545px',top:'779px',width:' 413px',height:'95px'}}>
                            <div id="item187177" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Sering " style={{left:'39px',top:'30px'}} id="item185323" className="pageItem " data-src="assets/images/item_185323.png" />
                        </div>
                        <div data-ani="flyinfromleft-187185 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="187185" id="item187185" data-hidestart="1" className="pageItem group hidden" alt="3b" style={{left:'957px',top:'644px',width:' 414px',height:'95px'}}>
                            <div id="item187176" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Transmural " style={{left:'206px',top:'29px'}} id="item185346" className="pageItem " data-src="assets/images/item_185346.png" />
                        </div>
                        <div data-ani="flyinfromleft-187184 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="187184" id="item187184" data-hidestart="1" className="pageItem group hidden" alt="4b" style={{left:'957px',top:'779px',width:' 414px',height:'95px'}}>
                            <div id="item187178" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Jarang " style={{left:'207px',top:'30px'}} id="item185369" className="pageItem " data-src="assets/images/item_185369.png" />
                        </div>
                        <div data-ani="flyinfromright-187180 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="187180" id="item187180" data-hidestart="1" className="pageItem group hidden" alt="1a" style={{left:'547px',top:'371px',width:' 413px',height:'95px'}}>
                            <div id="item187171" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Terbatas pada kolon dan rektum " style={{left:'13px',top:'18px'}} id="item185461" className="pageItem " data-src="assets/images/item_185461.png" />
                        </div>
                        <div data-ani="flyinfromleft-187187 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="187187" id="item187187" data-hidestart="1" className="pageItem group hidden" alt="1b" style={{left:'959px',top:'371px',width:' 414px',height:'95px'}}>
                            <div id="item187172" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Dimana saja (mulut sampai anus) " style={{left:'166px',top:'18px'}} id="item185484" className="pageItem " data-src="assets/images/item_185484.png" />
                        </div>
                        <div data-ani="flyinfromleft-187186 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="187186" id="item187186" data-hidestart="1" className="pageItem group hidden" alt="2b" style={{left:'958px',top:'508px',width:' 414px',height:'95px'}}>
                            <div id="item187174" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Diskontinu / skipped lession " style={{left:'165px',top:'15px'}} id="item185507" className="pageItem " data-src="assets/images/item_185507.png" />
                        </div>
                        <div data-ani="flyinfromright-187181 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="187181" id="item187181" data-hidestart="1" className="pageItem group hidden" alt="2a" style={{left:'546px',top:'508px',width:' 413px',height:'95px'}}>
                            <div id="item187173" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Kontinu " style={{left:'57px',top:'28px'}} id="item185530" className="pageItem " data-src="assets/images/item_185530.png" />
                        </div>
                        <div data-ani="flyinfromright-187182 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="187182" id="item187182" data-hidestart="1" className="pageItem group hidden" alt="3a" style={{left:'545px',top:'644px',width:' 413px',height:'95px'}}>
                            <div id="item187175" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Lapisan mukosa " style={{left:'38px',top:'29px'}} id="item185553" className="pageItem " data-src="assets/images/item_185553.png" />
                        </div>
                        <div id="item185080" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item185082" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <img src={blankImage} alt="Rectangle" style={{top:'290px'}} id="item185084" className="pageItem " data-src="assets/images/item_185084.png" />
                        <img src={blankImage} alt="Rectangle" style={{top:'342px'}} id="item185221" className="pageItem " data-src="assets/images/item_185221.png" />
                        <img src={blankImage} alt="Rectangle" style={{left:'1477px',top:'342px'}} id="item185227" className="pageItem " data-src="assets/images/item_185227.png" />
                        <div data-ani="flyinfrombottom-187167 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="187167" id="item187167" data-hidestart="1" className="pageItem group hidden" alt="lokasi" style={{left:'806px',top:'358px',width:' 307px',height:'122px'}}>
                            <div id="item185075" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Lokasi inflamasi " style={{left:'16px',top:'41px'}} id="item185230" className="pageItem " data-src="assets/images/item_185230.png" />
                        </div>
                        <div data-ani="flyinfrombottom-187188 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="187188" id="item187188" data-hidestart="1" className="pageItem group hidden" alt="pola" style={{left:'806px',top:'494px',width:' 307px',height:'122px'}}>
                            <div id="item185077" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Pola inflamasi " style={{left:'16px',top:'41px'}} id="item185253" className="pageItem " data-src="assets/images/item_185253.png" />
                        </div>
                        <div data-ani="flyinfrombottom-187189 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="187189" id="item187189" data-hidestart="1" className="pageItem group hidden" alt="gambaran" style={{left:'805px',top:'630px',width:' 307px',height:'122px'}}>
                            <div id="item185078" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Gambaran inflamasi " style={{left:'16px',top:'25px'}} id="item185276" className="pageItem " data-src="assets/images/item_185276.png" />
                        </div>
                        <div data-ani="flyinfrombottom-187190 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="187190" id="item187190" data-hidestart="1" className="pageItem group hidden" alt="pendarahan" style={{left:'806px',top:'766px',width:' 307px',height:'122px'}}>
                            <div id="item185079" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Perdarahan rektum " style={{left:'56px',top:'26px'}} id="item185300" className="pageItem " data-src="assets/images/item_185300.png" />
                        </div>
                        <img src={blankImage} alt="KUIS 1" style={{left:'712px',top:'157px'}} id="item185392" className="pageItem " data-src="assets/images/item_185392.png" />
                        <img src={blankImage} alt="Penyakit Crohn (PC)" style={{left:'1477px',top:'306px'}} id="item185415" className="pageItem " data-src="assets/images/item_185415.png" />
                        <img src={blankImage} alt="Kolitis Ulseratif (KU) " style={{left:'37px',top:'306px'}} id="item185438" className="pageItem " data-src="assets/images/item_185438.png" />
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item190628" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item190630" className="pageItem " data-src="assets/images/item_190630.png" />
                            <div alt="Group" style={{top:'132px'}} id="item190653" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item190654" className="pageItem " data-src="assets/images/item_190654.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item190656" className="pageItem " data-src="assets/images/item_190656.png" />
                            </div>
                        </div>
                        <button data-id="187046" name="icon back 59" onClick={handleOnClickPreviousPage} aria-label="icon back 59" id="item187046" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item187054" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item187055" className="pageItem " data-src="assets/images/item_187055.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item187058" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item187059" className="pageItem " data-src="assets/images/item_187059.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item187049" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item187051" className="pageItem " data-src="assets/images/item_187051.png" />
                            </div>
                        </button>
                        <button data-id="221879" name="icon beranda 107" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 107" id="item221879" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221886" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221887" className="pageItem " data-src="assets/images/item_221887.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221888" className="pageItem " data-src="assets/images/item_221888.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221890" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221891" className="pageItem " data-src="assets/images/item_221891.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221893" className="pageItem " data-src="assets/images/item_221893.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221882" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221883" className="pageItem " data-src="assets/images/item_221883.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221884" className="pageItem " data-src="assets/images/item_221884.png" />
                            </div>
                        </button>
                        
                        <Navigation />

                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Quiz1Penjelasan;