import './App.css';
import SideMenu from './components/SideMenu';

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route 
} from "react-router-dom";
import { useState } from 'react';

const Dashboard = () => {
  return <h1>Dashboard</h1>;
}
const Content = () => {
  return <h1>Content</h1>;
}
const Courses = () => {
  return <h1>Content/Courses</h1>;
}
const Videos = () => {
  return <h1>Content/Videos</h1>;
}
const Design = () => {
  return <h1>Design</h1>;
}

function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <SideMenu onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }} />

        <div className={`container ${inactive ? 'inactive' : ""}`}>
          <switch>
            <Routes>
              <Route exact path="/" element={<Dashboard/>}/>
              <Route path="/content" element={<Content/>}/>
              <Route path="content/courses" element={<Courses/>}/>
              <Route path="/content/videos" element={<Videos/>}/>
              <Route path="/design" element={<Design/>}/>
            </Routes>
          </switch>
        </div>

      </Router>
    </div>
  );
}

export default App;
