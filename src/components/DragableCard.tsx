import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  margin: 10px 0;
  padding: 10px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.cardColor};
  font-size: 20px;
`;
interface IDragabbleCardProps {
  toDo: string;
  index: number;
}

function DragableCard({ toDo, index }: IDragabbleCardProps) {
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DragableCard);
