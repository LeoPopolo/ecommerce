import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 10%;
`;

export const LogoTitle = styled.h1`
    color: var(--primary-color);
    margin: 0;
    font-size: 2em;
    font-weight: 300;
`;

export const NavbarLink = styled(Link)`
    padding: 5px .5em;
    transition: color 200ms;

    &:hover {
        color: var(--primary-color);
    }
`;