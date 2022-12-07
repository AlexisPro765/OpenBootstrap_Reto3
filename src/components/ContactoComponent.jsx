import PropTypes from 'prop-types';
import Contacto from '../clases/Contacto';


const ContactoComponent = ({ contacto, cambiarEstado, eliminar }) => {
    return (
        <tr>
            <td>{contacto.nombre + ' ' + contacto.apellido}</td>
            <td>{contacto.telefono}</td>
            <td>{contacto.direccion}</td>
            <td>
                <div class="d-flex justify-content-end">
                    <button onClick={() => cambiarEstado(contacto)}>
                        <i className={"bi bi-toggle-" + (contacto.conectado ? 'on' : 'off')} style={ {color: contacto.conectado ? 'green' : 'grey'} }></i>
                    </button>

                    <button onClick={() => eliminar(contacto)}>
                        <i class="bi bi-trash-fill" style={ {color: "red"} }></i>
                    </button>
                </div>
            </td>
        </tr>
    );
};

ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
    cambiarEstado: PropTypes.func.isRequired,
    eliminar: PropTypes.func.isRequired
};

export default ContactoComponent;