import React,{ useState } from 'react';

const LoaderComponent =()=>{

    const [active,setActive]= useState(0);


    return(
        <div>
        <p>Loaded</p>
        </div>
    )
}

export default LoaderComponent;