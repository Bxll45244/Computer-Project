import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [student, setStudent] = useState({
    id: "",
    Brand: "",
    phone: "",
    Model: "",
    Pice: "",
    CPU_Type: "",
    Image: "http://source.unsplash.com/random/200x200/?portrait",
  });
  const navigete = useNavigate();
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = {
      id: student.id,
      brand: student.brand,
      model: student.model,
      pice: student.picey,
      image: student.image,
    };
    fetch("http://localhost:8000/students", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(studentData),
    })
      .then((res) => {
        alert("Save successfully");
        navigete("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-title">
                <h2>Add Computer</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="name">id</label>
                      <input
                        type="text"
                        required
                        name="id"
                        id="id"
                        value={student.name}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="name">brand</label>
                      <input
                        type="text"
                        required
                        name="brand"
                        id="brand"
                        value={student.email}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="name">model</label>
                      <input
                        type="int"
                        required
                        name="model"
                        id="model"
                        value={student.phone}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="name">pice</label>
                      <input
                        type="text"
                        required
                        name="pice"
                        id="pice"
                        value={student.birthday}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="name">CPU_Type</label>
                      <input
                        type="text"
                        required
                        name="CPU_Type"
                        id="CPU_Type"
                        value={student.section}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="name">Image</label>
                      <input
                        type="text"
                        required
                        name="Image"
                        id="Image"
                        value={student.major}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;