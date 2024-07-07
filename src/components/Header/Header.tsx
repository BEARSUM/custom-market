import { Link } from 'react-router-dom';

import { PATH } from '@/constant/paths';
import { NavSheet } from './NavSheet';

/**
 * 전체 페이지에서 쓰이는 header 컴포넌트
 */

const Header = () => {
  return (
    <div className="w-full h-16 px-24 flex justify-between items-center border-b border-foreground bg-background fixed top-0 z-10">
      <NavSheet />
      <Link to={PATH.root}>
        <img className="w-40" src="/icons/logo.svg" alt="logo" />
      </Link>
      <div className="flex gap-6">
        <Link to={PATH.mypage}>
          <img className="h-6" src="/icons/mypage_icon.svg" alt="mypage_icon" />
        </Link>
        <Link to={PATH.cart}>
          <img className="h-6" src="/icons/cart_icon.svg" alt="cart_icon" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
