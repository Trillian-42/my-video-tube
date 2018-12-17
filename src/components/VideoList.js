import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchAllTheVideos } from "../state/actions";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-image: linear-gradient(
    -225deg,
    #5391bd 0%,
    #5e8cad 29%,
    #44107a 80%,
    #231557 100%
  );

  background-repeat: repeat-x;
  padding-top: 20px;
  padding-bottom: 60px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 20rem;
  background: lime;
  margin: 0px 40px 140px 40px;

  #video-image {
    width: 100%;
    height: 100%;
    background: purple; 

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

class VideoList extends React.Component {
  componentDidMount() {
    this.props.fetchAllTheVideos();
  }

  renderList() {
    //return <div>Video List Page</div>
    return this.props.videos.map(video => {
      return (
        <Container>
          {
            <Card>
             
        <div>
                <p>{video.uuid}</p>
                <p>{video.url}</p>
                <p>{video.title}</p>
              </div>
        //     </Card>
          }
        </Container>
      );
    });
  }
  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { videos: state.videos };
};

export default connect(
  mapStateToProps,
  { fetchAllTheVideos }
)(VideoList);
