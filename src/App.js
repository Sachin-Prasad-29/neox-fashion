import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/:productId' element={<Product />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
