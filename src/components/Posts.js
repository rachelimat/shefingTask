import React,{useState,useEffect} from 'react';
import UserDetails from './UserDetails';

export default (props) =>{
    const [data2,getData2]=useState([]);
     const [isTableShown,setState]=useState(false);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=> response.json() ) 
        .then((data2)=>  getData2(data2));
            
        
    },[])
   
    return (
        <>
        <div >

            <h1>posts</h1>
            <table id="tableId2">
            <tbody>
                <tr>
                    <th>User Id</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
                { 
                data2.map((item,i) => (<UserDetails userId={item.userId} id={item.id} title={item.title} body ={item.body}  />))
                }
            </tbody>
        </table>
        </div>
        </>
        

    )

}