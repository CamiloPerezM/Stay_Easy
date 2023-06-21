import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import "../Styles/AddProduct.css"
import { useNavigate } from 'react-router-dom';

const CardProductAdd = () => {

    const navigate = useNavigate();

    const handleClick = () =>{
        return navigate("/")
    }

    return (

        <section className='addProductSection'>

            <div className='containerAddProduct'>

                <FontAwesomeIcon icon={faCheckCircle} size="4x" className='iconCheck' />

                <div className='containerAdd'>

                    <p className='paragraphAdd'>Tu propiedad se ha creado con éxito</p>
                </div>
              <button className='button' onClick={handleClick}>GO HOME</button>
            </div>
        </section>


    )
}

export default CardProductAdd;