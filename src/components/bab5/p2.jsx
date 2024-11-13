import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Bab5P2() {

    const navigate = useNavigate();

    const handleOnClickGoToBab1 = () => {
        window.location.href = '/bab1-start';
    };

    const handleOnClickPreviousPage = () => {
        window.location.href = '/bab5-p1';
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }

    const handleOnClickUlang = (event) => {
        event.preventDefault();
        jQuery("#item264946 video")[0].currentTime = 0;
        jQuery("#item264946 video")[0].play();
        go(event,[{n:1,id:112134,act:'play'}]);
    }

    const handleOnClickNextPage = (event) => {
        window.location.href = '/bab5-p3';
    }

    return (
        <div >
            <ul className="pages" id="slider">
                <li className="page" data-name="21">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:112134,act:'play'}], 'pageload');" style={{width:'1920px',height:'1080px'}}>
                        <div id="item264946" className="pageItem" alt="Movie" style={{left:'4px',top:'114px'}}>
                            <video width="2491" height="1400" data-id="264946" data-autoplay="1" data-autodelay="0" data-stoplast="1" webkit-playsinline="playsinline" playsInline="playsinline" data-overlap="1" className="mejs-none">
                                <source src="assets/media/page 20 FULL.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div id="item264964" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item264957" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item124029" className="pageItem" style={{height:'60px',width:'60px',left:'767px',top:'1000px'}} alt="Sound">
                            <audio data-id="124029" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 20-1.mp3" />
                            </audio>
                        </div>
                        <div id="item124034" className="pageItem" style={{height:'60px',width:'60px',left:'840px',top:'1000px'}} alt="Sound">
                            <audio data-id="124034" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 20-2.mp3" />
                            </audio>
                        </div>
                        <div id="item124105" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <img src="assets/images/blank.gif" alt="Polygon" style={{left:'-637px',top:'-602px'}} id="item152544" className="pageItem " data-src="assets/images/item_152544.png" />
                        <div alt="Group" style={{left:'-32px',top:'526px'}} id="item152567" className="pageItem group ">
                            <img src="assets/images/blank.gif" alt="Rectangle" style={{left:'411px',top:'250px'}} id="item152568" className="pageItem " data-src="assets/images/item_152568.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'417px',top:'417px'}} id="item152570" className="pageItem " data-src="assets/images/item_152570.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'450px',top:'207px'}} id="item152571" className="pageItem " data-src="assets/images/item_152571.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'469px',top:'207px'}} id="item152572" className="pageItem " data-src="assets/images/item_152572.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'15px',top:'64px'}} id="item152574" className="pageItem " data-src="assets/images/item_152574.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{top:'50px'}} id="item152576" className="pageItem " data-src="assets/images/item_152576.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'28px',top:'52px'}} id="item152577" className="pageItem " data-src="assets/images/item_152577.png" />
                            <img src="assets/images/blank.gif" alt="Rectangle" style={{left:'102px',top:'141px'}} id="item152578" className="pageItem " data-src="assets/images/item_152578.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'237px',top:'159px'}} id="item152579" className="pageItem " data-src="assets/images/item_152579.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'159px',top:'116px'}} id="item152580" className="pageItem " data-src="assets/images/item_152580.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'234px',top:'183px'}} id="item152581" className="pageItem " data-src="assets/images/item_152581.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'269px',top:'234px'}} id="item152582" className="pageItem " data-src="assets/images/item_152582.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'231px',top:'206px'}} id="item152583" className="pageItem " data-src="assets/images/item_152583.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'228px',top:'229px'}} id="item152584" className="pageItem " data-src="assets/images/item_152584.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'316px',top:'193px'}} id="item152585" className="pageItem " data-src="assets/images/item_152585.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'225px',top:'253px'}} id="item152586" className="pageItem " data-src="assets/images/item_152586.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'123px',top:'281px'}} id="item152587" className="pageItem " data-src="assets/images/item_152587.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'120px',top:'305px'}} id="item152588" className="pageItem " data-src="assets/images/item_152588.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'237px',top:'343px'}} id="item152589" className="pageItem " data-src="assets/images/item_152589.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'238px',top:'320px'}} id="item152590" className="pageItem " data-src="assets/images/item_152590.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'111px',top:'375px'}} id="item152591" className="pageItem " data-src="assets/images/item_152591.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'154px',top:'356px'}} id="item152592" className="pageItem " data-src="assets/images/item_152592.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'117px',top:'328px'}} id="item152594" className="pageItem " data-src="assets/images/item_152594.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'228px',top:'413px'}} id="item152596" className="pageItem " data-src="assets/images/item_152596.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'108px',top:'398px'}} id="item152597" className="pageItem " data-src="assets/images/item_152597.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'114px',top:'351px'}} id="item152598" className="pageItem " data-src="assets/images/item_152598.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'190px',top:'385px'}} id="item152599" className="pageItem " data-src="assets/images/item_152599.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'233px',top:'367px'}} id="item152600" className="pageItem " data-src="assets/images/item_152600.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'293px',top:'374px'}} id="item152601" className="pageItem " data-src="assets/images/item_152601.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'178px',top:'478px'}} id="item152602" className="pageItem " data-src="assets/images/item_152602.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'260px',top:'488px'}} id="item152603" className="pageItem " data-src="assets/images/item_152603.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'140px',top:'473px'}} id="item152604" className="pageItem " data-src="assets/images/item_152604.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'99px',top:'468px'}} id="item152605" className="pageItem " data-src="assets/images/item_152605.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'199px',top:'315px'}} id="item152606" className="pageItem " data-src="assets/images/item_152606.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'105px',top:'421px'}} id="item152607" className="pageItem " data-src="assets/images/item_152607.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'243px',top:'439px'}} id="item152608" className="pageItem " data-src="assets/images/item_152608.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'205px',top:'434px'}} id="item152609" className="pageItem " data-src="assets/images/item_152609.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'244px',top:'297px'}} id="item152610" className="pageItem " data-src="assets/images/item_152610.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'302px',top:'304px'}} id="item152611" className="pageItem " data-src="assets/images/item_152611.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'142px',top:'156px'}} id="item152612" className="pageItem " data-src="assets/images/item_152612.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'142px',top:'203px'}} id="item152613" className="pageItem " data-src="assets/images/item_152613.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'156px',top:'204px'}} id="item152614" className="pageItem " data-src="assets/images/item_152614.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'146px',top:'164px'}} id="item152615" className="pageItem " data-src="assets/images/item_152615.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'140px',top:'180px'}} id="item152616" className="pageItem " data-src="assets/images/item_152616.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'179px',top:'185px'}} id="item152617" className="pageItem " data-src="assets/images/item_152617.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'151px',top:'189px'}} id="item152618" className="pageItem " data-src="assets/images/item_152618.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'153px',top:'189px'}} id="item152619" className="pageItem " data-src="assets/images/item_152619.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'154px',top:'190px'}} id="item152620" className="pageItem " data-src="assets/images/item_152620.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'172px',top:'191px'}} id="item152621" className="pageItem " data-src="assets/images/item_152621.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'171px',top:'191px'}} id="item152622" className="pageItem " data-src="assets/images/item_152622.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'169px',top:'191px'}} id="item152623" className="pageItem " data-src="assets/images/item_152623.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'141px',top:'182px'}} id="item152624" className="pageItem " data-src="assets/images/item_152624.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'169px',top:'180px'}} id="item152625" className="pageItem " data-src="assets/images/item_152625.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'152px',top:'178px'}} id="item152627" className="pageItem " data-src="assets/images/item_152627.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'156px',top:'196px'}} id="item152628" className="pageItem " data-src="assets/images/item_152628.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'163px',top:'184px'}} id="item152630" className="pageItem " data-src="assets/images/item_152630.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'117px',top:'239px'}} id="item152631" className="pageItem " data-src="assets/images/item_152631.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'182px',top:'248px'}} id="item152633" className="pageItem " data-src="assets/images/item_152633.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'119px',top:'211px'}} id="item152634" className="pageItem " data-src="assets/images/item_152634.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'160px',top:'201px'}} id="item152635" className="pageItem " data-src="assets/images/item_152635.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'151px',top:'164px'}} id="item152636" className="pageItem " data-src="assets/images/item_152636.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'147px',top:'173px'}} id="item152637" className="pageItem " data-src="assets/images/item_152637.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'155px',top:'181px'}} id="item152638" className="pageItem " data-src="assets/images/item_152638.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'154px',top:'184px'}} id="item152639" className="pageItem " data-src="assets/images/item_152639.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'170px',top:'183px'}} id="item152640" className="pageItem " data-src="assets/images/item_152640.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'171px',top:'187px'}} id="item152641" className="pageItem " data-src="assets/images/item_152641.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'102px',top:'445px'}} id="item152642" className="pageItem " data-src="assets/images/item_152642.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'222px',top:'460px'}} id="item152643" className="pageItem " data-src="assets/images/item_152643.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'271px',top:'466px'}} id="item152644" className="pageItem " data-src="assets/images/item_152644.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'219px',top:'388px'}} id="item152645" className="pageItem " data-src="assets/images/item_152645.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'97px',top:'276px'}} id="item152646" className="pageItem " data-src="assets/images/item_152646.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'88px',top:'346px'}} id="item152647" className="pageItem " data-src="assets/images/item_152647.png" />
                            <img src="assets/images/blank.gif" alt="Rectangle" id="item152648" className="pageItem " data-src="assets/images/item_152648.png" />
                            <img src="assets/images/blank.gif" alt="Rectangle" style={{left:'396px',top:'236px'}} id="item152651" className="pageItem " data-src="assets/images/item_152651.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'402px',top:'404px'}} id="item152652" className="pageItem " data-src="assets/images/item_152652.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'436px',top:'193px'}} id="item152653" className="pageItem " data-src="assets/images/item_152653.png" />
                            <img src="assets/images/blank.gif" alt="Polygon" style={{left:'454px',top:'193px'}} id="item152654" className="pageItem " data-src="assets/images/item_152654.png" />
                        </div>
                        <div id="item120591" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <Navigation />
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item13347" className="pageItem group ">
                            <img src="assets/images/blank.gif" alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item13348" className="pageItem " data-src="assets/images/item_13348.png" />
                            <div alt="Group" style={{top:'132px'}} id="item13371" className="pageItem group ">
                                <img src="assets/images/blank.gif" alt="Polygon" id="item13373" className="pageItem " data-src="assets/images/item_13373.png" />
                                <img src="assets/images/blank.gif" alt="Polygon" style={{left:'3px',top:'4px'}} id="item13374" className="pageItem " data-src="assets/images/item_13374.png" />
                            </div>
                        </div>
                        <img src="assets/images/blank.gif" alt="Diagnosis IBD: " style={{left:'94px',top:'271px'}} id="item112111" className="pageItem " data-src="assets/images/item_112111.png" />
                        <img src="assets/images/blank.gif" data-ani="fadein-112134 1s linear 1" data-id="112134" id="item112134" data-hidestart="1" className="pageItem hidden" alt="Pemeriksaan Fisik30" style={{left:'94px',top:'369px'}} data-src="assets/images/item_112134.png" />
                        <img src="assets/images/blank.gif" alt="Bab 5" style={{left:'102px',top:'231px'}} id="item112157" className="pageItem " data-src="assets/images/item_112157.png" />
                        <button data-id="107964" name="icon back 19" onClick={handleOnClickPreviousPage} aria-label="icon back 19" id="item107964" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item107971" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src="assets/images/blank.gif" alt="Polygon" style={{left:'21px',top:'14px'}} id="item107972" className="pageItem " data-src="assets/images/item_107972.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item107975" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src="assets/images/blank.gif" alt="Polygon" style={{left:'21px',top:'14px'}} id="item107976" className="pageItem " data-src="assets/images/item_107976.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item107967" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src="assets/images/blank.gif" alt="Polygon" style={{left:'21px',top:'14px'}} id="item107969" className="pageItem " data-src="assets/images/item_107969.png" />
                            </div>
                        </button>
                        <button data-id="107978" name="icon next 19" onClick={handleOnClickNextPage} aria-label="icon next 19" id="item107978" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item107984" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src="assets/images/blank.gif" alt="Polygon" style={{left:'23px',top:'14px'}} id="item107985" className="pageItem " data-src="assets/images/item_107985.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item107987" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src="assets/images/blank.gif" alt="Polygon" style={{left:'23px',top:'14px'}} id="item107989" className="pageItem " data-src="assets/images/item_107989.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item107981" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src="assets/images/blank.gif" alt="Polygon" style={{left:'23px',top:'14px'}} id="item107982" className="pageItem " data-src="assets/images/item_107982.png" />
                            </div>
                        </button>
                        <button data-id="127042" name="button ulang 19" onClick={handleOnClickUlang} aria-label="button ulang 19" id="item127042" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item127053" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item127054" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item127055" className="pageItem group ">
                                    <img src="assets/images/blank.gif" alt="Polygon" style={{top:'20px'}} id="item127056" className="pageItem " data-src="assets/images/item_127056.png" />
                                    <img src="assets/images/blank.gif" alt="Polygon" style={{left:'4px'}} id="item127057" className="pageItem " data-src="assets/images/item_127057.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item127059" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item127060" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#fa635e" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item127062" className="pageItem group ">
                                    <img src="assets/images/blank.gif" alt="Polygon" style={{top:'20px'}} id="item127063" className="pageItem " data-src="assets/images/item_127063.png" />
                                    <img src="assets/images/blank.gif" alt="Polygon" style={{left:'4px'}} id="item127065" className="pageItem " data-src="assets/images/item_127065.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item127045" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item127046" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item127048" className="pageItem group ">
                                    <img src="assets/images/blank.gif" alt="Polygon" style={{top:'20px'}} id="item127049" className="pageItem " data-src="assets/images/item_127049.png" />
                                    <img src="assets/images/blank.gif" alt="Polygon" style={{left:'4px'}} id="item127051" className="pageItem " data-src="assets/images/item_127051.png" />
                                </div>
                            </div>
                        </button>
                        <button data-id="221373" name="icon beranda 83" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 83" id="item221373" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221380" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src="assets/images/blank.gif" alt="Polygon" style={{left:'14px',top:'15px'}} id="item221381" className="pageItem " data-src="assets/images/item_221381.png" />
                                <img src="assets/images/blank.gif" alt="Polygon" style={{left:'17px',top:'18px'}} id="item221382" className="pageItem " data-src="assets/images/item_221382.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221384" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src="assets/images/blank.gif" alt="Polygon" style={{left:'14px',top:'15px'}} id="item221385" className="pageItem " data-src="assets/images/item_221385.png" />
                                <img src="assets/images/blank.gif" alt="Polygon" style={{left:'17px',top:'18px'}} id="item221387" className="pageItem " data-src="assets/images/item_221387.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221376" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src="assets/images/blank.gif" alt="Polygon" style={{left:'17px',top:'18px'}} id="item221377" className="pageItem " data-src="assets/images/item_221377.png" />
                                <img src="assets/images/blank.gif" alt="Polygon" style={{left:'14px',top:'15px'}} id="item221378" className="pageItem " data-src="assets/images/item_221378.png" />
                            </div>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Bab5P2;