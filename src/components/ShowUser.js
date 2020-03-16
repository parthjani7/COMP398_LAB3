import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";

function ShowUser(props) {
  const [data, setData] = useState({});
  const [showLoading, setShowLoading] = useState(true);
  const apiUrl = "http://localhost:3000/students/" + props.match.params.id;

  useEffect(() => {
    setShowLoading(false);
    const fetchData = async () => {
      const result = await axios(apiUrl);
      setData(result.data);
      setShowLoading(false);
    };

    fetchData();
  }, [apiUrl]);

  const editUser = id => {
    props.history.push({
      pathname: "/edit/" + id
    });
  };

  const deleteUser = id => {
    setShowLoading(true);
    const user = {
      ...data
    };

    axios
      .delete(apiUrl, user)
      .then(result => {
        setShowLoading(false);
        props.history.push("/list");
      })
      .catch(error => setShowLoading(false));
  };

  return (
    <div>
      {showLoading && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      <Jumbotron>
        <h1>
          Name: {data.firstname}, {data.lastname}
        </h1>
        <p>Email: {data.email}</p>
        <p>Program: {data.program}</p>
        <p>Student Number: {data.studentNumber}</p>
        <p>
          Address: {data.address}, {data.city}
        </p>

        <p>
          <Button
            type="button"
            variant="primary"
            onClick={() => {
              editUser(data._id);
            }}
          >
            Edit
          </Button>
          &nbsp;
          <Button
            type="button"
            variant="danger"
            onClick={() => {
              deleteUser(data._id);
            }}
          >
            Delete
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
}

export default withRouter(ShowUser);
