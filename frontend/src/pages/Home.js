import React, { useState ,useEffect,useRef} from 'react'
import {useParams,useNavigate, json} from 'react-router-dom'
import 'primeicons/primeicons.css'
import './pages.css'
const Home = () => {
 
  const {people,token} =useParams();
  const [Id,setID]=useState("")

 
  const navigate=useNavigate();  
  

  const [Task,setTask]=useState("")

  
 
  const [data,setData]=useState("")
  const [taskdata,settaskData]=useState([])
  localStorage.getItem('jsonwebtoken',`test ${token}`)


  //submit
  const submitData = (e) => {
    e.preventDefault()
  
    fetch(`http://localhost:8000/posts/`,{
        method: "POST",
        body: JSON.stringify(Task),
    headers: {
        "Content-Type": "application/json",
       
        "Accept": "application/json",
        "Authorization":`test ${token}`
    }
    }).then((res) => res.json()).then((data)=>{
      setData(data)
    alert(JSON.stringify(data))
      const postsID=data.postsId
        localStorage.setItem('postsID',`${postsID}`)
        // console.log(postsID)
        setID(postsID)
        
      
    })
    
}


const handleDelete=(id)=>{
console.log(id)

fetch(`http://localhost:8000/posts/${id}`, {
  method: "DELETE",
  headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization":`test ${token}`
  },
  
}).then((response) => response.json())
}


//edit



//useEffect

useEffect(() => {

  fetch(`http://localhost:8000/posts/`, {
         method: "GET",
         headers: {
             "Content-Type": "application/json",
             "Accept": "application/json",
             "Authorization":`test ${token}`
         }
     }).then((response) => response.json()).then((value) => {
      
  settaskData(value.posts)
   
     }

 , [])
})





  return (
    <div>
      <div className='App'>
        <div className='container'>
      <h1>Add Task</h1>
       
      <form onSubmit={submitData} className='top'>
        <input type='text' name='task' placeholder='Add Task' onChange={(e)=>setTask(...Task,e.target.value)}></input>
        <button className='add' >Add</button>
      </form>
     </div>
     </div>
      
      <div>
      {
              taskdata.map((val)=>{
                return  <div className='task'>
                  <div className='text'>{val.task}</div>
                  <div className='icons'>
                  <button className='icon' onClick={()=>handleDelete(val._id)} ><i className='pi pi-file-edit'></i></button>
                  <button className='icon'  onClick={()=>navigate(`/edit/${encodeURIComponent(people)}/${encodeURIComponent(token)}/${val._id}`,{state: val})} ><i className='pi pi-delete-left'></i></button>
                    </div>
                  
                
                
                </div>
               
                
            },
          )}
            

     </div>      
</div>
     )
          }          

export default Home;



//


 /* <table border="1" style={{ border: "1px solid pink", marginTop: "10px", marginLeft: "20%", width: "65%" }}>
  { taskdata.map((val) => {
    return <tr key={key}>
        <td>{val._id}</td>
        <td>{val.task}</td>
        <td><button  onClick={()=>handleDelete(val._id)}>Delete</button></td>
         <td><button   onClick={()=>navigate(`/edit/${encodeURIComponent(people)}/${encodeURIComponent(token)}/${val._id}`,{state: val})} >Edit</button></td>
    </tr>
    
})
 }
 </table> */