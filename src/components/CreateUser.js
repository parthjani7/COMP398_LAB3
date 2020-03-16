import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";

function CreateUser(props) {
  const [user, setUser] = useState({
    firstname: "parth",
    lastname: "jani",
    email: "pjani11@yahoo.com",
    password: "Parth@123",
    address: "scarborough",
    city: "Toronto",
    phone: "4387252233",
    program: "Software engineering",
    studentNumber: "300984336"
  });
  const [showLoading, setShowLoading] = useState(false);
  const apiUrl = "http://localhost:3000/";

  const saveUser = e => {
    setShowLoading(true);
    e.preventDefault();
    const data = {
      ...user
    };
    axios
      .post(`${apiUrl}students`, data)
      .then(result => {
        setShowLoading(false);
        // props.history.push("/show/" + result.data._id);
        props.history.push("/login");
      })
      .catch(error => setShowLoading(false));
  };

  const onChange = e => {
    e.persist();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {showLoading && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      <Jumbotron>
        <Form onSubmit={saveUser}>
          <div className="row">
            <div className="col">
              <Form.Group>
                <Form.Label> First Name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  name="firstname"
                  id="firstname"
                  placeholder="Enter first name"
                  value={user.firstname}
                  onChange={onChange}
                />
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group>
                <Form.Label> Last Name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  name="lastname"
                  id="lastname"
                  placeholder="Enter last name"
                  value={user.lastname}
                  onChange={onChange}
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  required
                  name="email"
                  id="email"
                  rows="3"
                  placeholder="Enter email"
                  value={user.email}
                  onChange={onChange}
                />
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  required
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  value={user.password}
                  onChange={onChange}
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  required
                  name="address"
                  id="address"
                  placeholder="Enter Address"
                  value={user.address}
                  onChange={onChange}
                />
              </Form.Group>
            </div>

            <div className="col">
              <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  required
                  name="city"
                  id="city"
                  placeholder="Enter City"
                  value={user.city}
                  onChange={onChange}
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  required
                  name="phone"
                  id="phone"
                  placeholder="Enter Phone"
                  value={user.phone}
                  onChange={onChange}
                />
              </Form.Group>
            </div>

            <div className="col">
              <Form.Group>
                <Form.Label>Program</Form.Label>
                <Form.Control
                  type="text"
                  required
                  name="program"
                  id="program"
                  placeholder="Enter Program"
                  value={user.program}
                  onChange={onChange}
                />
              </Form.Group>
            </div>

            <div className="col">
              <Form.Group>
                <Form.Label>Student Number</Form.Label>
                <Form.Control
                  type="text"
                  required
                  name="studentNumber"
                  id="studentNumber"
                  placeholder="Enter Student Number"
                  value={user.studentNumber}
                  onChange={onChange}
                />
              </Form.Group>
            </div>
          </div>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Jumbotron>
    </div>
  );
}

export default withRouter(CreateUser);
