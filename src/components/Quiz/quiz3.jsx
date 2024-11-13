import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Quiz3() {

    const navigate = useNavigate();

    const handleOnClickGoToQuiz4 = () => {
        window.location.href = '/quiz4'; // #54
    };
    //var referrer = document.referrer;
    //console.log("referrer url",referrer);
    const handleOnClickBack = () => {
        window.location.href = '/Quiz40';
    };
    const handleOnClickPreviousPage = () => {
        navigate(-1);
    };

    const handleOnClickGoToQuiz2 = () => {
        window.location.href = '/quiz2'; // #54
    }

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }


    //////////////////////////////////////
    /// #page 56 --- KUIS 3
    ////////////////////////////////////
    // penyembuhan endoskopis
    const handleOnClickEndoskopis1 = event => {
        event.preventDefault();
        jQuery("#quiz3_opt1").val("0");
        go(event, [{ n: 1, link: 1, id: 223767, act: 'hide' }, { n: 1, link: 1, id: 226796, act: 'hide' }]);
    }
    const handleOnClickEndoskopis2 = event => {
        event.preventDefault();
        jQuery("#quiz3_opt1").val("0");
        go(event, [{ n: 1, link: 1, id: 226796, act: 'hide' }, { n: 1, link: 1, id: 211486, act: 'hide' }]);
    }
    const handleOnClickEndoskopis3 = event => {
        event.preventDefault();
        jQuery("#quiz3_opt1").val("1");
        go(event, [{ n: 1, link: 1, id: 223767, act: 'hide' }, { n: 1, link: 1, id: 211486, act: 'hide' }]);
    }


    // normalisasi CRP
    const handleOnClickNormalisasiCRP1 = event => {
        event.preventDefault();
        jQuery("#quiz3_opt2").val("1");
        go(event, [{ n: 1, link: 1, id: 225435, act: 'hide' }, { n: 1, link: 1, id: 225274, act: 'hide' }]);
    }
    const handleOnClickNormalisasiCRP2 = event => {
        event.preventDefault();
        jQuery("#quiz3_opt2").val("0");
        go(event, [{ n: 1, link: 1, id: 225354, act: 'hide' }, { n: 1, link: 1, id: 225274, act: 'hide' }]);
    }
    const handleOnClickNormalisasiCRP3 = event => {
        event.preventDefault();
        jQuery("#quiz3_opt2").val("0");
        go(event, [{ n: 1, link: 1, id: 225354, act: 'hide' }, { n: 1, link: 1, id: 225435, act: 'hide' }]);
    }

    // penurunan nilai FPC
    const handleOnClickPenurunanNilanFPC1 = event => {
        event.preventDefault();
        jQuery("#quiz3_opt3").val("0");
        go(event, [{ n: 1, link: 1, id: 224497, act: 'hide' }, { n: 1, link: 1, id: 226889, act: 'hide' }]);
    }
    const handleOnClickPenurunanNilanFPC2 = event => {
        event.preventDefault();
        jQuery("#quiz3_opt3").val("1");
        go(event, [{ n: 1, link: 1, id: 211214, act: 'hide' }, { n: 1, link: 1, id: 226889, act: 'hide' }]);
    }
    const handleOnClickPenurunanNilanFPC3 = event => {
        event.preventDefault();
        jQuery("#quiz3_opt3").val("0");
        go(event, [{ n: 1, link: 1, id: 211214, act: 'hide' }, { n: 1, link: 1, id: 224497, act: 'hide' }]);
    }


    // remisi simtomatis
    const handleOnClickRemisiSimtomatis1 = event => {
        event.preventDefault();
        jQuery("#quiz3_opt4").val("1");
        go(event, [{ n: 1, link: 1, id: 225724, act: 'hide' }, { n: 1, link: 1, id: 225561, act: 'hide' }]);
    }
    const handleOnClickRemisiSimtomatis2 = event => {
        event.preventDefault();
        jQuery("#quiz3_opt4").val("0");
        go(event, [{ n: 1, link: 1, id: 225644, act: 'hide' }, { n: 1, link: 1, id: 225561, act: 'hide' }]);
    }
    const handleOnClickRemisiSimtomatis3 = event => {
        event.preventDefault();
        jQuery("#quiz3_opt4").val("0");
        go(event, [{ n: 1, link: 1, id: 225644, act: 'hide' }, { n: 1, link: 1, id: 225724, act: 'hide' }]);
    }


    // respons simtomatis / klinis 
    const handleOnClickResponsSimtomatis1 = event => {
        event.preventDefault();
        jQuery("#quiz3_opt5").val("1");
        go(event, [{ n: 1, link: 1, id: 225054, act: 'hide' }, { n: 1, link: 1, id: 224889, act: 'hide' }]);
    }
    const handleOnClickResponsSimtomatis2 = event => {
        event.preventDefault();
        jQuery("#quiz3_opt5").val("0");
        go(event, [{ n: 1, link: 1, id: 224971, act: 'hide' }, { n: 1, link: 1, id: 224889, act: 'hide' }]);
    }
    const handleOnClickResponsSimtomatis3 = event => {
        event.preventDefault();
        jQuery("#quiz3_opt5").val("0");
        go(event, [{ n: 1, link: 1, id: 224971, act: 'hide' }, { n: 1, link: 1, id: 225054, act: 'hide' }]);
    }


    // perbaikan kualitas hidup
    const handleOnClickPerbaikanKualitasHidup1 = event => {
        event.preventDefault();
        jQuery("#quiz3_opt6").val("0");
        go(event, [{ n: 1, link: 1, id: 226016, act: 'hide' }, { n: 1, link: 1, id: 225852, act: 'hide' }]);
    }
    const handleOnClickPerbaikanKualitasHidup2 = event => {
        event.preventDefault();
        jQuery("#quiz3_opt6").val("0");
        go(event, [{ n: 1, link: 1, id: 225936, act: 'hide' }, { n: 1, link: 1, id: 225852, act: 'hide' }]);
    }
    const handleOnClickPerbaikanKualitasHidup3 = event => {
        event.preventDefault();
        jQuery("#quiz3_opt6").val("1");
        go(event, [{ n: 1, link: 1, id: 225936, act: 'hide' }, { n: 1, link: 1, id: 226016, act: 'hide' }]);
    }


    // tidak ada disabilitas
    const handleOnClickTidakAdaDisabilitas1 = event => {
        event.preventDefault();
        jQuery("#quiz3_opt7").val("0");
        go(event, [{ n: 1, link: 1, id: 226603, act: 'hide' }, { n: 1, link: 1, id: 226439, act: 'hide' }]);
    }
    const handleOnClickTidakAdaDisabilitas2 = event => {
        event.preventDefault();
        jQuery("#quiz3_opt7").val("0");
        go(event, [{ n: 1, link: 1, id: 226520, act: 'hide' }, { n: 1, link: 1, id: 226439, act: 'hide' }]);
    }
    const handleOnClickTidakAdaDisabilitas3 = event => {
        event.preventDefault();
        jQuery("#quiz3_opt7").val("1");
        go(event, [{ n: 1, link: 1, id: 226520, act: 'hide' }, { n: 1, link: 1, id: 226603, act: 'hide' }]);
    }



    // Cek Jawaban
    const handleOnClickCekJawaban = (event) => {
        event.preventDefault();
        var quiz3ansvalues = jQuery('input[name="quiz3answer[]"]').map(function () {
            return jQuery(this).val();
        }).get();

        const occurrences = quiz3ansvalues.filter(item => item === '0').length;
        const occurrences2 = quiz3ansvalues.filter(item => item === '1').length;
        const occurrences3 = quiz3ansvalues.filter(item => item === '').length;

        if (occurrences == 0 && occurrences2 == 7 && occurrences3 == 0) {
            jQuery('#item227045 audio')[0].play();
            jQuery('#item209773 video')[0].play();
            // orang dgn jawaban benar muncul
            go(event, [{ n: 1, link: 1, id: 209224, act: 'play' }, { n: 1, link: 1, id: 209418, act: 'hide' }]);
            // soal selanjutnya muncul, cek penjelasan hilang
            go(event, [{ n: 1, link: 1, id: 208488, act: 'play' }, { n: 1, link: 1, id: 209841, act: 'hide' }]);
            // mata
            go(event, [{ n: 1, link: 1, id: 227628, act: 'hide' }]);
        } else {
            // salah
            jQuery('#item227050 audio')[0].play();
            jQuery('#item209777 video')[0].play();
            // orang dgn jawaban salah muncul
            go(event, [{ n: 1, link: 1, id: 209418, act: 'play' }, { n: 1, link: 1, id: 209224, act: 'hide' }]);
            // cek penjelasan muncul, soal selanjutnya hilang
            go(event, [{ n: 1, link: 1, id: 209841, act: 'play' }, { n: 1, link: 1, id: 208488, act: 'hide' }]);
            // salah - mata 2 muncul 
            go(event, [{ n: 1, link: 1, id: 227628, act: 'play' }]);
        }
    };




    const handleOnClickGoToCekPenjelasan = (event) => {
        window.location.href = '/quiz3Penjelasan';
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
                <li className="page" data-name="56">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{del:13,n:1,link:1,id:208704,act:'play'},{n:1,link:1,id:211317,act:'play'},{n:1,link:1,id:211486,act:'play'},{n:1,link:1,id:223767,act:'play'},{n:1,link:1,id:226796,act:'play'},{n:1,link:1,id:208703,act:'play'},{n:1,link:1,id:225264,act:'play'},{n:1,link:1,id:225354,act:'play'},{n:1,link:1,id:225435,act:'play'},{n:1,link:1,id:225274,act:'play'},{n:1,link:1,id:208755,act:'play'},{n:1,link:1,id:211043,act:'play'},{n:1,link:1,id:211214,act:'play'},{n:1,link:1,id:224497,act:'play'},{n:1,link:1,id:226889,act:'play'},{n:1,link:1,id:208860,act:'play'},{n:1,link:1,id:225554,act:'play'},{n:1,link:1,id:225644,act:'play'},{n:1,link:1,id:225724,act:'play'},{n:1,link:1,id:225561,act:'play'},{n:1,link:1,id:209166,act:'play'},{n:1,link:1,id:224881,act:'play'},{n:1,link:1,id:224971,act:'play'},{n:1,link:1,id:225054,act:'play'},{n:1,link:1,id:224889,act:'play'},{n:1,link:1,id:209068,act:'play'},{n:1,link:1,id:225845,act:'play'},{n:1,link:1,id:225936,act:'play'},{n:1,link:1,id:226016,act:'play'},{n:1,link:1,id:225852,act:'play'},{n:1,link:1,id:208964,act:'play'},{n:1,link:1,id:226432,act:'play'},{n:1,link:1,id:226520,act:'play'},{n:1,link:1,id:226603,act:'play'},{n:1,id:226439,sn:1,act:'play'}], 'pageload');" style={{ width: '1920px', height: '1080px' }}>
                        <div id="item227045" className="pageItem" style={{ height: '60px', width: '60px', left: '140px', top: '202px' }} alt="Sound">
                            <audio data-id="227045" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/jawaban benar.mp3" />
                            </audio>
                        </div>
                        <div id="item227050" className="pageItem" style={{ height: '60px', width: '60px', left: '240px', top: '202px' }} alt="Sound">
                            <audio data-id="227050" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/jawaban salah.mp3" />
                            </audio>
                        </div>
                        <div id="item209777" className="pageItem" alt="Movie" style={{ left: '44px', top: '292px' }}>
                            <video width="640" height="360" data-id="209777" poster="assets/images/item_209777.png" data-stoplast="1" data-nopause="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/Incorrect Answer sound effect.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div id="item209773" className="pageItem" alt="Movie" style={{ left: '26px', top: '280px' }}>
                            <video width="640" height="360" data-id="209773" poster="assets/images/item_209773.png" data-stoplast="1" data-nopause="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/Correct Answer sound effect.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div id="item226140" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item224706" className="pageItem" alt="Movie">
                            <video width="1920" height="1400" data-id="224706" data-autoplay="1" data-autodelay="0" data-stoplast="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/quiz 3.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div id="item225264" data-ani="appear-225264 0.6s linear 1" data-id="225264" data-hidestart="1" className="pageItem hidden" alt="rectangle 7">&nbsp;</div>
                        <div id="item225554" data-ani="appear-225554 0.6s linear 1" data-id="225554" data-hidestart="1" className="pageItem hidden" alt="rectangle 7">&nbsp;</div>
                        <div id="item225845" data-ani="appear-225845 0.6s linear 1" data-id="225845" data-hidestart="1" className="pageItem hidden" alt="rectangle 7">&nbsp;</div>
                        <div id="item226432" data-ani="appear-226432 0.6s linear 1" data-id="226432" data-hidestart="1" className="pageItem hidden" alt="rectangle 7">&nbsp;</div>
                        <button data-ani="appear-225266 0.6s linear 1" data-id="225266" id="item225266" data-hidestart="1" className="pageItem hidden" name="rectangle benar 8" aria-label="rectangle benar 8">
                            <div className="pageItem state btn-off">
                                <div id="item225268" alt="rectangle benar" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="appear-225555 0.6s linear 1" data-id="225555" id="item225555" data-hidestart="1" className="pageItem hidden" name="rectangle benar 9" aria-label="rectangle benar 9">
                            <div className="pageItem state btn-off">
                                <div id="item225557" alt="rectangle benar" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="appear-225846 0.6s linear 1" data-id="225846" id="item225846" data-hidestart="1" className="pageItem hidden" name="rectangle benar 10" aria-label="rectangle benar 10">
                            <div className="pageItem state btn-off">
                                <div id="item225848" alt="rectangle benar" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="appear-226433 0.6s linear 1" data-id="226433" id="item226433" data-hidestart="1" className="pageItem hidden" name="rectangle benar 11" aria-label="rectangle benar 11">
                            <div className="pageItem state btn-off">
                                <div id="item226435" alt="rectangle benar" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="appear-225270 0.6s linear 1" data-id="225270" id="item225270" data-hidestart="1" className="pageItem hidden" name="rectangle salah 8" aria-label="rectangle salah 8">
                            <div className="pageItem state btn-off">
                                <div id="item225272" alt="rectangle benar" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="appear-225558 0.6s linear 1" data-id="225558" id="item225558" data-hidestart="1" className="pageItem hidden" name="rectangle salah 9" aria-label="rectangle salah 9">
                            <div className="pageItem state btn-off">
                                <div id="item225560" alt="rectangle benar" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="appear-225849 0.6s linear 1" data-id="225849" id="item225849" data-hidestart="1" className="pageItem hidden" name="rectangle salah 10" aria-label="rectangle salah 10">
                            <div className="pageItem state btn-off">
                                <div id="item225851" alt="rectangle benar" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="appear-226436 0.6s linear 1" data-id="226436" id="item226436" data-hidestart="1" className="pageItem hidden" name="rectangle salah 11" aria-label="rectangle salah 11">
                            <div className="pageItem state btn-off">
                                <div id="item226438" alt="rectangle benar" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="appear-225354 0.6s linear 1" data-id="225354" id="item225354" data-hidestart="1" className="pageItem has-on has-down hidden" name="17" aria-label="17" onClick={handleOnClickNormalisasiCRP1}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item225385" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '7px', top: '2px' }} id="item225386" className="pageItem " data-src="assets/images/item_225386.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item225359" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" stroke="" strokeWidth="1" fill="#45b86b" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '12px', top: '2px' }} id="item225361" className="pageItem " data-src="assets/images/item_225361.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item225410" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#ffffff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '7px', top: '2px' }} id="item225412" className="pageItem " data-src="assets/images/item_225412.png" />
                            </div>
                        </button>
                        <button data-ani="appear-225644 0.6s linear 1" data-id="225644" id="item225644" data-hidestart="1" className="pageItem has-on has-down hidden" name="18" aria-label="18" onClick={handleOnClickRemisiSimtomatis1}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item225675" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '7px', top: '2px' }} id="item225676" className="pageItem " data-src="assets/images/item_225676.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item225650" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" stroke="" strokeWidth="1" fill="#45b86b" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '12px', top: '2px' }} id="item225651" className="pageItem " data-src="assets/images/item_225651.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item225700" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#ffffff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '7px', top: '2px' }} id="item225701" className="pageItem " data-src="assets/images/item_225701.png" />
                            </div>
                        </button>
                        <button data-ani="appear-225936 0.6s linear 1" data-id="225936" id="item225936" data-hidestart="1" className="pageItem has-on has-down hidden" name="19" aria-label="19" onClick={handleOnClickPerbaikanKualitasHidup1}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item225967" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '7px', top: '2px' }} id="item225968" className="pageItem " data-src="assets/images/item_225968.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item225942" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '12px', top: '2px' }} id="item225943" className="pageItem " data-src="assets/images/item_225943.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item225992" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#ffffff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '7px', top: '2px' }} id="item225993" className="pageItem " data-src="assets/images/item_225993.png" />
                            </div>
                        </button>
                        <button data-ani="appear-226520 0.6s linear 1" data-id="226520" id="item226520" data-hidestart="1" className="pageItem has-on has-down hidden" name="20" aria-label="20" onClick={handleOnClickTidakAdaDisabilitas1}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item226554" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '7px', top: '2px' }} id="item226555" className="pageItem " data-src="assets/images/item_226555.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item226529" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '12px', top: '2px' }} id="item226530" className="pageItem " data-src="assets/images/item_226530.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item226579" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#ffffff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '7px', top: '2px' }} id="item226580" className="pageItem " data-src="assets/images/item_226580.png" />
                            </div>
                        </button>
                        <button data-ani="appear-225435 0.6s linear 1" data-id="225435" id="item225435" data-hidestart="1" className="pageItem has-on has-down hidden" name="27" aria-label="27" onClick={handleOnClickNormalisasiCRP2}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item225464" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '7px', top: '2px' }} id="item225465" className="pageItem " data-src="assets/images/item_225465.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item225439" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '12px', top: '2px' }} id="item225440" className="pageItem " data-src="assets/images/item_225440.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item225489" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#ffffff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '7px', top: '2px' }} id="item225490" className="pageItem " data-src="assets/images/item_225490.png" />
                            </div>
                        </button>
                        <button data-ani="appear-225724 0.6s linear 1" data-id="225724" id="item225724" data-hidestart="1" className="pageItem has-on has-down hidden" name="28" aria-label="28" onClick={handleOnClickRemisiSimtomatis2}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item225758" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '7px', top: '2px' }} id="item225759" className="pageItem " data-src="assets/images/item_225759.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item225732" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '12px', top: '2px' }} id="item225733" className="pageItem " data-src="assets/images/item_225733.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item225783" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#ffffff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '7px', top: '2px' }} id="item225784" className="pageItem " data-src="assets/images/item_225784.png" />
                            </div>
                        </button>
                        <button data-ani="appear-226016 0.6s linear 1" data-id="226016" id="item226016" data-hidestart="1" className="pageItem has-on has-down hidden" name="29" aria-label="29" onClick={handleOnClickPerbaikanKualitasHidup2}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item226049" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '7px', top: '2px' }} id="item226051" className="pageItem " data-src="assets/images/item_226051.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item226024" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '12px', top: '2px' }} id="item226025" className="pageItem " data-src="assets/images/item_226025.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item226075" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#ffffff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '7px', top: '2px' }} id="item226076" className="pageItem " data-src="assets/images/item_226076.png" />
                            </div>
                        </button>
                        <button data-ani="appear-226603 0.6s linear 1" data-id="226603" id="item226603" data-hidestart="1" className="pageItem has-on has-down hidden" name="30" aria-label="30" onClick={handleOnClickTidakAdaDisabilitas2}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item226636" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '7px', top: '2px' }} id="item226637" className="pageItem " data-src="assets/images/item_226637.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item226611" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '12px', top: '2px' }} id="item226612" className="pageItem " data-src="assets/images/item_226612.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item226661" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#ffffff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '7px', top: '2px' }} id="item226662" className="pageItem " data-src="assets/images/item_226662.png" />
                            </div>
                        </button>
                        <div alt="Takeda Indonesia, 202" style={{ left: '1885px', top: '913px' }} id="item192987" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{ left: '1px' }} id="item192988" className="pageItem " data-src="assets/images/item_192988.png" />
                            <div alt="Group" style={{ top: '132px' }} id="item193011" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item193012" className="pageItem " data-src="assets/images/item_193012.png" />
                                <img src={blankImage} alt="Polygon" style={{ left: '3px', top: '4px' }} id="item193013" className="pageItem " data-src="assets/images/item_193013.png" />
                            </div>
                        </div>
                        <div id="item211043" data-ani="appear-211043 0.6s linear 1" data-id="211043" data-hidestart="1" className="pageItem hidden" alt="rectangle 2">&nbsp;</div>
                        <div id="item224881" data-ani="appear-224881 0.6s linear 1" data-id="224881" data-hidestart="1" className="pageItem hidden" alt="rectangle 2">&nbsp;</div>
                        <div id="item211317" data-ani="appear-211317 0.6s linear 1" data-id="211317" data-hidestart="1" className="pageItem hidden" alt="rectangle 3">&nbsp;</div>
                        <button data-ani="appear-211044 0.6s linear 1" data-id="211044" id="item211044" data-hidestart="1" className="pageItem hidden" name="rectangle benar 3" aria-label="rectangle benar 3">
                            <div className="pageItem state btn-off">
                                <div id="item211046" alt="rectangle benar" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="appear-224882 0.6s linear 1" data-id="224882" id="item224882" data-hidestart="1" className="pageItem hidden" name="rectangle benar 7" aria-label="rectangle benar 7">
                            <div className="pageItem state btn-off">
                                <div id="item224884" alt="rectangle benar" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="appear-211318 0.6s linear 1" data-id="211318" id="item211318" data-hidestart="1" className="pageItem hidden" name="rectangle benar 4" aria-label="rectangle benar 4">
                            <div className="pageItem state btn-off">
                                <div id="item211320" alt="rectangle benar" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="appear-211047 0.6s linear 1" data-id="211047" id="item211047" data-hidestart="1" className="pageItem hidden" name="rectangle salah 3" aria-label="rectangle salah 3">
                            <div className="pageItem state btn-off">
                                <div id="item211049" alt="rectangle benar" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="appear-224885 0.6s linear 1" data-id="224885" id="item224885" data-hidestart="1" className="pageItem hidden" name="rectangle salah 7" aria-label="rectangle salah 7">
                            <div className="pageItem state btn-off">
                                <div id="item224888" alt="rectangle benar" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="appear-211321 0.6s linear 1" data-id="211321" id="item211321" data-hidestart="1" className="pageItem hidden" name="rectangle salah 4" aria-label="rectangle salah 4">
                            <div className="pageItem state btn-off">
                                <div id="item211323" alt="rectangle benar" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <div data-ani="appear-208703 0.6s linear 1" data-id="208703" id="item208703" data-hidestart="1" className="pageItem group hidden" alt="normalisas CRP" style={{ left: '1191px', top: '506px', width: ' 369px', height: '83px' }}>
                            <div id="item193016" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Normalisasi CRP" style={{ left: '55px', top: '20px' }} id="item193669" className="pageItem " data-src="assets/images/item_193669.png" />
                        </div>
                        <div data-ani="appear-208755 0.6s linear 1" data-id="208755" id="item208755" data-hidestart="1" className="pageItem group hidden" alt="penurunan nilai FPC" style={{ left: '512px', top: '625px', width: ' 369px', height: '83px' }}>
                            <div id="item208756" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Penurunan nilai FPC" style={{ left: '23px', top: '20px' }} id="item208757" className="pageItem " data-src="assets/images/item_208757.png" />
                        </div>
                        <div data-ani="appear-208860 0.6s linear 1" data-id="208860" id="item208860" data-hidestart="1" className="pageItem group hidden" alt="remisi simtomatis" style={{ left: '1189px', top: '629px', width: ' 369px', height: '83px' }}>
                            <div id="item208861" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Remisi simtomatis" style={{ left: '47px', top: '20px' }} id="item208862" className="pageItem " data-src="assets/images/item_208862.png" />
                        </div>
                        <div data-ani="appear-208964 0.6s linear 1" data-id="208964" id="item208964" data-hidestart="1" className="pageItem group hidden" alt="tidak ada disabilitas" style={{ left: '1453px', top: '745px', width: ' 369px', height: '83px' }}>
                            <div id="item208965" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Tidak ada disabilitas" style={{ left: '34px', top: '21px' }} id="item208966" className="pageItem " data-src="assets/images/item_208966.png" />
                        </div>
                        <div data-ani="appear-208704 0.6s linear 1" data-id="208704" id="item208704" data-hidestart="1" className="pageItem group hidden" alt="penyembuhan endoskopis" style={{ left: '519px', top: '506px', width: ' 369px', height: '83px' }}>
                            <div id="item208602" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Penyembuhan endoskopis" style={{ left: '29px', top: '3px' }} id="item208653" className="pageItem " data-src="assets/images/item_208653.png" />
                        </div>
                        <div data-ani="appear-209068 0.6s linear 1" data-id="209068" id="item209068" data-hidestart="1" className="pageItem group hidden" alt="perbaikan kualitas hidup" style={{ left: '863px', top: '745px', width: ' 369px', height: '83px' }}>
                            <div id="item209069" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Perbaikan kualitas hidup " style={{ left: '29px', top: '3px' }} id="item209070" className="pageItem " data-src="assets/images/item_209070.png" />
                        </div>
                        <div data-ani="appear-209166 0.6s linear 1" data-id="209166" id="item209166" data-hidestart="1" className="pageItem group hidden" alt="respons simtomatis / klinis" style={{ left: '278px', top: '746px', width: ' 369px', height: '83px' }}>
                            <div id="item209167" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Respons simtomatis/klinis" style={{ left: '29px', top: '3px' }} id="item209169" className="pageItem " data-src="assets/images/item_209169.png" />
                        </div>
                        <button data-ani="appear-211214 0.6s linear 1" data-id="211214" id="item211214" data-hidestart="1" className="pageItem has-on has-down hidden" name="12" aria-label="12" onClick={handleOnClickPenurunanNilanFPC1}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item211220" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '7px', top: '2px' }} id="item211221" className="pageItem " data-src="assets/images/item_211221.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item211246" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '12px', top: '2px' }} id="item211248" className="pageItem " data-src="assets/images/item_211248.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item211272" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#ffffff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '7px', top: '2px' }} id="item211273" className="pageItem " data-src="assets/images/item_211273.png" />
                            </div>
                        </button>
                        <button data-ani="appear-224971 0.6s linear 1" data-id="224971" id="item224971" data-hidestart="1" className="pageItem has-on has-down hidden" name="16" aria-label="16" onClick={handleOnClickResponsSimtomatis1}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item225005" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '7px', top: '2px' }} id="item225006" className="pageItem " data-src="assets/images/item_225006.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item224980" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" stroke="" strokeWidth="1" fill="#45b86b" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '12px', top: '2px' }} id="item224981" className="pageItem " data-src="assets/images/item_224981.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item225030" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#ffffff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '7px', top: '2px' }} id="item225031" className="pageItem " data-src="assets/images/item_225031.png" />
                            </div>
                        </button>
                        <button data-ani="appear-211486 0.6s linear 1" data-id="211486" id="item211486" data-hidestart="1" className="pageItem has-on has-down hidden" name="13" aria-label="13" onClick={handleOnClickEndoskopis1}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item211518" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '7px', top: '2px' }} id="item211519" className="pageItem " data-src="assets/images/item_211519.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item211493" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '12px', top: '2px' }} id="item211494" className="pageItem " data-src="assets/images/item_211494.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item211543" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#ffffff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{ left: '7px', top: '2px' }} id="item211544" className="pageItem " data-src="assets/images/item_211544.png" />
                            </div>
                        </button>
                        <button data-ani="appear-223767 0.6s linear 1" data-id="223767" id="item223767" data-hidestart="1" className="pageItem has-on has-down hidden" name="23" aria-label="23" onClick={handleOnClickEndoskopis2}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item223801" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '7px', top: '2px' }} id="item223802" className="pageItem " data-src="assets/images/item_223802.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item223776" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '12px', top: '2px' }} id="item223777" className="pageItem " data-src="assets/images/item_223777.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item223827" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#ffffff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '7px', top: '2px' }} id="item223828" className="pageItem " data-src="assets/images/item_223828.png" />
                            </div>
                        </button>
                        <button data-ani="appear-224497 0.6s linear 1" data-id="224497" id="item224497" data-hidestart="1" className="pageItem has-on has-down hidden" name="22" aria-label="22" onClick={handleOnClickPenurunanNilanFPC2}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item224530" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '7px', top: '2px' }} id="item224531" className="pageItem " data-src="assets/images/item_224531.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item224505" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" stroke="" strokeWidth="1" fill="#45b86b" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '12px', top: '2px' }} id="item224506" className="pageItem " data-src="assets/images/item_224506.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item224555" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#ffffff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '7px', top: '2px' }} id="item224556" className="pageItem " data-src="assets/images/item_224556.png" />
                            </div>
                        </button>
                        <button data-ani="appear-225054 0.6s linear 1" data-id="225054" id="item225054" data-hidestart="1" className="pageItem has-on has-down hidden" name="26" aria-label="26" onClick={handleOnClickResponsSimtomatis2}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item225085" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '7px', top: '2px' }} id="item225086" className="pageItem " data-src="assets/images/item_225086.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item225060" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '12px', top: '2px' }} id="item225061" className="pageItem " data-src="assets/images/item_225061.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item225110" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#ffffff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{ left: '7px', top: '2px' }} id="item225111" className="pageItem " data-src="assets/images/item_225111.png" />
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-209224 1s cubic-bezier(.2,.6,.35,1) 1" data-id="209224" id="item209224" data-hidestart="1" className="pageItem hidden" name="jawaban benar 6" aria-label="jawaban benar 6">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" style={{ top: '59px' }} id="item209226" className="pageItem ">
                                    <svg version="1.1" width="284" height="284" >
                                        <ellipse cx="141.62" cy="141.62" rx="141.62" ry="141.62" fill="#fff" />
                                    </svg>
                                </div>
                                <div alt="Group" style={{ left: '260px', top: '60px' }} id="item209228" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" id="item209229" className="pageItem " data-src="assets/images/item_209229.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '3px', top: '93px' }} id="item209231" className="pageItem " data-src="assets/images/item_209231.png" />
                                </div>
                                <img src={blankImage} alt="Jawaban Kamu Benar! " style={{ left: '270px', top: '80px' }} id="item209232" className="pageItem " data-src="assets/images/item_209232.png" />
                                <div alt="Group" style={{ left: '30px' }} id="item209255" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '90px' }} id="item209256" className="pageItem " data-src="assets/images/item_209256.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '105px', top: '80px' }} id="item209257" className="pageItem " data-src="assets/images/item_209257.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '30px', top: '256px' }} id="item209258" className="pageItem " data-src="assets/images/item_209258.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '192px', top: '48px' }} id="item209259" className="pageItem " data-src="assets/images/item_209259.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '201px', top: '51px' }} id="item209260" className="pageItem " data-src="assets/images/item_209260.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '163px', top: '48px' }} id="item209261" className="pageItem " data-src="assets/images/item_209261.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '174px', top: '68px' }} id="item209262" className="pageItem " data-src="assets/images/item_209262.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '163px', top: '48px' }} id="item209263" className="pageItem " data-src="assets/images/item_209263.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '192px', top: '48px' }} id="item209264" className="pageItem " data-src="assets/images/item_209264.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '197px', top: '51px' }} id="item209265" className="pageItem " data-src="assets/images/item_209265.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '192px', top: '62px' }} id="item209266" className="pageItem " data-src="assets/images/item_209266.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '191px', top: '55px' }} id="item209267" className="pageItem " data-src="assets/images/item_209267.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '199px', top: '57px' }} id="item209268" className="pageItem " data-src="assets/images/item_209268.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '197px', top: '65px' }} id="item209269" className="pageItem " data-src="assets/images/item_209269.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '201px', top: '72px' }} id="item209270" className="pageItem " data-src="assets/images/item_209270.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '205px', top: '67px' }} id="item209271" className="pageItem " data-src="assets/images/item_209271.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '183px', top: '66px' }} id="item209273" className="pageItem " data-src="assets/images/item_209273.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '177px', top: '73px' }} id="item209274" className="pageItem " data-src="assets/images/item_209274.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '180px', top: '93px' }} id="item209276" className="pageItem " data-src="assets/images/item_209276.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '176px', top: '67px' }} id="item209277" className="pageItem " data-src="assets/images/item_209277.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '176px', top: '65px' }} id="item209278" className="pageItem " data-src="assets/images/item_209278.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '174px', top: '67px' }} id="item209279" className="pageItem " data-src="assets/images/item_209279.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '184px', top: '77px' }} id="item209280" className="pageItem " data-src="assets/images/item_209280.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '183px', top: '77px' }} id="item209281" className="pageItem " data-src="assets/images/item_209281.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '101px', top: '22px' }} id="item209284" className="pageItem " data-src="assets/images/item_209284.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '101px', top: '23px' }} id="item209285" className="pageItem " data-src="assets/images/item_209285.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '101px', top: '28px' }} id="item209286" className="pageItem " data-src="assets/images/item_209286.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '68px', top: '57px' }} id="item209287" className="pageItem " data-src="assets/images/item_209287.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '80px', top: '57px' }} id="item209288" className="pageItem " data-src="assets/images/item_209288.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '56px', top: '93px' }} id="item209289" className="pageItem " data-src="assets/images/item_209289.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '60px', top: '40px' }} id="item209290" className="pageItem " data-src="assets/images/item_209290.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '108px', top: '42px' }} id="item209291" className="pageItem " data-src="assets/images/item_209291.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '111px', top: '42px' }} id="item209292" className="pageItem " data-src="assets/images/item_209292.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '61px' }} id="item209293" className="pageItem " data-src="assets/images/item_209293.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '13px' }} id="item209294" className="pageItem " data-src="assets/images/item_209294.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '88px', top: '33px' }} id="item209295" className="pageItem " data-src="assets/images/item_209295.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '65px', top: '33px' }} id="item209296" className="pageItem " data-src="assets/images/item_209296.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '13px' }} id="item209297" className="pageItem " data-src="assets/images/item_209297.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '76px', top: '52px' }} id="item209298" className="pageItem " data-src="assets/images/item_209298.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '66px', top: '39px' }} id="item209300" className="pageItem " data-src="assets/images/item_209300.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '66px', top: '39px' }} id="item209301" className="pageItem " data-src="assets/images/item_209301.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '65px', top: '39px' }} id="item209305" className="pageItem " data-src="assets/images/item_209305.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '66px', top: '37px' }} id="item209306" className="pageItem " data-src="assets/images/item_209306.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '39px' }} id="item209307" className="pageItem " data-src="assets/images/item_209307.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '39px' }} id="item209308" className="pageItem " data-src="assets/images/item_209308.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '39px' }} id="item209313" className="pageItem " data-src="assets/images/item_209313.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '41px' }} id="item209314" className="pageItem " data-src="assets/images/item_209314.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '66px', top: '41px' }} id="item209315" className="pageItem " data-src="assets/images/item_209315.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '37px' }} id="item209316" className="pageItem " data-src="assets/images/item_209316.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '33px' }} id="item209317" className="pageItem " data-src="assets/images/item_209317.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '32px' }} id="item209318" className="pageItem " data-src="assets/images/item_209318.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '76px', top: '43px' }} id="item209319" className="pageItem " data-src="assets/images/item_209319.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '74px', top: '37px' }} id="item209320" className="pageItem " data-src="assets/images/item_209320.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '85px', top: '38px' }} id="item209321" className="pageItem " data-src="assets/images/item_209321.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '97px', top: '37px' }} id="item209322" className="pageItem " data-src="assets/images/item_209322.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '100px', top: '37px' }} id="item209323" className="pageItem " data-src="assets/images/item_209323.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '90px', top: '40px' }} id="item209324" className="pageItem " data-src="assets/images/item_209324.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '94px', top: '43px' }} id="item209325" className="pageItem " data-src="assets/images/item_209325.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '99px', top: '40px' }} id="item209326" className="pageItem " data-src="assets/images/item_209326.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '41px' }} id="item209327" className="pageItem " data-src="assets/images/item_209327.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '90px', top: '38px' }} id="item209328" className="pageItem " data-src="assets/images/item_209328.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '93px', top: '37px' }} id="item209329" className="pageItem " data-src="assets/images/item_209329.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '97px', top: '37px' }} id="item209337" className="pageItem " data-src="assets/images/item_209337.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '85px', top: '38px' }} id="item209338" className="pageItem " data-src="assets/images/item_209338.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '88px', top: '38px' }} id="item209339" className="pageItem " data-src="assets/images/item_209339.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '39px' }} id="item209340" className="pageItem " data-src="assets/images/item_209340.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '92px', top: '39px' }} id="item209341" className="pageItem " data-src="assets/images/item_209341.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '94px', top: '40px' }} id="item209342" className="pageItem " data-src="assets/images/item_209342.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '39px' }} id="item209344" className="pageItem " data-src="assets/images/item_209344.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '37px' }} id="item209345" className="pageItem " data-src="assets/images/item_209345.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '85px', top: '37px' }} id="item209347" className="pageItem " data-src="assets/images/item_209347.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '59px', top: '37px' }} id="item209348" className="pageItem " data-src="assets/images/item_209348.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '60px', top: '43px' }} id="item209349" className="pageItem " data-src="assets/images/item_209349.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '62px', top: '37px' }} id="item209350" className="pageItem " data-src="assets/images/item_209350.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '38px' }} id="item209351" className="pageItem " data-src="assets/images/item_209351.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '68px', top: '38px' }} id="item209352" className="pageItem " data-src="assets/images/item_209352.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '37px' }} id="item209353" className="pageItem " data-src="assets/images/item_209353.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '69px', top: '41px' }} id="item209354" className="pageItem " data-src="assets/images/item_209354.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '70px', top: '40px' }} id="item209355" className="pageItem " data-src="assets/images/item_209355.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '71px', top: '40px' }} id="item209356" className="pageItem " data-src="assets/images/item_209356.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '73px', top: '39px' }} id="item209358" className="pageItem " data-src="assets/images/item_209358.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '69px', top: '38px' }} id="item209359" className="pageItem " data-src="assets/images/item_209359.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '66px', top: '43px' }} id="item209360" className="pageItem " data-src="assets/images/item_209360.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '59px', top: '37px' }} id="item209361" className="pageItem " data-src="assets/images/item_209361.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '60px', top: '41px' }} id="item209362" className="pageItem " data-src="assets/images/item_209362.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '62px', top: '37px' }} id="item209363" className="pageItem " data-src="assets/images/item_209363.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '38px' }} id="item209364" className="pageItem " data-src="assets/images/item_209364.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '66px', top: '38px' }} id="item209365" className="pageItem " data-src="assets/images/item_209365.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '37px' }} id="item209366" className="pageItem " data-src="assets/images/item_209366.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '66px', top: '39px' }} id="item209367" className="pageItem " data-src="assets/images/item_209367.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '70px', top: '39px' }} id="item209368" className="pageItem " data-src="assets/images/item_209368.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '65px', top: '39px' }} id="item209371" className="pageItem " data-src="assets/images/item_209371.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '66px', top: '38px' }} id="item209372" className="pageItem " data-src="assets/images/item_209372.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '66px', top: '41px' }} id="item209373" className="pageItem " data-src="assets/images/item_209373.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '59px', top: '37px' }} id="item209374" className="pageItem " data-src="assets/images/item_209374.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '77px', top: '38px' }} id="item209375" className="pageItem " data-src="assets/images/item_209375.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '68px', top: '1px' }} id="item209376" className="pageItem " data-src="assets/images/item_209376.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '110px', top: '51px' }} id="item209377" className="pageItem " data-src="assets/images/item_209377.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '2px', top: '108px' }} id="item209379" className="pageItem " data-src="assets/images/item_209379.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '26px', top: '84px' }} id="item209380" className="pageItem " data-src="assets/images/item_209380.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '60px', top: '80px' }} id="item209381" className="pageItem " data-src="assets/images/item_209381.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '109px', top: '97px' }} id="item209383" className="pageItem " data-src="assets/images/item_209383.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '83px', top: '219px' }} id="item209384" className="pageItem " data-src="assets/images/item_209384.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '64px', top: '76px' }} id="item209385" className="pageItem " data-src="assets/images/item_209385.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '65px', top: '165px' }} id="item209386" className="pageItem " data-src="assets/images/item_209386.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '62px', top: '197px' }} id="item209387" className="pageItem " data-src="assets/images/item_209387.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '61px', top: '227px' }} id="item209388" className="pageItem " data-src="assets/images/item_209388.png" />
                                    <div alt="Oval" style={{ left: '60px', top: '251px' }} id="item209389" className="pageItem ">
                                        <svg version="1.1" width="7" height="7" >
                                            <ellipse cx="2.34" cy="2.34" rx="2.34" ry="2.34" stroke="" strokeWidth="1" fill="#bcced1" />
                                        </svg>
                                    </div>
                                    <img src={blankImage} alt="Polygon" style={{ left: '121px', top: '95px' }} id="item209390" className="pageItem " data-src="assets/images/item_209390.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '125px', top: '99px' }} id="item209391" className="pageItem " data-src="assets/images/item_209391.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '175px', top: '102px' }} id="item209392" className="pageItem " data-src="assets/images/item_209392.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '146px', top: '106px' }} id="item209393" className="pageItem " data-src="assets/images/item_209393.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '12px', top: '129px' }} id="item209395" className="pageItem " data-src="assets/images/item_209395.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '12px', top: '128px' }} id="item209396" className="pageItem " data-src="assets/images/item_209396.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '22px', top: '203px' }} id="item209397" className="pageItem " data-src="assets/images/item_209397.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '23px', top: '181px' }} id="item209398" className="pageItem " data-src="assets/images/item_209398.png" />
                                    <img src={blankImage} alt="Polygon" style={{ top: '172px' }} id="item209399" className="pageItem " data-src="assets/images/item_209399.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '32px', top: '167px' }} id="item209400" className="pageItem " data-src="assets/images/item_209400.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '32px', top: '167px' }} id="item209401" className="pageItem " data-src="assets/images/item_209401.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '43px', top: '189px' }} id="item209402" className="pageItem " data-src="assets/images/item_209402.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '45px', top: '195px' }} id="item209403" className="pageItem " data-src="assets/images/item_209403.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '46px', top: '201px' }} id="item209404" className="pageItem " data-src="assets/images/item_209404.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '115px', top: '82px' }} id="item209405" className="pageItem " data-src="assets/images/item_209405.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '113px', top: '134px' }} id="item209406" className="pageItem " data-src="assets/images/item_209406.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '115px', top: '135px' }} id="item209407" className="pageItem " data-src="assets/images/item_209407.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '54px', top: '78px' }} id="item209408" className="pageItem " data-src="assets/images/item_209408.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '53px', top: '91px' }} id="item209409" className="pageItem " data-src="assets/images/item_209409.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '50px', top: '126px' }} id="item209410" className="pageItem " data-src="assets/images/item_209410.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '56px', top: '163px' }} id="item209411" className="pageItem " data-src="assets/images/item_209411.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '162px' }} id="item209412" className="pageItem " data-src="assets/images/item_209412.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '50px', top: '126px' }} id="item209413" className="pageItem " data-src="assets/images/item_209413.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '74px', top: '58px' }} id="item209415" className="pageItem " data-src="assets/images/item_209415.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '77px', top: '61px' }} id="item209416" className="pageItem " data-src="assets/images/item_209416.png" />
                                </div>
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-209418 1s cubic-bezier(.2,.6,.35,1) 1" data-id="209418" id="item209418" data-hidestart="1" className="pageItem hidden" name="jawaban salah 9" aria-label="jawaban salah 9">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" style={{ top: '60px' }} id="item209420" className="pageItem ">
                                    <svg version="1.1" width="284" height="284" >
                                        <ellipse cx="141.62" cy="141.62" rx="141.62" ry="141.62" fill="#fff" />
                                    </svg>
                                </div>
                                <div alt="Group" style={{ left: '260px', top: '61px' }} id="item209421" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" id="item209422" className="pageItem " data-src="assets/images/item_209422.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '3px', top: '93px' }} id="item209424" className="pageItem " data-src="assets/images/item_209424.png" />
                                </div>
                                <img src={blankImage} alt="Jawaban Kamu Kurang Tepat! " style={{ left: '257px', top: '83px' }} id="item209425" className="pageItem " data-src="assets/images/item_209425.png" />
                                <div alt="Group" style={{ left: '68px' }} id="item209448" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{ left: '37px', top: '25px' }} id="item209449" className="pageItem " data-src="assets/images/item_209449.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '44px', top: '30px' }} id="item209450" className="pageItem " data-src="assets/images/item_209450.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '56px', top: '54px' }} id="item209451" className="pageItem " data-src="assets/images/item_209451.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '52px', top: '54px' }} id="item209452" className="pageItem " data-src="assets/images/item_209452.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '45px', top: '38px' }} id="item209453" className="pageItem " data-src="assets/images/item_209453.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '46px', top: '40px' }} id="item209454" className="pageItem " data-src="assets/images/item_209454.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '91px', top: '39px' }} id="item209455" className="pageItem " data-src="assets/images/item_209455.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '94px', top: '40px' }} id="item209456" className="pageItem " data-src="assets/images/item_209456.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '49px', top: '12px' }} id="item209457" className="pageItem " data-src="assets/images/item_209457.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '49px', top: '12px' }} id="item209458" className="pageItem " data-src="assets/images/item_209458.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '48px', top: '36px' }} id="item209459" className="pageItem " data-src="assets/images/item_209459.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '80px', top: '45px' }} id="item209460" className="pageItem " data-src="assets/images/item_209460.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '73px', top: '31px' }} id="item209461" className="pageItem " data-src="assets/images/item_209461.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '52px', top: '31px' }} id="item209462" className="pageItem " data-src="assets/images/item_209462.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '74px', top: '36px' }} id="item209463" className="pageItem " data-src="assets/images/item_209463.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '74px', top: '36px' }} id="item209465" className="pageItem " data-src="assets/images/item_209465.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '74px', top: '36px' }} id="item209469" className="pageItem " data-src="assets/images/item_209469.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '73px', top: '39px' }} id="item209470" className="pageItem " data-src="assets/images/item_209470.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '74px', top: '35px' }} id="item209471" className="pageItem " data-src="assets/images/item_209471.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '53px', top: '36px' }} id="item209472" className="pageItem " data-src="assets/images/item_209472.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '53px', top: '36px' }} id="item209473" className="pageItem " data-src="assets/images/item_209473.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '52px', top: '36px' }} id="item209478" className="pageItem " data-src="assets/images/item_209478.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '53px', top: '39px' }} id="item209479" className="pageItem " data-src="assets/images/item_209479.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '52px', top: '35px' }} id="item209480" className="pageItem " data-src="assets/images/item_209480.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '74px', top: '29px' }} id="item209481" className="pageItem " data-src="assets/images/item_209481.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '50px', top: '30px' }} id="item209482" className="pageItem " data-src="assets/images/item_209482.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '64px', top: '41px' }} id="item209483" className="pageItem " data-src="assets/images/item_209483.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '49px' }} id="item209484" className="pageItem " data-src="assets/images/item_209484.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '61px', top: '35px' }} id="item209485" className="pageItem " data-src="assets/images/item_209485.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '61px', top: '10px' }} id="item209487" className="pageItem " data-src="assets/images/item_209487.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '37px' }} id="item209488" className="pageItem " data-src="assets/images/item_209488.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '79px', top: '15px' }} id="item209489" className="pageItem " data-src="assets/images/item_209489.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '71px', top: '33px' }} id="item209490" className="pageItem " data-src="assets/images/item_209490.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '49px', top: '33px' }} id="item209491" className="pageItem " data-src="assets/images/item_209491.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '35px' }} id="item209492" className="pageItem " data-src="assets/images/item_209492.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '86px', top: '39px' }} id="item209493" className="pageItem " data-src="assets/images/item_209493.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '57px', top: '93px' }} id="item209495" className="pageItem " data-src="assets/images/item_209495.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '28px', top: '244px' }} id="item209496" className="pageItem " data-src="assets/images/item_209496.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '20px', top: '79px' }} id="item209497" className="pageItem " data-src="assets/images/item_209497.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '20px', top: '175px' }} id="item209498" className="pageItem " data-src="assets/images/item_209498.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '67px', top: '79px' }} id="item209499" className="pageItem " data-src="assets/images/item_209499.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '67px', top: '175px' }} id="item209500" className="pageItem " data-src="assets/images/item_209500.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '51px', top: '94px' }} id="item209501" className="pageItem " data-src="assets/images/item_209501.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '109px', top: '141px' }} id="item209502" className="pageItem " data-src="assets/images/item_209502.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '106px', top: '99px' }} id="item209503" className="pageItem " data-src="assets/images/item_209503.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '111px', top: '119px' }} id="item209504" className="pageItem " data-src="assets/images/item_209504.png" />
                                    <img src={blankImage} alt="Polygon" style={{ top: '100px' }} id="item209505" className="pageItem " data-src="assets/images/item_209505.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '4px', top: '100px' }} id="item209506" className="pageItem " data-src="assets/images/item_209506.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '6px', top: '156px' }} id="item209507" className="pageItem " data-src="assets/images/item_209507.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '24px', top: '99px' }} id="item209508" className="pageItem " data-src="assets/images/item_209508.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '30px', top: '131px' }} id="item209509" className="pageItem " data-src="assets/images/item_209509.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '97px', top: '141px' }} id="item209510" className="pageItem " data-src="assets/images/item_209510.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '103px', top: '143px' }} id="item209512" className="pageItem " data-src="assets/images/item_209512.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '109px', top: '149px' }} id="item209514" className="pageItem " data-src="assets/images/item_209514.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '111px', top: '141px' }} id="item209515" className="pageItem " data-src="assets/images/item_209515.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '114px', top: '142px' }} id="item209516" className="pageItem " data-src="assets/images/item_209516.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '116px', top: '149px' }} id="item209517" className="pageItem " data-src="assets/images/item_209517.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '103px', top: '146px' }} id="item209518" className="pageItem " data-src="assets/images/item_209518.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '106px', top: '152px' }} id="item209519" className="pageItem " data-src="assets/images/item_209519.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '6px', top: '153px' }} id="item209520" className="pageItem " data-src="assets/images/item_209520.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '8px', top: '157px' }} id="item209522" className="pageItem " data-src="assets/images/item_209522.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '15px', top: '180px' }} id="item209523" className="pageItem " data-src="assets/images/item_209523.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '6px', top: '167px' }} id="item209524" className="pageItem " data-src="assets/images/item_209524.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '8px', top: '172px' }} id="item209525" className="pageItem " data-src="assets/images/item_209525.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '47px', top: '161px' }} id="item209527" className="pageItem " data-src="assets/images/item_209527.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '53px', top: '154px' }} id="item209528" className="pageItem " data-src="assets/images/item_209528.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '46px', top: '75px' }} id="item209530" className="pageItem " data-src="assets/images/item_209530.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '46px', top: '75px' }} id="item209531" className="pageItem " data-src="assets/images/item_209531.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '59px', top: '77px' }} id="item209532" className="pageItem " data-src="assets/images/item_209532.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '59px', top: '77px' }} id="item209533" className="pageItem " data-src="assets/images/item_209533.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '54px', top: '184px' }} id="item209534" className="pageItem " data-src="assets/images/item_209534.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '206px' }} id="item209535" className="pageItem " data-src="assets/images/item_209535.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '28px', top: '208px' }} id="item209536" className="pageItem " data-src="assets/images/item_209536.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '48px', top: '73px' }} id="item209540" className="pageItem " data-src="assets/images/item_209540.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '45px', top: '113px' }} id="item209541" className="pageItem " data-src="assets/images/item_209541.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '52px', top: '158px' }} id="item209542" className="pageItem " data-src="assets/images/item_209542.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '61px', top: '157px' }} id="item209543" className="pageItem " data-src="assets/images/item_209543.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '45px', top: '113px' }} id="item209544" className="pageItem " data-src="assets/images/item_209544.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '86px', top: '74px' }} id="item209545" className="pageItem " data-src="assets/images/item_209545.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '104px', top: '131px' }} id="item209546" className="pageItem " data-src="assets/images/item_209546.png" />
                                    <div alt="Oval" style={{ left: '106px', top: '133px' }} id="item209547" className="pageItem ">
                                        <svg version="1.1" width="8" height="8" >
                                            <ellipse cx="2.58" cy="2.58" rx="2.58" ry="2.58" stroke="" strokeWidth="1" fill="#8c8c9b" />
                                        </svg>
                                    </div>
                                    <img src={blankImage} alt="Polygon" style={{ left: '59px', top: '57px' }} id="item209548" className="pageItem " data-src="assets/images/item_209548.png" />
                                </div>
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-227628 1s cubic-bezier(.2,.6,.35,1) 1" data-id="227628" id="item227628" data-hidestart="1" className="pageItem hidden" name="mata 2" aria-label="mata 2">
                            <div className="pageItem state btn-off">
                                <div alt="Group" id="item218272" className="pageItem group ">
                                    <div alt="Oval" id="item218273" className="pageItem ">
                                        <svg version="1.1" width="6" height="6" >
                                            <circle cx="2" cy="2" r="2" stroke="" strokeWidth="1" fill="#1c1463" />
                                        </svg>
                                    </div>
                                    <img src={blankImage} alt="Polygon" style={{ left: '1px', top: '1px' }} id="item218274" className="pageItem " data-src="assets/images/item_218274.png" />
                                </div>
                                <div alt="Group" style={{ left: '21px' }} id="item218276" className="pageItem group ">
                                    <div alt="Oval" id="item218277" className="pageItem ">
                                        <svg version="1.1" width="6" height="6" >
                                            <circle cx="2" cy="2" r="2" stroke="" strokeWidth="1" fill="#1c1463" />
                                        </svg>
                                    </div>
                                    <img src={blankImage} alt="Polygon" style={{ left: '1px', top: '1px' }} id="item218278" className="pageItem " data-src="assets/images/item_218278.png" />
                                </div>
                            </div>
                        </button>
                        <button data-ani="appear-226796 0.6s linear 1" data-id="226796" id="item226796" data-hidestart="1" className="pageItem has-on has-down hidden" name="33" aria-label="33" onClick={handleOnClickEndoskopis3}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item226829" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '7px', top: '2px' }} id="item226830" className="pageItem " data-src="assets/images/item_226830.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item226804" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" stroke="" strokeWidth="1" fill="#45b86b" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '12px', top: '2px' }} id="item226805" className="pageItem " data-src="assets/images/item_226805.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item226854" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#ffffff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '7px', top: '2px' }} id="item226855" className="pageItem " data-src="assets/images/item_226855.png" />
                            </div>
                        </button>
                        <button data-ani="appear-226889 0.6s linear 1" data-id="226889" id="item226889" data-hidestart="1" className="pageItem has-on has-down hidden" name="32" aria-label="32" onClick={handleOnClickPenurunanNilanFPC3}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item226922" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '7px', top: '2px' }} id="item226923" className="pageItem " data-src="assets/images/item_226923.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item226897" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '12px', top: '2px' }} id="item226898" className="pageItem " data-src="assets/images/item_226898.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item226947" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#ffffff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '7px', top: '2px' }} id="item226948" className="pageItem " data-src="assets/images/item_226948.png" />
                            </div>
                        </button>
                        <button data-ani="appear-225274 0.6s linear 1" data-id="225274" id="item225274" data-hidestart="1" className="pageItem has-on has-down hidden" name="37" aria-label="37" onClick={handleOnClickNormalisasiCRP3}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item225304" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '7px', top: '2px' }} id="item225305" className="pageItem " data-src="assets/images/item_225305.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item225278" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '12px', top: '2px' }} id="item225280" className="pageItem " data-src="assets/images/item_225280.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item225329" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#ffffff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '7px', top: '2px' }} id="item225331" className="pageItem " data-src="assets/images/item_225331.png" />
                            </div>
                        </button>
                        <button data-ani="appear-225561 0.6s linear 1" data-id="225561" id="item225561" data-hidestart="1" className="pageItem has-on has-down hidden" name="38" aria-label="38" onClick={handleOnClickRemisiSimtomatis3}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item225594" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '7px', top: '2px' }} id="item225595" className="pageItem " data-src="assets/images/item_225595.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item225569" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '12px', top: '2px' }} id="item225570" className="pageItem " data-src="assets/images/item_225570.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item225620" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#ffffff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '7px', top: '2px' }} id="item225621" className="pageItem " data-src="assets/images/item_225621.png" />
                            </div>
                        </button>
                        <button data-ani="appear-225852 0.6s linear 1" data-id="225852" id="item225852" data-hidestart="1" className="pageItem has-on has-down hidden" name="39" aria-label="39" onClick={handleOnClickPerbaikanKualitasHidup3}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item225886" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '7px', top: '2px' }} id="item225887" className="pageItem " data-src="assets/images/item_225887.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item225860" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" stroke="" strokeWidth="1" fill="#45b86b" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '12px', top: '2px' }} id="item225862" className="pageItem " data-src="assets/images/item_225862.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item225912" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#ffffff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '7px', top: '2px' }} id="item225913" className="pageItem " data-src="assets/images/item_225913.png" />
                            </div>
                        </button>
                        <button data-ani="appear-226439 0.6s linear 1" data-id="226439" id="item226439" data-hidestart="1" className="pageItem has-on has-down hidden" name="40" aria-label="40" onClick={handleOnClickTidakAdaDisabilitas3}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item226470" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '7px', top: '2px' }} id="item226471" className="pageItem " data-src="assets/images/item_226471.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item226445" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" stroke="" strokeWidth="1" fill="#45b86b" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '12px', top: '2px' }} id="item226446" className="pageItem " data-src="assets/images/item_226446.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item226496" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#ffffff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '7px', top: '2px' }} id="item226497" className="pageItem " data-src="assets/images/item_226497.png" />
                            </div>
                        </button>
                        <button data-ani="appear-224889 0.6s linear 1" data-id="224889" id="item224889" data-hidestart="1" className="pageItem has-on has-down hidden" name="36" aria-label="36" onClick={handleOnClickResponsSimtomatis3}>
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item224922" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '7px', top: '2px' }} id="item224923" className="pageItem " data-src="assets/images/item_224923.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item224897" className="pageItem ">
                                    <svg version="1.1" width="40" height="40" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" stroke="" strokeWidth="1" fill="#ef435e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '12px', top: '2px' }} id="item224898" className="pageItem " data-src="assets/images/item_224898.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item224947" className="pageItem ">
                                    <svg version="1.1" width="38" height="38" >
                                        <ellipse cx="18.63" cy="18.5" rx="18.63" ry="18.5" fill="#ffffff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{ left: '7px', top: '2px' }} id="item224948" className="pageItem " data-src="assets/images/item_224948.png" />
                            </div>
                        </button>
                        <button data-id="227965" name="cek jawaban 3" aria-label="cek jawaban 3" id="item227965" onClick={handleOnClickCekJawaban} className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item227993" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Jawaban" style={{ left: '26px', top: '15px' }} id="item227994" className="pageItem " data-src="assets/images/item_227994.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item228018" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Jawaban" style={{ left: '26px', top: '15px' }} id="item228020" className="pageItem " data-src="assets/images/item_228020.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item227967" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Jawaban" style={{ left: '26px', top: '15px' }} id="item227969" className="pageItem " data-src="assets/images/item_227969.png" />
                            </div>
                        </button>
                        <button data-id="208459" name="icon back 62" onClick={handleOnClickGoToQuiz2} aria-label="icon back 62" id="item208459" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item208467" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '21px', top: '14px' }} id="item208468" className="pageItem " data-src="assets/images/item_208468.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item208470" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '21px', top: '14px' }} id="item208471" className="pageItem " data-src="assets/images/item_208471.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item208462" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '21px', top: '14px' }} id="item208464" className="pageItem " data-src="assets/images/item_208464.png" />
                            </div>
                        </button>
                        <button data-ani="fadein-208488 1s linear 1" data-id="208488" id="item208488" data-hidestart="1" className="pageItem has-on has-down hidden" name="soal selanjutnya 7" onClick={handleOnClickGoToQuiz4} aria-label="soal selanjutnya 7">
                            <div className="pageItem state btn-off">
                                <div id="item208517" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Soal Selanjutnya" style={{ left: '23px', top: '15px' }} id="item208519" className="pageItem " data-src="assets/images/item_208519.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item208543" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Soal Selanjutnya" style={{ left: '23px', top: '15px' }} id="item208544" className="pageItem " data-src="assets/images/item_208544.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item208491" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Soal Selanjutnya" style={{ left: '23px', top: '15px' }} id="item208493" className="pageItem " data-src="assets/images/item_208493.png" />
                            </div>
                        </button>
                        <button data-ani="fadein-209841 0.5s linear 1" data-id="209841" id="item209841" data-hidestart="1" className="pageItem has-on has-down hidden" name="cek penjelasan 6" onClick={handleOnClickGoToCekPenjelasan} aria-label="cek penjelasan 6">
                            <div className="pageItem state btn-off">
                                <div id="item209871" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Penjelasan" style={{ left: '26px', top: '15px' }} id="item209873" className="pageItem " data-src="assets/images/item_209873.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item209898" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Penjelasan" style={{ left: '26px', top: '15px' }} id="item209899" className="pageItem " data-src="assets/images/item_209899.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item209844" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Penjelasan" style={{ left: '26px', top: '15px' }} id="item209847" className="pageItem " data-src="assets/images/item_209847.png" />
                            </div>
                        </button>
                        <button data-id="221946" name="icon beranda 109" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 109" id="item221946" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221953" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '14px', top: '15px' }} id="item221954" className="pageItem " data-src="assets/images/item_221954.png" />
                                <img src={blankImage} alt="Polygon" style={{ left: '17px', top: '18px' }} id="item221955" className="pageItem " data-src="assets/images/item_221955.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221957" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '14px', top: '15px' }} id="item221958" className="pageItem " data-src="assets/images/item_221958.png" />
                                <img src={blankImage} alt="Polygon" style={{ left: '17px', top: '18px' }} id="item221959" className="pageItem " data-src="assets/images/item_221959.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221949" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '17px', top: '18px' }} id="item221950" className="pageItem " data-src="assets/images/item_221950.png" />
                                <img src={blankImage} alt="Polygon" style={{ left: '14px', top: '15px' }} id="item221951" className="pageItem " data-src="assets/images/item_221951.png" />
                            </div>
                        </button>
                        <Navigation />
                    </div>
                    <input type="hidden" id="quiz3_opt1" name="quiz3answer[]" value="" />
                    <input type="hidden" id="quiz3_opt2" name="quiz3answer[]" value="" />
                    <input type="hidden" id="quiz3_opt3" name="quiz3answer[]" value="" />
                    <input type="hidden" id="quiz3_opt4" name="quiz3answer[]" value="" />
                    <input type="hidden" id="quiz3_opt5" name="quiz3answer[]" value="" />
                    <input type="hidden" id="quiz3_opt6" name="quiz3answer[]" value="" />
                    <input type="hidden" id="quiz3_opt7" name="quiz3answer[]" value="" />
                </li>

            </ul>
        </div>
    )
}
export default Quiz3;