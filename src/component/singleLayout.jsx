import Card from "./card"

export default function SingleLayout({layout, toggleItems, deleteTodo, setLayout}){

  return(
    <>
    <Card 
           key={layout.selected.id} 
           todo={layout.selected} 
           toggleItems={toggleItems}
           deleteTodo={deleteTodo}
           layout={layout}
           setLayout={setLayout}/> 
     </>  
  )
}
