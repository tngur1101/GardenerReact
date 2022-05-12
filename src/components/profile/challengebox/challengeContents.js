import React from "react";
import styled from "styled-components";

const ListTitle = styled.div`
    display: flex;
    
    margin-bottom: 3%;
    font-family: 'dungeunmo';
    `;

const ChListDom = styled.div`
    display: flex;
    flex-direction: row;
    height: 20%;
    width: 50%;
`;

const ChalDom = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    flex:2;
`;

const ListImg = styled.img`
    max-width: 60%;
`;

const ChallengeContents = (props) => {

    return(
        <ChListDom>
            {
                props.listData.map((data)=>{
                    return(
                        <ChalDom>
                            <ListTitle>{data.challengeTitle}</ListTitle>
                            <ListImg src={data.challengeImgURL}/>
                        </ChalDom>
                    );
                })
            }
        </ChListDom>
    );
};

export default ChallengeContents;