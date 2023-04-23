export default function Square({value, onSquareClick}){

    // named exports require the exact name for import
    // ex. import { add, subtract } from './math';
    // default exports can be only one per module and can have any import name
    // ex. import MySquare from './Square';

    // parameter props is destructured to extract values directly
    // props is a special object that contains all the properties pass to a
    //     component from its parent
    // ex. function Square(props) {
    //       const value = props.value;
    //       const onSquareClick = props.onSquareClick;
    // or function Square({value, onSquareClick

return (
    <button className='square' onClick={onSquareClick} >
        {value}
    </button>
)
    // onClick event handler attribute in Html
    // {value} jsx expression that renders a value variable or a prop
}
