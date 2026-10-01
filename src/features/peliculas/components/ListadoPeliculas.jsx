import { Box, Button, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";
import GradeIcon from '@mui/icons-material/Grade';


function ListadoPeliculas({peliculas, onFavorito, onNoFav}){
    const filas = [];
    
    peliculas.forEach((pelicula) => {
        filas.push(
                <Card 
                    variant="outlined"
                    key={pelicula.id}
                    sx={{
                        height: "100%",
                        borderRadius: 2,
                        transition: "0.2s",

                        "&:hover": {
                            transform: "translateY(-3px)",
                            boxShadow: 3
                        }
                    }}
                >
                    <CardContent>
                        <Typography variant="h6" sx={{fontWeight: "bold",color: "#e65100",mb: 1}}>
                            {pelicula.titulo}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary', fontSize: 14 }}>
                            {pelicula.anio} - {pelicula.genero}
                        </Typography>
                        <Typography sx={{fontSize: 16, mt: 1}}>
                            <strong>Director: </strong>{pelicula.director}
                        </Typography>
                        <Typography sx={{fontSize: 14, mt: 1}}>
                            <strong>Califcación: </strong>{pelicula.calificacion}
                        </Typography>
                        {pelicula.status === "favorita" && (
                            <Typography sx={{color: "#e65100",fontWeight: "bold", mt: 1}}>
                                ⭐ Favorita
                            </Typography>
                        )}

                        {pelicula.status === "nofavorita" && (
                            <Typography sx={{color: "text.secondary", mt: 1}}>
                                🚫 No me gusta
                            </Typography>
                        )}
                    </CardContent>
                    <CardActions>
                         <Button size="small" sx={{color: "#e65100"}} onClick={() => onFavorito(pelicula.id)}>Favorita</Button>
                         <Button size="small" sx={{color: "#e65100"}} onClick={() => onNoFav(pelicula.id)}>No me gusta</Button>
                    </CardActions>
                </Card>
        )
    });


    return (
        <>
        {filas.length > 0 ? (filas) : (
            <Typography>Aun no hay películas</Typography>
        )}
        </>
    )
    
}

export default ListadoPeliculas;