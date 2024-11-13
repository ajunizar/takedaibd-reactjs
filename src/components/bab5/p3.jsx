import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Bab5P3() {

    const navigate = useNavigate();

    const handleOnClickGoToBab1 = () => {
        window.location.href = '/bab1-start';
    };
    //var referrer = document.referrer;
    //console.log("referrer url",referrer);
    const handleOnClickBack = () => {
        window.location.href = '/Quiz40';
    };
    const handleOnClickPreviousPage = () => {
        window.location.href = '/bab5-p2';
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }

    const handleOnClickUlang = (event) => {
        event.preventDefault();
        jQuery("#item264938 video")[0].currentTime = 0;
        jQuery("#item264938 video")[0].play();
        go(event,[{n:1,id:112206,act:'play'}]);
    }

    const handleOnClickNextPage = (event) => {
        window.location.href = '/bab5-p4';
    }

    return (
        <div >
            <ul className="pages" id="slider">
                <li className="page" data-name="22">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:112206,act:'play'}], 'pageload');" style={{width:'1920px',height:'1080px'}}>
                        <div id="item264938" className="pageItem" alt="Movie" style={{left:'-136px',top:'28px'}}>
                            <video width="2286" height="1280" data-id="264938" data-autoplay="1" data-autodelay="0" data-stoplast="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/page 21 FULL.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div id="item264932" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item264965" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item170291" className="pageItem" style={{height:'60px',width:'60px',left:'382px',top:'35px'}} alt="Sound">
                            <audio data-id="170291" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 21-1.mp3" />
                            </audio>
                        </div>
                        <img src={blankImage} alt="Polygon" style={{left:'-637px',top:'-602px'}} id="item152809" className="pageItem " data-src="assets/images/item_152809.png" />
                        <div alt="Group" style={{left:'-32px',top:'526px'}} id="item152832" className="pageItem group ">
                            <img src={blankImage} alt="Rectangle" style={{left:'411px',top:'250px'}} id="item152833" className="pageItem " data-src="assets/images/item_152833.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'417px',top:'417px'}} id="item152835" className="pageItem " data-src="assets/images/item_152835.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'450px',top:'207px'}} id="item152836" className="pageItem " data-src="assets/images/item_152836.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'469px',top:'207px'}} id="item152837" className="pageItem " data-src="assets/images/item_152837.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'15px',top:'64px'}} id="item152839" className="pageItem " data-src="assets/images/item_152839.png" />
                            <img src={blankImage} alt="Polygon" style={{top:'50px'}} id="item152841" className="pageItem " data-src="assets/images/item_152841.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'28px',top:'52px'}} id="item152842" className="pageItem " data-src="assets/images/item_152842.png" />
                            <img src={blankImage} alt="Rectangle" style={{left:'102px',top:'141px'}} id="item152844" className="pageItem " data-src="assets/images/item_152844.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'237px',top:'159px'}} id="item152845" className="pageItem " data-src="assets/images/item_152845.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'159px',top:'116px'}} id="item152846" className="pageItem " data-src="assets/images/item_152846.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'234px',top:'183px'}} id="item152847" className="pageItem " data-src="assets/images/item_152847.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'269px',top:'234px'}} id="item152848" className="pageItem " data-src="assets/images/item_152848.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'231px',top:'206px'}} id="item152849" className="pageItem " data-src="assets/images/item_152849.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'228px',top:'229px'}} id="item152850" className="pageItem " data-src="assets/images/item_152850.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'316px',top:'193px'}} id="item152851" className="pageItem " data-src="assets/images/item_152851.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'225px',top:'253px'}} id="item152852" className="pageItem " data-src="assets/images/item_152852.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'123px',top:'281px'}} id="item152853" className="pageItem " data-src="assets/images/item_152853.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'120px',top:'305px'}} id="item152854" className="pageItem " data-src="assets/images/item_152854.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'237px',top:'343px'}} id="item152855" className="pageItem " data-src="assets/images/item_152855.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'238px',top:'320px'}} id="item152856" className="pageItem " data-src="assets/images/item_152856.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'111px',top:'375px'}} id="item152857" className="pageItem " data-src="assets/images/item_152857.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'154px',top:'356px'}} id="item152858" className="pageItem " data-src="assets/images/item_152858.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'117px',top:'328px'}} id="item152859" className="pageItem " data-src="assets/images/item_152859.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'228px',top:'413px'}} id="item152860" className="pageItem " data-src="assets/images/item_152860.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'108px',top:'398px'}} id="item152861" className="pageItem " data-src="assets/images/item_152861.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'114px',top:'351px'}} id="item152862" className="pageItem " data-src="assets/images/item_152862.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'190px',top:'385px'}} id="item152863" className="pageItem " data-src="assets/images/item_152863.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'233px',top:'367px'}} id="item152864" className="pageItem " data-src="assets/images/item_152864.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'293px',top:'374px'}} id="item152865" className="pageItem " data-src="assets/images/item_152865.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'178px',top:'478px'}} id="item152866" className="pageItem " data-src="assets/images/item_152866.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'260px',top:'488px'}} id="item152867" className="pageItem " data-src="assets/images/item_152867.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'140px',top:'473px'}} id="item152868" className="pageItem " data-src="assets/images/item_152868.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'99px',top:'468px'}} id="item152869" className="pageItem " data-src="assets/images/item_152869.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'199px',top:'315px'}} id="item152870" className="pageItem " data-src="assets/images/item_152870.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'105px',top:'421px'}} id="item152871" className="pageItem " data-src="assets/images/item_152871.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'243px',top:'439px'}} id="item152872" className="pageItem " data-src="assets/images/item_152872.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'205px',top:'434px'}} id="item152873" className="pageItem " data-src="assets/images/item_152873.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'244px',top:'297px'}} id="item152874" className="pageItem " data-src="assets/images/item_152874.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'302px',top:'304px'}} id="item152875" className="pageItem " data-src="assets/images/item_152875.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'142px',top:'156px'}} id="item152876" className="pageItem " data-src="assets/images/item_152876.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'142px',top:'203px'}} id="item152877" className="pageItem " data-src="assets/images/item_152877.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'156px',top:'204px'}} id="item152879" className="pageItem " data-src="assets/images/item_152879.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'146px',top:'164px'}} id="item152881" className="pageItem " data-src="assets/images/item_152881.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'140px',top:'180px'}} id="item152883" className="pageItem " data-src="assets/images/item_152883.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'179px',top:'185px'}} id="item152884" className="pageItem " data-src="assets/images/item_152884.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'151px',top:'189px'}} id="item152885" className="pageItem " data-src="assets/images/item_152885.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'153px',top:'189px'}} id="item152886" className="pageItem " data-src="assets/images/item_152886.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'154px',top:'190px'}} id="item152887" className="pageItem " data-src="assets/images/item_152887.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'172px',top:'191px'}} id="item152888" className="pageItem " data-src="assets/images/item_152888.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'171px',top:'191px'}} id="item152889" className="pageItem " data-src="assets/images/item_152889.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'169px',top:'191px'}} id="item152890" className="pageItem " data-src="assets/images/item_152890.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'141px',top:'182px'}} id="item152891" className="pageItem " data-src="assets/images/item_152891.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'169px',top:'180px'}} id="item152892" className="pageItem " data-src="assets/images/item_152892.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'152px',top:'178px'}} id="item152893" className="pageItem " data-src="assets/images/item_152893.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'156px',top:'196px'}} id="item152894" className="pageItem " data-src="assets/images/item_152894.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'163px',top:'184px'}} id="item152895" className="pageItem " data-src="assets/images/item_152895.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'117px',top:'239px'}} id="item152896" className="pageItem " data-src="assets/images/item_152896.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'182px',top:'248px'}} id="item152897" className="pageItem " data-src="assets/images/item_152897.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'119px',top:'211px'}} id="item152898" className="pageItem " data-src="assets/images/item_152898.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'160px',top:'201px'}} id="item152899" className="pageItem " data-src="assets/images/item_152899.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'151px',top:'164px'}} id="item152900" className="pageItem " data-src="assets/images/item_152900.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'147px',top:'173px'}} id="item152901" className="pageItem " data-src="assets/images/item_152901.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'155px',top:'181px'}} id="item152902" className="pageItem " data-src="assets/images/item_152902.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'154px',top:'184px'}} id="item152903" className="pageItem " data-src="assets/images/item_152903.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'170px',top:'183px'}} id="item152904" className="pageItem " data-src="assets/images/item_152904.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'171px',top:'187px'}} id="item152905" className="pageItem " data-src="assets/images/item_152905.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'102px',top:'445px'}} id="item152906" className="pageItem " data-src="assets/images/item_152906.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'222px',top:'460px'}} id="item152907" className="pageItem " data-src="assets/images/item_152907.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'271px',top:'466px'}} id="item152908" className="pageItem " data-src="assets/images/item_152908.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'219px',top:'388px'}} id="item152909" className="pageItem " data-src="assets/images/item_152909.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'97px',top:'276px'}} id="item152910" className="pageItem " data-src="assets/images/item_152910.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'88px',top:'346px'}} id="item152911" className="pageItem " data-src="assets/images/item_152911.png" />
                            <img src={blankImage} alt="Rectangle" id="item152912" className="pageItem " data-src="assets/images/item_152912.png" />
                            <img src={blankImage} alt="Rectangle" style={{left:'396px',top:'236px'}} id="item152916" className="pageItem " data-src="assets/images/item_152916.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'402px',top:'404px'}} id="item152917" className="pageItem " data-src="assets/images/item_152917.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'436px',top:'193px'}} id="item152919" className="pageItem " data-src="assets/images/item_152919.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'454px',top:'193px'}} id="item152920" className="pageItem " data-src="assets/images/item_152920.png" />
                        </div>
                        <Navigation />
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item12454" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item12455" className="pageItem " data-src="assets/images/item_12455.png" />
                            <div alt="Group" style={{top:'132px'}} id="item12478" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item12479" className="pageItem " data-src="assets/images/item_12479.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item12480" className="pageItem " data-src="assets/images/item_12480.png" />
                            </div>
                        </div>
                        <img src={blankImage} alt="Diagnosis IBD: " style={{left:'94px',top:'271px'}} id="item112182" className="pageItem " data-src="assets/images/item_112182.png" />
                        <img src={blankImage} data-ani="fadein-112206 1s linear 1" data-id="112206" id="item112206" data-hidestart="1" className="pageItem hidden" alt="Laboratorium" style={{left:'94px',top:'369px'}} data-src="assets/images/item_112206.png" />
                        <img src={blankImage} alt="Bab 5" style={{left:'102px',top:'231px'}} id="item112229" className="pageItem " data-src="assets/images/item_112229.png" />
                        <button data-id="108634" name="icon back 20" onClick={handleOnClickPreviousPage} aria-label="icon back 20" id="item108634" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item108640" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item108641" className="pageItem " data-src="assets/images/item_108641.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item108643" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item108644" className="pageItem " data-src="assets/images/item_108644.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item108637" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item108638" className="pageItem " data-src="assets/images/item_108638.png" />
                            </div>
                        </button>
                        <button data-id="108646" name="icon next 20" onClick={handleOnClickNextPage} aria-label="icon next 20" id="item108646" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item108652" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item108653" className="pageItem " data-src="assets/images/item_108653.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item108655" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item108657" className="pageItem " data-src="assets/images/item_108657.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item108649" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item108650" className="pageItem " data-src="assets/images/item_108650.png" />
                            </div>
                        </button>
                        <button data-id="127679" name="button ulang 20" onClick={handleOnClickUlang} aria-label="button ulang 20" id="item127679" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item127688" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item127689" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item127690" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item127691" className="pageItem " data-src="assets/images/item_127691.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item127692" className="pageItem " data-src="assets/images/item_127692.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item127694" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item127696" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#fa635e" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item127697" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item127698" className="pageItem " data-src="assets/images/item_127698.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item127699" className="pageItem " data-src="assets/images/item_127699.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item127682" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item127683" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item127684" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item127685" className="pageItem " data-src="assets/images/item_127685.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item127686" className="pageItem " data-src="assets/images/item_127686.png" />
                                </div>
                            </div>
                        </button>
                        <button data-id="221388" name="icon beranda 84" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 84" id="item221388" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221395" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221396" className="pageItem " data-src="assets/images/item_221396.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221397" className="pageItem " data-src="assets/images/item_221397.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221399" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221400" className="pageItem " data-src="assets/images/item_221400.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221401" className="pageItem " data-src="assets/images/item_221401.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221391" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221392" className="pageItem " data-src="assets/images/item_221392.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221393" className="pageItem " data-src="assets/images/item_221393.png" />
                            </div>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Bab5P3;