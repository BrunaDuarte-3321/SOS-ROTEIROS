import { Step, StepLabel, Stepper, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React, { useState } from 'react';
import { useEffect } from 'react';
import DadosPessoais from '../DadosPessoais';
import DadosUsuario from '../DadosUsuario';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './style.css';
import { Link } from 'react-router-dom';

function FormularioCadastro({ onSubmit }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const [dadosColetados, setDados] = useState({});

  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      onSubmit(dadosColetados);
    }
  }, []);
  const proximo = () => {
    setEtapaAtual(etapaAtual + 1);
  };

  const coletarDados = (dados) => {
    setDados({ ...dadosColetados, ...dados });
    console.log(dadosColetados);
    proximo();
  };
  const formularios = [
    <DadosUsuario onSubmit={coletarDados} />,
    <DadosPessoais onSubmit={coletarDados} />,

    <Typography variant="h5">
      Obrigado pelo Cadastro
      
    </Typography>
    
  ];
  return (
    <div className="formulario">
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
          <Link type="submit" to="/">
        <ArrowBackIcon />
        Finalizar cadastro
      </Link>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </div>
  );
}

export default FormularioCadastro;
