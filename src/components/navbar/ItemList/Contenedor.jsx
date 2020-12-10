const { Children } = require("react");

const Contenedor = ({Item}) => {
    return (
        <>
            <h2>Novedades del mes!</h2>
            {Item}
            {Children}
        </>
    );
}