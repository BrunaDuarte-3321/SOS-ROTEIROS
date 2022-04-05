import React from 'react'

const Roteiro = () => {
  return (
   <>
   
  <main className="container">
    <div className="title2 m-3 row justify-content-around">
      <h1 className="col">Visite Recife em 3 dias</h1>
      <a href="#"  download="recife.pdf" className="btnDownload col-3 text-center">
        Baixar Roteiro Completo
      </a>
    </div>
    <div>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="pills-one-tab" data-bs-toggle="pill" data-bs-target="#pills-one" type="button" role="tab" aria-controls="pills-two" aria-selected="true">Dia 01</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-two-tab" data-bs-toggle="pill" data-bs-target="#pills-two" type="button" role="tab" aria-controls="pills-two" aria-selected="false">Dia 02</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-three-tab" data-bs-toggle="pill" data-bs-target="#pills-three" type="button" role="tab" aria-controls="pills-three" aria-selected="false">Dia 03</button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-one" role="tabpanel" aria-labelledby="pills-one-tab">
          <h2 className="my-5"><b>Dia 01</b></h2>
          <div className="content">
            <div className="row item mb-5">
              <div className="title mx-3">
                <h3 className="mb-3">Praça Lorem Ipsum</h3>
              </div>
              <div className="col clearfix">
                <img className="card col-md-6 float-md-start mb-3 mx-md-3" src="https://a.cdn-hotels.com/gdcs/production173/d1802/a586e63e-779b-49fc-86a3-0eff604edeef.jpg"  alt=""/>
              </div>
              <div className="col mx-3">
                <h4 className="mt-4">09:00</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At delectus praesentium autem in eligendi accusantium dolorem veritatis cupiditate. Numquam quia deserunt eum soluta velit omnis, molestias nobis alias saepe nam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse autem deleniti natus doloribus ipsa necessitatibus corrupti magnam, hic tempora laudantium aliquam quo saepe eaque dolore dolorum dicta delectus. Blanditiis, asperiores.</p>
                <h4>Duração: 1h 15min</h4>
              </div>
            </div>
            <div className="row item mb-5">
              <div className="title mx-3">
                <h3 className="mb-3">Parque Lorem Ipsum</h3>
              </div>
              <div className="col clearfix">
                <img className="card col-md-6 float-md-start mb-3 mx-md-3" src="https://a.cdn-hotels.com/gdcs/production173/d1802/a586e63e-779b-49fc-86a3-0eff604edeef.jpg" alt=""/>
              </div>
              <div className="col mx-3">
                <h4 className="mt-4">10:30</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At delectus praesentium autem in eligendi accusantium dolorem veritatis cupiditate. Numquam quia deserunt eum soluta velit omnis, molestias nobis alias saepe nam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse autem deleniti natus doloribus ipsa necessitatibus corrupti magnam, hic tempora laudantium aliquam quo saepe eaque dolore dolorum dicta delectus. Blanditiis, asperiores.</p>
                <h4>Duração: 1h</h4>
              </div>
            </div>
            <div className="row item mb-5">
              <div className="title mx-3">
                <h3 className="mb-3">Passeio Lorem Ipsum</h3>
              </div>
              <div className="col clearfix">
                <img className="card col-md-6 float-md-start mb-3 mx-md-3" src="https://a.cdn-hotels.com/gdcs/production173/d1802/a586e63e-779b-49fc-86a3-0eff604edeef.jpg"  alt=""/>
              </div>
              <div className="col mx-3">
                <h4 className="mt-4">12:00</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At delectus praesentium autem in eligendi accusantium dolorem veritatis cupiditate. Numquam quia deserunt eum soluta velit omnis, molestias nobis alias saepe nam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse autem deleniti natus doloribus ipsa necessitatibus corrupti magnam, hic tempora laudantium aliquam quo saepe eaque dolore dolorum dicta delectus. Blanditiis, asperiores.</p>
                <h4>Duração: 1h</h4>
              </div>
            </div>
            <div className="row item mb-5">
              <div className="title mx-3">
                <h3 className="mb-3">Museu Lorem Ipsum</h3>
              </div>
              <div className="col clearfix">
                <img className="card col-md-6 float-md-start mb-3 mx-md-3" src="https://a.cdn-hotels.com/gdcs/production173/d1802/a586e63e-779b-49fc-86a3-0eff604edeef.jpg"   alt=""/>
              </div>
              <div className="col mx-3">
                <h4 className="mt-4">15:30</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At delectus praesentium autem in eligendi accusantium dolorem veritatis cupiditate. Numquam quia deserunt eum soluta velit omnis, molestias nobis alias saepe nam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse autem deleniti natus doloribus ipsa necessitatibus corrupti magnam, hic tempora laudantium aliquam quo saepe eaque dolore dolorum dicta delectus. Blanditiis, asperiores.</p>
                <h4>Duração: 2h</h4>
              </div>
            </div>
            <div className="row item mb-5">
              <div className="title mx-3">
                <h3 className="mb-3">Por do Sol Lorem Ipsum</h3>
              </div>
              <div className="col clearfix">
                <img className="card col-md-6 float-md-start mb-3 mx-md-3" src="https://a.cdn-hotels.com/gdcs/production173/d1802/a586e63e-779b-49fc-86a3-0eff604edeef.jpg"  alt=""/>
              </div>
              <div className="col mx-3">
                <h4 className="mt-4">18:30</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At delectus praesentium autem in eligendi accusantium dolorem veritatis cupiditate. Numquam quia deserunt eum soluta velit omnis, molestias nobis alias saepe nam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse autem deleniti natus doloribus ipsa necessitatibus corrupti magnam, hic tempora laudantium aliquam quo saepe eaque dolore dolorum dicta delectus. Blanditiis, asperiores.</p>
                <h4>Duração: 1h 45min</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="pills-two" role="tabpanel" aria-labelledby="pills-two-tab">
          <h2 className="my-5"><b>Dia 02</b></h2>
          <div className="content">
            <div className="row item mb-5">
              <div className="title mx-3">
                <h3 className="mb-3">Praça Lorem Ipsum</h3>
              </div>
              <div className="col clearfix">
                <img className="card col-md-6 float-md-start mb-3 mx-md-3" src="https://a.cdn-hotels.com/gdcs/production173/d1802/a586e63e-779b-49fc-86a3-0eff604edeef.jpg"   alt=""/>
              </div>
              <div className="col">
                <h4 className="mt-4">09:00</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At delectus praesentium autem in eligendi accusantium dolorem veritatis cupiditate. Numquam quia deserunt eum soluta velit omnis, molestias nobis alias saepe nam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse autem deleniti natus doloribus ipsa necessitatibus corrupti magnam, hic tempora laudantium aliquam quo saepe eaque dolore dolorum dicta delectus. Blanditiis, asperiores.</p>
                <h4>Duração: 1h 15min</h4>
              </div>
            </div>
            <div className="row item mb-5">
              <div className="title mx-3">
                <h3 className="mb-3">Parque Lorem Ipsum</h3>
              </div>
              <div className="col clearfix">
                <img className="card col-md-6 float-md-start mb-3 mx-md-3" src="https://a.cdn-hotels.com/gdcs/production173/d1802/a586e63e-779b-49fc-86a3-0eff604edeef.jpg"   alt=""/>
              </div>
              <div className="col">
                <h4 className="mt-4">10:30</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At delectus praesentium autem in eligendi accusantium dolorem veritatis cupiditate. Numquam quia deserunt eum soluta velit omnis, molestias nobis alias saepe nam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse autem deleniti natus doloribus ipsa necessitatibus corrupti magnam, hic tempora laudantium aliquam quo saepe eaque dolore dolorum dicta delectus. Blanditiis, asperiores.</p>
                <h4>Duração: 1h</h4>
              </div>
            </div>
            <div className="row item mb-5">
              <div className="title mx-3">
                <h3 className="mb-3">Passeio Lorem Ipsum</h3>
              </div>
              <div className="col clearfix">
                <img className="card col-md-6 float-md-start mb-3 mx-md-3" src="https://a.cdn-hotels.com/gdcs/production173/d1802/a586e63e-779b-49fc-86a3-0eff604edeef.jpg"   alt=""/>
              </div>
              <div className="col">
                <h4 className="mt-4">12:00</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At delectus praesentium autem in eligendi accusantium dolorem veritatis cupiditate. Numquam quia deserunt eum soluta velit omnis, molestias nobis alias saepe nam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse autem deleniti natus doloribus ipsa necessitatibus corrupti magnam, hic tempora laudantium aliquam quo saepe eaque dolore dolorum dicta delectus. Blanditiis, asperiores.</p>
                <h4>Duração: 1h</h4>
              </div>
            </div>
            <div className="row item mb-5">
              <div className="title mx-3">
                <h3 className="mb-3">Museu Lorem Ipsum</h3>
              </div>
              <div className="col clearfix">
                <img className="card col-md-6 float-md-start mb-3 mx-md-3" src="https://a.cdn-hotels.com/gdcs/production173/d1802/a586e63e-779b-49fc-86a3-0eff604edeef.jpg"  alt=""/>
              </div>
              <div className="col">
                <h4 className="mt-4">15:30</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At delectus praesentium autem in eligendi accusantium dolorem veritatis cupiditate. Numquam quia deserunt eum soluta velit omnis, molestias nobis alias saepe nam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse autem deleniti natus doloribus ipsa necessitatibus corrupti magnam, hic tempora laudantium aliquam quo saepe eaque dolore dolorum dicta delectus. Blanditiis, asperiores.</p>
                <h4>Duração: 2h</h4>
              </div>
            </div>
            <div className="row item mb-5">
              <div className="title mx-3">
                <h3 className="mb-3">Por do Sol Lorem Ipsum</h3>
              </div>
              <div className="col clearfix">
                <img className="card col-md-6 float-md-start mb-3 mx-md-3" src="https://a.cdn-hotels.com/gdcs/production173/d1802/a586e63e-779b-49fc-86a3-0eff604edeef.jpg"  alt=""/>
              </div>
              <div className="col">
                <h4 className="mt-4">18:30</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At delectus praesentium autem in eligendi accusantium dolorem veritatis cupiditate. Numquam quia deserunt eum soluta velit omnis, molestias nobis alias saepe nam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse autem deleniti natus doloribus ipsa necessitatibus corrupti magnam, hic tempora laudantium aliquam quo saepe eaque dolore dolorum dicta delectus. Blanditiis, asperiores.</p>
                <h4>Duração: 1h 45min</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="pills-three" role="tabpanel" aria-labelledby="pills-three-tab">
          <h2 className="my-5"><b>Dia 03</b></h2>
          <div className="content">
            <div className="row item mb-5">
              <div className="title mx-3">
                <h3 className="mb-3">Praça Lorem Ipsum</h3>
              </div>
              <div className="col clearfix">
                <img className="card col-md-6 float-md-start mb-3 mx-md-3" src="https://a.cdn-hotels.com/gdcs/production173/d1802/a586e63e-779b-49fc-86a3-0eff604edeef.jpg"   alt=""/>
              </div>
              <div className="col">
                <h4 className="mt-4">09:00</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At delectus praesentium autem in eligendi accusantium dolorem veritatis cupiditate. Numquam quia deserunt eum soluta velit omnis, molestias nobis alias saepe nam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse autem deleniti natus doloribus ipsa necessitatibus corrupti magnam, hic tempora laudantium aliquam quo saepe eaque dolore dolorum dicta delectus. Blanditiis, asperiores.</p>
                <h4>Duração: 1h 15min</h4>
              </div>
            </div>
            <div className="row item mb-5">
              <div className="title mx-3">
                <h3 className="mb-3">Parque Lorem Ipsum</h3>
              </div>
              <div className="col clearfix">
                <img className="card col-md-6 float-md-start mb-3 mx-md-3" src="https://a.cdn-hotels.com/gdcs/production173/d1802/a586e63e-779b-49fc-86a3-0eff604edeef.jpg"   alt=""/>
              </div>
              <div className="col">
                <h4 className="mt-4">10:30</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At delectus praesentium autem in eligendi accusantium dolorem veritatis cupiditate. Numquam quia deserunt eum soluta velit omnis, molestias nobis alias saepe nam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse autem deleniti natus doloribus ipsa necessitatibus corrupti magnam, hic tempora laudantium aliquam quo saepe eaque dolore dolorum dicta delectus. Blanditiis, asperiores.</p>
                <h4>Duração: 1h</h4>
              </div>
            </div>
            <div className="row item mb-5">
              <div className="title mx-3">
                <h3 className="mb-3">Passeio Lorem Ipsum</h3>
              </div>
              <div className="col clearfix">
                <img className="card col-md-6 float-md-start mb-3 mx-md-3" src="https://a.cdn-hotels.com/gdcs/production173/d1802/a586e63e-779b-49fc-86a3-0eff604edeef.jpg"   alt=""/>
              </div>
              <div className="col">
                <h4 className="mt-4">12:00</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At delectus praesentium autem in eligendi accusantium dolorem veritatis cupiditate. Numquam quia deserunt eum soluta velit omnis, molestias nobis alias saepe nam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse autem deleniti natus doloribus ipsa necessitatibus corrupti magnam, hic tempora laudantium aliquam quo saepe eaque dolore dolorum dicta delectus. Blanditiis, asperiores.</p>
                <h4>Duração: 1h</h4>
              </div>
            </div>
            <div className="row item mb-5">
              <div className="title mx-3">
                <h3 className="mb-3">Museu Lorem Ipsum</h3>
              </div>
              <div className="col clearfix">
                <img className="card col-md-6 float-md-start mb-3 mx-md-3" src="https://a.cdn-hotels.com/gdcs/production173/d1802/a586e63e-779b-49fc-86a3-0eff604edeef.jpg"   alt=""/>
              </div>
              <div className="col">
                <h4 className="mt-4">15:30</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At delectus praesentium autem in eligendi accusantium dolorem veritatis cupiditate. Numquam quia deserunt eum soluta velit omnis, molestias nobis alias saepe nam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse autem deleniti natus doloribus ipsa necessitatibus corrupti magnam, hic tempora laudantium aliquam quo saepe eaque dolore dolorum dicta delectus. Blanditiis, asperiores.</p>
                <h4>Duração: 2h</h4>
              </div>
            </div>
            <div className="row item mb-5">
              <div className="title mx-3">
                <h3 className="mb-3">Por do Sol Lorem Ipsum</h3>
              </div>
              <div className="col clearfix">
                <img className="card col-md-6 float-md-start mb-3 mx-md-3" src="https://a.cdn-hotels.com/gdcs/production173/d1802/a586e63e-779b-49fc-86a3-0eff604edeef.jpg"   alt=""/>
              </div>
              <div className="col">
                <h4 className="mt-4">18:30</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At delectus praesentium autem in eligendi accusantium dolorem veritatis cupiditate. Numquam quia deserunt eum soluta velit omnis, molestias nobis alias saepe nam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse autem deleniti natus doloribus ipsa necessitatibus corrupti magnam, hic tempora laudantium aliquam quo saepe eaque dolore dolorum dicta delectus. Blanditiis, asperiores.</p>
                <h4>Duração: 1h 45min</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
   </>
  )
}

export default Roteiro