import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atom/atoms";
import Board from "./components/Board";
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 680px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => {
    const { destination, draggableId, source } = info;
    if (destination?.droppableId === source.droppableId) {
      // same board movement
      setToDos((oldToDos) => {
        const boardCopy = [...oldToDos[source.droppableId]];
        // 드래그한 녀석을 지운다
        boardCopy.splice(source.index, 1);
        // 드래그한 녀석을 다시 나타낸다
        boardCopy.splice(destination?.index, 0, draggableId);
        return {
          ...oldToDos,
          [source.droppableId]: boardCopy,
        };
      });
    }
    // destination이 없으면 걍 리턴
    // if (!destination) return;
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrap>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrap>
    </DragDropContext>
  );
}

export default App;
