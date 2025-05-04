

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const Menu = () => {
  const currentCustomer = useSelector(state => state.customer.currentCustomer);

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink className="nav-link" to={'home'}>Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={'login'}>Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={'signup'}>Signup</NavLink>
      </li>
      {currentCustomer !== 'manager' && ( 
      <li className="nav-item">
        <NavLink className="nav-link" to={'shoppingbasket'}>Shoppingbasket</NavLink>
      </li>)
      } 

      {currentCustomer !== "no counct" && currentCustomer !== 'manager' && (
        <li className="nav-item">
          <NavLink className="nav-link" to={"personalarea"}>
            <i className="bi bi-person me-1"></i> Personal Area
          </NavLink>
        </li>
      )}

      {currentCustomer === 'manager' && (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to={'categorys'}>Categorys</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={'games'}>Game</NavLink>
          </li>
        </>
      )}

      <li className="nav-item">
        <h1>{currentCustomer}</h1>
      </li>
    </ul>
  );
};


