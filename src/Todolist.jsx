import React,{useState} from 'react'

const Todolist = () => {
  const [formvalues,setFormvalues]=useState({todo:'',status:''})
  const [store,setStore]=useState([])
  const [search,SetSearch]=useState('')
  const changehandler=(e)=>{
    setFormvalues({...formvalues,[e.target.name]:e.target.value})
  }
  const submithandler=(e)=>{
    e.preventDefault()
    console.log(formvalues)
    const newstore=[...store,formvalues]
    setStore(newstore)
  }
  const deletehandler=(indexvalue)=>{
    const filteredstore=store.filter((elem,index)=>index!==indexvalue)
    setStore(filteredstore)
  }
  const edithandler=(editindexvalue)=>{
    const filteredstore=store.filter((elem,index)=>index!==editindexvalue)
    setStore(filteredstore)
    const editselector=store.find((elem,index)=>index===editindexvalue)
    setFormvalues({
    todo:editselector.todo,
 })
  }
  return (
    <div className='container mt-5'>
  <div className='row mx-auto'> 
  <div className='col'>

  <div className='card'>
  <div className='card-header bg-success text-white'>
  <h1 className='text-center'>TODO WEB APP</h1>
  </div>
  <div className='card-body'>
  <form onSubmit={submithandler}>
    <div className='form-group'>
  <input  type='text' className='form-control' name='todo' value={formvalues.todo} onChange={changehandler} placeholder='Enter Todo....'/>
    </div>
    <div className='form-group'>
   <select name='status' onChange={changehandler} className='form-control-lg'>
    <option>select</option>
    <option>Completed</option>
    <option>Pending</option>..
 
   </select>
    </div>
    <button className='btn btn-info' type='submit'>Add</button>
  </form>
  </div>
  </div>

<div className=' mt-5 mb-3 d-md-flex align-items-center justify-content-center'>
<button className='btn btn-outline-info mr-3'  value='Completed' onClick={(e)=>SetSearch(e.target.value)}>Completed</button>
<button className='btn btn-outline-info mr-3'  value='Pending' onClick={(e)=>SetSearch(e.target.value)}>Pending</button>
<button  className='btn btn-outline-info mr-3'  onClick={(e)=>SetSearch(e.target.value)}>All tasks</button>
</div>
{Object.keys(store).length>0?(<table className='table table-hover'>
    <thead>
      <tr>
        <th>I.D</th>
        <th>TODO's</th>
      <th>EDIT/DELETE</th>
      </tr>
    </thead>
    <tbody>
      {
 store.filter((val)=>{
  if(search===''){
    return val
  }
  else if (val.status.toLowerCase().includes(search.toLowerCase())){
                return val
              }
 })
 .map((person,index)=>{
  return(
    <tr key={index}>
      <td>{index+1}</td>
      <td>{person.todo}</td>
      <td>
           <i className='fas fa-edit mr-4' onClick={()=>edithandler(index)}></i>
            <i className='fas fa-trash' onClick={()=>deletehandler(index)}></i>
      </td>
    </tr>
  )
 })
      }
    </tbody>
  </table>):null}

  
 
  </div>
   </div>
    </div>
  )
}

export default Todolist