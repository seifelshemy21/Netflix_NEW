import { Col, Container, Row } from "react-bootstrap";
import kids_img from "../assets/kids.png"
const Kids = () => {
    return ( 
        <div className="kids">
            <Container>
                <Row className="center">
                    <Col className="kids_img"> <img src={kids_img} alt="kids_img" /></Col>
                    <Col>
                        <h3>Create profiles for kids</h3>
                        <h4>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default Kids;