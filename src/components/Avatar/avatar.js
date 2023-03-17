import React from "react";
import Avatar from '@mui/material/Avatar';
import image from "../../utils/images/profilePic.jpeg"

const ProfilePic = () => {
    return (
        <Avatar alt="Naomi Mardon"
        src={ image }
        sx={{ width: 180, height: 180 }}
        />
    )
}

export default ProfilePic