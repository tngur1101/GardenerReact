import React,{useState} from "react";
import styled from "styled-components";
import { AiOutlineMail,AiOutlineSend } from "react-icons/ai";

const MessageModalDom = styled.div`
    position: absolute;
    width: 250px;
    height: 200px;
    background-color: #c7edff;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    right: 23%;
    bottom: 50%;
    z-index:2;
    box-shadow: 2px 2px 2px 2px #ededed;
    `;

const CloseModalBtn = styled.div`
    display: flex;
    width: 50px;
    height: 30px;
    position: absolute;
    right: 30%;
    bottom: 10%;
    z-index:2;
    background-color: #33FFFF;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`;

const SendModalBtn = styled.div`
    display: flex;
    width: 50px;
    height: 30px;
    position: absolute;
    right: 5%;
    bottom: 10%;
    z-index:2;
    background-color: #99FF99;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`;

const BtnWrapper = styled.div`
  display: flex;
  width : 100%;
  justify-content: center;
  flex-basis: 12%;
  margin-top : 4%;
  
`;

const MessageField = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 3%;
    justify-content: center;
    font-family: 'dungeunmo';
    font-weight: 400;
    font-size: 0.9rem;
`;

const InputField = styled.input`
    border-left-width:0;
    border-right-width:0;
    border-top-width:0;
    border-bottom-width:1;
    width: 80%;
`;

const sendToField = styled.input`
border-left-width:0;
border-right-width:0;
border-top-width:0;
border-bottom-width:1;
width: 60%;
`;

const MessageModal = (props) => {

    return(
        <MessageModalDom>
            <MessageField>쪽지 보내기</MessageField>
            <MessageField><InputField/></MessageField>
            <MessageField><InputField /></MessageField>
            <MessageField><InputField /></MessageField>
            <MessageField><InputField /></MessageField>
            <BtnWrapper>
                <CloseModalBtn onClick={()=>{props.setMessageModalOpen(false)}}>취소</CloseModalBtn>
                <SendModalBtn onClick={()=>{props.setMessageModalOpen(false)}}>보내기</SendModalBtn>
            </BtnWrapper>
        </MessageModalDom>
    );
};

export default MessageModal;