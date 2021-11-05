import logo from './logo.svg';
import './styles/App.css';
import perroPelao from './media/n0ru9t103ib61.png';
import perroSentado from './media/perroSentado.jpg';
import perroPanzon from './media/perroPanzon.jpg';

function App() {
  return (
    <div className="App">
    <header>
        <ul className="navbar">
            <li>
                <img src="./media/reciclaje-logo.png" alt="imagen" className="logo"/>
            </li>
            <li>
                <button className="button mainButton">Nuevo Post</button>
            </li>
            <li>
                <div className="buscar">
                <input placeholder="Buscar una Raza"/>
                <i className="fas fa-search button iconoBusqueda"></i>
                </div>
            </li>
            <li>
                <button className="button secondaryButton">Iniciar Sesion</button>
            </li>
            <li>
                <button className="button mainButton">Registro</button>
            </li>
        </ul>    
    </header>
    <main>
        <section>
            <h1>Razas de Perros</h1>
            <ul className="breedCardContainer">
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={perroPelao} alt="Perro Pelao"/>
                    </div>
                    <span className="breedTitle">Perro Pelao</span>  
                </li>
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={perroSentado} alt="Perro Senntado"/>
                    </div>
                    <span className="breedTitle">Perro Asustado</span>
                </li>
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={perroPanzon} alt="Perro Panzon"/>                        
                    </div>
                    <span className="breedTitle">Perro Panzon</span>
                </li>
            </ul>
        </section>
        <section></section>
    </main>
    <footer></footer>
    </div>
  );
}

export default App;
