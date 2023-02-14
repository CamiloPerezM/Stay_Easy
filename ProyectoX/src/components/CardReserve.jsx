import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import "../Styles/Reserve.css"
import { Link } from 'react-router-dom';

const CardReserve = () => {

    return (

        <section className='reserveSection'>

            <div className='container'>

                <FontAwesomeIcon icon={faCheckCircle} size="3x" className='iconCheck' />

                <div className='containerP'>

                    <h3 className='titulo'>¡Muchas Gracias!</h3>
                    <p className='paragraph'>Su reserva se ha realizado con éxito</p>
                </div>
               <Link to={"/home"}><button className='button'>GO HOME</button></Link>
            </div>
        </section>


    )
}

export default CardReserve