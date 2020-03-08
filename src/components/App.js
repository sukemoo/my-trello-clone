import React, { Component } from "react";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "./TrelloActionButton";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

class App extends Component {
  
  onDragEnd = (result) => {
    const {destination, source, draggableId} = result;
    
    if(!destination){
      return;
    }
    
    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  }
  
  render() {
    const { lists } = this.props;
    return(
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div>
          <h2>Hello Kogane</h2>
          <ListContainer>
            { lists.map(list => (
              <TrelloList listID={list.id} title={list.title} cards={list.cards} />
            ))}
            <TrelloActionButton list />
          </ListContainer>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.myLists
});

export default connect(mapStateToProps) (App);
