import React from "react";
import CancelPresentationOutlinedIcon from "@material-ui/icons/CancelPresentationOutlined";

const PostDescription = ({ data }) => {
  return (
    <>
      {data && (
        <div>
          <div className="post-desc-centered">
              <div>
                <h1>{data.author}</h1>
                {data.thumbnail === null ? (
                  <CancelPresentationOutlinedIcon
                    color="error"
                    className="img-not-found"
                  ></CancelPresentationOutlinedIcon>
                ) : (
                  <img className="post-desc-image" src={data.full_image}></img>
                )}
              </div>
          </div>

          <div>
            <p>{data.title}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default PostDescription;
