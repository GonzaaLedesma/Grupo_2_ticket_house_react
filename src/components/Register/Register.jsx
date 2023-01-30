import React, {useState} from 'react'
import { useForm } from "react-hook-form";

const RegisterForm = () => {
    const [oldData, setOldData] = useState({});
    // const [errors, setErrors] = useState({});
    const { register, handleSubmit } = useForm();

    const validateForm = (data) => {
        // Tu lógica de validación aquí
    }

    const onSubmit = (data) => {
        // Tu lógica para enviar el formulario aquí
    }

    return (
        <main className="mainRegister">
            <form className="form-box" id="myForm" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="form-title">Registro</h1>
                <div className="correcionCajasForm">
                    <label htmlFor="nombre"></label>
                    <input
                        className="cajaRegisterInput"
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Nombre"
                        ref={register}
                    />
                    <div className="errorTxtNombre"></div>
                </div>
                <div className="correcionCajasForm">
                    <label htmlFor="apellido"></label>
                    <input
                        className="cajaRegisterInput"
                        type="text"
                        name="apellido"
                        placeholder="Apellido"
                        ref={register}
                    />
                    <div className="errorTxtApellido"></div>
                </div>
      </form>
    </main>
  );
}

export default RegisterForm;
