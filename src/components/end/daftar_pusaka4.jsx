import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AutoPlayAudio from "./AudioPlayer";
//import Navigation from "./navigation";

function DaftarPusaka4() {

    const navigate = useNavigate();

    const handleOnClickGoToDaftarPusaka3 = () => {
        window.location.href = '/daftar-pusaka-3'; // #54
    };
    const handleOnClickGoToQuizEnd = () => {
        window.location.href = '/quiz-terima-kasih'; // #54
    };
    //var referrer = document.referrer;
    //console.log("referrer url",referrer);
    const handleOnClickBack = () => {
        window.location.href = '/Quiz40';
    };
    const handleOnClickPreviousPage = () => {
        navigate(-1);
    };

    const handleOnClickBerandaNoSound = () => {
        window.location.href = '/beranda-no-sound';
    }

    const handleOnClickCekPenjelasan = (event) => {
        window.location.href = '/FocusStudy4';
    }

    return (
        <div >
            <ul className="pages" id="slider">
                <li className="page" data-name="69">
                    <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" style={{ width: '1920px', height: '1080px' }}>
                        <div id="item59631" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <div id="item57986" alt="Rectangle" className="pageItem ">&nbsp;</div>
                        <img src={blankImage} alt="GraphicLine" style={{ height: ' 281px', left: '462px', top: '245px' }} id="item57987" className="pageItem " data-src="assets/images/item_57987.png" />
                        <img src={blankImage} alt="GraphicLine" style={{ height: ' 281px', left: '814px', top: '245px' }} id="item57988" className="pageItem " data-src="assets/images/item_57988.png" />
                        <img src={blankImage} alt="GraphicLine" style={{ height: ' 315px', left: '1186px', top: '245px' }} id="item57990" className="pageItem " data-src="assets/images/item_57990.png" />
                        <img src={blankImage} alt="GraphicLine" style={{ height: ' 281px', left: '1562px', top: '245px' }} id="item57991" className="pageItem " data-src="assets/images/item_57991.png" />
                        <div alt="Takeda Indonesia, 202" style={{ left: '1885px', top: '913px' }} id="item56773" className="pageItem group ">
                            <img src={blankImage} alt="Takeda Indonesia, 2024" style={{ left: '1px' }} id="item56774" className="pageItem " data-src="assets/images/item_56774.png" />
                            <div alt="Group" style={{ top: '132px' }} id="item56797" className="pageItem group ">
                                <img src={blankImage} alt="Polygon" id="item56798" className="pageItem " data-src="assets/images/item_56798.png" />
                                <img src={blankImage} alt="Polygon" style={{ left: '3px', top: '4px' }} id="item56799" className="pageItem " data-src="assets/images/item_56799.png" />
                            </div>
                        </div>
                        <img src={blankImage} alt="Glosarium" style={{ left: '100px', top: '130px' }} id="item56800" className="pageItem " data-src="assets/images/item_56800.png" />
                        <img src={blankImage} alt="5 ASA: 5 Aminosalicylic Acid 6 MP: 6 Merkaptopurin ADA: Adalimumab APC: Antigen Presenting Cells ASCA: Anti Saccharom..." style={{ left: '136px', top: '245px' }} id="item57540" className="pageItem " data-src="assets/images/item_57540.png" />
                        <img src={blankImage} alt="CT: Computed Tomography CZP: Certolizumab pegol DNA: Deoxyribonucleic Acid ECCO: European Crohn’s and Colitis Organiz..." style={{ left: '489px', top: '245px' }} id="item57886" className="pageItem " data-src="assets/images/item_57886.png" />
                        <img src={blankImage} alt="Hep C: Hepatitis C HIV: Human Immunodeficiency Virus IBD: Inflammatory Bowel Disease IC: Indeterminate Colitis IFX: I..." style={{ left: '845px', top: '245px' }} id="item57911" className="pageItem " data-src="assets/images/item_57911.png" />
                        <img src={blankImage} alt="KU: Kolitis Ulseratif MAdCAM 1: Mucosal Addressin Cell Adhesion Molecule 1 MCS: Mayo Clinic Score MRI: Magnetic Reson..." style={{ left: '1215px', top: '245px' }} id="item57934" className="pageItem " data-src="assets/images/item_57934.png" />
                        <img src={blankImage} alt="PSC: Primary Sclerosing Cholangitis TB: Tuberkulosis TFC: Tofacitinib Th1: T helper 1 Th17: T helper 17 TNF a: Tumor ..." style={{ left: '1587px', top: '245px' }} id="item57958" className="pageItem " data-src="assets/images/item_57958.png" />
                        <img src={blankImage} alt="Kelas Rekomendasi: Kuat: Rekomendasi saat ini dapat diaplikasikan pada sebagian besar kondisi IBD. Efek menguntungkan..." style={{ left: '100px', top: '605px' }} id="item57837" className="pageItem " data-src="assets/images/item_57837.png" />
                        <img src={blankImage} alt="Tingkat Bukti: Kualitas tinggi: Penelitian lanjutan hampir pasti tidak akan mengubah keyakinan dokter mengenai predik..." style={{ left: '100px', top: '709px' }} id="item57862" className="pageItem " data-src="assets/images/item_57862.png" />
                        <div id="item541" className="pageItem " style={{left:'28px ',top:'1042px ',color:'black'}}>VV-MEDMAT-114566 // 12 Dec 24</div>
                        <button data-id="180933" name="icon next 57" onClick={handleOnClickGoToDaftarPusaka3} aria-label="icon next 57" id="item180933" className="pageItem has-down has-on ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item180927" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '21px', top: '14px' }} id="item180928" className="pageItem " data-src="assets/images/item_180928.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item180930" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '21px', top: '14px' }} id="item180931" className="pageItem " data-src="assets/images/item_180931.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item180922" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.73" cy="33.69" rx="33.73" ry="33.69" stroke="" strokeWidth="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '21px', top: '14px' }} id="item180924" className="pageItem " data-src="assets/images/item_180924.png" />
                            </div>
                        </button>
                        <button data-id="222181" name="icon beranda 121" onClick={handleOnClickBerandaNoSound} aria-label="icon beranda 121" id="item222181" className="pageItem has-on has-down ">
                            <div className="pageItem state btn-off">
                                <div alt="Oval" id="item222189" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" stroke-width="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '14px', top: '15px' }} id="item222190" className="pageItem " data-src="assets/images/item_222190.png" />
                                <img src={blankImage} alt="Polygon" style={{ left: '17px', top: '18px' }} id="item222191" className="pageItem " data-src="assets/images/item_222191.png" />
                            </div>
                            <div className="pageItem state btn-down">
                                <div alt="Oval" id="item222193" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" stroke-width="1" fill="#e5e5e5" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '14px', top: '15px' }} id="item222194" className="pageItem " data-src="assets/images/item_222194.png" />
                                <img src={blankImage} alt="Polygon" style={{ left: '17px', top: '18px' }} id="item222195" className="pageItem " data-src="assets/images/item_222195.png" />
                            </div>
                            <div className="pageItem state btn-on">
                                <div alt="Oval" id="item222184" className="pageItem ">
                                    <svg version="1.1" width="70" height="70" >
                                        <ellipse cx="33.69" cy="33.69" rx="33.69" ry="33.69" stroke="" stroke-width="1" fill="#f9635e" />
                                    </svg>
                                </div>
                                <img src={blankImage} alt="Polygon" style={{ left: '17px', top: '18px' }} id="item222185" className="pageItem " data-src="assets/images/item_222185.png" />
                                <img src={blankImage} alt="Polygon" style={{ left: '14px', top: '15px' }} id="item222187" className="pageItem " data-src="assets/images/item_222187.png" />
                            </div>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default DaftarPusaka4;