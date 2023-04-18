
import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


const Component = styled(AppBar)`
    background: #E3BAC6;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 10px;
        color: black;
        text-decoration: none;
        margin:15px;
    }

    & >a:hover{
        background-color:#B47978;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    border-radius:6px;
    background-color:#FDE8E9;
    margin: 4px;
    padding: 0;
`;


const Header = () => {

    const navigate = useNavigate();

    const logout = async () => navigate('/account');
        
    return (
        <Component>
            <Container>
                <StyledLink to='/'>HOME</StyledLink>
                <StyledLink to='/about'>ABOUT</StyledLink>
                <StyledLink to='/contact'>CONTACT</StyledLink>
                <StyledLink to='/account'>LOGOUT</StyledLink>
            </Container>
        </Component>
    )
}

export default Header;