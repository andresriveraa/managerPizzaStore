import { connect } from "react-redux";
import { StatisticComp } from "../components";

const mapStateToProps = state => ({
  salesData: state.sales,
  clients: state.usersInfo
})

// const mapDispatchToProps = dispatch => ({
// })

const Statistics = connect(mapStateToProps, null)(StatisticComp)

export default Statistics