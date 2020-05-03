import { connect } from "react-redux";
import Forms from "../components/Forms";
import { addUser } from "../actions/Users";

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
  };
};

const FormsContainner = connect(mapStateToProps, mapDispatchToProps)(Forms);

export default FormsContainner;