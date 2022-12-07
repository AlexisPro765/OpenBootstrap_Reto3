import { useState } from "react";
import ContactoComponent from "./ContactoComponent";

const ContactosComponent = () => {
    const [contactos, setContactos] = useState([]);

    const agregar = (contacto) => {
        setContactos([...contactos, contacto]);
    };

    const eliminar = (contacto) => {
        if (confirm("¿Eliminar contacto \"" + contacto.nombre + ' ' + contacto.apellido + "\"?")) {
            const indice = contactos.indexOf(contacto);
            setContactos(contactos.filter((valor, index) => index != indice));
        }
    };

    const cambiarEstado = (contacto) => {
        const indice = contactos.indexOf(contacto);
        setContactos(contactos.map((valor, index) => { return indice == index ? {...contacto, conectado: !contacto.conectado} : contacto}));
    };

    return (
        <div>
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
                            <ContactoComponent contacto={contacto} key={index}></ContactoComponent>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

return ContactosComponent;