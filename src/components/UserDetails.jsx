import React from "react";
import Avatar from "@mui/material/Avatar";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

function UserDetails({ name, points, level }) {
  return (
    <div className="usersEach">
      <div>
        <div className="avatarr">
          <Avatar
            alt="Remy Sharp"
            src="https://d27028dliefpk3.cloudfront.net/assets/masai-team/prateek.jpeg"
          />
        </div>
        <div className="nrupul">
          <p>
            <b>{name}</b>
          </p>
          <p className="para">Banglore, India</p>
        </div>
      </div>
      <div className="sliderL">
        <Box width={360}>
          <Slider
            defaultValue={70}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </Box>
      </div>
      <div className="profe">
        <span>{level}</span>
        <span>
          <b>{points} Point</b>
        </span>
      </div>
    </div>
  );
}

export default UserDetails;
