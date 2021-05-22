import { connect } from "react-redux";
import { ModalConfirmPizza } from "../components";
import { setInfoUser, closeModal, addSale } from "../actions";


const mapStateToProps = state => ({
  price: state.pizza.price,
  pizzaName: state.pizza.finalName
})

const mapDispatchToProps = dispatch => ({
  setInfoData: info => dispatch(setInfoUser(info)),
  closeModal: bool => dispatch(closeModal(bool)),
  setSale: sale => dispatch(addSale(sale))
})

const ConfirmPizza = connect(mapStateToProps, mapDispatchToProps)(ModalConfirmPizza)

export default ConfirmPizza