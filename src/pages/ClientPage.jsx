import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getClientById } from '../services/clientService';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ClientPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pageTitle, setPageTitle] = useState('Agregar cliente');
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    address: '',
    phone_number: '',
    email: '',
    birthday: '',
  });

  useEffect(() => {
    if (id) {
      console.log("id", id);
      setPageTitle("Editar cliente");
      // getClientById(id).subscribe(
      //   (client) => {
      //     console.log(client);
      //     setFormData(client);
      //   },
      //   (error) => {
      //     console.error(error);
      //   }
    }
  }, [id]);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <div style={{display: 'flex'}}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          onClick={() => navigate(`/client`)}
        >
          <ArrowBackIcon />
        </IconButton>
        <h2>{pageTitle}</h2>
      </div>
      <form
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem 2rem' }}
        noValidate
        autoComplete="off"
        onSubmit={handleOnSubmit}
      >
        <TextField
          label="Nombres"
          variant="outlined"
          name="firstname"
          value={formData.firstname}
          onChange={handleInputChange}
        />
        <TextField
          label="Apellidos"
          variant="outlined"
          name="lastname"
          value={formData.lastname}
          onChange={handleInputChange}
        />
        <TextField
          label="Dirección"
          variant="outlined"
          name='address'
          value={formData.address}
          onChange={handleInputChange}
        />
        <TextField
          label="Celular"
          variant="outlined"
          name='phone_number'
          value={formData.phone_number}
          onChange={handleInputChange}
        />
        <TextField
          label="Correo electronico"
          variant="outlined"
          name='email'
          value={formData.email}
          onChange={handleInputChange}
        />
        <TextField
          type='date'
          label="Fecha"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          name='birthday'
          value={formData.birthday}
          onChange={handleInputChange}
        />
        <Button
          type="submit"
          variant="contained">
          Guardar
        </Button>
      </form>
    </div>
  );
}
