import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    width: 700px;
    height: 500px;
    border-radius: 15px;
    background-color: #fff;
`;
const Title = styled.h1`
    text-align: center;
    margin: 0;
`;

export default function Section ({title, children}){
    return(
        <>
            <Wrapper>
                <Title>{title}</Title>
                {children}
            </Wrapper>
        </>
    )
}