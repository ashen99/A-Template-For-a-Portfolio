import classes from "./home.module.css";
import code from "../img/pro.png";
import binaryWorld from "../img/binary.png";

const Home = () => {
  return (
    <div className={classes.Home} id="home">
      <div className={classes.Container}>
        <h1 className={classes.hello}>Hello!</h1>
        <h1>I am Ashen ;)</h1>
      </div>
      <div className={classes.ImageContainer}>
        <img className={classes.Code} src={code} alt="code"></img>
      </div>
    </div>
  );
};

export default Home;
