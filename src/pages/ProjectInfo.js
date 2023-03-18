import React from "react";
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const ProjectInfo = (props) => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1, paddingTop: "50px" }}>
                <h3 style={{
                    fontSize: "5rem",
                    textAlign: "center",
                    paddingBottom: "10px"
                }}>
                    {props.title}
                </h3>
                <p style={{
                    fontSize: "1.6rem",
                    textAlign: "center"
                }}>
                    <Link to={props.deployedLink} end>
                        View the deployed application
                    </Link>
                </p>
                <p style={{
                    fontSize: "1.6rem",
                    textAlign: "center"
                }}>
                    <Link to={props.gitHubLink} end>
                        View the Github Repository
                    </Link>
                </p>
                <p style={{ fontSize: "1.2rem" }}>
                    {props.description}
                </p>
                <img
                    src={process.env.PUBLIC_URL + props.image}
                    alt={props.title}
                    style={{
                        width: "100%",
                        height: "auto",
                        paddingTop: "20px"
                    }}>
                </img>
            </Box>

        </Container>
    )
};

export default ProjectInfo;