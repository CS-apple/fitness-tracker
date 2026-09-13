import { useAuth } from "../auth/AuthContext";
import {deleteActivity} from "../api/activities"

export default function ActivityList({ activities, syncActivities }) {
//get auth token from context 
//add turnarty to output, if token then reder delete button 
//delete button onclick, api call to delete from list
//sync list 
const {token} = useAuth();

async function handleDelete(token, id){
  await deleteActivity(token, id);
  await syncActivities();
  return;
}

  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>
          <p>{activity.name}</p>
          {token&&<button onClick={()=> handleDelete(token, activity.id)}>delete</button>}
        </li>
      ))}
    </ul>
  );
}
