import styled from 'styled-components';

type ContainerProps = {
    showBackground: boolean;
}

export const Container = styled.div<ContainerProps> `
   heigth: 100px;
   border-radius: 20px;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   background-color: ${props => props.showBackground? '#1550FF': '#E2E3E3'};
`;

type Props = {
  opaci?:number;
}

export const Icon = styled.img<Props> `
  width:40px;
  heigth: 40px;
  opacity: ${(props)=> props.opaci ?? 1 }
  
`;