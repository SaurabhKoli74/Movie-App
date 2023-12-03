import React from "react";
import styled from "styled-components";
// import NavbarStyles from "./Navbar.module.css";

// Using StyledComponents
const Title = styled.div
    `   fontSize: 30px;
        color: #fff;
        font-weight:600;
        font-family: Montserrat, sans-serif;
        text-transform: uppercase;
        margin-left: 20px;
        &:hover{
            color:#0f0;
            cursor:pointer;
        }
    `;

const CartCount = styled.span`
        background-color: ${(props) => (props.color)};
        border-radius: 50%;
        padding: 4px 8px;
        position: absolute;
        right: 10px;
        top: -5px;
        font-size: 12px;
        visibility:${(props) => props.show ? "visible" : "hidden"}
`;


// Below items are also mentioned in Navbar.module.css
const Nav = styled.div` 
    height: 70px;
    background: linear-gradient(170deg, #1bc059, #0d47a1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;
const CartIcon = styled.img`
        height: 48px;
        margin-right: 20px;
`;
const CartIconContainer = styled.div`
        position: relative;
        cursor: pointer;   
        margin-right:10px;                 
`;


const Navbar =(props)=>{
        const {cartCount} = props;
        return (
            <>
                <Nav>
                    <Title>
                        Movie-App
                    </Title>
                    <CartIconContainer>
                        <CartIcon src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png" alt="cartIcon" />
                        <CartCount color="yellow" show={true}>{cartCount}</CartCount>
                    </CartIconContainer>
                </Nav>
            </>
        )
    }
export default Navbar;