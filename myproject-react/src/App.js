


import './App.css';
import { HashRouter } from 'react-router-dom';
import { Menu } from './components/menu';
import { Myrouting } from './components/myrouting';
import { useSelector, useDispatch } from 'react-redux';
import { setCustomer, setSal, setPassUser, setSum } from './redux/actions/shoppingActions';
import { setCurrentCustomer, setCustomerId } from './redux/actions/customerActions';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const name = sessionStorage.getItem("currentCustomer");
    const pass = sessionStorage.getItem("passUser");
    const id = sessionStorage.getItem("customerId");

    if (name && pass && id) {
      dispatch(setCurrentCustomer(name));
      dispatch(setPassUser(pass)); 
      dispatch(setCustomerId(+id));
    }
  }, []);

  const cust = useSelector(state => state.customer.currentCustomer);
  const sal = useSelector(state => state.cart.sal);
  const passUser = useSelector(state => state.customer.passUser);
  const sum = useSelector(state => state.cart.sum);

  const updateCustomer = (newCustomer) => {
    dispatch(setCustomer(newCustomer));
  };

  const updateCart = (newCart) => {
    dispatch(setSal(newCart));
  };

  const updatePassUser = (newPass) => {
    dispatch(setPassUser(newPass));
  };

  const updateSum = (newSum) => {
    dispatch(setSum(newSum));
  };

  return (
    <div>
      <HashRouter>
        <Menu />
        <Myrouting />
      </HashRouter>
    </div>
  );
}

export default App;
