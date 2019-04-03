import { connect } from "react-redux";
import Navbar from "./Navbar";

/* 
  let c1 = "item";
  let c2 = "active";
  let classes = c1 + " " + c2;
  // результат - "item active"
  let classNew = `${c1} ${c2}`; //шаблонная строка
  // результат тот же - "item active"
  Если мы в строку внедряем javascript код
  то добавляем `${тут код}`
  и все в обратные кавычки
*/

let mapStateToProps = (state) => {
  return {
    navItems: state.sidebar.navItems,
    myFriends: state.sidebar.myFriends    
  }
}

let mapDispatchToProps = (dispatch) => {
  return null
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default NavbarContainer;
