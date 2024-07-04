import { Link } from 'react-router-dom';

import { PATH } from '@/constant/paths';
import { Button } from '../ui/button';

/**
 * 전체 페이지에서 쓰이는 header 컴포넌트
 */

/**
 * @todo 햄버거 버튼에 네비게이션 메뉴 추가
 */
const Header = () => {
  return (
    <div className="w-full h-16 px-24 flex justify-between items-center border-b-[1.6px] border-foreground fixed top-0">
      <Button variant="ghost" size="icon">
        <img className="w-6" src="/icons/hamburger_button_icon.svg" alt="mypage_icon" />
      </Button>
      <Link to={PATH.root}>
        <img className="h-7" src="/icons/logo.svg" alt="logo" />
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
