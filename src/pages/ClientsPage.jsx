import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { getClients } from '../services/clientService';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  // {
  //   field: 'fullName',
  //   headerName: 'Nombre completo',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (value, row) => `${row.firstname || ''} ${row.lastname || ''}`,
  // },
  { field: 'firstname', headerName: 'Nombres', flex: 1 },
  { field: 'lastname', headerName: 'Apellidos', flex: 1 },
  { field: 'email', headerName: 'Email', flex: 1 },
  { field: 'phone_number', headerName: 'Celular', flex: 1 },
  // { field: 'birthday', headerName: 'Fecha de nacimiento', width: 200 },
  // { field: 'address', headerName: 'Dirección', flex: 1 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function ClientsPage() {
  const navigate = useNavigate();
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClients().subscribe(
      (clients) => {
        setClients(clients);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  const onNewClientClick = () => {
    navigate(`/client/add`);
  };

  const onRowClick = ({ id }) => {
    navigate(`/client/${id}/edit`);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={(onNewClientClick)}
      >
        Agregar
      </Button>
      <Paper sx={{ width: '100%' }}>
        <DataGrid
          rows={clients}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          sx={{ border: 0 }}
          onRowClick={onRowClick}
          />
      </Paper>
    </div>
  );
}
