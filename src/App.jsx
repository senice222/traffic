import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:year/:logoUrl/:entryDate/:balance/:transactions" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
