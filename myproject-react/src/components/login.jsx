// import { useContext, useState } from "react"
// import MyContex from "../contex"


// export const Login=()=>{

//     //----------------לפי שיטת ריזי ושרי--------------
// const f2 = async() =>{
// }


// const setcurrentCustomer = useContext(MyContex).setcurrentCustomer
// const [customer, setcustomer] = useState({})

// const f1 = () => {
//     f2()
//     setcurrentCustomer(customer)
//     if (customer.name === "maneger" )
//         setcurrentCustomer("maneger")

// }

// return <div>
//     <input type={'text'} placeholder="name" onBlur={(e) => setcustomer({ ...customer, name: e.target.value })} />
//     <input type={'password'} placeholder="code" onBlur={(e) => setcustomer({ ...customer, pass: e.target.value })} />
//     <input type={'button'} value="save_logingGood" onClick={() => f1()} />
// </div>

   
// }

////----------------------זה עיצוב רגיל--------------------
// import { useContext, useState } from "react";
// import MyContex from "../contex";

// export const Login = () => {

//     //----------------according to the Rizzi and Sherry method--------------
//     const f2 = async () => {
//         // You can add any asynchronous logic here as needed.
//     };

//     const setcurrentCustomer = useContext(MyContex).setcurrentCustomer;
//     const [customer, setcustomer] = useState({});

//     const f1 = () => {
//         f2();
//         // Check if the customer is a manager based on name and password
//         if (customer.name === "maneger" && customer.password === "1234") {
//             setcurrentCustomer("maneger");
//         } else {
//             setcurrentCustomer(customer);
//         }
//     };

//     return (
//         <div>
//             <input 
//                 type={'text'} 
//                 placeholder="name" 
//                 onBlur={(e) => setcustomer({ ...customer, name: e.target.value })} 
//             />
//             <input 
//                 type={'password'} 
//                 placeholder="password" 
//                 onBlur={(e) => setcustomer({ ...customer, password: e.target.value })} 
//             />
//             <input 
//                 type={'button'} 
//                 value="save_loggingGood" 
//                 onClick={() => f1()} 
//             />
//         </div>
//     );
// }

//-------------אני מנסה עיצוב שמלכה ברוק מציע------------
//--------------------לפני הבוקר GBT---------------------
// import { useContext, useState } from "react";
// import MyContex from "../contex";
// import { useNavigate } from "react-router-dom";
// import { haveThisCustomerReact } from "../axios/Customeraxios";

// export const Login = () => {

//     const mynevigate=useNavigate()

//     const [customer, setcustomer] = useState();//שעור את מצב לקוח משתנה גלובלי 
//      //משתנים שלוחים מהכונקס
//       //שליפת הלקוח
//      const currentCustomer = useContext(MyContex).currentCustomer
//      const setcurrentCustomer = useContext(MyContex).setcurrentCustomer;
//       //שליפת סיסמת לקוח
//     const passUser =useContext(MyContex).passUser
//     const  setpassUser =useContext(MyContex).setpassUser
//     //שליפת קוד הלקוח
//      const customerId = useContext(MyContex).customerId;
//      const setcustomerId = useContext(MyContex).setcustomerId;
    
//      const f1 = async () => {

//         if (customer.name === "manager" && customer.pass === "1234") {
//             setcurrentCustomer("manager");
//         } 
//         else 
//         {
//             let y=(await haveThisCustomerReact(customer.name,customer.pass)).data
//             if(y!=0)
//             {
//             alert("have this Customer")
//             setcurrentCustomer(customer);
//             setpassUser(customer.pass)
//             setcustomerId(y);
//             }
//             else
//             {
//                 alert("no have this Customer")
//                 alert("You're being transferred to the signUp page")
//                 setcurrentCustomer("no counct")
//                 setcustomerId(0);
//                 mynevigate("/signup")   //ניתוב יזום
//             }
//         }
        
//     };
    

