import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CancelPresentationOutlinedIcon from "@material-ui/icons/CancelPresentationOutlined";

const MainPost = ({ data, onPostClicked, onDismissPost }) => {
  return (
    <div
      className="post-ppal margin-left margin-top"
    >
      <div  onClick={() => onPostClicked(data)}>
        <div className="banner">
          <span
            className={`post-status ${data.visited ? "status-read" : ""}`}
          ></span>
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
      </div>
      <div className="footer margin-left">
        <div className="post-action-pack" onClick={() => onDismissPost(data)}>
          <HighlightOffIcon color="error" fontSize="large"></HighlightOffIcon>

          <span className="post-action-text">Dismiss Post</span>
        </div>
        <span className="post-comments">{data.num_comments} Comments</span>
      </div>
    </div>
  );
};

export default MainPost;
