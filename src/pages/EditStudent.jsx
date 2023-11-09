import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({
    id: "",
    brand: "",
    model: "",
    pice: "",
    CPU_Type: "",
    image: "https://source.unsplash.com/random/200x200/?portrait",
  });
  const navigete = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/students/" + id)
      .then((res) => res.json())
      .then((data) => {
        setStudent(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = {
      id: student.id,
      brand: student.email,
      model: student.model,
      pice: student.pice,
      CPU_Type: student.CPU_Type,
      image: student.image,
      
    };
    fetch("http://localhost:8000/students/" + id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(studentData),
    })
      .then((res) => {
        alert: "Save sucessfully";
        navigete("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-title">
                <h2>Edit Com</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="id">ID</label>
                      <input
                        type="text"
                        disabled
                        name="id"
                        id="id"
                        value={id}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="name">Brand</label>
                      <input
                        type="text"
                        required
                        name="brand"
                        id="brand"
                        value={student.name}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="name">Model</label>
                      <input
                        type="text"
                        required
                        name="model"
                        id="model"
                        value={student.email}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="name">Price</label>
                      <input
                        type="text"
                        required
                        name="price"
                        id="price"
                        value={student.phone}
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
                        name="cpu_type"
                        id="cpu_type"
                        value={student.birthday}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="name">image</label>
                      <input
                        type="text"
                        required
                        name="image"
                        id="image"
                        value={student.section}
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

export default EditStudent;
