import Hello from "../components/Hello";
import * as actions from "../actions/";
import { StoreState } from "../types/index";
import { connect, Dispatch } from "react-redux";

/*
connect will be able to actually take our original Hello component and turn it into a container using two functions:
mapStateToProps which massages the data from the current store to part of the shape that our component needs.
mapDispatchToProps which creates callback props to pump actions to our store using a given dispatch function.
*/

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName
  };
}

export function mapDispatchToProps(
  dispatch: Dispatch<actions.EnthusiasmAction>
) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);

