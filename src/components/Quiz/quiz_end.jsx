import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function QuizEnd() {

    const navigate = useNavigate();

    const handleOnClickGoToDaftarPusaka1 = () => {
        window.location.href = '/daftar-pusaka-1';
    };
    //var referrer = document.referrer;
    //console.log("referrer url",referrer);
    const handleOnClickBack = () => {
        window.location.href = '/Quiz40';
    };
    const handleOnClickPreviousPage = () => {
        navigate(-1);
    };

    const handleOnClickGoToTerimaKasih = () => {
        window.location.href = '/quiz-terima-kasih';
    }

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }


    const handleOnClickGoToCekPenjelasan = (event) => {
        window.location.href = '/quiz7Penjelasan';
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
                <li className="page" data-name="65">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:223414,act:'play'},{n:1,link:1,id:228188,act:'play'},{n:1,id:228185,sn:1,act:'play'}], 'pageload');" style={{width:'1920px',height:'1080px'}}>
                        <div id="item228173" className="pageItem" style={{height:'60px',width:'60px',left:'54px',top:'48px'}} alt="Sound">
                            <audio data-id="228173" className="mejs-no-controls" data-autoplay="1" data-autodelay="0" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/Closing VO_FA.mp3" />
                            </audio>
                        </div>
                        <div id="item228178" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <img src={blankImage} alt="Polygon" style={{left:'483px',top:'120px'}} id="item228182" className="pageItem " data-src="assets/images/item_228182.png" />
                        <div data-ani="fadein-223414 0.5s linear 1" data-id="223414" id="item223414" data-hidestart="1" className="pageItem group hidden" alt="Group" style={{top:'208px',width:' 1920px',height:'871px'}}>
                            <div id="item223416" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Polygon" style={{left:'1627px',top:'119px'}} id="item223417" className="pageItem " data-src="assets/images/item_223417.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1570px',top:'157px'}} id="item223418" className="pageItem " data-src="assets/images/item_223418.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1630px',top:'117px'}} id="item223419" className="pageItem " data-src="assets/images/item_223419.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1741px',top:'350px'}} id="item223420" className="pageItem " data-src="assets/images/item_223420.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1665px',top:'670px'}} id="item223421" className="pageItem " data-src="assets/images/item_223421.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1612px',top:'694px'}} id="item223422" className="pageItem " data-src="assets/images/item_223422.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1612px',top:'721px'}} id="item223423" className="pageItem " data-src="assets/images/item_223423.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1748px',top:'656px'}} id="item223424" className="pageItem " data-src="assets/images/item_223424.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1745px',top:'690px'}} id="item223425" className="pageItem " data-src="assets/images/item_223425.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1671px',top:'301px'}} id="item223426" className="pageItem " data-src="assets/images/item_223426.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1718px',top:'327px'}} id="item223427" className="pageItem " data-src="assets/images/item_223427.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1680px',top:'313px'}} id="item223428" className="pageItem " data-src="assets/images/item_223428.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1755px',top:'332px'}} id="item223429" className="pageItem " data-src="assets/images/item_223429.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1657px',top:'352px'}} id="item223430" className="pageItem " data-src="assets/images/item_223430.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1696px',top:'343px'}} id="item223431" className="pageItem " data-src="assets/images/item_223431.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1731px',top:'5px'}} id="item223432" className="pageItem " data-src="assets/images/item_223432.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1742px',top:'45px'}} id="item223433" className="pageItem " data-src="assets/images/item_223433.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1714px',top:'65px'}} id="item223434" className="pageItem " data-src="assets/images/item_223434.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1714px',top:'65px'}} id="item223435" className="pageItem " data-src="assets/images/item_223435.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1699px',top:'106px'}} id="item223436" className="pageItem " data-src="assets/images/item_223436.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1667px',top:'103px'}} id="item223437" className="pageItem " data-src="assets/images/item_223437.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1692px',top:'9px'}} id="item223438" className="pageItem " data-src="assets/images/item_223438.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1696px',top:'14px'}} id="item223439" className="pageItem " data-src="assets/images/item_223439.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1750px',top:'47px'}} id="item223440" className="pageItem " data-src="assets/images/item_223440.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1750px',top:'51px'}} id="item223441" className="pageItem " data-src="assets/images/item_223441.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1725px',top:'57px'}} id="item223442" className="pageItem " data-src="assets/images/item_223442.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1700px',top:'60px'}} id="item223443" className="pageItem " data-src="assets/images/item_223443.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1711px',top:'45px'}} id="item223444" className="pageItem " data-src="assets/images/item_223444.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1701px',top:'44px'}} id="item223445" className="pageItem " data-src="assets/images/item_223445.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1722px',top:'42px'}} id="item223446" className="pageItem " data-src="assets/images/item_223446.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1690px'}} id="item223447" className="pageItem " data-src="assets/images/item_223447.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1712px',top:'69px'}} id="item223449" className="pageItem " data-src="assets/images/item_223449.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1705px',top:'50px'}} id="item223450" className="pageItem " data-src="assets/images/item_223450.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1726px',top:'48px'}} id="item223451" className="pageItem " data-src="assets/images/item_223451.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1540px',top:'115px'}} id="item223452" className="pageItem " data-src="assets/images/item_223452.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1733px',top:'105px'}} id="item223453" className="pageItem " data-src="assets/images/item_223453.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1768px',top:'120px'}} id="item223454" className="pageItem " data-src="assets/images/item_223454.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1796px',top:'230px'}} id="item223455" className="pageItem " data-src="assets/images/item_223455.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1765px',top:'342px'}} id="item223456" className="pageItem " data-src="assets/images/item_223456.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1655px',top:'112px'}} id="item223457" className="pageItem " data-src="assets/images/item_223457.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1566px',top:'157px'}} id="item223458" className="pageItem " data-src="assets/images/item_223458.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1765px',top:'115px'}} id="item223459" className="pageItem " data-src="assets/images/item_223459.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1758px',top:'356px'}} id="item223460" className="pageItem " data-src="assets/images/item_223460.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1683px',top:'120px'}} id="item223461" className="pageItem " data-src="assets/images/item_223461.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1742px',top:'121px'}} id="item223464" className="pageItem " data-src="assets/images/item_223464.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1757px',top:'353px'}} id="item223465" className="pageItem " data-src="assets/images/item_223465.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1759px',top:'376px'}} id="item223466" className="pageItem " data-src="assets/images/item_223466.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1665px',top:'360px'}} id="item223467" className="pageItem " data-src="assets/images/item_223467.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1657px',top:'376px'}} id="item223468" className="pageItem " data-src="assets/images/item_223468.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1662px',top:'171px'}} id="item223469" className="pageItem " data-src="assets/images/item_223469.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1763px',top:'126px'}} id="item223470" className="pageItem " data-src="assets/images/item_223470.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1806px',top:'222px'}} id="item223472" className="pageItem " data-src="assets/images/item_223472.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1818px',top:'244px'}} id="item223473" className="pageItem " data-src="assets/images/item_223473.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1581px',top:'156px'}} id="item223474" className="pageItem " data-src="assets/images/item_223474.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1681px',top:'202px'}} id="item223475" className="pageItem " data-src="assets/images/item_223475.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1695px',top:'202px'}} id="item223476" className="pageItem " data-src="assets/images/item_223476.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1675px',top:'150px'}} id="item223477" className="pageItem " data-src="assets/images/item_223477.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1695px',top:'107px'}} id="item223478" className="pageItem " data-src="assets/images/item_223478.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1753px',top:'105px'}} id="item223479" className="pageItem " data-src="assets/images/item_223479.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1741px',top:'158px'}} id="item223480" className="pageItem " data-src="assets/images/item_223480.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1744px',top:'159px'}} id="item223481" className="pageItem " data-src="assets/images/item_223481.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1748px',top:'163px'}} id="item223482" className="pageItem " data-src="assets/images/item_223482.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1744px',top:'159px'}} id="item223483" className="pageItem " data-src="assets/images/item_223483.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1741px',top:'158px'}} id="item223484" className="pageItem " data-src="assets/images/item_223484.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1756px',top:'161px'}} id="item223485" className="pageItem " data-src="assets/images/item_223485.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'147px',top:'44px'}} id="item223487" className="pageItem " data-src="assets/images/item_223487.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'204px',top:'147px'}} id="item223488" className="pageItem " data-src="assets/images/item_223488.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'338px',top:'307px'}} id="item223489" className="pageItem " data-src="assets/images/item_223489.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'255px',top:'250px'}} id="item223490" className="pageItem " data-src="assets/images/item_223490.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'206px',top:'144px'}} id="item223491" className="pageItem " data-src="assets/images/item_223491.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'130px',top:'140px'}} id="item223492" className="pageItem " data-src="assets/images/item_223492.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'157px',top:'692px'}} id="item223493" className="pageItem " data-src="assets/images/item_223493.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'153px',top:'696px'}} id="item223494" className="pageItem " data-src="assets/images/item_223494.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'171px',top:'102px'}} id="item223495" className="pageItem " data-src="assets/images/item_223495.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'174px',top:'102px'}} id="item223496" className="pageItem " data-src="assets/images/item_223496.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'201px',top:'385px'}} id="item223497" className="pageItem " data-src="assets/images/item_223497.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'136px',top:'273px'}} id="item223498" className="pageItem " data-src="assets/images/item_223498.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'136px',top:'376px'}} id="item223499" className="pageItem " data-src="assets/images/item_223499.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'194px',top:'351px'}} id="item223500" className="pageItem " data-src="assets/images/item_223500.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'164px',top:'281px'}} id="item223501" className="pageItem " data-src="assets/images/item_223501.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'198px',top:'291px'}} id="item223502" className="pageItem " data-src="assets/images/item_223502.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'193px',top:'351px'}} id="item223503" className="pageItem " data-src="assets/images/item_223503.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'202px',top:'432px'}} id="item223504" className="pageItem " data-src="assets/images/item_223504.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'149px',top:'297px'}} id="item223506" className="pageItem " data-src="assets/images/item_223506.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'234px',top:'291px'}} id="item223507" className="pageItem " data-src="assets/images/item_223507.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'258px',top:'702px'}} id="item223508" className="pageItem " data-src="assets/images/item_223508.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'258px',top:'703px'}} id="item223509" className="pageItem " data-src="assets/images/item_223509.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'158px',top:'82px'}} id="item223510" className="pageItem " data-src="assets/images/item_223510.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'167px',top:'52px'}} id="item223511" className="pageItem " data-src="assets/images/item_223511.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'163px',top:'87px'}} id="item223512" className="pageItem " data-src="assets/images/item_223512.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'160px',top:'91px'}} id="item223513" className="pageItem " data-src="assets/images/item_223513.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'208px',top:'86px'}} id="item223514" className="pageItem " data-src="assets/images/item_223514.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'186px',top:'87px'}} id="item223515" className="pageItem " data-src="assets/images/item_223515.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'199px',top:'86px'}} id="item223516" className="pageItem " data-src="assets/images/item_223516.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'183px',top:'95px'}} id="item223517" className="pageItem " data-src="assets/images/item_223517.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'207px',top:'93px'}} id="item223518" className="pageItem " data-src="assets/images/item_223518.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'182px',top:'81px'}} id="item223519" className="pageItem " data-src="assets/images/item_223519.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'204px',top:'80px'}} id="item223520" className="pageItem " data-src="assets/images/item_223520.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'159px',top:'45px'}} id="item223521" className="pageItem " data-src="assets/images/item_223521.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'185px',top:'46px'}} id="item223523" className="pageItem " data-src="assets/images/item_223523.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'189px',top:'103px'}} id="item223524" className="pageItem " data-src="assets/images/item_223524.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'175px',top:'54px'}} id="item223525" className="pageItem " data-src="assets/images/item_223525.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'133px',top:'144px'}} id="item223526" className="pageItem " data-src="assets/images/item_223526.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'117px',top:'147px'}} id="item223527" className="pageItem " data-src="assets/images/item_223527.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'205px',top:'141px'}} id="item223528" className="pageItem " data-src="assets/images/item_223528.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'263px',top:'248px'}} id="item223529" className="pageItem " data-src="assets/images/item_223529.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'137px',top:'382px'}} id="item223530" className="pageItem " data-src="assets/images/item_223530.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'132px',top:'391px'}} id="item223531" className="pageItem " data-src="assets/images/item_223531.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'237px',top:'371px'}} id="item223532" className="pageItem " data-src="assets/images/item_223532.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'239px',top:'391px'}} id="item223533" className="pageItem " data-src="assets/images/item_223533.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'258px',top:'201px'}} id="item223534" className="pageItem " data-src="assets/images/item_223534.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'161px',top:'155px'}} id="item223535" className="pageItem " data-src="assets/images/item_223535.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'211px',top:'152px'}} id="item223536" className="pageItem " data-src="assets/images/item_223536.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'172px',top:'214px'}} id="item223537" className="pageItem " data-src="assets/images/item_223537.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'186px',top:'212px'}} id="item223538" className="pageItem " data-src="assets/images/item_223538.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'162px',top:'162px'}} id="item223539" className="pageItem " data-src="assets/images/item_223539.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'168px',top:'144px'}} id="item223540" className="pageItem " data-src="assets/images/item_223540.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'212px',top:'141px'}} id="item223541" className="pageItem " data-src="assets/images/item_223541.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'223px',top:'193px'}} id="item223542" className="pageItem " data-src="assets/images/item_223542.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'226px',top:'193px'}} id="item223543" className="pageItem " data-src="assets/images/item_223543.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'230px',top:'197px'}} id="item223544" className="pageItem " data-src="assets/images/item_223544.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'226px',top:'193px'}} id="item223545" className="pageItem " data-src="assets/images/item_223545.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'223px',top:'193px'}} id="item223546" className="pageItem " data-src="assets/images/item_223546.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'236px',top:'193px'}} id="item223547" className="pageItem " data-src="assets/images/item_223547.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'201px',top:'230px'}} id="item223548" className="pageItem " data-src="assets/images/item_223548.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'106px',top:'163px'}} id="item223549" className="pageItem " data-src="assets/images/item_223549.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'109px',top:'248px'}} id="item223550" className="pageItem " data-src="assets/images/item_223550.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'102px',top:'158px'}} id="item223551" className="pageItem " data-src="assets/images/item_223551.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'102px',top:'248px'}} id="item223552" className="pageItem " data-src="assets/images/item_223552.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'149px',top:'163px'}} id="item223553" className="pageItem " data-src="assets/images/item_223553.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'131px',top:'240px'}} id="item223554" className="pageItem " data-src="assets/images/item_223554.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'137px',top:'260px'}} id="item223555" className="pageItem " data-src="assets/images/item_223555.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'957px',top:'669px'}} id="item223558" className="pageItem " data-src="assets/images/item_223558.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'347px',top:'14px'}} id="item223560" className="pageItem " data-src="assets/images/item_223560.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'340px',top:'7px'}} id="item223561" className="pageItem " data-src="assets/images/item_223561.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'384px',top:'40px'}} id="item223562" className="pageItem " data-src="assets/images/item_223562.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'416px',top:'61px'}} id="item223563" className="pageItem " data-src="assets/images/item_223563.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'448px',top:'40px'}} id="item223564" className="pageItem " data-src="assets/images/item_223564.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'480px',top:'83px'}} id="item223565" className="pageItem " data-src="assets/images/item_223565.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'512px',top:'60px'}} id="item223566" className="pageItem " data-src="assets/images/item_223566.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1304px',top:'385px'}} id="item223567" className="pageItem " data-src="assets/images/item_223567.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1298px',top:'379px'}} id="item223568" className="pageItem " data-src="assets/images/item_223568.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1329px',top:'424px'}} id="item223569" className="pageItem " data-src="assets/images/item_223569.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1329px',top:'418px'}} id="item223570" className="pageItem " data-src="assets/images/item_223570.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1176px',top:'422px'}} id="item223571" className="pageItem " data-src="assets/images/item_223571.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1221px',top:'465px'}} id="item223572" className="pageItem " data-src="assets/images/item_223572.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1214px',top:'491px'}} id="item223573" className="pageItem " data-src="assets/images/item_223573.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1129px',top:'433px'}} id="item223574" className="pageItem " data-src="assets/images/item_223574.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1143px',top:'465px'}} id="item223575" className="pageItem " data-src="assets/images/item_223575.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1148px',top:'634px'}} id="item223576" className="pageItem " data-src="assets/images/item_223576.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1236px',top:'654px'}} id="item223577" className="pageItem " data-src="assets/images/item_223577.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'1151px',top:'654px'}} id="item223579" className="pageItem " data-src="assets/images/item_223579.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'688px',top:'421px'}} id="item223580" className="pageItem " data-src="assets/images/item_223580.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'621px',top:'465px'}} id="item223581" className="pageItem " data-src="assets/images/item_223581.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'634px',top:'490px'}} id="item223582" className="pageItem " data-src="assets/images/item_223582.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'703px',top:'432px'}} id="item223583" className="pageItem " data-src="assets/images/item_223583.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'697px',top:'465px'}} id="item223584" className="pageItem " data-src="assets/images/item_223584.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'631px',top:'633px'}} id="item223585" className="pageItem " data-src="assets/images/item_223585.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'637px',top:'653px'}} id="item223586" className="pageItem " data-src="assets/images/item_223586.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'675px',top:'653px'}} id="item223587" className="pageItem " data-src="assets/images/item_223587.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'426px',top:'498px'}} id="item223588" className="pageItem " data-src="assets/images/item_223588.png" />
                            <div alt="Oval" style={{left:'414px',top:'432px'}} id="item223589" className="pageItem ">
                                <svg version="1.1" width="26" height="26" >
                                    <ellipse cx="11.7" cy="11.7" rx="11.7" ry="11.7" stroke="" strokeWidth="1" fill="#3356a5" />
                                </svg>
                            </div>
                        </div>
                        <img src={blankImage} alt="Polygon" style={{left:'1409px',top:'293px'}} id="item228183" className="pageItem " data-src="assets/images/item_228183.png" />
                        <img src={blankImage} alt="Polygon" style={{left:'1388px',top:'170px'}} id="item228184" className="pageItem " data-src="assets/images/item_228184.png" />
                        <img src={blankImage} data-ani="fadein-228185 0.5s linear 1" data-id="228185" id="item228185" data-hidestart="1" className="pageItem hidden" alt="kasih" style={{left:'754px',top:'512px'}} data-src="assets/images/item_228185.png" />
                        <div data-ani="fadein-228188 0.5s linear 1" data-id="228188" id="item228188" data-hidestart="1" className="pageItem group hidden" alt="terima" style={{left:'691px',top:'317px',width:' 529px',height:'122px'}}>
                            <img src={blankImage} alt="EPSText" style={{top:'6px'}} id="item228186" className="pageItem " data-src="assets/images/item_228186.png" />
                            <img src={blankImage} alt="EPSText" style={{left:'97px'}} id="item228187" className="pageItem " data-src="assets/images/item_228187.png" />
                        </div>
                        <button data-id="222838" name="icon beranda 124" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 124" id="item222838" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item222845" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item222846" className="pageItem " data-src="assets/images/item_222846.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item222847" className="pageItem " data-src="assets/images/item_222847.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item222849" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item222850" className="pageItem " data-src="assets/images/item_222850.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item222851" className="pageItem " data-src="assets/images/item_222851.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item222841" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item222842" className="pageItem " data-src="assets/images/item_222842.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item222843" className="pageItem " data-src="assets/images/item_222843.png" />
                            </div>
                        </button>
                        <button data-id="222867" name="icon next 61" onClick={handleOnClickGoToDaftarPusaka1} aria-label="icon next 61" id="item222867" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item222875" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item222876" className="pageItem " data-src="assets/images/item_222876.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item222878" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item222880" className="pageItem " data-src="assets/images/item_222880.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item222871" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item222872" className="pageItem " data-src="assets/images/item_222872.png" />
                            </div>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default QuizEnd;