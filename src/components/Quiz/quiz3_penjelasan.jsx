import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Quiz3Penjelasan() {

    const navigate = useNavigate();

    const handleOnClickGoToQuiz3 = () => {
        window.location.href = '/quiz3'; // #54
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
                <li className="page" data-name="57">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{del:6,n:1,id:212266,act:'play'},{del:3,n:1,id:212331,act:'play'},{del:1.5,n:1,id:212330,act:'play'},{del:1.5,n:1,id:212332,act:'play'},{del:3,n:1,id:212217,act:'play'},{del:2,n:1,id:212333,act:'play'},{del:6,n:1,id:212167,act:'play'},{del:3,n:1,id:212334,act:'play'},{del:2.5,n:1,id:212335,act:'play'},{del:2,n:1,id:212336,act:'play'}], 'pageload');" style={{width:'1920px',height:'1080px'}}>
                        <div id="item264665" className="pageItem" style={{height:'60px',width:'60px',left:'24px',top:'170px'}} alt="Sound">
                            <audio data-id="264665" className="mejs-no-controls" data-autoplay="1" data-autodelay="0" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/Quiz 3 Penjelasan.mp3" />
                            </audio>
                        </div>
                        <div id="item220415" className="pageItem" style={{height:'60px',width:'60px',left:'113px',top:'68px'}} alt="Sound">
                            <audio data-id="220415" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/quiz 3-3.mp3" />
                            </audio>
                        </div>
                        <div id="item220421" className="pageItem" style={{height:'60px',width:'60px',left:'119px',top:'170px'}} alt="Sound">
                            <audio data-id="220421" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/quiz 3-4.mp3" />
                            </audio>
                        </div>
                        <div id="item220429" className="pageItem" style={{height:'60px',width:'60px',left:'140px',top:'290px'}} alt="Sound">
                            <audio data-id="220429" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/quiz 3-5.mp3" />
                            </audio>
                        </div>
                        <div id="item195768" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item195770" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item195772" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <img src={blankImage} alt="KUIS 3" style={{left:'712px',top:'157px'}} id="item195774" className="pageItem " data-src="assets/images/item_195774.png" />
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item195797" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item195798" className="pageItem " data-src="assets/images/item_195798.png" />
                            <div alt="Group" style={{top:'132px'}} id="item195821" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item195822" className="pageItem " data-src="assets/images/item_195822.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item195823" className="pageItem " data-src="assets/images/item_195823.png" />
                            </div>
                        </div>
                        <div data-ani="flyinfrombottom-212334 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="212334" id="item212334" data-hidestart="1" className="pageItem group hidden" alt="3-1" style={{left:'1327px',top:'556px',width:' 363px',height:'96px'}}>
                            <div id="item195828" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Tidak ada disabilitas" style={{left:'54px',top:'33px'}} id="item195841" className="pageItem " data-src="assets/images/item_195841.png" />
                        </div>
                        <div data-ani="flyinfrombottom-212336 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="212336" id="item212336" data-hidestart="1" className="pageItem group hidden" alt="3-3" style={{left:'1327px',top:'780px',width:' 363px',height:'96px'}}>
                            <div id="item195824" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Penyembuhan endoskopis" style={{left:'34px',top:'15px'}} id="item195864" className="pageItem " data-src="assets/images/item_195864.png" />
                        </div>
                        <div data-ani="flyinfrombottom-212331 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="212331" id="item212331" data-hidestart="1" className="pageItem group hidden" alt="1-2" style={{left:'230px',top:'556px',width:' 364px',height:'97px'}}>
                            <div id="item195829" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Respons simtomatis/klinis" style={{left:'33px',top:'17px'}} id="item195887" className="pageItem " data-src="assets/images/item_195887.png" />
                        </div>
                        <div data-ani="flyinfrombottom-212332 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="212332" id="item212332" data-hidestart="1" className="pageItem group hidden" alt="1-3" style={{left:'230px',top:'781px',width:' 364px',height:'97px'}}>
                            <div id="item195830" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Normalisasi CRP" style={{left:'79px',top:'33px'}} id="item195912" className="pageItem " data-src="assets/images/item_195912.png" />
                        </div>
                        <div data-ani="flyinfrombottom-212333 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="212333" id="item212333" data-hidestart="1" className="pageItem group hidden" alt="2-1" style={{left:'746px',top:'556px',width:' 412px',height:'97px'}}>
                            <div id="item195826" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Penurunan nilai FCP" style={{left:'80px',top:'30px'}} id="item195958" className="pageItem " data-src="assets/images/item_195958.png" />
                        </div>
                        <div data-ani="flyinfrombottom-212335 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="212335" id="item212335" data-hidestart="1" className="pageItem group hidden" alt="3-2" style={{left:'1327px',top:'668px',width:' 363px',height:'96px'}}>
                            <div id="item195827" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Perbaikan kualitas hidup" style={{left:'34px',top:'18px'}} id="item196027" className="pageItem " data-src="assets/images/item_196027.png" />
                        </div>
                        <div data-ani="flyinfrombottom-212330 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="212330" id="item212330" data-hidestart="1" className="pageItem group hidden" alt="1-1" style={{left:'229px',top:'666px',width:' 364px',height:'97px'}}>
                            <div id="item195832" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Remisi simtomatis" style={{left:'66px',top:'34px'}} id="item196119" className="pageItem " data-src="assets/images/item_196119.png" />
                        </div>
                        <div alt="soal" style={{left:'326px',top:'292px'}} id="item212136" className="pageItem group ">
                            <div id="item212137" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Kelompokan pernyataan berikut sesuai dengan kategorinya:" style={{left:'16px',top:'19px'}} id="item212139" className="pageItem " data-src="assets/images/item_212139.png" />
                        </div>
                        <div data-ani="flyinfrombottom-212167 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="212167" id="item212167" data-hidestart="1" className="pageItem group hidden" alt="3" style={{left:'1327px',top:'423px',width:' 363px',height:'96px'}}>
                            <div id="item212169" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <div alt="Oval" style={{left:'17px',top:'18px'}} id="item212170" className="pageItem ">
                                <svg version="1.1" width="59" height="59" >
                                    <ellipse cx="29.37" cy="29.16" rx="29.37" ry="29.16" fill="#3055ad" />
                                </svg>
                            </div>
                            <img src={blankImage} alt="Target terapi jangka panjang " style={{left:'100px',top:'10px'}} id="item212171" className="pageItem " data-src="assets/images/item_212171.png" />
                            <img src={blankImage} alt="3" style={{left:'34px',top:'27px'}} id="item212194" className="pageItem " data-src="assets/images/item_212194.png" />
                        </div>
                        <div data-ani="flyinfrombottom-212217 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="212217" id="item212217" data-hidestart="1" className="pageItem group hidden" alt="2" style={{left:'746px',top:'423px',width:' 412px',height:'96px'}}>
                            <div id="item212218" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <div alt="Oval" style={{left:'17px',top:'18px'}} id="item212219" className="pageItem ">
                                <svg version="1.1" width="59" height="59" >
                                    <ellipse cx="29.37" cy="29.16" rx="29.37" ry="29.16" fill="#3055ad" />
                                </svg>
                            </div>
                            <img src={blankImage} alt="Target terapi jangka menengah " style={{left:'100px',top:'10px'}} id="item212220" className="pageItem " data-src="assets/images/item_212220.png" />
                            <img src={blankImage} alt="2" style={{left:'34px',top:'27px'}} id="item212243" className="pageItem " data-src="assets/images/item_212243.png" />
                        </div>
                        <div data-ani="flyinfrombottom-212266 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="212266" id="item212266" data-hidestart="1" className="pageItem group hidden" alt="1" style={{left:'230px',top:'423px',width:' 363px',height:'96px'}}>
                            <div id="item212267" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <div alt="Oval" style={{left:'17px',top:'18px'}} id="item212268" className="pageItem ">
                                <svg version="1.1" width="59" height="59" >
                                    <ellipse cx="29.37" cy="29.16" rx="29.37" ry="29.16" fill="#3055ad" />
                                </svg>
                            </div>
                            <img src={blankImage} alt="Target terapi jangka pendek " style={{left:'100px',top:'10px'}} id="item212269" className="pageItem " data-src="assets/images/item_212269.png" />
                            <img src={blankImage} alt="1" style={{left:'34px',top:'27px'}} id="item212292" className="pageItem " data-src="assets/images/item_212292.png" />
                        </div>
                        <button data-id="212341" name="icon back 63" onClick={handleOnClickGoToQuiz3} aria-label="icon back 63" id="item212341" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item212349" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item212350" className="pageItem " data-src="assets/images/item_212350.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item212352" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item212353" className="pageItem " data-src="assets/images/item_212353.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item212344" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item212346" className="pageItem " data-src="assets/images/item_212346.png" />
                            </div>
                        </button>
                        <button data-id="221964" name="icon beranda 110" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 110" id="item221964" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221971" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221972" className="pageItem " data-src="assets/images/item_221972.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221973" className="pageItem " data-src="assets/images/item_221973.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221975" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221976" className="pageItem " data-src="assets/images/item_221976.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221977" className="pageItem " data-src="assets/images/item_221977.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221967" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221968" className="pageItem " data-src="assets/images/item_221968.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221969" className="pageItem " data-src="assets/images/item_221969.png" />
                            </div>
                        </button>
                        <Navigation />
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Quiz3Penjelasan;