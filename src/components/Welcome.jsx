//Crea un componente Welcome con un Jumbotron e un sottotitolo per il tuo shop.

import { Jumbotron, Container } from "react-bootstrap";

const Welcome = () => (
    <Jumbotron fluid>
        <Container>
            <h1>Benvenuti</h1>
            <p>
                Sei su Strive Books, il punto di riferimento per la tua
                biblioteca digitale.
            </p>
        </Container>
    </Jumbotron>
);

export default Welcome;
