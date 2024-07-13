import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CUSTOMIZING_PATH, PATH } from '@/constant/paths';

import { Layout, LayoutWithNavbar } from '@/layout';
import { MainPage } from '@/pages/Main';
import { CustomizingPage } from '@/pages/Customizing';
import { CustomizingOrderPage } from '@/pages/CustomizingOrder';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path={PATH.root} element={<MainPage />} />
          <Route index path={CUSTOMIZING_PATH.order} element={<CustomizingOrderPage />} />
        </Route>
        <Route element={<LayoutWithNavbar />}>
          <Route index path={CUSTOMIZING_PATH.customizing} element={<CustomizingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
