import React,{useState} from 'react'
import { useNavigate,useLocation ,useParams} from 'react-router-dom';
const Edit = () => {

    let navigateTo=useNavigate();
    const location = useLocation();
    const editData=location.state

    const {people,token}=useParams()
    const ID=editData._id
    const [task,settask]=useState(editData.task)

    const [datas, setDatas] = useState("")
      const[toggle,settoggle]=useState(false)


      const submitData = (e) => {
        e.preventDefault()
        // localStorage.getItem('postsID',`${postsID}`)
        
      fetch(`http://localhost:8000/posts/editpage/${ID}`, {
          method: "PUT",
          body: JSON.stringify({task}),
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization":`test ${token}`
          }
      }).then((res) => res.json()).then(
          (datas) => {
              setDatas(datas)
              settoggle(!toggle)
        
          localStorage.setItem('jsonwebtoken',`test ${token}`)
          if(datas.status==="success"){
            // const postsID=data.postsId
           
  
            alert( "updated successful")
            navigateTo(`/home/${encodeURIComponent(people)}/${encodeURIComponent(token)}`,{state: ID})
  
            
          }
  })
      }

  return (
    <div>
        <div className='editContainer'>
          <h4>Update here!</h4>
        <form onSubmit={submitData} className='edit'>
           <input name='task' value={task} onChange={(e) =>settask(e.target.value)}></input>
           <button>Update</button>
        </form>
        </div>
    </div>
  )

}
export default Edit;
