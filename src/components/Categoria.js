import { useState } from "react";

export default function Categoria({ nombre, imgSrc }) {

    const [isHovering, setisHovering] = useState(false);

    function handleMouseEnter(e) {
        setisHovering(true)


    }

    function handleMouseLeave(e) {
        setisHovering(false)


    }

    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id="bebida-1"><a href="./html/tienda.html"><img src={imgSrc} alt="Logo" /></a>
            <p id="ocultar-1" className={`bebida-oculto ${isHovering ? "ocultar" : ""} `} href="">{nombre}</p>
        </li>
    )


}