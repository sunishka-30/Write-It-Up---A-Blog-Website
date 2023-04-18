
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url('././banner.jpg');
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
    word-break: break-word;

`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h2" align="center">Write. Explore. Review.</Typography>
                
                <Typography variant="h5" align="center">Our platform is dedicated to providing you with high-quality content on a variety of topics. 
                We strive to create a space that is both informative and engaging, where you can discover new ideas 
                and perspectives, as well as connect with others who share your interests.</Typography>
                
                {/* <span className='ms-3'> Welcome to our blog website! 
               
                
                At our blog, we cover a wide range of topics, including but not limited to technology, lifestyle, business, health, and culture. Our team of experienced writers and contributors bring a wealth of knowledge and expertise to each and every article, ensuring that you always receive the most accurate and up-to-date information.

We believe that everyone should have access to quality content that is both informative and entertaining. That's why we work hard to create articles that are not only informative, but also engaging and enjoyable to read. We want our readers to feel like they are part of a community, where they can share their thoughts and ideas with others who are just as passionate about the topics that we cover.

Our goal is to provide you with the best possible experience when visiting our blog website. We are always open to feedback and suggestions, so please don't hesitate to reach out to us if you have any questions or comments. We hope that you will find our website to be a valuable resource and that you will visit us often to stay up-to-date on the latest news and trends in your favorite topics. 
                                                                     Thank you for visiting our blog!
                                                                     </span> */}
                    
               
                {/* <Text variant="h5">
                <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/sunishka-30" color="inherit" target="_blank"><GitHub /></Link>
                </Box>
                
                </Text> */}
            </Wrapper>
        </Box>
    )
}

export default About;