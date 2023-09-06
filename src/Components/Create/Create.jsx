import React, {  useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useNavigate } from "react-router";
import { FirebaseContext, AuthContext } from '../../store/Context'


const Create = () => {

  const { firebase } = useContext(FirebaseContext)
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const date = new Date();

  const handleSubmit = () => {
    if (!name || !category || !price || !image) {
      alert("Please fill in all fields.");
      return; // Prevent form submission if any field is empty
    }

   
    firebase
      .storage()
      .ref(`/image/${image.name}`)
      .put(image)
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          console.log(url);
          firebase.firestore().collection("products").add({
            name,
            category,
            price,
            url,
            userId: user.uid,
            createdAt: date.toDateString(),
          });
          navigate('/');
        });
      })
     
  }

  return (

    <>
      <Header />
      <card>
        <div className="centerDiv">
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={name}
            id="fname"
            onChange={(e) => setName(e.target.value)}
            name="Name"
           
            
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            value={category}
            id="fname"
            onChange={(e) => setCategory(e.target.value)}
            name="category"
            
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="input"
            type="number"
            value={price}
            id="fname"
            onChange={(e) => setPrice(e.target.value)}
            name="Price"
          />
          <br />

          <br />
          {image &&
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : ""}
          ></img>
          }
          <br />
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="file"
          />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">
            upload and Submit
          </button>
        </div>
      </card>
    </>

  );
};

export default Create;
