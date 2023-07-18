import Card from "./card"

export default function SingleLayout(props){

  return(
    <>
    <Card 
          key={props.layout.selected.id} 
          setCompletedTodos={props.setCompletedTodos} 
          setTodos={props.setTodos} 
          todo={props.layout.selected} 
          removeFromCurrentToDos={props.removeFromCurrentToDos}/> 
    </>  
  )
}