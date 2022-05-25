import React from "react";
import UserDetails from "./UserDetails";

export default(props)=>{
   
return (
    <>
    
        <tr >
           
                <td  onClick={props.onClick  } >
                <a href={props.name}>{props.name}</a>
                </td>  
                
                <td>{props.email}</td>
                <td>{props.companyName}</td>
                
        </tr>

        {
          
         
            
        }


        
        
    </>
)


}