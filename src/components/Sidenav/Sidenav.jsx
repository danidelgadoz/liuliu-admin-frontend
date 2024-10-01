import { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';

import SidenavMenu from '../SidenavMenu/SidenavMenu';
import { useWindowDimension } from '../../hooks/useWindowDimension';

const drawerWidth = 280;
const maxMobileWidth = 1280;

function Sidenav({ toggled }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDesktopOpen, setIsDesktopOpen] = useState(true);
  const [windowInnerWidth] = useWindowDimension();
  const isFixed = windowInnerWidth < maxMobileWidth;

  useEffect(() => {
    if (toggled !== null) {
      isFixed && setIsMobileOpen(!isMobileOpen);
      !isFixed && setIsDesktopOpen(!isDesktopOpen);
    }
  }, [toggled]);

  const getDrawerStyles = () => {
    const mobileStyles = { width: drawerWidth };

    const desktopStyles = {
      width: isDesktopOpen ? drawerWidth : 0,
      position: 'relative',
      transition: 'width 0.35s',
    };

    return {
      '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        ...(isFixed ? mobileStyles : desktopStyles),
      },
    };
  };

  return (
    <>
      {isFixed && (
        <Drawer
          variant="temporary"
          open={isMobileOpen}
          onClose={() => setIsMobileOpen(false)}
          sx={getDrawerStyles()}
        >
          <SidenavMenu />
        </Drawer>
      )}

      {!isFixed && (
        <Drawer variant="persistent" open sx={getDrawerStyles()}>
          <SidenavMenu />
        </Drawer>
      )}
    </>
  );
}

export default Sidenav;
