
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url('././banner.jpg') center/100% repeat-x #000;
    height: 50vh;
    display: flex;
    background-position: left 0px top -100px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #000;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 70px;
    
    font: italic small-caps bold 40px/1.5 cursive;
    background: #E3BAC6  ;
    color: black;
`;

const Banner = () => {
    
    return (
        <Image>
            {/* <Heading>BLOG</Heading> */}
            <SubHeading>WRITE IT UP</SubHeading>
        </Image>
    )
}

export default Banner;