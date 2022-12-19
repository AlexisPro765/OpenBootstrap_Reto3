import { useState, useEffect, useRef } from "react";
import Contacto from "../clases/Contacto";
import ContactoComponent from "./ContactoComponent";

const ContactosComponent = () => {

    const [txtNombre, setTxtNombre] = useState('');
    const [txtTelefono, setTxtTelefono] = useState('');
    const [txtDireccion, setTxtDireccion] = useState('');
    const [cbEstado, setCbEstado] = useState(false);

    const [contactos, setContactos] = useState([]);

    const agregar = (e) => {
        e.preventDefault();
        
        const contacto = new Contacto();
        contacto.nombre = txtNombre;
        contacto.telefono = txtTelefono;
        contacto.direccion = txtDireccion;
        contacto.conectado = cbEstado;
        setContactos([...contactos, contacto]);

        setTxtNombre('');
        setTxtTelefono('');
        setTxtDireccion('');
        setCbEstado(false);
    };

    const eliminar = (contacto) => {
        if (window.confirm("¿Eliminar contacto \"" + contacto.nombre + "\"?")) {
            const indice = contactos.indexOf(contacto);
            setContactos(contactos.filter((valor, index) => index != indice));
        }
    };

    const cambiarEstado = (contacto) => {
        const indice = contactos.indexOf(contacto);
        setContactos(contactos.map((valor, index) => { return indice == index ? { ...contacto, conectado: !contacto.conectado } : contacto }));
    };

    return (
        <div className="container mt-2" onSubmit={(e) => agregar(e)}>
            <div className="d-flex justify-content-center">
                <form style={{minWidth: 500}}>
                    <div className="mb-3">
                        <label htmlFor="txtNombre" className="form-label">Nombre</label>
                        <input className="form-control" value={txtNombre} onChange={(valor) => setTxtNombre(valor.target.value)} id="txtNombre" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="txtTelefono" className="form-label">Telefono</label>
                        <input className="form-control" value={txtTelefono} onChange={(valor) => setTxtTelefono(valor.target.value)} id="txtTelefono" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="txtDireccion" className="form-label">Dirección</label>
                        <input className="form-control" value={txtDireccion} onChange={(valor) => setTxtDireccion(valor.target.value)} id="txtDireccion" required />
                    </div>

                    <div className="mb-3 form-check">
                        <div className="d-flex justify-content-center">
                            <div>
                                <label className="form-check-label" property="cbEstado">Conectado</label>
                                <input type="checkbox" className="form-check-input" value={cbEstado} onChange={(valor) => setCbEstado(valor.target.checked)} id="cbEstado" />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Agregar</button>
                </form>
            </div>


            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Direccion</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {contactos.map((contacto, index) => {
                        return (
                            <ContactoComponent contacto={contacto} cambiarEstado={cambiarEstado} eliminar={eliminar} key={index}></ContactoComponent>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ContactosComponent;