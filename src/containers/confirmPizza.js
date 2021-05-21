import { connect } from "react-redux";
import { ModalConfirmPizza } from "../components";
import { setInfoUser, closeModal } from "../actions";

const mapStateToProps = state => ({
  price: state.pizza.price,
  pizzaName: state.pizza.finalName
})

const mapDispatchToProps = dispatch => ({
  setInfoData: info => dispatch(setInfoUser(info)),
  closeModal: bool => dispatch(closeModal(bool))
})

const ConfirmPizza = connect(mapStateToProps, mapDispatchToProps)(ModalConfirmPizza)

export default ConfirmPizza