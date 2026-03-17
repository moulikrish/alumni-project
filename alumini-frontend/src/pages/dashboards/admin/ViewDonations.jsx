import {useEffect,useState} from "react"
import axios from "axios"
import DashboardLayout from "../../../components/DashboardLayout"

function ViewDonations(){

const [donations,setDonations] = useState([])

useEffect(()=>{
 fetchDonations()
},[])

const fetchDonations = ()=>{

 axios.get("https://alumni-project-8aoi.onrender.com/api/admin/donations")
 .then(res=>setDonations(res.data))

}

return(

<DashboardLayout role="admin">

<div className="container mt-4">

<h2 className="text-center mb-4">Alumni Donations</h2>

<table className="table table-bordered table-striped">

<thead className="table-dark">

<tr>
<th>Name</th>
<th>Amount</th>
<th>Message</th>
</tr>

</thead>

<tbody>

{donations.map(d=>(

<tr key={d.id}>
<td>{d.alumniName}</td>
<td>₹ {d.amount}</td>
<td>{d.message}</td>
</tr>

))}

</tbody>

</table>

</div>

</DashboardLayout>

)

}

export default ViewDonations