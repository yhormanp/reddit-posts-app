import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CancelPresentationOutlinedIcon from "@material-ui/icons/CancelPresentationOutlined";
import red from "@material-ui/core/colors/red";

const MainPost = ({ data }) => {
  return (
    <div className="post-ppal margin-left margin-top">
      <div className="banner">
        <span className="post-status"></span>
        {/* <div className="post-title"></div> */}
        <span className="post-title">{data.author}</span>
        <div className="post-hours">{data.since} Hours Ago</div>
      </div>

      <div className="post-details margin-bottom">
        <div className="margin-left">
          {data.thumbnail === null ? (
            <CancelPresentationOutlinedIcon
              color="error"
              className="img-not-found"
            ></CancelPresentationOutlinedIcon>
          ) : (
            <img className="post-image" src={data.thumbnail}></img>
          )}
        </div>
        <div className="post-text margin-left">{data.title}</div>
        <div> </div>
      </div>
      <div className="footer margin-left">
        <HighlightOffIcon color="error" fontSize="large">
          {" "}
        </HighlightOffIcon>

        <span className="post-action-text">Dismiss Post</span>
        <span className="post-comments">{data.num_comments} Comments</span>
        {/* </div> */}
      </div>
    </div>
  );
};

export default MainPost;
