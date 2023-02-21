import Categoria from "./Categoria";

import skyy from "../imagenes/skyyfrutosrojos.jpg";
import energizante from "../imagenes/speed.png";
import vino from "../imagenes/viñadebalbo.jpg";




export default function Botones() {



    const categorias = [{ nombre: "Skyy", img: skyy }, { nombre: "Viña de Balbo", img: vino }, { nombre: "Speed", img: energizante }]


    return (

        <ul className="Bebida">
            {categorias.map((categoria, idx) => <Categoria key={idx} nombre={categoria.nombre} imgSrc={categoria.img} />)}

        </ul>

    )



}