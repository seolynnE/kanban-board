import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragableCard from "./DragableCard";

const Title = styled.h2`
  padding-bottom: 12px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const Wraper = styled.div`
  min-height: 200px;
  padding: 20px 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.boardColor};
`;
interface IBoardProps {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: IBoardProps) {
  return (
    <Droppable droppableId="one">
      {(magic) => (
        <Wraper ref={magic.innerRef} {...magic.droppableProps}>
          <Title>{boardId}</Title>
          {toDos.map((toDo, index) => (
            <DragableCard key={toDo} toDo={toDo} index={index} />
          ))}
          {magic.placeholder}
        </Wraper>
      )}
    </Droppable>
  );
}
export default Board;
