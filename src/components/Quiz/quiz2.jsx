import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Quiz2() {

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

    //////////////////////////////////////
    /// #page 54 --- KUIS 2
    ////////////////////////////////////

    // 1st option
    const handleOnRadioOpt1 = event => {
        event.preventDefault();
        var value = jQuery("#quiz2_opt1").val();
        if (value == "") {
            jQuery("#quiz2_opt1").val("1");
            go(event, [{ n: 1, link: 1, id: 228138, act: 'play' }]);
        } else {
            jQuery("#quiz2_opt1").val("");
            go(event, [{ n: 1, link: 1, id: 228138, act: 'hide' }]);
        }
    };

    // 2nd option
    const handleOnRadioOpt2 = event => {
        event.preventDefault();
        var value = jQuery("#quiz2_opt2").val();
        if (value == "") {
            jQuery("#quiz2_opt2").val("1");
            go(event, [{ n: 1, link: 1, id: 228148, act: 'play' }]);
        } else {
            jQuery("#quiz2_opt2").val("");
            go(event, [{ n: 1, link: 1, id: 228148, act: 'hide' }]);
        }
    };

    // 3rd option
    const handleOnRadioOpt3 = event => {
        event.preventDefault();
        var value = jQuery("#quiz2_opt3").val();
        if (value == "") {
            jQuery("#quiz2_opt3").val("0");
            go(event, [{ n: 1, link: 1, id: 228151, act: 'play' }]);
        } else {
            jQuery("#quiz2_opt3").val("");
            go(event, [{ n: 1, link: 1, id: 228151, act: 'hide' }]);
        }
    };

    
    // 4th option
    const handleOnRadioOpt4 = event => {
        event.preventDefault();
        var value = jQuery("#quiz2_opt4").val();
        if (value == "") {
            jQuery("#quiz2_opt4").val("1");
            go(event, [{ n: 1, link: 1, id: 228154, act: 'play' }]);
        } else {
            jQuery("#quiz2_opt4").val("");
            go(event, [{ n: 1, link: 1, id: 228154, act: 'hide' }]);
        }
    };


    // 5th option
    const handleOnRadioOpt5 = event => {
        event.preventDefault();
        var value = jQuery("#quiz2_opt5").val();
        if (value == "") {
            jQuery("#quiz2_opt5").val("1");
            go(event, [{ n: 1, link: 1, id: 228160, act: 'play' }]);
        } else {
            jQuery("#quiz2_opt5").val("");
            go(event, [{ n: 1, link: 1, id: 228160, act: 'hide' }]);
        }
    };

    // 6th option
    const handleOnRadioOpt6 = event => {
        event.preventDefault();
        var value = jQuery("#quiz2_opt6").val();
        if (value == "") {
            jQuery("#quiz2_opt6").val("1");
            go(event, [{ n: 1, link: 1, id: 228157, act: 'play' }]);
        } else {
            jQuery("#quiz2_opt6").val("");
            go(event, [{ n: 1, link: 1, id: 228157, act: 'hide' }]);
        }
    };

    // 7th option
    const handleOnRadioOpt7 = event => {
        event.preventDefault();
        var value = jQuery("#quiz2_opt7").val();
        if (value == "") {
            jQuery("#quiz2_opt7").val("0");
            go(event, [{ n: 1, link: 1, id: 228163, act: 'play' }]);
        } else {
            jQuery("#quiz2_opt7").val("");
            go(event, [{ n: 1, link: 1, id: 228163, act: 'hide' }]);
        }
    };

    // Cek Jawaban
    const handleOnClickCekJawaban = (event) => {
        event.preventDefault();
        var quiz2ansvalues = jQuery('input[name="quiz2answer[]"]').map(function () {
            return jQuery(this).val();
        }).get();

        const occurrences = quiz2ansvalues.filter(item => item === '0').length;
        const occurrences2 = quiz2ansvalues.filter(item => item === '1').length;
        const occurrences3 = quiz2ansvalues.filter(item => item === '').length;

        if (occurrences == 0 && occurrences2 == 5 && occurrences3 == 2) {
            jQuery('#item194593 audio')[0].play();
            jQuery('#item194599 video')[0].play();
            // orang dgn jawaban benar muncul
            go(event, [{ n: 1, link: 1, id: 194948, act: 'play' }, { n: 1, link: 1, id: 195143, act: 'hide' }]);
            // soal selanjutnya muncul, cek penjelasan hilang
            go(event, [{ n: 1, link: 1, id: 208142, act: 'play' }, { n: 1, link: 1, id: 208223, act: 'hide' }]);
            go(event, [{ n: 1, link: 1, id: 227623, act: 'hide' }]);
        } else {
            // salah
            jQuery('#item194596 audio')[0].play();
            jQuery('#item194606 video')[0].play();
            // orang dgn jawaban salah muncul
            go(event, [{ n: 1, link: 1, id: 195143, act: 'play' }, { n: 1, link: 1, id: 194948, act: 'hide' }]);
            // cek penjelasan muncul, soal selanjutnya hilang
            go(event, [{ n: 1, link: 1, id: 208223, act: 'play' }, { n: 1, link: 1, id: 208142, act: 'hide' }]);
            // salah - mata 2 muncul 
            go(event, [{ n: 1, link: 1, id: 227623, act: 'play' }]);
        }
    };


    const handleOnClickCekPenjelasan = (event) => {
        window.location.href = '/quiz2Penjelasan';
    }

    const handleOnClickGoToQuiz1 = (event) => {
        window.location.href = '/quiz1';
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
                <li className="page" data-name="54">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:194644,act:'play'},{del:3,n:1,link:1,id:194614,act:'play'},{n:1,id:195281,sn:1,act:'play'},{del:3,n:1,link:1,id:194856,act:'play'},{n:1,id:194793,sn:1,act:'play'},{n:1,link:1,id:194843,act:'play'},{n:1,id:194768,sn:1,act:'play'},{n:1,link:1,id:194869,act:'play'},{n:1,id:194818,sn:1,act:'play'},{n:1,link:1,id:194881,act:'play'},{n:1,id:194667,sn:1,act:'play'},{n:1,link:1,id:194894,act:'play'},{n:1,id:194692,sn:1,act:'play'},{n:1,link:1,id:194907,act:'play'},{n:1,id:194718,sn:1,act:'play'},{n:1,link:1,id:194919,act:'play'},{n:1,id:194743,sn:1,act:'play'}], 'pageload');" style={{ width: '1920px', height: '1080px' }}>
                        <div id="item264648" className="pageItem" style={{ height: '60px', width: '60px', left: '14px', top: '173px' }} alt="Sound">
                            <audio data-id="264648" className="mejs-no-controls" data-autoplay="1" data-autodelay="0" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/Quiz 2 Full.mp3" />
                            </audio>
                        </div>
                        <div id="item194584" className="pageItem" style={{ height: '60px', width: '60px', left: '81px', top: '42px' }} alt="Sound">
                            <audio data-id="194584" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/quiz 2-1.mp3" />
                            </audio>
                        </div>
                        <div id="item194589" className="pageItem" style={{ height: '60px', width: '60px', left: '165px', top: '42px' }} alt="Sound">
                            <audio data-id="194589" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/quiz 2-2.mp3" />
                            </audio>
                        </div>
                        <div id="item194593" className="pageItem" style={{ height: '60px', width: '60px', left: '255px', top: '42px' }} alt="Sound">
                            <audio data-id="194593" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/jawaban benar.mp3" />
                            </audio>
                        </div>
                        <div id="item194596" className="pageItem" style={{ height: '60px', width: '60px', left: '321px', top: '42px' }} alt="Sound">
                            <audio data-id="194596" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/jawaban salah.mp3" />
                            </audio>
                        </div>
                        <div id="item194599" className="pageItem" alt="Movie" style={{ left: '10px', top: '33px' }}>
                            <video width="640" height="360" data-id="194599" poster="assets/images/item_194599.png" webkit-playsinline="playsinline" playsInline="playsinline" className="mejs-none">
                                <source src="assets/media/Correct Answer sound effect.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div id="item194606" className="pageItem" alt="Movie" style={{ left: '14px', top: '-7px' }}>
                            <video width="640" height="360" data-id="194606" poster="assets/images/item_194606.png" data-stoplast="1" data-nopause="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/Incorrect Answer sound effect.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div id="item194612" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div data-ani="flyinfromtop-194614 1s cubic-bezier(.2,.6,.35,1) 1" data-id="194614" id="item194614" data-hidestart="1" className="pageItem group hidden" alt="soal" style={{ left: '321px', top: '285px', width: ' 1279px', height: '111px' }}>
                            <div id="item194615" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Berikut yang merupakan faktor risiko terjadi IBD adalah" style={{ left: '83px', top: '29px' }} id="item194617" className="pageItem " data-src="assets/images/item_194617.png" />
                        </div>
                        <div id="item194640" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item194642" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <img src={blankImage} data-ani="fadein-194644 1s linear 1" data-id="194644" id="item194644" data-hidestart="1" className="pageItem hidden" alt="KUIS 2" style={{ left: '712px', top: '157px' }} data-src="assets/images/item_194644.png" />
                        <div data-ani="flyinfromleft-194667 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="194667" id="item194667" data-hidestart="1" className="pageItem group hidden" alt="fisik" style={{ left: '310px', top: '730px', width: ' 593px', height: '56px' }}>
                            <div id="item194668" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Aktivitas fisik" style={{ left: '107px', top: '8px' }} id="item194669" className="pageItem " data-src="assets/images/item_194669.png" />
                        </div>
                        <div data-ani="flyinfromright-194692 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="194692" id="item194692" data-hidestart="1" className="pageItem group hidden" alt="imun" style={{ left: '1038px', top: '481px', width: ' 594px', height: '56px' }}>
                            <div id="item194693" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Respons imun tubuh " style={{ left: '88px', top: '8px' }} id="item194694" className="pageItem " data-src="assets/images/item_194694.png" />
                        </div>
                        <div data-ani="flyinfromright-194718 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="194718" id="item194718" data-hidestart="1" className="pageItem group hidden" alt="mikrobiota" style={{ left: '1038px', top: '579px', width: ' 594px', height: '56px' }}>
                            <div id="item194719" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Mikrobiota " style={{ left: '88px', top: '7px' }} id="item194720" className="pageItem " data-src="assets/images/item_194720.png" />
                        </div>
                        <div data-ani="flyinfromright-194743 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="194743" id="item194743" data-hidestart="1" className="pageItem group hidden" alt="pendarahan usus" style={{ left: '1038px', top: '680px', width: ' 594px', height: '56px' }}>
                            <div id="item194744" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Perdarahan usus " style={{ left: '88px', top: '9px' }} id="item194745" className="pageItem " data-src="assets/images/item_194745.png" />
                        </div>
                        <div data-ani="flyinfromleft-194768 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="194768" id="item194768" data-hidestart="1" className="pageItem group hidden" alt="genetk" style={{ left: '309px', top: '530px', width: ' 593px', height: '56px' }}>
                            <div id="item194769" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Genetik" style={{ left: '108px', top: '9px' }} id="item194770" className="pageItem " data-src="assets/images/item_194770.png" />
                        </div>
                        <div data-ani="flyinfromleft-194793 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="194793" id="item194793" data-hidestart="1" className="pageItem group hidden" alt="antibiotik" style={{ left: '309px', top: '431px', width: ' 593px', height: '56px' }}>
                            <div id="item194794" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Penggunaan antibiotik " style={{ left: '108px', top: '9px' }} id="item194795" className="pageItem " data-src="assets/images/item_194795.png" />
                        </div>
                        <div data-ani="flyinfromleft-194818 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="194818" id="item194818" data-hidestart="1" className="pageItem group hidden" alt="kehamilan" style={{ left: '309px', top: '630px', width: ' 593px', height: '56px' }}>
                            <div id="item194819" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Kehamilan" style={{ left: '108px', top: '8px' }} id="item194820" className="pageItem " data-src="assets/images/item_194820.png" />
                        </div>
                        <button data-ani="flyinfromleft-194843 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="194843" id="item194843" data-hidestart="1" className="pageItem has-on has-down hidden" name="button 2" onClick={handleOnRadioOpt2} aria-label="button 2">
                            <div className="pageItem state btn-off">
                                <div id="item194850" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item194853" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item194855" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="flyinfromleft-194856 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="194856" id="item194856" data-hidestart="1" className="pageItem has-down has-on hidden" name="button 1" onClick={handleOnRadioOpt1} aria-label="button 1">
                            <div className="pageItem state btn-off">
                                <div id="item194864" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item194866" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item194868" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="flyinfromleft-194869 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="194869" id="item194869" data-hidestart="1" className="pageItem has-down has-on hidden" name="button 3" onClick={handleOnRadioOpt3} aria-label="button 3">
                            <div className="pageItem state btn-off">
                                <div id="item194876" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item194878" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item194880" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="flyinfromleft-194881 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="194881" id="item194881" data-hidestart="1" className="pageItem has-on has-down hidden" name="button 4" onClick={handleOnRadioOpt4} aria-label="button 4">
                            <div className="pageItem state btn-off">
                                <div id="item194888" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item194890" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item194892" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="flyinfromright-194894 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="194894" id="item194894" data-hidestart="1" className="pageItem has-down has-on hidden" name="button 5" onClick={handleOnRadioOpt5} aria-label="button 5">
                            <div className="pageItem state btn-off">
                                <div id="item194901" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item194903" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item194906" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="flyinfromright-194907 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="194907" id="item194907" data-hidestart="1" className="pageItem has-on has-down hidden" name="button 6" onClick={handleOnRadioOpt6} aria-label="button 6">
                            <div className="pageItem state btn-off">
                                <div id="item194914" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item194916" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item194918" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="flyinfromright-194919 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="194919" id="item194919" data-hidestart="1" className="pageItem has-on has-down hidden" name="button 7" onClick={handleOnRadioOpt7} aria-label="button 7">
                            <div className="pageItem state btn-off">
                                <div id="item194926" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item194928" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item194930" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-194948 1s cubic-bezier(.2,.6,.35,1) 1" data-id="194948" id="item194948" data-hidestart="1" className="pageItem hidden" name="jawaban benar 2" aria-label="jawaban benar 2">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" style={{ top: '59px' }} id="item194951" className="pageItem ">
                                    <svg version="1.1" width="284" height="284">
                                        <ellipse cx="141.62" cy="141.62" rx="141.62" ry="141.62" fill="#fff" />
                                    </svg>
                                </div>
                                <div alt="Group" style={{ left: '260px', top: '60px' }} id="item194952" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" id="item194953" className="pageItem " data-src="assets/images/item_194953.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '3px', top: '93px' }} id="item194955" className="pageItem " data-src="assets/images/item_194955.png" />
                                </div>
                                <img src={blankImage} alt="Jawaban Kamu Benar! " style={{ left: '270px', top: '80px' }} id="item194956" className="pageItem " data-src="assets/images/item_194956.png" />
                                <div alt="Group" style={{ left: '30px' }} id="item194979" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '90px' }} id="item194980" className="pageItem " data-src="assets/images/item_194980.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '105px', top: '80px' }} id="item194981" className="pageItem " data-src="assets/images/item_194981.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '30px', top: '256px' }} id="item194982" className="pageItem " data-src="assets/images/item_194982.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '192px', top: '48px' }} id="item194983" className="pageItem " data-src="assets/images/item_194983.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '201px', top: '51px' }} id="item194984" className="pageItem " data-src="assets/images/item_194984.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '163px', top: '48px' }} id="item194985" className="pageItem " data-src="assets/images/item_194985.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '174px', top: '68px' }} id="item194986" className="pageItem " data-src="assets/images/item_194986.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '163px', top: '48px' }} id="item194987" className="pageItem " data-src="assets/images/item_194987.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '192px', top: '48px' }} id="item194988" className="pageItem " data-src="assets/images/item_194988.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '197px', top: '51px' }} id="item194989" className="pageItem " data-src="assets/images/item_194989.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '192px', top: '62px' }} id="item194990" className="pageItem " data-src="assets/images/item_194990.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '191px', top: '55px' }} id="item194991" className="pageItem " data-src="assets/images/item_194991.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '199px', top: '57px' }} id="item194992" className="pageItem " data-src="assets/images/item_194992.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '197px', top: '65px' }} id="item194993" className="pageItem " data-src="assets/images/item_194993.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '201px', top: '72px' }} id="item194994" className="pageItem " data-src="assets/images/item_194994.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '205px', top: '67px' }} id="item194995" className="pageItem " data-src="assets/images/item_194995.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '183px', top: '66px' }} id="item194996" className="pageItem " data-src="assets/images/item_194996.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '177px', top: '73px' }} id="item194997" className="pageItem " data-src="assets/images/item_194997.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '180px', top: '93px' }} id="item194998" className="pageItem " data-src="assets/images/item_194998.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '176px', top: '67px' }} id="item194999" className="pageItem " data-src="assets/images/item_194999.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '176px', top: '65px' }} id="item195000" className="pageItem " data-src="assets/images/item_195000.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '174px', top: '67px' }} id="item195001" className="pageItem " data-src="assets/images/item_195001.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '184px', top: '77px' }} id="item195002" className="pageItem " data-src="assets/images/item_195002.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '183px', top: '77px' }} id="item195003" className="pageItem " data-src="assets/images/item_195003.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '101px', top: '22px' }} id="item195006" className="pageItem " data-src="assets/images/item_195006.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '101px', top: '23px' }} id="item195008" className="pageItem " data-src="assets/images/item_195008.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '101px', top: '28px' }} id="item195009" className="pageItem " data-src="assets/images/item_195009.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '68px', top: '57px' }} id="item195010" className="pageItem " data-src="assets/images/item_195010.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '80px', top: '57px' }} id="item195011" className="pageItem " data-src="assets/images/item_195011.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '56px', top: '93px' }} id="item195012" className="pageItem " data-src="assets/images/item_195012.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '60px', top: '40px' }} id="item195013" className="pageItem " data-src="assets/images/item_195013.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '108px', top: '42px' }} id="item195014" className="pageItem " data-src="assets/images/item_195014.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '111px', top: '42px' }} id="item195015" className="pageItem " data-src="assets/images/item_195015.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '61px' }} id="item195016" className="pageItem " data-src="assets/images/item_195016.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '13px' }} id="item195018" className="pageItem " data-src="assets/images/item_195018.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '88px', top: '33px' }} id="item195019" className="pageItem " data-src="assets/images/item_195019.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '65px', top: '33px' }} id="item195020" className="pageItem " data-src="assets/images/item_195020.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '13px' }} id="item195021" className="pageItem " data-src="assets/images/item_195021.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '76px', top: '52px' }} id="item195022" className="pageItem " data-src="assets/images/item_195022.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '66px', top: '39px' }} id="item195024" className="pageItem " data-src="assets/images/item_195024.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '66px', top: '39px' }} id="item195025" className="pageItem " data-src="assets/images/item_195025.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '65px', top: '39px' }} id="item195029" className="pageItem " data-src="assets/images/item_195029.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '66px', top: '37px' }} id="item195031" className="pageItem " data-src="assets/images/item_195031.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '39px' }} id="item195032" className="pageItem " data-src="assets/images/item_195032.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '39px' }} id="item195033" className="pageItem " data-src="assets/images/item_195033.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '39px' }} id="item195037" className="pageItem " data-src="assets/images/item_195037.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '41px' }} id="item195038" className="pageItem " data-src="assets/images/item_195038.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '66px', top: '41px' }} id="item195039" className="pageItem " data-src="assets/images/item_195039.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '37px' }} id="item195040" className="pageItem " data-src="assets/images/item_195040.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '33px' }} id="item195041" className="pageItem " data-src="assets/images/item_195041.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '32px' }} id="item195042" className="pageItem " data-src="assets/images/item_195042.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '76px', top: '43px' }} id="item195043" className="pageItem " data-src="assets/images/item_195043.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '74px', top: '37px' }} id="item195045" className="pageItem " data-src="assets/images/item_195045.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '85px', top: '38px' }} id="item195046" className="pageItem " data-src="assets/images/item_195046.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '97px', top: '37px' }} id="item195047" className="pageItem " data-src="assets/images/item_195047.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '100px', top: '37px' }} id="item195048" className="pageItem " data-src="assets/images/item_195048.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '90px', top: '40px' }} id="item195049" className="pageItem " data-src="assets/images/item_195049.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '94px', top: '43px' }} id="item195050" className="pageItem " data-src="assets/images/item_195050.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '99px', top: '40px' }} id="item195051" className="pageItem " data-src="assets/images/item_195051.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '41px' }} id="item195052" className="pageItem " data-src="assets/images/item_195052.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '90px', top: '38px' }} id="item195053" className="pageItem " data-src="assets/images/item_195053.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '93px', top: '37px' }} id="item195054" className="pageItem " data-src="assets/images/item_195054.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '97px', top: '37px' }} id="item195061" className="pageItem " data-src="assets/images/item_195061.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '85px', top: '38px' }} id="item195062" className="pageItem " data-src="assets/images/item_195062.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '88px', top: '38px' }} id="item195063" className="pageItem " data-src="assets/images/item_195063.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '39px' }} id="item195064" className="pageItem " data-src="assets/images/item_195064.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '92px', top: '39px' }} id="item195065" className="pageItem " data-src="assets/images/item_195065.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '94px', top: '40px' }} id="item195066" className="pageItem " data-src="assets/images/item_195066.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '39px' }} id="item195069" className="pageItem " data-src="assets/images/item_195069.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '37px' }} id="item195070" className="pageItem " data-src="assets/images/item_195070.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '85px', top: '37px' }} id="item195071" className="pageItem " data-src="assets/images/item_195071.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '59px', top: '37px' }} id="item195072" className="pageItem " data-src="assets/images/item_195072.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '60px', top: '43px' }} id="item195073" className="pageItem " data-src="assets/images/item_195073.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '62px', top: '37px' }} id="item195074" className="pageItem " data-src="assets/images/item_195074.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '38px' }} id="item195075" className="pageItem " data-src="assets/images/item_195075.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '68px', top: '38px' }} id="item195076" className="pageItem " data-src="assets/images/item_195076.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '37px' }} id="item195077" className="pageItem " data-src="assets/images/item_195077.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '69px', top: '41px' }} id="item195078" className="pageItem " data-src="assets/images/item_195078.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '70px', top: '40px' }} id="item195079" className="pageItem " data-src="assets/images/item_195079.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '71px', top: '40px' }} id="item195081" className="pageItem " data-src="assets/images/item_195081.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '73px', top: '39px' }} id="item195083" className="pageItem " data-src="assets/images/item_195083.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '69px', top: '38px' }} id="item195084" className="pageItem " data-src="assets/images/item_195084.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '66px', top: '43px' }} id="item195085" className="pageItem " data-src="assets/images/item_195085.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '59px', top: '37px' }} id="item195086" className="pageItem " data-src="assets/images/item_195086.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '60px', top: '41px' }} id="item195087" className="pageItem " data-src="assets/images/item_195087.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '62px', top: '37px' }} id="item195088" className="pageItem " data-src="assets/images/item_195088.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '38px' }} id="item195089" className="pageItem " data-src="assets/images/item_195089.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '66px', top: '38px' }} id="item195090" className="pageItem " data-src="assets/images/item_195090.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '37px' }} id="item195091" className="pageItem " data-src="assets/images/item_195091.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '66px', top: '39px' }} id="item195092" className="pageItem " data-src="assets/images/item_195092.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '70px', top: '39px' }} id="item195093" className="pageItem " data-src="assets/images/item_195093.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '65px', top: '39px' }} id="item195096" className="pageItem " data-src="assets/images/item_195096.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '66px', top: '38px' }} id="item195097" className="pageItem " data-src="assets/images/item_195097.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '66px', top: '41px' }} id="item195098" className="pageItem " data-src="assets/images/item_195098.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '59px', top: '37px' }} id="item195099" className="pageItem " data-src="assets/images/item_195099.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '77px', top: '38px' }} id="item195100" className="pageItem " data-src="assets/images/item_195100.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '68px', top: '1px' }} id="item195101" className="pageItem " data-src="assets/images/item_195101.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '110px', top: '51px' }} id="item195102" className="pageItem " data-src="assets/images/item_195102.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '2px', top: '108px' }} id="item195103" className="pageItem " data-src="assets/images/item_195103.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '26px', top: '84px' }} id="item195104" className="pageItem " data-src="assets/images/item_195104.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '60px', top: '80px' }} id="item195105" className="pageItem " data-src="assets/images/item_195105.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '109px', top: '97px' }} id="item195106" className="pageItem " data-src="assets/images/item_195106.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '83px', top: '219px' }} id="item195107" className="pageItem " data-src="assets/images/item_195107.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '64px', top: '76px' }} id="item195108" className="pageItem " data-src="assets/images/item_195108.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '65px', top: '165px' }} id="item195109" className="pageItem " data-src="assets/images/item_195109.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '62px', top: '197px' }} id="item195110" className="pageItem " data-src="assets/images/item_195110.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '61px', top: '227px' }} id="item195111" className="pageItem " data-src="assets/images/item_195111.png" />
                                    <div alt="Oval" style={{ left: '60px', top: '251px' }} id="item195112" className="pageItem ">
                                        <svg version="1.1" width="7" height="7">
                                            <ellipse cx="2.34" cy="2.34" rx="2.34" ry="2.34" stroke="" strokeWidth="1" fill="#bcced1" />
                                        </svg>
                                    </div>
                                    <img src={blankImage} alt="Polygon" style={{ left: '121px', top: '95px' }} id="item195113" className="pageItem " data-src="assets/images/item_195113.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '125px', top: '99px' }} id="item195115" className="pageItem " data-src="assets/images/item_195115.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '175px', top: '102px' }} id="item195117" className="pageItem " data-src="assets/images/item_195117.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '146px', top: '106px' }} id="item195118" className="pageItem " data-src="assets/images/item_195118.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '12px', top: '129px' }} id="item195120" className="pageItem " data-src="assets/images/item_195120.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '12px', top: '128px' }} id="item195121" className="pageItem " data-src="assets/images/item_195121.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '22px', top: '203px' }} id="item195122" className="pageItem " data-src="assets/images/item_195122.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '23px', top: '181px' }} id="item195123" className="pageItem " data-src="assets/images/item_195123.png" />
                                    <img src={blankImage} alt="Polygon" style={{ top: '172px' }} id="item195124" className="pageItem " data-src="assets/images/item_195124.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '32px', top: '167px' }} id="item195126" className="pageItem " data-src="assets/images/item_195126.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '32px', top: '167px' }} id="item195127" className="pageItem " data-src="assets/images/item_195127.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '43px', top: '189px' }} id="item195128" className="pageItem " data-src="assets/images/item_195128.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '45px', top: '195px' }} id="item195129" className="pageItem " data-src="assets/images/item_195129.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '46px', top: '201px' }} id="item195130" className="pageItem " data-src="assets/images/item_195130.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '115px', top: '82px' }} id="item195131" className="pageItem " data-src="assets/images/item_195131.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '113px', top: '134px' }} id="item195132" className="pageItem " data-src="assets/images/item_195132.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '115px', top: '135px' }} id="item195133" className="pageItem " data-src="assets/images/item_195133.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '54px', top: '78px' }} id="item195134" className="pageItem " data-src="assets/images/item_195134.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '53px', top: '91px' }} id="item195135" className="pageItem " data-src="assets/images/item_195135.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '50px', top: '126px' }} id="item195136" className="pageItem " data-src="assets/images/item_195136.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '56px', top: '163px' }} id="item195137" className="pageItem " data-src="assets/images/item_195137.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '162px' }} id="item195138" className="pageItem " data-src="assets/images/item_195138.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '50px', top: '126px' }} id="item195139" className="pageItem " data-src="assets/images/item_195139.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '74px', top: '58px' }} id="item195141" className="pageItem " data-src="assets/images/item_195141.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '77px', top: '61px' }} id="item195142" className="pageItem " data-src="assets/images/item_195142.png" />
                                </div>
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-195143 1s cubic-bezier(.2,.6,.35,1) 1" data-id="195143" id="item195143" data-hidestart="1" className="pageItem hidden" name="jawaban salah 2" aria-label="jawaban salah 2">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" style={{ top: '60px' }} id="item195145" className="pageItem ">
                                    <svg version="1.1" width="284" height="284">
                                        <ellipse cx="141.62" cy="141.62" rx="141.62" ry="141.62" fill="#fff" />
                                    </svg>
                                </div>
                                <div alt="Group" style={{ left: '260px', top: '61px' }} id="item195146" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" id="item195147" className="pageItem " data-src="assets/images/item_195147.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '3px', top: '93px' }} id="item195149" className="pageItem " data-src="assets/images/item_195149.png" />
                                </div>
                                <img src={blankImage} alt="Jawaban Kamu Kurang Tepat! " style={{ left: '257px', top: '83px' }} id="item195150" className="pageItem " data-src="assets/images/item_195150.png" />
                                <div alt="Group" style={{ left: '68px' }} id="item195173" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{ left: '37px', top: '25px' }} id="item195174" className="pageItem " data-src="assets/images/item_195174.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '44px', top: '30px' }} id="item195176" className="pageItem " data-src="assets/images/item_195176.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '56px', top: '54px' }} id="item195177" className="pageItem " data-src="assets/images/item_195177.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '52px', top: '54px' }} id="item195178" className="pageItem " data-src="assets/images/item_195178.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '45px', top: '38px' }} id="item195179" className="pageItem " data-src="assets/images/item_195179.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '46px', top: '40px' }} id="item195180" className="pageItem " data-src="assets/images/item_195180.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '91px', top: '39px' }} id="item195181" className="pageItem " data-src="assets/images/item_195181.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '94px', top: '40px' }} id="item195182" className="pageItem " data-src="assets/images/item_195182.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '49px', top: '12px' }} id="item195183" className="pageItem " data-src="assets/images/item_195183.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '49px', top: '12px' }} id="item195184" className="pageItem " data-src="assets/images/item_195184.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '48px', top: '36px' }} id="item195185" className="pageItem " data-src="assets/images/item_195185.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '80px', top: '45px' }} id="item195186" className="pageItem " data-src="assets/images/item_195186.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '73px', top: '31px' }} id="item195187" className="pageItem " data-src="assets/images/item_195187.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '52px', top: '31px' }} id="item195188" className="pageItem " data-src="assets/images/item_195188.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '74px', top: '36px' }} id="item195189" className="pageItem " data-src="assets/images/item_195189.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '74px', top: '36px' }} id="item195190" className="pageItem " data-src="assets/images/item_195190.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '74px', top: '36px' }} id="item195194" className="pageItem " data-src="assets/images/item_195194.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '73px', top: '39px' }} id="item195195" className="pageItem " data-src="assets/images/item_195195.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '74px', top: '35px' }} id="item195196" className="pageItem " data-src="assets/images/item_195196.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '53px', top: '36px' }} id="item195198" className="pageItem " data-src="assets/images/item_195198.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '53px', top: '36px' }} id="item195199" className="pageItem " data-src="assets/images/item_195199.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '52px', top: '36px' }} id="item195203" className="pageItem " data-src="assets/images/item_195203.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '53px', top: '39px' }} id="item195204" className="pageItem " data-src="assets/images/item_195204.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '52px', top: '35px' }} id="item195205" className="pageItem " data-src="assets/images/item_195205.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '74px', top: '29px' }} id="item195206" className="pageItem " data-src="assets/images/item_195206.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '50px', top: '30px' }} id="item195207" className="pageItem " data-src="assets/images/item_195207.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '64px', top: '41px' }} id="item195208" className="pageItem " data-src="assets/images/item_195208.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '49px' }} id="item195209" className="pageItem " data-src="assets/images/item_195209.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '61px', top: '35px' }} id="item195210" className="pageItem " data-src="assets/images/item_195210.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '61px', top: '10px' }} id="item195213" className="pageItem " data-src="assets/images/item_195213.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '37px' }} id="item195214" className="pageItem " data-src="assets/images/item_195214.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '79px', top: '15px' }} id="item195215" className="pageItem " data-src="assets/images/item_195215.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '71px', top: '33px' }} id="item195216" className="pageItem " data-src="assets/images/item_195216.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '49px', top: '33px' }} id="item195217" className="pageItem " data-src="assets/images/item_195217.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '35px' }} id="item195218" className="pageItem " data-src="assets/images/item_195218.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '86px', top: '39px' }} id="item195219" className="pageItem " data-src="assets/images/item_195219.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '57px', top: '93px' }} id="item195220" className="pageItem " data-src="assets/images/item_195220.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '28px', top: '244px' }} id="item195221" className="pageItem " data-src="assets/images/item_195221.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '20px', top: '79px' }} id="item195222" className="pageItem " data-src="assets/images/item_195222.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '20px', top: '175px' }} id="item195223" className="pageItem " data-src="assets/images/item_195223.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '67px', top: '79px' }} id="item195224" className="pageItem " data-src="assets/images/item_195224.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '67px', top: '175px' }} id="item195225" className="pageItem " data-src="assets/images/item_195225.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '51px', top: '94px' }} id="item195226" className="pageItem " data-src="assets/images/item_195226.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '109px', top: '141px' }} id="item195227" className="pageItem " data-src="assets/images/item_195227.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '106px', top: '99px' }} id="item195228" className="pageItem " data-src="assets/images/item_195228.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '111px', top: '119px' }} id="item195229" className="pageItem " data-src="assets/images/item_195229.png" />
                                    <img src={blankImage} alt="Polygon" style={{ top: '100px' }} id="item195230" className="pageItem " data-src="assets/images/item_195230.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '4px', top: '100px' }} id="item195231" className="pageItem " data-src="assets/images/item_195231.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '6px', top: '156px' }} id="item195232" className="pageItem " data-src="assets/images/item_195232.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '24px', top: '99px' }} id="item195233" className="pageItem " data-src="assets/images/item_195233.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '30px', top: '131px' }} id="item195234" className="pageItem " data-src="assets/images/item_195234.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '97px', top: '141px' }} id="item195235" className="pageItem " data-src="assets/images/item_195235.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '103px', top: '143px' }} id="item195236" className="pageItem " data-src="assets/images/item_195236.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '109px', top: '149px' }} id="item195237" className="pageItem " data-src="assets/images/item_195237.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '111px', top: '141px' }} id="item195238" className="pageItem " data-src="assets/images/item_195238.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '114px', top: '142px' }} id="item195239" className="pageItem " data-src="assets/images/item_195239.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '116px', top: '149px' }} id="item195240" className="pageItem " data-src="assets/images/item_195240.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '103px', top: '146px' }} id="item195241" className="pageItem " data-src="assets/images/item_195241.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '106px', top: '152px' }} id="item195242" className="pageItem " data-src="assets/images/item_195242.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '6px', top: '153px' }} id="item195243" className="pageItem " data-src="assets/images/item_195243.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '8px', top: '157px' }} id="item195244" className="pageItem " data-src="assets/images/item_195244.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '15px', top: '180px' }} id="item195245" className="pageItem " data-src="assets/images/item_195245.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '6px', top: '167px' }} id="item195247" className="pageItem " data-src="assets/images/item_195247.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '8px', top: '172px' }} id="item195248" className="pageItem " data-src="assets/images/item_195248.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '47px', top: '161px' }} id="item195249" className="pageItem " data-src="assets/images/item_195249.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '53px', top: '154px' }} id="item195250" className="pageItem " data-src="assets/images/item_195250.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '46px', top: '75px' }} id="item195252" className="pageItem " data-src="assets/images/item_195252.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '46px', top: '75px' }} id="item195253" className="pageItem " data-src="assets/images/item_195253.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '59px', top: '77px' }} id="item195254" className="pageItem " data-src="assets/images/item_195254.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '59px', top: '77px' }} id="item195255" className="pageItem " data-src="assets/images/item_195255.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '54px', top: '184px' }} id="item195256" className="pageItem " data-src="assets/images/item_195256.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '89px', top: '206px' }} id="item195258" className="pageItem " data-src="assets/images/item_195258.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '28px', top: '208px' }} id="item195259" className="pageItem " data-src="assets/images/item_195259.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '48px', top: '73px' }} id="item195263" className="pageItem " data-src="assets/images/item_195263.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '45px', top: '113px' }} id="item195264" className="pageItem " data-src="assets/images/item_195264.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '52px', top: '158px' }} id="item195265" className="pageItem " data-src="assets/images/item_195265.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '61px', top: '157px' }} id="item195266" className="pageItem " data-src="assets/images/item_195266.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '45px', top: '113px' }} id="item195267" className="pageItem " data-src="assets/images/item_195267.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '86px', top: '74px' }} id="item195268" className="pageItem " data-src="assets/images/item_195268.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '104px', top: '131px' }} id="item195269" className="pageItem " data-src="assets/images/item_195269.png" />
                                    <div alt="Oval" style={{ left: '106px', top: '133px' }} id="item195270" className="pageItem ">
                                        <svg version="1.1" width="8" height="8">
                                            <ellipse cx="2.58" cy="2.58" rx="2.58" ry="2.58" stroke="" strokeWidth="1" fill="#8c8c9b" />
                                        </svg>
                                    </div>
                                    <img src={blankImage} alt="Polygon" style={{ left: '59px', top: '57px' }} id="item195271" className="pageItem " data-src="assets/images/item_195271.png" />
                                </div>
                            </div>
                        </button>
                        <img src={blankImage} data-ani="appear-195281 0.6s linear 1" data-id="195281" id="item195281" data-hidestart="1" className="pageItem hidden" alt="Hint : 5" style={{ left: '1608px', top: '379px' }} data-src="assets/images/item_195281.png" />
                        <div alt="Takeda Indonesia, 202" style={{ left: '1885px', top: '913px' }} id="item195306" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{ left: '1px' }} id="item195307" className="pageItem " data-src="assets/images/item_195307.png" />
                            <div alt="Group" style={{ top: '132px' }} id="item195330" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item195331" className="pageItem " data-src="assets/images/item_195331.png" />
                                <img src={blankImage} alt="Polygon" style={{ left: '3px', top: '4px' }} id="item195332" className="pageItem " data-src="assets/images/item_195332.png" />
                            </div>
                        </div>
                        <button data-ani="flyinfrombottom-227623 1s cubic-bezier(.2,.6,.35,1) 1" data-id="227623" id="item227623" data-hidestart="1" className="pageItem hidden" name="mata 2" aria-label="mata 2">
                            <div className="pageItem state btn-off">
                                <div alt="Group" id="item218298" className="pageItem group ">
                                    <div alt="Oval" id="item218299" className="pageItem ">
                                        <svg version="1.1" width="6" height="6">
                                            <circle cx="2" cy="2" r="2" stroke="" strokeWidth="1" fill="#1c1463" />
                                        </svg>
                                    </div>
                                    <img src={blankImage} alt="Polygon" style={{ left: '1px', top: '1px' }} id="item218300" className="pageItem " data-src="assets/images/item_218300.png" />
                                </div>
                                <div alt="Group" style={{ left: '21px' }} id="item218302" className="pageItem group ">
                                    <div alt="Oval" id="item218303" className="pageItem ">
                                        <svg version="1.1" width="6" height="6">
                                            <circle cx="2" cy="2" r="2" stroke="" strokeWidth="1" fill="#1c1463" />
                                        </svg>
                                    </div>
                                    <img src={blankImage} alt="Polygon" style={{ left: '1px', top: '1px' }} id="item218304" className="pageItem " data-src="assets/images/item_218304.png" />
                                </div>
                            </div>
                        </button>
                        <button data-id="227885" name="cek jawaban 2" aria-label="cek jawaban 2" id="item227885" onClick={handleOnClickCekJawaban} className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item227913" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Jawaban" style={{ left: '26px', top: '15px' }} id="item227914" className="pageItem " data-src="assets/images/item_227914.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item227938" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Jawaban" style={{ left: '26px', top: '15px' }} id="item227940" className="pageItem " data-src="assets/images/item_227940.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item227887" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Jawaban" style={{ left: '26px', top: '15px' }} id="item227889" className="pageItem " data-src="assets/images/item_227889.png" />
                            </div>
                        </button>
                        <button data-id="228138" name="O 14" aria-label="O 14" id="item228138" className="pageItem " data-hidestart="1">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item228140" className="pageItem " data-src="assets/images/item_228140.png" />
                            </div>
                        </button>
                        <button data-id="228151" name="O 16" aria-label="O 16" id="item228151" className="pageItem " data-hidestart="1">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item228153" className="pageItem " data-src="assets/images/item_228153.png" />
                            </div>
                        </button>
                        <button data-id="228157" name="O 18" aria-label="O 18" id="item228157" className="pageItem " data-hidestart="1">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item228159" className="pageItem " data-src="assets/images/item_228159.png" />
                            </div>
                        </button>
                        <button data-id="228148" name="O 15" aria-label="O 15" id="item228148" className="pageItem " data-hidestart="1">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item228150" className="pageItem " data-src="assets/images/item_228150.png" />
                            </div>
                        </button>
                        <button data-id="228160" name="O 19" aria-label="O 19" id="item228160" className="pageItem " data-hidestart="1">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item228162" className="pageItem " data-src="assets/images/item_228162.png" />
                            </div>
                        </button>
                        <button data-id="228154" name="O 17" aria-label="O 17" id="item228154" className="pageItem " data-hidestart="1">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item228156" className="pageItem " data-src="assets/images/item_228156.png" />
                            </div>
                        </button>
                        <button data-id="228163" name="O 20" aria-label="O 20" id="item228163" className="pageItem " data-hidestart="1">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item228165" className="pageItem " data-src="assets/images/item_228165.png" />
                            </div>
                        </button>
                        <button data-ani="fadein-208142 1s linear 1" data-id="208142" id="item208142" data-hidestart="1" className="pageItem has-on has-down hidden" name="soal selanjutnya 5" onClick={handleOnClickGoToQuiz3} aria-label="soal selanjutnya 5">
                            <div className="pageItem state btn-off">
                                <div id="item208171" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Soal Selanjutnya" style={{ left: '23px', top: '15px' }} id="item208173" className="pageItem " data-src="assets/images/item_208173.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item208199" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Soal Selanjutnya" style={{ left: '23px', top: '15px' }} id="item208200" className="pageItem " data-src="assets/images/item_208200.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item208145" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Soal Selanjutnya" style={{ left: '23px', top: '15px' }} id="item208147" className="pageItem " data-src="assets/images/item_208147.png" />
                            </div>
                        </button>
                        <button data-ani="fadein-208223 1s linear 1" data-id="208223" id="item208223" data-hidestart="1" className="pageItem has-on has-down hidden" name="cek penjelasan 5" onClick={handleOnClickCekPenjelasan} aria-label="cek penjelasan 5">
                            <div className="pageItem state btn-off">
                                <div id="item208251" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Penjelasan" style={{ left: '26px', top: '15px' }} id="item208253" className="pageItem " data-src="assets/images/item_208253.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item208277" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Penjelasan" style={{ left: '26px', top: '15px' }} id="item208278" className="pageItem " data-src="assets/images/item_208278.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item208226" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Penjelasan" style={{ left: '26px', top: '15px' }} id="item208227" className="pageItem " data-src="assets/images/item_208227.png" />
                            </div>
                        </button>
                        <button data-id="208301" name="icon back 71" onClick={handleOnClickGoToQuiz1} aria-label="icon back 71" id="item208301" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item208309" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '21px', top: '14px' }} id="item208310" className="pageItem " data-src="assets/images/item_208310.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item208312" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '21px', top: '14px' }} id="item208313" className="pageItem " data-src="assets/images/item_208313.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item208304" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '21px', top: '14px' }} id="item208306" className="pageItem " data-src="assets/images/item_208306.png" />
                            </div>
                        </button>
                        <button data-id="221898" name="icon beranda 70" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 70" id="item221898" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221905" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '14px', top: '15px' }} id="item221906" className="pageItem " data-src="assets/images/item_221906.png" />
                                <img src={blankImage} alt="Polygon" style={{ left: '17px', top: '18px' }} id="item221907" className="pageItem " data-src="assets/images/item_221907.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221909" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '14px', top: '15px' }} id="item221910" className="pageItem " data-src="assets/images/item_221910.png" />
                                <img src={blankImage} alt="Polygon" style={{ left: '17px', top: '18px' }} id="item221911" className="pageItem " data-src="assets/images/item_221911.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221901" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '17px', top: '18px' }} id="item221902" className="pageItem " data-src="assets/images/item_221902.png" />
                                <img src={blankImage} alt="Polygon" style={{ left: '14px', top: '15px' }} id="item221903" className="pageItem " data-src="assets/images/item_221903.png" />
                            </div>
                        </button>
                        <Navigation />
                    </div>
                    <input type="hidden" id="quiz2_opt1" name="quiz2answer[]" value="" />
                    <input type="hidden" id="quiz2_opt2" name="quiz2answer[]" value="" />
                    <input type="hidden" id="quiz2_opt3" name="quiz2answer[]" value="" />
                    <input type="hidden" id="quiz2_opt4" name="quiz2answer[]" value="" />
                    <input type="hidden" id="quiz2_opt5" name="quiz2answer[]" value="" />
                    <input type="hidden" id="quiz2_opt6" name="quiz2answer[]" value="" />
                    <input type="hidden" id="quiz2_opt7" name="quiz2answer[]" value="" />
                </li>
            </ul>
        </div>
    )
}
export default Quiz2;