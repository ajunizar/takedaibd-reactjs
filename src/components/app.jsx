import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import blankImage from '../assets/images/blank.gif';
import Home from "./home";
import Homepage from "./homepage";
import Homepage2 from "./homepage2";
import Homepage3 from "./homepage3";

import BerandaNoSound from "./beranda/no-sound";
import BerandaSound from "./beranda/sound";

import Bab1Awal from "./bab1/start";
import Bab1P1 from "./bab1/p1";

import Bab2Awal from "./bab2/start";
import Bab2P1 from "./bab2/p1";
import Bab2P2 from "./bab2/p2";
import Bab2P3 from "./bab2/p3";
import Bab2P4 from "./bab2/p4";

import Bab3Awal from "./bab3/start";
import Bab3P1 from "./bab3/p1";

import Bab4Awal from "./bab4/start";
import Bab4P1 from "./bab4/p1";
import Bab4P2 from "./bab4/p2";
import Bab4P3 from "./bab4/p3";

import Bab5Awal from "./bab5/start";
import Bab5P1 from "./bab5/p1";
import Bab5P2 from "./bab5/p2";
import Bab5P3 from "./bab5/p3";
import Bab5P4 from "./bab5/p4";
import Bab5P5 from "./bab5/p5";
import Bab5P6 from "./bab5/p6";
import Bab5P7 from "./bab5/p7";
import Bab5P8 from "./bab5/p8";
import Bab5P9 from "./bab5/p9";
import Bab5P10 from "./bab5/p10";
import Bab5P11 from "./bab5/p11";

import Bab6Awal from "./bab6/start";
import Bab6P1 from "./bab6/p1";
import Bab6P2 from "./bab6/p2";
import Bab6P3 from "./bab6/p3";
import Bab6P4 from "./bab6/p4";
import Bab6P5 from "./bab6/p5";
import Bab6P6 from "./bab6/p6";
import Bab6P7 from "./bab6/p7";
import Bab6P8 from "./bab6/p8";
import Bab6P9 from "./bab6/p9";
import Bab6P10 from "./bab6/p10";
import Bab6P11 from "./bab6/p11";
import Bab6P12 from "./bab6/p12";
import Bab6P13 from "./bab6/p13";
import Bab6P14 from "./bab6/p14";
import Bab6P15 from "./bab6/p15";
import Bab6P16 from "./bab6/p16";
import Bab6P17 from "./bab6/p17";
import Bab6P18 from "./bab6/p18";
import Bab6P19 from "./bab6/p19";

import KesimpulanIBD from "./kesimpulanIBD";

import Quiz1 from "./Quiz/quiz1";
import Quiz1Penjelasan from "./Quiz/quiz1_penjelasan";
import Quiz2 from "./Quiz/quiz2";
import Quiz2Penjelasan from "./Quiz/quiz2_penjelasan";
import Quiz3 from "./Quiz/quiz3";
import Quiz3Penjelasan from "./Quiz/quiz3_penjelasan";
import Quiz4 from "./Quiz/quiz4";
import Quiz4Penjelasan from "./Quiz/quiz4_penjelasan";
import Quiz5 from "./Quiz/quiz5";
import Quiz6 from "./Quiz/quiz6";
import Quiz6Penjelasan from "./Quiz/quiz6_penjelasan";
import Quiz7 from "./Quiz/quiz7";
import Quiz7Penjelasan from "./Quiz/quiz7_penjelasan";
import QuizEnd from "./Quiz/quiz_end";

import DaftarPusaka1 from "./end/daftar_pusaka1";
import DaftarPusaka2 from "./end/daftar_pusaka2";
import DaftarPusaka3 from "./end/daftar_pusaka3";
import DaftarPusaka4 from "./end/daftar_pusaka4";



