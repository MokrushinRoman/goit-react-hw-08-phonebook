import { Outlet } from 'react-router-dom';
import { AppBar, LoadingView } from 'components';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <div className="container">
          <Suspense fallback={<LoadingView />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};
