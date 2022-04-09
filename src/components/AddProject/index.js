import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

const AddProject = () => {

  const [info, setInfo] = useState("");
  const [manager, setManager] = useState("");
  const [assigned, setAssigned] = useState("");
  const [status, setStatus] = useState("");

  const projects = useSelector((state) => state);
  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = (e) => { 
    e.preventDefault();
    const checkInfoExists = projects.filter((project) =>
    project.info === info ? project : null
    );

    if (!info || !manager || !assigned || !status) {
      return toast.warning("Please fill in all fields!!");
    }
    if (checkInfoExists.length > 0) {
      return toast.error("This project already exists!!");
    }

    const data = {
      id: projects.length > 0 ? projects[projects.length - 1].id + 1 : 0,
      manager,
      info,
      assigned,
      status
    };

    dispatch({ type: "ADD_PROJECT", payload: data });
    toast.success("Project added successfully!!");
    history.push("/");
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-3">Add Project</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Project Info"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Project Manager"
                value={manager}
                onChange={(e) => setManager(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Assigned To"
                value={assigned}
                onChange={(e) => setAssigned(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-primary"
                type="submit"
                value="Create Project"
              />
            </div>
          </form>
        </div>
      </div>
      <div className='text-center'>
        <button
            className="btn btn-dark ml-auto my-5"
            onClick={() => history.push("/")}
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default AddProject;
