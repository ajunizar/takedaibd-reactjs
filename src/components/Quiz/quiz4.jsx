import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Quiz4() {

    const navigate = useNavigate();

    const handleOnClickGoToQuiz5 = () => {
        window.location.href = '/quiz5'; // #54
    };
    //var referrer = document.referrer;
    //console.log("referrer url",referrer);
    const handleOnClickBack = () => {
        window.location.href = '/Quiz40';
    };
    const handleOnClickPreviousPage = () => {
        navigate(-1);
    };

    const handleOnClickGoToQuiz3 = () => {
        window.location.href = '/quiz3';
    }

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }


    //////////////////////////////////////
    /// #page 58 --- KUIS 4
    ////////////////////////////////////
    // imunosupresan
    const handleOnClickImunosupresan1 = event => {
        event.preventDefault();
        jQuery("#quiz4_opt1").val("0");
        go(event, [{ n: 1, link: 1, id: 214412, act: 'hide' }, { n: 1, link: 1, id: 214693, act: 'hide' }, { n: 1, link: 1, id: 214966, act: 'hide' }, { n: 1, link: 1, id: 215240, act: 'hide' }]);
    }
    const handleOnClickImunosupresan2 = event => {
        event.preventDefault();
        jQuery("#quiz4_opt1").val("0");
        go(event, [{ n: 1, link: 1, id: 212662, act: 'hide' }, { n: 1, link: 1, id: 214693, act: 'hide' }, { n: 1, link: 1, id: 214966, act: 'hide' }, { n: 1, link: 1, id: 215240, act: 'hide' }]);
    }
    const handleOnClickImunosupresan3 = event => {
        event.preventDefault();
        jQuery("#quiz4_opt1").val("1");
        go(event, [{ n: 1, link: 1, id: 212662, act: 'hide' }, { n: 1, link: 1, id: 214412, act: 'hide' }, { n: 1, link: 1, id: 214966, act: 'hide' }, { n: 1, link: 1, id: 215240, act: 'hide' }]);
    }
    const handleOnClickImunosupresan4 = event => {
        event.preventDefault();
        jQuery("#quiz4_opt1").val("0");
        go(event, [{ n: 1, link: 1, id: 212662, act: 'hide' }, { n: 1, link: 1, id: 214693, act: 'hide' }, { n: 1, link: 1, id: 214412, act: 'hide' }, { n: 1, link: 1, id: 215240, act: 'hide' }]);
    }
    const handleOnClickImunosupresan5 = event => {
        event.preventDefault();
        jQuery("#quiz4_opt1").val("0");
        go(event, [{ n: 1, link: 1, id: 212662, act: 'hide' }, { n: 1, link: 1, id: 214693, act: 'hide' }, { n: 1, link: 1, id: 214412, act: 'hide' }, { n: 1, link: 1, id: 214966, act: 'hide' }]);
    }


    // kortikosteroid
    const handleOnClickKortikosteroid1 = event => {
        event.preventDefault();
        jQuery("#quiz4_opt2").val("0");
        go(event, [{ n: 1, link: 1, id: 216323, act: 'hide' }, { n: 1, link: 1, id: 216487, act: 'hide' }, { n: 1, link: 1, id: 216651, act: 'hide' }, { n: 1, link: 1, id: 216811, act: 'hide' }]);
    }
    const handleOnClickKortikosteroid2 = event => {
        event.preventDefault();
        jQuery("#quiz4_opt2").val("0");
        go(event, [{ n: 1, link: 1, id: 216161, act: 'hide' }, { n: 1, link: 1, id: 216487, act: 'hide' }, { n: 1, link: 1, id: 216651, act: 'hide' }, { n: 1, link: 1, id: 216811, act: 'hide' }]);
    }
    const handleOnClickKortikosteroid3 = event => {
        event.preventDefault();
        jQuery("#quiz4_opt2").val("0");
        go(event, [{ n: 1, link: 1, id: 216161, act: 'hide' }, { n: 1, link: 1, id: 216323, act: 'hide' }, { n: 1, link: 1, id: 216651, act: 'hide' }, { n: 1, link: 1, id: 216811, act: 'hide' }]);
    }
    const handleOnClickKortikosteroid4 = event => {
        event.preventDefault();
        jQuery("#quiz4_opt2").val("1");
        go(event, [{ n: 1, link: 1, id: 216161, act: 'hide' }, { n: 1, link: 1, id: 216323, act: 'hide' }, { n: 1, link: 1, id: 216487, act: 'hide' }, { n: 1, link: 1, id: 216811, act: 'hide' }]);
    }
    const handleOnClickKortikosteroid5 = event => {
        event.preventDefault();
        jQuery("#quiz4_opt2").val("0");
        go(event, [{ n: 1, link: 1, id: 216161, act: 'hide' }, { n: 1, link: 1, id: 216323, act: 'hide' }, { n: 1, link: 1, id: 216487, act: 'hide' }, { n: 1, link: 1, id: 216651, act: 'hide' }]);
    }


    // aminosalisilat
    const handleOnClickAminosalisilat1 = event => {
        event.preventDefault();
        jQuery("#quiz4_opt3").val("0");
        go(event, [{ n: 1, link: 1, id: 215695, act: 'hide' }, { n: 1, link: 1, id: 215776, act: 'hide' }, { n: 1, link: 1, id: 215857, act: 'hide' }, { n: 1, link: 1, id: 215938, act: 'hide' }]);
    }
    const handleOnClickAminosalisilat2 = event => {
        event.preventDefault();
        jQuery("#quiz4_opt3").val("0");
        go(event, [{ n: 1, link: 1, id: 215613, act: 'hide' }, { n: 1, link: 1, id: 215776, act: 'hide' }, { n: 1, link: 1, id: 215857, act: 'hide' }, { n: 1, link: 1, id: 215938, act: 'hide' }]);
    }
    const handleOnClickAminosalisilat3 = event => {
        event.preventDefault();
        jQuery("#quiz4_opt3").val("0");
        go(event, [{ n: 1, link: 1, id: 215613, act: 'hide' }, { n: 1, link: 1, id: 215695, act: 'hide' }, { n: 1, link: 1, id: 215857, act: 'hide' }, { n: 1, link: 1, id: 215938, act: 'hide' }]);
    }
    const handleOnClickAminosalisilat4 = event => {
        event.preventDefault();
        jQuery("#quiz4_opt3").val("0");
        go(event, [{ n: 1, link: 1, id: 215613, act: 'hide' }, { n: 1, link: 1, id: 215695, act: 'hide' }, { n: 1, link: 1, id: 215776, act: 'hide' }, { n: 1, link: 1, id: 215938, act: 'hide' }]);
    }
    const handleOnClickAminosalisilat5 = event => {
        event.preventDefault();
        jQuery("#quiz4_opt3").val("1");
        go(event, [{ n: 1, link: 1, id: 215613, act: 'hide' }, { n: 1, link: 1, id: 215695, act: 'hide' }, { n: 1, link: 1, id: 215776, act: 'hide' }, { n: 1, link: 1, id: 215857, act: 'hide' }]);
    }


    // tindakan bedah
    const handleOnClickTindakanBedah1 = event => {
        event.preventDefault();
        jQuery("#quiz4_opt4").val("1");
        go(event, [{ n: 1, link: 1, id: 217149, act: 'hide' }, { n: 1, link: 1, id: 217227, act: 'hide' }, { n: 1, link: 1, id: 217308, act: 'hide' }, { n: 1, link: 1, id: 217389, act: 'hide' }]);
    }
    const handleOnClickTindakanBedah2 = event => {
        event.preventDefault();
        jQuery("#quiz4_opt4").val("0");
        go(event, [{ n: 1, link: 1, id: 217069, act: 'hide' }, { n: 1, link: 1, id: 217227, act: 'hide' }, { n: 1, link: 1, id: 217308, act: 'hide' }, { n: 1, link: 1, id: 217389, act: 'hide' }]);
    }
    const handleOnClickTindakanBedah3 = event => {
        event.preventDefault();
        jQuery("#quiz4_opt4").val("0");
        go(event, [{ n: 1, link: 1, id: 217069, act: 'hide' }, { n: 1, link: 1, id: 217149, act: 'hide' }, { n: 1, link: 1, id: 217308, act: 'hide' }, { n: 1, link: 1, id: 217389, act: 'hide' }]);
    }
    const handleOnClickTindakanBedah4 = event => {
        event.preventDefault();
        jQuery("#quiz4_opt4").val("0");
        go(event, [{ n: 1, link: 1, id: 217069, act: 'hide' }, { n: 1, link: 1, id: 217149, act: 'hide' }, { n: 1, link: 1, id: 217227, act: 'hide' }, { n: 1, link: 1, id: 217389, act: 'hide' }]);
    }
    const handleOnClickTindakanBedah5 = event => {
        event.preventDefault();
        jQuery("#quiz4_opt4").val("0");
        go(event, [{ n: 1, link: 1, id: 217069, act: 'hide' }, { n: 1, link: 1, id: 217149, act: 'hide' }, { n: 1, link: 1, id: 217227, act: 'hide' }, { n: 1, link: 1, id: 217308, act: 'hide' }]);
    }


    // agen biologis dan small molecule
    const handleOnClickAgenBiologis1 = event => {
        event.preventDefault();
        jQuery("#quiz4_opt5").val("0");
        go(event, [{ n: 1, link: 1, id: 217598, act: 'hide' }, { n: 1, link: 1, id: 217679, act: 'hide' }, { n: 1, link: 1, id: 217762, act: 'hide' }, { n: 1, link: 1, id: 217844, act: 'hide' }]);
    }
    const handleOnClickAgenBiologis2 = event => {
        event.preventDefault();
        jQuery("#quiz4_opt5").val("1");
        go(event, [{ n: 1, link: 1, id: 217518, act: 'hide' }, { n: 1, link: 1, id: 217679, act: 'hide' }, { n: 1, link: 1, id: 217762, act: 'hide' }, { n: 1, link: 1, id: 217844, act: 'hide' }]);
    }
    const handleOnClickAgenBiologis3 = event => {
        event.preventDefault();
        jQuery("#quiz4_opt5").val("0");
        go(event, [{ n: 1, link: 1, id: 217518, act: 'hide' }, { n: 1, link: 1, id: 217598, act: 'hide' }, { n: 1, link: 1, id: 217762, act: 'hide' }, { n: 1, link: 1, id: 217844, act: 'hide' }]);
    }
    const handleOnClickAgenBiologis4 = event => {
        event.preventDefault();
        jQuery("#quiz4_opt5").val("0");
        go(event, [{ n: 1, link: 1, id: 217518, act: 'hide' }, { n: 1, link: 1, id: 217598, act: 'hide' }, { n: 1, link: 1, id: 217679, act: 'hide' }, { n: 1, link: 1, id: 217844, act: 'hide' }]);
    }
    const handleOnClickAgenBiologis5 = event => {
        event.preventDefault();
        jQuery("#quiz4_opt5").val("0");
        go(event, [{ n: 1, link: 1, id: 217518, act: 'hide' }, { n: 1, link: 1, id: 217598, act: 'hide' }, { n: 1, link: 1, id: 217679, act: 'hide' }, { n: 1, link: 1, id: 217762, act: 'hide' }]);
    }


    // Cek Jawaban
    const handleOnClickCekJawaban = (event) => {
        event.preventDefault();
        var quiz4ansvalues = jQuery('input[name="quiz4answer[]"]').map(function () {
            return jQuery(this).val();
        }).get();

        const occurrences = quiz4ansvalues.filter(item => item === '0').length;
        const occurrences2 = quiz4ansvalues.filter(item => item === '1').length;
        const occurrences3 = quiz4ansvalues.filter(item => item === '').length;

        if (occurrences == 0 && occurrences2 == 5 && occurrences3 == 0) {

            jQuery('#item226997 audio')[0].play();
            // orang dgn jawaban benar muncul
            go(event, [{ n: 1, link: 1, id: 213449, act: 'play' }, { n: 1, link: 1, id: 213318, act: 'hide' }]);
            // soal selanjutnya muncul, cek penjelasan hilang
            go(event, [{ n: 1, link: 1, id: 212484, act: 'play' }, { n: 1, link: 1, id: 212564, act: 'hide' }]);
            // mata
            go(event, [{ n: 1, link: 1, id: 227659, act: 'hide' }]);
            jQuery('#item215516 video')[0].play();
        } else {
            // salah
            jQuery('#item227001 audio')[0].play();
            // orang dgn jawaban salah muncul
            go(event, [{ n: 1, link: 1, id: 213318, act: 'play' }, { n: 1, link: 1, id: 213449, act: 'hide' }]);
            // cek penjelasan muncul, soal selanjutnya hilang
            go(event, [{ n: 1, link: 1, id: 212564, act: 'play' }, { n: 1, link: 1, id: 212484, act: 'hide' }]);
            // salah - mata 2 muncul 
            go(event, [{ n: 1, link: 1, id: 227659, act: 'play' }]);
            jQuery('#item215521 video')[0].play();
        }
    };



    const handleOnClickGoToCekPenjelasan = (event) => {
        window.location.href = '/quiz4Penjelasan';
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
                <li className="page" data-name="58">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{del:18,n:1,link:1,id:217057,act:'play'},{n:1,link:1,id:212660,act:'play'},{n:1,link:1,id:212662,act:'play'},{n:1,link:1,id:214412,act:'play'},{n:1,link:1,id:214693,act:'play'},{n:1,link:1,id:214966,act:'play'},{n:1,id:215240,sn:1,act:'play'},{n:1,link:1,id:217058,act:'play'},{n:1,link:1,id:215605,act:'play'},{n:1,link:1,id:215613,act:'play'},{n:1,link:1,id:215695,act:'play'},{n:1,link:1,id:215776,act:'play'},{n:1,link:1,id:215857,act:'play'},{n:1,id:215938,sn:1,act:'play'},{n:1,link:1,id:217056,act:'play'},{n:1,link:1,id:216145,act:'play'},{n:1,link:1,id:216161,act:'play'},{n:1,link:1,id:216323,act:'play'},{n:1,link:1,id:216487,act:'play'},{n:1,link:1,id:216651,act:'play'},{n:1,id:216811,sn:1,act:'play'},{n:1,link:1,id:217059,act:'play'},{n:1,link:1,id:217062,act:'play'},{n:1,link:1,id:217069,act:'play'},{n:1,link:1,id:217149,act:'play'},{n:1,link:1,id:217227,act:'play'},{n:1,link:1,id:217308,act:'play'},{n:1,id:217389,sn:1,act:'play'},{n:1,link:1,id:217060,act:'play'},{n:1,link:1,id:217510,act:'play'},{n:1,link:1,id:217518,act:'play'},{n:1,link:1,id:217598,act:'play'},{n:1,link:1,id:217679,act:'play'},{n:1,link:1,id:217762,act:'play'},{n:1,id:217844,sn:1,act:'play'}], 'pageload');" style={{ width: '1920px', height: '1080px' }}>
                        <div id="item226997" className="pageItem" style={{ height: '60px', width: '60px', left: '142px', top: '225px' }} alt="Sound">
                            <audio data-id="226997" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/jawaban benar.mp3" />
                            </audio>
                        </div>
                        <div id="item227001" className="pageItem" style={{ height: '60px', width: '60px', left: '142px', top: '157px' }} alt="Sound">
                            <audio data-id="227001" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/jawaban salah.mp3" />
                            </audio>
                        </div>
                        <div id="item215516" className="pageItem" alt="Movie" style={{ left: '45px', top: '44px' }}>
                            <video width="640" height="360" data-id="215516" data-stoplast="1" data-nopause="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/Correct Answer sound effect.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div id="item215521" className="pageItem" alt="Movie" style={{ left: '9px', top: '7px' }}>
                            <video width="640" height="360" data-id="215521" data-stoplast="1" data-nopause="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/Incorrect Answer sound effect.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div id="item227453" className="pageItem" alt="Movie" style={{ top: '-1px' }}>
                            <video width="1920" height="1400" data-id="227453" data-autoplay="1" data-autodelay="0" data-overlap="1" data-stoplast="1" webkit-playsinline="playsinline" playsInline="playsinline" className="mejs-none">
                                <source src="assets/media/quiz 4.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div id="item216145" data-ani="appear-216145 0.6s linear 1" data-id="216145" data-hidestart="1" className="pageItem hidden" alt="rectangle 3">&nbsp;</div>
                        <div id="item212660" data-ani="appear-212660 0.6s linear 1" data-id="212660" data-hidestart="1" className="pageItem hidden" alt="rectangle 1">&nbsp;</div>
                        <div id="item217062" data-ani="appear-217062 0.6s linear 1" data-id="217062" data-hidestart="1" className="pageItem hidden" alt="rectangle 4">&nbsp;</div>
                        <div id="item217510" data-ani="appear-217510 0.6s linear 1" data-id="217510" data-hidestart="1" className="pageItem hidden" alt="rectangle 5">&nbsp;</div>
                        <div id="item215605" data-ani="appear-215605 0.6s linear 1" data-id="215605" data-hidestart="1" className="pageItem hidden" alt="rectangle 2">&nbsp;</div>
                        <button data-ani="appear-215545 0.6s linear 1" data-id="215545" id="item215545" data-hidestart="1" className="pageItem hidden" name="kotak benar" aria-label="kotak benar">
                            <div className="pageItem state btn-off">
                                <div id="item215539" alt="rectangle benar" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="appear-216147 0.6s linear 1" data-id="216147" id="item216147" data-hidestart="1" className="pageItem hidden" name="kotak benar 2" aria-label="kotak benar 2">
                            <div className="pageItem state btn-off">
                                <div id="item216149" alt="rectangle benar" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="appear-217063 0.6s linear 1" data-id="217063" id="item217063" data-hidestart="1" className="pageItem hidden" name="kotak benar 3" aria-label="kotak benar 3">
                            <div className="pageItem state btn-off">
                                <div id="item217065" alt="rectangle benar" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="appear-217511 0.6s linear 1" data-id="217511" id="item217511" data-hidestart="1" className="pageItem hidden" name="kotak benar 4" aria-label="kotak benar 4">
                            <div className="pageItem state btn-off">
                                <div id="item217514" alt="rectangle benar" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="appear-215606 0.6s linear 1" data-id="215606" id="item215606" data-hidestart="1" className="pageItem hidden" name="kotak benar 1" aria-label="kotak benar 1">
                            <div className="pageItem state btn-off">
                                <div id="item215608" alt="rectangle benar" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="appear-215544 0.6s linear 1" data-id="215544" id="item215544" data-hidestart="1" className="pageItem hidden" name="kotak salah" aria-label="kotak salah">
                            <div className="pageItem state btn-off">
                                <div id="item215541" alt="rectangle salah" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="appear-216153 0.6s linear 1" data-id="216153" id="item216153" data-hidestart="1" className="pageItem hidden" name="kotak salah 2" aria-label="kotak salah 2">
                            <div className="pageItem state btn-off">
                                <div id="item216155" alt="rectangle salah" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="appear-217066 0.6s linear 1" data-id="217066" id="item217066" data-hidestart="1" className="pageItem hidden" name="kotak salah 3" aria-label="kotak salah 3">
                            <div className="pageItem state btn-off">
                                <div id="item217068" alt="rectangle salah" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="appear-217515 0.6s linear 1" data-id="217515" id="item217515" data-hidestart="1" className="pageItem hidden" name="kotak salah 4" aria-label="kotak salah 4">
                            <div className="pageItem state btn-off">
                                <div id="item217517" alt="rectangle salah" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="appear-215609 0.6s linear 1" data-id="215609" id="item215609" data-hidestart="1" className="pageItem hidden" name="kotak salah 1" aria-label="kotak salah 1">
                            <div className="pageItem state btn-off">
                                <div id="item215611" alt="rectangle salah" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="appear-212662 0.6s linear 1" data-id="212662" id="item212662" data-hidestart="1" className="pageItem has-on has-down hidden" name="11" aria-label="11" onClick={handleOnClickImunosupresan1}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item212691" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#7c92ca" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '7px', top: '2px' }} id="item212692" className="pageItem " data-src="assets/images/item_212692.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item212665" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '12px', top: '2px' }} id="item212667" className="pageItem " data-src="assets/images/item_212667.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item212716" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" fill="#999999" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '7px', top: '2px' }} id="item212718" className="pageItem " data-src="assets/images/item_212718.png" />
                            </div>
                        </button>
                        <button data-ani="appear-216161 0.6s linear 1" data-id="216161" id="item216161" data-hidestart="1" className="pageItem has-on has-down hidden" name="31" aria-label="31" onClick={handleOnClickKortikosteroid1}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item216193" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#7c92ca" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '7px', top: '2px' }} id="item216194" className="pageItem " data-src="assets/images/item_216194.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item216168" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '12px', top: '2px' }} id="item216169" className="pageItem " data-src="assets/images/item_216169.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item216218" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" fill="#999999" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '7px', top: '2px' }} id="item216219" className="pageItem " data-src="assets/images/item_216219.png" />
                            </div>
                        </button>
                        <button data-ani="appear-217069 0.6s linear 1" data-id="217069" id="item217069" data-hidestart="1" className="pageItem has-on has-down hidden" name="41" aria-label="41" onClick={handleOnClickTindakanBedah1}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item217098" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#7c92ca" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '7px', top: '2px' }} id="item217099" className="pageItem " data-src="assets/images/item_217099.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item217073" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#45b86b" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '12px', top: '2px' }} id="item217074" className="pageItem " data-src="assets/images/item_217074.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item217125" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" fill="#999999" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '7px', top: '2px' }} id="item217126" className="pageItem " data-src="assets/images/item_217126.png" />
                            </div>
                        </button>
                        <button data-ani="appear-217518 0.6s linear 1" data-id="217518" id="item217518" data-hidestart="1" className="pageItem has-on has-down hidden" name="51" aria-label="51" onClick={handleOnClickAgenBiologis1}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item217549" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#7c92ca" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '7px', top: '2px' }} id="item217550" className="pageItem " data-src="assets/images/item_217550.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item217524" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '12px', top: '2px' }} id="item217525" className="pageItem " data-src="assets/images/item_217525.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item217574" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" fill="#999999" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '7px', top: '2px' }} id="item217575" className="pageItem " data-src="assets/images/item_217575.png" />
                            </div>
                        </button>
                        <button data-ani="appear-215613 0.6s linear 1" data-id="215613" id="item215613" data-hidestart="1" className="pageItem has-on has-down hidden" name="21" aria-label="21" onClick={handleOnClickAminosalisilat1}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item215646" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#7c92ca" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '7px', top: '2px' }} id="item215647" className="pageItem " data-src="assets/images/item_215647.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item215620" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '12px', top: '2px' }} id="item215621" className="pageItem " data-src="assets/images/item_215621.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item215671" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" fill="#999999" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '7px', top: '2px' }} id="item215672" className="pageItem " data-src="assets/images/item_215672.png" />
                            </div>
                        </button>
                        <button data-ani="appear-214412 0.6s linear 1" data-id="214412" id="item214412" data-hidestart="1" className="pageItem has-down has-on hidden" name="12" aria-label="12" onClick={handleOnClickImunosupresan2}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item213206" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#6d81c0" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '12px', top: '2px' }} id="item213208" className="pageItem " data-src="assets/images/item_213208.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item214579" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#999999" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '12px', top: '2px' }} id="item214580" className="pageItem " data-src="assets/images/item_214580.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item214604" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '12px', top: '2px' }} id="item214605" className="pageItem " data-src="assets/images/item_214605.png" />
                            </div>
                        </button>
                        <button data-ani="appear-216323 0.6s linear 1" data-id="216323" id="item216323" data-hidestart="1" className="pageItem has-down has-on hidden" name="32" aria-label="32" onClick={handleOnClickKortikosteroid2}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item216356" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#6d81c0" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '12px', top: '2px' }} id="item216357" className="pageItem " data-src="assets/images/item_216357.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item216381" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#999999" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '12px', top: '2px' }} id="item216382" className="pageItem " data-src="assets/images/item_216382.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item216330" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '12px', top: '2px' }} id="item216332" className="pageItem " data-src="assets/images/item_216332.png" />
                            </div>
                        </button>
                        <button data-ani="appear-217149 0.6s linear 1" data-id="217149" id="item217149" data-hidestart="1" className="pageItem has-down has-on hidden" name="42" aria-label="42" onClick={handleOnClickTindakanBedah2}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item217178" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#6d81c0" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '12px', top: '2px' }} id="item217179" className="pageItem " data-src="assets/images/item_217179.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item217203" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#999999" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '12px', top: '2px' }} id="item217204" className="pageItem " data-src="assets/images/item_217204.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item217153" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '12px', top: '2px' }} id="item217154" className="pageItem " data-src="assets/images/item_217154.png" />
                            </div>
                        </button>
                        <button data-ani="appear-217598 0.6s linear 1" data-id="217598" id="item217598" data-hidestart="1" className="pageItem has-down has-on hidden" name="52" aria-label="52" onClick={handleOnClickAgenBiologis2}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item217630" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#6d81c0" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '12px', top: '2px' }} id="item217631" className="pageItem " data-src="assets/images/item_217631.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item217655" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#999999" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '12px', top: '2px' }} id="item217656" className="pageItem " data-src="assets/images/item_217656.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item217605" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#45b86b" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '12px', top: '2px' }} id="item217606" className="pageItem " data-src="assets/images/item_217606.png" />
                            </div>
                        </button>
                        <button data-ani="appear-215695 0.6s linear 1" data-id="215695" id="item215695" data-hidestart="1" className="pageItem has-down has-on hidden" name="22" aria-label="22" onClick={handleOnClickAminosalisilat2}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item215727" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#6d81c0" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '12px', top: '2px' }} id="item215728" className="pageItem " data-src="assets/images/item_215728.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item215752" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#999999" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '12px', top: '2px' }} id="item215753" className="pageItem " data-src="assets/images/item_215753.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item215702" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '12px', top: '2px' }} id="item215703" className="pageItem " data-src="assets/images/item_215703.png" />
                            </div>
                        </button>
                        <button data-ani="appear-214693 0.6s linear 1" data-id="214693" id="item214693" data-hidestart="1" className="pageItem has-on has-down hidden" name="13" aria-label="13" onClick={handleOnClickImunosupresan3}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item213233" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#3658a8" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '12px', top: '2px' }} id="item213234" className="pageItem " data-src="assets/images/item_213234.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item214724" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#45b86b" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '12px', top: '2px' }} id="item214725" className="pageItem " data-src="assets/images/item_214725.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item214834" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#999999" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '12px', top: '2px' }} id="item214835" className="pageItem " data-src="assets/images/item_214835.png" />
                            </div>
                        </button>
                        <button data-ani="appear-216487 0.6s linear 1" data-id="216487" id="item216487" data-hidestart="1" className="pageItem has-on has-down hidden" name="33" aria-label="33" onClick={handleOnClickKortikosteroid3}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item216519" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#3658a8" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '12px', top: '2px' }} id="item216520" className="pageItem " data-src="assets/images/item_216520.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item216493" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '12px', top: '2px' }} id="item216494" className="pageItem " data-src="assets/images/item_216494.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item216545" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#999999" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '12px', top: '2px' }} id="item216546" className="pageItem " data-src="assets/images/item_216546.png" />
                            </div>
                        </button>
                        <button data-ani="appear-217227 0.6s linear 1" data-id="217227" id="item217227" data-hidestart="1" className="pageItem has-on has-down hidden" name="43" aria-label="43" onClick={handleOnClickTindakanBedah3}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item217259" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#3658a8" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '12px', top: '2px' }} id="item217260" className="pageItem " data-src="assets/images/item_217260.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item217234" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '12px', top: '2px' }} id="item217235" className="pageItem " data-src="assets/images/item_217235.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item217284" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#999999" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '12px', top: '2px' }} id="item217285" className="pageItem " data-src="assets/images/item_217285.png" />
                            </div>
                        </button>
                        <button data-ani="appear-217679 0.6s linear 1" data-id="217679" id="item217679" data-hidestart="1" className="pageItem has-on has-down hidden" name="53" aria-label="53" onClick={handleOnClickAgenBiologis3}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item217712" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#3658a8" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '12px', top: '2px' }} id="item217714" className="pageItem " data-src="assets/images/item_217714.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item217687" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '12px', top: '2px' }} id="item217688" className="pageItem " data-src="assets/images/item_217688.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item217738" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#999999" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '12px', top: '2px' }} id="item217739" className="pageItem " data-src="assets/images/item_217739.png" />
                            </div>
                        </button>
                        <button data-ani="appear-215776 0.6s linear 1" data-id="215776" id="item215776" data-hidestart="1" className="pageItem has-on has-down hidden" name="23" aria-label="23" onClick={handleOnClickAminosalisilat3}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item215807" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#3658a8" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '12px', top: '2px' }} id="item215808" className="pageItem " data-src="assets/images/item_215808.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item215782" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '12px', top: '2px' }} id="item215783" className="pageItem " data-src="assets/images/item_215783.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item215833" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#999999" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '12px', top: '2px' }} id="item215834" className="pageItem " data-src="assets/images/item_215834.png" />
                            </div>
                        </button>
                        <button data-ani="appear-214966 0.6s linear 1" data-id="214966" id="item214966" data-hidestart="1" className="pageItem has-on has-down hidden" name="14" aria-label="14" onClick={handleOnClickImunosupresan4}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item213258" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#334391" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="4" style={{ left: '12px', top: '2px' }} id="item213259" className="pageItem " data-src="assets/images/item_213259.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item214972" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="4" style={{ left: '12px', top: '2px' }} id="item214973" className="pageItem " data-src="assets/images/item_214973.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item215203" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#999999" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="4" style={{ left: '12px', top: '2px' }} id="item215205" className="pageItem " data-src="assets/images/item_215205.png" />
                            </div>
                        </button>
                        <button data-ani="appear-216651 0.6s linear 1" data-id="216651" id="item216651" data-hidestart="1" className="pageItem has-on has-down hidden" name="34" aria-label="34" onClick={handleOnClickKortikosteroid4}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item216683" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#334391" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="4" style={{ left: '12px', top: '2px' }} id="item216684" className="pageItem " data-src="assets/images/item_216684.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item216658" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#45b86b" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="4" style={{ left: '12px', top: '2px' }} id="item216659" className="pageItem " data-src="assets/images/item_216659.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item216708" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#999999" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="4" style={{ left: '12px', top: '2px' }} id="item216709" className="pageItem " data-src="assets/images/item_216709.png" />
                            </div>
                        </button>
                        <button data-ani="appear-217308 0.6s linear 1" data-id="217308" id="item217308" data-hidestart="1" className="pageItem has-on has-down hidden" name="44" aria-label="44" onClick={handleOnClickTindakanBedah4}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item217340" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#334391" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="4" style={{ left: '12px', top: '2px' }} id="item217341" className="pageItem " data-src="assets/images/item_217341.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item217315" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="4" style={{ left: '12px', top: '2px' }} id="item217316" className="pageItem " data-src="assets/images/item_217316.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item217365" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#999999" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="4" style={{ left: '12px', top: '2px' }} id="item217366" className="pageItem " data-src="assets/images/item_217366.png" />
                            </div>
                        </button>
                        <button data-ani="appear-217762 0.6s linear 1" data-id="217762" id="item217762" data-hidestart="1" className="pageItem has-on has-down hidden" name="54" aria-label="54" onClick={handleOnClickAgenBiologis4}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item217795" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#334391" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="4" style={{ left: '12px', top: '2px' }} id="item217796" className="pageItem " data-src="assets/images/item_217796.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item217770" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="4" style={{ left: '12px', top: '2px' }} id="item217771" className="pageItem " data-src="assets/images/item_217771.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item217820" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#999999" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="4" style={{ left: '12px', top: '2px' }} id="item217821" className="pageItem " data-src="assets/images/item_217821.png" />
                            </div>
                        </button>
                        <button data-ani="appear-215857 0.6s linear 1" data-id="215857" id="item215857" data-hidestart="1" className="pageItem has-on has-down hidden" name="24" aria-label="24" onClick={handleOnClickAminosalisilat4}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item215889" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#334391" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="4" style={{ left: '12px', top: '2px' }} id="item215890" className="pageItem " data-src="assets/images/item_215890.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item215864" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="4" style={{ left: '12px', top: '2px' }} id="item215865" className="pageItem " data-src="assets/images/item_215865.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item215914" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#999999" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="4" style={{ left: '12px', top: '2px' }} id="item215915" className="pageItem " data-src="assets/images/item_215915.png" />
                            </div>
                        </button>
                        <button data-ani="appear-215240 0.6s linear 1" data-id="215240" id="item215240" data-hidestart="1" className="pageItem has-on has-down hidden" name="15" aria-label="15" onClick={handleOnClickImunosupresan5}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item213283" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#332e78" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="5" style={{ left: '12px', top: '2px' }} id="item213284" className="pageItem " data-src="assets/images/item_213284.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item215249" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="5" style={{ left: '12px', top: '2px' }} id="item215250" className="pageItem " data-src="assets/images/item_215250.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item215478" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#999999" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="5" style={{ left: '12px', top: '2px' }} id="item215479" className="pageItem " data-src="assets/images/item_215479.png" />
                            </div>
                        </button>
                        <button data-ani="appear-216811 0.6s linear 1" data-id="216811" id="item216811" data-hidestart="1" className="pageItem has-on has-down hidden" name="35" aria-label="35" onClick={handleOnClickKortikosteroid5}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item216843" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#332e78" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="5" style={{ left: '12px', top: '2px' }} id="item216844" className="pageItem " data-src="assets/images/item_216844.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item216868" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="5" style={{ left: '12px', top: '2px' }} id="item216869" className="pageItem " data-src="assets/images/item_216869.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item216818" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#999999" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="5" style={{ left: '12px', top: '2px' }} id="item216819" className="pageItem " data-src="assets/images/item_216819.png" />
                            </div>
                        </button>
                        <button data-ani="appear-217389 0.6s linear 1" data-id="217389" id="item217389" data-hidestart="1" className="pageItem has-on has-down hidden" name="45" aria-label="45" onClick={handleOnClickTindakanBedah5}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item217421" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#332e78" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="5" style={{ left: '12px', top: '2px' }} id="item217422" className="pageItem " data-src="assets/images/item_217422.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item217446" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="5" style={{ left: '12px', top: '2px' }} id="item217447" className="pageItem " data-src="assets/images/item_217447.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item217396" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#999999" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="5" style={{ left: '12px', top: '2px' }} id="item217397" className="pageItem " data-src="assets/images/item_217397.png" />
                            </div>
                        </button>
                        <button data-ani="appear-217844 0.6s linear 1" data-id="217844" id="item217844" data-hidestart="1" className="pageItem has-on has-down hidden" name="55" aria-label="55" onClick={handleOnClickAgenBiologis5}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item217877" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#332e78" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="5" style={{ left: '12px', top: '2px' }} id="item217878" className="pageItem " data-src="assets/images/item_217878.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item217902" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="5" style={{ left: '12px', top: '2px' }} id="item217903" className="pageItem " data-src="assets/images/item_217903.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item217851" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#999999" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="5" style={{ left: '12px', top: '2px' }} id="item217852" className="pageItem " data-src="assets/images/item_217852.png" />
                            </div>
                        </button>
                        <button data-ani="appear-215938 0.6s linear 1" data-id="215938" id="item215938" data-hidestart="1" className="pageItem has-on has-down hidden" name="25" aria-label="25" onClick={handleOnClickAminosalisilat5}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item215970" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#332e78" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="5" style={{ left: '12px', top: '2px' }} id="item215971" className="pageItem " data-src="assets/images/item_215971.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item215995" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#45b86b" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="5" style={{ left: '12px', top: '2px' }} id="item215996" className="pageItem " data-src="assets/images/item_215996.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item215945" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.84" cy="18.71" rx="18.84" ry="18.71" stroke="" strokeWidth="1" fill="#999999" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="5" style={{ left: '12px', top: '2px' }} id="item215946" className="pageItem " data-src="assets/images/item_215946.png" />
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-213449 1s cubic-bezier(.2,.6,.35,1) 1" data-id="213449" id="item213449" data-hidestart="1" className="pageItem hidden" name="jawaban benar 7" aria-label="jawaban benar 7">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" style={{ top: '59px' }} id="item213451" className="pageItem ">
                                    <svg version="1.1" width="284" height="284" >
                                        <ellipse cx="141.62" cy="141.62" rx="141.62" ry="141.62" fill="#fff" />
                                    </svg>
                                </div>
                                <div alt="Group" style={{ left: '260px', top: '60px' }} id="item213452" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" id="item213453" className="pageItem " data-src="assets/images/item_213453.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '3px', top: '93px' }} id="item213455" className="pageItem " data-src="assets/images/item_213455.png" />
                                </div>
                                <img src={blankImage} alt="Jawaban Kamu Benar! " style={{ left: '270px', top: '80px' }} id="item213456" className="pageItem " data-src="assets/images/item_213456.png" />
                                <div alt="Group" style={{ left: '30px' }} id="item213479" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '90px' }} id="item213480" className="pageItem " data-src="assets/images/item_213480.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '105px', top: '80px' }} id="item213481" className="pageItem " data-src="assets/images/item_213481.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '30px', top: '256px' }} id="item213482" className="pageItem " data-src="assets/images/item_213482.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '192px', top: '48px' }} id="item213483" className="pageItem " data-src="assets/images/item_213483.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '201px', top: '51px' }} id="item213485" className="pageItem " data-src="assets/images/item_213485.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '163px', top: '48px' }} id="item213486" className="pageItem " data-src="assets/images/item_213486.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '174px', top: '68px' }} id="item213487" className="pageItem " data-src="assets/images/item_213487.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '163px', top: '48px' }} id="item213488" className="pageItem " data-src="assets/images/item_213488.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '192px', top: '48px' }} id="item213489" className="pageItem " data-src="assets/images/item_213489.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '197px', top: '51px' }} id="item213490" className="pageItem " data-src="assets/images/item_213490.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '192px', top: '62px' }} id="item213491" className="pageItem " data-src="assets/images/item_213491.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '191px', top: '55px' }} id="item213492" className="pageItem " data-src="assets/images/item_213492.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '199px', top: '57px' }} id="item213493" className="pageItem " data-src="assets/images/item_213493.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '197px', top: '65px' }} id="item213494" className="pageItem " data-src="assets/images/item_213494.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '201px', top: '72px' }} id="item213495" className="pageItem " data-src="assets/images/item_213495.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '205px', top: '67px' }} id="item213496" className="pageItem " data-src="assets/images/item_213496.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '183px', top: '66px' }} id="item213497" className="pageItem " data-src="assets/images/item_213497.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '177px', top: '73px' }} id="item213498" className="pageItem " data-src="assets/images/item_213498.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '180px', top: '93px' }} id="item213499" className="pageItem " data-src="assets/images/item_213499.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '176px', top: '67px' }} id="item213500" className="pageItem " data-src="assets/images/item_213500.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '176px', top: '65px' }} id="item213501" className="pageItem " data-src="assets/images/item_213501.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '174px', top: '67px' }} id="item213502" className="pageItem " data-src="assets/images/item_213502.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '184px', top: '77px' }} id="item213503" className="pageItem " data-src="assets/images/item_213503.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '183px', top: '77px' }} id="item213504" className="pageItem " data-src="assets/images/item_213504.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '101px', top: '22px' }} id="item213507" className="pageItem " data-src="assets/images/item_213507.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '101px', top: '23px' }} id="item213508" className="pageItem " data-src="assets/images/item_213508.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '101px', top: '28px' }} id="item213509" className="pageItem " data-src="assets/images/item_213509.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '68px', top: '57px' }} id="item213510" className="pageItem " data-src="assets/images/item_213510.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '80px', top: '57px' }} id="item213511" className="pageItem " data-src="assets/images/item_213511.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '56px', top: '93px' }} id="item213512" className="pageItem " data-src="assets/images/item_213512.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '60px', top: '40px' }} id="item213513" className="pageItem " data-src="assets/images/item_213513.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '108px', top: '42px' }} id="item213514" className="pageItem " data-src="assets/images/item_213514.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '111px', top: '42px' }} id="item213515" className="pageItem " data-src="assets/images/item_213515.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '61px' }} id="item213516" className="pageItem " data-src="assets/images/item_213516.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '13px' }} id="item213517" className="pageItem " data-src="assets/images/item_213517.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '88px', top: '33px' }} id="item213519" className="pageItem " data-src="assets/images/item_213519.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '65px', top: '33px' }} id="item213520" className="pageItem " data-src="assets/images/item_213520.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '13px' }} id="item213521" className="pageItem " data-src="assets/images/item_213521.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '76px', top: '52px' }} id="item213522" className="pageItem " data-src="assets/images/item_213522.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '66px', top: '39px' }} id="item213524" className="pageItem " data-src="assets/images/item_213524.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '66px', top: '39px' }} id="item213525" className="pageItem " data-src="assets/images/item_213525.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '65px', top: '39px' }} id="item213529" className="pageItem " data-src="assets/images/item_213529.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '66px', top: '37px' }} id="item213532" className="pageItem " data-src="assets/images/item_213532.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '39px' }} id="item213533" className="pageItem " data-src="assets/images/item_213533.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '39px' }} id="item213534" className="pageItem " data-src="assets/images/item_213534.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '39px' }} id="item213538" className="pageItem " data-src="assets/images/item_213538.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '41px' }} id="item213539" className="pageItem " data-src="assets/images/item_213539.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '66px', top: '41px' }} id="item213540" className="pageItem " data-src="assets/images/item_213540.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '37px' }} id="item213541" className="pageItem " data-src="assets/images/item_213541.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '33px' }} id="item213542" className="pageItem " data-src="assets/images/item_213542.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '32px' }} id="item213543" className="pageItem " data-src="assets/images/item_213543.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '76px', top: '43px' }} id="item213544" className="pageItem " data-src="assets/images/item_213544.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '74px', top: '37px' }} id="item213545" className="pageItem " data-src="assets/images/item_213545.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '85px', top: '38px' }} id="item213546" className="pageItem " data-src="assets/images/item_213546.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '97px', top: '37px' }} id="item213547" className="pageItem " data-src="assets/images/item_213547.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '100px', top: '37px' }} id="item213548" className="pageItem " data-src="assets/images/item_213548.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '90px', top: '40px' }} id="item213549" className="pageItem " data-src="assets/images/item_213549.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '94px', top: '43px' }} id="item213550" className="pageItem " data-src="assets/images/item_213550.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '99px', top: '40px' }} id="item213551" className="pageItem " data-src="assets/images/item_213551.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '41px' }} id="item213552" className="pageItem " data-src="assets/images/item_213552.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '90px', top: '38px' }} id="item213554" className="pageItem " data-src="assets/images/item_213554.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '93px', top: '37px' }} id="item213555" className="pageItem " data-src="assets/images/item_213555.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '97px', top: '37px' }} id="item213563" className="pageItem " data-src="assets/images/item_213563.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '85px', top: '38px' }} id="item213564" className="pageItem " data-src="assets/images/item_213564.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '88px', top: '38px' }} id="item213565" className="pageItem " data-src="assets/images/item_213565.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '39px' }} id="item213566" className="pageItem " data-src="assets/images/item_213566.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '92px', top: '39px' }} id="item213567" className="pageItem " data-src="assets/images/item_213567.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '94px', top: '40px' }} id="item213568" className="pageItem " data-src="assets/images/item_213568.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '39px' }} id="item213570" className="pageItem " data-src="assets/images/item_213570.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '37px' }} id="item213571" className="pageItem " data-src="assets/images/item_213571.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '85px', top: '37px' }} id="item213572" className="pageItem " data-src="assets/images/item_213572.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '59px', top: '37px' }} id="item213573" className="pageItem " data-src="assets/images/item_213573.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '60px', top: '43px' }} id="item213574" className="pageItem " data-src="assets/images/item_213574.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '62px', top: '37px' }} id="item213575" className="pageItem " data-src="assets/images/item_213575.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '38px' }} id="item213576" className="pageItem " data-src="assets/images/item_213576.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '68px', top: '38px' }} id="item213577" className="pageItem " data-src="assets/images/item_213577.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '37px' }} id="item213578" className="pageItem " data-src="assets/images/item_213578.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '69px', top: '41px' }} id="item213579" className="pageItem " data-src="assets/images/item_213579.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '70px', top: '40px' }} id="item213580" className="pageItem " data-src="assets/images/item_213580.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '71px', top: '40px' }} id="item213581" className="pageItem " data-src="assets/images/item_213581.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '73px', top: '39px' }} id="item213583" className="pageItem " data-src="assets/images/item_213583.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '69px', top: '38px' }} id="item213584" className="pageItem " data-src="assets/images/item_213584.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '66px', top: '43px' }} id="item213585" className="pageItem " data-src="assets/images/item_213585.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '59px', top: '37px' }} id="item213586" className="pageItem " data-src="assets/images/item_213586.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '60px', top: '41px' }} id="item213587" className="pageItem " data-src="assets/images/item_213587.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '62px', top: '37px' }} id="item213588" className="pageItem " data-src="assets/images/item_213588.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '38px' }} id="item213589" className="pageItem " data-src="assets/images/item_213589.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '66px', top: '38px' }} id="item213590" className="pageItem " data-src="assets/images/item_213590.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '37px' }} id="item213592" className="pageItem " data-src="assets/images/item_213592.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '66px', top: '39px' }} id="item213593" className="pageItem " data-src="assets/images/item_213593.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '70px', top: '39px' }} id="item213594" className="pageItem " data-src="assets/images/item_213594.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '65px', top: '39px' }} id="item213597" className="pageItem " data-src="assets/images/item_213597.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '66px', top: '38px' }} id="item213598" className="pageItem " data-src="assets/images/item_213598.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '66px', top: '41px' }} id="item213599" className="pageItem " data-src="assets/images/item_213599.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '59px', top: '37px' }} id="item213600" className="pageItem " data-src="assets/images/item_213600.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '77px', top: '38px' }} id="item213601" className="pageItem " data-src="assets/images/item_213601.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '68px', top: '1px' }} id="item213602" className="pageItem " data-src="assets/images/item_213602.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '110px', top: '51px' }} id="item213603" className="pageItem " data-src="assets/images/item_213603.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '2px', top: '108px' }} id="item213604" className="pageItem " data-src="assets/images/item_213604.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '26px', top: '84px' }} id="item213605" className="pageItem " data-src="assets/images/item_213605.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '60px', top: '80px' }} id="item213606" className="pageItem " data-src="assets/images/item_213606.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '109px', top: '97px' }} id="item213607" className="pageItem " data-src="assets/images/item_213607.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '83px', top: '219px' }} id="item213608" className="pageItem " data-src="assets/images/item_213608.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '64px', top: '76px' }} id="item213609" className="pageItem " data-src="assets/images/item_213609.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '65px', top: '165px' }} id="item213610" className="pageItem " data-src="assets/images/item_213610.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '62px', top: '197px' }} id="item213611" className="pageItem " data-src="assets/images/item_213611.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '61px', top: '227px' }} id="item213612" className="pageItem " data-src="assets/images/item_213612.png" />
                                    <div alt="Oval" style={{ left: '60px', top: '251px' }} id="item213613" className="pageItem ">
                                        <svg version="1.1" width="7" height="7" >
                                            <ellipse cx="2.34" cy="2.34" rx="2.34" ry="2.34" stroke="" strokeWidth="1" fill="#bcced1" />
                                        </svg>
                                    </div>
                                    <img src={blankImage} alt="Polygon" style={{ left: '121px', top: '95px' }} id="item213614" className="pageItem " data-src="assets/images/item_213614.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '125px', top: '99px' }} id="item213615" className="pageItem " data-src="assets/images/item_213615.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '175px', top: '102px' }} id="item213616" className="pageItem " data-src="assets/images/item_213616.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '146px', top: '106px' }} id="item213617" className="pageItem " data-src="assets/images/item_213617.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '12px', top: '129px' }} id="item213619" className="pageItem " data-src="assets/images/item_213619.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '12px', top: '128px' }} id="item213620" className="pageItem " data-src="assets/images/item_213620.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '22px', top: '203px' }} id="item213621" className="pageItem " data-src="assets/images/item_213621.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '23px', top: '181px' }} id="item213622" className="pageItem " data-src="assets/images/item_213622.png" />
                                    <img src={blankImage} alt="Polygon" style={{ top: '172px' }} id="item213623" className="pageItem " data-src="assets/images/item_213623.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '32px', top: '167px' }} id="item213624" className="pageItem " data-src="assets/images/item_213624.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '32px', top: '167px' }} id="item213625" className="pageItem " data-src="assets/images/item_213625.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '43px', top: '189px' }} id="item213627" className="pageItem " data-src="assets/images/item_213627.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '45px', top: '195px' }} id="item213628" className="pageItem " data-src="assets/images/item_213628.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '46px', top: '201px' }} id="item213629" className="pageItem " data-src="assets/images/item_213629.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '115px', top: '82px' }} id="item213630" className="pageItem " data-src="assets/images/item_213630.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '113px', top: '134px' }} id="item213631" className="pageItem " data-src="assets/images/item_213631.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '115px', top: '135px' }} id="item213632" className="pageItem " data-src="assets/images/item_213632.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '54px', top: '78px' }} id="item213633" className="pageItem " data-src="assets/images/item_213633.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '53px', top: '91px' }} id="item213634" className="pageItem " data-src="assets/images/item_213634.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '50px', top: '126px' }} id="item213635" className="pageItem " data-src="assets/images/item_213635.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '56px', top: '163px' }} id="item213636" className="pageItem " data-src="assets/images/item_213636.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '162px' }} id="item213638" className="pageItem " data-src="assets/images/item_213638.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '50px', top: '126px' }} id="item213639" className="pageItem " data-src="assets/images/item_213639.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '74px', top: '58px' }} id="item213641" className="pageItem " data-src="assets/images/item_213641.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '77px', top: '61px' }} id="item213642" className="pageItem " data-src="assets/images/item_213642.png" />
                                </div>
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-213318 1s cubic-bezier(.2,.6,.35,1) 1" data-id="213318" id="item213318" data-hidestart="1" className="pageItem hidden" name="jawaban salah 10" aria-label="jawaban salah 10">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" style={{ top: '60px' }} id="item213320" className="pageItem ">
                                    <svg version="1.1" width="284" height="284" >
                                        <ellipse cx="141.62" cy="141.62" rx="141.62" ry="141.62" fill="#fff" />
                                    </svg>
                                </div>
                                <div alt="Group" style={{ left: '260px', top: '61px' }} id="item213321" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" id="item213322" className="pageItem " data-src="assets/images/item_213322.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '3px', top: '93px' }} id="item213324" className="pageItem " data-src="assets/images/item_213324.png" />
                                </div>
                                <img src={blankImage} alt="Jawaban Kamu Kurang Tepat! " style={{ left: '257px', top: '83px' }} id="item213325" className="pageItem " data-src="assets/images/item_213325.png" />
                                <div alt="Group" style={{ left: '68px' }} id="item213348" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{ left: '37px', top: '25px' }} id="item213349" className="pageItem " data-src="assets/images/item_213349.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '44px', top: '30px' }} id="item213350" className="pageItem " data-src="assets/images/item_213350.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '56px', top: '54px' }} id="item213351" className="pageItem " data-src="assets/images/item_213351.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '52px', top: '54px' }} id="item213353" className="pageItem " data-src="assets/images/item_213353.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '45px', top: '38px' }} id="item213354" className="pageItem " data-src="assets/images/item_213354.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '46px', top: '40px' }} id="item213355" className="pageItem " data-src="assets/images/item_213355.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '91px', top: '39px' }} id="item213356" className="pageItem " data-src="assets/images/item_213356.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '94px', top: '40px' }} id="item213357" className="pageItem " data-src="assets/images/item_213357.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '49px', top: '12px' }} id="item213358" className="pageItem " data-src="assets/images/item_213358.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '49px', top: '12px' }} id="item213359" className="pageItem " data-src="assets/images/item_213359.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '48px', top: '36px' }} id="item213360" className="pageItem " data-src="assets/images/item_213360.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '80px', top: '45px' }} id="item213361" className="pageItem " data-src="assets/images/item_213361.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '73px', top: '31px' }} id="item213362" className="pageItem " data-src="assets/images/item_213362.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '52px', top: '31px' }} id="item213363" className="pageItem " data-src="assets/images/item_213363.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '74px', top: '36px' }} id="item213364" className="pageItem " data-src="assets/images/item_213364.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '74px', top: '36px' }} id="item213365" className="pageItem " data-src="assets/images/item_213365.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '74px', top: '36px' }} id="item213369" className="pageItem " data-src="assets/images/item_213369.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '73px', top: '39px' }} id="item213370" className="pageItem " data-src="assets/images/item_213370.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '74px', top: '35px' }} id="item213372" className="pageItem " data-src="assets/images/item_213372.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '53px', top: '36px' }} id="item213373" className="pageItem " data-src="assets/images/item_213373.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '53px', top: '36px' }} id="item213374" className="pageItem " data-src="assets/images/item_213374.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '52px', top: '36px' }} id="item213378" className="pageItem " data-src="assets/images/item_213378.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '53px', top: '39px' }} id="item213379" className="pageItem " data-src="assets/images/item_213379.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '52px', top: '35px' }} id="item213380" className="pageItem " data-src="assets/images/item_213380.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '74px', top: '29px' }} id="item213381" className="pageItem " data-src="assets/images/item_213381.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '50px', top: '30px' }} id="item213382" className="pageItem " data-src="assets/images/item_213382.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '64px', top: '41px' }} id="item213383" className="pageItem " data-src="assets/images/item_213383.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '49px' }} id="item213384" className="pageItem " data-src="assets/images/item_213384.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '61px', top: '35px' }} id="item213385" className="pageItem " data-src="assets/images/item_213385.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '61px', top: '10px' }} id="item213387" className="pageItem " data-src="assets/images/item_213387.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '37px' }} id="item213390" className="pageItem " data-src="assets/images/item_213390.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '79px', top: '15px' }} id="item213391" className="pageItem " data-src="assets/images/item_213391.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '71px', top: '33px' }} id="item213392" className="pageItem " data-src="assets/images/item_213392.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '49px', top: '33px' }} id="item213393" className="pageItem " data-src="assets/images/item_213393.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '35px' }} id="item213394" className="pageItem " data-src="assets/images/item_213394.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '86px', top: '39px' }} id="item213395" className="pageItem " data-src="assets/images/item_213395.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '57px', top: '93px' }} id="item213396" className="pageItem " data-src="assets/images/item_213396.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '28px', top: '244px' }} id="item213397" className="pageItem " data-src="assets/images/item_213397.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '20px', top: '79px' }} id="item213398" className="pageItem " data-src="assets/images/item_213398.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '20px', top: '175px' }} id="item213399" className="pageItem " data-src="assets/images/item_213399.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '67px', top: '79px' }} id="item213400" className="pageItem " data-src="assets/images/item_213400.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '67px', top: '175px' }} id="item213402" className="pageItem " data-src="assets/images/item_213402.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '51px', top: '94px' }} id="item213403" className="pageItem " data-src="assets/images/item_213403.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '109px', top: '141px' }} id="item213404" className="pageItem " data-src="assets/images/item_213404.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '106px', top: '99px' }} id="item213405" className="pageItem " data-src="assets/images/item_213405.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '111px', top: '119px' }} id="item213406" className="pageItem " data-src="assets/images/item_213406.png" />
                                    <img src={blankImage} alt="Polygon" style={{ top: '100px' }} id="item213407" className="pageItem " data-src="assets/images/item_213407.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '4px', top: '100px' }} id="item213408" className="pageItem " data-src="assets/images/item_213408.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '6px', top: '156px' }} id="item213409" className="pageItem " data-src="assets/images/item_213409.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '24px', top: '99px' }} id="item213410" className="pageItem " data-src="assets/images/item_213410.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '30px', top: '131px' }} id="item213411" className="pageItem " data-src="assets/images/item_213411.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '97px', top: '141px' }} id="item213412" className="pageItem " data-src="assets/images/item_213412.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '103px', top: '143px' }} id="item213413" className="pageItem " data-src="assets/images/item_213413.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '109px', top: '149px' }} id="item213414" className="pageItem " data-src="assets/images/item_213414.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '111px', top: '141px' }} id="item213415" className="pageItem " data-src="assets/images/item_213415.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '114px', top: '142px' }} id="item213416" className="pageItem " data-src="assets/images/item_213416.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '116px', top: '149px' }} id="item213417" className="pageItem " data-src="assets/images/item_213417.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '103px', top: '146px' }} id="item213418" className="pageItem " data-src="assets/images/item_213418.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '106px', top: '152px' }} id="item213419" className="pageItem " data-src="assets/images/item_213419.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '6px', top: '153px' }} id="item213421" className="pageItem " data-src="assets/images/item_213421.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '8px', top: '157px' }} id="item213422" className="pageItem " data-src="assets/images/item_213422.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '15px', top: '180px' }} id="item213423" className="pageItem " data-src="assets/images/item_213423.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '6px', top: '167px' }} id="item213424" className="pageItem " data-src="assets/images/item_213424.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '8px', top: '172px' }} id="item213425" className="pageItem " data-src="assets/images/item_213425.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '47px', top: '161px' }} id="item213427" className="pageItem " data-src="assets/images/item_213427.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '53px', top: '154px' }} id="item213428" className="pageItem " data-src="assets/images/item_213428.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '46px', top: '75px' }} id="item213430" className="pageItem " data-src="assets/images/item_213430.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '46px', top: '75px' }} id="item213431" className="pageItem " data-src="assets/images/item_213431.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '59px', top: '77px' }} id="item213432" className="pageItem " data-src="assets/images/item_213432.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '59px', top: '77px' }} id="item213433" className="pageItem " data-src="assets/images/item_213433.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '54px', top: '184px' }} id="item213434" className="pageItem " data-src="assets/images/item_213434.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '206px' }} id="item213435" className="pageItem " data-src="assets/images/item_213435.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '28px', top: '208px' }} id="item213436" className="pageItem " data-src="assets/images/item_213436.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '48px', top: '73px' }} id="item213440" className="pageItem " data-src="assets/images/item_213440.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '45px', top: '113px' }} id="item213441" className="pageItem " data-src="assets/images/item_213441.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '52px', top: '158px' }} id="item213442" className="pageItem " data-src="assets/images/item_213442.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '61px', top: '157px' }} id="item213443" className="pageItem " data-src="assets/images/item_213443.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '45px', top: '113px' }} id="item213444" className="pageItem " data-src="assets/images/item_213444.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '86px', top: '74px' }} id="item213445" className="pageItem " data-src="assets/images/item_213445.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '104px', top: '131px' }} id="item213446" className="pageItem " data-src="assets/images/item_213446.png" />
                                    <div alt="Oval" style={{ left: '106px', top: '133px' }} id="item213447" className="pageItem ">
                                        <svg version="1.1" width="8" height="8" >
                                            <ellipse cx="2.58" cy="2.58" rx="2.58" ry="2.58" stroke="" strokeWidth="1" fill="#8c8c9b" />
                                        </svg>
                                    </div>
                                    <img src={blankImage} alt="Polygon" style={{ left: '59px', top: '57px' }} id="item213448" className="pageItem " data-src="assets/images/item_213448.png" />
                                </div>
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-227659 1s cubic-bezier(.2,.6,.35,1) 1" data-id="227659" id="item227659" data-hidestart="1" className="pageItem hidden" name="mata 2" aria-label="mata 2">
                            <div className="pageItem state btn-off">
                                <div alt="Group" id="item218236" className="pageItem group ">
                                    <div alt="Oval" id="item218237" className="pageItem ">
                                        <svg version="1.1" width="6" height="6" >
                                            <circle cx="2" cy="2" r="2" stroke="" strokeWidth="1" fill="#1c1463" />
                                        </svg>
                                    </div>
                                    <img src={blankImage} alt="Polygon" style={{ left: '1px', top: '1px' }} id="item218238" className="pageItem " data-src="assets/images/item_218238.png" />
                                </div>
                                <div alt="Group" style={{ left: '21px' }} id="item218240" className="pageItem group ">
                                    <div alt="Oval" id="item218241" className="pageItem ">
                                        <svg version="1.1" width="6" height="6" >
                                            <circle cx="2" cy="2" r="2" stroke="" strokeWidth="1" fill="#1c1463" />
                                        </svg>
                                    </div>
                                    <img src={blankImage} alt="Polygon" style={{ left: '1px', top: '1px' }} id="item218242" className="pageItem " data-src="assets/images/item_218242.png" />
                                </div>
                            </div>
                        </button>
                        <div data-ani="appear-217060 0.6s linear 1" data-id="217060" id="item217060" data-hidestart="1" className="pageItem group hidden" alt="5" style={{ left: '452px', top: '730px', width: ' 356px', height: '94px' }}>
                            <div id="item197439" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Agen biologis dan small molecule " style={{ left: '33px', top: '10px' }} id="item197517" className="pageItem " data-src="assets/images/item_197517.png" />
                        </div>
                        <div data-ani="appear-217059 0.6s linear 1" data-id="217059" id="item217059" data-hidestart="1" className="pageItem group hidden" alt="4" style={{ left: '728px', top: '619px', width: ' 356px', height: '94px' }}>
                            <div id="item197438" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Tindakan bedah " style={{ left: '33px', top: '23px' }} id="item197494" className="pageItem " data-src="assets/images/item_197494.png" />
                        </div>
                        <div data-ani="appear-217056 0.6s linear 1" data-id="217056" id="item217056" data-hidestart="1" className="pageItem group hidden" alt="3" style={{ left: '728px', top: '503px', width: ' 356px', height: '94px' }}>
                            <div id="item197436" alt="rectangle 3" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Kortikosteroid " style={{ left: '33px', top: '23px' }} id="item197471" className="pageItem " data-src="assets/images/item_197471.png" />
                        </div>
                        <div data-ani="appear-217058 0.6s linear 1" data-id="217058" id="item217058" data-hidestart="1" className="pageItem group hidden" alt="2" style={{ left: '100px', top: '619px', width: ' 356px', height: '94px' }}>
                            <div id="item197435" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Aminosalisilat " style={{ left: '33px', top: '23px' }} id="item197448" className="pageItem " data-src="assets/images/item_197448.png" />
                        </div>
                        <div data-ani="appear-217057 0.6s linear 1" data-id="217057" id="item217057" data-hidestart="1" className="pageItem group hidden" alt="1" style={{ left: '100px', top: '503px', width: ' 356px', height: '94px' }}>
                            <div id="item197433" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Imunosupresan " style={{ left: '33px', top: '23px' }} id="item197540" className="pageItem " data-src="assets/images/item_197540.png" />
                        </div>
                        <button data-id="228045" name="cek jawaban 4" aria-label="cek jawaban 4" id="item228045" className="pageItem has-down has-on " onClick={handleOnClickCekJawaban}>
                            <div className="pageItem state btn-off">
                                <div id="item228074" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Jawaban" style={{ left: '26px', top: '15px' }} id="item228076" className="pageItem " data-src="assets/images/item_228076.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item228100" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Jawaban" style={{ left: '26px', top: '15px' }} id="item228102" className="pageItem " data-src="assets/images/item_228102.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item228048" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Jawaban" style={{ left: '26px', top: '15px' }} id="item228050" className="pageItem " data-src="assets/images/item_228050.png" />
                            </div>
                        </button>
                        <div alt="Takeda Indonesia, 202" style={{ left: '1885px', top: '913px' }} id="item196212" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{ left: '1px' }} id="item196213" className="pageItem " data-src="assets/images/item_196213.png" />
                            <div alt="Group" style={{ top: '132px' }} id="item196236" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item196237" className="pageItem " data-src="assets/images/item_196237.png" />
                                <img src={blankImage} alt="Polygon" style={{ left: '3px', top: '4px' }} id="item196238" className="pageItem " data-src="assets/images/item_196238.png" />
                            </div>
                        </div>
                        <button data-ani="fadein-212484 1s linear 1" data-id="212484" id="item212484" data-hidestart="1" className="pageItem has-on has-down hidden" name="soal selanjutnya 9" onClick={handleOnClickGoToQuiz5} aria-label="soal selanjutnya 9">
                            <div className="pageItem state btn-off">
                                <div id="item212513" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Soal Selanjutnya" style={{ left: '23px', top: '15px' }} id="item212515" className="pageItem " data-src="assets/images/item_212515.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item212539" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Soal Selanjutnya" style={{ left: '23px', top: '15px' }} id="item212541" className="pageItem " data-src="assets/images/item_212541.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item212487" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Soal Selanjutnya" style={{ left: '23px', top: '15px' }} id="item212489" className="pageItem " data-src="assets/images/item_212489.png" />
                            </div>
                        </button>
                        <button data-ani="fadein-212564 0.5s linear 1" data-id="212564" id="item212564" data-hidestart="1" className="pageItem has-on has-down hidden" name="cek penjelasan 7" onClick={handleOnClickGoToCekPenjelasan} aria-label="cek penjelasan 7">
                            <div className="pageItem state btn-off">
                                <div id="item212594" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Penjelasan" style={{ left: '26px', top: '15px' }} id="item212596" className="pageItem " data-src="assets/images/item_212596.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item212620" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Penjelasan" style={{ left: '26px', top: '15px' }} id="item212621" className="pageItem " data-src="assets/images/item_212621.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item212567" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Penjelasan" style={{ left: '26px', top: '15px' }} id="item212569" className="pageItem " data-src="assets/images/item_212569.png" />
                            </div>
                        </button>
                        <button data-id="221985" name="icon beranda 111" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 111" id="item221985" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221993" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '14px', top: '15px' }} id="item221994" className="pageItem " data-src="assets/images/item_221994.png" />
                                <img src={blankImage} alt="Polygon" style={{ left: '17px', top: '18px' }} id="item221995" className="pageItem " data-src="assets/images/item_221995.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221997" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '14px', top: '15px' }} id="item221998" className="pageItem " data-src="assets/images/item_221998.png" />
                                <img src={blankImage} alt="Polygon" style={{ left: '17px', top: '18px' }} id="item221999" className="pageItem " data-src="assets/images/item_221999.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221988" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '17px', top: '18px' }} id="item221989" className="pageItem " data-src="assets/images/item_221989.png" />
                                <img src={blankImage} alt="Polygon" style={{ left: '14px', top: '15px' }} id="item221991" className="pageItem " data-src="assets/images/item_221991.png" />
                            </div>
                        </button>
                        <button data-id="223611" name="icon back 64" onClick={handleOnClickGoToQuiz3} aria-label="icon back 64" id="item223611" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item223619" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item223621" className="pageItem " data-src="assets/images/item_223621.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item223623" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item223624" className="pageItem " data-src="assets/images/item_223624.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item223614" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item223616" className="pageItem " data-src="assets/images/item_223616.png" />
                            </div>
                        </button>
                        <Navigation />
                    </div>
                    <input type="hidden" id="quiz4_opt1" name="quiz4answer[]" value="" />
                    <input type="hidden" id="quiz4_opt2" name="quiz4answer[]" value="" />
                    <input type="hidden" id="quiz4_opt3" name="quiz4answer[]" value="" />
                    <input type="hidden" id="quiz4_opt4" name="quiz4answer[]" value="" />
                    <input type="hidden" id="quiz4_opt5" name="quiz4answer[]" value="" />
                </li>

            </ul>
        </div>
    )
}
export default Quiz4;