import Card from "react-bootstrap/Card";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

function Footer() {
  return (
    <Card className="text-center bg-dark text-white">
      <Card.Body>
        <Card.Title>Contact Me</Card.Title>
        <Card.Text>collzbadodo@gmail.com</Card.Text>

        <div className="social-icon">
          <a href="https://www.linkedin.com/in/blessed-adodo-23b895156/" target="__blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/collzbaba" target="__blank">
            <FaGithub />
          </a>
          <a
            href="https://stackoverflow.com/users/19234345/blessed-adodo"
            target="__blank"
          >
            <FaStackOverflow />
          </a>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Footer;
