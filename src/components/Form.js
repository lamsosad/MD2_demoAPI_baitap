import React, { useState } from 'react'
import axios from 'axios'

export default function Form() {
  const [show, setShow] = useState([]);
  const [add, setAdd] = useState({
    
  });
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [cmt, setCmt] = useState("");


  axios.get("http://localhost:8000/user")
    .then((show) => setShow(show.data))
  const upUser = () => {
    axios.post("http://localhost:8000/user", add)
      .then((add) => setAdd(add.data))
  }
  return (
    <div className="container">
      <div>
        <table>
          <tbody>
            <tr>
              <th className="title" colSpan={2}>
                <h3>FORM</h3>
              </th>
            </tr>
            <tr>
              <th>ID</th>
              <td>
                <input name="id" type="text" value={id} onChange={(e) => setId(e.target.value)} />
              </td>
            </tr>
            <tr>
              <th>Name</th>
              <td>
                <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </td>
            </tr>
            <tr>
              <th>Country</th>
              <td>
                <select name="select" value={address} onChange={(e) => setAddress(e.target.value)}>
                  <option value="HN">Ha Noi</option>
                  <option value="HCM">Ho Chi Minh</option>
                  <option value="DN">Da Nang</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>Comment</th>
              <td>
                <textarea name="textarea" cols={39} rows={2} value={cmt} onChange={(e) => setCmt(e.target.value)} />
              </td>
            </tr>
            <tr>
              <th colSpan={2}>
                {/* <button onClick={showUser}>Show</button> */}
                <button onClick={upUser}>ADD</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <table className="pro">
          <tbody>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>COUBTRY</th>
              <th>COMMENT</th>
              <th colSpan={2}>EDIT</th>
            </tr>
          </tbody>
          <tbody>
            {show.map((user) =>
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.address}</td>
                <td>{user.comment}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  )
}
