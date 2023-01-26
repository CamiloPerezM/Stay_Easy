import React from "react";
import Styles from "../Styles/List.module.css"

export function List(props){
    return(
        <section className={props.background}>
            <h3 className={Styles.titulos} >{props.title}</h3>
            <div className={props.style}>
                {props.children}
            </div>
        </section>
    )
}