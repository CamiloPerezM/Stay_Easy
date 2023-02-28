import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import "../Styles/AddProduct.css"
import { Link } from 'react-router-dom';

const CardProductAdd = () => {

    return (

        <section className='addProductSection'>

            <div className='containerAddProduct'>

                <FontAwesomeIcon icon={faCheckCircle} size="4x" className='iconCheck' />

                <div className='containerAdd'>

                    <p className='paragraphAdd'>Tu propiedad se ha creado con éxito</p>
                </div>
               <Link to={"/home"}><button className='button'>GO HOME</button></Link>
            </div>
        </section>


    )
}

export default CardProductAdd;