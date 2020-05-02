const Users = (state = [], action) => { 
  console.log(`action=`,action);
  console.log(`concat=`,state.concat([action.data]));
  
  switch (action.type) {
    case "ADD_USER":    
      return state.concat([action.data]);
    default:
      return state;
  }
};
export default Users;
