import React from "react";
import styled from "styled-components";

function Post(props) {
    const { where, posts } = props;

    return (
        <Wrapper>
            <TextWrapper>
                <Text>{ where || "" } 아플 때</Text>
                <Button>더보기</Button>
            </TextWrapper>
            <ContentWrapper>
                {posts.map((post, index) => {
                    return(
                        <Content>{post}</Content>
                    );
                })}
            </ContentWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
    
const TextWrapper = styled.div`
    width: 800px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Text = styled.p`
    font-size: 20px;
`;

const Button = styled.button`
    font-size: 16px;
    background-color: white;
    border: 0;
`;

const ContentWrapper = styled.div`
    width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 10px;
`;

const Content = styled.div`
    width: 800px;
    height: 60px;
    padding-left: 10px;
    background-color: #D9D9D9;
    border-radius: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
export default Post;