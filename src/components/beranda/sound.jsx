import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
//import Navigation from "./navigation";

function BerandaSound() {

    const navigate = useNavigate();

    /*const handleOnClickNext = () => {
        window.location.href = '/';
    };*/
    //var referrer = document.referrer;
    //console.log("referrer url",referrer);
    const handleOnClickPageBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    };

    const handleOnClickGoToBab1 = () => {
        window.location.href = '/bab1-start';
    };

    const handleOnClickGoToBab2 = () => {
        window.location.href = '/bab2-start';
    };

    const handleOnClickGoToBab3 = () => {
        window.location.href = '/bab3-start';
    };

    const handleOnClickGoToBab4 = () => {
        window.location.href = '/bab4-start';
    };

    const handleOnClickGoToBab5 = () => {
        window.location.href = '/bab5-start';
    };

    const handleOnClickGoToBab6 = () => {
        window.location.href = '/bab5-p11';
    };
    
    const handleOnClickGoToSelamatDatang = () => {
        window.location.href = '/selamat-datang';
    };
    
    
    const handleOnClickUlang = (event) => {
        event.preventDefault();
        jQuery("#item263507 audio")[0].currentTime = 0;
        jQuery("#item263507 audio")[0].play();
        go(event,[{n:1,id:1647,act:'play'},{n:1,id:1674,act:'play'},{n:1,id:72691,act:'play'},{n:1,id:72793,act:'play'},{n:1,id:72905,act:'play'},{n:1,id:73010,act:'play'},{n:1,id:73108,act:'play'},{n:1,id:73234,act:'play'}]);
    };

    return (
        <div >
            <ul className="pages" id="slider">
                <li className="page" data-name="5">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:1647,act:'play'},{n:1,id:1674,act:'play'},{n:1,id:72691,act:'play'},{n:1,id:72793,act:'play'},{n:1,id:72905,act:'play'},{n:1,id:73010,act:'play'},{n:1,id:73108,act:'play'},{n:1,id:73234,act:'play'}], 'pageload');" style={{width:'1920px',height:'1080px'}}>
                        <img src={blankImage} data-ani="flyinfromleft-1647 1s cubic-bezier(.2,.6,.35,1) 1" data-id="1647" id="item1647" data-hidestart="1" className="pageItem hidden" alt="Polygon" style={{left:'-615px',top:'-1251px'}} data-src="assets/images/item_1647.png" />
                        <div alt="Group" style={{left:'1692px',top:'58px'}} id="item1650" className="pageItem group ">
                            <img src={blankImage} alt="Polygon" id="item1651" className="pageItem " data-src="assets/images/item_1651.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'14px',top:'2px'}} id="item1652" className="pageItem " data-src="assets/images/item_1652.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'25px',top:'17px'}} id="item1653" className="pageItem " data-src="assets/images/item_1653.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'35px',top:'17px'}} id="item1654" className="pageItem " data-src="assets/images/item_1654.png" />
                        </div>
                        <img src={blankImage} data-ani="fadein-1674 1s linear 1" data-id="1674" id="item1674" data-hidestart="1" className="pageItem hidden" alt="Beranda" style={{left:'97px',top:'100px'}} data-src="assets/images/item_1674.png" />
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item1707" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item1727" className="pageItem " data-src="assets/images/item_1727.png" />
                            <div alt="Group" style={{top:'132px'}} id="item1730" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item1731" className="pageItem " data-src="assets/images/item_1731.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item1732" className="pageItem " data-src="assets/images/item_1732.png" />
                            </div>
                        </div>
                        <div alt="Group" style={{left:'1753px',top:'980px'}} id="item1733" className="pageItem group ">
                            <div alt="Oval" id="item1734" className="pageItem ">
                                <svg version="1.1" width="70" height="70" >
                                    <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                </svg>
                            </div>
                            <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item1735" className="pageItem " data-src="assets/images/item_1735.png" />
                        </div>
                        <div alt="Group" style={{left:'1667px',top:'980px'}} id="item1736" className="pageItem group ">
                            <div alt="Oval" id="item1737" className="pageItem ">
                                <svg version="1.1" width="70" height="70" >
                                    <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                </svg>
                            </div>
                            <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item1738" className="pageItem " data-src="assets/images/item_1738.png" />
                        </div>
                        <div alt="Group" style={{left:'1581px',top:'980px'}} id="item1739" className="pageItem group ">
                            <div alt="Oval" id="item1740" className="pageItem ">
                                <svg version="1.1" width="70" height="70" >
                                    <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                </svg>
                            </div>
                            <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item1741" className="pageItem " data-src="assets/images/item_1741.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item1742" className="pageItem " data-src="assets/images/item_1742.png" />
                        </div>
                        <button data-ani="zoomin2d-72691 1s linear 1" data-id="72691" id="item72691" data-hidestart="1" className="pageItem has-down has-on hidden" name="bab 1" onClick={handleOnClickGoToBab1} aria-label="bab 1">
                            <div className="pageItem state btn-off">
                                <div id="item1743" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 1" style={{left:'46px',top:'40px'}} id="item1768" className="pageItem " data-src="assets/images/item_1768.png" />
                                <img src={blankImage} alt="Definisi & Karakteristik IBD" style={{left:'46px',top:'81px'}} id="item1900" className="pageItem " data-src="assets/images/item_1900.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item72695" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 1" style={{left:'46px',top:'40px'}} id="item72696" className="pageItem " data-src="assets/images/item_72696.png" />
                                <img src={blankImage} alt="Definisi & Karakteristik IBD" style={{left:'46px',top:'81px'}} id="item72719" className="pageItem " data-src="assets/images/item_72719.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item72745" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 1" style={{left:'46px',top:'40px'}} id="item72746" className="pageItem " data-src="assets/images/item_72746.png" />
                                <img src={blankImage} alt="Definisi & Karakteristik IBD" style={{left:'46px',top:'81px'}} id="item72769" className="pageItem " data-src="assets/images/item_72769.png" />
                            </div>
                        </button>
                        <button data-ani="zoomin2d-72905 1s linear 1" data-id="72905" id="item72905" data-hidestart="1" className="pageItem has-down has-on hidden" name="bab 3" onClick={handleOnClickGoToBab3} aria-label="bab 3">
                            <div className="pageItem state btn-off">
                                <div id="item1747" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 3" style={{left:'46px',top:'42px'}} id="item1856" className="pageItem " data-src="assets/images/item_1856.png" />
                                <img src={blankImage} alt="Etiologi & Patofisiologi IBD" style={{left:'46px',top:'83px'}} id="item1922" className="pageItem " data-src="assets/images/item_1922.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item72908" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 3" style={{left:'46px',top:'42px'}} id="item72909" className="pageItem " data-src="assets/images/item_72909.png" />
                                <img src={blankImage} alt="Etiologi & Patofisiologi IBD" style={{left:'46px',top:'83px'}} id="item72932" className="pageItem " data-src="assets/images/item_72932.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item72956" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 3" style={{left:'46px',top:'42px'}} id="item72957" className="pageItem " data-src="assets/images/item_72957.png" />
                                <img src={blankImage} alt="Etiologi & Patofisiologi IBD" style={{left:'46px',top:'83px'}} id="item72980" className="pageItem " data-src="assets/images/item_72980.png" />
                            </div>
                        </button>
                        <button data-ani="zoomin2d-73108 1s linear 1" data-id="73108" id="item73108" data-hidestart="1" className="pageItem has-down has-on hidden" name="bab 5" onClick={handleOnClickGoToBab5} aria-label="bab 5">
                            <div className="pageItem state btn-off">
                                <div id="item1745" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 5" style={{left:'46px',top:'42px'}} id="item1812" className="pageItem " data-src="assets/images/item_1812.png" />
                                <img src={blankImage} alt="Diagnosis IBD" style={{left:'46px',top:'83px'}} id="item1944" className="pageItem " data-src="assets/images/item_1944.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item73111" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 5" style={{left:'46px',top:'42px'}} id="item73112" className="pageItem " data-src="assets/images/item_73112.png" />
                                <img src={blankImage} alt="Diagnosis IBD" style={{left:'46px',top:'83px'}} id="item73136" className="pageItem " data-src="assets/images/item_73136.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item73160" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 5" style={{left:'46px',top:'42px'}} id="item73161" className="pageItem " data-src="assets/images/item_73161.png" />
                                <img src={blankImage} alt="Diagnosis IBD" style={{left:'46px',top:'83px'}} id="item73184" className="pageItem " data-src="assets/images/item_73184.png" />
                            </div>
                        </button>
                        <button data-ani="zoomin2d-73010 1s linear 1" data-id="73010" id="item73010" data-hidestart="1" className="pageItem has-down has-on hidden" name="bab 4" onClick={handleOnClickGoToBab4} aria-label="bab 4">
                            <div className="pageItem state btn-off">
                                <div id="item1746" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 4" style={{left:'46px',top:'42px'}} id="item1834" className="pageItem " data-src="assets/images/item_1834.png" />
                                <img src={blankImage} alt="Tanda & Gejala IBD" style={{left:'46px',top:'83px'}} id="item1966" className="pageItem " data-src="assets/images/item_1966.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item73013" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 4" style={{left:'46px',top:'42px'}} id="item73014" className="pageItem " data-src="assets/images/item_73014.png" />
                                <img src={blankImage} alt="Tanda & Gejala IBD" style={{left:'46px',top:'83px'}} id="item73037" className="pageItem " data-src="assets/images/item_73037.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item73061" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 4" style={{left:'46px',top:'42px'}} id="item73062" className="pageItem " data-src="assets/images/item_73062.png" />
                                <img src={blankImage} alt="Tanda & Gejala IBD" style={{left:'46px',top:'83px'}} id="item73085" className="pageItem " data-src="assets/images/item_73085.png" />
                            </div>
                        </button>
                        <button data-ani="zoomin2d-72793 1s linear 1" data-id="72793" id="item72793" data-hidestart="1" className="pageItem has-down has-on hidden" name="bab 2" onClick={handleOnClickGoToBab2} aria-label="bab 2">
                            <div className="pageItem state btn-off">
                                <div id="item1744" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 2" style={{left:'46px',top:'42px'}} id="item1790" className="pageItem " data-src="assets/images/item_1790.png" />
                                <img src={blankImage} alt="Epidemiologi & Dampak IBD" style={{left:'46px',top:'83px'}} id="item1988" className="pageItem " data-src="assets/images/item_1988.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item72795" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 2" style={{left:'46px',top:'42px'}} id="item72796" className="pageItem " data-src="assets/images/item_72796.png" />
                                <img src={blankImage} alt="Epidemiologi & Dampak IBD" style={{left:'46px',top:'83px'}} id="item72819" className="pageItem " data-src="assets/images/item_72819.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item72843" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 2" style={{left:'46px',top:'42px'}} id="item72844" className="pageItem " data-src="assets/images/item_72844.png" />
                                <img src={blankImage} alt="Epidemiologi & Dampak IBD" style={{left:'46px',top:'83px'}} id="item72867" className="pageItem " data-src="assets/images/item_72867.png" />
                            </div>
                        </button>
                        <button data-ani="zoomin2d-73234 1s linear 1" data-id="73234" id="item73234" data-hidestart="1" className="pageItem has-down has-on hidden" name="bab 6" onClick={handleOnClickGoToBab6} aria-label="bab 6">
                            <div className="pageItem state btn-off">
                                <div id="item1748" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 6" style={{left:'46px',top:'42px'}} id="item1878" className="pageItem " data-src="assets/images/item_1878.png" />
                                <img src={blankImage} alt="Tatalaksana IBD" style={{left:'46px',top:'83px'}} id="item2010" className="pageItem " data-src="assets/images/item_2010.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item73237" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 6" style={{left:'46px',top:'42px'}} id="item73238" className="pageItem " data-src="assets/images/item_73238.png" />
                                <img src={blankImage} alt="Tatalaksana IBD" style={{left:'46px',top:'83px'}} id="item73261" className="pageItem " data-src="assets/images/item_73261.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item73285" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 6" style={{left:'46px',top:'42px'}} id="item73286" className="pageItem " data-src="assets/images/item_73286.png" />
                                <img src={blankImage} alt="Tatalaksana IBD" style={{left:'46px',top:'83px'}} id="item73309" className="pageItem " data-src="assets/images/item_73309.png" />
                            </div>
                        </button>
                        <button data-id="73679" name="icon back 3" onClick={handleOnClickGoToSelamatDatang} aria-label="icon back 3" id="item73679" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item73688" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item73689" className="pageItem " data-src="assets/images/item_73689.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item73682" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item73683" className="pageItem " data-src="assets/images/item_73683.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item73691" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item73692" className="pageItem " data-src="assets/images/item_73692.png" />
                            </div>
                        </button>
                        <button data-id="73693" name="icon next 3" onClick={handleOnClickGoToBab1} aria-label="icon next 3" id="item73693" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item73701" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item73702" className="pageItem " data-src="assets/images/item_73702.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item73696" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item73698" className="pageItem " data-src="assets/images/item_73698.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item73704" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item73705" className="pageItem " data-src="assets/images/item_73705.png" />
                            </div>
                        </button>
                        <div id="item98778" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <button data-id="126262" name="button ulang 2" onClick={handleOnClickUlang} aria-label="button ulang 2" id="item126262" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item126273" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126274" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126275" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126276" className="pageItem " data-src="assets/images/item_126276.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126278" className="pageItem " data-src="assets/images/item_126278.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item126265" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126266" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#fa635e" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126268" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126269" className="pageItem " data-src="assets/images/item_126269.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126271" className="pageItem " data-src="assets/images/item_126271.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item126280" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126281" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126282" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126283" className="pageItem " data-src="assets/images/item_126283.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126284" className="pageItem " data-src="assets/images/item_126284.png" />
                                </div>
                            </div>
                        </button>
                        <div id="item144301" className="pageItem" style={{height:'60px',width:'60px',left:'141px',top:'922px'}} alt="Sound">
                            <audio data-id="144301" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 4-1 (2).mp3" />
                            </audio>
                        </div>
                        <div id="item144307" className="pageItem" style={{height:'60px',width:'60px',left:'213px',top:'922px'}} alt="Sound">
                            <audio data-id="144307" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 4-2 (2).mp3" />
                            </audio>
                        </div>
                        <div id="item144313" className="pageItem" style={{height:'60px',width:'60px',left:'293px',top:'922px'}} alt="Sound">
                            <audio data-id="144313" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 4-3 (2).mp3" />
                            </audio>
                        </div>
                        <div id="item144323" className="pageItem" style={{height:'60px',width:'60px',left:'382px',top:'922px'}} alt="Sound">
                            <audio data-id="144323" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 4-4 (2).mp3" />
                            </audio>
                        </div>
                        <button data-id="221125" name="icon beranda 56" onClick={handleOnClickPageBerandaNoSound} aria-label="icon beranda 56" id="item221125" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221132" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221133" className="pageItem " data-src="assets/images/item_221133.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221134" className="pageItem " data-src="assets/images/item_221134.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221136" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221137" className="pageItem " data-src="assets/images/item_221137.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221138" className="pageItem " data-src="assets/images/item_221138.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221128" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221129" className="pageItem " data-src="assets/images/item_221129.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221130" className="pageItem " data-src="assets/images/item_221130.png" />
                            </div>
                        </button>
                        <div id="item263507" className="pageItem" style={{height:'60px',width:'60px',left:'183px',top:'913px'}} alt="Sound">
                            <audio data-id="263507" className="mejs-no-controls" data-autoplay="1" data-autodelay="0">
                                <source type="audio/mp3" src="assets/media/page 4 FULL.mp3" />
                            </audio>
                        </div>
                        <div id="item144345" alt="Rectangle" className="pageItem ">&nbsp;</div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default BerandaSound;