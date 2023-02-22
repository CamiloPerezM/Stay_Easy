import React from "react";
import "../Styles/InputBlock.css"

const InputBlock = () => {

    return (


        <section>
            <h3 className="tituloFormReserva">Completá tus datos</h3>
            <div className="containerInputs">
                <form className="formI">
                    <div className="divForm">
                        <span className="spanMargin">
                            <label className="label" htmlFor="fName">Nombre</label>
                            <input className="inputBlock marginInput" type="text" value={"Hola"} id="fName" name="fName" disabled />
                        </span>
                        <span>
                            <label className="label" htmlFor="fApellido">Apellido</label>
                            <input className="inputBlock marginInput" type="text" value={"Hola"} id="fApellido" name="fApellido" disabled />
                        </span>
                    </div>
                    <div className="divForm">


                        <span className="spanMargin">
                            <label className="label" htmlFor="fEmail">Email</label>
                            <input className="inputBlock"type="text" value={"Hola"} id="fEmail" name="fEmail" disabled />
                        </span>

                        <span>

                            <label className="label" htmlFor="fCiudad">Ciudad</label>
                            <input  className="inputBlockCity" placeholder="Ciudad" type="text" id="fCiudad" name="fCiudad" />
                        </span>

                    </div>
                </form>
            </div>
        </section>



    )
}


export default InputBlock;