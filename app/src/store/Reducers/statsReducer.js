export const initialState = [
    {
      id: 1, 
      funny: "funny"
    },
    {
      id: 2, 
      funny: "notfunny"
    }

  // id: 8,
  // type: 'general',
  // setup: 'Why couldn\'t the pilot fly the plane',
  // punchline: 'Because he was a tomato',
  // loading: true
]


const statsReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default statsReducer;