import React from "react";
import Card from "./card";

class CardGroup extends React.Component {

  renderCard(title, list, description, date) {
    return (
      <Card
        title = {title}
        list = {list}
        description = {description}
        dueDate = {date}
        key = {title}
      />
    );
  }

  
  render() {
    
    const createCardList = () => {
      return( 
        this.props.projects.map((project, index) => (
          this.renderCard(project.title, project.todos, 
            project.description, project.dueDate))
        ))
    }
    return (
      <div className='card-holder'>
        {createCardList()}
      </div>
    )
  }
}

export default CardGroup;