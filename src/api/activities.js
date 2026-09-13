const API = import.meta.env.VITE_API;

/** Fetches an array of activities from the API. */
export async function getActivities() {
  try {
    const response = await fetch(API + "/activities");
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return [];
  }
}

/**
 * Sends a new activity to the API to be created.
 * A valid token is required.
 */
export async function createActivity(token, activity) {
  if (!token) {
    throw Error("You must be signed in to create an activity.");
  }

  const response = await fetch(API + "/activities", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(activity),
  });
      const result = await response.json();
  if (!response.ok) {
    // const result = await response.json();
    throw Error(result.message);
  }
}

//create delete function
export async function deleteActivity(token, id){
  console.log(id)
  if(!token) throw Error("you must be logged in to delete activity ")
  try{
    const response = await fetch(API + "/activities/" + id, {
      method: "DELETE",
      headers:{
        "Content-Type": "application/JSON",
        "Authorization": `Bearer ${token}`,
      }
    })
    if(response === 204){
      console.log("delete success: "+ id)
    }
  }catch(err){
    console.log(err)
  }
}