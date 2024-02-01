## react beautiful dnd

- Drag & Drop을 쉽게 구현 가능한 라이브러리.
- 사용예시
  ```
  <DragDropContext onDragEnd={}>
    <div>
        <Droppable droppableId="one">
            {() => (
                <ul>
              <Draggable draggableId="first" index={0}>{() => <li>one</li>}</Draggable>
                </ul>
            )}
        </Droppable>
    </div>
  </DragDropContext>
  ```

1. `DragDropContext` 사용 시 onDragEnd props, child 필수
2. `Droppable`사용 시 droppableId props, child 필수.
   단, child는 react요소가 아닌 함수로 구현해야 한다.
3. `Draggable`사용 시 draggableId props, child, index 필수.
   단, child는 react요소가 아닌 함수로 구현해야 한다.

### beautiful-dnd에서 주는 props를 받아와야 한다.

```
<Droppable droppableId="one">
          {(magic) => (
            <ul ref={magic.innerRef} {...magic.droppableProps}>
              <Draggable draggableId="first" index={0}>
                {(magic) => <li ref={magic.innerRef} {...magic.draggableProps} {...magic.dragHandleProps}>one</li>}
              </Draggable>
              <Draggable draggableId="first" index={1}>
                {() => <li>two</li>}
              </Draggable>
            </ul>
          )}
        </Droppable>
```

- li에 magic의 props들을 추가하면 모든게 li에 적용된다
