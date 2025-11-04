import React from "react";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import { Link } from "react-router-dom";

const Allsubscribers = () => {
    return(
<>
<Sidebar />

   <div className="d-flex">
   

    <div className="flex-grow-1 p-4 position-relative" style={{ marginLeft: "250px" }}>
      <h2>Subscribers Management Table</h2>


<div className="container mt-5">
  <div className="table-container">
    <table className="table align-middle mb-0">
      <thead className="table-light">

        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Country</th>
          <th>Skill</th>
          <th>Subscribe date</th>
          <th>Actions</th>
        </tr>
    
      </thead>
      <tbody>

        <tr>
          <td><img src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" className="profile-img" /> Liam Smith</td>
          <td>smith@example.com</td>
          <td>USA</td>
          <td><span className="status-active">Frontend Developer</span></td>
          <td>24 Jun 2024, 9:23 pm</td>
          <td>
            <button className="btn btn-outline-primary btn-sm"><i className="bi bi-pencil"></i> <Link to="/subscriberprofile">Edit</Link></button>
          </td>
        </tr>

        <tr>
          <td><img src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" className="profile-img" /> Noah Anderson</td>
          <td>anderson@example.com</td>
          <td>Nigeria</td>
          <td><span className="status-active">Backend Developer</span></td>
          <td>15 Mar 2023, 2:45 pm</td>
          <td>
            <button className="btn btn-outline-primary btn-sm"><i className="bi bi-pencil"></i> Edit</button>
          </td>
        </tr>

        <tr>
          <td><img src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" className="profile-img" /> Isabella Garcia</td>
          <td>garcia@example.com</td>
          <td>Japan</td>
          <td><span className="status-inactive">UI/UX Designer</span></td>
          <td>10 Apr 2022, 11:30 am</td>
          <td>
            <button className="btn btn-outline-primary btn-sm"><i className="bi bi-pencil"></i> Edit</button>
          </td>
        </tr>

        <tr>
          <td><img src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" className="profile-img" /> Benjamin Lewis</td>
          <td>lewis@example.com</td>
          <td>South Africa</td>
          <td><span className="status-active">Fullstack Developer</span></td>
          <td>03 Jan 2024, 12:05 pm</td>
          <td>
            <button className="btn btn-outline-primary btn-sm"><i className="bi bi-pencil"></i> Edit</button>
          </td>
        </tr>

        <tr>
          <td><img src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" className="profile-img" /> Amelia Davis</td>
          <td>davis@example.com</td>
          <td>United Kingdom</td>
          <td><span className="status-inactive">Technical Writer</span></td>
          <td>21 Jul 2023, 8:40 pm</td>
          <td>
            <button className="btn btn-outline-primary btn-sm"><i className="bi bi-pencil"></i> Edit</button>
          </td>
        </tr>

                
        <tr>
          <td><img src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" className="profile-img" /> Liam Smith</td>
          <td>smith@example.com</td>
          <td>USA</td>
          <td><span className="status-active">Devops Engineer</span></td>
          <td>24 Jun 2024, 9:23 pm</td>
          <td>
            <button className="btn btn-outline-primary btn-sm"><i className="bi bi-pencil"></i> Edit</button>
          </td>
        </tr>

        <tr>
            <td><img src="./src/assets/profile.png" className="profile-img" /> Noah Anderson</td>
            <td>anderson@example.com</td>
          <td>Nigeria</td>
          <td><span className="status-active">Graphic Designer</span></td>
          <td>15 Mar 2023, 2:45 pm</td>
          <td>
            <button className="btn btn-outline-primary btn-sm"><i className="bi bi-pencil"></i> Edit</button>
          </td>
        </tr>
        

      </tbody>
    </table>
  </div>
</div>


    </div>

  </div>

</>
    )
}
export default Allsubscribers;