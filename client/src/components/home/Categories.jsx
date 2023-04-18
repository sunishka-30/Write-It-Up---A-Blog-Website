
import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

import { categories } from '../../constants/data';

const StyledTable = styled(Table)`
    border: 1px solid rgba(224, 224, 224, 1);
    
    background-color:#FDE8E9;
    color: black;
`;
    
const StyledButton = styled(Button)`
    margin: 20px;
    width: 85%;
    background: #E3BAC6  ;
    color: black;
    text-decoration: none;
`;
    
const StyledLink = styled(Link)`
    text-decoration: none;
    
    color: black ;
    
`;

const StyledTableCell = styled(TableCell)`
 & >  a:hover{
        font-size:20px;
        color:#B47978;
    }
`;

const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    
    return (
        <>
            <Link to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}>
                <StyledButton >Create Blog</StyledButton>
            </Link>
            
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>
                            <StyledLink to={"/"}>
                                All Categories
                            </StyledLink>
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow key={category.id}>
                                <StyledTableCell>
                                    <StyledLink to={`/?category=${category.type}`}>
                                        {category.type}
                                    </StyledLink>
                                </StyledTableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </StyledTable>
        </>
    )
}

export default Categories;