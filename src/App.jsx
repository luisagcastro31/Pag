import logo from './logo.svg';
import './styles/App.css';
import perroPelao from './media/n0ru9t103ib61.png';
import perroAsustado from './media/perroSentado.jpg';
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
                <CardRazasPerros nombreRaza="Perro Pelao" imagenPerro={perroPelao}/>    
                <CardRazasPerros nombreRaza="Perro Asustado" imagenPerro={perroAsustado}/>
                <CardRazasPerros nombreRaza="Perro Panzon" imagenPerro={perroPanzon}/>
                </ul>
            </section>
            <section></section>
        </main>
        <footer>
        </footer>
    </div>
  );
}

function CardRazasPerros({nombreRaza, imagenPerro}){
    return(
        <li className="breedCard">
            <div className="contenedorImagen">
               <img src={imagenPerro} alt={nombreRaza}/>
            </div>
            <span className="breedTitle">{nombreRaza}</span>  
        </li>        
    )
}


export default App;
