
import * as C from './App.styles';
import LogoImage from '../src/assets/devmemory_logo.png';
import  InfoItem  from './components/InfoItem';
import Button from './components/Button';
import Icon from './assets/restart.svg';
import { useEffect, useState } from 'react';
import { GridItemType } from './types/GridItemType';
import { items } from './data/items'
import GridItem from './components/GridItem';
import { formatTimeElapsed } from './utils/formatTimeElapsed'

function App() {

  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);


  useEffect(()=> {
  resetAndCreateGrid();
  },[]
);

useEffect(()=> {
  const timer = setInterval(()=> {
       if(playing)
    setTimeElapsed(timeElapsed + 1);
  },1000
  
  )
  return ()=> clearInterval(timer);
  },[playing, timeElapsed]);

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

    for(let w =0; w < 2; w++) {
      for(let i = 0; i < items.length; i++){
        let pos = -1
        while(pos < 0 || tmpGrid[pos].item != null ) {
          pos = Math.floor(Math.random() * (items.length * 2));
        }
        
        tmpGrid[pos].item = i;
      }

    }

    setPlaying(true);
    setGridItems(tmpGrid);

  }

   const handleItemClick = (index: number)=> {
      console.log('oi');
      
   }

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
            <img src={ LogoImage } alt="Logo" width={200} />
        </C.LogoLink>
         
        <C.InfoArea>
          <InfoItem label='Tempo'value={formatTimeElapsed(timeElapsed)}/>
          <InfoItem label='Movimentos'value='0'/>
        </C.InfoArea>
        <Button label='Reiniciar' icon={Icon} onClick={resetAndCreateGrid}/>
       </C.Info>
     
      <C.GridArea>
        <C.Grid>
            {gridItems.map((item, index)=> 
               <GridItem
                key={index}
                item={item}
                onClick={()=> handleItemClick(index)}
               />
            )}
        </C.Grid>
      </C.GridArea>
    </C.Container>
  );
}

export default App;
