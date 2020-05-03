import { connect } from "react-redux";
import Forms from "../components/Forms";
import Table from "../components/Table";
import { addUser, editUser, delUser } from "../actions/Users";

const mapStateToProps = (state) => {
  return {
    Users: state.Users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAddUser: (data) => {
      dispatch(addUser(data));
    },
    dispatchEditUser: (id) => {
      dispatch(editUser(id));
    },
    dispatchDelUser: (id) => {
      dispatch(delUser(id));
    },
  };
};

const FormsWithLogic = connect(mapStateToProps, mapDispatchToProps)(Forms);
const TableWithLogic = connect(mapStateToProps, mapDispatchToProps)(Table);

export default {
  FormsWithLogic,
  TableWithLogic,
};
