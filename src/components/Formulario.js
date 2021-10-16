import React, {Fragment, useState} from 'react';
//import const {v4:uuid4} =require('uuid');
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({crearCita}) => {


    //Crear Stare de Citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, actualizarError] = useState(false);


    // Funci[on que se ejecuta cada que el usuario escribe en un input
    const actualizarState = e =>{
        //console.log(e.target.value);
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        });
    }


    //Extraer los valores

    const {mascota, propietario, fecha, hora, sintomas} = cita;


    //Cuando el suuario presionar agregar cita
    const submitCita = e =>{
        e.preventDefault();

        //Validar
        if (mascota.trim()==='' || propietario.trim()==='' || fecha.trim()==='' || hora.trim()==='' || sintomas.trim()==='') {
            actualizarError(true);
            return;
        }

        // Eliminar el mensaje previo
        actualizarError(false);

        //Asignar ID
        cita.id = uuidv4();
        console.log(cita);

        //Crear la cita
        crearCita(cita);

        //Reiniciar el form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            { error 
                ? <p className="alerta-error">Todos los campos son obligatorios</p>
                : null 
            }

            <form
                onSubmit={submitCita}
            >

                <label>Nombre Mascota
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                /></label>

                <label>Nombre Dueño
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                /></label>

                <label>Fecha
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                /></label>

                <label>Hora
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                /></label>

                <label>Síntomas
                <textarea 
                    name="sintomas"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea></label>

                <button
                type="submit"
                className="u-full-width button-primary"                
                >  Agregar Cita                
                </button>

            </form>
        </Fragment>
     );
}
 
export default Formulario;