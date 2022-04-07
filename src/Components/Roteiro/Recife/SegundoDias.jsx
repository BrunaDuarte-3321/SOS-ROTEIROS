import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import da from './img/da.png';
import alfandega from './img/alfandega.png';
import location from './img/location.png';
import dt2 from './img/dt2.png';
import dt5 from './img/dt5.png';
import cc from './img/cc.png';
import mcjose from './img/mcjose.png';
import igdourada from './img/igdourada.png';
import leite from './img/leite.png';
import catamara from './img/catamara.png';
import Footer from '../../Footer';

const SegundoDias = () => {
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
          <Link to="/diatres">
            <button>Dia 03</button>
          </Link>
        </div>
        <div>
          <div className="tab-content dia" id="pills-tabContent">
            <h2 className="my-5">
              <b>Dia 02</b>
            </h2>
            <div className="content ">
              <div className="row item mb-5">
                <div className="title mx-3">
                  <h3 className="mb-3 card-info">Paço Alfândega</h3>
                </div>
                <div className="col clearfix">
                  <div className="images-card">
                    <div className="img1">
                      <img
                        className="card-roteiro col-md-6 float-md-start mb-3 mx-md-3"
                        src={alfandega}
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
                    O Paço Alfândega já foi convento e alfândega do Recife e
                    hoje em dia é um dos shoppings mais charmosos da cidade. Seu
                    interior ainda conserva um misto de estrutura rústica e
                    moderna, relembrando as origens do edifício do século XVIII.{' '}
                    <br />
                    <br />
                    Um lugar super bacana para sentar e tomar um café da manhã.
                  </p>

                  <h3>Duração: 2h </h3>
                  <div className="endereco">
                    <div className="img-location">
                      <img src={location} alt="" />
                      <p>
                        Endereço: Rua da Alfândega, 35 , Recife Antigo, Recife -
                        PE
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
                  <h3 className="mb-3 card-info">Capela Dourada</h3>
                </div>
                <div className="col clearfix">
                  <div className="images-card">
                    <div className="img1">
                      <img
                        className="card-roteiro col-md-6 float-md-start mb-3 mx-md-3"
                        src={igdourada}
                        alt=""
                      />
                    </div>
                    <div className="img2">
                      <img src={dt2} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col mx-3 descricao">
                  <h4 className="mt-4 ">11:00</h4>
                  <p>
                    A Capela Dourada é uma das igrejas mais bonitas do Recife e
                    simboliza toda a riqueza do período colonial no Brasil.
                    Construída entre os séculos XVII e XVIII, ela fica dentro do
                    Convento e Igreja de Santo Antônio, que também abriga um
                    Museu de Arte Sacra.
                    <br />
                    <br />
                    A capela é riquíssima em detalhes de ouro; para onde quer
                    que se olhe o brilho amarelo que envolve as madeiras
                    talhadas nas paredes é surpreendente. Imagens e pinturas
                    sacras complementam o conjunto visual da capela, que
                    impressiona pela enorme quantidade de ouro empregada em suas
                    paredes e pelo trabalho esculpido à mão.
                    <br />
                    Entrada: R$ 3.
                    <br />
                  </p>

                  <h3>Duração: 1h</h3>
                  <div className="endereco">
                    <div className="img-location">
                      <img src={location} alt="" />
                      <p>
                        Endereço: R. Imperador Dom Pedro II, Santo Antônio,
                        Recife - PE
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
                <h3 className="mb-3 card-info">Restaurante Leite</h3>
              </div>
              <div className="col clearfix">
                <div className="images-card">
                  <div className="img1">
                    <img
                      className="card-roteiro col-md-6 float-md-start mb-3 mx-md-3"
                      src={leite}
                      alt=""
                    />
                  </div>
                  <div className="img2">
                    <img src={dt5} alt="" />
                  </div>
                </div>
              </div>
              <div className="col mx-3 descricao">
                <h4 className="mt-4 ">12:00</h4>
                <p>
                  Fundado em 1882, o Leite é o restaurante mais antigo do
                  Recife, quiçá o mais antigo do Brasil. Seu ambiente é
                  refinado, com direito a luz baixa e um piano com músicas de
                  qualidade tocadas como plano de fundo. É um lugar mais
                  indicado para ocasiões especiais e uma refeição sofisticada,
                  pois o valor não é muito camarada. Tem garçons muito
                  atenciosos, que se vestem tradicionalmente de branco há vários
                  anos. Sua decoração sofreu várias mudanças ao longo dos anos;
                  o lugar teve de se modernizar, mas manteve a essência de
                  servir pratos saborosos para uma clientela que busca uma
                  refeição rebuscada.
                  <br />
                  <br />
                  É um lugar para ir sem pressa e aproveitar a atmosfera.
                  <br />
                  <br />O bacalhau e os camarões são boas pedidas, mas há também
                  outras opções.
                </p>

                <h3>Duração: 2h</h3>
                <div className="endereco">
                  <div className="img-location">
                    <img src={location} alt="" />
                    <p>
                      Endereço: Praça Joaquim Nabuco, 147 , Santo Antônio,
                      Recife - PE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content dia" id="pills-tabContent">
            <div className="content ">
              <div className="row item mb-5">
                <div className="title mx-3">
                  <h3 className="mb-3 card-info">Mercado São José</h3>
                </div>
                <div className="col clearfix">
                  <div className="images-card">
                    <div className="img1">
                      <img
                        className="card-roteiro col-md-6 float-md-start mb-3 mx-md-3"
                        src={mcjose}
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
                    QO Mercado São José fica numa região popular e movimentada,
                    e quem procura artesanato ou produtos pernambucanos tem
                    neste local uma das melhores opções da cidade. Nele você
                    poderá encontrar um pouco de tudo: peixes e mariscos
                    frescos, artigos em couro, ímãs, tecidos rendados, enfeites
                    em madeira, lembranças da cidade e outros produtos do
                    artesanato local.
                    <br />
                    <br />
                    A vantagem de visitar o Mercado São José é que ele agrupa
                    uma grande variedade de lojas, permitindo ao turista
                    encontrar um pouco de tudo no mesmo lugar.
                    <br />
                    <br />
                    Ao redor do Mercado ficam muitas lojas populares e camelôs -
                    quem quer comprar produtos com preços baixos pode circular
                    pela região.
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
                        Endereço: Praça Don Vital, s/nº, São José, Recife - PE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content ">
              <div className="row item mb-5">
                <div className="title mx-3">
                  <h3 className="mb-3 card-info">Casa da Cultura</h3>
                </div>
                <div className="col clearfix">
                  <div className="images-card">
                    <div className="img1">
                      <img
                        className="card-roteiro col-md-6 float-md-start mb-3 mx-md-3"
                        src={cc}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col mx-3 descricao">
                  <h4 className="mt-4 ">17:00</h4>
                  <p>
                    A Casa da Cultura é um antigo presídio recifense, desativado
                    há cerca de 40 anos, que hoje funciona como ponto turístico.
                    O local, construído a partir do princípio panóptico, foi
                    revitalizado e agora abriga lojinhas de artesanato e
                    escritórios. É um ponto de parada muito interessante para
                    tirar fotos, observar a arquitetura e, principalmente, fazer
                    algumas comprinhas. Nesse local é possível encontrar
                    lojinhas que vendem castanhas, tecidos, artigos de
                    decoração, roupas etc.
                    <br />
                    <br />
                    Cada cela tornou-se uma loja, mas quem quiser ver como era
                    uma cela original poderá encontrar uma cela vazia no raio
                    leste. Outra dica é subir no segundo andar do presídio pelo
                    raio norte, onde há um ponto de observação para possíveis
                    revoltas.
                  </p>

                  <h3>Duração: 1h30min</h3>
                  <div className="endereco">
                    <div className="img-location">
                      <img src={location} alt="" />
                      <p>
                        Endereço: R. Floriano Peixoto, 905, Santo Antônio,
                        Recife - PE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content ">
              <div className="row item mb-5">
                <div className="title mx-3">
                  <h3 className="mb-3 card-info">
                    Passeio nortuno de Catamarã
                  </h3>
                </div>
                <div className="col clearfix">
                  <div className="images-card">
                    <div className="img1">
                      <img
                        className="card-roteiro col-md-6 float-md-start mb-3 mx-md-3"
                        src={catamara}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col mx-3 descricao">
                  <h4 className="mt-4 ">17:00</h4>
                  <p>
                    A Casa da Cultura é um antigo presídio recifense, desativado
                    há cerca de 40 anos, que hoje funciona como ponto turístico.
                    O local, construído a partir do princípio panóptico, foi
                    revitalizado e agora abriga lojinhas de artesanato e
                    escritórios. É um ponto de parada muito interessante para
                    tirar fotos, observar a arquitetura e, principalmente, fazer
                    algumas comprinhas. Nesse local é possível encontrar
                    lojinhas que vendem castanhas, tecidos, artigos de
                    decoração, roupas etc.
                    <br />
                    <br />
                    Cada cela tornou-se uma loja, mas quem quiser ver como era
                    uma cela original poderá encontrar uma cela vazia no raio
                    leste. Outra dica é subir no segundo andar do presídio pelo
                    raio norte, onde há um ponto de observação para possíveis
                    revoltas.
                  </p>

                  <h3>Duração: 1h30min</h3>
                  <div className="endereco">
                    <div className="img-location">
                      <img src={location} alt="" />
                      <p>
                        Endereço: R. Floriano Peixoto, 905, Santo Antônio,
                        Recife - PE
                      </p>
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

export default SegundoDias;
