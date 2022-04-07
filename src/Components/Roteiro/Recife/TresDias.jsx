import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import mz from './img/marcozero.png';
import da from './img/da.png';
import location from './img/location.png';
import rbomjesus from './img/rbomjesus.png';
import boneco from './img/boneco.png';
import rmoeda from './img/rmoeda.png';
import dt2 from './img/dt2.png';
import dt5 from './img/dt5.png';
import pcFrevo from './img/pcFrevo.png';
import Footer from '../../Footer';

const TresDiasRecife = () => {
  return (
    <>
      <main className="container">
        <div className="title2 m-3 row justify-content-around">
          <h1 className="col">Guia de Recife para 03 dias</h1>
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
          <Link to="/diaum">
            <button>Dia 01</button>
          </Link>
          <Link to="/diadois">
            <button>Dia 02</button>
          </Link>
          <Link to="/">
            <button>Dia 03</button>
          </Link>
        </div>
        <div>
          <div className="tab-content dia" id="pills-tabContent">
            <h2 className="my-5">
              <b>Dia 01</b>
            </h2>
            <div className="content ">
              <div className="row item mb-5">
                <div className="title mx-3">
                  <h3 className="mb-3 card-info">Praça Marco Zero</h3>
                </div>
                <div className="col clearfix">
                  <div className="images-card">
                    <div className="img1">
                      <img
                        className="card-roteiro col-md-6 float-md-start mb-3 mx-md-3"
                        src={mz}
                        alt=""
                      />
                    </div>
                    <div className="img2">
                      <img src={da} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col mx-3 descricao">
                  <h4 className="mt-4 ">09:00</h4>
                  <p>
                    O Marco Zero, na Praça Rio Branco, é conhecido como local de
                    fundação da cidade do Recife e também como ponto inicial de
                    contagem das distâncias calculadas a partir da cidade. O
                    lugar é um dos pontos mais importantes na capital
                    Pernambucana, pois é também uma região de forte movimento
                    durante o Carnaval. <br />
                    <br />
                    Aproveite sua visita para tirar uma foto com os dois marcos
                    (o antigo e o novo), observar a vista para o Parque de
                    Esculturas e os edifícios do Centro Cultural da Caixa e da
                    Associação Comercial de Pernambuco.
                    <br /> <br /> Se quiser fazer compras, vale a pena visitar o
                    novo Mercado de Artesanato, que também fica no local.
                  </p>

                  <h3>Duração: 1h 15min</h3>
                  <div className="endereco">
                    <div className="img-location">
                      <img src={location} alt="" />
                      <p>
                        Endereço: praça Rio Branco, Recife Antigo, Recife - PE
                      </p>
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
                  <h3 className="mb-3 card-info">Paço do Frevo</h3>
                </div>
                <div className="col clearfix">
                  <div className="images-card">
                    <div className="img1">
                      <img
                        className="card-roteiro col-md-6 float-md-start mb-3 mx-md-3"
                        src={pcFrevo}
                        alt=""
                      />
                    </div>
                    <div className="img2">
                      <img src={dt2} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col mx-3 descricao">
                  <h4 className="mt-4 ">10:00</h4>
                  <p>
                    O Paço do Frevo é um centro de referência de ações, projetos
                    e atividades de documentação, transmissão, salvaguarda e
                    valorização de uma das principais tradições culturais
                    brasileiras, reconhecida como Patrimônio Imaterial da
                    Humanidade pela Unesco: o frevo. Um lugar para estudar,
                    criar, experimentar e vivenciar o rico universo de
                    histórias, personalidades, memórias e linguagens artísticas.{' '}
                    <br />
                    <br />
                    Localizado no Bairro do Recife, o Paço tem curadoria
                    assinada por Bia Lessa. Além de se valer de conteúdos e
                    linguagens diversas para manter vivo o ritmo que embalou a
                    formação da identidade cultural recifense, o equipamento
                    promove oficinas e apresentações musicais regulares em
                    quatro pavimentos de atividades, que oferecem aos visitantes
                    a possibilidade de experimentar o Carnaval recifense durante
                    todo o ano.
                  </p>

                  <h3>Duração: 1h</h3>
                  <div className="endereco">
                    <div className="img-location">
                      <img src={location} alt="" />
                      <p>
                        Endereço: Praça do Arsenal da Marinha, s/n, Recife
                        Antigo, Recife - PE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content ">
            <div className="row item mb-5">
              <div className="title mx-3">
                <h3 className="mb-3 card-info">Rua do Bom Jesus</h3>
              </div>
              <div className="col clearfix">
                <div className="images-card">
                  <div className="img1">
                    <img
                      className="card-roteiro col-md-6 float-md-start mb-3 mx-md-3"
                      src={rbomjesus}
                      alt=""
                    />
                  </div>
                  <div className="img2">
                    <img src={dt5} alt="" />
                  </div>
                </div>
              </div>
              <div className="col mx-3 descricao">
                <h4 className="mt-4 ">11:00</h4>
                <p>
                  A Rua do Bom Jesus, antiga Rua dos Judeus, é uma das mais
                  importantes do Recife. Ela é pequena, cheia de edifícios
                  antigos e coloridos, entre eles um casarão onde foi construída
                  uma das primeiras sinagogas das Américas.
                  <br />
                  <br />
                  Aos domingos acontece uma feira de artesanato que torna a rua
                  ainda mais interessante.
                  <br />
                  <br />
                  Não é um shopping grande e com muita variedade de lojas;
                  possui uma praça de alimentação pequena, mas se destaca pelo
                  ambiente intimista e aconchegante. É um shopping legal para
                  fazer a pausa do almoço.
                </p>

                <h3>Duração: 3h30min</h3>
                <div className="endereco">
                  <div className="img-location">
                    <img src={location} alt="" />
                    <p>Endereço: Rua Bom Jesus, Recife Antigo, Recife - PE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content dia" id="pills-tabContent">
            <div className="content ">
              <div className="row item mb-5">
                <div className="title mx-3">
                  <h3 className="mb-3 card-info">
                    Embaixada dos Bonecos Gigantes
                  </h3>
                </div>
                <div className="col clearfix">
                  <div className="images-card">
                    <div className="img1">
                      <img
                        className="card-roteiro col-md-6 float-md-start mb-3 mx-md-3"
                        src={boneco}
                        alt=""
                      />
                    </div>
                    <div className="img2">
                      <img src={dt5} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col mx-3 descricao">
                  <h4 className="mt-4 ">15:00</h4>
                  <p>
                    Quem perdeu o Carnaval de Recife e Olinda e não conseguiu
                    ver os bonecos gigantes em ação não precisa ficar triste! A
                    Embaixada dos Bonecos Gigantes expõe os famosos bonecos
                    criados para participar do Carnaval nas duas cidades,
                    permitindo que os turistas tenham uma clara ideia da
                    dimensão, da estrutura e do modo de criação dos personagens.
                    Os bonecos pesados e bem trabalhados representam
                    personalidades variadas, personagens de desenhos e figuras
                    brasileiras que se destacam ao longo do ano.
                    <br />
                    <br />
                    Adultos R$ 10,00 (Dez reais) |Criança (com até 12 anos)
                    acompanhada por adulto pagante, entra sem pagar
                    <br />
                    <br />
                    Horário de Funcionamento: Segunda a Domingo das 08:00h às
                    18:00h.
                    <br />
                    <br />
                    Abre nos feriados exceto: Carnaval (sábado até a terça), 25
                    de dezembro e 01 de janeiro.
                  </p>

                  <h3>Duração: 1h30min</h3>
                  <div className="endereco">
                    <div className="img-location">
                      <img src={location} alt="" />
                      <p>
                        Endereço: Rua Bom Jesus, 183, Recife Antigo, Recife - P
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content ">
              <div className="row item mb-5">
                <div className="title mx-3">
                  <h3 className="mb-3 card-info">Rua da Moeda</h3>
                </div>
                <div className="col clearfix">
                  <div className="images-card">
                    <div className="img1">
                      <img
                        className="card-roteiro col-md-6 float-md-start mb-3 mx-md-3"
                        src={rmoeda}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col mx-3 descricao">
                  <h4 className="mt-4 ">16:30</h4>
                  <p>
                    A Rua da Moeda é uma das mais conhecidas do Recife Antigo,
                    popular entre os jovens por aglomerar vários bares legais na
                    mesma região. Para quem quer fazer um happy hour ou
                    encontrar os amigos, os bares da rua são boas opções.
                    <br />
                    <br />
                    O lugar também recebe apresentações musicais, inclusive nas
                    prévias do Carnaval.
                    <br />
                    <br />
                    Que tal fiinalizar o dia com drinks e petiscos locais?
                  </p>

                  <h3>Duração: 1h30min</h3>
                  <div className="endereco">
                    <div className="img-location">
                      <img src={location} alt="" />
                      <p>Endereço: Rua da Moeda, Recife Antigo, Recife - PE</p>
                    </div>
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

export default TresDiasRecife;
