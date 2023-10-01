import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <ul>
                        <li><a href="#">Questions? Contact us.</a></li>
                    </ul>
                    <Col>

                        <ul>

                            <li><a href="#">faq</a></li>
                            <li><a href="#">Investor Relations</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Speed Test</a></li>

                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Cookie Preferences</a></li>
                            <li><a href="#">Legal Notices</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li><a href="#">Account</a></li>
                            <li><a href="#">Ways to Watch</a></li>
                            <li><a href="#">Corporate Information</a></li>
                            <li><a href="#">Only on Netflix</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li><a href="#">Media Center</a></li>
                            <li><a href="#">Media Center</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </Col>
                </Row>
                <ul>
                    <li>  <select data-uia="language-picker-header" class="ui-select medium " id="lang-switcher-header-select" tabindex="0" placeholder="lang-switcher">
                        <option selected="" lang="en" value="/eg-en/" data-language="en" data-country="EG">English</option>
                        <option lang="ar" value="/eg/" data-language="ar" data-country="EG">العربية</option>

                    </select></li>
                    <li>Netflix Egypt</li>
                </ul>
            </Container>
        </div>
    );
}

export default Footer;