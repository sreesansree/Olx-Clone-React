import React, { useContext, useState, useEffect } from 'react';

import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/Context';
function View() {
  const [userDetails, setUserDetails] = useState([])
  const { postDetails } = useContext(PostContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    const { userId } = postDetails
    firebase.firestore().collection('users').where('id', '==', userId).get().then((res) => {
      res.forEach(doc => {
        setUserDetails(doc.data())
      });
    })
  })
  // console.log(setUserDetails,'setUserdetails')
  // console.log(userDetails,'userDetails')
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv" style={{ padding: '50px' }}>
        <img
          src={postDetails.url}
          alt=""
          style={{
            width: '100%', 
            height: 'auto', 
          }}
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>
        }
      </div>
    </div>
  );
}
export default View;
