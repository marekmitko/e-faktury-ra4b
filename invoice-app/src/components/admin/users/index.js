import React from "react";
import { MyProfileCardWrapper } from "../../../custom/users/MyProfileCardWrapper";
import { MyProfileEdit } from "./MyProfileEdit";

const MyProfile = props => ( 
    <MyProfileCardWrapper {...props}  >
        <MyProfileEdit {...props}  />
    </MyProfileCardWrapper>
);

export default MyProfile;