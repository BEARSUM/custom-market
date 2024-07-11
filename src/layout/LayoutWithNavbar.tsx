import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/\bNavBar';

/**
 * Navbar가 포함된 Layout
 */

/**
 * @todo categoryList fetch api
 */

const LayoutWithNavbar = () => {
  const categoryList = [
    { id: 1, value: 'all', item: '전체' },
    { id: 2, value: 'pouch', item: '파우치' },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <Header />
      <div className="mt-16 grow">
        <div className="my-20 flex flex-col justify-center items-center">
          <Navbar categoryList={categoryList} />
        </div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayoutWithNavbar;
