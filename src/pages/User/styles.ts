import styled from 'styled-components';


export const Container = styled.div`
    width:100%;
    max-width:1120px;
    margin:0 auto;
    padding:0 2%;

`;

export const Header = styled.div`
    margin-top:50px;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;

`;

export const UserProfile = styled.div`
    margin-top:170px;
    display:flex;
    align-items:center;
    width:100%;

    @media(max-width: 1000px){
        flex-direction:column;
    }


`;
export const Image = styled.img`
    width:10%;
    border-radius:50%;

    @media(max-width: 1000px){
        width:100%;
        max-width:200px;
    }
`;
export const Info = styled.div`
    width:58%;
    padding-left:10px;

    @media(max-width: 1000px){
        width:100%;
        margin:10px 0;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
    }
`;
export const Login = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color:#919191;
`;
export const Location = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color:#b5b5b5;
`;

export const OtherInfo = styled.div`
    width:32%;
    display:flex;
    align-items:center;

    @media(max-width: 1000px){
        width:100%;
        margin:10px 0;
    }

    @media(max-width: 500px){
        flex-direction:column;
    }
`;

export const Repos = styled.div`
    width:33.3%;
    height:50px;
    background-color:#8488E0;
    margin:0 10px;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    @media(max-width: 500px){
       margin:10px 0;
       width:100%;
       max-width:200px;
    }

   a {
    text-decoration:none;
    border-radius:5px;
    
   
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:#fff;
    margin:0 10px;
    transition:0.2s;

    

    p {
        background:transparent;
    }

    h5 {
        background:transparent;

    }
    

   
   }
transition:0.2s;
   :hover{
        background-color:#6a6db3;
    }
`;
export const Followers = styled.div`
    width:33.3%;
    height:50px;
    background-color:#8DE06D;
    margin:0 10px;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    @media(max-width: 500px){
       margin:10px 0;
       width:100%;
       max-width:200px;
    }

   a {
    text-decoration:none;
    border-radius:5px;
    
   
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:#fff;
    margin:0 10px;
    transition:0.2s;

    

    p {
        background:transparent;
    }

    h5 {
        background:transparent;

    }
    
    
   }
   transition:0.2s;
   :hover{
        background-color:#71b357;
    }
`;
export const Following = styled.div`
    width:33.3%;
    height:50px;
    background-color:#E08358;
    margin:0 10px;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    @media(max-width: 500px){
       margin:10px 0;
       width:100%;
       max-width:200px;
    }

   a {
    text-decoration:none;
    
   
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:#fff;
    margin:0 10px;

    

    p {
        background:transparent;
    }

    h5 {
        background:transparent;

    }
    
   }
   transition:0.2s;

   :hover{
        background-color:#b36946;
    }
`;

export const ContentCardRepo = styled.div`
    width:100%;
    margin:50px 0;
`;


export const Language = styled.p`
    background:transparent;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color:#919191;

`;
export const CreateDate = styled.p`
    background:transparent;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color:#8DE06D;

`;
export const UpdateDate = styled.p`
    background:transparent;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color:#8488E0;

    margin-left:10px;

`;

export const Dates = styled.div`
    margin-top:5px;
    background:transparent;
    display:flex;
    align-items:center;

`;

// ERROR 
export const Content = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;

    img {
        width:50%;
    }
`;

