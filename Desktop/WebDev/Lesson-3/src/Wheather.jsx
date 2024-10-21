import React from 'react'

function Wheather({temparature}) {
 if(temparature < 15){
    return(
          <div> <h1>Its cold outside</h1></div>
    );
 }else if( temparature >= 15 && temparature <= 25){
    return(
        <div> <h1>Its nice outside</h1></div>
    );
 }else{
    if((temparature > 25)){
        return(
            <div> <h1>Its hot outside</h1></div>
        );
    }
 }
}

export default Wheather