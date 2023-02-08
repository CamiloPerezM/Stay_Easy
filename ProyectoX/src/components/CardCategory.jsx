import React from "react";
import Styles from "../Styles/CardCategory.module.css"


export const CardCategory = ({ datos }) => {

    // const categorias = datos.map(item => item).filter((categoria, index,self) => self.indexOf(categoria.category)=== index);

    // console.log(categorias);

    return (
        <div className={Styles.card2}>
            <img className={Styles.cardImg} src={datos.urlImagen} alt="Img Categorias" />
            <div className={Styles.cardContainer}>
                <h2 className={Styles.cardCategory}>{datos.titulo.toUpperCase()}</h2>
                <p className={Styles.cardInfo}>{datos.descripcion}</p>
            </div>
        </div>
    )
}