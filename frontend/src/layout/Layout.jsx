import React from 'react';
import { useLocation } from 'react-router-dom';

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Routers from "../routes/Routers";

const Layout = () => {
  const location = useLocation();

  // Check if the current route is "/dashboard"
  const isDashboardPage = location.pathname === '/dashboard/';
  const isDashboardusers = location.pathname === '/dashboard/users';
  return (
    <>
      {!isDashboardPage && !isDashboardusers && <Header />}
      <main>
        <Routers />
      </main>
      {!isDashboardPage && !isDashboardusers && <Footer />}
    </>
  );
};

export default Layout;
