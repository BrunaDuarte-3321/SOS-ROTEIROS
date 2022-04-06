import { Link } from 'react-router-dom';
import React from 'react';
import img1 from '../../img/img1.png';
import img2 from '../../img/img2.png';
import img3 from '../../img/im3.png';
import './style.css';

const Body = () => {
  return (
    <main className="d-grid ">
      <div className="col m-3">
        <div className="row">
          <div className="title mt-4">
            <h1>Recife</h1>
          </div>
          <div className="col box">
            <div className="card shadow">
              <div className="image-card">
                <Link to="/roteiro">
                  <img src={img1} className="d-block" alt="" />
                </Link>
              </div>

              <div className="card-body">
                <h5 className="card-title">3 dias</h5>
                <p className="card-text">
                  Um roteiro compilado com as atrações principais de Recife.
                </p>
              </div>
            </div>
          </div>
          <div className="col box">
            <div className="card shadow">
              <div className="image-card">
                <Link to="/roteiro">
                  <img src={img2} className="d-block" alt="" />
                </Link>
              </div>
              <div className="card-body">
                <h5 className="card-title">5 dias</h5>
                <p className="card-text">
                  Roteiro complero com o que há de melhor em Recife.
                </p>
              </div>
            </div>
          </div>
          <div className="col box">
            <div className="card shadow">
              <div className="image-card">
                <Link to="/roteiro">
                  <img src={img3} className="d-block" alt="" />
                </Link>
              </div>
              <div className="card-body">
                <h5 className="card-title">7 dias</h5>
                <p className="card-text">
                  Uma viagem para curtir e descansar, com atrações e descanso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col m-3">
        <div className="row">
          <div className="title mt-4 ">
            <h1>Salvador</h1>
          </div>
          <div className="col box">
            <div className="card shadow">
              <div className="image-card">
                <Link to="/roteiro">
                  <img src={img2} className="d-block" alt="" />
                </Link>
              </div>
              <div className="card-body">
                <h5 className="card-title">3 dias</h5>
                <p className="card-text">
                  Um roteiro compilado com as atrações principais de Recife.
                </p>
              </div>
            </div>
          </div>
          <div className="col box">
            <div className="card shadow">
              <div className="image-card">
                <Link to="/roteiro">
                  <img src={img2} className="d-block" alt="" />
                </Link>
              </div>
              <div className="card-body">
                <h5 className="card-title">5 dias</h5>
                <p className="card-text">
                  Roteiro complero com o que há de melhor em Recife.
                </p>
              </div>
            </div>
          </div>
          <div className="col box">
            <div className="card shadow">
              <div className="image-card">
                <Link to="/roteiro">
                  <img src={img2} className="d-block" alt="" />
                </Link>
              </div>
              <div className="card-body">
                <h5 className="card-title">7 dias</h5>
                <p className="card-text">
                  Uma viagem para curtir e descansar, com atrações e descanso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col m-3">
        <div className="row">
          <div className="title mt-4 ">
            <h1>Fortaleza</h1>
          </div>
          <div className="col box">
            <div className="card shadow">
              <div className="image-card">
                <Link to="/roteiro">
                  <img src={img2} className="d-block" alt="" />
                </Link>
              </div>
              <div className="card-body">
                <h5 className="card-title">3 dias</h5>
                <p className="card-text">
                  Um roteiro compilado com as atrações principais de Recife.
                </p>
              </div>
            </div>
          </div>
          <div className="col box">
            <div className="card shadow">
              <div className="image-card">
                <Link to="/roteiro">
                  <img src={img2} className="d-block" alt="" />
                </Link>
              </div>
              <div className="card-body">
                <h5 className="card-title">5 dias</h5>
                <p className="card-text">
                  Roteiro complero com o que há de melhor em Recife.
                </p>
              </div>
            </div>
          </div>
          <div className="col box">
            <div className="card shadow">
              <div className="image-card">
                <Link to="/roteiro">
                  <img src={img2} className="d-block" alt="" />
                </Link>
              </div>
              <div className="card-body">
                <h5 className="card-title">7 dias</h5>
                <p className="card-text">
                  Uma viagem para curtir e descansar, com atrações e descanso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Body;
