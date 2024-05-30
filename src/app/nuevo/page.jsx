"use client"
import Formulario from './formulario';

export default function withPageAuthRequired ()  {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Crear Emprendimiento</h1>
            <Formulario />
        </div>
    );
};

