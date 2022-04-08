import logo from '../../img/Vector.svg'
import {Link} from 'react-router-dom'
import banner from '../../img/banner-recife-5.png'
import Filter from '../Filter'
const Header5 = () =>{
    return(
        
     <>
      <nav className="navbar d-flex justify-content-between p-5">
        <div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="nav">
          <li className="nav-item ">
            <Link className="nav-link" to="#">
              Nossa proposta
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cadastro">
              Cadastrar/Logar
            </Link>
          </li>
        </ul>
      </nav>

      <div className="banner">
        <div className="image">
          <img src={banner} alt="" />
        </div>
        <blockquote className="blockquote">
          <h1 >
              <p>Roteiro</p>
            <em>Recife em 5 dias</em>
          </h1>
        </blockquote>
      </div>
      <Filter/>
     </>
    )
}

export default Header5;