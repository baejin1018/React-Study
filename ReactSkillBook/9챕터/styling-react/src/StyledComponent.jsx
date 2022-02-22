import React from 'react';
import styled, {css} from `styled-components`;
const Box = styled.div`
background : ${props=>props.color||'blue'};
padding:1rem;
display:flex;
`;

const StyledComponent = () => {
    return (
        <Box color="black">
            <button>안녕하세요</button>
            <button inverted={true}>테두리만</button>
        </Box>
    );
};

export default StyledComponent;