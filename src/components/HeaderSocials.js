import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaStackOverflow } from 'react-icons/fa'
import "../style/HeaderSocials.css";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/blessed-adodo-23b895156/" target="__blank">
        <BsLinkedin />
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
  );
}

export default HeaderSocials