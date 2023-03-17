import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProfilePic from '../Avatar/avatar';
import './info.css'

const Info = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1, paddingTop: "50px" }}>
        <Grid container spacing={5} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item className="infoItem avatar" xs={4} sm={8} md={4}>
            <ProfilePic />
          </Grid>
          <Grid item className="infoItem" xs={4} sm={8} md={8}>
            <Typography>
              <h3>Welcome to my Portfolio</h3>
            </Typography>
          </Grid>
          <Grid item className="infoItem" xs={4} sm={8} md={12}>
            <Typography>
              <p>I am currently enrolled in a Front-End Web Development Bootcamp, due to finish at the end of March 2023. During this rigorous and fast-paced course, I have learnt the practical and technical skills needed to build robust front-end web applications.</p>
              <p>I have gained proficiency in numerous technologies, including HTML, CSS, JavaScript, Node.js and React, and plan to build on these skills in the coming months.</p>
              <p>Please lake a look at the
                <span><NavLink to="/projects" end> Projects page</NavLink></span> to view a selection of my work.
              </p>
              <p>Having worked in fundraising for the past twelve years, leading teams to achieve excellence and consistently deliver growth, I believe that my skills and personality are well suited to a career in web development. I am highly organised with good problem-solving skills and the ability to manage a wide variety of projects at one time. I look forward to putting these skills to use as I continue on this journey!</p>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Info;