function App() {
    
    var referrer = document.referrer;
    
    var perfEntries = performance.getEntriesByType("navigation");
    
    {/*if (perfEntries[0].type === "reload" || !referrer) {
        window.location.href = '/';
    }*/}

    return (
        <div>
            <Router>
                <div>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/homepage' element={<Homepage />} />
                        <Route exact path='/homepage2' element={<Homepage2 />} />
                        <Route exact path='/selamat-datang' element={<Homepage3 />} />

                        <Route exact path='/beranda-sound' element={<BerandaSound />} />
                        <Route exact path='/beranda-no-sound' element={<BerandaNoSound />} />

                        <Route exact path='/bab1-start' element={<Bab1Awal />} />
                        <Route exact path='/bab1-p1' element={<Bab1P1 />} />

                        <Route exact path='/bab2-start' element={<Bab2Awal />} />
                        <Route exact path='/bab2-p1' element={<Bab2P1 />} />
                        <Route exact path='/bab2-p2' element={<Bab2P2 />} />
                        <Route exact path='/bab2-p3' element={<Bab2P3 />} />
                        <Route exact path='/bab2-p4' element={<Bab2P4 />} />

                        <Route exact path='/bab3-start' element={<Bab3Awal />} />
                        <Route exact path='/bab3-p1' element={<Bab3P1 />} />

                        <Route exact path='/bab4-start' element={<Bab4Awal />} />
                        <Route exact path='/bab4-p1' element={<Bab4P1 />} />
                        <Route exact path='/bab4-p2' element={<Bab4P2 />} />
                        <Route exact path='/bab4-p3' element={<Bab4P3 />} />

                        <Route exact path='/bab5-start' element={<Bab5Awal />} />
                        <Route exact path='/bab5-p1' element={<Bab5P1 />} />
                        <Route exact path='/bab5-p2' element={<Bab5P2 />} />
                        <Route exact path='/bab5-p3' element={<Bab5P3 />} />
                        <Route exact path='/bab5-p4' element={<Bab5P4 />} />
                        <Route exact path='/bab5-p5' element={<Bab5P5 />} />
                        <Route exact path='/bab5-p6' element={<Bab5P6 />} />
                        <Route exact path='/bab5-p7' element={<Bab5P7 />} />
                        <Route exact path='/bab5-p8' element={<Bab5P8 />} />
                        <Route exact path='/bab5-p9' element={<Bab5P9 />} />
                        <Route exact path='/bab5-p10' element={<Bab5P10 />} />
                        <Route exact path='/bab5-p11' element={<Bab5P11 />} />

                        <Route exact path='/bab6-start' element={<Bab6Awal />} />
                        <Route exact path='/bab6-p1' element={<Bab6P1 />} />
                        <Route exact path='/bab6-p2' element={<Bab6P2 />} />
                        <Route exact path='/bab6-p3' element={<Bab6P3 />} />
                        <Route exact path='/bab6-p4' element={<Bab6P4 />} />
                        <Route exact path='/bab6-p5' element={<Bab6P5 />} />
                        <Route exact path='/bab6-p6' element={<Bab6P6 />} />
                        <Route exact path='/bab6-p7' element={<Bab6P7 />} />
                        <Route exact path='/bab6-p8' element={<Bab6P8 />} />
                        <Route exact path='/bab6-p9' element={<Bab6P9 />} />
                        <Route exact path='/bab6-p10' element={<Bab6P10 />} />
                        <Route exact path='/bab6-p11' element={<Bab6P11 />} />
                        <Route exact path='/bab6-p12' element={<Bab6P12 />} />
                        <Route exact path='/bab6-p13' element={<Bab6P13 />} />
                        <Route exact path='/bab6-p14' element={<Bab6P14 />} />
                        <Route exact path='/bab6-p15' element={<Bab6P15 />} />
                        <Route exact path='/bab6-p16' element={<Bab6P16 />} />
                        <Route exact path='/bab6-p17' element={<Bab6P17 />} />
                        <Route exact path='/bab6-p18' element={<Bab6P18 />} />
                        <Route exact path='/bab6-p19' element={<Bab6P19 />} />

                        <Route exact path='/kesimpulan-ibd' element={<KesimpulanIBD />} />
                        
                        <Route exact path='/quiz1' element={<Quiz1 />} />
                        <Route exact path='/quiz1Penjelasan' element={<Quiz1Penjelasan />} />
                        <Route exact path='/quiz2' element={<Quiz2 />} />
                        <Route exact path='/quiz2Penjelasan' element={<Quiz2Penjelasan />} />
                        <Route exact path='/quiz3' element={<Quiz3 />} />
                        <Route exact path='/quiz3Penjelasan' element={<Quiz3Penjelasan />} />
                        <Route exact path='/quiz4' element={<Quiz4 />} />
                        <Route exact path='/quiz4Penjelasan' element={<Quiz4Penjelasan />} />
                        <Route exact path='/quiz5' element={<Quiz5 />} />
                        <Route exact path='/quiz6' element={<Quiz6 />} />
                        <Route exact path='/quiz6Penjelasan' element={<Quiz6Penjelasan />} />
                        <Route exact path='/quiz7' element={<Quiz7 />} />
                        <Route exact path='/quiz7Penjelasan' element={<Quiz7Penjelasan />} />
                        <Route exact path='/quiz-terima-kasih' element={<QuizEnd />} />

                        <Route exact path='/daftar-pusaka-1' element={<DaftarPusaka1 />} />
                        <Route exact path='/daftar-pusaka-2' element={<DaftarPusaka2 />} />
                        <Route exact path='/daftar-pusaka-3' element={<DaftarPusaka3 />} />
                        <Route exact path='/daftar-pusaka-4' element={<DaftarPusaka4 />} />

                    </Routes>
                </div>
            </Router>
        </div >
    )
}
export default App;