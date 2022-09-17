import React from "react";
import { useState, useEffect } from "react";

export default function User() {
  const [users, setUsers] = useState([]);
  const [users1, setUsers1] = useState([]);
  const [users2, setUsers2] = useState([]);
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(true)

  const toggleBtn = () =>{
    setToggle(!toggle)
    filterButton(toggle)
  }

  const filterButton = (e) =>{
    if(e){
      const filterItem = users1.filter((currElem) => {
        return currElem.is_paid === e
      })
        setUsers(filterItem)
    }else if(e === false){
      const filterItem = users1.filter((currElem) => {
        return currElem.is_paid === e
      })
        setUsers(filterItem)
    }
   
  } 

  useEffect(() => {
    const getDetails = async () => {
      const url =
        "https://raw.githubusercontent.com/manjeet6363/fake-json/master/db.json";
      const data = await fetch(url);
      const parsedData = await data.json();
      setUsers(parsedData.users);
      setUsers1(parsedData.users);
      setUsers2(parsedData.users);
    };
    getDetails();
  }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-end">
        <input
            className="form-control w-25 mx-4"
          type="text"
          placeholder="Search here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <label className="form-check-label mx-2" htmlFor="flexSwitchCheckChecked">
            Show Paid Student
          </label>
        <div className="form-check form-switch">
          <input
            onClick={toggleBtn}
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            defaultChecked=""
          />
          
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Amount Paid</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((val) => {
              let firstName = val.first_name.toLowerCase();
              let lastName = val.last_name.toLowerCase();
              let emailId = val.email_id.toLowerCase();

              if (search === "") {
                return val;
              } else if (firstName.includes(search.toLocaleLowerCase())) {
                return val;
              } else if (lastName.includes(search.toLocaleLowerCase())) {
                return val;
              } else if (emailId.includes(search.toLocaleLowerCase())) {
                return val;
              }
            })
            .map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.first_name + " " + data.last_name}</td>
                  <td>{data.email_id}</td>
                  <td>{data.is_paid.toString()}</td>
                  <td>
                    {data.is_paid ? "" : <button className="btn btn-primary">Mark as Paid</button>}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
