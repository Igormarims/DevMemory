
import * as C from './App.styles';
import LogoImage from '../src/assets/devmemory_logo.png';

function App() {
  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
            <img src={ LogoImage } alt="" width={200} />
        </C.LogoLink>
         
        <C.InfoArea>
        ...
        </C.InfoArea>

        <button>Reiniciar</button>
       
      </C.Info>
     
      <C.GridArea>
        ...
      </C.GridArea>
    </C.Container>
  );
}

export default App;
