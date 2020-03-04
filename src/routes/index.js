// import React, { useState, useEffect } from 'react';
// import HOC from '../functions/hoc';
//  function loaderComponent (props){

//     const [active,setActive]= useState(0);

//     useEffect=(()=>{
//       console.log(props.data)
//     },[props.data]);

//     return(
//         <div>
//         <p>Loaded</p>
//         {/* {props.data} */}
//         </div>
//     )
// }

// export default HOC(loaderComponent);

import React, { useState, useEffect } from "react";

import HOC from "../functions/hoc";

const LoaderComponent = props => {
  //0>Loading  //1> push to admin //2 push to home // 3 push to login
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(()=>{

    console.log(props.data)
  },[props.data]);

  return (
    <div>
      {/* <p>Loaded</p> */}
      {/* {props.data} */}
      {props.data === null && <p style={{ color: "red" }}>Loading..</p>}
      {props.data&&(props.data.role === "admin"||props.data.role === "superadmin") && (
        <p style={{ backgroundColor: "cyan" }}>Admin</p>
      )}
      {props.data&&props.data.role === "user" && (
        <p style={{ backgroundColor: "cyan" }}>User</p>
      )}
      {props.data&&props.data.role === "manager" && (
        <p style={{ backgroundColor: "cyan" }}>manager</p>
      )}
       {props.data&&props.data.role === "login" && (
        <p style={{ backgroundColor: "cyan" }}>Login</p>
      )}
      {/* <p>error
      </p> */}
    </div>
  );
};
export default HOC(LoaderComponent);
