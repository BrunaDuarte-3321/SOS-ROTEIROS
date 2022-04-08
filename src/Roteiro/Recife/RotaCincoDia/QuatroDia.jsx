import React from 'react';
import { Link } from 'react-router-dom';
import muroalto from '../img/muro-alto.png';
import porto from '../img/porto-de-gali.png';
import pontal from '../img/pontal.png';
import dtc25 from '../img/dtc-25.png';
import dtc10 from '../img/dtc10.png';
import dtc120 from '../img/dtc120.png';
import Footer from '../../../Footer';
import Header5 from '../../../Header5';

const QuatroDia = () => {
  return (
    <>
    <Header5/>
      <main className="container">
        <div className="title2 m-3 row justify-content-around">
          <h1 className="col">Guia de Recife para 05 dias</h1>
          <button>
            <a
              href="#"
              download="recife.pdf"
              className="btnDownload col-3 text-center"
            >
              Baixar Roteiro Completo
              <i class="bi bi-cloud-arrow-down-fill"></i>
            </a>
          </button>
        </div>
        <div className="botoes">
          <Link to="/rotacincodiaum">
            <button>Dia 01</button>
          </Link>
          <Link to="/rotacincodiadois">
            <button>Dia 02</button>
          </Link>
          <Link to="/rotacincodiatres">
            <button>Dia 03</button>
          </Link>
          <Link to="/rotacincodiaquatro">
            <button>Dia 04</button>
          </Link>
          <Link to="/rotacincodiacinco">
            <button>Dia 05</button>
          </Link>
        </div>
        <div>
          <div className="tab-content dia" id="pills-tabContent">
            <h2 className="my-5">
              <b>Dia 04</b>
              <p><small>Um dia em Porto de Galinhas</small></p>
            </h2>
            <div className="trajeto">
              <h4>Recife</h4>
              <img src={dtc120} alt="" />
            </div>
            <div className="content ">
              <div className="row item mb-5">
                <div className="title mx-3">
                  <h3 className="mb-3 card-info">Praia de Muro Alto</h3>
                </div>
                <div className="col clearfix">
                  <div className="images-card">
                    <div className="img1">
                      <img
                        className="card-roteiro col-md-6 float-md-start mb-3 mx-md-3"
                        src={muroalto}
                        alt=""
                      />
                    </div>
                    <div className="img2">
                      <img src={dtc25} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col mx-3 descricao">
                  <h4 className="mt-4 ">09:00</h4>
                  <p>
                  A Praia de Muro Alto é uma das mais famosas da região. Localizada a aproximadamente 8 km da praia de Porto de Galinhas, ela possui águas mornas, rasas e cristalinas, atraindo turistas de diversas regiões do país. <br />
                    <br />
                    Também é a praia preferida dos amantes de corrida, pois a areia mais próxima do mar é firme o suficiente para correr 5km ou 10k e não causar dor nas panturrilhas dos corredores.

                    <br /> <br /> Excelente para passar horas apenas admirando a paisagem, essa é a praia certa para quem busca águas tranquilas.

                  </p>
                  <h3>Duração: 2h</h3>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content dia" id="pills-tabContent">
            <div className="content ">
              <div className="row item mb-5">
                <div className="title mx-3">
                  <h3 className="mb-3 card-info">Porto de Galinhas</h3>
                </div>
                <div className="col clearfix">
                  <div className="images-card">
                    <div className="img1">
                      <img
                        className="card-roteiro col-md-6 float-md-start mb-3 mx-md-3"
                        src={porto}
                        alt=""
                      />
                    </div>
                    <div className="img2">
                      <img src={dtc10} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col mx-3 descricao">
                  <h4 className="mt-4 ">13:00</h4>
                  <p>
                  As piscinas naturais de Porto de Galinhas permitem que essa seja uma das praias mais famosas do Brasil. Com sua beleza paradisíaca, as águas azuis e calmas marcam o local, já que é possível até mesmo observar os peixes que vivem ali.
                    <br />
                    <br />
                    A paisagem das piscinas naturais é surpreendente e encantadora. O passeio é inesquecível e um dos locais mais belos que os visitantes já viram.
                  </p>

                  <h3>Duração: 3h</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="content ">
            <div className="row item mb-5">
              <div className="title mx-3">
                <h3 className="mb-3 card-info">Portal de Maracaípe</h3>
              </div>
              <div className="col clearfix">
                <div className="images-card">
                  <div className="img1">
                    <img
                      className="card-roteiro col-md-6 float-md-start mb-3 mx-md-3"
                      src={pontal}
                      alt=""
                    />
                  </div>
                  
                </div>
              </div>
              <div className="col mx-3 descricao">
                <h4 className="mt-4 ">16:00</h4>
                <p>
                O Pontal de Maracaípe é o local onde acontece o encontro entre as águas do rios e do mar. Devido ao acesso ser restrito apenas para quem vai a pé ou de bugue, o Pontal de Maracaípe é mais vazio que as praias da região, e tão lindo quanto.

                  <br />
                  <br />
                  O passeio de jangada na região é muito indicado por visitantes, especialmente durante o pôr do sol, para uma experiência ainda mais surpreendente.
                  
                </p>

                <h3>Duração: 2h</h3>
              </div>
            </div>
          </div>
          <div className="trajeto">
            <img src={dtc120} alt="" />
              <h4>Recife</h4>
            </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default QuatroDia;
