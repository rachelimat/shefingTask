import React,{useState} from 'react';
import './App.css';
import Users from './components/Users';
import Posts from './components/Posts';
import UserDetails from './components/UserDetails';
import AddPost from './components/AddPost';
 
function App() {
  const [state,setState]=useState();
  const options = [
    
    {
      label: "name",
      value: "name",
    },
    {
      label: "email",
      value: "email",
    },
  ];

  function handleChange(e) {
    alert( e +" Selected!!");
    setState({ options: e.target.value });
  }
    return (
      <>
     
        
        <div >
        <div className="select-container" style={{width: '50px'}}>
          <select>
            <label> Choose your favorite sort </label>
            {options.map((option) => (
              <option value={option.value} onChange={handleChange}>{option.label}</option>
            ))}
          </select>
          
        </div>
        
            
          <Users data2={Posts.data2}/>
          <AddPost/>
          <Posts />
        </div>
      </>
    );
    
}
 
 
export default App;
