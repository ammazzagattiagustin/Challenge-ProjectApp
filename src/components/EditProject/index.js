import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";

const EditProject = () => {

  const [info, setInfo] = useState("");
  const [manager, setManager] = useState("");
  const [assigned, setAssigned] = useState("");
  const [status, setStatus] = useState("");

  const { id } = useParams();

  const projects = useSelector((state) => state);
  const dispatch = useDispatch();

  const history = useHistory();
  const currentProject = projects.find((project) => project.id === parseInt(id));

  useEffect(() => {
    if (currentProject) {
      setInfo(currentProject.info);
      setManager(currentProject.manager);
      setAssigned(currentProject.assigned);
      setStatus(currentProject.status);
    }
  }, [currentProject]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkInfoExists = projects.filter((project) =>
      project.info === info && project.id !== currentProject.id
        ? project
        : null
    );

    if (!info || !manager || !assigned || !status) {
      return toast.warning("Please fill in all fields!!");
    }
    if (checkInfoExists.length > 0) {
      return toast.error("This project already exists!!");
    }
 
    const data = {
      id: currentProject.id,
      manager,
      info,
      assigned,
      status
    };

    dispatch({ type: "UPDATE_PROJECT", payload: data });
    toast.success("Project updated successfully!!");
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column">
      <h1 className="text-center text-dark py-3 display-3">Edit Project</h1>
        <div className="col-md-6 mx-auto shadow p-5">
          {currentProject ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Project Info"
                  value={info}
                  onChange={(e) => setInfo(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Project Manager"
                  value={manager}
                  onChange={(e) => setManager(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Assigned To"
                  value={assigned}
                  onChange={(e) => setAssigned(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                />
              </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => history.push("/")}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">No Project Found</h1>
          )}
        </div>
      </div>
      <div className="text-center">
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

export default EditProject;
