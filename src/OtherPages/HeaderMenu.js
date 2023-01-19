import {Link, NavLink} from 'react-router-dom';

export default function HeaderMenu() {

    var activeMenuStyle = {
        fontFamily: "'Times New Roman', Times, serif",
        color: "Blue",
        textDecoration: "underline",
    };

    return (
        <header class="header-container">
        <div class="header">
            <div class="header-logo">
            </div>
            <div class="header-menu-toggle">
                <i class="fa-solid fa-bars"></i>
            </div>
            <nav>
                <div class="header-menu">
                    <NavLink style={({isActive}) => 
                        isActive ? activeMenuStyle : undefined
                    } to="/" >TRANG CHỦ</NavLink>
                    <NavLink style={({isActive}) => 
                        isActive ? activeMenuStyle : undefined
                    } to="/Gioithieu" >GIỚI THIỆU</NavLink>
                    <NavLink style={({isActive}) => 
                        isActive ? activeMenuStyle : undefined
                    } to="/Sanpham" >SẢN PHẨM</NavLink>
                    <NavLink style={({isActive}) => 
                        isActive ? activeMenuStyle : undefined
                    } to="/Tintuc" >TIN TỨC</NavLink>
                    <NavLink style={({isActive}) => 
                        isActive ? activeMenuStyle : undefined
                    } to="/Lienhe" >LIÊN HỆ</NavLink>
                </div>
            </nav>
        </div>
    </header>
    )
}