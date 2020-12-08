import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

        function NavBar() {
    return (
        <>
            <h1>Coco Chango</h1>
            <p>Camisas hawaianas</p>
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
                </Row>
            </Container>        
        </>
    );
  }
  
  export default NavBar;
  