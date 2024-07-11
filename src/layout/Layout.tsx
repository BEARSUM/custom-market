import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Outlet } from 'react-router-dom';

/**
 * 기본 Layout(Header, Footer)
 */

const Layout = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <Header />
      <div className="mt-16 grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
