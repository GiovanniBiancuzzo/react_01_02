// Crea un componente MyFooter che renderizzerà un footer per la pagina.
import { Nav } from "react-bootstrap";

const MyFooter = () => (
    <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
            <Nav.Link href="#facebook">Facebook</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="#instagram">Instagram</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="#discord">Discord</Nav.Link>
        </Nav.Item>
    </Nav>
);

export default MyFooter;
