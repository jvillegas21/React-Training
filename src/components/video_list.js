import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoClick={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });
  return (
    <div className="col-md-3">
      <ul className="list-group">{videoItems}</ul>
    </div>
  );
};

export default VideoList;
