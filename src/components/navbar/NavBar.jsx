import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Carrito from 'Carrito/Carrito'

        function NavBar() {
    return (
        <>
            <Nav>   
                <Container fluid>
                    <Row className="justify-content-md-center">
                        <Col>
                            <a href="#Inicio">Inicio</a>
                        </Col>
                        <Col>
                            <a href="#Ofertas">Ofertas</a>
                        </Col>
                        <Col>
                            <a href="#Destacados">Destacados</a>
                        </Col>
                        <Col>
                            <Carrito/>
                        </Col>
                    </Row>
                </Container>        
            </Nav>
        </>
    );
  }
  
  export default NavBar;
  