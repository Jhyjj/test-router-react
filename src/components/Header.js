import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <h1>멍멍이몰</h1>
            <ul>
                <li><Link to='/'>메인페이지</Link></li>
                <li><Link to="/bestproduct">베스트상품</Link></li>
                <li><Link to="/product">전체상품</Link></li>
                <li><Link to="/review">상품후기</Link></li>
            </ul>
        </div>
    );
};

export default Header;