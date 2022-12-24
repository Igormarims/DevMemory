import styled from 'styled-components'

 
 export const  Container = styled.div `
     width: 100%;
     max-width:750px;
     margin: auto;
     display: flex;
     padding: 50px 0;  
     border: 1px solid red;

     @media (max-width: 750px){
        flex-direction: column;
     }
 `;

 export const Info = styled.div `
    display: flex;
    flex-direction: column;
    width: auto;
    border: 1px solid red;
     
    @media (max-width: 750px){
       margin-bottom: 50px;
       align-items: center;
    }

 `;

 export const LogoLink = styled.a `
 border: 1px solid black;
 
 `;

 export const InfoArea = styled.div `
 margin: 10px 0
 width: 100%;
 border: 1px solid green;

 @media (max-width: 750px){
   display: flex;
   justify-content: space-around;
   text-align: center;
 }
 `;

 export const GridArea = styled.div `
 flex: 1;
 display: flex;
 justify-content: flex-end;
 border: 1px solid blue;

 @media (max-width: 750px){
    justify-content: center;
    margin: 0 20px;
 }
 `;

 export const Grid = styled.div `
     width: 430px;
     display: grid;
     grid-template-columns: repeat(4, 1fr);
     gap: 10px;
 `;