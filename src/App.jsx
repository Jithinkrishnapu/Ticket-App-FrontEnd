import React from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './pages/Home'; 

function App() {
  return (
    <BrowserRouter>
      <div className='justify-center items-center flex ' >
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;