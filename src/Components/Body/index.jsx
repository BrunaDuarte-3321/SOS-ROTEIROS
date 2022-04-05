import { Link } from 'react-router-dom';
import React from 'react';
import './style.css';

const Body = () => {
  return (
    <main className="d-grid my-5">
      <div className="col m-3">
        <div className="row">
          <div className="title mt-4">
            <a href="./recife.html">
              <h1>Recife</h1>
            </a>
          </div>
          <div className="col box">
            <div className="card shadow">
              <Link to="/roteiro">
                <img
                  src="https://a.cdn-hotels.com/gdcs/production173/d1802/a586e63e-779b-49fc-86a3-0eff604edeef.jpg"
                  className="d-block"
                  alt=""
                />
              </Link>

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
              <img
                src="https://media.istockphoto.com/photos/panoramic-view-from-boa-viagem-beach-picture-id1023826554?k=20&m=1023826554&s=612x612&w=0&h=FWmyDnrTjXqjtsK0h2AMIAc5DvACz__wYhJuu9TroLU="
                className="card-img-top"
                alt="..."
              />
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
              <img
                src="https://i2.wp.com/www.wine.com.br/winepedia/wp-content/uploads/2018/03/Parque-das-Esculturas-Francisco-Brennand.jpg?ssl=1"
                className="card-img-top"
                alt="..."
              />
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
            <a href="./salvador.html">
              <h1>Salvador</h1>
            </a>
          </div>
          <div className="col box">
            <div className="card shadow">
              <img
                src="https://media.istockphoto.com/photos/lacerda-elevator-and-the-bay-of-all-saints-salvador-bahia-brazil-picture-id1159298337?k=20&m=1159298337&s=612x612&w=0&h=9p6fGXMRqIup8MCYZfK9VuGl-EYjHzifC-7nXquv4qo="
                className="d-block"
                alt=""
              />
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
              <img
                src="https://media.istockphoto.com/photos/acaraje-brazilian-food-picture-id1277025351?k=20&m=1277025351&s=612x612&w=0&h=x9VFz3esRq7sif-OUhP-9C42ehBM9cUCY82OLMwRH4A="
                className="card-img-top"
                alt="..."
              />
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
              <img
                src="https://media.istockphoto.com/photos/view-over-coast-with-lighthouse-farol-da-barra-in-salvador-picture-id501665906?k=20&m=501665906&s=612x612&w=0&h=wTP_5YvWLtDWD-mBc_ijUFOEXYKFuL9-mPiXvw3ypW0="
                className="card-img-top"
                alt="..."
              />
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
            <a href="./fortaleza.html">
              <h1>Fortaleza</h1>
            </a>
          </div>
          <div className="col box">
            <div className="card shadow">
              <img
                src="https://www.cogef.ms.gov.br/wp-content/webpc-passthru.php?src=https://www.cogef.ms.gov.br/wp-content/uploads/2014/10/Fortaleza.jpg&nocache=1"
                className="d-block"
                alt=""
              />
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
              <img
                src="https://www.passagenspromo.com.br/blog/wp-content/uploads/2020/02/pontos-turisticos-de-fortaleza-centro-historico.jpg"
                className="card-img-top"
                alt="..."
              />
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
              <img
                src="https://images.unsplash.com/photo-1637158530385-20a183614419?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="card-img-top"
                alt="..."
              />
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
