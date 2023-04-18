// import { Box, styled, Typography, Link } from '@mui/material';
//

import React from "react";
// import styled from "styled-components";
import { Box, styled, Typography, Link } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import './Contact.css';

const Contact = () => {
  const Text = styled(Typography)`
    padding: 20px;
    margin-top: 40px;
  `;
  const Banner = styled(Box)`
    background-image: url("././banner.jpg");
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
  `;

  const Wrapper = styled(Box)`
  display:flex;
  justify-content: center;
  align-items: center;
    padding: 20px;
    & > h3,
    & > h5 {
      margin-top: 50px;
    }
  `;

  return (
    <>
      <Box>
        <Banner />
        <Text align="center" variant="h4">
          Feel Free to Contact us
        </Text>
        <Wrapper>
          <Box component="span" style={{ marginLeft: 5 }}>
            <Link
              href="https://github.com/sunishka-30"
              color="inherit"
              target="_blank"
            >
              <GitHub />
            </Link>
          </Box>

          <Box component="span" style={{ marginLeft: 5 }}>
            <Link
              href="https://www.linkedin.com/in/sunishka/"
              color="inherit"
              target="_blank"
            >
              <LinkedIn />
            </Link>
          </Box>
        </Wrapper>
      </Box>

      <div className="form-box">
        <form action="https://formspree.io/f/mvondpvk" method="POST">
          <div>
          <input
          className="form-control mb-3"
            type="text"
            name="username"
            placeholder="Username"
            autoComplete="off"
            required
          />
          </div>
          <div>
          <input
          className="form-control mb-3"
            type="email"
            name="Email"
            placeholder="Email"
            autoComplete="off"
            required
          />
          </div>

          <div>
          <textarea
          className="form-control mb-3"
            name="message"
            placeholder="Write Your Query Here.."
            cols="30"
            rows="6"
            autoComplete="off"
            required
          ></textarea>

          </div>

          <div className="d-flex justify-content-center mb-4">
          <button type="submit"  >Submit</button>
          </div>

        </form>
      </div>
       </>
  );
};

export default Contact;
