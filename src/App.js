import "./styles.css";
import React from "react";
import API from "./API/API";
function App() {
  let myData = [
    {
      id: 1,
      name: "  Ravi",
      emailId: "ravi@gmail.com",
      aboutMe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum eros vitae enim mollis molestie. Morbi malesuada laoreet felis fringilla dignissim. Cras gravida quis augue et pellentesque. Integer fermentum ante in hendrerit tincidunt.",
      location: ["Bangalore"],
      department: ["Development"],
      age: 24,
      gender: "M",
      joiningDate: "24/9/2019"
    },
    {
      id: 2,
      name: "  Ankita",
      emailId: "  ankita@gmail.com ",
      aboutMe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum eros vitae enim mollis molestie. Morbi malesuada laoreet felis fringilla dignissim. Cras gravida quis augue et pellentesque. Integer fermentum ante in hendrerit tincidunt.",
      location: ["Kolkata"],
      department: ["Design "],
      age: 24,
      gender: "F",
      joiningDate: "12/1/2015"
    },
    {
      id: 3,
      name: " Balaji ",
      emailId: "  balaji@gmail.com",
      aboutMe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum eros vitae enim mollis molestie. Morbi malesuada laoreet felis fringilla dignissim. Cras gravida quis augue et pellentesque. Integer fermentum ante in hendrerit tincidunt.",
      location: [" Kolkata"],
      department: ["Design"],
      age: 24,
      gender: "F",
      joiningDate: "1/12/2020"
    }
  ];

  return (
    <div className="App">
      <API
        ids={myData[0].id}
        name={myData[0].name}
        emailId={myData[0].emailId}
        aboutMe={myData[0].aboutMe}
        location={myData[0].location}
        department={myData[0].department}
        age={myData[0].age}
        gender={myData[0].gender}
        joiningDate={myData[0].joiningDate}
      />
      <API
        ids={myData[1].id}
        name={myData[1].name}
        emailId={myData[1].emailId}
        aboutMe={myData[1].aboutMe}
        location={myData[1].location}
        department={myData[1].department}
        age={myData[1].age}
        gender={myData[1].gender}
        joiningDate={myData[1].joiningDate}
      />
      <API
        ids={myData[2].id}
        name={myData[2].name}
        emailId={myData[2].emailId}
        aboutMe={myData[2].aboutMe}
        location={myData[2].location}
        department={myData[2].department}
        age={myData[2].age}
        gender={myData[2].gender}
        joiningDate={myData[2].joiningDate}
      />
    </div>
  );
}

export default App;
