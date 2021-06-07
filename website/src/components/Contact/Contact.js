import {
  FaYoutube,
  FaInstagramSquare,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import classes from "./contact.module.css";

const handleURL = (url) => {
  return () => window.open(url, "_blank");
};

const Contact = () => {
  return (
    <div className={classes.Contact} id="contact">
      <div className={classes.ContactIcons}>
        <FaYoutube
          color="white"
          size="30px"
          style={{ padding: "1%" }}
          onClick={handleURL("https://www.youtube.com/")}
        />
        <FaInstagramSquare
          color="white"
          size="30px"
          style={{ padding: "1%" }}
          onClick={handleURL("https://www.youtube.com/")}
        />
        <FaGithub
          color="white"
          size="30px"
          style={{ padding: "1%" }}
          onClick={handleURL("https://www.youtube.com/")}
        />
        <FaLinkedin
          color="white"
          size="30px"
          style={{ padding: "1%" }}
          onClick={handleURL("https://www.youtube.com/")}
        />
      </div>
    </div>
  );
};

export default Contact;
