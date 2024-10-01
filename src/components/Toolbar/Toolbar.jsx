import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const ToolbarStyles = { backgroundColor: '#fff', color: '#666' };

const AppToolbar = ({ drawerToggle }) => {
  return (
    <AppBar position="static" style={ToolbarStyles}>
      <Toolbar>
        <div className="flex items-center w-full">
          <div className="block">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={drawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolbar;
