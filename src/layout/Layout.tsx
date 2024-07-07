import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ReactNode } from 'react';

type LayoutPropsType = {
  children: ReactNode | ReactNode[];
};

const Layout = (props: LayoutPropsType) => {
  const { children } = props;

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <Header />
      <div className="mt-16 grow">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
