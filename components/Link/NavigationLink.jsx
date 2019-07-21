import Link from './Link';
import styled from 'styled-components';
import react from 'react';

const StyledLink = styled(Link)`
    text-decoration: none;
    padding: ${({ theme }) => theme.spacing.base};
    display: inline-block;

    :hover,
    :active {
        cursor: pointer;
        background-color: ${({ theme }) => theme.color.primary};
        color: ${({ theme }) => theme.color.accent};
    }
`

const StyledListItem = styled.li`
    display: inline-block;
`

const NavigationLink = ({ children, className, href }) => (
    <StyledListItem>
        <StyledLink href={href}>
            {children}
        </StyledLink>
    </StyledListItem>
);

export default NavigationLink;