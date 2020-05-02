const Users = (state = 0, action) => {
  switch (action.type) {
    case "ADD_USER":
      return state.concat([action.data]);
  }
};
