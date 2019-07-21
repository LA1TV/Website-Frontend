import Link from 'next/link';
import styled from 'styled-components';
import react from 'react';

const StyledLink = styled.a`
    text-decoration: none;
    color: ${({theme}) => theme.color.primary };

    :hover,
    :active {
        cursor: pointer;
        color: ${({theme}) => theme.color.accent};
    }
`

const BaseLink = ({ children, className, href }) => (
    <Link href={href}>
        <StyledLink className={ className }>{ children }</StyledLink>
    </Link>
);

export default BaseLink;