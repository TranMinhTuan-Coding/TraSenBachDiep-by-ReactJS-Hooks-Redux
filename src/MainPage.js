// import thư viện Router và các page liên quan :
import {Routes, Route} from 'react-router-dom';
import {Trangchu, Gioithieu, SanphamApp, Tintuc, HeaderMenu, Lienhe} from './OtherPages/ImportPages';

export default function App() {
  return (
    <div>
        <HeaderMenu />
        <Routes>
            <Route path="/" element={< Trangchu/>}/>
            <Route path="/Gioithieu" element={< Gioithieu/>}/>
            <Route path="/Sanpham" element={< SanphamApp/>}/>
            <Route path="/Tintuc" element={< Tintuc/>}/>
            <Route path="/Lienhe" element={< Lienhe/>} />
        </Routes>
    </div>
  );
}

