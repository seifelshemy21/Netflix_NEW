import { Col, Container, Row } from "react-bootstrap";
import tv from "../assets/tv.png" 
import tv_video from "../videos/video-tv-0819.m4v" 

const Enjoy = () => {
    return ( 
        <div className="enjoy">
                <Container>
                <Row className="center">
                    <Col>
                            <h3>enjoy on your tv </h3>
                            <h4>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h4>
                    </Col>
                    <Col className="position">
                            <div className="tv">
                            <img src={tv} alt="tv" />
                            </div>
                            <div className="video_tv"> 
                                <video 
                                autoPlay playsInline muted loop 
                                >
                                        <source src={tv_video} type="video/webm" />
                                </video>
                            </div>
                    </Col>
                </Row>
            </Container>
        </div>
     );
}
 
export default Enjoy;