import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AutoPlayAudio from "./AudioPlayer";
import Navigation from "./navigation";

function Homepage2() {

    const navigate = useNavigate();

    const handleOnClickNext = () => {
        window.location.href = '/selamat-datang';
    };
    //var referrer = document.referrer;
    //console.log("referrer url",referrer);
    const handleOnClickBack = () => {
        window.location.href = '/homepage';
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
                <li className="page" data-name="3">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:626,act:'play'},{n:1,id:703,act:'play'},{del:1,n:1,id:681,act:'play'},{del:1,n:1,id:72470,act:'play'},{del:8.5,n:1,id:72471,act:'play'},{del:4.5,n:1,id:72472,act:'play'},{del:6.5,n:1,id:72474,act:'play'},{del:7,n:1,id:72475,act:'play'},{del:2,n:1,id:654,act:'play'},{del:2,n:1,id:72476,act:'play'},{del:3,n:1,id:72477,act:'play'},{del:3,n:1,id:72478,act:'play'},{del:3,n:1,id:72479,act:'play'},{del:2,n:1,id:72480,act:'play'},{del:2,n:1,id:72481,act:'play'},{del:1,n:1,id:72595,act:'play'}], 'pageload');" style={{width:'1920px',height:'1080px'}}>
                        <div id="item606" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <img src={blankImage} data-ani="flyinfromleft-626 1s cubic-bezier(.2,.6,.35,1) 1" data-id="626" id="item626" data-hidestart="1" className="pageItem hidden" alt="Polygon" style={{left:'-78px',top:'-366px'}} data-src="assets/images/item_626.png" />
                        <div alt="Group" style={{left:'1692px',top:'58px'}} id="item630" className="pageItem group ">
                            <img src={blankImage} alt="Polygon" id="item631" className="pageItem " data-src="assets/images/item_631.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'14px ',top:'2px '}} id="item632" className="pageItem " data-src="assets/images/item_632.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'25px ',top:'17px '}} id="item633" className="pageItem " data-src="assets/images/item_633.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'35px ',top:'17px '}} id="item634" className="pageItem " data-src="assets/images/item_634.png" />
                        </div>
                        <div id="item72486" className="pageItem" style={{height:'60px',width:'60px',left:'1374px',top:'969px'}} alt="Sound">
                            <audio data-id="72486" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 2-1.mp3" />
                            </audio>
                        </div>
                        <div id="item72495" className="pageItem" style={{height:'60px',width:'60px',left:'1442px',top:'950px'}} alt="Sound">
                            <audio data-id="72495" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 2-2.mp3" />
                            </audio>
                        </div>
                        <div id="item72504" className="pageItem" style={{height:'60px',width:'60px',left:'1442px',top:'970px'}} alt="Sound">
                            <audio data-id="72504" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 2-3.mp3" />
                            </audio>
                        </div>
                        <div id="item72511" className="pageItem" style={{height:'60px',width:'60px',left:'1298px',top:'940px'}} alt="Sound">
                            <audio data-id="72511" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 2-4.mp3" />
                            </audio>
                        </div>
                        <div id="item72516" className="pageItem" style={{height:'60px',width:'60px',left:'1548px',top:'927px'}} alt="Sound">
                            <audio data-id="72516" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 2-5.mp3" />
                            </audio>
                        </div>
                        <div id="item72521" className="pageItem" style={{height:'60px',width:'60px',left:'1529px',top:'980px'}} alt="Sound">
                            <audio data-id="72521" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 2-6.mp3" />
                            </audio>
                        </div>
                        <div id="item72539" className="pageItem" style={{height:'60px',width:'60px',left:'1548px',top:'910px'}} alt="Sound">
                            <audio data-id="72539" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 2-11.mp3" />
                            </audio>
                        </div>
                        <div id="item72545" className="pageItem" style={{height:'60px',width:'60px',left:'1478px',top:'957px'}} alt="Sound">
                            <audio data-id="72545" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 2-12.mp3" />
                            </audio>
                        </div>
                        <div id="item72550" className="pageItem" style={{height:'60px',width:'60px',left:'1355px',top:'980px'}} alt="Sound">
                            <audio data-id="72550" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 2-13.mp3" />
                            </audio>
                        </div>
                        <div id="item72555" className="pageItem" style={{height:'60px',width:'60px',left:'1508px',top:'960px'}} alt="Sound">
                            <audio data-id="72555" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 2-7.mp3" />
                            </audio>
                        </div>
                        <div id="item72562" className="pageItem" style={{height:'60px',width:'60px',left:'1434px',top:'957px'}} alt="Sound">
                            <audio data-id="72562" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 2-8.mp3" />
                            </audio>
                        </div>
                        <div id="item72571" className="pageItem" style={{height:'60px',width:'60px',left:'1389px',top:'960px'}} alt="Sound">
                            <audio data-id="72571" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 2-9.mp3" />
                            </audio>
                        </div>
                        <div id="item72583" className="pageItem" style={{height:'60px',width:'60px',left:'1298px',top:'1010px'}} alt="Sound">
                            <audio data-id="72583" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 2-10.mp3" />
                            </audio>
                        </div>
                        <img src={blankImage} data-ani="fadein-654 1s linear 1" data-id="654" id="item654" data-hidestart="1" className="pageItem hidden" alt="Materi" style={{left:'1298px ',top:'281px '}} data-src="assets/images/item_654.png" />
                        <img src={blankImage} data-ani="fadein-681 1s linear 1" data-id="681" id="item681" data-hidestart="1" className="pageItem hidden" alt="Objektif" style={{left:'100px ',top:'281px '}} data-src="assets/images/item_681.png" />
                        <img src={blankImage} data-ani="fadein-703 1s linear 1" data-id="703" id="item703" data-hidestart="1" className="pageItem hidden" alt="Garis Besar" style={{left:'100px ',top:'132px '}} data-src="assets/images/item_703.png" />
                        <div data-ani="flyinfromright-72476 1s cubic-bezier(.2,.6,.35,1) 1" data-id="72476" id="item72476" data-hidestart="1" className="pageItem group hidden" alt="materi 1" style={{left:'1298px ',top:'345px ',width:'499px ',height:'80px '}}>
                            <div id="item707" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Definisi dan karakteristik IBD" style={{left:'88px ',top:'27px '}} id="item727" className="pageItem " data-src="assets/images/item_727.png" />
                            <img src={blankImage} alt="1" style={{left:'20px '}} id="item749" className="pageItem " data-src="assets/images/item_749.png" />
                        </div>
                        <div data-ani="flyinfromright-72477 1s cubic-bezier(.2,.6,.35,1) 1" data-id="72477" id="item72477" data-hidestart="1" className="pageItem group hidden" alt="materi 2" style={{left:'1298px ',top:'436px ',width:'499px ',height:'79px '}}>
                            <div id="item775" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Epidemiologi dan dampak IBD" style={{left:'88px ',top:'26px '}} id="item795" className="pageItem " data-src="assets/images/item_795.png" />
                            <img src={blankImage} alt="2" style={{left:'20px '}} id="item817" className="pageItem " data-src="assets/images/item_817.png" />
                        </div>
                        <div data-ani="flyinfromright-72478 1s cubic-bezier(.2,.6,.35,1) 1" data-id="72478" id="item72478" data-hidestart="1" className="pageItem group hidden" alt="materi 3" style={{left:'1298px ',top:'528px ',width:'499px ',height:'78px '}}>
                            <div id="item843" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Etiologi dan patofisiologi IBD" style={{left:'88px ',top:'23px '}} id="item863" className="pageItem " data-src="assets/images/item_863.png" />
                            <img src={blankImage} alt="3" style={{left:'20px '}} id="item885" className="pageItem " data-src="assets/images/item_885.png" />
                        </div>
                        <div data-ani="flyinfromright-72479 1s cubic-bezier(.2,.6,.35,1) 1" data-id="72479" id="item72479" data-hidestart="1" className="pageItem group hidden" alt="materi 4" style={{left:'1298px ',top:'618px ',width:'499px ',height:'79px '}}>
                            <div id="item911" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Tanda dan gejala IBD" style={{left:'88px ',top:'24px '}} id="item931" className="pageItem " data-src="assets/images/item_931.png" />
                            <img src={blankImage} alt="4" style={{left:'20px '}} id="item953" className="pageItem " data-src="assets/images/item_953.png" />
                        </div>
                        <div data-ani="flyinfromright-72480 1s cubic-bezier(.2,.6,.35,1) 1" data-id="72480" id="item72480" data-hidestart="1" className="pageItem group hidden" alt="materi 5" style={{left:'1298px ',top:'709px ',width:'499px ',height:'79px '}}>
                            <div id="item979" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Diagnosis IBD" style={{left:'88px ',top:'26px '}} id="item999" className="pageItem " data-src="assets/images/item_999.png" />
                            <img src={blankImage} alt="5" style={{left:'20px '}} id="item1021" className="pageItem " data-src="assets/images/item_1021.png" />
                        </div>
                        <div data-ani="flyinfromright-72481 1s cubic-bezier(.2,.6,.35,1) 1" data-id="72481" id="item72481" data-hidestart="1" className="pageItem group hidden" alt="materi 6" style={{left:'1298px ',top:'799px ',width:'499px ',height:'79px '}}>
                            <div id="item1047" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="Tatalaksana IBD" style={{left:'88px ',top:'26px '}} id="item1067" className="pageItem " data-src="assets/images/item_1067.png" />
                            <img src={blankImage} alt="6" style={{left:'20px '}} id="item1089" className="pageItem " data-src="assets/images/item_1089.png" />
                        </div>
                        <div data-ani="flyinfromleft-72470 1s cubic-bezier(.2,.6,.35,1) 1" data-id="72470" id="item72470" data-hidestart="1" className="pageItem group hidden" alt="objektif 1" style={{left:'100px ',top:'351px ',width:'756px ',height:'102px '}}>
                            <div id="item657" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="1" style={{left:'30px ',top:'6px '}} id="item771" className="pageItem " data-src="assets/images/item_771.png" />
                            <img src={blankImage} alt="Mengidentifikasi karakteristik, tipe, etiologi dan faktor yang memengaruhi terjadinya IBD" style={{left:'92px ',top:'17px '}} id="item1111" className="pageItem " data-src="assets/images/item_1111.png" />
                        </div>
                        <div data-ani="flyinfromleft-72472 1s cubic-bezier(.2,.6,.35,1) 1" data-id="72472" id="item72472" data-hidestart="1" className="pageItem group hidden" alt="objektif 3" style={{left:'100px ',top:'598px ',width: '756px ',height:'102px '}}>
                            <div id="item658" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="3" style={{left:'30px ',top:'6px '}} id="item907" className="pageItem " data-src="assets/images/item_907.png" />
                            <img src={blankImage} alt="Memahami dan membedakan KU (Kolitis Ulseratif) dan PC (Penyakit Crohn)" style={{left:'92px ',top:'18px '}} id="item1133" className="pageItem " data-src="assets/images/item_1133.png" />
                        </div>
                        <div data-ani="flyinfromleft-72471 1s cubic-bezier(.2,.6,.35,1) 1" data-id="72471" id="item72471" data-hidestart="1" className="pageItem group hidden" alt="objektif 2" style={{left:'100px ',top:'475px ',width: '756px ',height:'102px '}}>
                            <div id="item659" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="2" style={{left:'30px ',top:'6px '}} id="item839" className="pageItem " data-src="assets/images/item_839.png" />
                            <img src={blankImage} alt="Mengetahui data epidemiologi IBD" style={{left:'92px ',top:'30px '}} id="item1155" className="pageItem " data-src="assets/images/item_1155.png" />
                        </div>
                        <div data-ani="flyinfromleft-72474 1s cubic-bezier(.2,.6,.35,1) 1" data-id="72474" id="item72474" data-hidestart="1" className="pageItem group hidden" alt="objektif 4" style={{left:'100px ',top:'722px ',width: '756px ',height:'102px '}}>
                            <div id="item660" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="4" style={{left:'30px ',top:'6px '}} id="item975" className="pageItem " data-src="assets/images/item_975.png" />
                            <img src={blankImage} alt="Mengetahui pemeriksaan fisik dan penunjang yang dibutuhkan pasien IBD" style={{left:'92px ',top:'17px '}} id="item1177" className="pageItem " data-src="assets/images/item_1177.png" />
                        </div>
                        <div data-ani="flyinfromleft-72475 1s cubic-bezier(.2,.6,.35,1) 1" data-id="72475" id="item72475" data-hidestart="1" className="pageItem group hidden" alt="objektif 5" style={{left:'100px ',top:'846px ',width: '756px ',height:'102px '}}>
                            <div id="item661" alt="Rectangle" className="pageItem ">&nbsp;</div>
                            <img src={blankImage} alt="5" style={{left:'30px ',top:'6px '}} id="item1043" className="pageItem " data-src="assets/images/item_1043.png" />
                            <img src={blankImage} alt="Memahami alur diagnosis dan tata laksana IBD" style={{left:'92px ',top:'33px '}} id="item1199" className="pageItem " data-src="assets/images/item_1199.png" />
                        </div>
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px ',top:'913px '}} id="item1233" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px '}} id="item1253" className="pageItem " data-src="assets/images/item_1253.png" />
                            <div alt="Group" style={{top:'132px '}} id="item1256" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item1257" className="pageItem " data-src="assets/images/item_1257.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px ',top:'4px '}} id="item1258" className="pageItem " data-src="assets/images/item_1258.png" />
                            </div>
                        </div>
                        <div id="item263484" className="pageItem" style={{height:'60px',width:'60px',left:'1518px ',top:'970px '}} alt="Sound">
                            <audio data-id="263484" className="mejs-no-controls" data-autoplay="1" data-autodelay="0" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 2 FULL.mp3" />
                            </audio>
                        </div>
                        <div id="item72589" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <button data-ani="fadein-72595 1s linear 1" data-id="72595" id="item72595" data-hidestart="1" className="pageItem has-down has-on hidden" name="lanjut" onClick={handleOnClickNext} aria-label="lanjut">
                            <div className="pageItem state btn-off">
                                <div id="item19005" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Lanjut" style={{left:'23px ',top:'17px '}} id="item19006" className="pageItem " data-src="assets/images/item_19006.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item72598" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Lanjut" style={{left:'23px ',top:'17px '}} id="item72599" className="pageItem " data-src="assets/images/item_72599.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item72655" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Lanjut" style={{left:'23px ',top:'17px '}} id="item72656" className="pageItem " data-src="assets/images/item_72656.png" />
                            </div>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Homepage2;