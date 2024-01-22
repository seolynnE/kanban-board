## react beautiful dnd

- Drag & Drop을 쉽게 구현 가능한 라이브러리.
- 사용예시
  ````<DragDropContext onDragEnd={}>
    <div>
        <Droppable droppableId="one">
            {() => (
                <ul>
              <Draggable draggableId="first" index={0}>{() => <li>one</li>}</Draggable>
                </ul>
            )}
        </Droppable>
    </div>
  </DragDropContext>```
  ````

1. `DragDropContext` 사용 시 onDragEnd props child 필수
2. `Droppable`사용 시 droppableId props, child 필수.
   단, child는 react요소가 아닌 함수로 구현해야 한다.
3. `Draggable`사용 시 draggableId props, index 필수.
   단, child는 react요소가 아닌 함수로 구현해야 한다.