//     return (
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
//             <h2 style={{ marginBottom: '20px', color: '#333' }}>Login</h2>
//             <div style={{ backgroundColor: '#f7f7f7', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
//                 <input 
//                     type='text' 
//                     placeholder="Name" 
//                     onBlur={(e) => setcustomer({ ...customer, name: e.target.value })} 
//                     style={{ margin: '10px 0', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', width: '200px' }} 
//                 />
//                 <input 
//                     type='password' 
//                     placeholder="Code" 
//                     onBlur={(e) => setcustomer({ ...customer, pass: e.target.value })} 
//                     style={{ margin: '10px 0', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', width: '200px' }} 
//                 />
//                 <input 
//                     type='button' 
//                     value="Save Logging Good" 
//                     onClick={() => f1()} 
//                     style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#40E0D0', color: 'white', cursor: 'pointer', width: '100%' }} 
//                 />
//             </div>
//         </div>
//     );
// };

//----------------------עיצוב חיבור ----1-------
import { useContext, useState } from "react";
import MyContex from "../contex";
import { useNavigate } from "react-router-dom";
import { haveThisCustomerReact } from "../axios/Customeraxios";

export const Login = () => {
  const myNavigate = useNavigate();
  
  // State לניהול פרטי הלקוח
  const [customer, setCustomer] = useState({});
  
  // שליפת המשתנים מתוך ה-Context
  const currentCustomer = useContext(MyContex).currentCustomer;
  const setCurrentCustomer = useContext(MyContex).setcurrentCustomer;
  const passUser = useContext(MyContex).passUser;
  const setPassUser = useContext(MyContex).setpassUser;
  const customerId = useContext(MyContex).customerId;
  const setCustomerId = useContext(MyContex).setcustomerId;

  const f1 = async () => {
    if (customer.name === "manager" && customer.pass === "1234") {
      setCurrentCustomer("manager");
    } else {
      let y = (await haveThisCustomerReact(customer.name, customer.pass)).data;
      if (y !== 0) {
        alert("This customer exists");
        setCurrentCustomer(customer.name)
        setPassUser(customer.pass);
        setCustomerId(y);
      } else {
        alert("This customer does not exist");
        alert("You're being transferred to the signUp page");
        setCurrentCustomer("no account");
        setCustomerId(0);
        myNavigate("/signup"); // ניווט לעמוד הרישום
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <div className="card p-4 shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4" style={{ color: '#333' }}>Login</h2>
        <div className="form-group mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            type="text" 
            id="name" 
            className="form-control" 
            placeholder="Enter your name"
            onBlur={(e) => setCustomer({ ...customer, name: e.target.value })}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password" className="form-label">Code</label>
          <input 
            type="password" 
            id="password" 
            className="form-control" 
            placeholder="Enter your password"
            onBlur={(e) => setCustomer({ ...customer, pass: e.target.value })}
          />
        </div>
        <button 
          className="btn btn-info btn-block w-100" 
          onClick={f1} 
          style={{ padding: '10px' }}
        >
          Log In
        </button>
      </div>
    </div>
  );
};





//-------**********************--------------
//---לפי שיטת תמר הופמן----
// const [curentuser,setCurentU]=useState({})
// let setManager=useContext(mycont).setism

// const checkIfManager=()=>{
//     if(curentuser.name==="M" && curentuser.password==="1")
//        setManager(true) 
//     else
//     (setManager(false))
// }
// return(
//  <div>
//      <InputGroup className="mb-3">
//     <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
//     <Form.Control
//       onBlur={(e)=>setCurentU({...curentuser,name:e.target.value})}
//       placeholder="name"
//       aria-label="Username"
//       aria-describedby="basic-addon1"
//     />
//   </InputGroup>
//   <InputGroup className="mb-3">
//     <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
//     <Form.Control
//       onBlur={(e)=>setCurentU({...curentuser,password:e.target.value})}
//       placeholder="password"
//       aria-label="Username"
//       aria-describedby="basic-addon1"
//     />
//   </InputGroup>
// {/* <InputGroup onBlur={(e)=>setCurentU({...curentuser,name:e.target.value})}placeholder='name'></InputGroup><br></br>  */}
// {/* <InputGroup type={'password'}onBlur={(e)=>setCurentU({...curentuser,password:e.target.value})}placeholder='password'></InputGroup> */}
//  <Button variant="info"  onClick={()=>checkIfManager()}>OK</Button>
// </div>   
// )
