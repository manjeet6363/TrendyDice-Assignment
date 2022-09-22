import React from "react";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";

export default function User(props) {
  const [users, setUsers] = useState([]);
  const [users1, setUsers1] = useState([]);
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  const paidMark = (e) => {
    users1[e-1].is_paid = true
    const filterItem = users1.filter((currElem) => {
      return currElem.is_paid === false
    })
    props.showAlert(`${users1[e-1].first_name+" "+ users1[e-1].last_name} Amount Paid`);
      setUsers(filterItem)
  }

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
    };
    getDetails();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = users.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="container">
      <div className="d-flex justify-content-end my-3">
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
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Amount Paid</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentPost
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
                  <td>{data.is_paid ? "Yes" : "No"}</td>
                  <td>
                    {data.is_paid ? "" : <button className="btn btn-dark" onClick={(e) => paidMark(data.id)}>Mark as Paid</button>}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div>
        <Pagination postsPerPage={postPerPage} totalPosts={users.length} paginate={paginate} />
      </div>
    </div>
  );
}
