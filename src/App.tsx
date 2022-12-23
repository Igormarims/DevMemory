
import * as C from './App.styles';
import LogoImage from '../src/assets/devmemory_logo.png';
import  InfoItem  from './components/InfoItem';
import Button from './components/Button';
import Icon from './assets/restart.svg';

function App() {





  const resetAndCreateGrid = ()=> {

  }

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
            <img src={ LogoImage } alt="Logo" width={200} />
        </C.LogoLink>
         
        <C.InfoArea>
          <InfoItem label='Tempo'value='00:00'/>
          <InfoItem label='Movimentos'value='0'/>
        </C.InfoArea>
        <Button label='Reiniciar' icon={Icon} onClick={resetAndCreateGrid}/>

        
       
      </C.Info>
     
      <C.GridArea>
      </C.GridArea>
    </C.Container>
  );
}

export default App;
