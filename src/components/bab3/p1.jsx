import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Bab3P1() {

    const navigate = useNavigate();

    //var referrer = document.referrer;
    //console.log("referrer url",referrer);
    const handleOnClickPreviousPage = () => {
        window.location.href = '/bab3-start';
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }

    const handleOnClickUlang = (event) => {
        event.preventDefault();
        jQuery("#item263693 audio")[0].currentTime = 0;
        jQuery("#item263693 audio")[0].play();
        go(event,[{n:1,id:68204,act:'play'},{n:1,id:126023,act:'play'},{n:1,link:1,id:6897,act:'play'},{n:1,id:6765,act:'play'},{n:1,id:126020,act:'play'},{del:9,n:1,id:124589,act:'play'},{n:1,id:111221,act:'play'},{n:1,id:124494,act:'play'},{n:1,id:124556,act:'play'},{del:4.5,n:1,id:151430,act:'play'}]);
    }

    const handleOnClickNextPage = () => {
        window.location.href = '/bab4-start';
    }

    const handleOnClickButton1 = (event) => {
        event.preventDefault();
        jQuery('#item126146 audio')[0].play();
        go(event,[{n:1,link:1,id:151547,act:'play'},{n:1,link:1,id:227172,act:'play'},{n:1,id:151536,act:'play'}]);
    };

    const handleOnClickButton2 = (event) => {
        event.preventDefault();
        jQuery('#item126154 audio')[0].play();
        go(event,[{n:1,link:1,id:151620,act:'play'},{n:1,id:151604,act:'play'}]);
    };

    const handleOnClickButton3 = (event) => {
        event.preventDefault();
        jQuery('#item126159 audio')[0].play();
        go(event,[{n:1,link:1,id:152130,act:'play'},{n:1,id:152131,act:'play'}]);
    };

    const handleOnClickButton4 = (event) => {
        event.preventDefault();
        jQuery('#item126167 audio')[0].play();
        go(event,[{n:1,link:1,id:152390,act:'play'},{n:1,id:152391,act:'play'}]);
    };

    const handleOnClickButton1X = (event) => {
        event.preventDefault();
        jQuery('#item126146 audio')[0].pause();
        jQuery('#item126146 audio')[0].currentTime = 0;
        go(event,[{n:1,link:1,id:151547,act:'reverse'},{n:1,link:1,id:227172,act:'reverse'},{n:1,link:1,id:151536,act:'reverse'}]);
    };

    const handleOnClickButton2X = (event) => {
        event.preventDefault();
        jQuery('#item126154 audio')[0].pause();
        jQuery('#item126154 audio')[0].currentTime = 0;
        go(event,[{n:1,link:1,id:151620,act:'reverse'},{n:1,link:1,id:151604,act:'reverse'}]);
    };

    const handleOnClickButton3X = (event) => {
        event.preventDefault();
        jQuery('#item126159 audio')[0].pause();
        jQuery('#item126159 audio')[0].currentTime = 0;
        go(event,[{n:1,link:1,id:152130,act:'reverse'},{n:1,link:1,id:152131,act:'reverse'}]);
    };

    const handleOnClickButton4X = (event) => {
        event.preventDefault();
        jQuery('#item126167 audio')[0].pause();
        jQuery('#item126167 audio')[0].currentTime = 0;
        go(event,[{n:1,link:1,id:152390,act:'reverse'},{n:1,link:1,id:152391,act:'reverse'}]);
    };

    const applyItem151516 = (element) => {
        if (element) {
            element.style.setProperty('width', '584px', 'important');
            element.style.setProperty('height', '268px', 'important');
            element.style.setProperty('left', '29px', 'important');
            element.style.setProperty('top', '26px', 'important');
        }
    };

    const applyItem151595 = (element) => {
        if (element) {
            element.style.setProperty('width', '557px', 'important');
            element.style.setProperty('height', '274px', 'important');
            element.style.setProperty('left', '42px', 'important');
            element.style.setProperty('top', '16px', 'important');
        }
    };

    const applyItem152122 = (element) => {
        if (element) {
            element.style.setProperty('width', '476px', 'important');
            element.style.setProperty('height', '269px', 'important');
            element.style.setProperty('left', '83px', 'important');
            element.style.setProperty('top', '22px', 'important');
        }
    };

    const applyItem152373 = (element) => {
        if (element) {
            element.style.setProperty('width', '574px', 'important');
            element.style.setProperty('height', '264px', 'important');
            element.style.setProperty('left', '36px', 'important');
            element.style.setProperty('top', '21px', 'important');
        }
    };

    return (
        <div >
            <ul className="pages" id="slider">
                <li className="page" data-name="14">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:68204,act:'play'},{n:1,id:126023,act:'play'},{n:1,link:1,id:6897,act:'play'},{n:1,id:6765,sn:1,act:'play'},{n:1,id:126020,act:'play'},{del:9,n:1,id:124589,act:'play'},{n:1,id:111221,act:'play'},{n:1,id:124494,act:'play'},{n:1,id:124556,act:'play'},{del:4.5,n:1,id:151430,act:'play'}], 'pageload');" style={{width:'1920px',height:'1080px'}}>
                        <div id="item6731" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <img src={blankImage} data-ani="flyinfrombottom-68204 1s cubic-bezier(.2,.6,.35,1) 1" data-id="68204" id="item68204" data-hidestart="1" className="pageItem hidden" alt="Polygon" style={{left:'-316px',top:'252px'}} data-src="assets/images/item_68204.png" />
                        <div data-ani="flyinfromleft-126023 1s cubic-bezier(.2,.6,.35,1) 1" data-id="126023" id="item126023" data-hidestart="1" className="pageItem group hidden" alt="doctor" style={{left:'-14px',top:'489px',width:' 638px',height:'1063px'}}>
                            <div alt="Group" style={{left:'61px',top:'439px'}} id="item68447" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" style={{left:'11px',top:'7px'}} id="item68449" className="pageItem " data-src="assets/images/item_68449.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'12px',top:'100px'}} id="item68451" className="pageItem " data-src="assets/images/item_68451.png" />
                            </div>
                            <div alt="Group" id="item124645" className="pageItem group ">
                                <div alt="Group" style={{left:'444px',top:'329px'}} id="item68453" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{left:'72px'}} id="item68454" className="pageItem " data-src="assets/images/item_68454.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'77px',top:'14px'}} id="item68456" className="pageItem " data-src="assets/images/item_68456.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'107px',top:'20px'}} id="item68457" className="pageItem " data-src="assets/images/item_68457.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'99px',top:'35px'}} id="item68460" className="pageItem " data-src="assets/images/item_68460.png" />
                                    <img src={blankImage} alt="Polygon" style={{top:'36px'}} id="item68461" className="pageItem " data-src="assets/images/item_68461.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'8px',top:'45px'}} id="item68462" className="pageItem " data-src="assets/images/item_68462.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'53px',top:'180px'}} id="item68463" className="pageItem " data-src="assets/images/item_68463.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'55px',top:'193px'}} id="item68464" className="pageItem " data-src="assets/images/item_68464.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'59px',top:'215px'}} id="item68465" className="pageItem " data-src="assets/images/item_68465.png" />
                                </div>
                                <div alt="Group" style={{top:'239px'}} id="item68442" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{left:'62px',top:'19px'}} id="item68444" className="pageItem " data-src="assets/images/item_68444.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'16px',top:'168px'}} id="item68446" className="pageItem " data-src="assets/images/item_68446.png" />
                                </div>
                                <div alt="Group" style={{left:'136px'}} id="item68357" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{left:'224px',top:'174px'}} id="item68358" className="pageItem " data-src="assets/images/item_68358.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'313px',top:'230px'}} id="item68360" className="pageItem " data-src="assets/images/item_68360.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'218px',top:'172px'}} id="item68361" className="pageItem " data-src="assets/images/item_68361.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'113px',top:'512px'}} id="item68362" className="pageItem " data-src="assets/images/item_68362.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'257px',top:'980px'}} id="item68364" className="pageItem " data-src="assets/images/item_68364.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'254px',top:'1016px'}} id="item68365" className="pageItem " data-src="assets/images/item_68365.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'254px',top:'1055px'}} id="item68367" className="pageItem " data-src="assets/images/item_68367.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'136px',top:'959px'}} id="item68369" className="pageItem " data-src="assets/images/item_68369.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'122px',top:'1010px'}} id="item68370" className="pageItem " data-src="assets/images/item_68370.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'90px',top:'440px'}} id="item68371" className="pageItem " data-src="assets/images/item_68371.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'89px',top:'479px'}} id="item68373" className="pageItem " data-src="assets/images/item_68373.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'100px',top:'458px'}} id="item68374" className="pageItem " data-src="assets/images/item_68374.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'176px',top:'516px'}} id="item68375" className="pageItem " data-src="assets/images/item_68375.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'183px',top:'501px'}} id="item68376" className="pageItem " data-src="assets/images/item_68376.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'151px',top:'8px'}} id="item68378" className="pageItem " data-src="assets/images/item_68378.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'158px',top:'66px'}} id="item68381" className="pageItem " data-src="assets/images/item_68381.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'170px',top:'95px'}} id="item68382" className="pageItem " data-src="assets/images/item_68382.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'178px',top:'95px'}} id="item68383" className="pageItem " data-src="assets/images/item_68383.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'145px',top:'154px'}} id="item68385" className="pageItem " data-src="assets/images/item_68385.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'78px',top:'151px'}} id="item68386" className="pageItem " data-src="assets/images/item_68386.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'217px',top:'13px'}} id="item68388" className="pageItem " data-src="assets/images/item_68388.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'170px',top:'21px'}} id="item68389" className="pageItem " data-src="assets/images/item_68389.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'159px',top:'69px'}} id="item68390" className="pageItem " data-src="assets/images/item_68390.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'193px',top:'83px'}} id="item68391" className="pageItem " data-src="assets/images/item_68391.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'229px',top:'88px'}} id="item68392" className="pageItem " data-src="assets/images/item_68392.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'214px',top:'66px'}} id="item68393" className="pageItem " data-src="assets/images/item_68393.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'194px',top:'61px'}} id="item68394" className="pageItem " data-src="assets/images/item_68394.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'159px'}} id="item68395" className="pageItem " data-src="assets/images/item_68395.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'208px',top:'101px'}} id="item68396" className="pageItem " data-src="assets/images/item_68396.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'231px',top:'73px'}} id="item68397" className="pageItem " data-src="assets/images/item_68397.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'199px',top:'70px'}} id="item68398" className="pageItem " data-src="assets/images/item_68398.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'417px',top:'169px'}} id="item68399" className="pageItem " data-src="assets/images/item_68399.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'65px',top:'154px'}} id="item68400" className="pageItem " data-src="assets/images/item_68400.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'3px',top:'175px'}} id="item68401" className="pageItem " data-src="assets/images/item_68401.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'3px',top:'336px'}} id="item68402" className="pageItem " data-src="assets/images/item_68402.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'85px',top:'500px'}} id="item68403" className="pageItem " data-src="assets/images/item_68403.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'233px',top:'164px'}} id="item68405" className="pageItem " data-src="assets/images/item_68405.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'303px',top:'229px'}} id="item68407" className="pageItem " data-src="assets/images/item_68407.png" />
                                    <img src={blankImage} alt="Polygon" style={{top:'169px'}} id="item68408" className="pageItem " data-src="assets/images/item_68408.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'76px',top:'522px'}} id="item68410" className="pageItem " data-src="assets/images/item_68410.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'52px',top:'176px'}} id="item68411" className="pageItem " data-src="assets/images/item_68411.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'259px',top:'295px'}} id="item68413" className="pageItem " data-src="assets/images/item_68413.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'239px',top:'296px'}} id="item68414" className="pageItem " data-src="assets/images/item_68414.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'226px',top:'156px'}} id="item68415" className="pageItem " data-src="assets/images/item_68415.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'151px',top:'154px'}} id="item68416" className="pageItem " data-src="assets/images/item_68416.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'163px',top:'231px'}} id="item68417" className="pageItem " data-src="assets/images/item_68417.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'157px',top:'233px'}} id="item68419" className="pageItem " data-src="assets/images/item_68419.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'163px',top:'239px'}} id="item68421" className="pageItem " data-src="assets/images/item_68421.png" />
                                </div>
                            </div>
                        </div>
                        <button data-ani="flyinfromright-126020 1s cubic-bezier(.2,.6,.35,1) 1" data-id="126020" id="item126020" data-hidestart="1" className="pageItem hidden" name="gambar" aria-label="gambar">
                            <div className="pageItem state btn-off">
                                <div id="item6732" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Rectangle" style={{left:'25px',top:'24px'}} id="item6735" className="pageItem " data-src="assets/images/item_6735.png" />
                            </div>
                        </button>
                        <div id="item148442" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <Navigation />
                        <div id="item265072" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item169516" className="pageItem" style={{height:'60px',width:'60px',left:'330px',top:'78px'}} alt="Sound">
                            <audio data-id="169516" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 13 new.mp3" />
                            </audio>
                        </div>
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item6930" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item6950" className="pageItem " data-src="assets/images/item_6950.png" />
                            <div alt="Group" style={{top:'132px'}} id="item6953" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item6954" className="pageItem " data-src="assets/images/item_6954.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item6955" className="pageItem " data-src="assets/images/item_6955.png" />
                            </div>
                        </div>
                        <button data-ani="fadein-111221 0.5s linear 1" data-id="111221" id="item111221" data-hidestart="1" className="pageItem has-down has-on hidden" name="button 2" onClick={handleOnClickButton2} aria-label="button 2">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item19058" className="pageItem ">
                                    <svg version="1.1" width="78" height="78" >
                                        <ellipse cx="38.88" cy="38.88" rx="38.88" ry="38.88" fill="#5c98ff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{left:'21px',top:'5px'}} id="item19060" className="pageItem " data-src="assets/images/item_19060.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item124530" className="pageItem ">
                                    <svg version="1.1" width="78" height="78" >
                                        <ellipse cx="38.88" cy="38.88" rx="38.88" ry="38.88" fill="#fa635f" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{left:'21px',top:'5px'}} id="item124531" className="pageItem " data-src="assets/images/item_124531.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item151626" className="pageItem ">
                                    <svg version="1.1" width="78" height="78" >
                                        <ellipse cx="38.88" cy="38.88" rx="38.88" ry="38.88" fill="#5c98ff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="2" style={{left:'21px',top:'5px'}} id="item151627" className="pageItem " data-src="assets/images/item_151627.png" />
                            </div>
                        </button>
                        <button data-ani="fadein-124556 0.5s linear 1" data-id="124556" id="item124556" data-hidestart="1" className="pageItem has-down has-on hidden" name="button 4" onClick={handleOnClickButton4} aria-label="button 4">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item19084" className="pageItem ">
                                    <svg version="1.1" width="78" height="78" >
                                        <ellipse cx="38.88" cy="38.88" rx="38.88" ry="38.88" fill="#5c98ff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="4" style={{left:'18px',top:'5px'}} id="item19085" className="pageItem " data-src="assets/images/item_19085.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item124558" className="pageItem ">
                                    <svg version="1.1" width="78" height="78" >
                                        <ellipse cx="38.88" cy="38.88" rx="38.88" ry="38.88" fill="#fa635f" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="4" style={{left:'18px',top:'5px'}} id="item124559" className="pageItem " data-src="assets/images/item_124559.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item152152" className="pageItem ">
                                    <svg version="1.1" width="78" height="78" >
                                        <ellipse cx="38.88" cy="38.88" rx="38.88" ry="38.88" fill="#5c98ff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="4" style={{left:'18px',top:'5px'}} id="item152153" className="pageItem " data-src="assets/images/item_152153.png" />
                            </div>
                        </button>
                        <button data-ani="fadein-124589 0.5s linear 1" data-id="124589" id="item124589" data-hidestart="1" className="pageItem has-down has-on hidden" name="button 1" onClick={handleOnClickButton1} aria-label="button 1">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item124617" className="pageItem ">
                                    <svg version="1.1" width="78" height="78" >
                                        <ellipse cx="38.88" cy="38.88" rx="38.88" ry="38.88" fill="#5c98ff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{left:'20px',top:'6px'}} id="item124618" className="pageItem " data-src="assets/images/item_124618.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item124592" className="pageItem ">
                                    <svg version="1.1" width="78" height="78" >
                                        <ellipse cx="38.88" cy="38.88" rx="38.88" ry="38.88" fill="#fa635f" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{left:'20px',top:'7px'}} id="item124593" className="pageItem " data-src="assets/images/item_124593.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item151550" className="pageItem ">
                                    <svg version="1.1" width="78" height="78" >
                                        <ellipse cx="38.88" cy="38.88" rx="38.88" ry="38.88" fill="#5c98ff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="1" style={{left:'20px',top:'6px'}} id="item151552" className="pageItem " data-src="assets/images/item_151552.png" />
                            </div>
                        </button>
                        <div id="item126124" className="pageItem" style={{height:'60px',width:'60px',left:'87px',top:'52px'}} alt="Sound">
                            <audio data-id="126124" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 13-1.mp3" />
                            </audio>
                        </div>
                        <div id="item126132" className="pageItem" style={{height:'60px',width:'60px',left:'161px',top:'62px'}} alt="Sound">
                            <audio data-id="126132" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 13-2.mp3" />
                            </audio>
                        </div>
                        <div id="item126140" className="pageItem" style={{height:'60px',width:'60px',left:'221px',top:'62px'}} alt="Sound">
                            <audio data-id="126140" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 13-3.mp3" />
                            </audio>
                        </div>
                        <div id="item126146" className="pageItem" style={{height:'60px',width:'60px',left:'277px',top:'68px'}} alt="Sound">
                            <audio data-id="126146" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 13-4.mp3" />
                            </audio>
                        </div>
                        <div id="item126154" className="pageItem" style={{height:'60px',width:'60px',left:'337px',top:'58px'}} alt="Sound">
                            <audio data-id="126154" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 13-5.mp3" />
                            </audio>
                        </div>
                        <div id="item126159" className="pageItem" style={{height:'60px',width:'60px',left:'413px',top:'72px'}} alt="Sound">
                            <audio data-id="126159" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 13-6.mp3" />
                            </audio>
                        </div>
                        <div id="item126167" className="pageItem" style={{height:'60px',width:'60px',left:'475px',top:'72px'}} alt="Sound">
                            <audio data-id="126167" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 13-7.mp3" />
                            </audio>
                        </div>
                        <img src={blankImage} data-ani="fadein-6765 1s linear 1" data-id="6765" id="item6765" data-hidestart="1" className="pageItem hidden" alt="Patofisiologi IBD13" style={{left:'100px',top:'178px'}} data-src="assets/images/item_6765.png" />
                        <div data-ani="fadein-151430 1s linear 1" data-id="151430" id="item151430" data-hidestart="1" className="pageItem group hidden" alt="Klik angka untuk informasi lebih lanju" style={{left:'100px',top:'367px',width:' 479px',height:'47px'}}>
                            <div id="item151431" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Klik angka untuk informasi lebih lanjut" style={{left:'19px',top:'9px'}} id="item151433" className="pageItem " data-src="assets/images/item_151433.png" />
                        </div>
                        <div data-ani="appear-151547 0.6s linear 1" data-id="151547" id="item151547" data-hidestart="1" className="pageItem group hidden" alt="1" style={{left:'1122px',top:'161px',width:' 642px',height:'417px'}}>
                            <img src={blankImage} alt="Polygon" id="item151474" className="pageItem " data-src="assets/images/item_151474.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'15px',top:'14px'}} id="item151535" className="pageItem " data-src="assets/images/item_151535.png" />
                            <img src={blankImage} alt="Polygon" ref={applyItem151516} id="item151516" className="pageItem " data-src="assets/images/1.gif" />
                            <div alt="Group" style={{top:'288px'}} id="item151475" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item151477" className="pageItem " data-src="assets/images/item_151477.png" />
                                <img src={blankImage} alt="EPSText" style={{left:'143px',top:'26px'}} id="item151478" className="pageItem " data-src="assets/images/item_151478.png" />
                                <img src={blankImage} alt="EPSText" style={{left:'334px',top:'26px'}} id="item151479" className="pageItem " data-src="assets/images/item_151479.png" />
                                <img src={blankImage} alt="EPSText" style={{left:'89px',top:'56px'}} id="item151480" className="pageItem " data-src="assets/images/item_151480.png" />
                                <img src={blankImage} alt="EPSText" style={{left:'103px',top:'87px'}} id="item151481" className="pageItem " data-src="assets/images/item_151481.png" />
                                <img src={blankImage} alt="EPSText" style={{left:'270px',top:'87px'}} id="item151482" className="pageItem " data-src="assets/images/item_151482.png" />
                                <div alt="masuknya mikrobiota ke dalam usus" style={{left:'95px',top:'80px'}} id="item169969" className="pageItem group ">
                                    <div id="item169970" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                    <img src={blankImage} alt="masuknya mikrobiota ke dalam usus." style={{left:'5px'}} id="item169971" className="pageItem " data-src="assets/images/item_169971.png" />
                                </div>
                            </div>
                        </div>
                        <button data-ani="appear-151536 0.6s linear 1" data-id="151536" id="item151536" data-hidestart="1" className="pageItem has-down has-on hidden" name="x 1" onClick={handleOnClickButton1X} aria-label="x 1">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item151485" className="pageItem " data-src="assets/images/item_151485.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'12px',top:'12px'}} id="item151486" className="pageItem " data-src="assets/images/item_151486.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'12px',top:'12px'}} id="item151488" className="pageItem " data-src="assets/images/item_151488.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <img src={blankImage} alt="Polygon" id="item151539" className="pageItem " data-src="assets/images/item_151539.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'12px',top:'12px'}} id="item151540" className="pageItem " data-src="assets/images/item_151540.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'12px',top:'12px'}} id="item151541" className="pageItem " data-src="assets/images/item_151541.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <img src={blankImage} alt="Polygon" id="item151543" className="pageItem " data-src="assets/images/item_151543.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'12px',top:'12px'}} id="item151544" className="pageItem " data-src="assets/images/item_151544.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'12px',top:'12px'}} id="item151545" className="pageItem " data-src="assets/images/item_151545.png" />
                            </div>
                        </button>
                        <div data-ani="appear-152130 0.6s linear 1" data-id="152130" id="item152130" data-hidestart="1" className="pageItem group hidden" alt="3" style={{left:'1049px',top:'351px',width:' 642px',height:'417px'}}>
                            <img src={blankImage} alt="Polygon" id="item151683" className="pageItem " data-src="assets/images/item_151683.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'15px',top:'14px'}} id="item152121" className="pageItem " data-src="assets/images/item_152121.png" />
                            <img src={blankImage} alt="Polygon" ref={applyItem152122} id="item152122" className="pageItem " data-src="assets/images/3.gif" />
                            <div alt="Group" style={{top:'288px'}} id="item151926" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item151927" className="pageItem " data-src="assets/images/item_151927.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'129px',top:'18px'}} id="item151928" className="pageItem " data-src="assets/images/item_151928.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'144px',top:'18px'}} id="item151929" className="pageItem " data-src="assets/images/item_151929.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'156px',top:'18px'}} id="item151930" className="pageItem " data-src="assets/images/item_151930.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'169px',top:'22px'}} id="item151931" className="pageItem " data-src="assets/images/item_151931.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'184px',top:'22px'}} id="item151932" className="pageItem " data-src="assets/images/item_151932.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'195px',top:'22px'}} id="item151933" className="pageItem " data-src="assets/images/item_151933.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'207px',top:'22px'}} id="item151934" className="pageItem " data-src="assets/images/item_151934.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'219px',top:'22px'}} id="item151935" className="pageItem " data-src="assets/images/item_151935.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'236px',top:'19px'}} id="item151936" className="pageItem " data-src="assets/images/item_151936.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'244px',top:'22px'}} id="item151937" className="pageItem " data-src="assets/images/item_151937.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'257px',top:'22px'}} id="item151938" className="pageItem " data-src="assets/images/item_151938.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'264px',top:'22px'}} id="item151939" className="pageItem " data-src="assets/images/item_151939.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'276px',top:'17px'}} id="item151940" className="pageItem " data-src="assets/images/item_151940.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'285px',top:'19px'}} id="item151941" className="pageItem " data-src="assets/images/item_151941.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'294px',top:'18px'}} id="item151942" className="pageItem " data-src="assets/images/item_151942.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'297px',top:'22px'}} id="item151943" className="pageItem " data-src="assets/images/item_151943.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'308px',top:'22px'}} id="item151945" className="pageItem " data-src="assets/images/item_151945.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'319px',top:'22px'}} id="item151946" className="pageItem " data-src="assets/images/item_151946.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'330px',top:'18px'}} id="item151947" className="pageItem " data-src="assets/images/item_151947.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'340px',top:'22px'}} id="item151948" className="pageItem " data-src="assets/images/item_151948.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'352px',top:'17px'}} id="item151949" className="pageItem " data-src="assets/images/item_151949.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'362px',top:'22px'}} id="item151951" className="pageItem " data-src="assets/images/item_151951.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'374px',top:'22px'}} id="item151952" className="pageItem " data-src="assets/images/item_151952.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'392px',top:'22px'}} id="item151953" className="pageItem " data-src="assets/images/item_151953.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'410px',top:'22px'}} id="item151954" className="pageItem " data-src="assets/images/item_151954.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'423px',top:'22px'}} id="item151955" className="pageItem " data-src="assets/images/item_151955.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'430px',top:'22px'}} id="item151956" className="pageItem " data-src="assets/images/item_151956.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'442px',top:'22px'}} id="item151957" className="pageItem " data-src="assets/images/item_151957.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'454px',top:'22px'}} id="item151958" className="pageItem " data-src="assets/images/item_151958.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'467px',top:'22px'}} id="item151959" className="pageItem " data-src="assets/images/item_151959.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'477px',top:'22px'}} id="item151960" className="pageItem " data-src="assets/images/item_151960.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'489px',top:'22px'}} id="item151961" className="pageItem " data-src="assets/images/item_151961.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'501px',top:'22px'}} id="item151962" className="pageItem " data-src="assets/images/item_151962.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'54px',top:'42px'}} id="item151963" className="pageItem " data-src="assets/images/item_151963.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'67px',top:'43px'}} id="item151964" className="pageItem " data-src="assets/images/item_151964.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'71px',top:'42px'}} id="item151965" className="pageItem " data-src="assets/images/item_151965.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'78px',top:'47px'}} id="item151966" className="pageItem " data-src="assets/images/item_151966.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'91px',top:'47px'}} id="item151967" className="pageItem " data-src="assets/images/item_151967.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'98px',top:'47px'}} id="item151968" className="pageItem " data-src="assets/images/item_151968.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'110px',top:'47px'}} id="item151969" className="pageItem " data-src="assets/images/item_151969.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'122px',top:'47px'}} id="item151970" className="pageItem " data-src="assets/images/item_151970.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'133px',top:'43px'}} id="item151971" className="pageItem " data-src="assets/images/item_151971.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'137px',top:'47px'}} id="item151972" className="pageItem " data-src="assets/images/item_151972.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'148px',top:'47px'}} id="item151974" className="pageItem " data-src="assets/images/item_151974.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'159px',top:'43px'}} id="item151975" className="pageItem " data-src="assets/images/item_151975.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'169px',top:'47px'}} id="item151976" className="pageItem " data-src="assets/images/item_151976.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'179px',top:'47px'}} id="item151977" className="pageItem " data-src="assets/images/item_151977.png" />
                                <div id="item151978" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Polygon" style={{left:'200px',top:'43px'}} id="item151979" className="pageItem " data-src="assets/images/item_151979.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'218px',top:'43px'}} id="item151980" className="pageItem " data-src="assets/images/item_151980.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'232px',top:'43px'}} id="item151981" className="pageItem " data-src="assets/images/item_151981.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'246px',top:'43px'}} id="item151982" className="pageItem " data-src="assets/images/item_151982.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'258px',top:'46px'}} id="item151983" className="pageItem " data-src="assets/images/item_151983.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'277px',top:'47px'}} id="item151984" className="pageItem " data-src="assets/images/item_151984.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'295px',top:'47px'}} id="item151986" className="pageItem " data-src="assets/images/item_151986.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'307px',top:'47px'}} id="item151987" className="pageItem " data-src="assets/images/item_151987.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'317px',top:'43px'}} id="item151988" className="pageItem " data-src="assets/images/item_151988.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'324px',top:'47px'}} id="item151989" className="pageItem " data-src="assets/images/item_151989.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'336px',top:'42px'}} id="item151990" className="pageItem " data-src="assets/images/item_151990.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'349px',top:'43px'}} id="item151991" className="pageItem " data-src="assets/images/item_151991.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'358px',top:'43px'}} id="item151992" className="pageItem " data-src="assets/images/item_151992.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'371px',top:'42px'}} id="item151993" className="pageItem " data-src="assets/images/item_151993.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'384px',top:'43px'}} id="item151994" className="pageItem " data-src="assets/images/item_151994.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'401px',top:'42px'}} id="item151995" className="pageItem " data-src="assets/images/item_151995.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'413px',top:'47px'}} id="item151996" className="pageItem " data-src="assets/images/item_151996.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'425px',top:'47px'}} id="item151997" className="pageItem " data-src="assets/images/item_151997.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'442px',top:'43px'}} id="item151998" className="pageItem " data-src="assets/images/item_151998.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'455px',top:'42px'}} id="item151999" className="pageItem " data-src="assets/images/item_151999.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'468px',top:'43px'}} id="item152000" className="pageItem " data-src="assets/images/item_152000.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'479px',top:'43px'}} id="item152001" className="pageItem " data-src="assets/images/item_152001.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'491px',top:'56px'}} id="item152002" className="pageItem " data-src="assets/images/item_152002.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'501px',top:'47px'}} id="item152003" className="pageItem " data-src="assets/images/item_152003.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'512px',top:'47px'}} id="item152004" className="pageItem " data-src="assets/images/item_152004.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'524px',top:'42px'}} id="item152005" className="pageItem " data-src="assets/images/item_152005.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'536px',top:'43px'}} id="item152006" className="pageItem " data-src="assets/images/item_152006.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'542px',top:'47px'}} id="item152007" className="pageItem " data-src="assets/images/item_152007.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'554px',top:'47px'}} id="item152008" className="pageItem " data-src="assets/images/item_152008.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'566px',top:'47px'}} id="item152009" className="pageItem " data-src="assets/images/item_152009.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'579px',top:'47px'}} id="item152010" className="pageItem " data-src="assets/images/item_152010.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'66px',top:'73px'}} id="item152011" className="pageItem " data-src="assets/images/item_152011.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'84px',top:'73px'}} id="item152012" className="pageItem " data-src="assets/images/item_152012.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'96px',top:'73px'}} id="item152013" className="pageItem " data-src="assets/images/item_152013.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'108px',top:'73px'}} id="item152014" className="pageItem " data-src="assets/images/item_152014.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'122px',top:'68px'}} id="item152015" className="pageItem " data-src="assets/images/item_152015.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'134px',top:'73px'}} id="item152016" className="pageItem " data-src="assets/images/item_152016.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'145px',top:'73px'}} id="item152017" className="pageItem " data-src="assets/images/item_152017.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'156px',top:'69px'}} id="item152018" className="pageItem " data-src="assets/images/item_152018.png" />
                                <div id="item152019" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Polygon" style={{left:'166px',top:'68px'}} id="item152021" className="pageItem " data-src="assets/images/item_152021.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'175px',top:'73px'}} id="item152022" className="pageItem " data-src="assets/images/item_152022.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'188px',top:'73px'}} id="item152023" className="pageItem " data-src="assets/images/item_152023.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'205px',top:'73px'}} id="item152024" className="pageItem " data-src="assets/images/item_152024.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'216px',top:'69px'}} id="item152025" className="pageItem " data-src="assets/images/item_152025.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'219px',top:'70px'}} id="item152026" className="pageItem " data-src="assets/images/item_152026.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'227px',top:'73px'}} id="item152027" className="pageItem " data-src="assets/images/item_152027.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'240px',top:'68px'}} id="item152028" className="pageItem " data-src="assets/images/item_152028.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'251px',top:'69px'}} id="item152029" className="pageItem " data-src="assets/images/item_152029.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'256px',top:'73px'}} id="item152030" className="pageItem " data-src="assets/images/item_152030.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'274px',top:'73px'}} id="item152031" className="pageItem " data-src="assets/images/item_152031.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'287px',top:'73px'}} id="item152033" className="pageItem " data-src="assets/images/item_152033.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'294px',top:'73px'}} id="item152034" className="pageItem " data-src="assets/images/item_152034.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'307px',top:'69px'}} id="item152035" className="pageItem " data-src="assets/images/item_152035.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'312px',top:'73px'}} id="item152036" className="pageItem " data-src="assets/images/item_152036.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'323px',top:'68px'}} id="item152037" className="pageItem " data-src="assets/images/item_152037.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'336px',top:'73px'}} id="item152038" className="pageItem " data-src="assets/images/item_152038.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'348px',top:'73px'}} id="item152039" className="pageItem " data-src="assets/images/item_152039.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'366px',top:'73px'}} id="item152040" className="pageItem " data-src="assets/images/item_152040.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'377px',top:'73px'}} id="item152041" className="pageItem " data-src="assets/images/item_152041.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'388px',top:'69px'}} id="item152042" className="pageItem " data-src="assets/images/item_152042.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'398px',top:'73px'}} id="item152043" className="pageItem " data-src="assets/images/item_152043.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'408px',top:'73px'}} id="item152044" className="pageItem " data-src="assets/images/item_152044.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'420px',top:'73px'}} id="item152045" className="pageItem " data-src="assets/images/item_152045.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'432px',top:'73px'}} id="item152046" className="pageItem " data-src="assets/images/item_152046.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'445px',top:'73px'}} id="item152047" className="pageItem " data-src="assets/images/item_152047.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'452px',top:'70px'}} id="item152048" className="pageItem " data-src="assets/images/item_152048.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'460px',top:'69px'}} id="item152049" className="pageItem " data-src="assets/images/item_152049.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'469px',top:'69px'}} id="item152050" className="pageItem " data-src="assets/images/item_152050.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'482px',top:'69px'}} id="item152052" className="pageItem " data-src="assets/images/item_152052.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'498px',top:'69px'}} id="item152053" className="pageItem " data-src="assets/images/item_152053.png" />
                                <div id="item152054" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Polygon" style={{left:'515px',top:'73px'}} id="item152055" className="pageItem " data-src="assets/images/item_152055.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'527px',top:'82px'}} id="item152056" className="pageItem " data-src="assets/images/item_152056.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'538px',top:'69px'}} id="item152058" className="pageItem " data-src="assets/images/item_152058.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'545px',top:'69px'}} id="item152059" className="pageItem " data-src="assets/images/item_152059.png" />
                                <div id="item152060" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Polygon" style={{left:'562px',top:'69px'}} id="item152061" className="pageItem " data-src="assets/images/item_152061.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'574px',top:'82px'}} id="item152062" className="pageItem " data-src="assets/images/item_152062.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'57px',top:'94px'}} id="item152063" className="pageItem " data-src="assets/images/item_152063.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'65px',top:'94px'}} id="item152064" className="pageItem " data-src="assets/images/item_152064.png" />
                                <div id="item152065" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Polygon" style={{left:'83px',top:'94px'}} id="item152066" className="pageItem " data-src="assets/images/item_152066.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'94px',top:'94px'}} id="item152067" className="pageItem " data-src="assets/images/item_152067.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'112px',top:'93px'}} id="item152068" className="pageItem " data-src="assets/images/item_152068.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'124px',top:'98px'}} id="item152069" className="pageItem " data-src="assets/images/item_152069.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'137px',top:'98px'}} id="item152070" className="pageItem " data-src="assets/images/item_152070.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'154px',top:'94px'}} id="item152071" className="pageItem " data-src="assets/images/item_152071.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'162px',top:'94px'}} id="item152072" className="pageItem " data-src="assets/images/item_152072.png" />
                                <div id="item152073" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Polygon" style={{left:'178px',top:'94px'}} id="item152074" className="pageItem " data-src="assets/images/item_152074.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'190px',top:'94px'}} id="item152075" className="pageItem " data-src="assets/images/item_152075.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'202px',top:'107px'}} id="item152076" className="pageItem " data-src="assets/images/item_152076.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'212px',top:'98px'}} id="item152077" className="pageItem " data-src="assets/images/item_152077.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'223px',top:'98px'}} id="item152078" className="pageItem " data-src="assets/images/item_152078.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'235px',top:'98px'}} id="item152079" className="pageItem " data-src="assets/images/item_152079.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'247px',top:'98px'}} id="item152081" className="pageItem " data-src="assets/images/item_152081.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'266px',top:'93px'}} id="item152082" className="pageItem " data-src="assets/images/item_152082.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'278px',top:'98px'}} id="item152083" className="pageItem " data-src="assets/images/item_152083.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'291px',top:'98px'}} id="item152084" className="pageItem " data-src="assets/images/item_152084.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'299px',top:'98px'}} id="item152085" className="pageItem " data-src="assets/images/item_152085.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'311px',top:'98px'}} id="item152086" className="pageItem " data-src="assets/images/item_152086.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'323px',top:'98px'}} id="item152087" className="pageItem " data-src="assets/images/item_152087.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'330px',top:'98px'}} id="item152088" className="pageItem " data-src="assets/images/item_152088.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'343px',top:'98px'}} id="item152089" className="pageItem " data-src="assets/images/item_152089.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'360px',top:'93px'}} id="item152090" className="pageItem " data-src="assets/images/item_152090.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'373px',top:'98px'}} id="item152091" className="pageItem " data-src="assets/images/item_152091.png" />
                                <div id="item152093" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Polygon" style={{left:'389px',top:'98px'}} id="item152094" className="pageItem " data-src="assets/images/item_152094.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'401px',top:'98px'}} id="item152095" className="pageItem " data-src="assets/images/item_152095.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'426px',top:'98px'}} id="item152096" className="pageItem " data-src="assets/images/item_152096.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'439px',top:'98px'}} id="item152097" className="pageItem " data-src="assets/images/item_152097.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'446px',top:'98px'}} id="item152098" className="pageItem " data-src="assets/images/item_152098.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'458px',top:'98px'}} id="item152099" className="pageItem " data-src="assets/images/item_152099.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'468px',top:'98px'}} id="item152100" className="pageItem " data-src="assets/images/item_152100.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'480px',top:'98px'}} id="item152101" className="pageItem " data-src="assets/images/item_152101.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'496px',top:'94px'}} id="item152102" className="pageItem " data-src="assets/images/item_152102.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'501px',top:'98px'}} id="item152103" className="pageItem " data-src="assets/images/item_152103.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'512px',top:'93px'}} id="item152104" className="pageItem " data-src="assets/images/item_152104.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'525px',top:'98px'}} id="item152105" className="pageItem " data-src="assets/images/item_152105.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'537px',top:'98px'}} id="item152106" className="pageItem " data-src="assets/images/item_152106.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'555px',top:'98px'}} id="item152107" className="pageItem " data-src="assets/images/item_152107.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'566px',top:'98px'}} id="item152108" className="pageItem " data-src="assets/images/item_152108.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'577px',top:'94px'}} id="item152109" className="pageItem " data-src="assets/images/item_152109.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'582px',top:'108px'}} id="item152110" className="pageItem " data-src="assets/images/item_152110.png" />
                            </div>
                        </div>
                        <div data-ani="appear-151620 0.6s linear 1" data-id="151620" id="item151620" data-hidestart="1" className="pageItem group hidden" alt="2" style={{left:'759px',top:'390px',width:' 642px',height:'417px'}}>
                            <img src={blankImage} alt="Polygon" id="item151581" className="pageItem " data-src="assets/images/item_151581.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'15px',top:'15px'}} id="item151593" className="pageItem " data-src="assets/images/item_151593.png" />
                            <img src={blankImage} alt="Polygon" ref={applyItem151595} id="item151595" className="pageItem " data-src="assets/images/2.gif" />
                            <div alt="Group" style={{top:'288px'}} id="item151582" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item151583" className="pageItem " data-src="assets/images/item_151583.png" />
                                <img src={blankImage} alt="EPSText" style={{left:'127px',top:'23px'}} id="item151584" className="pageItem " data-src="assets/images/item_151584.png" />
                                <img src={blankImage} alt="EPSText" style={{left:'176px',top:'23px'}} id="item151586" className="pageItem " data-src="assets/images/item_151586.png" />
                                <img src={blankImage} alt="EPSText" style={{left:'513px',top:'39px'}} id="item151587" className="pageItem " data-src="assets/images/item_151587.png" />
                                <img src={blankImage} alt="EPSText" style={{left:'166px',top:'53px'}} id="item151588" className="pageItem " data-src="assets/images/item_151588.png" />
                                <img src={blankImage} alt="EPSText" style={{left:'311px',top:'53px'}} id="item151589" className="pageItem " data-src="assets/images/item_151589.png" />
                                <img src={blankImage} alt="EPSText" style={{left:'467px',top:'59px'}} id="item151590" className="pageItem " data-src="assets/images/item_151590.png" />
                                <img src={blankImage} alt="EPSText" style={{left:'179px',top:'85px'}} id="item151591" className="pageItem " data-src="assets/images/item_151591.png" />
                                <img src={blankImage} alt="EPSText" style={{left:'301px',top:'84px'}} id="item151592" className="pageItem " data-src="assets/images/item_151592.png" />
                            </div>
                        </div>
                        <button data-ani="appear-151604 0.6s linear 1" data-id="151604" id="item151604" data-hidestart="1" className="pageItem has-down has-on hidden" name="x 2" onClick={handleOnClickButton2X} aria-label="x 2">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item151611" className="pageItem " data-src="assets/images/item_151611.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'12px',top:'12px'}} id="item151613" className="pageItem " data-src="assets/images/item_151613.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'12px',top:'12px'}} id="item151614" className="pageItem " data-src="assets/images/item_151614.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <img src={blankImage} alt="Polygon" id="item151616" className="pageItem " data-src="assets/images/item_151616.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'12px',top:'12px'}} id="item151618" className="pageItem " data-src="assets/images/item_151618.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'12px',top:'12px'}} id="item151619" className="pageItem " data-src="assets/images/item_151619.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <img src={blankImage} alt="Polygon" id="item151606" className="pageItem " data-src="assets/images/item_151606.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'12px',top:'12px'}} id="item151608" className="pageItem " data-src="assets/images/item_151608.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'12px',top:'12px'}} id="item151609" className="pageItem " data-src="assets/images/item_151609.png" />
                            </div>
                        </button>
                        <button data-ani="appear-152131 0.6s linear 1" data-id="152131" id="item152131" data-hidestart="1" className="pageItem has-down has-on hidden" name="x 3" onClick={handleOnClickButton3X} aria-label="x 3">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item152138" className="pageItem " data-src="assets/images/item_152138.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'12px',top:'12px'}} id="item152139" className="pageItem " data-src="assets/images/item_152139.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'12px',top:'12px'}} id="item152140" className="pageItem " data-src="assets/images/item_152140.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <img src={blankImage} alt="Polygon" id="item152142" className="pageItem " data-src="assets/images/item_152142.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'12px',top:'12px'}} id="item152144" className="pageItem " data-src="assets/images/item_152144.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'12px',top:'12px'}} id="item152145" className="pageItem " data-src="assets/images/item_152145.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <img src={blankImage} alt="Polygon" id="item152133" className="pageItem " data-src="assets/images/item_152133.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'12px',top:'12px'}} id="item152135" className="pageItem " data-src="assets/images/item_152135.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'12px',top:'12px'}} id="item152136" className="pageItem " data-src="assets/images/item_152136.png" />
                            </div>
                        </button>
                        <div data-ani="appear-152390 0.6s linear 1" data-id="152390" id="item152390" data-hidestart="1" className="pageItem group hidden" alt="4 " style={{left:'902px',top:'523px',width:' 642px',height:'417px'}}>
                            <img src={blankImage} alt="Polygon" id="item152178" className="pageItem " data-src="assets/images/item_152178.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'15px',top:'14px'}} id="item152372" className="pageItem " data-src="assets/images/item_152372.png" />
                            <img src={blankImage} alt="Polygon" ref={applyItem152373} id="item152373" className="pageItem " data-src="assets/images/4.gif" />
                            <div alt="Group" style={{top:'288px'}} id="item152179" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item152180" className="pageItem " data-src="assets/images/item_152180.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'62px',top:'18px'}} id="item152181" className="pageItem " data-src="assets/images/item_152181.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'69px',top:'17px'}} id="item152183" className="pageItem " data-src="assets/images/item_152183.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'78px',top:'21px'}} id="item152184" className="pageItem " data-src="assets/images/item_152184.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'88px',top:'19px'}} id="item152185" className="pageItem " data-src="assets/images/item_152185.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'95px',top:'21px'}} id="item152186" className="pageItem " data-src="assets/images/item_152186.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'106px',top:'21px'}} id="item152187" className="pageItem " data-src="assets/images/item_152187.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'123px',top:'21px'}} id="item152188" className="pageItem " data-src="assets/images/item_152188.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'134px',top:'21px'}} id="item152189" className="pageItem " data-src="assets/images/item_152189.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'144px',top:'19px'}} id="item152190" className="pageItem " data-src="assets/images/item_152190.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'152px',top:'21px'}} id="item152191" className="pageItem " data-src="assets/images/item_152191.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'163px',top:'21px'}} id="item152192" className="pageItem " data-src="assets/images/item_152192.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'170px',top:'21px'}} id="item152193" className="pageItem " data-src="assets/images/item_152193.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'186px',top:'21px'}} id="item152194" className="pageItem " data-src="assets/images/item_152194.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'194px',top:'21px'}} id="item152195" className="pageItem " data-src="assets/images/item_152195.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'206px',top:'21px'}} id="item152196" className="pageItem " data-src="assets/images/item_152196.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'216px',top:'21px'}} id="item152197" className="pageItem " data-src="assets/images/item_152197.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'229px',top:'21px'}} id="item152198" className="pageItem " data-src="assets/images/item_152198.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'241px',top:'19px'}} id="item152199" className="pageItem " data-src="assets/images/item_152199.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'250px',top:'21px'}} id="item152200" className="pageItem " data-src="assets/images/item_152200.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'263px',top:'21px'}} id="item152201" className="pageItem " data-src="assets/images/item_152201.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'277px',top:'17px'}} id="item152202" className="pageItem " data-src="assets/images/item_152202.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'283px',top:'21px'}} id="item152203" className="pageItem " data-src="assets/images/item_152203.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'296px',top:'19px'}} id="item152204" className="pageItem " data-src="assets/images/item_152204.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'305px',top:'21px'}} id="item152205" className="pageItem " data-src="assets/images/item_152205.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'317px',top:'21px'}} id="item152207" className="pageItem " data-src="assets/images/item_152207.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'330px',top:'21px'}} id="item152208" className="pageItem " data-src="assets/images/item_152208.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'339px',top:'17px'}} id="item152209" className="pageItem " data-src="assets/images/item_152209.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'345px',top:'21px'}} id="item152210" className="pageItem " data-src="assets/images/item_152210.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'363px',top:'21px'}} id="item152211" className="pageItem " data-src="assets/images/item_152211.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'376px',top:'18px'}} id="item152212" className="pageItem " data-src="assets/images/item_152212.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'388px',top:'17px'}} id="item152213" className="pageItem " data-src="assets/images/item_152213.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'400px',top:'18px'}} id="item152214" className="pageItem " data-src="assets/images/item_152214.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'418px',top:'21px'}} id="item152215" className="pageItem " data-src="assets/images/item_152215.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'429px',top:'21px'}} id="item152216" className="pageItem " data-src="assets/images/item_152216.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'440px',top:'17px'}} id="item152217" className="pageItem " data-src="assets/images/item_152217.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'452px',top:'21px'}} id="item152219" className="pageItem " data-src="assets/images/item_152219.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'467px',top:'21px'}} id="item152220" className="pageItem " data-src="assets/images/item_152220.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'477px',top:'21px'}} id="item152221" className="pageItem " data-src="assets/images/item_152221.png" />
                                <div id="item152222" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Polygon" style={{left:'497px',top:'18px'}} id="item152223" className="pageItem " data-src="assets/images/item_152223.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'513px',top:'17px'}} id="item152224" className="pageItem " data-src="assets/images/item_152224.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'525px',top:'21px'}} id="item152225" className="pageItem " data-src="assets/images/item_152225.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'537px',top:'21px'}} id="item152226" className="pageItem " data-src="assets/images/item_152226.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'548px',top:'21px'}} id="item152227" className="pageItem " data-src="assets/images/item_152227.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'560px',top:'21px'}} id="item152228" className="pageItem " data-src="assets/images/item_152228.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'571px',top:'21px'}} id="item152229" className="pageItem " data-src="assets/images/item_152229.png" />
                                <div id="item152230" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Polygon" style={{left:'102px',top:'41px'}} id="item152231" className="pageItem " data-src="assets/images/item_152231.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'107px',top:'45px'}} id="item152232" className="pageItem " data-src="assets/images/item_152232.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'118px',top:'45px'}} id="item152233" className="pageItem " data-src="assets/images/item_152233.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'130px',top:'45px'}} id="item152234" className="pageItem " data-src="assets/images/item_152234.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'147px',top:'41px'}} id="item152236" className="pageItem " data-src="assets/images/item_152236.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'164px',top:'45px'}} id="item152237" className="pageItem " data-src="assets/images/item_152237.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'175px',top:'45px'}} id="item152238" className="pageItem " data-src="assets/images/item_152238.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'185px',top:'45px'}} id="item152239" className="pageItem " data-src="assets/images/item_152239.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'196px',top:'45px'}} id="item152240" className="pageItem " data-src="assets/images/item_152240.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'206px',top:'45px'}} id="item152241" className="pageItem " data-src="assets/images/item_152241.png" />
                                <div id="item152242" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Polygon" style={{left:'225px',top:'41px'}} id="item152243" className="pageItem " data-src="assets/images/item_152243.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'238px',top:'41px'}} id="item152244" className="pageItem " data-src="assets/images/item_152244.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'250px',top:'41px'}} id="item152245" className="pageItem " data-src="assets/images/item_152245.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'263px',top:'45px'}} id="item152246" className="pageItem " data-src="assets/images/item_152246.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'269px',top:'45px'}} id="item152247" className="pageItem " data-src="assets/images/item_152247.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'280px',top:'45px'}} id="item152248" className="pageItem " data-src="assets/images/item_152248.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'289px',top:'45px'}} id="item152249" className="pageItem " data-src="assets/images/item_152249.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'299px',top:'41px'}} id="item152250" className="pageItem " data-src="assets/images/item_152250.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'304px',top:'45px'}} id="item152252" className="pageItem " data-src="assets/images/item_152252.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'321px',top:'41px'}} id="item152253" className="pageItem " data-src="assets/images/item_152253.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'333px',top:'45px'}} id="item152255" className="pageItem " data-src="assets/images/item_152255.png" />
                                <div id="item152256" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <div id="item152257" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Polygon" style={{left:'357px',top:'41px'}} id="item152258" className="pageItem " data-src="assets/images/item_152258.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'370px',top:'41px'}} id="item152259" className="pageItem " data-src="assets/images/item_152259.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'383px',top:'41px'}} id="item152260" className="pageItem " data-src="assets/images/item_152260.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'394px',top:'45px'}} id="item152261" className="pageItem " data-src="assets/images/item_152261.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'405px',top:'45px'}} id="item152262" className="pageItem " data-src="assets/images/item_152262.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'415px',top:'41px'}} id="item152263" className="pageItem " data-src="assets/images/item_152263.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'419px',top:'45px'}} id="item152264" className="pageItem " data-src="assets/images/item_152264.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'431px',top:'45px'}} id="item152265" className="pageItem " data-src="assets/images/item_152265.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'448px',top:'41px'}} id="item152266" className="pageItem " data-src="assets/images/item_152266.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'465px',top:'45px'}} id="item152267" className="pageItem " data-src="assets/images/item_152267.png" />
                                <div id="item152268" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Polygon" style={{left:'481px',top:'45px'}} id="item152269" className="pageItem " data-src="assets/images/item_152269.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'492px',top:'45px'}} id="item152270" className="pageItem " data-src="assets/images/item_152270.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'502px',top:'45px'}} id="item152271" className="pageItem " data-src="assets/images/item_152271.png" />
                                <div id="item152272" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Polygon" style={{left:'518px',top:'45px'}} id="item152273" className="pageItem " data-src="assets/images/item_152273.png" />
                                <div id="item152274" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Polygon" style={{left:'536px',top:'41px'}} id="item152275" className="pageItem " data-src="assets/images/item_152275.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'93px',top:'69px'}} id="item152276" className="pageItem " data-src="assets/images/item_152276.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'103px',top:'66px'}} id="item152277" className="pageItem " data-src="assets/images/item_152277.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'110px',top:'69px'}} id="item152278" className="pageItem " data-src="assets/images/item_152278.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'122px',top:'69px'}} id="item152279" className="pageItem " data-src="assets/images/item_152279.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'144px',top:'65px'}} id="item152280" className="pageItem " data-src="assets/images/item_152280.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'161px',top:'65px'}} id="item152281" className="pageItem " data-src="assets/images/item_152281.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'176px',top:'64px'}} id="item152282" className="pageItem " data-src="assets/images/item_152282.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'189px',top:'65px'}} id="item152283" className="pageItem " data-src="assets/images/item_152283.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'201px',top:'65px'}} id="item152284" className="pageItem " data-src="assets/images/item_152284.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'216px',top:'65px'}} id="item152285" className="pageItem " data-src="assets/images/item_152285.png" />
                                <div id="item152286" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Polygon" style={{left:'241px',top:'65px'}} id="item152287" className="pageItem " data-src="assets/images/item_152287.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'252px',top:'77px'}} id="item152288" className="pageItem " data-src="assets/images/item_152288.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'263px',top:'69px'}} id="item152290" className="pageItem " data-src="assets/images/item_152290.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'280px',top:'69px'}} id="item152291" className="pageItem " data-src="assets/images/item_152291.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'292px',top:'69px'}} id="item152292" className="pageItem " data-src="assets/images/item_152292.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'308px',top:'64px'}} id="item152293" className="pageItem " data-src="assets/images/item_152293.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'315px',top:'69px'}} id="item152294" className="pageItem " data-src="assets/images/item_152294.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'325px',top:'69px'}} id="item152295" className="pageItem " data-src="assets/images/item_152295.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'335px',top:'65px'}} id="item152296" className="pageItem " data-src="assets/images/item_152296.png" />
                                <div id="item152297" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Polygon" style={{left:'344px',top:'65px'}} id="item152298" className="pageItem " data-src="assets/images/item_152298.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'348px',top:'66px'}} id="item152299" className="pageItem " data-src="assets/images/item_152299.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'355px',top:'69px'}} id="item152300" className="pageItem " data-src="assets/images/item_152300.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'366px',top:'69px'}} id="item152301" className="pageItem " data-src="assets/images/item_152301.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'376px',top:'65px'}} id="item152302" className="pageItem " data-src="assets/images/item_152302.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'386px',top:'69px'}} id="item152303" className="pageItem " data-src="assets/images/item_152303.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'403px',top:'69px'}} id="item152304" className="pageItem " data-src="assets/images/item_152304.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'413px',top:'69px'}} id="item152305" className="pageItem " data-src="assets/images/item_152305.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'423px',top:'69px'}} id="item152306" className="pageItem " data-src="assets/images/item_152306.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'435px',top:'64px'}} id="item152307" className="pageItem " data-src="assets/images/item_152307.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'445px',top:'69px'}} id="item152308" className="pageItem " data-src="assets/images/item_152308.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'455px',top:'69px'}} id="item152309" className="pageItem " data-src="assets/images/item_152309.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'465px',top:'69px'}} id="item152310" className="pageItem " data-src="assets/images/item_152310.png" />
                                <div id="item152311" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Polygon" style={{left:'486px',top:'69px'}} id="item152312" className="pageItem " data-src="assets/images/item_152312.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'497px',top:'69px'}} id="item152314" className="pageItem " data-src="assets/images/item_152314.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'509px',top:'64px'}} id="item152315" className="pageItem " data-src="assets/images/item_152315.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'518px',top:'69px'}} id="item152316" className="pageItem " data-src="assets/images/item_152316.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'530px',top:'69px'}} id="item152317" className="pageItem " data-src="assets/images/item_152317.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'540px',top:'65px'}} id="item152318" className="pageItem " data-src="assets/images/item_152318.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'543px',top:'66px'}} id="item152319" className="pageItem " data-src="assets/images/item_152319.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'55px',top:'88px'}} id="item152320" className="pageItem " data-src="assets/images/item_152320.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'64px',top:'92px'}} id="item152321" className="pageItem " data-src="assets/images/item_152321.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'81px',top:'88px'}} id="item152322" className="pageItem " data-src="assets/images/item_152322.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'92px',top:'92px'}} id="item152323" className="pageItem " data-src="assets/images/item_152323.png" />
                                <div id="item152324" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Polygon" style={{left:'107px',top:'92px'}} id="item152326" className="pageItem " data-src="assets/images/item_152326.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'119px',top:'92px'}} id="item152327" className="pageItem " data-src="assets/images/item_152327.png" />
                                <div id="item152328" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Polygon" style={{left:'146px',top:'93px'}} id="item152329" className="pageItem " data-src="assets/images/item_152329.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'158px',top:'92px'}} id="item152330" className="pageItem " data-src="assets/images/item_152330.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'175px',top:'92px'}} id="item152331" className="pageItem " data-src="assets/images/item_152331.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'187px',top:'92px'}} id="item152332" className="pageItem " data-src="assets/images/item_152332.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'204px',top:'93px'}} id="item152333" className="pageItem " data-src="assets/images/item_152333.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'215px',top:'92px'}} id="item152334" className="pageItem " data-src="assets/images/item_152334.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'225px',top:'93px'}} id="item152335" className="pageItem " data-src="assets/images/item_152335.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'236px',top:'92px'}} id="item152336" className="pageItem " data-src="assets/images/item_152336.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'245px',top:'101px'}} id="item152337" className="pageItem " data-src="assets/images/item_152337.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'255px',top:'88px'}} id="item152338" className="pageItem " data-src="assets/images/item_152338.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'267px',top:'92px'}} id="item152339" className="pageItem " data-src="assets/images/item_152339.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'278px',top:'92px'}} id="item152340" className="pageItem " data-src="assets/images/item_152340.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'295px',top:'92px'}} id="item152341" className="pageItem " data-src="assets/images/item_152341.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'312px',top:'92px'}} id="item152343" className="pageItem " data-src="assets/images/item_152343.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'324px',top:'92px'}} id="item152344" className="pageItem " data-src="assets/images/item_152344.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'335px',top:'92px'}} id="item152345" className="pageItem " data-src="assets/images/item_152345.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'347px',top:'92px'}} id="item152346" className="pageItem " data-src="assets/images/item_152346.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'358px',top:'88px'}} id="item152347" className="pageItem " data-src="assets/images/item_152347.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'368px',top:'89px'}} id="item152348" className="pageItem " data-src="assets/images/item_152348.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'373px',top:'88px'}} id="item152349" className="pageItem " data-src="assets/images/item_152349.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'384px',top:'92px'}} id="item152350" className="pageItem " data-src="assets/images/item_152350.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'394px',top:'90px'}} id="item152351" className="pageItem " data-src="assets/images/item_152351.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'402px',top:'88px'}} id="item152352" className="pageItem " data-src="assets/images/item_152352.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'411px',top:'92px'}} id="item152353" className="pageItem " data-src="assets/images/item_152353.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'422px',top:'92px'}} id="item152354" className="pageItem " data-src="assets/images/item_152354.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'439px',top:'92px'}} id="item152355" className="pageItem " data-src="assets/images/item_152355.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'451px',top:'92px'}} id="item152356" className="pageItem " data-src="assets/images/item_152356.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'458px',top:'92px'}} id="item152357" className="pageItem " data-src="assets/images/item_152357.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'470px',top:'92px'}} id="item152359" className="pageItem " data-src="assets/images/item_152359.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'479px',top:'92px'}} id="item152360" className="pageItem " data-src="assets/images/item_152360.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'490px',top:'92px'}} id="item152362" className="pageItem " data-src="assets/images/item_152362.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'505px',top:'89px'}} id="item152363" className="pageItem " data-src="assets/images/item_152363.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'510px',top:'92px'}} id="item152364" className="pageItem " data-src="assets/images/item_152364.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'520px',top:'88px'}} id="item152365" className="pageItem " data-src="assets/images/item_152365.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'532px',top:'92px'}} id="item152366" className="pageItem " data-src="assets/images/item_152366.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'543px',top:'92px'}} id="item152367" className="pageItem " data-src="assets/images/item_152367.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'560px',top:'92px'}} id="item152368" className="pageItem " data-src="assets/images/item_152368.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'570px',top:'92px'}} id="item152369" className="pageItem " data-src="assets/images/item_152369.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'580px',top:'89px'}} id="item152370" className="pageItem " data-src="assets/images/item_152370.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'585px',top:'101px'}} id="item152371" className="pageItem " data-src="assets/images/item_152371.png" />
                            </div>
                        </div>
                        <button data-ani="appear-152391 0.6s linear 1" data-id="152391" id="item152391" data-hidestart="1" className="pageItem has-down has-on hidden" name="x 4" onClick={handleOnClickButton4X} aria-label="x 4">
                            <div className="pageItem state btn-off">
                                <img src={blankImage} alt="Polygon" id="item152399" className="pageItem " data-src="assets/images/item_152399.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'12px',top:'12px'}} id="item152400" className="pageItem " data-src="assets/images/item_152400.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'12px',top:'12px'}} id="item152401" className="pageItem " data-src="assets/images/item_152401.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <img src={blankImage} alt="Polygon" id="item152403" className="pageItem " data-src="assets/images/item_152403.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'12px',top:'12px'}} id="item152405" className="pageItem " data-src="assets/images/item_152405.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'12px',top:'12px'}} id="item152406" className="pageItem " data-src="assets/images/item_152406.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <img src={blankImage} alt="Polygon" id="item152394" className="pageItem " data-src="assets/images/item_152394.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'12px',top:'12px'}} id="item152396" className="pageItem " data-src="assets/images/item_152396.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'12px',top:'12px'}} id="item152397" className="pageItem " data-src="assets/images/item_152397.png" />
                            </div>
                        </button>
                        <button data-ani="fadein-124494 0.5s linear 1" data-id="124494" id="item124494" data-hidestart="1" className="pageItem has-down has-on hidden" name="button 3" onClick={handleOnClickButton3} aria-label="button 3">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item19109" className="pageItem ">
                                    <svg version="1.1" width="78" height="78" >
                                        <ellipse cx="38.88" cy="38.88" rx="38.88" ry="38.88" fill="#5c98ff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{left:'21px',top:'5px'}} id="item19110" className="pageItem " data-src="assets/images/item_19110.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item124496" className="pageItem ">
                                    <svg version="1.1" width="78" height="78" >
                                        <ellipse cx="38.88" cy="38.88" rx="38.88" ry="38.88" fill="#fa635f" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{left:'21px',top:'5px'}} id="item124497" className="pageItem " data-src="assets/images/item_124497.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item151656" className="pageItem ">
                                    <svg version="1.1" width="78" height="78" >
                                        <ellipse cx="38.88" cy="38.88" rx="38.88" ry="38.88" fill="#5c98ff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="3" style={{left:'21px',top:'5px'}} id="item151657" className="pageItem " data-src="assets/images/item_151657.png" />
                            </div>
                        </button>
                        <img src={blankImage} data-ani="appear-227172 0.6s linear 1" data-id="227172" id="item227172" data-hidestart="1" className="pageItem hidden" alt="l" style={{left:'1202px',top:'501px'}} data-src="assets/images/item_227172.png" />
                        <div id="item263693" className="pageItem" style={{height:'60px',width:'60px',left:'445px',top:'50px'}} alt="Sound">
                            <audio data-id="263693" className="mejs-no-controls" data-autoplay="1" data-autodelay="0" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 13 FULL.mp3" />
                            </audio>
                        </div>
                        <div id="item126183" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <img src={blankImage} data-ani="fadein-6897 1s linear 1" data-id="6897" id="item6897" data-hidestart="1" className="pageItem hidden" alt="Bab 3" style={{left:'102px',top:'138px'}} data-src="assets/images/item_6897.png" />
                        <button data-id="103881" name="icon back 12" onClick={handleOnClickPreviousPage} aria-label="icon back 12" id="item103881" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item103887" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item103888" className="pageItem " data-src="assets/images/item_103888.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item103890" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item103891" className="pageItem " data-src="assets/images/item_103891.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item103884" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item103885" className="pageItem " data-src="assets/images/item_103885.png" />
                            </div>
                        </button>
                        <button data-id="103893" name="icon next 12" onClick={handleOnClickNextPage} aria-label="icon next 12" id="item103893" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item103899" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item103900" className="pageItem " data-src="assets/images/item_103900.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item103902" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item103904" className="pageItem " data-src="assets/images/item_103904.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item103896" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item103897" className="pageItem " data-src="assets/images/item_103897.png" />
                            </div>
                        </button>
                        <button data-id="126730" name="icon beranda 11" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 11" id="item126730" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item126737" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item126738" className="pageItem " data-src="assets/images/item_126738.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item126739" className="pageItem " data-src="assets/images/item_126739.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item126741" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item126742" className="pageItem " data-src="assets/images/item_126742.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item126743" className="pageItem " data-src="assets/images/item_126743.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item126733" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item126734" className="pageItem " data-src="assets/images/item_126734.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item126735" className="pageItem " data-src="assets/images/item_126735.png" />
                            </div>
                        </button>
                        <button data-id="126744" name="button ulang 12" onClick={handleOnClickUlang} aria-label="button ulang 12" id="item126744" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item126756" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126757" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126758" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126759" className="pageItem " data-src="assets/images/item_126759.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126760" className="pageItem " data-src="assets/images/item_126760.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item126763" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126764" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#3055ad" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126766" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126767" className="pageItem " data-src="assets/images/item_126767.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126769" className="pageItem " data-src="assets/images/item_126769.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item126747" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126748" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126750" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126751" className="pageItem " data-src="assets/images/item_126751.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126754" className="pageItem " data-src="assets/images/item_126754.png" />
                                </div>
                            </div>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Bab3P1;