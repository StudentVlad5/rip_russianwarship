import {Routes, Route} from 'react-router-dom';
import { Home } from './Home/Home';

import { NotFound } from './NotFound/NotFound';
import { Statistics } from './Statistics/Statistics';
export const App = () => {
  return (
    <>

    <Routes>
      <Route path='/' element={<Home/>}>
      <Route path="statistics" element={<Statistics/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
    
  );
};
