const { Children } = require("react");

const Contenedor = ({nombre},{descripcion},{precio}) => {
    return (
        <>
            <h2>{nombre}</h2>
            <p>{precio}</p>
            <p>{descripcion}</p>
            {Children}
        </>
    );
}