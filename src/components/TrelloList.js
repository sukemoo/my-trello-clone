import React from "react";
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin-right: 8px;
`;

const TrelloList=({title, cards, listID})=> {
  return(
    <Droppable droppableId={String(listID)}>
      {provided =>(
        <ListContainer {...provided.drppableProps} ref={provided.innerRef}>
          <h4>{title}</h4>
          { cards.map((card, index) => (
            <TrelloCard 
              key={card.id} 
              index={index}
              id={card.id}
              text={card.text} 
              listID={listID}
            />
          ))}
          <TrelloActionButton listID={listID} />
          {provided.placeholder}
        </ListContainer>
      )}
    </Droppable>
  );
};

export default TrelloList;