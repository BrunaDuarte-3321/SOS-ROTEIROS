import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/HeaderForm"


const Form  = ()  =>{
    return(
<>
<Header/>
<form>
        <div className="form-group ">
                <div className="title">
                    <h4>Cadastro</h4>
                    <small>Todos os campos são obrigatório</small>
                </div>
            <div className="col-5">
                <input type="text" className="form-control is-valid" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nome completo" required/>
            </div>
        </div>
        <div className="form-group col-5">
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
        </div>
        <div className="form-group col-5">
            <input type="number" className="form-control" id="exampleInputEmail1" placeholder="Telefone"/>
        </div>
        <div className="form-group col-5">
            <input type="password" className="form-control" id="exampleInputEmail1" placeholder="Senha"/>
        </div>
        <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Cliqufffe em mim</label>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
</form>
<Footer/>
</>
    )
}

export default Form