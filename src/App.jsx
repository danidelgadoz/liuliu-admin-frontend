import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import theme from './theme';
import DashboardLayout from './components/DashboardLayout/DashboardLayout';
import ClientsPage from "./pages/ClientsPage.jsx";
import ClientPage from "./pages/ClientPage.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/client" element={<ClientsPage />} />
            <Route path="/client/add" element={<ClientPage />} />
            <Route path="/client/:id/edit" element={<ClientPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
