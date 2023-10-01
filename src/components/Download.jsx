import { Col, Container, Row } from "react-bootstrap";
import iphone from "../assets/mobile-0819.jpg"
import boxshot from "../assets/boxshot.png"

const Download = () => {
    return ( 
        <div className="download">
            <Container>
                <Row className="center">
                    <Col className="relative_things">
                            <div className="phone_things"><img src={iphone} alt="" /></div>
                            <div className="stranger_things">
                                <Container>
                                    <Row className="center wrap">
                                        <Col lg={3}   className="img_stranger"><img src={boxshot} alt="" /></Col>
                                        <Col lg={6} >
                                            <h5>stranger things</h5>
                                            <span>Download...</span>
                                        </Col>
                                        <Col lg={2}  className="down_stranger"><img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="download" /></Col>
                                    </Row>
                                </Container>
                            </div>
                    </Col>
                    <Col>
                            <h3>Download your shows to watch offline</h3>
                            <h4>
                            Save your favorites easily and always have something to watch.
                            </h4>
                    </Col>

                </Row>
            </Container>
        </div>
     );
}
 
export default Download;
