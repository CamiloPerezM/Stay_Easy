import React from "react";

export function List(props){
    return(
        <section >
            <h3>{props.title}</h3>
            <div className={props.style}>
                {props.children}
            </div>
        </section>
    )
}