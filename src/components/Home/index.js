import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Home = () => {

  const projects = useSelector((state) => state);
  const dispatch = useDispatch();

  const deleteProject = (id) => {    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          dispatch({ type: "DELETE_PROJECT", payload: id })
        )
      }
    })
  };  

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <div className="d-flex justify-content-between bd-highlight mb-2">
          <div>
            <h1 className="bd-highlight mt-5">My Projects</h1>
          </div>
          <div>
            <Link to="/add" className="btn btn-danger p-2 bd-highlight mt-5">
              + Add Project
            </Link>
          </div>
        </div>
        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Project Info</th>
                <th scope="col">Project Manager</th>
                <th scope="col">Assigned To</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {projects.length > 0 ? (
                projects.map((project, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{project.info}</td>
                    <td>{project.manager}</td>
                    <td>{project.assigned}</td>
                    <td>{project.status}</td>
                    <td>
                      <Link
                        to={`/edit/${project.id}`}
                        className="btn btn-sm btn-primary mr-1"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => deleteProject(project.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No projects found</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
