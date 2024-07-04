import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PATH } from '@/constant/paths';

import { Layout } from '@/layout';
import { MainPage } from '@/pages/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index path={PATH.root} element={<MainPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
