
import * as C from './App.styles';
import LogoImage from '../src/assets/devmemory_logo.png';
import  InfoItem  from './components/InfoItem';
import Button from './components/Button';
import Icon from './assets/restart.svg';
import { useEffect, useState } from 'react';
import { GridItemType } from './types/GridItemType';
import { items } from './data/items'

function App() {

  const [paying, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(()=> {
  resetAndCreateGrid();
  },[]
);

  const resetAndCreateGrid = ()=> {
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);
    
    let tmpGrid: GridItemType[] = [];
    for(let i = 0; i < (items.length * 2); i++){
        tmpGrid.push({
          item: null,
          shown: false,
          permanentShown: false
        });
    }

    setPlaying(true);
    setGridItems([]);

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
        <C.Grid>

        </C.Grid>
      </C.GridArea>
    </C.Container>
  );
}

export default App;
