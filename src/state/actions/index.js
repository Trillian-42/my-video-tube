import backendAPI from "../apis/backendAPI";

export const fetchAllTheVideos = () => async (dispatch, getState) => {
  await dispatch(fetchVideos());
};

export const fetchVideos = () => async dispatch => {
  const response = await backendAPI.get("videos");

  dispatch({ type: "FETCH_VIDEOS", payload: response.data });
};
