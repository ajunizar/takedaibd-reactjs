import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Bab5P1() {

    const navigate = useNavigate();

    const handleOnClickGoToBab1 = () => {
        window.location.href = '/bab1-start';
    };
    
    const handleOnClickPreviousPage = () => {
        window.location.href = '/bab5-start';
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }

    const handleOnClickUlang = (event) => {
        event.preventDefault();
        jQuery("#item263775 audio")[0].pause();
        jQuery("#item263775 audio")[0].currentTime =0;
        jQuery("#item263775 audio")[0].play();
        go(event,[{n:1,id:71810,act:'play'},{del:1.5,n:1,id:112064,act:'play'},{del:10,n:1,id:97099,act:'play'},{n:1,id:10893,act:'play'},{del:5,n:1,id:11106,act:'play'},{del:3,n:1,id:92348,act:'play'},{del:4.5,n:1,id:92371,act:'play'},{del:3,n:1,id:92394,act:'play'},{del:2,n:1,id:92421,act:'play'},{del:4.5,n:1,id:92444,act:'play'},{del:3.5,n:1,id:97126,act:'play'},{n:1,id:10894,act:'play'},{del:2,n:1,id:11128,act:'play'},{del:3,n:1,id:92467,act:'play'},{del:4.5,n:1,id:97191,act:'play'},{n:1,id:10895,act:'play'},{del:2,n:1,id:11150,act:'play'},{del:1.5,n:1,id:92491,act:'play'},{del:3,n:1,id:92520,act:'play'},{del:2,n:1,id:92543,act:'play'}]);
    }

    const handleOnClickNextPage = (event) => {
        window.location.href = '/bab5-p2';
    }


    return (
        <div >
            <ul className="pages" id="slider">
                <li className="page" data-name="20">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:71810,act:'play'},{del:1.5,n:1,id:112064,act:'play'},{del:9,n:1,id:97099,act:'play'},{n:1,id:10893,act:'play'},{del:4,n:1,id:11106,act:'play'},{del:3,n:1,id:92348,act:'play'},{del:4.5,n:1,id:92371,act:'play'},{del:3,n:1,id:92394,act:'play'},{del:2,n:1,id:92421,act:'play'},{del:4.5,n:1,id:92444,act:'play'},{del:3.5,n:1,id:97126,act:'play'},{n:1,id:10894,act:'play'},{del:2,n:1,id:11128,act:'play'},{del:3,n:1,id:92467,act:'play'},{del:4.2,n:1,id:97191,act:'play'},{n:1,id:10895,act:'play'},{del:2,n:1,id:11150,act:'play'},{del:1.5,n:1,id:92491,act:'play'},{del:3,n:1,id:92520,act:'play'},{del:2,n:1,id:92543,act:'play'}], 'pageload');" style={{width:'1920px',height:'1080px'}}>
                        <div id="item10893" data-ani="flyinfromright-10893 1s cubic-bezier(.2,.6,.35,1) 1" data-id="10893" data-hidestart="1" className="pageItem hidden" alt="rectangle 1">&nbsp;</div>
                        <div id="item10894" data-ani="flyinfromright-10894 1s cubic-bezier(.2,.6,.35,1) 1" data-id="10894" data-hidestart="1" className="pageItem hidden" alt="rectangle 2">&nbsp;</div>
                        <div id="item10895" data-ani="flyinfromright-10895 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="10895" data-hidestart="1" className="pageItem hidden" alt="rectangle 3">&nbsp;</div>
                        <div data-ani="flyinfromleft-97099 1s cubic-bezier(.2,.6,.35,1) 1" data-id="97099" id="item97099" data-hidestart="1" className="pageItem group hidden" alt="riwayat peyakit sekarang" style={{left:'690px',top:'228px',width:' 368px',height:'272px'}}>
                            <div id="item97100" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Riwayat penyakit sekarang23,30" style={{left:'42px',top:'93px'}} id="item97102" className="pageItem " data-src="assets/images/item_97102.png" />
                        </div>
                        <div data-ani="flyinfromleft-97126 1s cubic-bezier(.2,.6,.35,1) 1" data-id="97126" id="item97126" data-hidestart="1" className="pageItem group hidden" alt="riwayat pengobatan" style={{left:'690px',top:'523px',width:' 368px',height:'167px'}}>
                            <div id="item97127" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Riwayat pengobatan30" style={{left:'42px',top:'49px'}} id="item97128" className="pageItem " data-src="assets/images/item_97128.png" />
                        </div>
                        <div data-ani="flyinfromleft-97191 1s cubic-bezier(.2,.6,.35,1) 1" data-id="97191" id="item97191" data-hidestart="1" className="pageItem group hidden" alt="faktor resiko" style={{left:'690px',top:'716px',width:' 368px',height:'206px'}}>
                            <div id="item97192" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Faktor Risiko30" style={{left:'42px',top:'84px'}} id="item97193" className="pageItem " data-src="assets/images/item_97193.png" />
                        </div>
                        <img src={blankImage} alt="Polygon" style={{left:'-637px',top:'-602px'}} id="item10918" className="pageItem " data-src="assets/images/item_10918.png" />
                        <div data-ani="flyinfromleft-71810 1s cubic-bezier(.2,.6,.35,1) 1" data-id="71810" id="item71810" data-hidestart="1" className="pageItem group hidden" alt="Group" style={{left:'-32px',top:'526px',width:' 490px',height:'615px'}}>
                            <img src={blankImage} alt="Rectangle" style={{left:'411px',top:'250px'}} id="item71625" className="pageItem " data-src="assets/images/item_71625.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'417px',top:'417px'}} id="item71626" className="pageItem " data-src="assets/images/item_71626.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'450px',top:'207px'}} id="item71627" className="pageItem " data-src="assets/images/item_71627.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'469px',top:'207px'}} id="item71628" className="pageItem " data-src="assets/images/item_71628.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'15px',top:'64px'}} id="item71629" className="pageItem " data-src="assets/images/item_71629.png" />
                            <img src={blankImage} alt="Polygon" style={{top:'50px'}} id="item71630" className="pageItem " data-src="assets/images/item_71630.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'28px',top:'52px'}} id="item71631" className="pageItem " data-src="assets/images/item_71631.png" />
                            <img src={blankImage} alt="Rectangle" style={{left:'102px',top:'141px'}} id="item71632" className="pageItem " data-src="assets/images/item_71632.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'237px',top:'159px'}} id="item71633" className="pageItem " data-src="assets/images/item_71633.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'159px',top:'116px'}} id="item71634" className="pageItem " data-src="assets/images/item_71634.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'234px',top:'183px'}} id="item71635" className="pageItem " data-src="assets/images/item_71635.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'269px',top:'234px'}} id="item71636" className="pageItem " data-src="assets/images/item_71636.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'231px',top:'206px'}} id="item71637" className="pageItem " data-src="assets/images/item_71637.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'228px',top:'229px'}} id="item71638" className="pageItem " data-src="assets/images/item_71638.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'316px',top:'193px'}} id="item71639" className="pageItem " data-src="assets/images/item_71639.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'225px',top:'253px'}} id="item71640" className="pageItem " data-src="assets/images/item_71640.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'123px',top:'281px'}} id="item71641" className="pageItem " data-src="assets/images/item_71641.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'120px',top:'305px'}} id="item71642" className="pageItem " data-src="assets/images/item_71642.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'237px',top:'343px'}} id="item71643" className="pageItem " data-src="assets/images/item_71643.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'238px',top:'320px'}} id="item71645" className="pageItem " data-src="assets/images/item_71645.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'111px',top:'375px'}} id="item71646" className="pageItem " data-src="assets/images/item_71646.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'154px',top:'356px'}} id="item71647" className="pageItem " data-src="assets/images/item_71647.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'117px',top:'328px'}} id="item71648" className="pageItem " data-src="assets/images/item_71648.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'228px',top:'413px'}} id="item71649" className="pageItem " data-src="assets/images/item_71649.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'108px',top:'398px'}} id="item71650" className="pageItem " data-src="assets/images/item_71650.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'114px',top:'351px'}} id="item71651" className="pageItem " data-src="assets/images/item_71651.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'190px',top:'385px'}} id="item71652" className="pageItem " data-src="assets/images/item_71652.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'233px',top:'367px'}} id="item71653" className="pageItem " data-src="assets/images/item_71653.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'293px',top:'374px'}} id="item71654" className="pageItem " data-src="assets/images/item_71654.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'178px',top:'478px'}} id="item71655" className="pageItem " data-src="assets/images/item_71655.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'260px',top:'488px'}} id="item71656" className="pageItem " data-src="assets/images/item_71656.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'140px',top:'473px'}} id="item71657" className="pageItem " data-src="assets/images/item_71657.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'99px',top:'468px'}} id="item71658" className="pageItem " data-src="assets/images/item_71658.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'199px',top:'315px'}} id="item71659" className="pageItem " data-src="assets/images/item_71659.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'105px',top:'421px'}} id="item71660" className="pageItem " data-src="assets/images/item_71660.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'243px',top:'439px'}} id="item71661" className="pageItem " data-src="assets/images/item_71661.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'205px',top:'434px'}} id="item71662" className="pageItem " data-src="assets/images/item_71662.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'244px',top:'297px'}} id="item71663" className="pageItem " data-src="assets/images/item_71663.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'302px',top:'304px'}} id="item71664" className="pageItem " data-src="assets/images/item_71664.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'142px',top:'156px'}} id="item71665" className="pageItem " data-src="assets/images/item_71665.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'142px',top:'203px'}} id="item71666" className="pageItem " data-src="assets/images/item_71666.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'156px',top:'204px'}} id="item71667" className="pageItem " data-src="assets/images/item_71667.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'146px',top:'164px'}} id="item71668" className="pageItem " data-src="assets/images/item_71668.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'140px',top:'180px'}} id="item71669" className="pageItem " data-src="assets/images/item_71669.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'179px',top:'185px'}} id="item71670" className="pageItem " data-src="assets/images/item_71670.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'151px',top:'189px'}} id="item71671" className="pageItem " data-src="assets/images/item_71671.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'153px',top:'189px'}} id="item71672" className="pageItem " data-src="assets/images/item_71672.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'154px',top:'190px'}} id="item71673" className="pageItem " data-src="assets/images/item_71673.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'172px',top:'191px'}} id="item71674" className="pageItem " data-src="assets/images/item_71674.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'171px',top:'191px'}} id="item71675" className="pageItem " data-src="assets/images/item_71675.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'169px',top:'191px'}} id="item71676" className="pageItem " data-src="assets/images/item_71676.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'141px',top:'182px'}} id="item71677" className="pageItem " data-src="assets/images/item_71677.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'169px',top:'180px'}} id="item71679" className="pageItem " data-src="assets/images/item_71679.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'152px',top:'178px'}} id="item71680" className="pageItem " data-src="assets/images/item_71680.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'156px',top:'196px'}} id="item71682" className="pageItem " data-src="assets/images/item_71682.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'163px',top:'184px'}} id="item71683" className="pageItem " data-src="assets/images/item_71683.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'117px',top:'239px'}} id="item71684" className="pageItem " data-src="assets/images/item_71684.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'182px',top:'248px'}} id="item71685" className="pageItem " data-src="assets/images/item_71685.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'119px',top:'211px'}} id="item71686" className="pageItem " data-src="assets/images/item_71686.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'160px',top:'201px'}} id="item71687" className="pageItem " data-src="assets/images/item_71687.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'151px',top:'164px'}} id="item71688" className="pageItem " data-src="assets/images/item_71688.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'147px',top:'173px'}} id="item71689" className="pageItem " data-src="assets/images/item_71689.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'155px',top:'181px'}} id="item71690" className="pageItem " data-src="assets/images/item_71690.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'154px',top:'184px'}} id="item71691" className="pageItem " data-src="assets/images/item_71691.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'170px',top:'183px'}} id="item71692" className="pageItem " data-src="assets/images/item_71692.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'171px',top:'187px'}} id="item71693" className="pageItem " data-src="assets/images/item_71693.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'102px',top:'445px'}} id="item71694" className="pageItem " data-src="assets/images/item_71694.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'222px',top:'460px'}} id="item71695" className="pageItem " data-src="assets/images/item_71695.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'271px',top:'466px'}} id="item71696" className="pageItem " data-src="assets/images/item_71696.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'219px',top:'388px'}} id="item71697" className="pageItem " data-src="assets/images/item_71697.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'97px',top:'276px'}} id="item71698" className="pageItem " data-src="assets/images/item_71698.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'88px',top:'346px'}} id="item71699" className="pageItem " data-src="assets/images/item_71699.png" />
                            <img src={blankImage} alt="Rectangle" id="item71700" className="pageItem " data-src="assets/images/item_71700.png" />
                            <img src={blankImage} alt="Rectangle" style={{left:'396px',top:'236px'}} id="item71703" className="pageItem " data-src="assets/images/item_71703.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'402px',top:'404px'}} id="item71704" className="pageItem " data-src="assets/images/item_71704.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'436px',top:'193px'}} id="item71705" className="pageItem " data-src="assets/images/item_71705.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'454px',top:'193px'}} id="item71706" className="pageItem " data-src="assets/images/item_71706.png" />
                        </div>
                        <div id="item120116" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <Navigation />
                        <div id="item155160" className="pageItem" style={{height:'60px',width:'60px',left:'1567px',top:'987px'}} alt="Sound">
                            <audio data-id="155160" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 19-14.mp3" />
                            </audio>
                        </div>
                        <div id="item155167" className="pageItem" style={{height:'60px',width:'60px',left:'1649px',top:'987px'}} alt="Sound">
                            <audio data-id="155167" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 19-15.mp3" />
                            </audio>
                        </div>
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item10951" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item10971" className="pageItem " data-src="assets/images/item_10971.png" />
                            <div alt="Group" style={{top:'132px'}} id="item10974" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item10975" className="pageItem " data-src="assets/images/item_10975.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item10976" className="pageItem " data-src="assets/images/item_10976.png" />
                            </div>
                        </div>
                        <img src={blankImage} alt="Diagnosis IBD: " style={{left:'94px',top:'271px'}} id="item10996" className="pageItem " data-src="assets/images/item_10996.png" />
                        <img src={blankImage} data-ani="fadein-112064 1s linear 1" data-id="112064" id="item112064" data-hidestart="1" className="pageItem hidden" alt="Anamnesis" style={{left:'94px',top:'369px'}} data-src="assets/images/item_112064.png" />
                        <img src={blankImage} alt="Bab 5" style={{left:'102px',top:'231px'}} id="item11018" className="pageItem " data-src="assets/images/item_11018.png" />
                        <img src={blankImage} data-ani="fadein-11106 0.2s linear 1" data-id="11106" id="item11106" data-hidestart="1" className="pageItem hidden" alt="• Onset dan durasi" style={{left:'1085px',top:'245px'}} data-src="assets/images/item_11106.png" />
                        <img src={blankImage} data-ani="fadein-92348 0.2s linear 1" data-id="92348" id="item92348" data-hidestart="1" className="pageItem hidden" alt="• Frekuensi buang air besar (BAB) dan konsistensi feses" style={{left:'1085px',top:'283px'}} data-src="assets/images/item_92348.png" />
                        <img src={blankImage} data-ani="fadein-92371 0.2s linear 1" data-id="92371" id="item92371" data-hidestart="1" className="pageItem hidden" alt="• BAB berdarah / berlendir " style={{left:'1085px',top:'324px'}} data-src="assets/images/item_92371.png" />
                        <img src={blankImage} data-ani="fadein-92394 0.2s linear 1" data-id="92394" id="item92394" data-hidestart="1" className="pageItem hidden" alt="• Nyeri / kram perut" style={{left:'1085px',top:'365px'}} data-src="assets/images/item_92394.png" />
                        <img src={blankImage} data-ani="fadein-92421 0.2s linear 1" data-id="92421" id="item92421" data-hidestart="1" className="pageItem hidden" alt="• Gejala sistemik " style={{left:'1085px',top:'406px'}} data-src="assets/images/item_92421.png" />
                        <img src={blankImage} data-ani="fadein-92444 0.2s linear 1" data-id="92444" id="item92444" data-hidestart="1" className="pageItem hidden" alt="• Manifestasi ekstraintestinal" style={{left:'1085px',top:'444px'}} data-src="assets/images/item_92444.png" />
                        <img src={blankImage} data-ani="fadein-11128 0.2s linear 1" data-id="11128" id="item11128" data-hidestart="1" className="pageItem hidden" alt="• Terapi antibiotik " style={{left:'1085px',top:'571px'}} data-src="assets/images/item_11128.png" />
                        <img src={blankImage} data-ani="fadein-92467 0.2s linear 1" data-id="92467" id="item92467" data-hidestart="1" className="pageItem hidden" alt="• Obat Anti Inflamasi Non Steroid (OAINS)" style={{left:'1085px',top:'608px'}} data-src="assets/images/item_92467.png" />
                        <img src={blankImage} data-ani="fadein-11150 0.2s linear 1" data-id="11150" id="item11150" data-hidestart="1" className="pageItem hidden" alt="• Merokok" style={{left:'1085px',top:'742px'}} data-src="assets/images/item_11150.png" />
                        <img src={blankImage} data-ani="fadein-92491 0.2s linear 1" data-id="92491" id="item92491" data-hidestart="1" className="pageItem hidden" alt="• Riwayat keluarga " style={{left:'1085px',top:'776px'}} data-src="assets/images/item_92491.png" />
                        <img src={blankImage} data-ani="fadein-92520 0.2s linear 1" data-id="92520" id="item92520" data-hidestart="1" className="pageItem hidden" alt="• Riwayat apendektomi " style={{left:'1085px',top:'815px'}} data-src="assets/images/item_92520.png" />
                        <img src={blankImage} data-ani="fadein-92543 0.2s linear 1" data-id="92543" id="item92543" data-hidestart="1" className="pageItem hidden" alt="• Riwayat gastroenteritis" style={{left:'1085px',top:'856px'}} data-src="assets/images/item_92543.png" />
                        <div id="item155059" className="pageItem" style={{height:'60px',width:'60px',left:'500px',top:'983px'}} alt="Sound">
                            <audio data-id="155059" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 19-1.mp3" />
                            </audio>
                        </div>
                        <div id="item155065" className="pageItem" style={{height:'60px',width:'60px',left:'581px',top:'983px'}} alt="Sound">
                            <audio data-id="155065" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 19-10.mp3" />
                            </audio>
                        </div>
                        <div id="item155071" className="pageItem" style={{height:'60px',width:'60px',left:'658px',top:'983px'}} alt="Sound">
                            <audio data-id="155071" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 19-11.mp3" />
                            </audio>
                        </div>
                        <div id="item155077" className="pageItem" style={{height:'60px',width:'60px',left:'735px',top:'983px'}} alt="Sound">
                            <audio data-id="155077" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 19-12.mp3" />
                            </audio>
                        </div>
                        <div id="item155084" className="pageItem" style={{height:'60px',width:'60px',left:'805px',top:'983px'}} alt="Sound">
                            <audio data-id="155084" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 19-13.mp3" />
                            </audio>
                        </div>
                        <div id="item155090" className="pageItem" style={{height:'60px',width:'60px',left:'878px',top:'983px'}} alt="Sound">
                            <audio data-id="155090" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 19-2.mp3" />
                            </audio>
                        </div>
                        <div id="item155097" className="pageItem" style={{height:'60px',width:'60px',left:'950px',top:'983px'}} alt="Sound">
                            <audio data-id="155097" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 19-3.mp3" />
                            </audio>
                        </div>
                        <div id="item155104" className="pageItem" style={{height:'60px',width:'60px',left:'1033px',top:'983px'}} alt="Sound">
                            <audio data-id="155104" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 19-4.mp3" />
                            </audio>
                        </div>
                        <div id="item155110" className="pageItem" style={{height:'60px',width:'60px',left:'1105px',top:'983px'}} alt="Sound">
                            <audio data-id="155110" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 19-5.mp3" />
                            </audio>
                        </div>
                        <div id="item155119" className="pageItem" style={{height:'60px',width:'60px',left:'1184px',top:'983px'}} alt="Sound">
                            <audio data-id="155119" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 19-6.mp3" />
                            </audio>
                        </div>
                        <div id="item155127" className="pageItem" style={{height:'60px',width:'60px',left:'1271px',top:'983px'}} alt="Sound">
                            <audio data-id="155127" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 19-7.mp3" />
                            </audio>
                        </div>
                        <div id="item155132" className="pageItem" style={{height:'60px',width:'60px',left:'1352px',top:'983px'}} alt="Sound">
                            <audio data-id="155132" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 19-8.mp3" />
                            </audio>
                        </div>
                        <div id="item155138" className="pageItem" style={{height:'60px',width:'60px',left:'1454px',top:'983px'}} alt="Sound">
                            <audio data-id="155138" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 19-9.mp3" />
                            </audio>
                        </div>
                        <div id="item263775" className="pageItem" style={{height:'60px',width:'60px',left:'551px',top:'978px'}} alt="Sound">
                            <audio data-id="263775" className="mejs-no-controls" data-autoplay="1" data-autodelay="0" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 19 FULL.mp3" />
                            </audio>
                        </div>
                        <div id="item124026" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <button data-id="107418" name="icon back 18" onClick={handleOnClickPreviousPage} aria-label="icon back 18" id="item107418" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item107424" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item107426" className="pageItem " data-src="assets/images/item_107426.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item107428" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item107429" className="pageItem " data-src="assets/images/item_107429.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item107421" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item107422" className="pageItem " data-src="assets/images/item_107422.png" />
                            </div>
                        </button>
                        <button data-id="107431" name="icon next 18" onClick={handleOnClickNextPage} aria-label="icon next 18" id="item107431" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item107437" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item107438" className="pageItem " data-src="assets/images/item_107438.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item107440" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item107442" className="pageItem " data-src="assets/images/item_107442.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item107434" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item107435" className="pageItem " data-src="assets/images/item_107435.png" />
                            </div>
                        </button>
                        <button data-id="127002" name="button ulang 18" onClick={handleOnClickUlang} aria-label="button ulang 18" id="item127002" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item127013" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item127014" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item127015" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item127016" className="pageItem " data-src="assets/images/item_127016.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item127017" className="pageItem " data-src="assets/images/item_127017.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item127019" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item127020" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#fa635e" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item127022" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item127023" className="pageItem " data-src="assets/images/item_127023.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item127026" className="pageItem " data-src="assets/images/item_127026.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item127005" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item127006" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item127008" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item127009" className="pageItem " data-src="assets/images/item_127009.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item127011" className="pageItem " data-src="assets/images/item_127011.png" />
                                </div>
                            </div>
                        </button>
                        <button data-id="221355" name="icon beranda 82" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 82" id="item221355" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221362" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221363" className="pageItem " data-src="assets/images/item_221363.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221365" className="pageItem " data-src="assets/images/item_221365.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221367" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221368" className="pageItem " data-src="assets/images/item_221368.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221369" className="pageItem " data-src="assets/images/item_221369.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221358" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221359" className="pageItem " data-src="assets/images/item_221359.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221360" className="pageItem " data-src="assets/images/item_221360.png" />
                            </div>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Bab5P1;