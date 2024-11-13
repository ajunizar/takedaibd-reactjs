import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
//import Navigation from "./navigation";

function BerandaNoSound() {

    const navigate = useNavigate();

    /*const handleOnClickNext = () => {
        window.location.href = '/';
    };*/
    //var referrer = document.referrer;
    //console.log("referrer url",referrer);
    const handleOnClickGoToSelamatDatang = () => {
        window.location.href = '/selamat-datang';
    };

    const handleOnClickGoToBerandaSound = () => {
        window.location.href = '/beranda-sound';
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

    return (
        <div >
            <ul className="pages" id="slider">
                <li className="page" data-name="70">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" style={{width:'1920px',height:'1080px'}}>
                        <img src={blankImage} alt="Polygon" style={{left:'-615px',top:'-1251px'}} id="item153307" className="pageItem " data-src="assets/images/item_153307.png" />
                        <div alt="Group" style={{left:'1692px',top:'58px'}} id="item153330" className="pageItem group ">
                            <img src={blankImage} alt="Polygon" id="item153331" className="pageItem " data-src="assets/images/item_153331.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'14px',top:'2px'}} id="item153332" className="pageItem " data-src="assets/images/item_153332.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'25px',top:'17px'}} id="item153333" className="pageItem " data-src="assets/images/item_153333.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'35px',top:'17px'}} id="item153334" className="pageItem " data-src="assets/images/item_153334.png" />
                        </div>
                        <img src={blankImage} alt="Beranda" style={{left:'97px',top:'100px'}} id="item153335" className="pageItem " data-src="assets/images/item_153335.png" />
                        <div alt="Takeda Indonesia, 202" style={{left:'1885px',top:'913px'}} id="item153358" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{left:'1px'}} id="item153359" className="pageItem " data-src="assets/images/item_153359.png" />
                            <div alt="Group" style={{top:'132px'}} id="item153382" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item153383" className="pageItem " data-src="assets/images/item_153383.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'3px',top:'4px'}} id="item153384" className="pageItem " data-src="assets/images/item_153384.png" />
                            </div>
                        </div>
                        <div alt="Group" style={{left:'1753px',top:'980px'}} id="item153385" className="pageItem group ">
                            <div alt="Oval" id="item153386" className="pageItem ">
                                <svg version="1.1" width="70" height="70">
                                    <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                </svg>
                            </div>
                            <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item153388" className="pageItem " data-src="assets/images/item_153388.png" />
                        </div>
                        <div alt="Group" style={{left:'1667px',top:'980px'}} id="item153389" className="pageItem group ">
                            <div alt="Oval" id="item153390" className="pageItem ">
                                <svg version="1.1" width="70" height="70">
                                    <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                </svg>
                            </div>
                            <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item153391" className="pageItem " data-src="assets/images/item_153391.png" />
                        </div>
                        <div alt="Group" style={{left:'1581px',top:'980px'}} id="item153392" className="pageItem group ">
                            <div alt="Oval" id="item153393" className="pageItem ">
                                <svg version="1.1" width="70" height="70">
                                    <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                </svg>
                            </div>
                            <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item153394" className="pageItem " data-src="assets/images/item_153394.png" />
                            <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item153395" className="pageItem " data-src="assets/images/item_153395.png" />
                        </div>
                        <button data-id="153396" name="bab 8" onClick={handleOnClickGoToBab1} aria-label="bab 8" id="item153396" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item153448" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 1" style={{left:'46px',top:'40px'}} id="item153450" className="pageItem " data-src="assets/images/item_153450.png" />
                                <img src={blankImage} alt="Definisi & Karakteristik IBD" style={{left:'46px',top:'81px'}} id="item153473" className="pageItem " data-src="assets/images/item_153473.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item153399" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 1" style={{left:'46px',top:'40px'}} id="item153401" className="pageItem " data-src="assets/images/item_153401.png" />
                                <img src={blankImage} alt="Definisi & Karakteristik IBD" style={{left:'46px',top:'81px'}} id="item153424" className="pageItem " data-src="assets/images/item_153424.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item153497" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 1" style={{left:'46px',top:'40px'}} id="item153498" className="pageItem " data-src="assets/images/item_153498.png" />
                                <img src={blankImage} alt="Definisi & Karakteristik IBD" style={{left:'46px',top:'81px'}} id="item153521" className="pageItem " data-src="assets/images/item_153521.png" />
                            </div>
                        </button>
                        <button data-id="153544" name="bab 9" onClick={handleOnClickGoToBab3} aria-label="bab 9" id="item153544" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item153597" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 3" style={{left:'46px',top:'42px'}} id="item153600" className="pageItem " data-src="assets/images/item_153600.png" />
                                <img src={blankImage} alt="Etiologi & Patofisiologi IBD" style={{left:'46px',top:'83px'}} id="item153623" className="pageItem " data-src="assets/images/item_153623.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item153547" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 3" style={{left:'46px',top:'42px'}} id="item153549" className="pageItem " data-src="assets/images/item_153549.png" />
                                <img src={blankImage} alt="Etiologi & Patofisiologi IBD" style={{left:'46px',top:'83px'}} id="item153572" className="pageItem " data-src="assets/images/item_153572.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item153647" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 3" style={{left:'46px',top:'42px'}} id="item153648" className="pageItem " data-src="assets/images/item_153648.png" />
                                <img src={blankImage} alt="Etiologi & Patofisiologi IBD" style={{left:'46px',top:'83px'}} id="item153671" className="pageItem " data-src="assets/images/item_153671.png" />
                            </div>
                        </button>
                        <button data-id="153694" name="bab 10" onClick={handleOnClickGoToBab5} aria-label="bab 10" id="item153694" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item153746" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 5" style={{left:'46px',top:'42px'}} id="item153747" className="pageItem " data-src="assets/images/item_153747.png" />
                                <img src={blankImage} alt="Diagnosis IBD" style={{left:'46px',top:'83px'}} id="item153770" className="pageItem " data-src="assets/images/item_153770.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item153697" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 5" style={{left:'46px',top:'42px'}} id="item153699" className="pageItem " data-src="assets/images/item_153699.png" />
                                <img src={blankImage} alt="Diagnosis IBD" style={{left:'46px',top:'83px'}} id="item153722" className="pageItem " data-src="assets/images/item_153722.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item153794" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 5" style={{left:'46px',top:'42px'}} id="item153796" className="pageItem " data-src="assets/images/item_153796.png" />
                                <img src={blankImage} alt="Diagnosis IBD" style={{left:'46px',top:'83px'}} id="item153819" className="pageItem " data-src="assets/images/item_153819.png" />
                            </div>
                        </button>
                        <button data-id="153842" name="bab 11" onClick={handleOnClickGoToBab4} aria-label="bab 11" id="item153842" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item153894" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 4" style={{left:'46px',top:'42px'}} id="item153895" className="pageItem " data-src="assets/images/item_153895.png" />
                                <img src={blankImage} alt="Tanda & Gejala IBD" style={{left:'46px',top:'83px'}} id="item153918" className="pageItem " data-src="assets/images/item_153918.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item153845" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 4" style={{left:'46px',top:'42px'}} id="item153846" className="pageItem " data-src="assets/images/item_153846.png" />
                                <img src={blankImage} alt="Tanda & Gejala IBD" style={{left:'46px',top:'83px'}} id="item153869" className="pageItem " data-src="assets/images/item_153869.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item153942" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 4" style={{left:'46px',top:'42px'}} id="item153943" className="pageItem " data-src="assets/images/item_153943.png" />
                                <img src={blankImage} alt="Tanda & Gejala IBD" style={{left:'46px',top:'83px'}} id="item153966" className="pageItem " data-src="assets/images/item_153966.png" />
                            </div>
                        </button>
                        <button data-id="153989" name="bab 12" onClick={handleOnClickGoToBab2} aria-label="bab 12" id="item153989" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item154041" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 2" style={{left:'46px',top:'42px'}} id="item154042" className="pageItem " data-src="assets/images/item_154042.png" />
                                <img src={blankImage} alt="Epidemiologi & Dampak IBD" style={{left:'46px',top:'83px'}} id="item154065" className="pageItem " data-src="assets/images/item_154065.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item153992" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 2" style={{left:'46px',top:'42px'}} id="item153994" className="pageItem " data-src="assets/images/item_153994.png" />
                                <img src={blankImage} alt="Epidemiologi & Dampak IBD" style={{left:'46px',top:'83px'}} id="item154017" className="pageItem " data-src="assets/images/item_154017.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item154090" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 2" style={{left:'46px',top:'42px'}} id="item154091" className="pageItem " data-src="assets/images/item_154091.png" />
                                <img src={blankImage} alt="Epidemiologi & Dampak IBD" style={{left:'46px',top:'83px'}} id="item154114" className="pageItem " data-src="assets/images/item_154114.png" />
                            </div>
                        </button>
                        <button data-id="154137" name="bab 13" onClick={handleOnClickGoToBab6} aria-label="bab 13" id="item154137" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item154189" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 6" style={{left:'46px',top:'42px'}} id="item154190" className="pageItem " data-src="assets/images/item_154190.png" />
                                <img src={blankImage} alt="Tatalaksana IBD" style={{left:'46px',top:'83px'}} id="item154213" className="pageItem " data-src="assets/images/item_154213.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item154140" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 6" style={{left:'46px',top:'42px'}} id="item154141" className="pageItem " data-src="assets/images/item_154141.png" />
                                <img src={blankImage} alt="Tatalaksana IBD" style={{left:'46px',top:'83px'}} id="item154165" className="pageItem " data-src="assets/images/item_154165.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item154238" alt="Rectangle" className="pageItem ">&nbsp;</div>
                                <img src={blankImage} alt="Bab 6" style={{left:'46px',top:'42px'}} id="item154239" className="pageItem " data-src="assets/images/item_154239.png" />
                                <img src={blankImage} alt="Tatalaksana IBD" style={{left:'46px',top:'83px'}} id="item154263" className="pageItem " data-src="assets/images/item_154263.png" />
                            </div>
                        </button>
                        <button data-id="154286" name="icon back 30" onClick={handleOnClickGoToSelamatDatang} aria-label="icon back 30" id="item154286" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item154292" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item154293" className="pageItem " data-src="assets/images/item_154293.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item154296" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item154297" className="pageItem " data-src="assets/images/item_154297.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item154289" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'21px',top:'14px'}} id="item154290" className="pageItem " data-src="assets/images/item_154290.png" />
                            </div>
                        </button>
                        <button data-id="154299" name="icon next 30" onClick={handleOnClickGoToBab1} aria-label="icon next 30" id="item154299" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item154305" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item154306" className="pageItem " data-src="assets/images/item_154306.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item154308" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#fa635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item154310" className="pageItem " data-src="assets/images/item_154310.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item154302" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'23px',top:'14px'}} id="item154303" className="pageItem " data-src="assets/images/item_154303.png" />
                            </div>
                        </button>
                        <div id="item154312" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <button data-id="154313" name="icon beranda 20" onClick={handleOnClickGoToBerandaSound} aria-label="icon beranda 20" id="item154313" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item154321" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item154322" className="pageItem " data-src="assets/images/item_154322.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item154323" className="pageItem " data-src="assets/images/item_154323.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item154325" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item154326" className="pageItem " data-src="assets/images/item_154326.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item154327" className="pageItem " data-src="assets/images/item_154327.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item154317" className="pageItem ">
                                    <svg version="1.1" width="70" height="70">
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{left:'17px',top:'18px'}} id="item154318" className="pageItem " data-src="assets/images/item_154318.png" />
                                <img src={blankImage} alt="Polygon" style={{left:'14px',top:'15px'}} id="item154319" className="pageItem " data-src="assets/images/item_154319.png" />
                            </div>
                        </button>
                        <button data-id="154328" name="button ulang 21" onClick={handleOnClickGoToBerandaSound} aria-label="button ulang 21" id="item154328" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div id="item154339" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:'67px',height:'67px'}} id="item154340" className="pageItem ">
                                        <svg version="1.1" width="68" height="68">
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item154341" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item154342" className="pageItem " data-src="assets/images/item_154342.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item154343" className="pageItem " data-src="assets/images/item_154343.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-on">
                                <div id="item154345" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:'67px',height:'67px'}} id="item154346" className="pageItem ">
                                        <svg version="1.1" width="68" height="68">
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#fa635e" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item154348" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item154349" className="pageItem " data-src="assets/images/item_154349.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item154351" className="pageItem " data-src="assets/images/item_154351.png" />
                                </div>
                            </div>
                            <div className="pageItem state btn-down">
                                <div id="item154331" className="pageItem fauxgroup" alt="Rectangle">
                                    <div alt="Oval" style={{width:'67px',height:'67px'}} id="item154332" className="pageItem ">
                                        <svg version="1.1" width="68" height="68">
                                            <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" fill="#e5e5e5" />
                                        </svg>
                                    </div>
                                </div>
                                <div alt="Group" style={{left:'10px',top:'13px'}} id="item154334" className="pageItem group ">
                                    <img src={blankImage} alt="Polygon" style={{top:'20px'}} id="item154335" className="pageItem " data-src="assets/images/item_154335.png" />
                                    <img src={blankImage} alt="Polygon" style={{left:'4px'}} id="item154337" className="pageItem " data-src="assets/images/item_154337.png" />
                                </div>
                            </div>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default BerandaNoSound;