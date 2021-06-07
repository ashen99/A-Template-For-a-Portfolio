import classes from "./youtube.module.css";
import PageHeader from "../PageHeader/PageHeader";
import cleanCode from "./../img/coding.jpg";
import laptop from "./../img/laptop.jpg";
import background from "./../img/bgpic.jpg";

const playBtnSvg = (url) => {
  return (
    <div
      className={classes.PlayButton}
      onClick={(e) => window.open(url, "_blank").focus}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
        <polygon
          class="play-btn__svg"
          points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69"
        />
        <path
          class="play-btn__svg"
          d="M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z"
        />
      </svg>
    </div>
  );
};

const youtubeVideo = (url, thumbnail, description) => {
  return (
    <div className={classes.VideoContainer}>
      <div className={classes.Thumbnail}>
        {playBtnSvg(url)}
        <img src={thumbnail} alt="thumbnail"></img>
      </div>
      <div className={classes.text}>
        <p>{description}</p>
      </div>
    </div>
  );
};

const cleanCodeVideoDes =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis ante in neque sollicitudin, at suscipit sem imperdiet. Nunc at ullamcorper mauris, vehicula cursus dolo";
const laptopVideoDes =
  "Ut in sapien quis eros lobortis viverra quis a felis. Sed magna felis, feugiat at fringilla in, commodo sit amet est. Sed quis fermentum lorem.";

const Youtube = () => {
  return (
    <diV className={classes.Youtube} id="youtube">
      <img
        className={classes.background}
        src={background}
        alt="background"
      ></img>
      <PageHeader title="I am also on YouTube"></PageHeader>
      <div className={classes.YoutubeContent}>
        <div className={classes.Paragraph}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            mollis ante in neque sollicitudin, at suscipit sem imperdiet. Nunc
            at ullamcorper mauris, vehicula cursus dolor. Ut in sapien quis eros
            lobortis viverra quis a felis. Sed magna felis, feugiat at fringilla
            in, commodo sit amet est. Sed quis fermentum lorem.
          </p>
        </div>
        <div className={classes.Videos}>
          {youtubeVideo(
            "https://www.youtube.com/watch?v=0o_JVcSKxRA&list=PLGHxS40mEC9DAjMwg9YqCP6eGzZF0fmEy&index=2&t=3302s&ab_channel=DEVAMS",
            cleanCode,
            cleanCodeVideoDes
          )}
          {youtubeVideo(
            "https://www.youtube.com/watch?v=0o_JVcSKxRA&list=PLGHxS40mEC9DAjMwg9YqCP6eGzZF0fmEy&index=2&t=3302s&ab_channel=DEVAMS",
            laptop,
            laptopVideoDes
          )}
        </div>
      </div>
    </diV>
  );
};

export default Youtube;
