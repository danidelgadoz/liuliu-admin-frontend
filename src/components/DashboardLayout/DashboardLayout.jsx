import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import AppToolbar from '../Toolbar/Toolbar';
import Sidenav from '../Sidenav/Sidenav';

const DashboardLayout = () => {
  const [sidenavToggled, setSidenavToggled] = useState(null);

  const handleDrawerToggle = () => {
    setSidenavToggled(!sidenavToggled);
  };

  return (
    <div className="flex">
      <Sidenav toggled={sidenavToggled} />

      <main className="flex-1">
        <AppToolbar drawerToggle={handleDrawerToggle} />

        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
