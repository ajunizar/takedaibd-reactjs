import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Bab2P3() {

    const navigate = useNavigate();

    const handleOnClickGoToBab1 = () => {
        window.location.href = '/bab1-start';
    };
    //var referrer = document.referrer;
    //console.log("referrer url",referrer);
    const handleOnClickUlang = (event) => {
        event.preventDefault();
        jQuery("#item263667 audio")[0].currentTime = 0;
        jQuery("#item263667 audio")[0].play();
        go(event,[{n:1,id:4889,act:'play'},{del:3,n:1,id:5421,act:'play'},{del:6,n:1,id:4981,act:'play'},{n:1,id:5003,act:'play'},{n:1,id:144466,act:'play'},{del:1,n:1,id:144936,act:'play'},{del:6,n:1,id:151135,act:'play'},{del:2.5,n:1,id:144935,act:'play'},{del:4.5,n:1,id:144934,act:'play'},{del:7,n:1,id:144933,act:'play'},{del:5,n:1,id:144932,act:'play'},{del:5,n:1,id:144931,act:'play'},{del:1.5,n:1,id:144939,act:'play'},{del:3,n:1,id:144930,act:'play'},{del:5,n:1,id:144929,act:'play'},{del:4,n:1,id:144928,act:'play'}]);
    };

    const handleOnClickPreviousPage = () => {
        window.location.href = '/bab2-p2';
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }

    const handleOnClickNextPage = (event) => {
        window.location.href = '/bab2-p4';
    }


    return (
        <div >
            <ul className="pages" id="slider">
                <li className="page" data-name="11">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:4889,act:'play'},{del:3,n:1,id:5421,act:'play'},{del:1,n:1,id:11111,act:'play'},{del:4,n:1,id:4981,act:'play'},{n:1,id:5003,act:'play'},{n:1,id:144466,act:'play'},{del:1,n:1,id:144936,act:'play'},{del:5,n:1,id:151135,act:'play'},{del:2.5,n:1,id:144935,act:'play'},{del:4.5,n:1,id:144934,act:'play'},{del:6,n:1,id:144933,act:'play'},{del:4,n:1,id:144932,act:'play'},{del:4,n:1,id:144931,act:'play'},{del:1.5,n:1,id:144939,act:'play'},{del:3,n:1,id:144930,act:'play'},{del:5,n:1,id:144929,act:'play'},{del:4,n:1,id:144928,act:'play'}], 'pageload');" style={{width:'1920px',height:'1080px'}}>
                        <div id="item144466" data-ani="flyinfromleft-144466 1s cubic-bezier(.2,.6,.35,1) 1" data-id="144466" data-hidestart="1" className="pageItem hidden" alt="1 block">&nbsp;</div>
                        <div data-ani="flyinfromleft-151135 1s cubic-bezier(.2,.6,.35,1) 1" data-id="151135" id="item151135" data-hidestart="1" className="pageItem group hidden" alt="5 block" style={{left:'678px',top:'324px',width:' 1142px',height:'353px'}}>
                            <div id="item144662" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <div id="item144514" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <div id="item144564" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <div id="item144711" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <div id="item144759" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        </div>
                        <div data-ani="flyinfromleft-144939 1s ease-in-out 1" data-id="144939" id="item144939" data-hidestart="1" className="pageItem group hidden" alt="3 block" style={{left:'678px',top:'684px',width:' 1142px',height:'208px'}}>
                            <div id="item144613" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <div id="item144807" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <div id="item144855" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        </div>
                        <img src={blankImage} alt="Polygon" style={{left:'-692px',top:'-423px'}} id="item4850" className="pageItem " data-src="assets/images/item_4850.png" />
                        <div id="item146809" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <Navigation />
                        <img src={blankImage} data-ani="fadein-5003 1s ease-in-out 1" data-id="5003" id="item5003" data-hidestart="1" className="pageItem hidden" alt="Jumlah Responden" style={{left:'1550px',top:'198px'}} data-src="assets/images/item_5003.png" />
                        <img src={blankImage} data-ani="fadein-4889 1s linear 1" data-id="4889" id="item4889" data-hidestart="1" className="pageItem hidden" alt="Dampak IBD terhadap Kehidupan Penderitanya9" style={{left:'97px',top:'277px'}} data-src="assets/images/item_4889.png" />
                        <img src={blankImage} alt="Bab 2" style={{left:'102px',top:'202px'}} id="item4911" className="pageItem " data-src="assets/images/item_4911.png" />
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item4936" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item4956" className="pageItem " data-src="assets/images/item_4956.png" />
                            <div alt="Group" style={{top:'132px'}} id="item4959" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item4960" className="pageItem " data-src="assets/images/item_4960.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item4961" className="pageItem " data-src="assets/images/item_4961.png" />
                            </div>
                        </div>
                        <img src={blankImage} data-ani="fadein-4981 1s ease-in-out 1" data-id="4981" id="item4981" data-hidestart="1" className="pageItem hidden" alt="Respons Peserta" style={{left:'710px',top:'198px'}} data-src="assets/images/item_4981.png" />
                        <img src={blankImage} data-ani="fadein-5421 1s linear 1" data-id="5421" id="item5421" data-hidestart="1" className="pageItem hidden" alt="Tujuan survei ini adalah untuk mendapatkan perspektif secara internasional mengenai dampak IBD terhadap kehidupan pas..." style={{left:'100px',top:'588px'}} data-src="assets/images/item_5421.png" />
                        <div data-ani="fadein-11111 0.5s ease-in-out 1" data-id="11111" id="item11111" data-hidestart="1" className="pageItem hidden" alt="Sound123" style={{width:'0px',height:'0px'}}>
                        Survei online diselesaikan oleh 4670 pasien IBD dari 25 negara (terinklusi dalam penelitian). Diantaranya 62% responden menderita PC, 33% KU, 
                        dan sisanya adalah IBD tipe lain atau diagnosis belum terkonfirmasi. Responden : 66% Perempuan, 33% laki-laki, dan sisanya tidak menyatakan. 
                        Mayoritas responden berusia 25-44 tahun.
                        </div>
                        <div data-ani="fadein-144930 0.5s ease-in-out 1" data-id="144930" id="item144930" data-hidestart="1" className="pageItem group hidden" alt="7" style={{left:'707px',top:'697px',width:' 1077px',height:'30px'}}>
                            <img src={blankImage} alt="Merasa bahwa IBD secara negatif memengaruhi performa dalam pendidikan" style={{top:'4px'}} id="item144615" className="pageItem " data-src="assets/images/item_144615.png" />
                            <img src={blankImage} alt="45%" style={{left:'989px'}} id="item144638" className="pageItem " data-src="assets/images/item_144638.png" />
                        </div>
                        <div data-ani="fadein-144928 0.5s ease-in-out 1" data-id="144928" id="item144928" data-hidestart="1" className="pageItem group hidden" alt="9" style={{left:'707px',top:'840px',width:' 1077px',height:'30px'}}>
                            <img src={blankImage} alt="Kehilangan pekerjaan atau harus berhenti dari pekerjaan karena IBD " style={{top:'4px'}} id="item144856" className="pageItem " data-src="assets/images/item_144856.png" />
                            <img src={blankImage} alt="31%" style={{left:'989px'}} id="item144880" className="pageItem " data-src="assets/images/item_144880.png" />
                        </div>
                        <div data-ani="fadein-144929 0.5s ease-in-out 1" data-id="144929" id="item144929" data-hidestart="1" className="pageItem group hidden" alt="8" style={{left:'707px',top:'769px',width:' 1077px',height:'30px'}}>
                            <img src={blankImage} alt="Merasa bahwa IBD menghalangi penderitanya dalam membangun suatu hubungan erat" style={{top:'4px'}} id="item144808" className="pageItem " data-src="assets/images/item_144808.png" />
                            <img src={blankImage} alt="35%" style={{left:'989px'}} id="item144831" className="pageItem " data-src="assets/images/item_144831.png" />
                        </div>             
                        <div id="item85357" className="pageItem" style={{height:'60px',width:'60px',left:'846px',top:'1002px'}} alt="Sound">
                            <audio data-id="85357" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 10-1.mp3" />
                            </audio>
                        </div>
                        <div data-ani="fadein-144932 0.5s ease-in-out 1" data-id="144932" id="item144932" data-hidestart="1" className="pageItem group hidden" alt="5" style={{left:'707px',top:'552px',width:' 1077px',height:'30px'}}>
                            <img src={blankImage} alt="Merasa stres atau tertekan untuk meninggalkan pekerjaan akibat IBD" style={{top:'4px'}} id="item144517" className="pageItem " data-src="assets/images/item_144517.png" />
                            <img src={blankImage} alt="60%" style={{left:'989px'}} id="item144540" className="pageItem " data-src="assets/images/item_144540.png" />
                        </div>
                        <div data-ani="fadein-144931 0.5s ease-in-out 1" data-id="144931" id="item144931" data-hidestart="1" className="pageItem group hidden" alt="6" style={{left:'707px',top:'625px',width:' 1077px',height:'30px'}}>
                            <img src={blankImage} alt="Merasa bahwa IBD mempengaruhi karir mereka" style={{top:'4px'}} id="item144712" className="pageItem " data-src="assets/images/item_144712.png" />
                            <img src={blankImage} alt="56%" style={{left:'989px'}} id="item144735" className="pageItem " data-src="assets/images/item_144735.png" />
                        </div>
                        <div id="item85364" className="pageItem" style={{height:'60px',width:'60px',left:'906px',top:'1002px'}} alt="Sound">
                            <audio data-id="85364" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 10-2.mp3" />
                            </audio>
                        </div>
                        <div id="item85369" className="pageItem" style={{height:'60px',width:'60px',left:'966px',top:'1002px'}} alt="Sound">
                            <audio data-id="85369" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 10-3.mp3" />
                            </audio>
                        </div>
                        <div id="item85377" className="pageItem" style={{height:'60px',width:'60px',left:'1036px',top:'1002px'}} alt="Sound">
                            <audio data-id="85377" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 10-4.mp3" />
                            </audio>
                        </div>
                        <div id="item85382" className="pageItem" style={{height:'60px',width:'60px',left:'1104px',top:'1014px'}} alt="Sound">
                            <audio data-id="85382" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 10-5.mp3" />
                            </audio>
                        </div>
                        <div data-ani="fadein-144934 0.5s ease-in-out 1" data-id="144934" id="item144934" data-hidestart="1" className="pageItem group hidden" alt="3" style={{left:'707px',top:'408px',width:' 1077px',height:'30px'}}>
                            <img src={blankImage} alt="Mengunjungi instalasi gawat darurat ≥1 kali antara gejala pertama dan terbukti terdiagnosis IBD" style={{top:'4px'}} id="item144565" className="pageItem " data-src="assets/images/item_144565.png" />
                            <img src={blankImage} alt="67%" style={{left:'989px'}} id="item144588" className="pageItem " data-src="assets/images/item_144588.png" />
                        </div>
                        <div id="item85390" className="pageItem" style={{height:'60px',width:'60px',left:'1178px',top:'1014px'}} alt="Sound">
                            <audio data-id="85390" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 10-6.mp3" />
                            </audio>
                        </div>
                        <div data-ani="fadein-144933 0.5s ease-in-out 1" data-id="144933" id="item144933" data-hidestart="1" className="pageItem group hidden" alt="4" style={{left:'707px',top:'481px',width:' 1077px',height:'30px'}}>
                            <img src={blankImage} alt="Seringkali mempertimbangkan ketersediaan toilet saat menghadiri suatu acara" style={{top:'4px'}} id="item144760" className="pageItem " data-src="assets/images/item_144760.png" />
                            <img src={blankImage} alt="67%" style={{left:'989px'}} id="item144783" className="pageItem " data-src="assets/images/item_144783.png" />
                        </div>
                        <div data-ani="fadein-144936 0.5s linear 1" data-id="144936" id="item144936" data-hidestart="1" className="pageItem group hidden" alt="1" style={{left:'707px',top:'264px',width:' 1077px',height:'30px'}}>
                            <img src={blankImage} alt="Menjalankan perawatan di rumah sakit 5 tahun terakhir" style={{top:'4px'}} id="item144467" className="pageItem " data-src="assets/images/item_144467.png" />
                            <img src={blankImage} alt="85%" style={{left:'989px'}} id="item144490" className="pageItem " data-src="assets/images/item_144490.png" />
                        </div>
                        <div data-ani="fadein-144935 0.5s ease-in-out 1" data-id="144935" id="item144935" data-hidestart="1" className="pageItem group hidden" alt="2" style={{left:'707px',top:'336px',width:' 1077px',height:'30px'}}>
                            <img src={blankImage} alt="Absen bekerja akibat IBD setahun terakhir" style={{top:'4px'}} id="item144664" className="pageItem " data-src="assets/images/item_144664.png" />
                            <img src={blankImage} alt="75%" style={{left:'989px'}} id="item144687" className="pageItem " data-src="assets/images/item_144687.png" />
                        </div>
                        <div id="item263667" className="pageItem" style={{height:'60px',width:'60px',left:'864px',top:'1002px'}} alt="Sound">
                            <audio data-id="263667" className="mejs-no-controls" data-autoplay="1" data-autodelay="0" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 10 FULL.mp3" />
                            </audio>
                        </div>
                        {/*<div id="item85398" alt="Rectangle" className="pageItem ">&nbsp;</div>*/}
                        <button data-id="102102" name="icon back 9" onClick={handleOnClickPreviousPage} aria-label="icon back 9" id="item102102" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item102109" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item102110" className="pageItem " data-src="assets/images/item_102110.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item102112" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item102113" className="pageItem " data-src="assets/images/item_102113.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item102105" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item102107" className="pageItem " data-src="assets/images/item_102107.png" />
                            </div>
                        </button>
                        <button data-id="102115" name="icon next 9" onClick={handleOnClickNextPage} aria-label="icon next 9" id="item102115" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item102121" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item102122" className="pageItem " data-src="assets/images/item_102122.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item102124" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item102126" className="pageItem " data-src="assets/images/item_102126.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item102118" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item102119" className="pageItem " data-src="assets/images/item_102119.png" />
                            </div>
                        </button>
                        <button data-id="126573" name="button ulang 9" onClick={handleOnClickUlang} aria-label="button ulang 9" id="item126573" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item126585" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126586" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126587" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126588" className="pageItem " data-src="assets/images/item_126588.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126589" className="pageItem " data-src="assets/images/item_126589.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item126591" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126592" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#fa635e" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126594" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126595" className="pageItem " data-src="assets/images/item_126595.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126597" className="pageItem " data-src="assets/images/item_126597.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item126576" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126577" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126580" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126581" className="pageItem " data-src="assets/images/item_126581.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126583" className="pageItem " data-src="assets/images/item_126583.png" />
                                </div>
                            </div>
                        </button>
                        <button data-id="221223" name="icon beranda 75" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 75" id="item221223" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item221230" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221231" className="pageItem " data-src="assets/images/item_221231.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221232" className="pageItem " data-src="assets/images/item_221232.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item221234" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221235" className="pageItem " data-src="assets/images/item_221235.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221236" className="pageItem " data-src="assets/images/item_221236.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item221226" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item221227" className="pageItem " data-src="assets/images/item_221227.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item221228" className="pageItem " data-src="assets/images/item_221228.png" />
                            </div>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Bab2P3;