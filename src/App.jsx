import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import DoctorDetails from './pages/DoctorDetails';
import ScanDetails from './pages/ScanDetails';
import Scans from './pages/Scans'; // <--- This was likely missing!
import Checkout from './pages/Checkout';
import Clinics from './pages/Clinics';
import Examinations from './pages/Examinations';
import About from './pages/About';
import EquipmentDetails from './pages/EquipmentDetails';
import ClinicDetails from './pages/ClinicDetails'; // Import the new page
import ExaminationDetails from './pages/ExaminationDetails'; // Import the new page
import Test from './pages/Test';
import SceneTwo from './pages/Scene 2.jsx';
import SceneThreeConference from './pages/SceneThreeConference.jsx';
import SceneFourThemes from './pages/SceneFourThemes.jsx';
import SceneFiveCallForPapers from './pages/SceneFiveCallForPapers.jsx';
import SceneSixDate from './pages/SceneSixDate.jsx';
import SceneSevenDeadline from './pages/SceneSevenDeadline.jsx';
import SceneEightContact from './pages/SceneEightContact.jsx';
import SceneNineFinal from './pages/SceneNineFinal.jsx';
import IslamicBackground from './pages/IslamicBackground.jsx';
import VideoController from './pages/VideoController.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Doctor Routes */}
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:id" element={<DoctorDetails />} />
            
            {/* Scan Routes */}
            <Route path="/scans" element={<Scans />} />
            <Route path="/scans/:id" element={<ScanDetails />} />
            
            {/* Checkout */}
            <Route path="/checkout" element={<Checkout />} />

        
            {/* Clinics */}
            <Route path="/clinics" element={<Clinics />} />
            {/* ✅ Add this new route */}   
           <Route path="/clinics/:id" element={<ClinicDetails />} />
            {/* Examinations */}
            <Route path="/examinations" element={<Examinations />} />
           {/* ✅ Add this new route */}
           <Route path="/examinations/:id" element={<ExaminationDetails />} />

            {/* About */}
            <Route path="/about" element={<About />} />

            {/* Equipment Details */}
              <Route path="/equipments/:id" element={<EquipmentDetails />} />
            
            {/* Test Animation Page */}
            <Route path="/test" element={<Test />} />

            {/* Scene 2 Page */}
            <Route path="/scene-2" element={<SceneTwo />} />

            {/* Scene Three Conference Page */}
            <Route path="/SceneThreeConference" element={<SceneThreeConference />} />

            {/* Scene Four Themes Page */}
            <Route path="/SceneFourThemes" element={<SceneFourThemes />} />

            {/* Scene Five Call For Papers Page */}
            <Route path="/SceneFiveCallForPapers" element={<SceneFiveCallForPapers />} />

            {/* Scene Six Date Page */}
            <Route path="/SceneSixDate" element={<SceneSixDate />} />

            {/* Scene Seven Deadline Page */}
            <Route path="/SceneSevenDeadline" element={<SceneSevenDeadline />} />

            {/* Scene Eight Contact Page */}
            <Route path="/SceneEightContact" element={<SceneEightContact />} />

            {/* Scene Nine Final Page */}
            <Route path="/SceneNineFinal" element={<SceneNineFinal />} />

            {/* Islamic Background Page */}
            <Route path="/IslamicBackground" element={<IslamicBackground />} />



          </Routes>
        </main>
        
        <footer className="bg-secondary text-white py-8 text-center">
          <p>© 2025 مركز المدينة الطبي التخصصي - جميع الحقوق محفوظة</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;