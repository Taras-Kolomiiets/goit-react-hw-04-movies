import Loader from "react-loader-spinner";
import classes from "./PreLoader.module.css";

const PreLoader = () => {
  return (
    <Loader
      className={classes.item}
      type="ThreeDots"
      color="#2e83e5"
      height={100}
      width={100}
    />
  );
};

export default PreLoader;
