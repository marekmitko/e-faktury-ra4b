import React from "react";
import { MyProfileCardWrapper } from "../../../custom/users/MyProfileCardWrapper";
import UserEdit from "./UserEdit";

// https://codesandbox.io/p/sandbox/react-admin-v3-advanced-recipes-managing-user-profile-qcql4?file=%2Fsrc%2Fprofile.j
// https://codesandbox.io/p/sandbox/flamboyant-sky-86nxn2?file=%2Fsrc%2Findex.js/

const MyProfile = (props) => (
    <MyProfileCardWrapper component="div" {...props}>
        <UserEdit {...props} />
    </MyProfileCardWrapper>
);

export default MyProfile;
