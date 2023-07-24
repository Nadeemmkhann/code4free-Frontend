import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './components/aboutus/aboutus';
import Homepage from './components/homepage/Homepage';
import Header from './components/homepage/Header';
import ContactUs from './components/contact/contact';
import CoursesCard from './components/courses/CoursesCard'
import WebDev from './components/courses/web-dev/WebDev';
import MobileDev from './components/courses/mobile-dev/MobileDev';
import Programming from './components/courses/programming/programming';
import C from './components/courses/programming/C';
import Cpp from './components/courses/programming/Cpp';
import Java from './components/courses/programming/Java';
import Javascript from './components/courses/programming/Javascript';
import Python from './components/courses/programming/Python';
import Php from './components/courses/programming/Php';
import DataStructure from './components/courses/data-structure/DataStructure';
import DataScience from './components/courses/data-science/DataScience';
import ComputerFundamental from './components/courses/computer-fundamental/ComputerFundamental';
import Sql from './components/courses/computer-fundamental/Sql';
import ComputerNetworks from './components/courses/computer-fundamental/ComputerNetworks';
import OperatingSystem from './components/courses/computer-fundamental/OperatingSystem';
import CS50PlaylistVideos from './components/courses/CS50/CS50PlaylistVideos';
import Html from './components/courses/web-dev/Html';
import Css from './components/courses/web-dev/Css';
import JavaScript from './components/courses/web-dev/JavaScript';
import NodeJs from './components/courses/web-dev/NodeJs';
import ExpressJs from './components/courses/web-dev/ExpressJs';
import MongoDb from './components/courses/web-dev/MongoDb';
import ReactJs from './components/courses/web-dev/ReactJs';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/courses" element={<CoursesCard />} />
          <Route path="/courses/web-dev" element={<WebDev />} />
          <Route path="/courses/web-dev/html" element={<Html />} />
          <Route path="/courses/web-dev/css" element={<Css />} />
          <Route path="/courses/web-dev/javascript" element={<JavaScript />} />
          <Route path="/courses/web-dev/nodejs" element={<NodeJs />} />
          <Route path="/courses/web-dev/expressjs" element={<ExpressJs />} />
          <Route path="/courses/web-dev/mongodb" element={<MongoDb />} />
          <Route path="/courses/web-dev/reactjs" element={<ReactJs />} />
          <Route path="/courses/mobile-dev" element={<MobileDev />} />
          <Route path="/courses/data-science" element={<DataScience />} />
          <Route path="/courses/programming" element={<Programming />} />
          <Route path="/courses/programming/c" element={<C />} />
          <Route path="/courses/programming/cpp" element={<Cpp />} />
          <Route path="/courses/programming/javascript" element={<Javascript />} />
          <Route path="/courses/programming/java" element={<Java />} />
          <Route path="/courses/programming/python" element={<Python />} />
          <Route path="/courses/programming/php" element={<Php />} />
          <Route path="/courses/computer-fundamental" element={<ComputerFundamental />} />
          <Route path="/courses/computer-fundamental/sql" element={<Sql />} />
          <Route path="/courses/computer-fundamental/computer-networks" element={<ComputerNetworks />} />
          <Route path="/courses/computer-fundamental/operating-system" element={<OperatingSystem />} />
          <Route path="/courses/data-structures" element={<DataStructure />} />
          <Route path="/courses/cs50" element={<CS50PlaylistVideos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
