import React from "react";
import Styles from "../Styles/CardCategory.module.css"
import {useNavigate} from 'react-router-dom'




export const CardCategory = ({ datos }) => {
    let navigate  = useNavigate();

    // const categorias = datos.map(item => item).filter((categoria, index,self) => self.indexOf(categoria.category)=== index);

    console.log('este es mi id ',datos.id);


    return (
        <div className={Styles.card2} onClick={selectCategori} >
            <img className={Styles.cardImg} src={datos.urlImagen} alt="Img Categorias" />
            <div className={Styles.cardContainer}>
                <h2 className={Styles.cardCategory}>{datos.titulo.toUpperCase()}</h2>
                <p className={Styles.cardInfo}>{datos.descripcion}</p>
            </div>
        </div>
    )

    function selectCategori () {
        
            navigate('/filtroCategoria');
        
    }
}

