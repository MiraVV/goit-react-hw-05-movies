import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, NavElement } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <header>
        <Nav>
          <NavElement to="/" end>
            Home
          </NavElement>
          <NavElement to="/movies">Movies</NavElement>
        </Nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
