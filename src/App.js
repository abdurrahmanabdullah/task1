
import React from 'react';
import Home from './pages/home';
import Providers from './components/providers';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';

import{ BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from './pages/login';
import CreatePostPage from './pages/CreatePostPage';




function App() {
  return (
   
<div>


<Routes>

  <Route path="/" element={<Home />} />  
  <Route path="/providers" element={<Providers />} />
     <Route path="/login" element={<Login />} />
      <Route path="/create-post" element={<CreatePostPage />} />
  
      
  
         
            
           
        
        
</Routes>

</div>

  );
}

export default App;
