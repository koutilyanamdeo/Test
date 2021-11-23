import { useFetch } from "react";

const API = (props) => {
  return (
    <div className="design-box">
      <div>ID:{props.ids}</div>
      <div>Name:{props.name}</div>
      <div>Email:{props.emailId}</div>
      <div>Gender:{props.gender}</div>
      <div>joining Date:{props.joiningDate}</div>
      <div>Location:{props.location}</div>
      <div>Department:{props.department}</div>
      <div>About Me:{props.aboutMe} </div>
    </div>
  );
};
export default API;
