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
                  <h3 className="mb-3 card-info">Monstairo de S??o Bento</h3>
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
                    Ao fazer um roteiro pelo Centro Hist??rico de Olinda, o
                    Mosteiro de S??o Bento ?? um dos locais que voc?? n??o pode
                    deixar de conhecer. A obra de estilo barroco, fundada entre
                    1586 e 1592, destaca-se entre as demais por possuir um belo
                    conjunto arquitet??nico, que inclui pinturas e um trabalho
                    muito detalhado em ouro - os guias locais chegam a afirmar
                    que no interior do Mosteiro foram utilizados cerca de 100kg
                    de ouro. O altar tem mais de 12m e ?? realmente espetacular,
                    todo feito em madeira e revestido em ouro. Imperd??vel!{' '}
                    <br />
                    <br />
                    Se puder, fa??a sua visita ??s 10h, no domingo, que ?? quando
                    se pode admirar o canto gregoriano. Entrada gratuita.
                    <br /> <br /> Entrada gratuita.
                  </p>
                  <h3>Dura????o: 2h</h3>
                  <div className="endereco">
                    <div className="img-location">
                      <img src={location} alt="" />
                      Endere??o: Rua S??o Bento, s/n, Olinda - PE
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
                    A Igreja do Carmo, com constru????o iniciada em 1580, ?? uma
                    das obras mais simb??licas de Olinda. Estrategicamente
                    constru??da no alto de um morro, foi a primeira igreja da
                    Ordem dos Carmelitas na Am??rica Latina.
                    <br />
                    <br />
                    Depois de um longo per??odo fechada para reformas, a igreja
                    oferece visitas gratuitas aos turistas, que podem admirar os
                    dois altares, feitos em madeira entalhada e pintados com
                    ouro. No geral, a arquitetura da igreja ?? bastante simples -
                    os detalhes minuciosos dos altares ?? que chamam a aten????o.
                  </p>

                  <h3>Dura????o: 2h</h3>
                  <div className="endereco">
                    <div className="img-location">
                      <img src={location} alt="" />
                      Endere??o: Pra??a do Carmo, s/n, Olinda - PE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content ">
            <div className="row item mb-5">
              <div className="title mx-3">
                <h3 className="mb-3 card-info">Convento S??o Francisco</h3>
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
                  O Convento de S??o Francisco, datado de 1585, faz parte de um
                  conjunto arquitet??nico que inclui a Igreja de Nossa Senhora
                  das Neves, a Capela de Santana e a Capela de S??o Roque.
                  <br />
                  <br />
                  Na propriedade, que tem v??rios ambientes, chamam a aten????o os
                  trabalhos feitos em madeira, as pinturas e, principalmente, os
                  azulejos portugueses que retratam a vida de Francisco de
                  Assis. O local merece uma reforma, pois n??o est?? t??o bem
                  conservado, mas vale a visita.
                  <br />
                  <br />
                  Entrada: R$ 3.
                </p>

                <h3>Dura????o: 2h</h3>
                <div className="endereco">
                  <div className="img-location">
                    <img src={location} alt="" />
                   Endere??o: Rua S??o Francisco, 280, Olinda - PE
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content ">
            <div className="row item mb-5">
              <div className="title mx-3">
                <h3 className="mb-3 card-info">Alto da S??</h3>
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
                  O Alto da S?? ?? uma regi??o de Olinda muito visitada por
                  turistas. Nesse local concentram-se alguns pontos tur??sticos -
                  como o Elevador Panor??mico e a Igreja da S?? -, al??m de
                  lojinhas e barracas que vendem artesanato. Para quem quer
                  chegar ao Alto da S??, ?? mais vantagem subir pela Rua S??o
                  Francisco, que tem uma ladeira menos ??ngreme do que a rua da
                  Ladeira da Miseric??rdia.
                  <br />
                  <br />?? um lugar legal para encontrar artesanato, quadros,
                  lembran??as etc.
                </p>

                <h3>Dura????o: 2h</h3>
                <div className="endereco">
                  <div className="img-location">
                    <img src={location} alt="" />
                   Endere??o: Alto da S??, Olinda - PE
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content ">
            <div className="row item mb-5">
              <div className="title mx-3">
                <h3 className="mb-3 card-info">AMuseu de Arte Contempor??nea</h3>
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
                Uma das cidades mais antigas do Brasil, listada como Patrim??nio Hist??rico pela Unesco, Olinda d?? grande import??ncia a seus museus.
                  <br />
                  <br />O Museu de Arte Contempor??nea, no centro hist??rico, funciona na antiga sede do Aljube da Diocese de Olinda. O Museu de Arte Sacra de Pernambuco, por sua vez, est?? instalado em um edif??cio hist??rico, um dos primeiros constru??dos na cidade.

                </p>

                <h3>Dura????o: 2h</h3>
                <div className="endereco">
                  <div className="img-location">
                    <img src={location} alt="" />
                    Endere??o: R, Treze de Maio, 149 - Olinda - PE
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
