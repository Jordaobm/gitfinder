import { createGlobalStyle, css } from "styled-components";
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Roboto', sans-serif;
    }

    :root{
        --background-color-theme-white:#F7F7F7;
        --color-input-theme-white:#fff;
        --color-button-theme-white:#04D361;
        --color-button-hover-theme-white:#00bd55;
        --color-background-card-theme-white:#fff;
        --border-color-cardRepo:#3D3D4D;
        --background-color-cardRepo:#F2F2F2;

        --color-button-err-hover-theme-white:#E62500;
    }

    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
    }

    input {
        background: ${props => props.theme.colors.inputBackgroundColor};
        border:${props => props.theme.colors.inputBorderColor};
        color:${props => props.theme.colors.inputTextColor};
    }
    button {
        background: ${props => props.theme.colors.buttonBackgroundColor};
        border:${props => props.theme.colors.buttonBackgroundColor};

    }

    

   

    textarea:focus, input:focus, select:focus, button:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
} 
`;

export const Card = styled.div`
    margin:20px 0;
    width:100%;
    display:flex;
    align-items:center;
    border-radius:5px;
    padding:20px;
    background: ${props => props.theme.colors.backgroundCardColor};
   svg {
       background-color:${props => props.theme.colors.backgroundCardColor};
       color:${props => props.theme.colors.text};

       @media(max-width: 500px){
       margin-top:10px;
   }
   }

   @media(max-width: 500px){
       flex-direction:column;
   }

   
    
`;

export const Name = styled.p`
    background:transparent;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color:${props => props.theme.colors.text};

    @media(max-width: 500px){
            font-size: 16px;
            line-height: 16px;
        }

        @media(max-width: 400px){
            font-size: 14px;
            line-height: 14px;
        }
`;

export const GoBack = styled.div`
   svg {
    color:${props => props.theme.colors.text};
   }
`;

export const CardRepo = styled.div`
    margin:15px 0;
    border-radius:5px;
    width:100%;
    padding:20px;
    transition:0.2s;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background: ${props => props.theme.colors.backgroundCardColor};
   svg {
       background-color:${props => props.theme.colors.backgroundCardColor};
       color:${props => props.theme.colors.text};
   }

    div {
        background:transparent;
    }

    a {
        background:transparent;
    }

    :hover {
        background-color:${props => props.theme.colors.backgroundShadeCard};
    }

`;

export const RepoName = styled.p`
    background:transparent;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color:${props => props.theme.colors.text};

`;


export const Error = styled.div`
        width:50%;
    h5 {
        font-weight: bold;
        font-size: 48px;
        line-height: 56px;
        color:${props => props.theme.colors.text};
    }

    p {
        font-weight: 400;
        font-size: 18px;
        color: #919191;
    }

    a {
        margin-top:10px;
        display:flex;
        text-decoration:none;
        border-radius:5px;
        width:150px;
        height:50px;
        background-color:var(--color-button-theme-white);
        align-items:center;
        color:#fff;
        transition:0.2s;
        padding:0 20px;
        justify-content:space-between;
        

        

        :hover{
            background-color:var(--color-button-hover-theme-white);
        }
        

        svg {
            background-color:transparent;
            color:#fff;
        }

        p {
            background-color:transparent;
            color:#fff;
            font-weight: bold;
            font-size: 18px;
            line-height: 21px;
        }
    }
`;