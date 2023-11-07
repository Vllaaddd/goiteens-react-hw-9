import styled from "styled-components"

const Button = styled.button`
    width: 120px;
    height: 40px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
`;

export default function FeedbackOptions ({addFeedback}){
    return(
        <Wrapper>
            <Button onClick={() => addFeedback('good')}>Good</Button>
            <Button onClick={() => addFeedback('neutral')}>Neutral</Button>
            <Button onClick={() => addFeedback('bad')}>Bad</Button>
        </Wrapper>
    )
}