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

export default CardRazasPerros;