import { Routes, Route } from "react-router-dom";
import HomePage from './components/Home/Home';
import Analysis from './components/Analysis/Analysis';
import Table from './components/Table/Table';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/analysis' element={<Analysis />} />
      <Route path='/table' element={<Table />} />
    </Routes>
  );
};

export default App;
