import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Quiz7Penjelasan() {

    const navigate = useNavigate();

    const handleOnClickGoToQuiz6 = () => {
        window.location.href = '/quiz6'; // #54
    };
    const handleOnClickGoToQuizEnd = () => {
        window.location.href = '/quiz-terima-kasih'; // #54
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
                <li className="page" data-name="64">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:207296,act:'play'},{n:1,id:207295,act:'play'},{n:1,id:207297,act:'play'},{del:2,n:1,id:207298,act:'play'}], 'pageload');" style={{width:'1920px',height:'1080px'}}>
                        <div id="item264558" className="pageItem" style={{height:'60px',width:'60px',left:'30px',top:'818px'}} alt="Sound">
                            <audio data-id="264558" className="mejs-no-controls" data-autoplay="1" data-autodelay="0" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/Quiz 7 Penjelasan FULL.mp3" />
                            </audio>
                        </div>
                        <div id="item227344" className="pageItem" style={{height:'60px',width:'60px',left:'84px',top:'372px'}} alt="Sound">
                            <audio data-id="227344" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/quiz 7-4.mp3" />
                            </audio>
                        </div>
                        <div id="item227352" className="pageItem" style={{height:'60px',width:'60px',left:'90px',top:'261px'}} alt="Sound">
                            <audio data-id="227352" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/quiz 7-5.mp3" />
                            </audio>
                        </div>
                        <div id="item207286" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item207291" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item205215" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item205218" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item205220" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <img src={blankImage} alt="KUIS 7" style={{left:'712px',top:'157px'}} id="item205222" className="pageItem " data-src="assets/images/item_205222.png" />
                        <div alt="soal" style={{left:'278px',top:'331px'}} id="item206579" className="pageItem group ">
                            <div id="item206580" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Ustekinumab berperan menekan proses peradangan dengan menghambat interaksi antara integrin α4β7 dengan MADCAM 1, sehi..." style={{left:'37px',top:'27px'}} id="item206582" className="pageItem " data-src="assets/images/item_206582.png" />
                        </div>
                        <div data-ani="flyinfromleft-207297 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="207297" id="item207297" data-hidestart="1" className="pageItem group hidden" alt="line" style={{left:'820px',top:'738px',width:' 96px',height:'14px'}}>
                            <img src={blankImage} alt="Polygon" style={{left:'85px'}} id="item206606" className="pageItem " data-src="assets/images/item_206606.png" />
                            <img src={blankImage} alt="GraphicLine" style={{height:' 5px',top:'5px'}} id="item206609" className="pageItem " data-src="assets/images/item_206609.png" />
                        </div>
                        <div data-ani="flyinfrombottom-207295 1s cubic-bezier(.2,.6,.35,1) 1" data-id="207295" id="item207295" data-hidestart="1" className="pageItem group hidden" alt="benar" style={{left:'239px',top:'526px',width:' 563px',height:'129px'}}>
                            <div id="item206611" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <div id="item206613" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Benar" style={{left:'173px',top:'36px'}} id="item206618" className="pageItem " data-src="assets/images/item_206618.png" />
                        </div>
                        <div data-ani="flyinfromleft-207298 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="207298" id="item207298" data-hidestart="1" className="pageItem group hidden" alt="penjelasan" style={{left:'944px',top:'645px',width:' 823px',height:'203px'}}>
                            <div id="item206605" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Mekanisme kerja ustekinumab Berikatan dengan subunit p40 pada IL 12 dan IL 23, sehingga menghambat aktivasi dan produ..." style={{left:'35px',top:'14px'}} id="item206665" className="pageItem " data-src="assets/images/item_206665.png" />
                        </div>
                        <div data-ani="flyinfrombottom-207296 1s cubic-bezier(.2,.6,.35,1) 1" data-id="207296" id="item207296" data-hidestart="1" className="pageItem group hidden" alt="salah" style={{left:'239px',top:'682px',width:' 563px',height:'129px'}}>
                            <div id="item206612" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <div id="item206615" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Polygon" style={{left:'27px',top:'38px'}} id="item206616" className="pageItem " data-src="assets/images/item_206616.png" />
                            <img src={blankImage} alt="Salah" style={{left:'173px',top:'36px'}} id="item206642" className="pageItem " data-src="assets/images/item_206642.png" />
                        </div>
                        <button data-ani="flyinfrombottom-220100 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="220100" id="item220100" data-hidestart="1" className="pageItem hidden" name="jawaban salah 7" aria-label="jawaban salah 7">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" style={{top:'63px'}} id="item220102" className="pageItem ">
                                    <svg version="1.1" width="298" height="298" >
                                        <ellipse cx="148.72" cy="148.72" rx="148.72" ry="148.72" fill="#fff" />
                                    </svg>
                                </div>
                                <div alt="Group" style={{left:'273px',top:'64px'}} id="item220104" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" id="item220105" className="pageItem " data-src="assets/images/item_220105.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px',top:'98px'}} id="item220107" className="pageItem " data-src="assets/images/item_220107.png" />
                                </div>
                                <img src={blankImage} alt="Jawaban Kamu Kurang Tepat! " style={{left:'263px',top:'89px'}} id="item220108" className="pageItem " data-src="assets/images/item_220108.png" />
                                <div alt="Group" style={{left:'71px'}} id="item220131" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{left:'39px',top:'27px'}} id="item220132" className="pageItem " data-src="assets/images/item_220132.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'46px',top:'31px'}} id="item220133" className="pageItem " data-src="assets/images/item_220133.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'59px',top:'56px'}} id="item220134" className="pageItem " data-src="assets/images/item_220134.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'55px',top:'56px'}} id="item220135" className="pageItem " data-src="assets/images/item_220135.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'47px',top:'40px'}} id="item220136" className="pageItem " data-src="assets/images/item_220136.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'48px',top:'42px'}} id="item220137" className="pageItem " data-src="assets/images/item_220137.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'96px',top:'41px'}} id="item220138" className="pageItem " data-src="assets/images/item_220138.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'99px',top:'42px'}} id="item220139" className="pageItem " data-src="assets/images/item_220139.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'52px',top:'13px'}} id="item220140" className="pageItem " data-src="assets/images/item_220140.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'52px',top:'13px'}} id="item220141" className="pageItem " data-src="assets/images/item_220141.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'50px',top:'38px'}} id="item220142" className="pageItem " data-src="assets/images/item_220142.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'84px',top:'47px'}} id="item220143" className="pageItem " data-src="assets/images/item_220143.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'76px',top:'32px'}} id="item220144" className="pageItem " data-src="assets/images/item_220144.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'54px',top:'32px'}} id="item220145" className="pageItem " data-src="assets/images/item_220145.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'77px',top:'38px'}} id="item220146" className="pageItem " data-src="assets/images/item_220146.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'77px',top:'38px'}} id="item220147" className="pageItem " data-src="assets/images/item_220147.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'77px',top:'38px'}} id="item220151" className="pageItem " data-src="assets/images/item_220151.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'77px',top:'41px'}} id="item220152" className="pageItem " data-src="assets/images/item_220152.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'77px',top:'37px'}} id="item220153" className="pageItem " data-src="assets/images/item_220153.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'55px',top:'38px'}} id="item220154" className="pageItem " data-src="assets/images/item_220154.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'55px',top:'38px'}} id="item220155" className="pageItem " data-src="assets/images/item_220155.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'55px',top:'38px'}} id="item220160" className="pageItem " data-src="assets/images/item_220160.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'55px',top:'41px'}} id="item220161" className="pageItem " data-src="assets/images/item_220161.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'55px',top:'36px'}} id="item220163" className="pageItem " data-src="assets/images/item_220163.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'77px',top:'30px'}} id="item220164" className="pageItem " data-src="assets/images/item_220164.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'52px',top:'31px'}} id="item220165" className="pageItem " data-src="assets/images/item_220165.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'67px',top:'43px'}} id="item220166" className="pageItem " data-src="assets/images/item_220166.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'66px',top:'51px'}} id="item220167" className="pageItem " data-src="assets/images/item_220167.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'64px',top:'36px'}} id="item220168" className="pageItem " data-src="assets/images/item_220168.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'64px',top:'11px'}} id="item220170" className="pageItem " data-src="assets/images/item_220170.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'38px'}} id="item220172" className="pageItem " data-src="assets/images/item_220172.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'83px',top:'16px'}} id="item220173" className="pageItem " data-src="assets/images/item_220173.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'75px',top:'34px'}} id="item220174" className="pageItem " data-src="assets/images/item_220174.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'52px',top:'34px'}} id="item220175" className="pageItem " data-src="assets/images/item_220175.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'67px',top:'37px'}} id="item220176" className="pageItem " data-src="assets/images/item_220176.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'91px',top:'41px'}} id="item220177" className="pageItem " data-src="assets/images/item_220177.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'60px',top:'98px'}} id="item220178" className="pageItem " data-src="assets/images/item_220178.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'29px',top:'257px'}} id="item220179" className="pageItem " data-src="assets/images/item_220179.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'21px',top:'83px'}} id="item220180" className="pageItem " data-src="assets/images/item_220180.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'21px',top:'183px'}} id="item220181" className="pageItem " data-src="assets/images/item_220181.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'71px',top:'83px'}} id="item220182" className="pageItem " data-src="assets/images/item_220182.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'70px',top:'183px'}} id="item220183" className="pageItem " data-src="assets/images/item_220183.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'53px',top:'99px'}} id="item220184" className="pageItem " data-src="assets/images/item_220184.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'114px',top:'148px'}} id="item220185" className="pageItem " data-src="assets/images/item_220185.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'112px',top:'104px'}} id="item220186" className="pageItem " data-src="assets/images/item_220186.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'116px',top:'125px'}} id="item220187" className="pageItem " data-src="assets/images/item_220187.png" />
                                    <img src={blankImage} alt="Polygon" style={{top:'105px'}} id="item220188" className="pageItem " data-src="assets/images/item_220188.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px',top:'105px'}} id="item220189" className="pageItem " data-src="assets/images/item_220189.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'6px',top:'164px'}} id="item220190" className="pageItem " data-src="assets/images/item_220190.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'26px',top:'104px'}} id="item220191" className="pageItem " data-src="assets/images/item_220191.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'31px',top:'138px'}} id="item220192" className="pageItem " data-src="assets/images/item_220192.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'102px',top:'148px'}} id="item220193" className="pageItem " data-src="assets/images/item_220193.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'108px',top:'150px'}} id="item220194" className="pageItem " data-src="assets/images/item_220194.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'114px',top:'157px'}} id="item220195" className="pageItem " data-src="assets/images/item_220195.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'117px',top:'148px'}} id="item220196" className="pageItem " data-src="assets/images/item_220196.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'120px',top:'149px'}} id="item220197" className="pageItem " data-src="assets/images/item_220197.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'122px',top:'156px'}} id="item220199" className="pageItem " data-src="assets/images/item_220199.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'108px',top:'153px'}} id="item220200" className="pageItem " data-src="assets/images/item_220200.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'112px',top:'159px'}} id="item220201" className="pageItem " data-src="assets/images/item_220201.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'6px',top:'161px'}} id="item220202" className="pageItem " data-src="assets/images/item_220202.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'8px',top:'165px'}} id="item220203" className="pageItem " data-src="assets/images/item_220203.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'16px',top:'189px'}} id="item220204" className="pageItem " data-src="assets/images/item_220204.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'6px',top:'175px'}} id="item220205" className="pageItem " data-src="assets/images/item_220205.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'8px',top:'180px'}} id="item220206" className="pageItem " data-src="assets/images/item_220206.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'49px',top:'169px'}} id="item220207" className="pageItem " data-src="assets/images/item_220207.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'55px',top:'162px'}} id="item220208" className="pageItem " data-src="assets/images/item_220208.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'48px',top:'78px'}} id="item220210" className="pageItem " data-src="assets/images/item_220210.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'48px',top:'78px'}} id="item220211" className="pageItem " data-src="assets/images/item_220211.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'62px',top:'81px'}} id="item220212" className="pageItem " data-src="assets/images/item_220212.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'62px',top:'81px'}} id="item220213" className="pageItem " data-src="assets/images/item_220213.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'56px',top:'193px'}} id="item220214" className="pageItem " data-src="assets/images/item_220214.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'94px',top:'216px'}} id="item220215" className="pageItem " data-src="assets/images/item_220215.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'29px',top:'219px'}} id="item220216" className="pageItem " data-src="assets/images/item_220216.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'51px',top:'76px'}} id="item220220" className="pageItem " data-src="assets/images/item_220220.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'48px',top:'119px'}} id="item220221" className="pageItem " data-src="assets/images/item_220221.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'54px',top:'166px'}} id="item220222" className="pageItem " data-src="assets/images/item_220222.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'64px',top:'165px'}} id="item220223" className="pageItem " data-src="assets/images/item_220223.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'47px',top:'119px'}} id="item220224" className="pageItem " data-src="assets/images/item_220224.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'90px',top:'77px'}} id="item220225" className="pageItem " data-src="assets/images/item_220225.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'109px',top:'137px'}} id="item220226" className="pageItem " data-src="assets/images/item_220226.png" />
                                    <div alt="Oval" style={{left:'111px',top:'139px'}} id="item220227" className="pageItem ">
                                        <svg version="1.1" width="8" height="8" >
                                            <ellipse cx="2.71" cy="2.71" rx="2.71" ry="2.71" stroke="" stroke-width="1" fill="#8c8c9b" />
                                        </svg>
                                    </div>
                                    <img src={blankImage} alt="Polygon" style={{left:'62px',top:'59px'}} id="item220228" className="pageItem " data-src="assets/images/item_220228.png" />
                                </div>
                            </div>
                        </button>
                        <div data-ani="flyinfrombottom-220229 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="220229" id="item220229" data-hidestart="1" className="pageItem group hidden" data-hideend="1" alt="mata" style={{left:'496px',top:'870px',width:' 26px',height:'5px'}}>
                            <div alt="Group" id="item220230" className="pageItem group ">
                                <div alt="Oval" id="item220231" className="pageItem ">
                                    <svg version="1.1" width="7" height="7" >
                                        <ellipse cx="2.2" cy="2.2" rx="2.2" ry="2.2" stroke="" stroke-width="1" fill="#1c1463" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'1px',top:'1px'}} id="item220232" className="pageItem " data-src="assets/images/item_220232.png" />
                            </div>
                            <div alt="Group" style={{left:'22px'}} id="item220235" className="pageItem group ">
                                <div alt="Oval" id="item220236" className="pageItem ">
                                    <svg version="1.1" width="7" height="7" >
                                        <ellipse cx="2.2" cy="2.2" rx="2.2" ry="2.2" stroke="" stroke-width="1" fill="#1c1463" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'1px',top:'1px'}} id="item220237" className="pageItem " data-src="assets/images/item_220237.png" />
                            </div>
                        </div>
                        <button data-id="205175" name="icon next 67" onClick={handleOnClickGoToQuizEnd} aria-label="icon next 67" id="item205175" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item205181" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" stroke-width="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item205182" className="pageItem " data-src="assets/images/item_205182.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item205184" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" stroke-width="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item205186" className="pageItem " data-src="assets/images/item_205186.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item205178" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" stroke-width="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item205179" className="pageItem " data-src="assets/images/item_205179.png" />
                            </div>
                        </button>
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item205319" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item205320" className="pageItem " data-src="assets/images/item_205320.png" />
                            <div alt="Group" style={{top:'132px'}} id="item205343" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item205344" className="pageItem " data-src="assets/images/item_205344.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item205345" className="pageItem " data-src="assets/images/item_205345.png" />
                            </div>
                        </div>
                        <button data-id="222089" name="icon beranda 117" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 117" id="item222089" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item222096" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" stroke-width="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item222097" className="pageItem " data-src="assets/images/item_222097.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item222098" className="pageItem " data-src="assets/images/item_222098.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item222100" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" stroke-width="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item222101" className="pageItem " data-src="assets/images/item_222101.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item222102" className="pageItem " data-src="assets/images/item_222102.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item222092" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" stroke-width="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item222093" className="pageItem " data-src="assets/images/item_222093.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item222094" className="pageItem " data-src="assets/images/item_222094.png" />
                            </div>
                        </button>
                        <button data-id="223702" name="icon back 67" onClick={handleOnClickGoToQuiz6} aria-label="icon back 67" id="item223702" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item223710" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" stroke-width="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item223711" className="pageItem " data-src="assets/images/item_223711.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item223713" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" stroke-width="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item223714" className="pageItem " data-src="assets/images/item_223714.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item223705" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" stroke-width="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item223707" className="pageItem " data-src="assets/images/item_223707.png" />
                            </div>
                        </button>
                        <Navigation />
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Quiz7Penjelasan;