import React from 'react'

import FormularioCadastro from '../Components/Cadastro/FormularioCadastro';
import { Container, Typography } from '@mui/material';
import '@fontsource/roboto/300.css';

import { validatioCpf, passwordValidation } from '../models/cadastro';
import ValidacoesCadastro from '../contexts/ValidacoesCadastro';

const Cadastro = () => {

  const onSubmit = (dados) => {
    console.log(dados);
  };
  return (
    <>
<div className="geral">
      <Container component="article" maxWidth="sm" className="top">
        
        <Typography variant="h3" align="center" component="h1">
          Cadastre-se
        </Typography>
        <ValidacoesCadastro.Provider
          value={{
            cpf: validatioCpf,
            senha: passwordValidation,
            nome: passwordValidation,
          }}
        >
          <FormularioCadastro onSubmit={onSubmit} />
        </ValidacoesCadastro.Provider>
      </Container>
    </div>
    </>
  )
}

export default Cadastro