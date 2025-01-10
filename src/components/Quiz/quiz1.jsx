import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Quiz1() {

    const navigate = useNavigate();

    const handleOnClickGoToQuiz2 = () => {
        window.location.href = '/Quiz2'; // #54
    };

    const handleOnClickPreviousPage = () => {
        window.location.href = '/kesimpulan-ibd';
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }

    ////////////////////
    // #Page 52 - Kuis 1
    /////////////////////

    const handleOnRadioOpt1Left = event => {
        event.preventDefault();
        jQuery("#quiz1_opt1").val("0");
        go(event, [{ n: 1, link: 1, id: 227753, act: 'play' }, { n: 1, link: 1, id: 227755, act: 'hide' }]);
    };
    const handleOnRadioOpt1Right = (event) => {
        event.preventDefault();
        jQuery("#quiz1_opt1").val("1");
        go(event, [{ n: 1, link: 1, id: 227755, act: 'play' }, { n: 1, link: 1, id: 227753, act: 'hide' }]);
    };

    const handleOnRadioOpt2Left = event => {
        event.preventDefault();
        jQuery("#quiz1_opt2").val("0");
        go(event, [{ n: 1, link: 1, id: 227758, act: 'play' }, { n: 1, link: 1, id: 227761, act: 'hide' }]);
        //$('#item48686 audio')[0].play();
    };
    const handleOnRadioOpt2Right = (event) => {
        event.preventDefault();
        jQuery("#quiz1_opt2").val("1");
        go(event, [{ n: 1, link: 1, id: 227761, act: 'play' }, { n: 1, link: 1, id: 227758, act: 'hide' }]);
    };

    const handleOnRadioOpt3Left = event => {
        event.preventDefault();
        jQuery("#quiz1_opt3").val("1");
        go(event, [{ n: 1, link: 1, id: 227764, act: 'play' }, { n: 1, link: 1, id: 227767, act: 'hide' }]);
    };
    const handleOnRadioOpt3Right = (event) => {
        event.preventDefault();
        jQuery("#quiz1_opt3").val("0");
        go(event, [{ n: 1, link: 1, id: 227767, act: 'play' }, { n: 1, link: 1, id: 227764, act: 'hide' }]);
    };

    const handleOnRadioOpt4Left = event => {
        event.preventDefault();
        jQuery("#quiz1_opt4").val("1");
        go(event, [{ n: 1, link: 1, id: 227770, act: 'play' }, { n: 1, link: 1, id: 227781, act: 'hide' }]);
    };
    const handleOnRadioOpt4Right = (event) => {
        event.preventDefault();
        jQuery("#quiz1_opt4").val("0");
        go(event, [{ n: 1, link: 1, id: 227781, act: 'play' }, { n: 1, link: 1, id: 227770, act: 'hide' }]);
    };
    

    const handleOnRadioOpt5Left = event => {
        event.preventDefault();
        jQuery("#quiz1_opt5").val("0");
        go(event, [{ n: 1, link: 1, id: 227773, act: 'play' }, { n: 1, link: 1, id: 227784, act: 'hide' }]);
    };
    const handleOnRadioOpt5Right = (event) => {
        event.preventDefault();
        jQuery("#quiz1_opt5").val("1");
        go(event, [{ n: 1, link: 1, id: 227784, act: 'play' }, { n: 1, link: 1, id: 227773, act: 'hide' }]);
    };


    const handleOnRadioOpt6Left = event => {
        event.preventDefault();
        jQuery("#quiz1_opt6").val("1");
        go(event, [{ n: 1, link: 1, id: 227776, act: 'play' }, { n: 1, link: 1, id: 227787, act: 'hide' }]);
    };
    const handleOnRadioOpt6Right = (event) => {
        event.preventDefault();
        jQuery("#quiz1_opt6").val("0");
        go(event, [{ n: 1, link: 1, id: 227787, act: 'play' }, { n: 1, link: 1, id: 227776, act: 'hide' }]);
    };


    const handleOnRadioOpt7Left = event => {
        event.preventDefault();
        jQuery("#quiz1_opt7").val("1");
        go(event, [{ n: 1, link: 1, id: 227790, act: 'play' }, { n: 1, link: 1, id: 227793, act: 'hide' }]);
    };
    const handleOnRadioOpt7Right = (event) => {
        event.preventDefault();
        jQuery("#quiz1_opt7").val("0");
        go(event, [{ n: 1, link: 1, id: 227793, act: 'play' }, { n: 1, link: 1, id: 227790, act: 'hide' }]);
    };

    const handleOnClickCekJawaban = (event) => {
        event.preventDefault();
        var quiz1ansvalues = jQuery('input[name="quiz1answer[]"]').map(function () {
            return jQuery(this).val();
        }).get();

        const occurrences = quiz1ansvalues.filter(item => item === '1').length;

        if (occurrences == 7) {
            jQuery('#item187115 audio')[0].play();
            jQuery('#item186935 video')[0].play();
            
            // orang dgn jawaban benar muncul
            go(event, [{ n: 1, link: 1, id: 190456, act: 'play' }, { n: 1, link: 1, id: 190448, act: 'hide' }]);
            // soal selanjutnya muncul, cek penjelasan hilang
            go(event, [{ n: 1, link: 1, id: 207869, act: 'play' }, { n: 1, link: 1, id: 207868, act: 'hide' }]);
            go(event, [{ n: 1, link: 1, id: 227598, act: 'hide' }]);
        } else {
            // salah
            jQuery('#item187122 audio')[0].play();
            jQuery('#item186921 video')[0].play();
            // orang dgn jawaban salah muncul
            go(event, [{ n: 1, link: 1, id: 190448, act: 'play' }, { n: 1, link: 1, id: 190456, act: 'hide' }]);
            // cek penjelasan muncul, soal selanjutnya hilang
            go(event, [{ n: 1, link: 1, id: 207868, act: 'play' }, { n: 1, link: 1, id: 207869, act: 'hide' }]);
            // salah - mata 2 muncul 
            go(event, [{ n: 1, link: 1, id: 227598, act: 'play' }]);
        }
    };

    const handleOnClickCekPenjelasan = (event) => {
        window.location.href = '/quiz1Penjelasan';
    }

    setTimeout(function() {
        // Trigger animation or any other action
        document.getElementById("item1850400").classList.remove("hidden");
    }, 3500);

    useEffect(() => {
        jQuery(document).ready(function() {
            jQuery('.kanooAddTop').each(function() {
                // Get the current top position of each element
                var currentTop = jQuery(this).css('top');

                // Step 2: Convert the current top value to a number by removing the 'px' unit
                var currentTopNumber = parseInt(currentTop, 10);
                console.log(currentTopNumber);
                // Add 50px to the current top position
                var newTop = currentTopNumber - 20;
                console.log(newTop);
                // Set the new top position dynamically
                jQuery(this).css('top', newTop + 'px');
            });
        });

    /*const reloadCount = sessionStorage.getItem('reloadCountHomepage2');
    if (reloadCount == null) {
        sessionStorage.setItem('reloadCount', 1);
 
    } else {
        sessionStorage.removeItem('reloadCount');
        window.location.href = '/';
    }*/
    }, []);

    return (
        <div >
            <ul className="pages" id="slider">
                <li className="page" data-name="52">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:185040,act:'play'},{n:1,link:1,id:186195,act:'play'},{n:1,link:1,id:186193,act:'play'},{n:1,link:1,id:185016,act:'play'},{n:1,id:184590,sn:1,act:'play'},{n:1,link:1,id:186197,act:'play'},{n:1,link:1,id:186199,act:'play'},{n:1,link:1,id:184993,act:'play'},{n:1,id:184591,sn:1,act:'play'},{n:1,link:1,id:186201,act:'play'},{n:1,link:1,id:186203,act:'play'},{n:1,link:1,id:184831,act:'play'},{n:1,id:184592,sn:1,act:'play'},{n:1,link:1,id:186252,act:'play'},{n:1,link:1,id:186205,act:'play'},{n:1,link:1,id:184924,act:'play'},{n:1,id:184594,sn:1,act:'play'},{n:1,link:1,id:186209,act:'play'},{n:1,link:1,id:186207,act:'play'},{n:1,link:1,id:184900,act:'play'},{n:1,id:184595,sn:1,act:'play'},{n:1,link:1,id:186211,act:'play'},{n:1,link:1,id:186213,act:'play'},{n:1,link:1,id:184877,act:'play'},{n:1,id:184596,sn:1,act:'play'},{n:1,link:1,id:186215,act:'play'},{n:1,link:1,id:186217,act:'play'},{n:1,link:1,id:184854,act:'play'},{n:1,id:184597,sn:1,act:'play'},{del:5,n:1,link:1,id:187089,act:'play'},{n:1,id:184828,sn:1,act:'play'},{del:5.5,n:1,link:1,id:187090,act:'play'},{n:1,id:184820,sn:1,act:'play'}], 'pageload');" style={{ width: '1920px', height: '1080px' }}>
                        <div id="item264636" className="pageItem" style={{ height: '60px', width: '60px', left: '26px', top: '164px' }} alt="Sound">
                            <audio data-id="264636" className="mejs-no-controls" data-autoplay="1" data-autodelay="0" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/Quiz 1 FULL.mp3" />
                            </audio>
                        </div>
                        <div id="item187097" className="pageItem" style={{ height: '60px', width: '60px', left: '48px', top: '157px' }} alt="Sound">
                            <audio data-id="187097" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/quiz 1-1.mp3" />
                            </audio>
                        </div>
                        <div id="item187102" className="pageItem" style={{ height: '60px', width: '60px', left: '141px', top: '157px' }} alt="Sound">
                            <audio data-id="187102" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/quiz 1-2.mp3" />
                            </audio>
                        </div>
                        <div id="item187107" className="pageItem" style={{ height: '60px', width: '60px', left: '245px', top: '157px' }} alt="Sound">
                            <audio data-id="187107" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/quiz 1-3.mp3" />
                            </audio>
                        </div>
                        <div id="item187115" className="pageItem" style={{ height: '60px', width: '60px', left: '345px', top: '157px' }} alt="Sound">
                            <audio data-id="187115" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/jawaban benar.mp3" />
                            </audio>
                        </div>
                        <div id="item187122" className="pageItem" style={{ height: '60px', width: '60px', left: '441px', top: '157px' }} alt="Sound">
                            <audio data-id="187122" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/jawaban salah.mp3" />
                            </audio>
                        </div>
                        <div id="item186921" className="pageItem" alt="Movie" style={{ left: '325px', top: '281px' }}>
                            <video width="640" height="360" data-id="186921" data-stoplast="1" data-nopause="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/Incorrect Answer sound effect.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div id="item186935" className="pageItem" alt="Movie" style={{ left: '86px', top: '181px' }}>
                            <video width="640" height="360" data-id="186935" webkit-playsinline="playsinline" playsInline="playsinline" className="mejs-none">
                                <source src="assets/media/Correct Answer sound effect.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div id="item184588" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item184590" data-ani="flyinfrombottom-184590 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="184590" data-hidestart="1" className="pageItem hidden kanooAddTop" alt="Rectangle">&nbsp;</div>
                        <div id="item184591" data-ani="flyinfrombottom-184591 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="184591" data-hidestart="1" className="pageItem hidden kanooAddTop" alt="Rectangle">&nbsp;</div>
                        <div id="item184592" data-ani="flyinfrombottom-184592 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="184592" data-hidestart="1" className="pageItem hidden kanooAddTop" alt="Rectangle">&nbsp;</div>
                        <div id="item184594" data-ani="flyinfrombottom-184594 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="184594" data-hidestart="1" className="pageItem hidden kanooAddTop" alt="Rectangle">&nbsp;</div>
                        <div id="item184595" data-ani="flyinfrombottom-184595 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="184595" data-hidestart="1" className="pageItem hidden kanooAddTop" alt="Rectangle">&nbsp;</div>
                        <div id="item184596" data-ani="flyinfrombottom-184596 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="184596" data-hidestart="1" className="pageItem hidden kanooAddTop" alt="Rectangle">&nbsp;</div>
                        <div id="item184597" data-ani="flyinfrombottom-184597 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="184597" data-hidestart="1" className="pageItem hidden kanooAddTop" alt="Rectangle">&nbsp;</div>
                        <button data-ani="flyinfrombottom-186193 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="186193" id="item186193" data-hidestart="1" className="pageItem has-down has-on hidden kanooAddTop" name="Button 1a" onClick={handleOnRadioOpt1Left} aria-label="Button 1a">
                            <div className="pageItem state btn-off">
                                <div id="item184598" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item186221" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item186225" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-186197 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="186197" id="item186197" data-hidestart="1" className="pageItem has-on has-down hidden kanooAddTop" name="Button 2a" onClick={handleOnRadioOpt2Left} aria-label="Button 2a">
                            <div className="pageItem state btn-off">
                                <div id="item184601" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item186231" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item186233" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-186201 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="186201" id="item186201" data-hidestart="1" className="pageItem has-down has-on hidden kanooAddTop" name="Button 3a" onClick={handleOnRadioOpt3Left} aria-label="Button 3a">
                            <div className="pageItem state btn-off">
                                <div id="item184602" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item186240" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item186242" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-186205 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="186205" id="item186205" data-hidestart="1" className="pageItem has-down has-on hidden kanooAddTop" name="Button 4a" onClick={handleOnRadioOpt4Left} aria-label="Button 4a">
                            <div className="pageItem state btn-off">
                                <div id="item184603" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item186249" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item186251" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-186209 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="186209" id="item186209" data-hidestart="1" className="pageItem has-down has-on hidden kanooAddTop" name="Button 5a" onClick={handleOnRadioOpt5Left} aria-label="Button 5a">
                            <div className="pageItem state btn-off">
                                <div id="item184604" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item186264" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item186266" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-186213 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="186213" id="item186213" data-hidestart="1" className="pageItem has-down has-on hidden kanooAddTop" name="Button 6a" onClick={handleOnRadioOpt6Left} aria-label="Button 6a">
                            <div className="pageItem state btn-off">
                                <div id="item184605" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item186272" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item186274" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-186215 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="186215" id="item186215" data-hidestart="1" className="pageItem has-on has-down hidden kanooAddTop" name="Button 7a" onClick={handleOnRadioOpt7Left} aria-label="Button 7a">
                            <div className="pageItem state btn-off">
                                <div id="item184606" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item186280" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item186283" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-186195 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="186195" id="item186195" data-hidestart="1" className="pageItem has-down has-on hidden kanooAddTop" name="Button 1b" onClick={handleOnRadioOpt1Right} aria-label="Button 1b">
                            <div className="pageItem state btn-off">
                                <div id="item184607" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item186227" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item186229" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-186199 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="186199" id="item186199" data-hidestart="1" className="pageItem has-down has-on hidden kanooAddTop" name="Button 2b" onClick={handleOnRadioOpt2Right} aria-label="Button 2b">
                            <div className="pageItem state btn-off">
                                <div id="item184608" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item186236" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item186238" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-186203 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="186203" id="item186203" data-hidestart="1" className="pageItem has-down has-on hidden kanooAddTop" name="Button 3b" onClick={handleOnRadioOpt3Right} aria-label="Button 3b">
                            <div className="pageItem state btn-off">
                                <div id="item184609" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item186245" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item186247" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-186252 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="186252" id="item186252" data-hidestart="1" className="pageItem has-down has-on hidden kanooAddTop" name="Button 4b" onClick={handleOnRadioOpt4Right} aria-label="Button 4b">
                            <div className="pageItem state btn-off">
                                <div id="item184610" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item186255" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item186257" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-186207 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="186207" id="item186207" data-hidestart="1" className="pageItem has-down has-on hidden kanooAddTop" name="Button 5b" onClick={handleOnRadioOpt5Right} aria-label="Button 5b">
                            <div className="pageItem state btn-off">
                                <div id="item184611" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item186259" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item186261" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-186211 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="186211" id="item186211" data-hidestart="1" className="pageItem has-down has-on hidden kanooAddTop" name="Button 6b" onClick={handleOnRadioOpt6Right} aria-label="Button 6b">
                            <div className="pageItem state btn-off">
                                <div id="item184612" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item186268" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item186270" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-186217 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="186217" id="item186217" data-hidestart="1" className="pageItem has-down has-on hidden kanooAddTop" name="Button 7b" onClick={handleOnRadioOpt7Right} aria-label="Button 7b">
                            <div className="pageItem state btn-off">
                                <div id="item184613" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item186276" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item186278" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            </div>
                        </button>
                        <div id="item184622" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <img src={blankImage} data-ani="flyinfromright-184820 1s cubic-bezier(.2,.6,.35,1) 1" data-id="184820" id="item184820" data-hidestart="1" className="pageItem hidden" alt="Rectangle" style={{ left: '1477px', top: '340px' }} data-src="assets/images/item_184820.png" />
                        <img src={blankImage} data-ani="flyinfromleft-184828 1s cubic-bezier(.2,.6,.35,1) 1" data-id="184828" id="item184828" data-hidestart="1" className="pageItem hidden" alt="Rectangle" style={{ top: '340px' }} data-src="assets/images/item_184828.png" />
                        <img src={blankImage} data-ani="flyinfrombottom-184831 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="184831" id="item184831" data-hidestart="1" className="pageItem hidden kanooAddTop" alt="Kontinu " style={{ left: '800px', top: '480px' }} data-src="assets/images/item_184831.png" />
                        <img src={blankImage} data-ani="flyinfrombottom-184854 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="184854" id="item184854" data-hidestart="1" className="pageItem hidden kanooAddTop" alt="Peradangan mukosa " style={{ left: '800px', top: '822px' }} data-src="assets/images/item_184854.png" />
                        <img src={blankImage} data-ani="flyinfrombottom-184877 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="184877" id="item184877" data-hidestart="1" className="pageItem hidden kanooAddTop" alt="Kolon dan rektum " style={{ left: '800px', top: '737px' }} data-src="assets/images/item_184877.png" />
                        <img src={blankImage} data-ani="flyinfrombottom-184900 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="184900" id="item184900" data-hidestart="1" className="pageItem hidden kanooAddTop" alt="Peradangan transmural " style={{ left: '754px', top: '652px' }} data-src="assets/images/item_184900.png" />
                        <img src={blankImage} data-ani="flyinfrombottom-184924 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="184924" id="item184924" data-hidestart="1" className="pageItem hidden kanooAddTop" alt="Perdarahan rektum " style={{ left: '800px', top: '563px' }} data-src="assets/images/item_184924.png" />
                        <div data-ani="flyinfromright-187090 1s cubic-bezier(.2,.6,.35,1) 1" data-id="187090" id="item187090" data-hidestart="1" className="pageItem group hidden" alt="Penyakit Crohn (PC" style={{ left: '1434px', top: '295px', width: ' 486px', height: '84px' }}>
                            <div id="item184624" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Penyakit Crohn (PC)" style={{ left: '43px', top: '16px' }} id="item184947" className="pageItem " data-src="assets/images/item_184947.png" />
                        </div>
                        <div data-ani="flyinfromleft-187089 1s cubic-bezier(.2,.6,.35,1) 1" data-id="187089" id="item187089" data-hidestart="1" className="pageItem group hidden" alt="Kolitis Ulseratif (KU)" style={{ top: '295px', width: ' 486px', height: '84px' }}>
                            <img src={blankImage} alt="Rectangle" id="item184626" className="pageItem " data-src="assets/images/item_184626.png" />
                            <img src={blankImage} alt="Kolitis Ulseratif (KU) " style={{ left: '37px', top: '16px' }} id="item184970" className="pageItem " data-src="assets/images/item_184970.png" />
                        </div>
                        <img src={blankImage} data-ani="flyinfrombottom-184993 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="184993" id="item184993" data-hidestart="1" className="pageItem hidden kanooAddTop" alt="Skipped lession " style={{ left: '800px', top: '395px' }} data-src="assets/images/item_184993.png" />
                        <img src={blankImage} data-ani="flyinfrombottom-185016 0.2s cubic-bezier(.2,.6,.35,1) 1" data-id="185016" id="item185016" data-hidestart="1" className="pageItem hidden kanooAddTop" alt="Terjadi dimana saja " style={{ left: '790px', top: '309px' }} data-src="assets/images/item_185016.png" />
                        <img src={blankImage} data-ani="fadein-185040 1s linear 1" data-id="185040" id="item185040" data-hidestart="1" className="pageItem hidden" alt="KUIS 1" style={{ left: '712px', top: '157px' }} data-src="assets/images/item_185040.png" />
                        <img src={blankImage} data-ani="fadein-1850400 5s linear 1" data-id="1850400" id="item1850400" data-hidestart="1" className="pageItem hidden" alt="KUIS 1" data-src="assets/images/Kuis1_question.png" />
                        <button data-ani="flyinfrombottom-190456 1s cubic-bezier(.2,.6,.35,1) 1" data-id="190456" id="item190456" data-hidestart="1" className="pageItem hidden" name="jawaban benar" aria-label="jawaban benar">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" style={{ top: '53px' }} id="item189952" className="pageItem ">
                                    <svg version="1.1" width="257" height="257">
                                        <ellipse cx="128.37" cy="128.37" rx="128.37" ry="128.37" fill="#fff" />
                                    </svg>
                                </div>
                                <div alt="Group" style={{ left: '235px', top: '55px' }} id="item189953" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" id="item189954" className="pageItem " data-src="assets/images/item_189954.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '3px', top: '85px' }} id="item189956" className="pageItem " data-src="assets/images/item_189956.png" />
                                </div>
                                <img src={blankImage} alt="Jawaban Kamu Benar! " style={{ left: '226px', top: '70px' }} id="item189957" className="pageItem " data-src="assets/images/item_189957.png" />
                                <div alt="Group" style={{ left: '27px' }} id="item189980" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{ left: '57px', top: '82px' }} id="item189981" className="pageItem " data-src="assets/images/item_189981.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '95px', top: '72px' }} id="item189982" className="pageItem " data-src="assets/images/item_189982.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '27px', top: '232px' }} id="item189983" className="pageItem " data-src="assets/images/item_189983.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '174px', top: '43px' }} id="item189984" className="pageItem " data-src="assets/images/item_189984.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '183px', top: '47px' }} id="item189985" className="pageItem " data-src="assets/images/item_189985.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '148px', top: '43px' }} id="item189986" className="pageItem " data-src="assets/images/item_189986.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '158px', top: '62px' }} id="item189987" className="pageItem " data-src="assets/images/item_189987.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '148px', top: '43px' }} id="item189988" className="pageItem " data-src="assets/images/item_189988.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '174px', top: '43px' }} id="item189989" className="pageItem " data-src="assets/images/item_189989.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '179px', top: '47px' }} id="item189990" className="pageItem " data-src="assets/images/item_189990.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '174px', top: '56px' }} id="item189991" className="pageItem " data-src="assets/images/item_189991.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '174px', top: '50px' }} id="item189992" className="pageItem " data-src="assets/images/item_189992.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '180px', top: '52px' }} id="item189994" className="pageItem " data-src="assets/images/item_189994.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '179px', top: '59px' }} id="item189995" className="pageItem " data-src="assets/images/item_189995.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '183px', top: '65px' }} id="item189996" className="pageItem " data-src="assets/images/item_189996.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '186px', top: '60px' }} id="item189997" className="pageItem " data-src="assets/images/item_189997.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '166px', top: '60px' }} id="item189998" className="pageItem " data-src="assets/images/item_189998.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '161px', top: '66px' }} id="item189999" className="pageItem " data-src="assets/images/item_189999.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '163px', top: '85px' }} id="item190000" className="pageItem " data-src="assets/images/item_190000.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '160px', top: '61px' }} id="item190001" className="pageItem " data-src="assets/images/item_190001.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '159px', top: '59px' }} id="item190002" className="pageItem " data-src="assets/images/item_190002.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '158px', top: '61px' }} id="item190003" className="pageItem " data-src="assets/images/item_190003.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '167px', top: '70px' }} id="item190004" className="pageItem " data-src="assets/images/item_190004.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '166px', top: '70px' }} id="item190005" className="pageItem " data-src="assets/images/item_190005.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '92px', top: '20px' }} id="item190008" className="pageItem " data-src="assets/images/item_190008.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '92px', top: '21px' }} id="item190009" className="pageItem " data-src="assets/images/item_190009.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '92px', top: '25px' }} id="item190010" className="pageItem " data-src="assets/images/item_190010.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '61px', top: '52px' }} id="item190011" className="pageItem " data-src="assets/images/item_190011.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '72px', top: '52px' }} id="item190012" className="pageItem " data-src="assets/images/item_190012.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '51px', top: '84px' }} id="item190013" className="pageItem " data-src="assets/images/item_190013.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '54px', top: '36px' }} id="item190014" className="pageItem " data-src="assets/images/item_190014.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '98px', top: '38px' }} id="item190015" className="pageItem " data-src="assets/images/item_190015.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '100px', top: '38px' }} id="item190016" className="pageItem " data-src="assets/images/item_190016.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '55px' }} id="item190017" className="pageItem " data-src="assets/images/item_190017.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '57px', top: '11px' }} id="item190018" className="pageItem " data-src="assets/images/item_190018.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '80px', top: '30px' }} id="item190019" className="pageItem " data-src="assets/images/item_190019.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '59px', top: '30px' }} id="item190020" className="pageItem " data-src="assets/images/item_190020.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '57px', top: '11px' }} id="item190022" className="pageItem " data-src="assets/images/item_190022.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '69px', top: '47px' }} id="item190023" className="pageItem " data-src="assets/images/item_190023.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '60px', top: '35px' }} id="item190025" className="pageItem " data-src="assets/images/item_190025.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '60px', top: '35px' }} id="item190026" className="pageItem " data-src="assets/images/item_190026.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '59px', top: '35px' }} id="item190031" className="pageItem " data-src="assets/images/item_190031.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '60px', top: '34px' }} id="item190032" className="pageItem " data-src="assets/images/item_190032.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '81px', top: '35px' }} id="item190033" className="pageItem " data-src="assets/images/item_190033.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '81px', top: '35px' }} id="item190034" className="pageItem " data-src="assets/images/item_190034.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '81px', top: '35px' }} id="item190038" className="pageItem " data-src="assets/images/item_190038.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '81px', top: '37px' }} id="item190039" className="pageItem " data-src="assets/images/item_190039.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '59px', top: '37px' }} id="item190040" className="pageItem " data-src="assets/images/item_190040.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '81px', top: '34px' }} id="item190041" className="pageItem " data-src="assets/images/item_190041.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '80px', top: '30px' }} id="item190042" className="pageItem " data-src="assets/images/item_190042.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '57px', top: '29px' }} id="item190043" className="pageItem " data-src="assets/images/item_190043.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '69px', top: '39px' }} id="item190044" className="pageItem " data-src="assets/images/item_190044.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '67px', top: '33px' }} id="item190045" className="pageItem " data-src="assets/images/item_190045.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '77px', top: '35px' }} id="item190046" className="pageItem " data-src="assets/images/item_190046.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '88px', top: '34px' }} id="item190047" className="pageItem " data-src="assets/images/item_190047.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '91px', top: '34px' }} id="item190048" className="pageItem " data-src="assets/images/item_190048.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '81px', top: '36px' }} id="item190049" className="pageItem " data-src="assets/images/item_190049.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '85px', top: '39px' }} id="item190050" className="pageItem " data-src="assets/images/item_190050.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '81px', top: '37px' }} id="item190052" className="pageItem " data-src="assets/images/item_190052.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '81px', top: '34px' }} id="item190053" className="pageItem " data-src="assets/images/item_190053.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '84px', top: '34px' }} id="item190054" className="pageItem " data-src="assets/images/item_190054.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '88px', top: '34px' }} id="item190061" className="pageItem " data-src="assets/images/item_190061.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '77px', top: '35px' }} id="item190062" className="pageItem " data-src="assets/images/item_190062.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '80px', top: '34px' }} id="item190063" className="pageItem " data-src="assets/images/item_190063.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '81px', top: '36px' }} id="item190065" className="pageItem " data-src="assets/images/item_190065.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '84px', top: '36px' }} id="item190066" className="pageItem " data-src="assets/images/item_190066.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '85px', top: '36px' }} id="item190068" className="pageItem " data-src="assets/images/item_190068.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '81px', top: '35px' }} id="item190070" className="pageItem " data-src="assets/images/item_190070.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '81px', top: '34px' }} id="item190071" className="pageItem " data-src="assets/images/item_190071.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '77px', top: '34px' }} id="item190072" className="pageItem " data-src="assets/images/item_190072.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '54px', top: '34px' }} id="item190073" className="pageItem " data-src="assets/images/item_190073.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '54px', top: '39px' }} id="item190074" className="pageItem " data-src="assets/images/item_190074.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '56px', top: '34px' }} id="item190075" className="pageItem " data-src="assets/images/item_190075.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '57px', top: '35px' }} id="item190076" className="pageItem " data-src="assets/images/item_190076.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '62px', top: '34px' }} id="item190077" className="pageItem " data-src="assets/images/item_190077.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '57px', top: '34px' }} id="item190078" className="pageItem " data-src="assets/images/item_190078.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '37px' }} id="item190079" className="pageItem " data-src="assets/images/item_190079.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '64px', top: '36px' }} id="item190080" className="pageItem " data-src="assets/images/item_190080.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '65px', top: '37px' }} id="item190081" className="pageItem " data-src="assets/images/item_190081.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '66px', top: '36px' }} id="item190083" className="pageItem " data-src="assets/images/item_190083.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '63px', top: '34px' }} id="item190084" className="pageItem " data-src="assets/images/item_190084.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '60px', top: '39px' }} id="item190085" className="pageItem " data-src="assets/images/item_190085.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '54px', top: '34px' }} id="item190086" className="pageItem " data-src="assets/images/item_190086.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '55px', top: '37px' }} id="item190087" className="pageItem " data-src="assets/images/item_190087.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '56px', top: '34px' }} id="item190088" className="pageItem " data-src="assets/images/item_190088.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '57px', top: '34px' }} id="item190089" className="pageItem " data-src="assets/images/item_190089.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '60px', top: '34px' }} id="item190090" className="pageItem " data-src="assets/images/item_190090.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '57px', top: '34px' }} id="item190091" className="pageItem " data-src="assets/images/item_190091.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '60px', top: '36px' }} id="item190092" className="pageItem " data-src="assets/images/item_190092.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '64px', top: '36px' }} id="item190093" className="pageItem " data-src="assets/images/item_190093.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '59px', top: '35px' }} id="item190096" className="pageItem " data-src="assets/images/item_190096.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '60px', top: '34px' }} id="item190097" className="pageItem " data-src="assets/images/item_190097.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '59px', top: '37px' }} id="item190098" className="pageItem " data-src="assets/images/item_190098.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '53px', top: '34px' }} id="item190099" className="pageItem " data-src="assets/images/item_190099.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '70px', top: '34px' }} id="item190101" className="pageItem " data-src="assets/images/item_190101.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '61px', top: '1px' }} id="item190102" className="pageItem " data-src="assets/images/item_190102.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '99px', top: '47px' }} id="item190103" className="pageItem " data-src="assets/images/item_190103.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '1px', top: '98px' }} id="item190104" className="pageItem " data-src="assets/images/item_190104.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '23px', top: '76px' }} id="item190105" className="pageItem " data-src="assets/images/item_190105.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '54px', top: '73px' }} id="item190106" className="pageItem " data-src="assets/images/item_190106.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '99px', top: '88px' }} id="item190107" className="pageItem " data-src="assets/images/item_190107.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '75px', top: '199px' }} id="item190108" className="pageItem " data-src="assets/images/item_190108.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '58px', top: '69px' }} id="item190109" className="pageItem " data-src="assets/images/item_190109.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '59px', top: '149px' }} id="item190110" className="pageItem " data-src="assets/images/item_190110.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '56px', top: '179px' }} id="item190111" className="pageItem " data-src="assets/images/item_190111.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '56px', top: '206px' }} id="item190112" className="pageItem " data-src="assets/images/item_190112.png" />
                                    <div alt="Oval" style={{ left: '55px', top: '228px' }} id="item190113" className="pageItem ">
                                        <svg version="1.1" width="7" height="7">
                                            <ellipse cx="2.12" cy="2.12" rx="2.12" ry="2.12" stroke="" strokeWidth="1" fill="#bcced1" />
                                        </svg>
                                    </div>
                                    <img src={blankImage} alt="Polygon" style={{ left: '110px', top: '86px' }} id="item190114" className="pageItem " data-src="assets/images/item_190114.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '113px', top: '90px' }} id="item190115" className="pageItem " data-src="assets/images/item_190115.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '159px', top: '92px' }} id="item190116" className="pageItem " data-src="assets/images/item_190116.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '132px', top: '96px' }} id="item190117" className="pageItem " data-src="assets/images/item_190117.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '11px', top: '117px' }} id="item190120" className="pageItem " data-src="assets/images/item_190120.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '11px', top: '116px' }} id="item190121" className="pageItem " data-src="assets/images/item_190121.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '20px', top: '184px' }} id="item190122" className="pageItem " data-src="assets/images/item_190122.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '21px', top: '164px' }} id="item190123" className="pageItem " data-src="assets/images/item_190123.png" />
                                    <img src={blankImage} alt="Polygon" style={{ top: '156px' }} id="item190124" className="pageItem " data-src="assets/images/item_190124.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '29px', top: '151px' }} id="item190125" className="pageItem " data-src="assets/images/item_190125.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '29px', top: '151px' }} id="item190126" className="pageItem " data-src="assets/images/item_190126.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '39px', top: '171px' }} id="item190127" className="pageItem " data-src="assets/images/item_190127.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '40px', top: '176px' }} id="item190129" className="pageItem " data-src="assets/images/item_190129.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '42px', top: '182px' }} id="item190130" className="pageItem " data-src="assets/images/item_190130.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '105px', top: '74px' }} id="item190131" className="pageItem " data-src="assets/images/item_190131.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '103px', top: '121px' }} id="item190132" className="pageItem " data-src="assets/images/item_190132.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '104px', top: '123px' }} id="item190133" className="pageItem " data-src="assets/images/item_190133.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '49px', top: '71px' }} id="item190134" className="pageItem " data-src="assets/images/item_190134.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '48px', top: '83px' }} id="item190135" className="pageItem " data-src="assets/images/item_190135.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '46px', top: '114px' }} id="item190136" className="pageItem " data-src="assets/images/item_190136.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '50px', top: '148px' }} id="item190138" className="pageItem " data-src="assets/images/item_190138.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '57px', top: '147px' }} id="item190139" className="pageItem " data-src="assets/images/item_190139.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '45px', top: '114px' }} id="item190140" className="pageItem " data-src="assets/images/item_190140.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '67px', top: '52px' }} id="item190142" className="pageItem " data-src="assets/images/item_190142.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '69px', top: '55px' }} id="item190143" className="pageItem " data-src="assets/images/item_190143.png" />
                                </div>
                            </div>
                        </button>
                        <button data-ani="flyinfrombottom-190448 1s cubic-bezier(.2,.6,.35,1) 1" data-id="190448" id="item190448" data-hidestart="1" className="pageItem hidden" name="jawaban salah" aria-label="jawaban salah">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" style={{ top: '55px' }} id="item190321" className="pageItem ">
                                    <svg version="1.1" width="257" height="257">
                                        <ellipse cx="128.37" cy="128.37" rx="128.37" ry="128.37" fill="#fff" />
                                    </svg>
                                </div>
                                <div alt="Group" style={{ left: '235px', top: '55px' }} id="item190323" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" id="item190324" className="pageItem " data-src="assets/images/item_190324.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '3px', top: '85px' }} id="item190326" className="pageItem " data-src="assets/images/item_190326.png" />
                                </div>
                                <img src={blankImage} alt="Jawaban Kamu Kurang Tepat! " style={{ left: '209px', top: '75px' }} id="item190327" className="pageItem " data-src="assets/images/item_190327.png" />
                                <div alt="Group" style={{ left: '62px' }} id="item190350" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{ left: '34px', top: '23px' }} id="item190351" className="pageItem " data-src="assets/images/item_190351.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '40px', top: '27px' }} id="item190352" className="pageItem " data-src="assets/images/item_190352.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '51px', top: '49px' }} id="item190353" className="pageItem " data-src="assets/images/item_190353.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '48px', top: '49px' }} id="item190354" className="pageItem " data-src="assets/images/item_190354.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '40px', top: '35px' }} id="item190355" className="pageItem " data-src="assets/images/item_190355.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '42px', top: '36px' }} id="item190356" className="pageItem " data-src="assets/images/item_190356.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '83px', top: '35px' }} id="item190357" className="pageItem " data-src="assets/images/item_190357.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '85px', top: '36px' }} id="item190358" className="pageItem " data-src="assets/images/item_190358.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '45px', top: '11px' }} id="item190359" className="pageItem " data-src="assets/images/item_190359.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '45px', top: '11px' }} id="item190360" className="pageItem " data-src="assets/images/item_190360.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '44px', top: '32px' }} id="item190361" className="pageItem " data-src="assets/images/item_190361.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '72px', top: '41px' }} id="item190362" className="pageItem " data-src="assets/images/item_190362.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '66px', top: '28px' }} id="item190363" className="pageItem " data-src="assets/images/item_190363.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '47px', top: '28px' }} id="item190364" className="pageItem " data-src="assets/images/item_190364.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '67px', top: '33px' }} id="item190365" className="pageItem " data-src="assets/images/item_190365.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '67px', top: '33px' }} id="item190366" className="pageItem " data-src="assets/images/item_190366.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '67px', top: '33px' }} id="item190370" className="pageItem " data-src="assets/images/item_190370.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '67px', top: '36px' }} id="item190371" className="pageItem " data-src="assets/images/item_190371.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '67px', top: '32px' }} id="item190372" className="pageItem " data-src="assets/images/item_190372.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '48px', top: '33px' }} id="item190374" className="pageItem " data-src="assets/images/item_190374.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '48px', top: '33px' }} id="item190375" className="pageItem " data-src="assets/images/item_190375.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '47px', top: '32px' }} id="item190379" className="pageItem " data-src="assets/images/item_190379.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '48px', top: '35px' }} id="item190380" className="pageItem " data-src="assets/images/item_190380.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '47px', top: '31px' }} id="item190382" className="pageItem " data-src="assets/images/item_190382.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '67px', top: '26px' }} id="item190383" className="pageItem " data-src="assets/images/item_190383.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '45px', top: '27px' }} id="item190384" className="pageItem " data-src="assets/images/item_190384.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '58px', top: '37px' }} id="item190385" className="pageItem " data-src="assets/images/item_190385.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '57px', top: '44px' }} id="item190386" className="pageItem " data-src="assets/images/item_190386.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '56px', top: '31px' }} id="item190387" className="pageItem " data-src="assets/images/item_190387.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '55px', top: '9px' }} id="item190389" className="pageItem " data-src="assets/images/item_190389.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '33px' }} id="item190390" className="pageItem " data-src="assets/images/item_190390.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '72px', top: '14px' }} id="item190391" className="pageItem " data-src="assets/images/item_190391.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '65px', top: '30px' }} id="item190392" className="pageItem " data-src="assets/images/item_190392.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '45px', top: '30px' }} id="item190393" className="pageItem " data-src="assets/images/item_190393.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '57px', top: '32px' }} id="item190394" className="pageItem " data-src="assets/images/item_190394.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '78px', top: '35px' }} id="item190395" className="pageItem " data-src="assets/images/item_190395.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '52px', top: '84px' }} id="item190396" className="pageItem " data-src="assets/images/item_190396.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '25px', top: '222px' }} id="item190397" className="pageItem " data-src="assets/images/item_190397.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '18px', top: '72px' }} id="item190398" className="pageItem " data-src="assets/images/item_190398.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '18px', top: '158px' }} id="item190399" className="pageItem " data-src="assets/images/item_190399.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '61px', top: '72px' }} id="item190400" className="pageItem " data-src="assets/images/item_190400.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '61px', top: '158px' }} id="item190401" className="pageItem " data-src="assets/images/item_190401.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '46px', top: '85px' }} id="item190402" className="pageItem " data-src="assets/images/item_190402.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '99px', top: '128px' }} id="item190403" className="pageItem " data-src="assets/images/item_190403.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '96px', top: '90px' }} id="item190404" className="pageItem " data-src="assets/images/item_190404.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '101px', top: '108px' }} id="item190405" className="pageItem " data-src="assets/images/item_190405.png" />
                                    <img src={blankImage} alt="Polygon" style={{ top: '91px' }} id="item190406" className="pageItem " data-src="assets/images/item_190406.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '4px', top: '91px' }} id="item190407" className="pageItem " data-src="assets/images/item_190407.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '6px', top: '141px' }} id="item190408" className="pageItem " data-src="assets/images/item_190408.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '22px', top: '90px' }} id="item190409" className="pageItem " data-src="assets/images/item_190409.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '27px', top: '119px' }} id="item190410" className="pageItem " data-src="assets/images/item_190410.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '88px', top: '128px' }} id="item190411" className="pageItem " data-src="assets/images/item_190411.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '94px', top: '129px' }} id="item190412" className="pageItem " data-src="assets/images/item_190412.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '99px', top: '135px' }} id="item190413" className="pageItem " data-src="assets/images/item_190413.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '101px', top: '128px' }} id="item190414" className="pageItem " data-src="assets/images/item_190414.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '104px', top: '129px' }} id="item190416" className="pageItem " data-src="assets/images/item_190416.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '105px', top: '135px' }} id="item190417" className="pageItem " data-src="assets/images/item_190417.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '93px', top: '132px' }} id="item190418" className="pageItem " data-src="assets/images/item_190418.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '96px', top: '137px' }} id="item190419" className="pageItem " data-src="assets/images/item_190419.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '6px', top: '139px' }} id="item190420" className="pageItem " data-src="assets/images/item_190420.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '7px', top: '143px' }} id="item190421" className="pageItem " data-src="assets/images/item_190421.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '14px', top: '163px' }} id="item190422" className="pageItem " data-src="assets/images/item_190422.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '6px', top: '151px' }} id="item190423" className="pageItem " data-src="assets/images/item_190423.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '7px', top: '156px' }} id="item190424" className="pageItem " data-src="assets/images/item_190424.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '43px', top: '146px' }} id="item190425" className="pageItem " data-src="assets/images/item_190425.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '48px', top: '140px' }} id="item190426" className="pageItem " data-src="assets/images/item_190426.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '42px', top: '68px' }} id="item190428" className="pageItem " data-src="assets/images/item_190428.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '42px', top: '68px' }} id="item190429" className="pageItem " data-src="assets/images/item_190429.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '54px', top: '70px' }} id="item190430" className="pageItem " data-src="assets/images/item_190430.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '54px', top: '70px' }} id="item190431" className="pageItem " data-src="assets/images/item_190431.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '49px', top: '167px' }} id="item190432" className="pageItem " data-src="assets/images/item_190432.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '81px', top: '187px' }} id="item190433" className="pageItem " data-src="assets/images/item_190433.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '25px', top: '189px' }} id="item190434" className="pageItem " data-src="assets/images/item_190434.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '44px', top: '66px' }} id="item190439" className="pageItem " data-src="assets/images/item_190439.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '41px', top: '103px' }} id="item190440" className="pageItem " data-src="assets/images/item_190440.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '47px', top: '143px' }} id="item190441" className="pageItem " data-src="assets/images/item_190441.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '55px', top: '142px' }} id="item190442" className="pageItem " data-src="assets/images/item_190442.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '41px', top: '102px' }} id="item190443" className="pageItem " data-src="assets/images/item_190443.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '78px', top: '67px' }} id="item190444" className="pageItem " data-src="assets/images/item_190444.png" />
                                    <img src={blankImage} alt="Polygon" style={{ left: '94px', top: '119px' }} id="item190445" className="pageItem " data-src="assets/images/item_190445.png" />
                                    <div alt="Oval" style={{ left: '96px', top: '120px' }} id="item190446" className="pageItem ">
                                        <svg version="1.1" width="7" height="7">
                                            <ellipse cx="2.34" cy="2.34" rx="2.34" ry="2.34" stroke="" strokeWidth="1" fill="#8c8c9b" />
                                        </svg>
                                    </div>
                                    <img src={blankImage} alt="Polygon" style={{ left: '53px', top: '51px' }} id="item190447" className="pageItem " data-src="assets/images/item_190447.png" />
                                </div>
                            </div>
                        </button>
                        <div alt="Takeda Indonesia, 202" style={{ left: '1885px', top: '1113px' }} id="item190600" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{ left: '1px' }} id="item190601" className="pageItem " data-src="assets/images/item_190601.png" />
                            <div alt="Group" style={{ top: '132px' }} id="item190624" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item190625" className="pageItem " data-src="assets/images/item_190625.png" />
                                <img src={blankImage} alt="Polygon" style={{ left: '3px', top: '4px' }} id="item190626" className="pageItem " data-src="assets/images/item_190626.png" />
                            </div>
                        </div>
                        <button data-ani="flyinfrombottom-227598 1s cubic-bezier(.2,.6,.35,1) 1" data-id="227598" id="item227598" data-hidestart="1" className="pageItem hidden" name="mata 2" aria-label="mata 2">
                            <div className="pageItem state btn-off">
                                <div alt="Group" id="item218309" className="pageItem group ">
                                    <div alt="Oval" id="item218310" className="pageItem ">
                                        <svg version="1.1" width="6" height="6">
                                            <ellipse cx="1.85" cy="1.85" rx="1.85" ry="1.85" stroke="" strokeWidth="1" fill="#1c1463" />
                                        </svg>
                                    </div>
                                    <img src={blankImage} alt="Polygon" style={{ left: '1px', top: '1px' }} id="item218311" className="pageItem " data-src="assets/images/item_218311.png" />
                                </div>
                                <div alt="Group" style={{ left: '19px' }} id="item218313" className="pageItem group ">
                                    <div alt="Oval" id="item218314" className="pageItem ">
                                        <svg version="1.1" width="6" height="6">
                                            <ellipse cx="1.85" cy="1.85" rx="1.85" ry="1.85" stroke="" strokeWidth="1" fill="#1c1463" />
                                        </svg>
                                    </div>
                                    <img src={blankImage} alt="Polygon" style={{ left: '1px', top: '1px' }} id="item218315" className="pageItem " data-src="assets/images/item_218315.png" />
                                </div>
                            </div>
                        </button>

                        <button data-id="227753" name="O" aria-label="O" id="item227753" className="pageItem " data-hidestart="1">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item227749" className="pageItem kanooAddTop" data-src="assets/images/item_227749.png" />
                            </div>
                        </button>
                        <button data-id="227755" name="O 1" aria-label="O 1" id="item227755" className="pageItem " data-hidestart="1">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item227757" className="pageItem kanooAddTop" data-src="assets/images/item_227757.png" />
                            </div>
                        </button>

                        <button data-id="227758" name="O 2" aria-label="O 2" id="item227758" className="pageItem " data-hidestart="1">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item227760" className="pageItem kanooAddTop" data-src="assets/images/item_227760.png" />
                            </div>
                        </button>
                        <button data-id="227761" name="O 3" aria-label="O 3" id="item227761" className="pageItem " data-hidestart="1">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item227763" className="pageItem kanooAddTop" data-src="assets/images/item_227763.png" />
                            </div>
                        </button>

                        <button data-id="227764" name="O 4" aria-label="O 4" id="item227764" className="pageItem " data-hidestart="1">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item227766" className="pageItem kanooAddTop" data-src="assets/images/item_227766.png" />
                            </div>
                        </button>
                        <button data-id="227767" name="O 5" aria-label="O 5" id="item227767" className="pageItem " data-hidestart="1">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item227769" className="pageItem kanooAddTop" data-src="assets/images/item_227769.png" />
                            </div>
                        </button>

                        <button data-id="227770" name="O 6" aria-label="O 6" id="item227770" className="pageItem " data-hidestart="1">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item227772" className="pageItem kanooAddTop" data-src="assets/images/item_227772.png" />
                            </div>
                        </button>
                        <button data-id="227773" name="O 7" aria-label="O 7" id="item227773" className="pageItem " data-hidestart="1">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item227775" className="pageItem kanooAddTop" data-src="assets/images/item_227775.png" />
                            </div>
                        </button>

                        <button data-id="227776" name="O 8" aria-label="O 8" id="item227776" className="pageItem " data-hidestart="1">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item227779" className="pageItem kanooAddTop" data-src="assets/images/item_227779.png" />
                            </div>
                        </button>
                        <button data-id="227781" name="O 9" aria-label="O 9" id="item227781" className="pageItem " data-hidestart="1">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item227783" className="pageItem kanooAddTop" data-src="assets/images/item_227783.png" />
                            </div>
                        </button>

                        <button data-id="227784" name="O 10" aria-label="O 10" id="item227784" className="pageItem " data-hidestart="1">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item227786" className="pageItem kanooAddTop" data-src="assets/images/item_227786.png" />
                            </div>
                        </button>
                        <button data-id="227787" name="O 11" aria-label="O 11" id="item227787" className="pageItem " data-hidestart="1">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item227789" className="pageItem kanooAddTop" data-src="assets/images/item_227789.png" />
                            </div>
                        </button>

                        <button data-id="227790" name="O 12" aria-label="O 12" id="item227790" className="pageItem " data-hidestart="1">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item227792" className="pageItem kanooAddTop" data-src="assets/images/item_227792.png" />
                            </div>
                        </button>
                        <button data-id="227793" name="O 13" aria-label="O 13" id="item227793" className="pageItem " data-hidestart="1">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item227795" className="pageItem kanooAddTop" data-src="assets/images/item_227795.png" />
                            </div>
                        </button>

                        <button data-id="200944" name="icon beranda 67" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 67" id="item200944" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item200951" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '14px', top: '15px' }} id="item200952" className="pageItem " data-src="assets/images/item_200952.png" />
                                <img src={blankImage} alt="Polygon" style={{ left: '17px', top: '18px' }} id="item200953" className="pageItem " data-src="assets/images/item_200953.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item200955" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '14px', top: '15px' }} id="item200956" className="pageItem " data-src="assets/images/item_200956.png" />
                                <img src={blankImage} alt="Polygon" style={{ left: '17px', top: '18px' }} id="item200957" className="pageItem " data-src="assets/images/item_200957.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item200947" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '17px', top: '18px' }} id="item200948" className="pageItem " data-src="assets/images/item_200948.png" />
                                <img src={blankImage} alt="Polygon" style={{ left: '14px', top: '15px' }} id="item200949" className="pageItem " data-src="assets/images/item_200949.png" />
                            </div>
                        </button>
                        <button data-ani="fadein-207869 1s linear 1" data-id="207869" id="item207869" data-hidestart="1" className="pageItem has-on has-down hidden" name="soal selanjutnya" onClick={handleOnClickGoToQuiz2} aria-label="soal selanjutnya">
                            <div className="pageItem state btn-off">
                                <div id="item207832" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Soal Selanjutnya" style={{ left: '23px', top: '15px' }} id="item207793" className="pageItem " data-src="assets/images/item_207793.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item207928" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Soal Selanjutnya" style={{ left: '23px', top: '15px' }} id="item207929" className="pageItem " data-src="assets/images/item_207929.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item207953" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Soal Selanjutnya" style={{ left: '23px', top: '15px' }} id="item207954" className="pageItem " data-src="assets/images/item_207954.png" />
                            </div>
                        </button>
                        <button data-ani="fadein-207868 0.5s linear 1" data-id="207868" id="item207868" data-hidestart="1" className="pageItem has-on has-down hidden" name="cek penjelasan" onClick={handleOnClickCekPenjelasan} aria-label="cek penjelasan">
                            <div className="pageItem state btn-off">
                                <div id="item207841" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Penjelasan" style={{ left: '26px', top: '15px' }} id="item207843" className="pageItem " data-src="assets/images/item_207843.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item207875" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Penjelasan" style={{ left: '26px', top: '15px' }} id="item207876" className="pageItem " data-src="assets/images/item_207876.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item207901" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Penjelasan" style={{ left: '26px', top: '15px' }} id="item207902" className="pageItem " data-src="assets/images/item_207902.png" />
                            </div>
                        </button>
                        <button data-id="208100" name="icon back 70" onClick={handleOnClickPreviousPage} aria-label="icon back 70" id="item208100" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item208108" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '21px', top: '14px' }} id="item208109" className="pageItem " data-src="assets/images/item_208109.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item208111" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '21px', top: '14px' }} id="item208112" className="pageItem " data-src="assets/images/item_208112.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item208103" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '21px', top: '14px' }} id="item208105" className="pageItem " data-src="assets/images/item_208105.png" />
                            </div>
                        </button>
                        <button data-id="227827" name="cek jawaban" aria-label="cek jawaban" id="item227827" onClick={handleOnClickCekJawaban} className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item227797" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Jawaban" style={{ left: '26px', top: '15px' }} id="item227799" className="pageItem " data-src="assets/images/item_227799.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item227829" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Jawaban" style={{ left: '26px', top: '15px' }} id="item227830" className="pageItem " data-src="assets/images/item_227830.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item227857" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Cek Jawaban" style={{ left: '26px', top: '15px' }} id="item227858" className="pageItem " data-src="assets/images/item_227858.png" />
                            </div>
                        </button>

                        <Navigation />

                        <input type="hidden" id="quiz1_opt1" name="quiz1answer[]" value="" />
                        <input type="hidden" id="quiz1_opt2" name="quiz1answer[]" value="" />
                        <input type="hidden" id="quiz1_opt3" name="quiz1answer[]" value="" />
                        <input type="hidden" id="quiz1_opt4" name="quiz1answer[]" value="" />
                        <input type="hidden" id="quiz1_opt5" name="quiz1answer[]" value="" />
                        <input type="hidden" id="quiz1_opt6" name="quiz1answer[]" value="" />
                        <input type="hidden" id="quiz1_opt7" name="quiz1answer[]" value="" />
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Quiz1;