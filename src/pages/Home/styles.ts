import styled, { css } from 'styled-components';

export const Container = styled.div`
    width:100vw;
    max-width:1120px;
    padding:0 2%;
    margin:0 auto;
    height:100vh;
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media(max-width: 900px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }

    @media(max-width: 500px){
       display:block;
       padding:70px 20px;
    }

`;


export const Apresentation = styled.div`
    width:50%;
    @media(max-width: 900px){
        width:100%;
        max-width:600px;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
    }
    
`;

export const Image = styled.div`
    width:50%;
    padding:70px;

    @media(max-width: 900px){
        display:none;
    }

    img {
        width:100%;
    }

`;
export const ImageImg = styled.img`
`;

export const TextApresentation = styled.div`
    @media(max-width: 500px){
        width:100%;
    }

    h1 {
        font-weight: bold;
        font-size: 48px;
        line-height: 56px;

        @media(max-width: 500px){
            font-size: 20px;
            line-height: 25px;
            margin-top:25px;
        }

        
        
    }
`

interface InputSearchProps {
    err: boolean;
}

export const InputSearch = styled.div<InputSearchProps>`
    margin-top:30px;
    display:flex;
    width:100%;

    input {
        border-radius:5px 0px 0px 5px;
        border:2px;
        
        width:70%;
        height:60px;
        padding:0 15px;
        font-size: 18px;
        font-weight:300;
        ::placeholder{
            color:#A8A8B3;
        }

        ${props => props.err && css`
            border:2px solid var(--color-button-err-hover-theme-white);

            ::placeholder{
            color:var(--color-button-err-hover-theme-white);
        }
        `}

        

        
    }

    button {
        border-radius:0px 5px 5px 0px;
        width:30%;
        border:2px;
        color:#fff;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        transition:0.2s;
        cursor:pointer;

        :hover {
            background-color:var(--color-button-hover-theme-white);
            border:2px solid var(--color-button-hover-theme-white);
        }

        svg {
            display:none;
        }

        @media(max-width: 500px){

            display:flex;
            justify-content:center;
            align-items:center;

            p{
            display:none;

            }
            svg {
            display:flex;
                 
        }
        }
    }
`;


// Cards

export const Cards = styled.div`
`;

export const Card = styled.div`
    margin:20px 0;
    width:100%;
    display:flex;
    align-items:center;
    border-radius:5px;
    padding:20px;
    

   svg {
       background-color:transparent;
       color:red;
   }
    
`;

export const ImagePerfil = styled.img`
    width:20%;
    border-radius:50%;

    @media(max-width: 500px){
        width:100%;
        padding:60px;
    }
   
`;

export const InfoUser = styled.div`
    width:80%;
    padding-left:10px;
    background:transparent;
    @media(max-width: 500px){
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    }

`;


export const Login = styled.p`
    background:transparent;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color:#919191;
`;
export const Location = styled.p`
    background:transparent;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color:#b5b5b5;
`;

export const SpanError = styled.p`
        margin-top: 10px;

    color:var(--color-button-err-hover-theme-white);

`;