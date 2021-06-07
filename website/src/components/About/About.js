import classes from "./about.module.css";
import PageHeader from "../PageHeader/PageHeader";
import me from "../img/coding.jpg";
const About = () => {
  return (
    <div className={classes.AboutMe} id="about">
      <PageHeader title={"About Me"} />
      <div className={classes.Container}>
        <div className={classes.Text}>
          <h2>Hello ! i am ashen.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            mollis ante in neque sollicitudin, at suscipit sem imperdiet. Nunc
            at ullamcorper mauris, vehicula cursus dolor. Ut in sapien quis eros
            lobortis viverra quis a felis. Sed magna felis, feugiat at fringilla
            in, commodo sit amet est. Sed quis fermentum lorem. Praesent
            sollicitudin sem felis, ac imperdiet sapien faucibus at. Mauris
            eleifend non urna eget convallis. Sed lacinia hendrerit rhoncus.
            Aenean congue vehicula erat. Ut set nisi.
          </p>
        </div>
        <div className={classes.Photo}>
          <img className={classes.Me} src={me} alt="me"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
