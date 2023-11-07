import styled from "styled-components"

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
`;

export default function Statisticks ({good, neutral, bad, total, positive}){
    return(
        <Container>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive : {positive}%</p>
        </Container>
    )
}