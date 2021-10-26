import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const initProfile = {
  followers: null,
  publicRepos: null,
};

function FetchData() {
  const [profile, setProfile] = useState(initProfile);



  const getProfile = async() =>{
    const response = await axios.get("https://api.github.com/users/sai-droid");
    const data = await response.data;
    

    setProfile({
      followers: data.followers,
      publicRepos: data.public_repos,
    })
  }


  useEffect(() => {
    getProfile()
 
  }, []);


  
  return (
    <div data-test ='component' className="App">
      <header className="App-header">
        <h3>Using axios</h3>
        <h4 style={{ color: "pink" }}>
          <i> Followers:</i>
          {profile.followers}
          <i> PublicRepos</i>
          {profile.publicRepos}
        </h4>
      </header>
    </div>
  );
}

export default FetchData;
