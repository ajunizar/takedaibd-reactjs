import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Quiz2Penjelasan() {

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
                <li className="page" data-name="55">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{del:4,n:1,id:193967,act:'play'},{del:2.5,n:1,id:194042,act:'play'},{del:2,n:1,id:194228,act:'play'},{del:2,n:1,id:194251,act:'play'},{del:2,n:1,id:193992,act:'play'},{del:3.5,n:1,id:194065,act:'play'},{del:2,n:1,id:194204,act:'play'},{del:1,n:1,id:194088,act:'play'},{del:1.5,n:1,id:194112,act:'play'},{del:6.7,n:1,id:194135,act:'play'},{del:1,n:1,id:194158,act:'play'},{del:1,n:1,id:194181,act:'play'}], 'pageload');" style={{width:'1920px',height:'1080px'}}>
                        <div id="item264656" className="pageItem" style={{height:'60px',width:'60px',left:'18px',top:'163px'}} alt="Sound">
                            <audio data-id="264656" className="mejs-no-controls" data-autoplay="1" data-autodelay="0" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/Quiz 2 Penjelasan.mp3" />
                            </audio>
                        </div>
                        <div id="item193931" className="pageItem" style={{height:'60px',width:'60px',left:'78px',top:'38px'}} alt="Sound">
                            <audio data-id="193931" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/quiz 2-3.mp3" />
                            </audio>
                        </div>
                        <div id="item193935" className="pageItem" style={{height:'60px',width:'60px',left:'174px',top:'38px'}} alt="Sound">
                            <audio data-id="193935" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/quiz 2-4.mp3" />
                            </audio>
                        </div>
                        <div id="item193938" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item193940" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item193942" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <img src={blankImage} alt="KUIS 2" style={{left:'712px',top:'157px'}} id="item193944" className="pageItem " data-src="assets/images/item_193944.png" />
                        <div data-ani="flyinfromleft-193967 1s cubic-bezier(.2,.6,.35,1) 1" data-id="193967" id="item193967" data-hidestart="1" className="pageItem group hidden" alt="instrinsik" style={{left:'321px',top:'432px',width:' 346px',height:'211px'}}>
                            <div id="item193968" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Faktor intrinsik:" style={{left:'29px',top:'20px'}} id="item193969" className="pageItem " data-src="assets/images/item_193969.png" />
                        </div>
                        <div data-ani="flyinfromright-193992 1s cubic-bezier(.2,.6,.35,1) 1" data-id="193992" id="item193992" data-hidestart="1" className="pageItem group hidden" alt="ekstrinsik" style={{left:'803px',top:'432px',width:' 797px',height:'411px'}}>
                            <div id="item193993" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Faktor ekstrinsik:" style={{left:'33px',top:'22px'}} id="item193994" className="pageItem " data-src="assets/images/item_193994.png" />
                        </div>
                        <div id="item194017" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <img src={blankImage} alt="Berikut yang merupakan faktor risiko terjadi IBD adalah" style={{left:'404px',top:'314px'}} id="item194019" className="pageItem " data-src="assets/images/item_194019.png" />
                        <img src={blankImage} data-ani="fadein-194042 0.5s linear 1" data-id="194042" id="item194042" data-hidestart="1" className="pageItem hidden" alt="• Genetik " style={{left:'350px',top:'500px'}} data-src="assets/images/item_194042.png" />
                        <img src={blankImage} data-ani="fadein-194065 0.5s linear 1" data-id="194065" id="item194065" data-hidestart="1" className="pageItem hidden" alt="• Diet " style={{left:'836px',top:'500px'}} data-src="assets/images/item_194065.png" />
                        <img src={blankImage} data-ani="fadein-194088 0.5s linear 1" data-id="194088" id="item194088" data-hidestart="1" className="pageItem hidden" alt="• Aktivitas fisik" style={{left:'836px',top:'578px'}} data-src="assets/images/item_194088.png" />
                        <img src={blankImage} data-ani="fadein-194112 0.5s linear 1" data-id="194112" id="item194112" data-hidestart="1" className="pageItem hidden" alt="• Riwayat pengobatan (antibiotik dan Obat Anti inflamasi non steroid / OAINS)" style={{left:'836px',top:'619px'}} data-src="assets/images/item_194112.png" />
                        <img src={blankImage} data-ani="fadein-194135 0.5s linear 1" data-id="194135" id="item194135" data-hidestart="1" className="pageItem hidden" alt="• Menyusui" style={{left:'836px',top:'694px'}} data-src="assets/images/item_194135.png" />
                        <img src={blankImage} data-ani="fadein-194158 0.5s linear 1" data-id="194158" id="item194158" data-hidestart="1" className="pageItem hidden" alt="• Polusi udara" style={{left:'836px',top:'736px'}} data-src="assets/images/item_194158.png" />
                        <img src={blankImage} data-ani="fadein-194181 0.5s linear 1" data-id="194181" id="item194181" data-hidestart="1" className="pageItem hidden" alt="• Kualitas tidur" style={{left:'836px',top:'778px'}} data-src="assets/images/item_194181.png" />
                        <img src={blankImage} data-ani="fadein-194204 0.5s linear 1" data-id="194204" id="item194204" data-hidestart="1" className="pageItem hidden" alt="• Merokok" style={{left:'836px',top:'538px'}} data-src="assets/images/item_194204.png" />
                        <img src={blankImage} data-ani="fadein-194228 0.5s linear 1" data-id="194228" id="item194228" data-hidestart="1" className="pageItem hidden" alt="• Respons imun" style={{left:'350px',top:'542px'}} data-src="assets/images/item_194228.png" />
                        <img src={blankImage} data-ani="fadein-194251 0.5s linear 1" data-id="194251" id="item194251" data-hidestart="1" className="pageItem hidden" alt="• Mikrobiota usus" style={{left:'350px',top:'584px'}} data-src="assets/images/item_194251.png" />
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item194275" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item194276" className="pageItem " data-src="assets/images/item_194276.png" />
                            <div alt="Group" style={{top:'132px'}} id="item194299" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item194300" className="pageItem " data-src="assets/images/item_194300.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item194301" className="pageItem " data-src="assets/images/item_194301.png" />
                            </div>
                        </div>
                        <button data-id="208322" name="icon back 61" onClick={handleOnClickPreviousPage} aria-label="icon back 61" id="item208322" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item208330" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item208331" className="pageItem " data-src="assets/images/item_208331.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item208334" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item208335" className="pageItem " data-src="assets/images/item_208335.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item208325" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item208327" className="pageItem " data-src="assets/images/item_208327.png" />
                            </div>
                        </button>
                        <button data-id="221928" name="icon beranda 108" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 108" id="item221928" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221936" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221937" className="pageItem " data-src="assets/images/item_221937.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221938" className="pageItem " data-src="assets/images/item_221938.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221940" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221941" className="pageItem " data-src="assets/images/item_221941.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221943" className="pageItem " data-src="assets/images/item_221943.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221931" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221933" className="pageItem " data-src="assets/images/item_221933.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221934" className="pageItem " data-src="assets/images/item_221934.png" />
                            </div>
                        </button>
                        <Navigation />
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Quiz2Penjelasan;