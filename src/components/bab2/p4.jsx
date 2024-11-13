import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
import Navigation from "../navigation";

function Bab2P4() {

    const navigate = useNavigate();

    const handleOnClickGoToBab1 = () => {
        window.location.href = '/bab1-start';
    };
    //var referrer = document.referrer;
    //console.log("referrer url",referrer);
    const handleOnClickUlang = (event) => {
        event.preventDefault();
        jQuery("#item263674 audio")[0].currentTime = 0;
        jQuery("#item263674 audio")[0].play();
        go(event,[{n:1,id:5620,act:'play'},{del:1,n:1,id:5589,act:'play'},{del:1,n:1,id:5774,act:'play'},{del:1,n:1,id:6082,act:'play'},{del:1,n:1,id:5818,act:'play'},{n:1,id:5862,act:'play'},{n:1,id:5796,act:'play'},{n:1,link:1,id:5642,act:'play'},{n:1,link:1,id:5906,act:'play'},{n:1,link:1,id:6060,act:'play'},{n:1,link:1,id:5972,act:'play'},{n:1,link:1,id:5708,act:'play'},{n:1,link:1,id:6016,act:'play'},{n:1,id:6038,act:'play'},{del:2,n:1,link:1,id:5884,act:'play'},{n:1,id:5752,act:'play'},{del:1.5,n:1,id:5840,act:'play'},{n:1,id:5928,act:'play'},{del:2,n:1,link:1,id:5994,act:'play'},{n:1,link:1,id:5664,act:'play'},{n:1,link:1,id:5686,act:'play'},{n:1,link:1,id:5730,act:'play'},{n:1,id:5950,act:'play'}]);
    };

    const handleOnClickPreviousPage = () => {
        window.location.href = '/bab2-p3';
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }


    const handleOnClickKUButton = (event) => {
        event.preventDefault();
        jQuery("#item263625 audio")[0].play();
        go(event, [{ n: 1, link: 1, id: 145123, act: 'play' }, { n: 1, id: 145250, act: 'play' }, { n: 1, id: 154678, act: 'play' }, { n: 1, id: 145148, act: 'play' }, { del: 6.2, n: 1, id: 145150, act: 'play' }, { del: 4, n: 1, id: 145151, act: 'play' }, { del: 5.2, n: 1, id: 145152, act: 'play' }]);
    }

    const handleOnClickNextPage = (event) => {
        window.location.href = '/bab3-start';
    }

    const applyGIFImportantStyles1 = (element) => {
        if (element) {
            element.style.setProperty('width', '716px', 'important');
            element.style.setProperty('height', '716px', 'important');
            element.style.setProperty('left', '602px', 'important');
            element.style.setProperty('top', '364px', 'important');
        }
    };

    return (
        <div >
            <ul className="pages" id="slider">
                <li className="page" data-name="12">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" data-ani-load="go({target:this},[{n:1,id:5620,act:'play'},{del:1,n:1,id:5589,act:'play'},{del:1,n:1,id:5774,act:'play'},{del:1,n:1,id:6082,act:'play'},{del:1,n:1,id:5818,act:'play'},{n:1,id:5862,act:'play'},{n:1,id:5796,act:'play'},{n:1,link:1,id:5642,act:'play'},{n:1,link:1,id:5906,act:'play'},{n:1,link:1,id:6060,act:'play'},{n:1,link:1,id:5972,act:'play'},{n:1,link:1,id:5708,act:'play'},{n:1,link:1,id:6016,act:'play'},{n:1,id:6038,sn:1,act:'play'},{del:2,n:1,link:1,id:5884,act:'play'},{n:1,id:5752,sn:1,act:'play'},{del:1,n:1,id:5840,act:'play'},{n:1,id:5928,act:'play'},{del:1,n:1,link:1,id:5994,act:'play'},{n:1,link:1,id:5664,act:'play'},{n:1,link:1,id:5686,act:'play'},{n:1,link:1,id:5730,act:'play'},{n:1,id:5950,sn:1,act:'play'}], 'pageload');" style={{width:'1920px',height:'1080px'}}>
                        <div id="item5588" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <img src={blankImage} data-ani="flyinfrombottom-5589 1s cubic-bezier(.2,.6,.35,1) 1" data-id="5589" id="item5589" data-hidestart="1" className="pageItem hidden" alt="Rectangle" ref={applyGIFImportantStyles1} data-src="assets/images/Woman_having_stomachache_period_menstrual_cramps_gerd_pain_concept_illustration.gif" />
                        <div id="item116146" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <Navigation />
                        <img src={blankImage} data-ani="flyinfromtop-5620 1s cubic-bezier(.2,.6,.35,1) 1" data-id="5620" id="item5620" data-hidestart="1" className="pageItem hidden" alt="Beban Penderita IBD10" style={{left:'460px',top:'158px'}} data-src="assets/images/item_5620.png" />
                        <img src={blankImage} data-ani="fadein-5642 0.5s linear 1" data-id="5642" id="item5642" data-hidestart="1" className="pageItem hidden" alt="Demam" style={{left:'234px',top:'385px',mixBlendMode:'hard-light'}} data-src="assets/images/item_5642.png" />
                        <img src={blankImage} data-ani="fadein-5664 0.2s linear 1" data-id="5664" id="item5664" data-hidestart="1" className="pageItem hidden" alt="Malu" style={{left:'68px',top:'493px',mixBlendMode:'hard-light'}} data-src="assets/images/item_5664.png" />
                        <img src={blankImage} data-ani="fadein-5686 0.5s linear 1" data-id="5686" id="item5686" data-hidestart="1" className="pageItem hidden" alt="Depresi" style={{left:'394px',top:'350px',mixBlendMode:'hard-light'}} data-src="assets/images/item_5686.png" />
                        <img src={blankImage} data-ani="fadein-5708 0.5s linear 1" data-id="5708" id="item5708" data-hidestart="1" className="pageItem hidden" alt="Malnutrisi" style={{left:'370px',top:'511px',mixBlendMode:'hard-light'}} data-src="assets/images/item_5708.png" />
                        <img src={blankImage} data-ani="fadein-5730 0.5s linear 1" data-id="5730" id="item5730" data-hidestart="1" className="pageItem hidden" alt="BAB berdarah" style={{left:'1250px',top:'666px',mixBlendMode:'hard-light'}} data-src="assets/images/item_5730.png" />
                        <img src={blankImage} data-ani="fadein-5752 0.5s linear 1" data-id="5752" id="item5752" data-hidestart="1" className="pageItem hidden" alt="Kerusakan organ pencernaan" style={{left:'1228px',top:'422px',mixBlendMode:'hard-light'}} data-src="assets/images/item_5752.png" />
                        <img src={blankImage} data-ani="fadein-5774 0.5s linear 1" data-id="5774" id="item5774" data-hidestart="1" className="pageItem hidden" alt="Nyeri" style={{left:'1248px',top:'486px',mixBlendMode:'hard-light'}} data-src="assets/images/item_5774.png" />
                        <img src={blankImage} data-ani="fadein-5796 0.5s linear 1" data-id="5796" id="item5796" data-hidestart="1" className="pageItem hidden" alt="Infeksi" style={{left:'1158px',top:'372px',mixBlendMode:'hard-light'}} data-src="assets/images/item_5796.png" />
                        <img src={blankImage} data-ani="fadein-5818 0.5s linear 1" data-id="5818" id="item5818" data-hidestart="1" className="pageItem hidden" alt="Operasi" style={{left:'1384px',top:'317px',mixBlendMode:'hard-light'}} data-src="assets/images/item_5818.png" />
                        <img src={blankImage} data-ani="fadein-5840 0.5s linear 1" data-id="5840" id="item5840" data-hidestart="1" className="pageItem hidden" alt="Insomia" style={{left:'1186px',top:'796px',mixBlendMode:'hard-light'}} data-src="assets/images/item_5840.png" />
                        <img src={blankImage} data-ani="fadein-5862 0.5s linear 1" data-id="5862" id="item5862" data-hidestart="1" className="pageItem hidden" alt="Rawat inap" style={{left:'1250px',top:'610px',mixBlendMode:'hard-light'}} data-src="assets/images/item_5862.png" />
                        <img src={blankImage} data-ani="fadein-5884 0.5s linear 1" data-id="5884" id="item5884" data-hidestart="1" className="pageItem hidden" alt="Mudah lelah" style={{left:'1632px',top:'563px',mixBlendMode:'hard-light'}} data-src="assets/images/item_5884.png" />
                        <img src={blankImage} data-ani="fadein-5906 0.5s linear 1" data-id="5906" id="item5906" data-hidestart="1" className="pageItem hidden" alt="Anemia" style={{left:'1217px',top:'923px',mixBlendMode:'hard-light'}} data-src="assets/images/item_5906.png" />
                        <img src={blankImage} data-ani="fadein-5928 0.5s linear 1" data-id="5928" id="item5928" data-hidestart="1" className="pageItem hidden" alt="Stigma sosial" style={{left:'1234px',top:'732px',mixBlendMode:'hard-light'}} data-src="assets/images/item_5928.png" />
                        <img src={blankImage} data-ani="fadein-5950 0.2s linear 1" data-id="5950" id="item5950" data-hidestart="1" className="pageItem hidden" alt="Fistula" style={{left:'1434px',top:'733px',mixBlendMode:'hard-light'}} data-src="assets/images/item_5950.png" />
                        <img src={blankImage} data-ani="fadein-5972 0.2s linear 1" data-id="5972" id="item5972" data-hidestart="1" className="pageItem hidden" alt="Penurunan berat badan" style={{left:'108px',top:'713px',mixBlendMode:'hard-light'}} data-src="assets/images/item_5972.png" />
                        <img src={blankImage} data-ani="fadein-5994 0.2s linear 1" data-id="5994" id="item5994" data-hidestart="1" className="pageItem hidden" alt="Biaya pengobatan" style={{left:'50px',top:'601px',mixBlendMode:'hard-light'}} data-src="assets/images/item_5994.png" />
                        <img src={blankImage} data-ani="fadein-6016 0.5s linear 1" data-id="6016" id="item6016" data-hidestart="1" className="pageItem hidden" alt="Diare kronis" style={{left:'369px',top:'577px',mixBlendMode:'hard-light'}} data-src="assets/images/item_6016.png" />
                        <img src={blankImage} data-ani="fadein-6038 0.5s linear 1" data-id="6038" id="item6038" data-hidestart="1" className="pageItem hidden" alt="Perforasi usus" style={{left:'22px',top:'784px',mixBlendMode:'hard-light'}} data-src="assets/images/item_6038.png" />
                        <img src={blankImage} data-ani="fadein-6060 0.5s linear 1" data-id="6060" id="item6060" data-hidestart="1" className="pageItem hidden" alt="Megakolon Toksik" style={{left:'354px',top:'873px',mixBlendMode:'hard-light'}} data-src="assets/images/item_6060.png" />
                        <img src={blankImage} data-ani="fadein-6082 0.5s linear 1" data-id="6082" id="item6082" data-hidestart="1" className="pageItem hidden" alt="Efek samping terapi" style={{left:'390px',top:'619px',mixBlendMode:'hard-light'}} data-src="assets/images/item_6082.png" />
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item6107" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item6127" className="pageItem " data-src="assets/images/item_6127.png" />
                            <div alt="Group" style={{top:'132px'}} id="item6130" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item6131" className="pageItem " data-src="assets/images/item_6131.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item6132" className="pageItem " data-src="assets/images/item_6132.png" />
                            </div>
                        </div>
                        <div id="item85403" className="pageItem" style={{height:'60px',width:'60px',left:'174px',top:'55px'}} alt="Sound">
                            <audio data-id="85403" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 11-3.mp3" />
                            </audio>
                        </div>
                        <div id="item85411" className="pageItem" style={{height:'60px',width:'60px',left:'255px',top:'35px'}} alt="Sound">
                            <audio data-id="85411" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 11-1.mp3" />
                            </audio>
                        </div>
                        <div id="item85416" className="pageItem" style={{height:'60px',width:'60px',left:'369px',top:'36px'}} alt="Sound">
                            <audio data-id="85416" className="mejs-no-controls" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 11-2.mp3" />
                            </audio>
                        </div>
                        <div id="item263674" className="pageItem" style={{height:'60px',width:'60px',left:'155px',top:'36px'}} alt="Sound">
                            <audio data-id="263674" className="mejs-no-controls" data-autoplay="1" data-autodelay="0" data-overlap="1">
                                <source type="audio/mp3" src="assets/media/page 11 FULL.mp3" />
                            </audio>
                        </div>
                        <div id="item85421" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <button data-id="102701" name="icon back 10" onClick={handleOnClickPreviousPage} aria-label="icon back 10" id="item102701" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item102707" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item102708" className="pageItem " data-src="assets/images/item_102708.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item102710" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item102711" className="pageItem " data-src="assets/images/item_102711.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item102704" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item102705" className="pageItem " data-src="assets/images/item_102705.png" />
                            </div>
                        </button>
                        <button data-id="102713" name="icon next 10" onClick={handleOnClickNextPage} aria-label="icon next 10" id="item102713" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item102720" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item102721" className="pageItem " data-src="assets/images/item_102721.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item102723" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item102725" className="pageItem " data-src="assets/images/item_102725.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item102716" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item102717" className="pageItem " data-src="assets/images/item_102717.png" />
                            </div>
                        </button>
                        <button data-id="126642" name="icon beranda 26" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 26" id="item126642" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item126649" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item126650" className="pageItem " data-src="assets/images/item_126650.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item126651" className="pageItem " data-src="assets/images/item_126651.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item126653" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item126654" className="pageItem " data-src="assets/images/item_126654.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item126655" className="pageItem " data-src="assets/images/item_126655.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item126645" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#3055ad" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item126646" className="pageItem " data-src="assets/images/item_126646.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item126647" className="pageItem " data-src="assets/images/item_126647.png" />
                            </div>
                        </button>
                        <button data-id="126657" name="button ulang 10" onClick={handleOnClickUlang} aria-label="button ulang 10" id="item126657" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item126668" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126669" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126670" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126671" className="pageItem " data-src="assets/images/item_126671.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126672" className="pageItem " data-src="assets/images/item_126672.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item126674" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126675" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#3055ad" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126677" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126678" className="pageItem " data-src="assets/images/item_126678.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126680" className="pageItem " data-src="assets/images/item_126680.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item126660" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:' 67px',height:'67px'}} id="item126661" className="pageItem ">
                                        <svg version="1.1" width="68" height="68" >
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item126663" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item126664" className="pageItem " data-src="assets/images/item_126664.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item126666" className="pageItem " data-src="assets/images/item_126666.png" />
                                </div>
                            </div>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Bab2P4;