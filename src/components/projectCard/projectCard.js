import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from '@mui/material/Box';
import "./projectCard.css";

const ProjectCard = (props) => {
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Paper elevation={3} className="projectCard">
                <img
                    src={props.image}
                    alt={props.title}
                    className="projectImage"
                />
                <Box className="cardBox" sx={{ flexGrow: 1 }}>
                    <h3>{props.title}</h3>
                    <p>{props.intro}</p>
                </Box>
            </Paper>
        </Grid>
    )
}

export default ProjectCard;