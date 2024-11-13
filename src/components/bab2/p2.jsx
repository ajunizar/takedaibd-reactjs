import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Bab2P2() {

    const navigate = useNavigate();

    //var referrer = document.referrer;
    //console.log("referrer url",referrer);
    const handleOnClickUlang = (event) => {
        event.preventDefault();
        jQuery("#item263651 audio")[0].currentTime = 0;
        jQuery("#item263651 audio")[0].play();
        go(event,[{n:1,id:4257,act:'play'},{del:8,n:1,id:83976,act:'play'},{del:10,n:1,id:4330,act:'play'},{del:0.5,n:1,id:4531,act:'play'},{n:1,id:4222,act:'play'},{del:1,n:1,id:83971,act:'play'},{del:1,n:1,id:4421,act:'play'},{del:3.5,n:1,id:84671,act:'play'},{del:0.5,n:1,id:83918,act:'play'},{del:2,n:1,id:4223,act:'play'},{n:1,id:83972,act:'play'},{del:1,n:1,id:4487,act:'play'},{del:5,n:1,id:19041,act:'play'},{del:2,n:1,id:83969,act:'play'},{del:6.5,n:1,id:83975,act:'play'},{n:1,id:84668,act:'play'},{del:0.5,n:1,id:4553,act:'play'},{n:1,id:4224,act:'play'},{n:1,id:83973,act:'play'},{del:0.5,n:1,id:4443,act:'play'},{del:8,n:1,id:84777,act:'play'},{n:1,id:4666,act:'play'},{del:6,n:1,id:83974,act:'play'},{del:1.5,n:1,id:4509,act:'play'},{del:7,n:1,id:84783,act:'play'},{del:6,n:1,id:83978,act:'play'},{n:1,id:4378,act:'play'},{del:0.5,n:1,id:4575,act:'play'},{n:1,id:4225,act:'play'},{del:6,n:1,id:4465,act:'play'},{del:8,n:1,id:84093,act:'play'},{del:5,n:1,id:84116,act:'play'}]);
    };
    const handleOnClickPreviousPage = () => {
        window.location.href = '/bab2-p1';
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }


    

    const handleOnClickNextPage = (event) => {
        window.location.href = '/bab2-p3';
    }


    return (
        <div >
            <ul className="pages" id="slider">
                <li className="page" data-name="10">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:4257,act:'play'},{del:8,n:1,id:83976,act:'play'},{n:1,id:4330,act:'play'},{del:0.5,n:1,id:4531,act:'play'},{n:1,id:4222,act:'play'},{del:1,n:1,id:83971,act:'play'},{del:1,n:1,id:4421,act:'play'},{del:3.5,n:1,id:84671,act:'play'},{del:0.5,n:1,id:83918,act:'play'},{del:2,n:1,id:4223,act:'play'},{n:1,id:83972,act:'play'},{del:1,n:1,id:4487,act:'play'},{del:5,n:1,id:19041,act:'play'},{del:2,n:1,id:83969,act:'play'},{del:6.5,n:1,id:83975,act:'play'},{n:1,id:84668,act:'play'},{del:0.5,n:1,id:4553,act:'play'},{n:1,id:4224,act:'play'},{n:1,id:83973,act:'play'},{del:0.5,n:1,id:4443,act:'play'},{del:8,n:1,id:84777,act:'play'},{n:1,id:4666,act:'play'},{del:6,n:1,id:83974,act:'play'},{n:1,id:4509,act:'play'},{del:7,n:1,id:84783,act:'play'},{del:6,n:1,id:83978,act:'play'},{n:1,id:4378,act:'play'},{del:0.5,n:1,id:4575,act:'play'},{n:1,id:4225,act:'play'},{del:6,n:1,id:4465,act:'play'},{del:7,n:1,id:84093,act:'play'},{del:5,n:1,id:84116,act:'play'}], 'pageload');" style={{width:'1920px',height:'1080px'}}>
                        <div data-ani="flyinfrombottom-83978 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="83978" id="item83978" data-hidestart="1" className="pageItem group hidden" alt="shape 3" style={{left:'1436px',top:'145px',width:' 383px',height:'799px'}}>
                            <div id="item4218" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <div alt="Oval" id="item4219" className="pageItem ">
                                <svg version="1.1" width="384" height="382" >
                                    <ellipse cx="191.65" cy="190.67" rx="191.65" ry="190.67" fill="#adfee1" />
                                </svg>
                            </div>
                        </div>
                        <div data-ani="flyinfrombottom-83975 1s cubic-bezier(.2,.6,.35,1) 1" data-id="83975" id="item83975" data-hidestart="1" className="pageItem group hidden" alt="shape 2" style={{left:'1031px',top:'145px',width:' 383px',height:'799px'}}>
                            <div id="item4216" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <div alt="Oval" id="item4220" className="pageItem ">
                                <svg version="1.1" width="384" height="382" >
                                    <ellipse cx="191.65" cy="190.67" rx="191.65" ry="190.67" fill="#f9b1a8" />
                                </svg>
                            </div>
                        </div>
                        <div data-ani="flyinfrombottom-83976 1s cubic-bezier(.2,.6,.35,1) 1" data-id="83976" id="item83976" data-hidestart="1" className="pageItem group hidden" alt="shape 1" style={{left:'627px',top:'145px',width:' 383px',height:'799px'}}>
                            <div id="item4217" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <div alt="Oval" id="item4221" className="pageItem ">
                                <svg version="1.1" width="384" height="382" >
                                    <ellipse cx="191.65" cy="190.67" rx="191.65" ry="190.67" fill="#c9ddff" />
                                </svg>
                            </div>
                        </div>
                        <img src={blankImage} alt="Polygon" style={{left:'-692px',top:'-422px'}} id="item84040" className="pageItem " data-src="assets/images/item_84040.png" />
                        <div id="item84063" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item153144" className="pageItem" style={{height:'60px',width:'60px',left:'785px',top:'1005px'}} alt="Sound">
                            <audio data-id="153144" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 9-5.mp3" />
                            </audio>
                        </div>
                        <div id="item84656" className="pageItem" style={{height:'60px',width:'60px',left:'798px',top:'1010px'}} alt="Sound">
                            <audio data-id="84656" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 9-2 2.mp3" />
                            </audio>
                        </div>
                        <img src={blankImage} data-ani="fadein-4222 1s linear 1" data-id="4222" id="item4222" data-hidestart="1" className="pageItem hidden" alt="line 1-1" style={{height:' 1px',left:'672px',top:'501px'}} data-src="assets/images/item_4222.png" />
                        <img src={blankImage} data-ani="fadein-4223 1s linear 1" data-id="4223" id="item4223" data-hidestart="1" className="pageItem hidden" alt="line 1-2" style={{height:' 1px',left:'672px',top:'689px'}} data-src="assets/images/item_4223.png" />
                        <img src={blankImage} data-ani="fadein-4224 1s linear 1" data-id="4224" id="item4224" data-hidestart="1" className="pageItem hidden" alt="line 2-1" style={{height:' 1px',left:'1077px',top:'501px'}} data-src="assets/images/item_4224.png" />
                        <img src={blankImage} data-ani="fadein-4225 1s linear 1" data-id="4225" id="item4225" data-hidestart="1" className="pageItem hidden" alt="line 3" style={{height:' 1px',left:'1483px',top:'501px'}} data-src="assets/images/item_4225.png" />
                        <div id="item84649" className="pageItem" style={{height:'60px',width:'60px',left:'696px',top:'1010px'}} alt="Sound">
                            <audio data-id="84649" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 9-1.mp3" />
                            </audio>
                        </div>
                        <div id="item84661" className="pageItem" style={{height:'60px',width:'60px',left:'924px',top:'1010px'}} alt="Sound">
                            <audio data-id="84661" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 9-3.mp3" />
                            </audio>
                        </div>
                        <div id="item84678" className="pageItem" style={{height:'60px',width:'60px',left:'1010px',top:'1010px'}} alt="Sound">
                            <audio data-id="84678" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 9-4.mp3" />
                            </audio>
                        </div>
                        <div id="item84696" className="pageItem" style={{height:'60px',width:'60px',left:'1093px',top:'1010px'}} alt="Sound">
                            <audio data-id="84696" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 9-7.mp3" />
                            </audio>
                        </div>
                        <div id="item84703" className="pageItem" style={{height:'60px',width:'60px',left:'1064px',top:'1005px'}} alt="Sound">
                            <audio data-id="84703" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 9-6.mp3" />
                            </audio>
                        </div>
                        <div id="item84709" className="pageItem" style={{height:'60px',width:'60px',left:'1189px',top:'1005px'}} alt="Sound">
                            <audio data-id="84709" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 9-8.mp3" />
                            </audio>
                        </div>
                        <div id="item84715" className="pageItem" style={{height:'60px',width:'60px',left:'1200px',top:'1010px'}} alt="Sound">
                            <audio data-id="84715" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 9-9.mp3" />
                            </audio>
                        </div>
                        <div id="item84811" className="pageItem" style={{height:'60px',width:'60px',left:'1140px',top:'1010px'}} alt="Sound">
                            <audio data-id="84811" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 9-10.mp3" />
                            </audio>
                        </div>
                        <div id="item84826" className="pageItem" style={{height:'60px',width:'60px',left:'1280px',top:'1019px'}} alt="Sound">
                            <audio data-id="84826" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 9-11.mp3" />
                            </audio>
                        </div>
                        <div id="item84831" className="pageItem" style={{height:'60px',width:'60px',left:'1366px',top:'1010px'}} alt="Sound">
                            <audio data-id="84831" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 9-12.mp3" />
                            </audio>
                        </div>
                        <div id="item146290" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <Navigation />
                        <div id="item263651" className="pageItem" style={{height:'60px',width:'60px',left:'707px',top:'1005px'}} alt="Sound">
                            <audio data-id="263651" className="mejs-no-controls" data-autoplay="1" data-autodelay="0" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 9 PC FULL.mp3" />
                            </audio>
                        </div>
                        <div id="item84842" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <img src={blankImage} data-ani="fadein-4257 1s linear 1" data-id="4257" id="item4257" data-hidestart="1" className="pageItem hidden" alt="Dampak IBD Terhadap Kualitas Hidup dan Sistem Kesehatan8" style={{left:'97px',top:'339px'}} data-src="assets/images/item_4257.png" />
                        <img src={blankImage} alt="Bab 2" style={{left:'102px',top:'264px'}} id="item4279" className="pageItem " data-src="assets/images/item_4279.png" />
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item4304" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item4324" className="pageItem " data-src="assets/images/item_4324.png" />
                            <div alt="Group" style={{top:'132px'}} id="item4327" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item4328" className="pageItem " data-src="assets/images/item_4328.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item4329" className="pageItem " data-src="assets/images/item_4329.png" />
                            </div>
                        </div>
                        <div data-ani="fadein-4330 0.2s linear 1" data-id="4330" id="item4330" data-hidestart="1" className="pageItem group hidden" alt="1" style={{left:'678px',top:'263px',width:' 97px',height:'97px'}}>
                            <div alt="Oval" id="item4331" className="pageItem ">
                                <svg version="1.1" width="98" height="98" >
                                    <ellipse cx="48.6" cy="48.6" rx="48.6" ry="48.6" fill="#5c98ff" />
                                </svg>
                            </div>
                            <img src={blankImage} alt="1" style={{left:'22px',top:'6px'}} id="item4351" className="pageItem " data-src="assets/images/item_4351.png" />
                        </div>
                        <div data-ani="fadein-84668 0.2s linear 1" data-id="84668" id="item84668" data-hidestart="1" className="pageItem group hidden" alt="2" style={{left:'1080px',top:'263px',width:' 97px',height:'97px'}}>
                            <div alt="Oval" id="item4355" className="pageItem ">
                                <svg version="1.1" width="98" height="98" >
                                    <ellipse cx="48.6" cy="48.6" rx="48.6" ry="48.6" fill="#fa635f" />
                                </svg>
                            </div>
                            <img src={blankImage} alt="2" style={{left:'25px',top:'8px'}} id="item4375" className="pageItem " data-src="assets/images/item_4375.png" />
                        </div>
                        <div data-ani="fadein-4378 0.2s linear 1" data-id="4378" id="item4378" data-hidestart="1" className="pageItem group hidden" alt="3" style={{left:'1483px',top:'263px',width:' 97px',height:'97px'}}>
                            <div alt="Oval" id="item4379" className="pageItem ">
                                <svg version="1.1" width="98" height="98" >
                                    <ellipse cx="48.6" cy="48.6" rx="48.6" ry="48.6" fill="#53c7a0" />
                                </svg>
                            </div>
                            <img src={blankImage} alt="3" style={{left:'25px',top:'8px'}} id="item4399" className="pageItem " data-src="assets/images/item_4399.png" />
                        </div>
                        <img src={blankImage} data-ani="fadein-4443 0.5s linear 1" data-id="4443" id="item4443" data-hidestart="1" className="pageItem hidden" alt="1,1 juta kasus rawat jalan dan 1,8 juta peresepan pada tahun 2004; " style={{left:'1077px',top:'582px'}} data-src="assets/images/item_4443.png" />
                        <img src={blankImage} data-ani="fadein-4465 1s linear 1" data-id="4465" id="item4465" data-hidestart="1" className="pageItem hidden" alt="• Marah, cemas dan takut " style={{left:'1482px',top:'528px'}} data-src="assets/images/item_4465.png" />
                        <img src={blankImage} data-ani="fadein-84093 1s linear 1" data-id="84093" id="item84093" data-hidestart="1" className="pageItem hidden" alt="• Kondisi stres dapat menyebabkan kekambuhan" style={{left:'1482px',top:'585px'}} data-src="assets/images/item_84093.png" />
                        <img src={blankImage} data-ani="fadein-84116 1s linear 1" data-id="84116" id="item84116" data-hidestart="1" className="pageItem hidden" alt="• Depresi" style={{left:'1481px',top:'663px'}} data-src="assets/images/item_84116.png" />
                        <img src={blankImage} data-ani="fadein-4509 0.5s linear 1" data-id="4509" id="item4509" data-hidestart="1" className="pageItem hidden" alt="716.000 kasus rawat jalan dan 2,1 juta peresepan pada tahun 2004; " style={{left:'1077px',top:'789px'}} data-src="assets/images/item_4509.png" />
                        <img src={blankImage} data-ani="fadein-4531 0.5s linear 1" data-id="4531" id="item4531" data-hidestart="1" className="pageItem hidden" alt="Dampak akibat komplikasi dan kekambuhan" style={{left:'671px',top:'376px'}} data-src="assets/images/item_4531.png" />
                        <img src={blankImage} data-ani="fadein-4553 0.5s linear 1" data-id="4553" id="item4553" data-hidestart="1" className="pageItem hidden" alt="Dampak pada sistem kesehatan " style={{left:'1077px',top:'376px'}} data-src="assets/images/item_4553.png" />
                        <img src={blankImage} data-ani="fadein-4575 1s linear 1" data-id="4575" id="item4575" data-hidestart="1" className="pageItem hidden" alt="Dampak psikologis " style={{left:'1481px',top:'376px'}} data-src="assets/images/item_4575.png" />
                        <div data-ani="fadein-83971 0.5s linear 1" data-id="83971" id="item83971" data-hidestart="1" className="pageItem group hidden" alt="pc 1" style={{left:'669px',top:'526px',width:' 93px',height:'50px'}}>
                            <div id="item4226" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="PC" style={{left:'28px',top:'5px'}} id="item4597" className="pageItem " data-src="assets/images/item_4597.png" />
                        </div>
                        <div data-ani="fadein-83973 1s linear 1" data-id="83973" id="item83973" data-hidestart="1" className="pageItem group hidden" alt="pc 2" style={{left:'1078px',top:'526px',width:' 93px',height:'50px'}}>
                            <div id="item4227" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="PC" style={{left:'28px',top:'5px'}} id="item4619" className="pageItem " data-src="assets/images/item_4619.png" />
                        </div>
                        <div data-ani="fadein-83972 1s linear 1" data-id="83972" id="item83972" data-hidestart="1" className="pageItem group hidden" alt="ku 1" style={{left:'669px',top:'716px',width:' 93px',height:'50px'}}>
                            <div id="item4228" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="KU" style={{left:'26px',top:'5px'}} id="item4641" className="pageItem " data-src="assets/images/item_4641.png" />
                        </div>
                        <div data-ani="fadein-83974 1s linear 1" data-id="83974" id="item83974" data-hidestart="1" className="pageItem group hidden" alt="ku 2" style={{left:'1078px',top:'732px',width:' 93px',height:'50px'}}>
                            <div id="item4229" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="KU" style={{left:'26px',top:'5px'}} id="item4663" className="pageItem " data-src="assets/images/item_4663.png" />
                        </div>
                        <img src={blankImage} data-ani="fadein-4666 1s linear 1" data-id="4666" id="item4666" data-hidestart="1" className="pageItem hidden" alt="line 2-2" style={{height:' 1px',left:'1081px',top:'708px'}} data-src="assets/images/item_4666.png" />
                        <div data-ani="fadein-19041 1s linear 1" data-id="19041" id="item19041" data-hidestart="1" className="pageItem group hidden" alt="panah 2" style={{left:'845px',top:'810px',width:' 16px',height:'12px'}}>
                            <img src={blankImage} alt="Polygon" style={{left:'5px'}} id="item19042" className="pageItem " data-src="assets/images/item_19042.png" />
                            <div id="item19043" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        </div>
                        <div data-ani="fadein-83918 0.5s linear 1" data-id="83918" id="item83918" data-hidestart="1" className="pageItem group hidden" alt="50%" style={{left:'668px',top:'609px',width:' 300px',height:'71px'}}>
                            <img src={blankImage} alt="50% dalam" style={{left:'150px'}} id="item83889" className="pageItem " data-src="assets/images/item_83889.png" />
                            <img src={blankImage} alt="20 tahun)" style={{top:'31px'}} id="item83895" className="pageItem " data-src="assets/images/item_83895.png" />
                        </div>
                        <div data-ani="fadein-83969 1s linear 1" data-id="83969" id="item83969" data-hidestart="1" className="pageItem group hidden" alt="90%" style={{left:'668px',top:'800px',width:' 293px',height:'62px'}}>
                            <img src={blankImage} alt="90%" style={{left:'198px'}} id="item83938" className="pageItem " data-src="assets/images/item_83938.png" />
                            <img src={blankImage} alt="kambuh dalam 25 tahun" style={{top:'27px'}} id="item83961" className="pageItem " data-src="assets/images/item_83961.png" />
                        </div>
                        <div data-ani="fadein-84671 1s linear 1" data-id="84671" id="item84671" data-hidestart="1" className="pageItem group hidden" alt="panah 1" style={{left:'799px',top:'619px',width:' 16px',height:'12px'}}>
                            <img src={blankImage} alt="Polygon" style={{left:'5px'}} id="item84672" className="pageItem " data-src="assets/images/item_84672.png" />
                            <div id="item84673" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        </div>
                        <img src={blankImage} data-ani="fadein-4421 0.5s linear 1" data-id="4421" id="item4421" data-hidestart="1" className="pageItem hidden" alt="Striktura (33% saat terdiagnosis " style={{left:'668px',top:'582px'}} data-src="assets/images/item_4421.png" />
                        <img src={blankImage} data-ani="fadein-4487 1s linear 1" data-id="4487" id="item4487" data-hidestart="1" className="pageItem hidden" alt="50% ringan dan 19% berat saat terdiagnosis " style={{left:'668px',top:'773px'}} data-src="assets/images/item_4487.png" />
                        <img src={blankImage} data-ani="fadein-84777 0.5s linear 1" data-id="84777" id="item84777" data-hidestart="1" className="pageItem hidden" alt=" 187.000 perawatan di rumah sakit pada tahun 2010" style={{left:'1077px',top:'632px'}} data-src="assets/images/item_84777.png" />
                        <img src={blankImage} data-ani="fadein-84783 0.5s linear 1" data-id="84783" id="item84783" data-hidestart="1" className="pageItem hidden" alt=" 107.000 perawatan di rumah sakit pada tahun 2010" style={{left:'1075px',top:'839px'}} data-src="assets/images/item_84783.png" />
                        <button data-id="101540" name="icon back 8" onClick={handleOnClickPreviousPage} aria-label="icon back 8" id="item101540" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item101546" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item101547" className="pageItem " data-src="assets/images/item_101547.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item101549" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item101550" className="pageItem " data-src="assets/images/item_101550.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item101543" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item101544" className="pageItem " data-src="assets/images/item_101544.png" />
                            </div>
                        </button>
                        <button data-id="101552" name="icon next 8" onClick={handleOnClickNextPage} aria-label="icon next 8" id="item101552" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item101558" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item101559" className="pageItem " data-src="assets/images/item_101559.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item101562" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item101564" className="pageItem " data-src="assets/images/item_101564.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item101555" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item101556" className="pageItem " data-src="assets/images/item_101556.png" />
                            </div>
                        </button>
                        <button data-id="126533" name="button ulang 8" onClick={handleOnClickUlang} aria-label="button ulang 8" id="item126533" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item126545" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126546" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126547" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126548" className="pageItem " data-src="assets/images/item_126548.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126549" className="pageItem " data-src="assets/images/item_126549.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item126551" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126552" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#fa635e" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126554" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126555" className="pageItem " data-src="assets/images/item_126555.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126557" className="pageItem " data-src="assets/images/item_126557.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item126536" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126538" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126540" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126541" className="pageItem " data-src="assets/images/item_126541.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126543" className="pageItem " data-src="assets/images/item_126543.png" />
                                </div>
                            </div>
                        </button>
                        <button data-id="221207" name="icon beranda 74" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 74" id="item221207" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221215" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221216" className="pageItem " data-src="assets/images/item_221216.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221217" className="pageItem " data-src="assets/images/item_221217.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221219" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221220" className="pageItem " data-src="assets/images/item_221220.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221221" className="pageItem " data-src="assets/images/item_221221.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221210" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221212" className="pageItem " data-src="assets/images/item_221212.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221213" className="pageItem " data-src="assets/images/item_221213.png" />
                            </div>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Bab2P2;