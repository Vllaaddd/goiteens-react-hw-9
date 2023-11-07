import styled from "styled-components"

const Title = styled.h2`
    text-align: center;
`;

export default function Notification ({notification}){
    return(
        <Title>{notification}</Title>
    )
}