import React,{useState,useEffect} from "react";
import Posts from './Posts';
import LineDetails from "./LineDetails";
import UserDetails from "./UserDetails";

export default (props)=>{
   
    const [data,getData]=useState([]);
     const [isTableShown,setState]=useState(false);
     const [dataNew,newD]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json() ) 
        .then((data)=>  getData(data));
            
        
    },[])
        

    function filterByUser(data2,id){
       
        
        let tableSort="";
        for(var i ;i< data2.lenght;i++){
            if(data2.id === id){
                
                
                tableSort+= <tr >
            
                <td>{props.userId}</td>  
                <td>{props.id}</td>
                <td>{props.title}</td>
                <td>{props.body}</td>
                
        </tr>;
            }

        }
        
        return tableSort;
    }
   
    
    return (

                <><h1>React App</h1><h1>User Detalies</h1>
                <table id="tableId">
            <tbody>
                <tr>
                    
                    <th>name</th>
                    <th>email</th>
                    <th>company name</th>
                </tr>
                
                {
                    data.map((item,i) => (<LineDetails onclick={()=>{
                        setState(true);
                       
                        filterByUser(props.data2,item.id);
                        newD(this.tableSort);
                        
                     }} sorted={dataNew} name={item.name}  email={item.email}  companyName={item.company.name}/>))
                }
                
                   
                
               
            </tbody>
        </table>
        {
          isTableShown &&
          <table2>
            

          </table2>  
            
        }
         
        </>
          )
    }