// Crea un componente Latest Release. Questo componente dovrà leggere un file .json fornito e mostrare le cover dei libri nella pagina.

import { Component } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import scifi from "../data/scifi.json";

class LatestRelease extends Component {
    state = {
        selectedGenre: scifi, //valore iniziale del genere
    };

    render() {
        return (
            <Container>
                <Row wrap>
                    {scifi.map((book, index) => {
                        return (
                            <Col>
                                <Card key={index}>
                                    <Card.Img variant="top" src={book.img} />
                                    <Card.Body>
                                        <Card.Title>{book.title}</Card.Title>
                                        <Card.Text>
                                            <b>Genre</b>: {book.category}
                                        </Card.Text>
                                        <Card.Text>
                                            <b>ASIN</b>: {book.asin}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Button variant="warning">
                                            {book.price} €
                                        </Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        );
    }
}

export default LatestRelease;
