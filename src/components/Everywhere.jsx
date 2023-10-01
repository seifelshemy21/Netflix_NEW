import { Col, Container, Row } from "react-bootstrap";
import device from "../assets/device-pile.png"
import video_device from "../videos/video-devices.m4v"





const Everywhere = () => {
    return (
        <div className="everywhere">
            <Container>
                <Row className="center">
                    <Col>
                        <h3>enjoy on your tv </h3>
                        <h4>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h4>
                    </Col>
                    <Col className="position_everywhere">
                        <div className="tv_everywhere">
                            <img src={device} alt="tv" />
                        </div>
                        <div className="video_tv_everywhere">
                            <video
                                autoPlay playsInline muted loop
                            >
                                <source src={video_device} type="video/webm" />
                            </video>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Everywhere;