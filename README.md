## react beautiful dnd

- Drag & Drop을 쉽게 구현 가능한 라이브러리.
- 사용예시

  ```
  const onDragEnd=() => {};

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
const [toDos, setToDos] = useRecoilState(toDoState);
const onDragEnd = ({destination, source}:DropResoult) => {};


          <Droppable droppableId="one">
            {(magic) => (
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                {toDos.map((toDo, index) => (
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
                ))}
                {magic.placeholder}
              </Board>
            )}
          </Droppable>
```

- li에 magic의 props들을 추가하면 모든게 li에 적용된다
- placeholder는 리스트가 드래그 될 때 그 배경의 css(대게 height값)가 변하는 것을 방지해준다.

### onDragEnd

- result: DrogResult
- result.draggabled: 드래그 되어있던 Draggable의 type
- result.source: Draggable이 시작된 위치(location)
- result.destination: Draggable이 끝난 위치(location).
  만약 Draggable이 시작한 위치와 같은 위치로 돌아오면 이 destination의 값은 null이 될 것
