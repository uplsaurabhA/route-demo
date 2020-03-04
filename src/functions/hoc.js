import React, { Component, useState, useEffect } from "react";

const higherOrderComponent = WrappedComponent => {
  const HOC = props => {
      const initialData = {};
      const[authData, setAuthData] = useState(initialData);
    useEffect(() => {
      if (localStorage.getItem("token")) {
        const reqValues = {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        };
        fetch(
        "https://teamclock.api.underscoretec.com/user/login?email=admin@teamclock.net&password=" +
            "123456",
          reqValues
        )
          .then(
            result =>
              result.json()
          )

          .then(result => {
              console.log(result)

              if(!result.error){

              setAuthData({role:result.result.role})
              }else{

            setAuthData({role:'login'})


              }

          })
          .catch(err => {
            console.log(err);
            setAuthData({role:'login'})
          });
      }
      else{


        setAuthData({role:'login'})

      }
    }
    , []);

    return <WrappedComponent {...props} data={Object.keys(authData).length>0?authData:null} />;
  };

  return HOC;
};

export default higherOrderComponent;
