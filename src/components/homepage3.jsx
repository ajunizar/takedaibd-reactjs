import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AutoPlayAudio from "./AudioPlayer";
import Navigation from "./navigation";

function Homepage3() {

    const navigate = useNavigate();

    const handleOnClickNext = () => {
        window.location.href = '/beranda-sound';
    };
    //var referrer = document.referrer;
    //console.log("referrer url",referrer);
    const handleOnClickBack = () => {
        window.location.href = '/homepage2';
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    };

    const handleOnClickUlang = (event) => {
        event.preventDefault();
        jQuery("#item263497 audio")[0].currentTime = 0;
        jQuery("#item263497 audio")[0].play();
        go(event,[{n:1,id:1324,act:'play'},{n:1,id:1388,act:'play'},{n:1,id:1353,act:'play'},{n:1,id:1411,act:'play'},{del:1,n:1,id:1433,act:'play'},{del:11,n:1,id:154461,act:'play'},{n:1,id:154486,act:'play'},{n:1,link:1,id:73526,act:'play'},{n:1,link:1,id:126243,act:'play'},{n:1,link:1,id:73537,act:'play'},{n:1,id:73548,act:'play'},{del:4,n:1,id:73397,act:'play'}]);

    };
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
                <li className="page" data-name="4">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:1324,act:'play'},{n:1,id:1353,act:'play'},{n:1,id:1388,act:'play'},{n:1,id:1411,act:'play'},{del:1,n:1,id:1433,act:'play'},{del:11,n:1,id:154461,act:'play'},{n:1,id:154486,act:'play'},{n:1,link:1,id:73526,act:'play'},{n:1,link:1,id:126243,act:'play'},{n:1,link:1,id:73537,act:'play'},{n:1,id:73548,sn:1,act:'play'},{del:4,n:1,id:73397,act:'play'}], 'pageload');" style={{width:'1920px',height:'1080px'}}>
                        <div id="item1304" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <img src={blankImage} data-ani="flyinfromright-1324 1s cubic-bezier(.2,.6,.35,1) 1" data-id="1324" id="item1324" data-hidestart="1" className="pageItem hidden" alt="Polygon" style={{left:'1194px',top:'-790px'}} data-src="assets/images/item_1324.png" />
                        <div data-ani="flyinfromright-154461 1s cubic-bezier(.2,.6,.35,1) 1" data-id="154461" id="item154461" data-hidestart="1" className="pageItem group hidden" alt="keterangan tombol" style={{left:'1387px',top:'211px',width: '435px',height:'452px'}}>
                            <div id="item154462" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Keterangan Tombol" style={{left:'46px',top:'19px '}} id="item154463" className="pageItem " data-src="assets/images/item_154463.png" />
                        </div>
                        <div data-ani="fadein-154486 1s linear 1" data-id="154486" id="item154486" data-hidestart="1" className="pageItem group hidden" alt="tombol2" style={{left:'1449px',top:'286px',width: '335px',height:'353px '}}>
                            <img src={blankImage} alt="Beranda" style={{left:'113px',top:'207px '}} id="item154487" className="pageItem " data-src="assets/images/item_154487.png" />
                            <img src={blankImage} alt="Halaman sebelumnya" style={{left:'114px',top:'6px '}} id="item154510" className="pageItem " data-src="assets/images/item_154510.png" />
                            <img src={blankImage} alt="Halaman berikutnya" style={{left:'114px',top:'100px '}} id="item154533" className="pageItem " data-src="assets/images/item_154533.png" />
                            <img src={blankImage} alt="Ulang Halaman" style={{left:'114px',top:'280px '}} id="item154556" className="pageItem " data-src="assets/images/item_154556.png" />
                            <div alt="icon ulang" style={{top:'271px '}} id="item154580" className="pageItem group ">
                                <div alt="Oval" id="item154581" className="pageItem ">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="86" height="84">
                                        <ellipse cx="41.53" cy="40.86" rx="41.53" ry="40.86" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <div alt="Group" style={{left:'14px',top:'16px'}} id="item154582" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'24px'}} id="item154583" className="pageItem " data-src="assets/images/item_154583.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'5px'}} id="item154584" className="pageItem " data-src="assets/images/item_154584.png" />
                                </div>
                            </div>
                            <div alt="icon back" id="item154585" className="pageItem group ">
                                <div alt="Oval" id="item154586" className="pageItem ">
                                    <svg version="1.1" width="86" height="84">
                                        <ellipse cx="41.53" cy="40.86" rx="41.53" ry="40.86" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'25px',top:'17px '}} id="item154587" className="pageItem " data-src="assets/images/item_154587.png" />
                            </div>
                            <div alt="iconnext" style={{left:'1px',top:'90px'}} id="item154588" className="pageItem group ">
                                <div alt="Oval" id="item154589" className="pageItem ">
                                    <svg version="1.1" width="86" height="84">
                                        <ellipse cx="41.53" cy="40.86" rx="41.53" ry="40.86" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'28px',top:'17px '}} id="item154590" className="pageItem " data-src="assets/images/item_154590.png" />
                            </div>
                            <div alt="icon beranda" style={{top:'181px '}} id="item154591" className="pageItem group ">
                                <div alt="Oval" id="item154592" className="pageItem ">
                                    <svg version="1.1" width="86" height="84">
                                        <ellipse cx="41.53" cy="40.86" rx="41.53" ry="40.86" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px '}} id="item154594" className="pageItem " data-src="assets/images/item_154594.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'22px '}} id="item154595" className="pageItem " data-src="assets/images/item_154595.png" />
                            </div>
                        </div>
                        <button data-ani="fadein-73526 0.2s linear 1" data-id="73526" id="item73526" data-hidestart="1" className="pageItem has-on has-down hidden" name="icon beranda" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item73496" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#ffffff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px '}} id="item73497" className="pageItem " data-src="assets/images/item_73497.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px '}} id="item73498" className="pageItem " data-src="assets/images/item_73498.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item73529" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#ffffff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px '}} id="item73530" className="pageItem " data-src="assets/images/item_73530.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px '}} id="item73531" className="pageItem " data-src="assets/images/item_73531.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item73533" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px '}} id="item73535" className="pageItem " data-src="assets/images/item_73535.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px '}} id="item73534" className="pageItem " data-src="assets/images/item_73534.png" />
                            </div>
                        </button>
                        <button data-ani="fadein-73537 0.2s linear 1" data-id="73537" id="item73537" data-hidestart="1" className="pageItem has-down has-on hidden" name="icon back" onClick={handleOnClickBack} aria-label="icon back">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item73517" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#ffffff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px '}} id="item73518" className="pageItem " data-src="assets/images/item_73518.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item73540" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px '}} id="item73541" className="pageItem " data-src="assets/images/item_73541.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item73543" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#ffffff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px '}} id="item73544" className="pageItem " data-src="assets/images/item_73544.png" />
                            </div>
                        </button>
                        <button data-ani="fadein-73548 0.2s linear 1" data-id="73548" id="item73548" data-hidestart="1" className="pageItem has-down has-on hidden" name="icon next" onClick={handleOnClickNext} aria-label="icon next">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item73520" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#ffffff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px '}} id="item73521" className="pageItem " data-src="assets/images/item_73521.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item73551" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px '}} id="item73552" className="pageItem " data-src="assets/images/item_73552.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item73554" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#ffffff" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px '}} id="item73555" className="pageItem " data-src="assets/images/item_73555.png" />
                            </div>
                        </button>
                        <button data-ani="fadein-126243 0.2s linear 1" data-id="126243" id="item126243" data-hidestart="1" className="pageItem has-down has-on hidden" name="icon ulang" onClick={handleOnClickUlang} aria-label="icon ulang">
                            <div className="pageItem state btn-off">
                                <div id="item126235" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:'67px',height:'67px'}} id="item126236" className="pageItem ">
                                        <svg version="1.1" width="68" height="68">
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#fff" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126237" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126238" className="pageItem " data-src="assets/images/item_126238.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126240" className="pageItem " data-src="assets/images/item_126240.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item126245" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:'67px',height:'67px'}} id="item126246" className="pageItem ">
                                        <svg version="1.1" width="68" height="68">
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#fa635e" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126247" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126248" className="pageItem " data-src="assets/images/item_126248.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126250" className="pageItem " data-src="assets/images/item_126250.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item126252" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width: '67px',height:'67px '}} id="item126253" className="pageItem ">
                                        <svg version="1.1" width="68" height="68">
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#fff" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126254" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126255" className="pageItem " data-src="assets/images/item_126255.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126256" className="pageItem " data-src="assets/images/item_126256.png" />
                                </div>
                            </div>
                        </button>
                        <img src={blankImage} data-ani="flyinfromleft-1353 1s cubic-bezier(.2,.6,.35,1) 1" data-id="1353" id="item1353" data-hidestart="1" className="pageItem hidden" alt="Rectangle" style={{left:'-54px',top:'286px'}} data-src="assets/images/item_1353.png" />
                        <div alt="Group" style={{left:'1692px',top:'58px'}} id="item1364" className="pageItem group ">
                            <img src={blankImage} alt="Polygon" id="item1365" className="pageItem " data-src="assets/images/item_1365.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'14px',top:'2px'}} id="item1366" className="pageItem " data-src="assets/images/item_1366.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'25px',top:'17px'}} id="item1367" className="pageItem " data-src="assets/images/item_1367.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'35px',top:'17px'}} id="item1368" className="pageItem " data-src="assets/images/item_1368.png" />
                        </div>
                        <img src={blankImage} data-ani="fadein-1388 1s linear 1" data-id="1388" id="item1388" data-hidestart="1" className="pageItem hidden" alt="Introduksi" style={{left:'95px',top:'155px '}} data-src="assets/images/item_1388.png" />
                        <img src={blankImage} data-ani="zoomin2d-1411 0.5s linear 1" data-id="1411" id="item1411" data-hidestart="1" className="pageItem hidden" alt="Selamat Datang!" style={{left:'910px',top:'525px'}} data-src="assets/images/item_1411.png" />
                        <img src={blankImage} data-ani="fadein-1433 1s linear 1" data-id="1433" id="item1433" data-hidestart="1" className="pageItem hidden" alt="Modul ini merupakan modul interaktif, dimana kamu dapat memilih topik yang ingin kamu pelajari dengan meng klik judul..." style={{left:'910px',top:'653px'}} data-src="assets/images/item_1433.png" />
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item1555" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item1575" className="pageItem " data-src="assets/images/item_1575.png" />
                            <div alt="Group" style={{top:'132px '}} id="item1578" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item1579" className="pageItem " data-src="assets/images/item_1579.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item1580" className="pageItem " data-src="assets/images/item_1580.png" />
                            </div>
                        </div>
                        <div id="item73339" className="pageItem" style={{height:'60px',width:'60px',left:'801px',top:'130px'}} alt="Sound">
                            <audio data-id="73339" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 3-1.mp3" />
                            </audio>
                        </div>
                        <div id="item73346" className="pageItem" style={{height:'60px',width:'60px',left:'871px',top:'160px '}} alt="Sound">
                            <audio data-id="73346" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 3-2 (2).mp3" />
                            </audio>
                        </div>
                        <div id="item73357" className="pageItem" style={{height:'60px',width:'60px',left:'767px',top:'144px '}} alt="Sound">
                            <audio data-id="73357" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 3-4.mp3" />
                            </audio>
                        </div>
                        <div id="item73365" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item73373" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item73378" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item73383" className="pageItem" style={{height:'60px',width:'60px',left:'932px',top:'37px'}} alt="Sound">
                            <audio data-id="73383" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 3-8.mp3" />
                            </audio>
                        </div>
                        <button data-ani="zoomin2d-73397 1s linear 1" data-id="73397" id="item73397" data-hidestart="1" className="pageItem has-down has-on hidden" name="mulai" onClick={handleOnClickNext} aria-label="mulai">
                            <div className="pageItem state btn-off">
                                <div id="item1592" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Mulai" style={{left:'39px',top:'22px'}} id="item1612" className="pageItem " data-src="assets/images/item_1612.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item73400" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Mulai" style={{left:'39px',top:'22px'}} id="item73401" className="pageItem " data-src="assets/images/item_73401.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item73425" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Mulai" style={{left:'39px',top:'22px'}} id="item73426" className="pageItem " data-src="assets/images/item_73426.png" />
                            </div>
                        </button>
                        <div id="item73351" className="pageItem" style={{height:'60px',width:'60px',left:'787px',top:'185px'}} alt="Sound">
                            <audio data-id="73351" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 3-3.mp3" />
                            </audio>
                        </div>
                        <div id="item263497" className="pageItem" style={{height:'60px',width:'60px',left:'834px',top:'49px'}} alt="Sound">
                            <audio data-id="263497" className="mejs-no-controls" data-autoplay="1" data-autodelay="0" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 3 FULL.mp3" />
                            </audio>
                        </div>
                        <div id="item73387" alt="Rectangle" className="pageItem ">&nbsp;</div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Homepage3;