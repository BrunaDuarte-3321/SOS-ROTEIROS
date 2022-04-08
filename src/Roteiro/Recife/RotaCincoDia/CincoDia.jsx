import React from 'react';
import { Link } from 'react-router-dom';
import monsteiro from '../img/monsteiro.png';
import museu from '../img/mac-olinda.png';
import location from '../img/location.png';
import dtc10 from '../img/dtc10.png';
import se from '../img/alto-da-se.png';
import igcarmo from '../img/igreja-carmo.png';
import saofrancisco from '../img/convento-sf.png';
import dt8 from '../img/dt8.png';
import dt10 from '../img/dt10.png';
import dt7 from '../img/dt7.png';
import dt5 from '../img/dt5.png';

import Footer from '../../../Footer';
import Header5 from '../../../Header5';

const CincoDias = () => {
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
              <b>Dia 05</b>
              <p><small>Um dia em Olinda</small></p>
            </h2>
            <div className="trajeto">
              <h4>Olinda</h4>
              <img src={dtc10} alt="" />
            </div>
            <div className="content ">
              <div className="row item mb-5">
                <div className="title mx-3">
                  <h3 className="mb-3 card-info">Monstairo de São Bento</h3>
                </div>
                <div className="col clearfix">
                  <div className="images-card">
                    <div className="img1">
                      <img
                        className="card-roteiro col-md-6 float-md-start mb-3 mx-md-3"
                        src={monsteiro}
                        alt=""
                      />
                    </div>
                    <div className="img2">
                      <img src={dt8} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col mx-3 descricao">
                  <h4 className="mt-4 ">09:10</h4>
                  <p>
                    Ao fazer um roteiro pelo Centro Histórico de Olinda, o
                    Mosteiro de São Bento é um dos locais que você não pode
                    deixar de conhecer. A obra de estilo barroco, fundada entre
                    1586 e 1592, destaca-se entre as demais por possuir um belo
                    conjunto arquitetônico, que inclui pinturas e um trabalho
                    muito detalhado em ouro - os guias locais chegam a afirmar
                    que no interior do Mosteiro foram utilizados cerca de 100kg
                    de ouro. O altar tem mais de 12m e é realmente espetacular,
                    todo feito em madeira e revestido em ouro. Imperdível!{' '}
                    <br />
                    <br />
                    Se puder, faça sua visita às 10h, no domingo, que é quando
                    se pode admirar o canto gregoriano. Entrada gratuita.
                    <br /> <br /> Entrada gratuita.
                  </p>
                  <h3>Duração: 2h</h3>
                  <div className="endereco">
                    <div className="img-location">
                      <img src={location} alt="" />
                      Endereço: Rua São Bento, s/n, Olinda - PE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content dia" id="pills-tabContent">
            <div className="content ">
              <div className="row item mb-5">
                <div className="title mx-3">
                  <h3 className="mb-3 card-info">Igreja do Carmo</h3>
                </div>
                <div className="col clearfix">
                  <div className="images-card">
                    <div className="img1">
                      <img
                        className="card-roteiro col-md-6 float-md-start mb-3 mx-md-3"
                        src={igcarmo}
                        alt=""
                      />
                    </div>
                    <div className="img2">
                      <img src={dt7} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col mx-3 descricao">
                  <h4 className="mt-4 ">11:00</h4>
                  <p>
                    A Igreja do Carmo, com construção iniciada em 1580, é uma
                    das obras mais simbólicas de Olinda. Estrategicamente
                    construída no alto de um morro, foi a primeira igreja da
                    Ordem dos Carmelitas na América Latina.
                    <br />
                    <br />
                    Depois de um longo período fechada para reformas, a igreja
                    oferece visitas gratuitas aos turistas, que podem admirar os
                    dois altares, feitos em madeira entalhada e pintados com
                    ouro. No geral, a arquitetura da igreja é bastante simples -
                    os detalhes minuciosos dos altares é que chamam a atenção.
                  </p>

                  <h3>Duração: 2h</h3>
                  <div className="endereco">
                    <div className="img-location">
                      <img src={location} alt="" />
                      Endereço: Praça do Carmo, s/n, Olinda - PE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content ">
            <div className="row item mb-5">
              <div className="title mx-3">
                <h3 className="mb-3 card-info">Convento São Francisco</h3>
              </div>
              <div className="col clearfix">
                <div className="images-card">
                  <div className="img1">
                    <img
                      className="card-roteiro col-md-6 float-md-start mb-3 mx-md-3"
                      src={saofrancisco}
                      alt=""
                    />
                  </div>
                  <div className="img2">
                    <img src={dt5} alt="" />
                  </div>
                </div>
              </div>
              <div className="col mx-3 descricao">
                <h4 className="mt-4 ">13:00</h4>
                <p>
                  O Convento de São Francisco, datado de 1585, faz parte de um
                  conjunto arquitetônico que inclui a Igreja de Nossa Senhora
                  das Neves, a Capela de Santana e a Capela de São Roque.
                  <br />
                  <br />
                  Na propriedade, que tem vários ambientes, chamam a atenção os
                  trabalhos feitos em madeira, as pinturas e, principalmente, os
                  azulejos portugueses que retratam a vida de Francisco de
                  Assis. O local merece uma reforma, pois não está tão bem
                  conservado, mas vale a visita.
                  <br />
                  <br />
                  Entrada: R$ 3.
                </p>

                <h3>Duração: 2h</h3>
                <div className="endereco">
                  <div className="img-location">
                    <img src={location} alt="" />
                   Endereço: Rua São Francisco, 280, Olinda - PE
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content ">
            <div className="row item mb-5">
              <div className="title mx-3">
                <h3 className="mb-3 card-info">Alto da Sé</h3>
              </div>
              <div className="col clearfix">
                <div className="images-card">
                  <div className="img1">
                    <img
                      className="card-roteiro col-md-6 float-md-start mb-3 mx-md-3"
                      src={se}
                      alt=""
                    />
                  </div>
                  <div className="img2">
                    <img src={dt10} alt="" />
                  </div>
                </div>
              </div>
              <div className="col mx-3 descricao">
                <h4 className="mt-4 ">13:00</h4>
                <p>
                  O Alto da Sé é uma região de Olinda muito visitada por
                  turistas. Nesse local concentram-se alguns pontos turísticos -
                  como o Elevador Panorâmico e a Igreja da Sé -, além de
                  lojinhas e barracas que vendem artesanato. Para quem quer
                  chegar ao Alto da Sé, é mais vantagem subir pela Rua São
                  Francisco, que tem uma ladeira menos íngreme do que a rua da
                  Ladeira da Misericórdia.
                  <br />
                  <br />É um lugar legal para encontrar artesanato, quadros,
                  lembranças etc.
                </p>

                <h3>Duração: 2h</h3>
                <div className="endereco">
                  <div className="img-location">
                    <img src={location} alt="" />
                   Endereço: Alto da Sé, Olinda - PE
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content ">
            <div className="row item mb-5">
              <div className="title mx-3">
                <h3 className="mb-3 card-info">AMuseu de Arte Contemporânea</h3>
              </div>
              <div className="col clearfix">
                <div className="images-card">
                  <div className="img1">
                    <img
                      className="card-roteiro col-md-6 float-md-start mb-3 mx-md-3"
                      src={museu}
                      alt=""
                    />
                  </div>
                  <div className="img2">
                    <img src={dt10} alt="" />
                  </div>
                </div>
              </div>
              <div className="col mx-3 descricao">
                <h4 className="mt-4 ">13:00</h4>
                <p>
                Uma das cidades mais antigas do Brasil, listada como Patrimônio Histórico pela Unesco, Olinda dá grande importância a seus museus.
                  <br />
                  <br />O Museu de Arte Contemporânea, no centro histórico, funciona na antiga sede do Aljube da Diocese de Olinda. O Museu de Arte Sacra de Pernambuco, por sua vez, está instalado em um edifício histórico, um dos primeiros construídos na cidade.

                </p>

                <h3>Duração: 2h</h3>
                <div className="endereco">
                  <div className="img-location">
                    <img src={location} alt="" />
                    Endereço: R, Treze de Maio, 149 - Olinda - PE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CincoDias;
