import React from "react";
import UserDetails from "./UserDetails";
import "./users.css";

function UsersSection() {
  return (
    <div>
      <div className="active-users">
        <span>
          <b>Active Users</b>
        </span>
        <span>
          for <b>August 2020</b>
        </span>
      </div>
      <UserDetails
        name="Nrupul Dev"
        level="Professional Level 15"
        points="4753"
      />
      <UserDetails
        name="Prateek Shukla"
        level="Professional Level 12"
        points="3425"
      />
      <UserDetails name="Aman" level="Professional Level 10" points="2343" />
    </div>
  );
}

export default UsersSection;
