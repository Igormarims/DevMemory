import { GridItemType } from '../../types/GridItemType';
import * as C from './styles';
import b7 from '../../assets/b7.svg';
import {items} from '../../data/items';

 type Props = {
    item: GridItemType;
    onClick: ()=> void
 }

const GridItem = ({item , onClick}: Props)=> {
 return(
    <C.Container 
    onClick={onClick}
     showBackground={item.permanentShown || item.shown}
      >
         {item.permanentShown === false && item.shown === false &&
            <C.Icon src={b7} alt="" opaci={0.1} /> 
         }
         {(item.permanentShown || item.shown) && item.item != null &&
            <C.Icon src={items[item.item].icon} alt={items[item.item].name} /> }
     
    </C.Container>
 )
}

 export default GridItem;