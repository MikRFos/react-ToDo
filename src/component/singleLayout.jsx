import Card from "./card"

export default function SingleLayout({layout, toggleItems}){

  return(
    <>
    <Card 
           key={layout.selected.id} 
           todo={layout.selected} 
           toggleItems={toggleItems}/> 
     </>  
  )
}
