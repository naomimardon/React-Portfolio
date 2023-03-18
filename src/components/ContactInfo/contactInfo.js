import React from "react";
import { Link } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import './contactInfo.css';

const ContactInfo = () => {
    return (
        <Grid item xs={4} sm={4} md={6} className="contactInfo">
            <h4>Contact Info:</h4>
            <p>Phone: 07123456789</p>
            <p>Email: <span><a href="mailto:naomimardon@email.com">naomimardon@email.com</a></span></p>
            <p>GitHub: <span><Link to="https://github.com/naomimardon" target="_blank" end>naomimardon</Link></span></p>
            <p>LinkedIn: <span><Link to="https://www.linkedin.com/in/naomi-mardon-79099455/" target="_blank" end>Naomi Mardon</Link></span></p>
        </Grid>
    )
}

export default ContactInfo;