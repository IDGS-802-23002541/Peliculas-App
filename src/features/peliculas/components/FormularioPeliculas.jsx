import { use, useState } from "react";
import {Box, Alert, TextField, Button} from '@mui/material'

function FormularioPeliculas({onAgregarPeli}){
    const [titulo, setTitulo] = useState('');
    const [anio, setAnio] = useState('');
    const [genero, setGenero] = useState('');
    const [director, setDirector] = useState('');
    const [calificacion, setCalificacion] = useState('');

    const [error, setError] = useState("");

    const handleSubmint = (evento => {
        evento.preventDefault();

        if(!titulo || !anio || !genero || !director || !calificacion){
            alert('Debes completar todos los campos!');
            return;
        }

        const newPeli = {
            titulo, 
            anio: Number(anio), 
            genero, 
            director, 
            calificacion: Number(calificacion)
        }

        onAgregarPeli(newPeli)

        setTitulo('');
        setAnio('');
        setGenero('');
        setDirector('');
        setCalificacion('');
    })

    return (
        <Box
            component="form"
            onSubmit={handleSubmint}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                mb: 3
            }}
        >
            {error && (
                <Alert severity="error">
                    {error}
                </Alert>
            )}

            <TextField
                label="Titulo"
                value={titulo}
                onChange={(evento) => setTitulo(evento.target.value)}
                fullWidth
            />

            <TextField
                label="Anio"
                type="number"
                value={anio}
                onChange={(evento) => setAnio(evento.target.value)}
                fullWidth
            />

            <TextField
                label="Genero"
                value={genero}
                onChange={(evento) => setGenero(evento.target.value)}
                fullWidth
            />

            <TextField
                label="Director"
                value={director}
                onChange={(evento) => setDirector(evento.target.value)}
                fullWidth
            />

            <TextField
                label="Calificacion"
                type='number'
                value={calificacion}
                onChange={(evento) => setCalificacion(evento.target.value)}
                fullWidth
            />

            <Button
                type="submit"
                variant="contained"
            >
                Agregar película
            </Button>
        </Box>
    )
}

export default FormularioPeliculas;