const initialState = {
  comData: [],
  isLoading: true,
};
const Reducer = (state=initialState, action) => {
  switch (action.type) {
    case "GET_DATA" :
        return {
            ...state,
            comData: action.payload.comData,
            isLoading: false
        }
    case "Loading":
        return {
            ...state,
            isLoading: true
        }
    case "DELETE":
      const deleteNote=state.comData.filter((curr)=>curr.id !==action.payload)
      return {
        ...state,
        comData: deleteNote
      }
  }
  return state
};

export default Reducer