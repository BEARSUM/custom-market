import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PATH } from '@/constant/paths';

import { Layout, LayoutWithNavbar } from '@/layout';
import { MainPage } from '@/pages/Main';
import { CustomizingPage } from '@/pages/Customizing';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path={PATH.root} element={<MainPage />} />
        </Route>
        <Route element={<LayoutWithNavbar />}>
          <Route index path={PATH.customizing} element={<CustomizingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
