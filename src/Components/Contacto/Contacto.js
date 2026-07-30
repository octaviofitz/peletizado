import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './contacto.css';

const theme = createTheme({});

function Contacto() {
  const [name, setName] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [mail, setMail] = useState('');
  const [interes, setInteres] = useState('Solicitar Cotización (Big Bags)');
  const [mensaje, setMensaje] = useState('');

  const [errorName, setErrorName] = useState(false);
  const [errorEmpresa, setErrorEmpresa] = useState(false);
  const [errorMail, setErrorMail] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const re = /\S+@\S+\.+\S+/;

  const sendEmail = (e) => {
    e.preventDefault();

    const nameInvalid = !name.trim();
    const empresaInvalid = !empresa.trim();
    const mailInvalid = !re.test(mail);
    const msgInvalid = !mensaje.trim();

    setErrorName(nameInvalid);
    setErrorEmpresa(empresaInvalid);
    setErrorMail(mailInvalid);
    setErrorMsg(msgInvalid);

    if (nameInvalid || empresaInvalid || mailInvalid || msgInvalid) {
      Swal.fire('Error', 'Complete los campos correctamente', 'error');
      return;
    }

    Swal.fire({ title: 'Enviando...', didOpen: () => Swal.showLoading() });

    emailjs
      .sendForm(
        'service_avyk5ff',
        'template_ayu86b6',
        e.target,
        'kGJMjsQGEXz5lmSJ2'
      )
      .then(() => {
        Swal.fire('¡Mensaje enviado!', '', 'success');
        e.target.reset();
        setName('');
        setEmpresa('');
        setMail('');
        setMensaje('');
      })
      .catch(() => {
        Swal.fire('Error al enviar', '', 'error');
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <section className="contacto" id='contacto'>

        <Box component="form" onSubmit={sendEmail} className="formCard">

          {/* HEADER */}
          <div className="formHeader">
            <h2>Contáctenos</h2>
            <p>Solicite cotización o fichas técnicas detalladas.</p>
          </div>

          {/* BODY */}
          <div className="formBody">

            <TextField
              label="Nombre"
              name="nombre"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={errorName}
            />

            <TextField
              label="Empresa"
              name="empresa"
              fullWidth
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              error={errorEmpresa}
            />

            <TextField
              label="Email"
              name="mail"
              type="email"
              fullWidth
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              error={errorMail}
            />

            <TextField
              select
              label="Interés"
              name="interes"
              fullWidth
              value={interes}
              onChange={(e) => setInteres(e.target.value)}
            >
              <MenuItem value="Solicitar Cotización (Big Bags)">
                Solicitar Cotización (Big Bags)
              </MenuItem>
              <MenuItem value="Solicitar Cotización (Bolsas 25kg)">
                Solicitar Cotización (Bolsas 25kg)
              </MenuItem>
              <MenuItem value="Información Técnica">Información Técnica</MenuItem>
              <MenuItem value="Distribución">Distribución</MenuItem>
            </TextField>

            <TextField
              label="Mensaje"
              name="msg"
              multiline
              rows={5}
              fullWidth
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              error={errorMsg}
            />

            <Button type="submit" variant="contained" className="submitBtn">
              Enviar Consulta
            </Button>

          </div>
        </Box>

      </section>
    </ThemeProvider>
  );
}

export default Contacto;