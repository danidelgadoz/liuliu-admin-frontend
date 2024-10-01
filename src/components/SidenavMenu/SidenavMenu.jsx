import { NavLink } from 'react-router-dom';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import GroupIcon from '@mui/icons-material/Group';
import styled from 'styled-components';

const SidenavMenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .MuiList-root {
    overflow-y: auto;

    .MuiListItemButton-root {
      &.active {
        background-color: #dddddd;
      }
    }
  }
}`;

function SidenavMenu() {
  return (
    <SidenavMenuStyled>
      <Toolbar />
      <Divider />

      <List>
        <ListItemButton component={NavLink} to="/client">
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Clients" />
        </ListItemButton>
      </List>
    </SidenavMenuStyled>
  );
}

export default SidenavMenu;
