import React from "react";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import './contactForm.css';


const ContactForm = () => {
    return (
        <Grid item xs={4} sm={4} md={6} className="contactForm">
            <h4>Send me a Message:</h4>
            <TextField
                className="textField"
                id="outlined-basic"
                label="Name"
                variant="outlined"
            />
            <TextField
                className="textField"
                id="outlined-basic"
                label="Email address"
                variant="outlined"
            />
            <TextField
                className="textField"
                id="outlined-multiline-static"
                label="Your message"
                multiline
                rows={4}
            />
        </Grid>
    )
}

export default ContactForm;