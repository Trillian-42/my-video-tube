import React from "react";
import styled from "styled-components";


const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 20rem;
  background: lime;
  margin: 0px 40px 140px 40px;

  #video-image {
    width: 100%;
    height: 80%;
    background: blue;
  }

  #video-details {
    width: 100%;
    height: 30%;
    background: blue;

    p {
      font-size: 0.8rem;
      font-weight: normal;
      color: white;
      margin-top: 0.2rem;
      margin-bottom: 0.2rem;
    }

    p1 {
      font-size: 25px;
      font-weight: bold;
      color: white;
      text-overflow: hidden;
      margin-top: 0.2rem;
      margin-bottom: 0.2rem;
    }
  }
`;

const VideoItem = ({VideoList}) => {
    return (
        <Card>
            <div id="video-details">
              <p>{video.uuid}</p>
              <p>{video.url}</p>
              <p>{video.title}</p>
            </div>
          </Card>
    );
};
    

export default VideoItem;