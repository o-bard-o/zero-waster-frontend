import React from "react"
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import x3 from "./assets/x3.png";
import header from "./assets/header.png";
import mypage from "./assets/MyPage.svg";

export default class Community extends React.Component {
    render() {
        return (
            <>
                <Bg/>
                <Header>
                    <TextStyle>
                        MyPage
                    </TextStyle>
                </Header>
                <MainContainer>
                    <MyPage/>
                </MainContainer>
                <Navbar Account = {true}/>
            </>
        );
    }
}
const Bg = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${x3});
    opacity: 0.4;
    padding: 0;
    width:100vw;
    height:720px;
`
const MainContainer = styled.div`
    position: absolute;
    display:flex;
    flex-direction:column; 
    align-items: center;
    width: 100vw;
    padding: 0;
    top: 0;
`
const Header = styled.div`
    display:flex;
    flex-direction:column; 
    align-items: center;
    position: fixed;
    background-image: url(${header});
    background-position: center;
    background-repeat: no-repeat;
    top:0;
    left:0;
    margin: 0;
    width: 375px;
    height: 200px;
`

const TextStyle = styled.p`
    font-size: 20px;
    font-family: 'Acumin Pro SemiCondensed', Arial;
    margin-bottom: 0;
    margin-top: 50px;
    color: rgb(116, 138, 157);
`
const MyPage = styled.div`
    margin-top: 83px;
    margin-left: -10px;
    margin-bottom: 0px;
    width: 303.5px;
    height: 611px; 
    border-radius: 10px;
    background-image: url(${mypage});
    background-position: center;
    background-repeat: no-repeat;
`