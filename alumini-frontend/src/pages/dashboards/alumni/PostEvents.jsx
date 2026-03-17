import {useState,useEffect} from "react"
import axios from "axios"
import DashboardLayout from "../../../components/DashboardLayout"

function PostEvents(){

const [title,setTitle] = useState("")
const [date,setDate] = useState("")
const [time,setTime] = useState("")
const [venue,setVenue] = useState("")

const [events,setEvents] = useState([])
const [editId,setEditId] = useState(null)

useEffect(()=>{
 fetchEvents()
},[])

const fetchEvents = ()=>{

 axios.get("http://localhost:8080/api/admin/events")
 .then(res=>setEvents(res.data))

}

// CREATE / UPDATE EVENT
const createEvent = ()=>{

 if(editId){

  axios.put(`http://localhost:8080/api/admin/events/${editId}`,{
   title,
   date,
   time,
   venue
  }).then(()=>{
   resetForm()
   fetchEvents()
  })

 }else{

  axios.post("http://localhost:8080/api/admin/events",{
   title,
   date,
   time,
   venue
  }).then(()=>{
   resetForm()
   fetchEvents()
  })

 }

}

// DELETE EVENT
const deleteEvent = (id)=>{

 axios.delete(`http://localhost:8080/api/admin/events/${id}`)
 .then(()=>fetchEvents())

}

// EDIT EVENT
const editEvent = (event)=>{

 setEditId(event.id)
 setTitle(event.title)
 setDate(event.date)
 setTime(event.time)
 setVenue(event.venue)

}

const resetForm = ()=>{
 setTitle("")
 setDate("")
 setTime("")
 setVenue("")
 setEditId(null)
}

return(

<DashboardLayout role="alumni">

<div className="container mt-4">

<h2 className="text-center mb-4">Manage Events</h2>

{/* Event Form */}

<div className="row justify-content-center">

<div className="col-md-3">

<div className="card shadow p-4 mb-4">

<div className="mb-3">
<label className="form-label">Event Title</label>
<input
className="form-control"
value={title}
onChange={e=>setTitle(e.target.value)}
/>
</div>

<div className="mb-3">
<label className="form-label">Date</label>
<input
type="date"
className="form-control"
value={date}
onChange={e=>setDate(e.target.value)}
/>
</div>

<div className="mb-3">
<label className="form-label">Time</label>
<input
type="time"
className="form-control"
value={time}
onChange={e=>setTime(e.target.value)}
/>
</div>

<div className="mb-3">
<label className="form-label">Venue</label>
<input
className="form-control"
value={venue}
onChange={e=>setVenue(e.target.value)}
/>
</div>

<button
className="btn btn-primary w-100"
onClick={createEvent}
>

{editId ? "Update Event" : "Create Event"}

</button>

</div>

</div>

</div>

{/* Event List */}

<h3 className="text-center mb-3">All Events</h3>

<div className="table-responsive">

<table className="table table-bordered table-striped">

<thead className="table-dark">

<tr>
<th>Title</th>
<th>Date</th>
<th>Time</th>
<th>Venue</th>
<th>Actions</th>
</tr>

</thead>

<tbody>

{events.map(e=>(

<tr key={e.id}>

<td>{e.title}</td>
<td>{e.date}</td>
<td>{e.time}</td>
<td>{e.venue}</td>

<td>

<button
className="btn btn-warning btn-sm me-2"
onClick={()=>editEvent(e)}
>
Edit
</button>

<button
className="btn btn-danger btn-sm"
onClick={()=>deleteEvent(e.id)}
>
Delete
</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

</DashboardLayout>

)

}

export default PostEvents