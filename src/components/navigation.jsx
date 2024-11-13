import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import blankImage from '../assets/images/blank.gif';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';

function Navigation() {

    //const navigate = useNavigate();
    const handleOnClick6 = () => {
        window.location.href = '/bab1-start';
    };
    const handleOnClick8 = () => {
        window.location.href = '/bab2-start';
    };
    const handleOnClick13 = () => {
        window.location.href = '/bab3-start';
    };
    const handleOnClick15 = () => {
        window.location.href = '/bab4-start';
    };
    const handleOnClick19 = () => {
        window.location.href = '/bab5-start';
    };
    const handleOnClick31 = () => {
        window.location.href = '/bab5-p11';
    };

    const handleOnClickBack = () => navigate('/homepage');
    const handleOnClickNext = () => navigate('/sampleNext');

    const isPathActive = (currentPath, targetPath) => {
        return currentPath === targetPath;
    };

    // NavItem component for navigation links
    const NavItem1 = ({ path, label }) => {
        const location = useLocation();
        const validPaths = ['/bab1-start', '/bab1-p1'];
        const isActive = validPaths.includes(location.pathname);

        const className = isActive ? 'pageItem has-down has-on hover' : 'pageItem has-down has-on';

        return (
            <button data-id="251289" name="IBD 236" onClick={handleOnClick6} aria-label="IBD 236" id="item251289" className={className}>
                <div className="pageItem state btn-off">
                    <div id="item251317" alt="Rectangle" className="pageItem ">&nbsp;</div>
                    <img src={blankImage} alt="Definisi & Karakteristik IBD" style={{ left: '7px', top: '23px' }} id="item251319" className="pageItem " data-src="assets/images/item_251319.png" />
                </div>
                <div className="pageItem state btn-on">
                    <div id="item251292" alt="Rectangle" className="pageItem ">&nbsp;</div>
                    <img src={blankImage} alt="Definisi & Karakteristik IBD" style={{ left: '7px', top: '23px' }} id="item251293" className="pageItem " data-src="assets/images/item_251293.png" />
                </div>
                <div className="pageItem state btn-down">
                    <div id="item251343" alt="Rectangle" className="pageItem ">&nbsp;</div>
                    <img src={blankImage} alt="Definisi & Karakteristik IBD" style={{ left: '7px', top: '23px' }} id="item251345" className="pageItem " data-src="assets/images/item_251345.png" />
                </div>
            </button>
        );
    };
    
    const NavItem2 = ({ path, label }) => {
        const location = useLocation();
        const validPaths = ['/bab2-start', '/bab2-p1', '/bab2-p2', '/bab2-p3', '/bab2-p4'];
        const isActive = validPaths.includes(location.pathname);

        const className = isActive ? 'pageItem has-down has-on hover' : 'pageItem has-down has-on';

        return (
            <button data-id="262283" name="IBD 237" onClick={handleOnClick8} aria-label="IBD 237" id="item262283" className={className}>
                <div className="pageItem state btn-off">
                    <div id="item262312" alt="Rectangle" className="pageItem ">&nbsp;</div>
                    <img src={blankImage} alt="Epidemiologi & Dampak IBD" style={{ left: '7px', top: '23px' }} id="item262314" className="pageItem " data-src="assets/images/item_262314.png" />
                </div>
                <div className="pageItem state btn-on">
                    <div id="item262286" alt="Rectangle" className="pageItem ">&nbsp;</div>
                    <img src={blankImage} alt="Epidemiologi & Dampak IBD" style={{ left: '7px', top: '23px' }} id="item262288" className="pageItem " data-src="assets/images/item_262288.png" />
                </div>
                <div className="pageItem state btn-down">
                    <div id="item262338" alt="Rectangle" className="pageItem ">&nbsp;</div>
                    <img src={blankImage} alt="Epidemiologi & Dampak IBD" style={{ left: '7px', top: '23px' }} id="item262339" className="pageItem " data-src="assets/images/item_262339.png" />
                </div>
            </button>
        );
    };

    const NavItem3 = ({ path, label }) => {
        const location = useLocation();
        const validPaths = ['/bab3-start', '/bab3-p1'];
        const isActive = validPaths.includes(location.pathname);

        const className = isActive ? 'pageItem has-down has-on hover' : 'pageItem has-down has-on';

        return (
            <button data-id="251447" name="IBD 238" onClick={handleOnClick13} aria-label="IBD 238" id="item251447" className={className}>
                <div className="pageItem state btn-off">
                    <div id="item251475" alt="Rectangle" className="pageItem ">&nbsp;</div>
                    <img src={blankImage} alt="Etiologi & Patofisiologi IBD" style={{ left: '7px', top: '23px' }} id="item251476" className="pageItem " data-src="assets/images/item_251476.png" />
                </div>
                <div className="pageItem state btn-on">
                    <div id="item251450" alt="Rectangle" className="pageItem ">&nbsp;</div>
                    <img src={blankImage} alt="Etiologi & Patofisiologi IBD" style={{ left: '7px', top: '23px' }} id="item251451" className="pageItem " data-src="assets/images/item_251451.png" />
                </div>
                <div className="pageItem state btn-down">
                    <div id="item251500" alt="Rectangle" className="pageItem ">&nbsp;</div>
                    <img src={blankImage} alt="Etiologi & Patofisiologi IBD" style={{ left: '7px', top: '23px' }} id="item251502" className="pageItem " data-src="assets/images/item_251502.png" />
                </div>
            </button>
        );
    };

    const NavItem4 = ({ path, label }) => {
        const location = useLocation();
        const validPaths = ['/bab4-start', '/bab4-p1', '/bab4-p2', '/bab4-p3'];
        const isActive = validPaths.includes(location.pathname);

        const className = isActive ? 'pageItem has-down has-on hover' : 'pageItem has-down has-on';

        return (
            <button data-id="251525" name="IBD 239" onClick={handleOnClick15} aria-label="IBD 239" id="item251525" className={className}>
                <div className="pageItem state btn-off">
                    <div id="item251555" alt="Rectangle" className="pageItem ">&nbsp;</div>
                    <img src={blankImage} alt="Tanda & Gejala IBD" style={{ left: '5px', top: '23px' }} id="item251556" className="pageItem " data-src="assets/images/item_251556.png" />
                </div>
                <div className="pageItem state btn-on">
                    <div id="item251528" alt="Rectangle" className="pageItem ">&nbsp;</div>
                    <img src={blankImage} alt="Tanda & Gejala IBD" style={{ left: '5px', top: '23px' }} id="item251531" className="pageItem " data-src="assets/images/item_251531.png" />
                </div>
                <div className="pageItem state btn-down">
                    <div id="item251580" alt="Rectangle" className="pageItem ">&nbsp;</div>
                    <img src={blankImage} alt="Tanda & Gejala IBD" style={{ left: '5px', top: '23px' }} id="item251581" className="pageItem " data-src="assets/images/item_251581.png" />
                </div>
            </button>
        );
    };

    const NavItem5 = ({ path, label }) => {
        const location = useLocation();
        const validPaths = ['/bab5-start', '/bab5-p1', '/bab5-p2', '/bab5-p3', '/bab5-p4',
            '/bab5-p5', '/bab5-p6', '/bab5-p7', '/bab5-p8', '/bab5-p9', '/bab5-p10'
        ];
        const isActive = validPaths.includes(location.pathname);

        const className = isActive ? 'pageItem has-down has-on hover' : 'pageItem has-down has-on';

        return (
            <button data-id="251604" name="IBD 240" onClick={handleOnClick19} aria-label="IBD 240" id="item251604" className={className}>
                <div className="pageItem state btn-off">
                    <div id="item251632" alt="Rectangle" className="pageItem ">&nbsp;</div>
                    <img src={blankImage} alt="Diagnosis IBD" style={{ left: '4px', top: '23px' }} id="item251633" className="pageItem " data-src="assets/images/item_251633.png" />
                </div>
                <div className="pageItem state btn-on">
                    <div id="item251607" alt="Rectangle" className="pageItem ">&nbsp;</div>
                    <img src={blankImage} alt="Diagnosis IBD" style={{ left: '4px', top: '23px' }} id="item251608" className="pageItem " data-src="assets/images/item_251608.png" />
                </div>
                <div className="pageItem state btn-down">
                    <div id="item251657" alt="Rectangle" className="pageItem ">&nbsp;</div>
                    <img src={blankImage} alt="Diagnosis IBD" style={{ left: '4px', top: '23px' }} id="item251658" className="pageItem " data-src="assets/images/item_251658.png" />
                </div>
            </button>
        );
    };

    const NavItem6 = ({ path, label }) => {
        const location = useLocation();
        const validPaths = ['/bab5-p11','/bab6-start', '/bab6-p1', '/bab6-p2', '/bab6-p3', '/bab6-p4',
            '/bab6-p5', '/bab6-p6', '/bab6-p7', '/bab6-p8', '/bab6-p9', '/bab6-p10', '/bab6-p11',
            '/bab6-p12', '/bab6-p13', '/bab6-p14', '/bab6-p15', '/bab6-p16', '/bab6-p17', '/bab6-p18',
            '/bab6-p19'
        ];
        const isActive = validPaths.includes(location.pathname);

        const className = isActive ? 'pageItem has-down has-on hover' : 'pageItem has-down has-on';

        return (
            <button data-id="251681" name="Button 481" onClick={handleOnClick31} aria-label="Button 481" id="item251681" className={className}>
                <div className="pageItem state btn-off">
                    <div id="item251709" alt="Rectangle" className="pageItem ">&nbsp;</div>
                    <img src={blankImage} alt="Tatalaksana IBD" style={{ left: '5px', top: '23px' }} id="item251710" className="pageItem " data-src="assets/images/item_251710.png" />
                </div>
                <div className="pageItem state btn-on">
                    <div id="item251684" alt="Rectangle" className="pageItem ">&nbsp;</div>
                    <img src={blankImage} alt="Tatalaksana IBD" style={{ left: '5px', top: '23px' }} id="item251685" className="pageItem " data-src="assets/images/item_251685.png" />
                </div>
                <div className="pageItem state btn-down">
                    <div id="item251736" alt="Rectangle" className="pageItem ">&nbsp;</div>
                    <img src={blankImage} alt="Tatalaksana IBD" style={{ left: '5px', top: '23px' }} id="item251737" className="pageItem " data-src="assets/images/item_251737.png" />
                </div>
            </button>
        );
    };

    return (
        <div >
            <NavItem1 />
            <NavItem2 />
            <NavItem3 />
            <NavItem4 />
            <NavItem5 />
            <NavItem6 />
        </div>
    )
}
export default Navigation;