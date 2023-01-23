import React from "react";
import Styles from "./CardCategory.module.css"


export const CardCategory = ({ datos }) => {

    // const categorias = datos.map(item => item).filter((categoria, index,self) => self.indexOf(categoria.category)=== index);

    // console.log(categorias);

    return (
        <div className={Styles.card2}>
            <img className={Styles.cardImg} src={datos.crimg} alt="" />
            <div className={Styles.cardContainer}>
                <h2 className={Styles.cardCategory}>{datos.category.toUpperCase()}</h2>
                <p className={Styles.cardInfo}>{datos.total}</p>
            </div>
        </div>
    )
}