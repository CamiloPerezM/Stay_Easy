import React from "react";

export function List(props){
    return(
        <section >
            <h2>{props.title}</h2>
            <div className='space'>
                {props.children}
            </div>
        </section>
    )
}