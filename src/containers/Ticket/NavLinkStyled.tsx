import styled from 'src/theme/default/index';
import { NavLink } from 'react-router-dom';


const NavLinkStyled = styled(NavLink)`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #909090;
    text-decoration: none;
    height:105%;
    border-bottom: 3px solid #222; 

    font-size: 12px;
    text-transform: uppercase;

    &:not(:last-of-type){
        margin-right: 3.3em;
    }

`;

export default NavLinkStyled;