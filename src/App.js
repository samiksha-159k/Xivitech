
import './App.css';
import Account from './Components/Account';
import Chart from './Components/chart';
import Enterprise from './Components/Enterprise';

import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Automation from './Components/Automation';
import Cloud from './Components/Cloud';

function App() {
  return (
    <div className="App">
     <BrowserRouter>

     <Routes>

          {/* <Route path='/Account' name='account' component={Account} exact/> */}
          <Route path='/services/AIandRPAautomation' name='/services/AIandRPAautomation' element={<Chart/>} exact/>
          <Route path='/services/enterprise-apps' name='services/enterprise-apps' element={<Enterprise/>} exact/>
          <Route path='/services/delivery-pipeline-automation' name='/services/delivery-pipeline-automation' element={<Automation/>} exact/>
          <Route path='/services/cloud' name='/services/cloud' element={<Cloud/>} exact/>
          <Route path='/' element={<Account/>} />
          </Routes>
      </BrowserRouter>
 
   
    </div>
  );
}

export default App;
