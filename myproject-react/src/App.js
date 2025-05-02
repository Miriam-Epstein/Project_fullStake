import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Menu } from './components/menu';
import { Myrouting } from './components/myrouting';
import { useState } from 'react';
import { MyProvider } from './contex';

function App() {

  const [cust,setcust] = useState("no counct");//------------משתנה גלובלי בשביל המשתמש------
   
  const [sal,setsal]=useState([])//--------יצירת רשימה גלובלית לסל קניות-----

  const[passUser,setpassUser]=useState("000");//pass user

  //בשביל לדעת כמה עלתה הקניה
  const[sum,setsum]=useState(0)

  const [customerId,setcustomerId] = useState(0)//מכיל את האידי בשביל פונקציה קניה

  const [custtemp,setcusttemp] = useState("");//------------משתנה גלובלי בשביל המשתמש------

   
    //----------קובץ stor.js-----------
  const store = {

    customerId:customerId,
    setcustomerId:setcustomerId,

    
    currentCustomer:cust,
    setcurrentCustomer: setcust,

   
   
    sal:sal,
    setsal:setsal,

    passUser:passUser,
    setpassUser:setpassUser,

    sum:sum,
    setsum:setsum
  }
  
  return (
    <div >
      <MyProvider  value={store}>
        <BrowserRouter> 
          <Menu></Menu>
          <Myrouting></Myrouting>
        </BrowserRouter>
     </MyProvider>
    </div>
  );
}

export default App;
