import React from "react";
import { MyProfileCardWrapper } from "../../../custom/users/MyProfileCardWrapper";
import UserEdit from "./UserEdit";

const MyProfile = props => ( 
    <MyProfileCardWrapper component="div" {...props}  >
        <UserEdit {...props} />
    </MyProfileCardWrapper>
);

export default MyProfile;