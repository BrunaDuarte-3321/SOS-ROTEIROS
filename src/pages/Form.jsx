import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/HeaderForm';

const Form = () => {
  return (
    <>
      <Header />
      <form className="formulario">
        <div className="form-group ">
          <div className="title">
            <h4>Cadastro</h4>
            <small>Todos os campos são obrigatório</small>
          </div>
          <div className="col-5 form-row">
            <input
              type="text"
              className="form-control-lg is-valid"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Nome completo"
              required
            />
          </div>
        </div>
        <div className="form-group col-5 form-row">
          <input
            type="email"
            className="form-control-lg"
            id="exampleInputEmail1"
            placeholder="Email"
          />
        </div>
        <div className="form-group col-5 form-row">
          <input
            type="text"
            className="form-control-lg"
            id="exampleInputEmail1"
            placeholder="Telefone"
          />
        </div>

        <div className="form-group col-5 form-row">
          <input
            type="password"
            className="form-control-lg"
            id="exampleInputEmail1"
            placeholder="Senha"
          />
        </div>

        <button type="submit" >
          Cadastrar
        </button>
      </form>
      <Footer />
    </>
  );
};

export default Form;
