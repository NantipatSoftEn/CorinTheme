import { connect } from "react-redux";
import Forms from "../components/Forms";
import Table from "../components/Table";
import { addUser,editUser,delUser } from "../actions/Users";

const mapStateToProps = (state) => {
  return {
    Users: state.Users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (data) => {
      dispatch(addUser(data));
    },
    editUser: (id) => {
      dispatch(editUser(id));
    },
    delUser:(id)=>{
      dispatch(delUser(id));
    }
  };
};

const FormsWithLogic = connect(mapStateToProps, mapDispatchToProps)(Forms);
const TableWithLogic  = connect(mapStateToProps, mapDispatchToProps)(Table);

export default {
  FormsWithLogic,
  TableWithLogic
}
