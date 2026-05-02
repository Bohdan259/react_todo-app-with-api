import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { EditTodo, Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem';

type Props = {
  selectedUpdateTodo: number | null;
  editTodo: EditTodo | null;
  loadingIds: number[];
  toggleTodo: Todo | null;
  loaderToggle: boolean;
  selectedDeleteTodo: number | null;
  loaderDelete: boolean;
  todos: Todo[];
  tempTodo: Todo | null;
  loaderClearButton: boolean;
  onSelectedTodo: (todoId: number) => void;
  setToggleTodo: (todo: Todo) => void;
  setEditTodo: (todo: EditTodo) => void;
  setSelectedUpdateTodo: (id: number | null) => void;
};

export const TodoAppMain = React.memo<Props>(
  ({
    selectedUpdateTodo,
    setSelectedUpdateTodo,
    editTodo,
    setEditTodo,
    loadingIds,
    toggleTodo,
    setToggleTodo,
    loaderClearButton,
    selectedDeleteTodo,
    todos,
    tempTodo,
    onSelectedTodo,
  }) => {
    return (
      <section className="todoapp__main" data-cy="TodoList">
        <TransitionGroup>
          {todos.map(todo => (
            <CSSTransition key={todo.id} timeout={300} classNames="item">
              <TodoItem
                selectedUpdateTodo={selectedUpdateTodo}
                setSelectedUpdateTodo={setSelectedUpdateTodo}
                editTodo={editTodo}
                loadingIds={loadingIds}
                toggleTodo={toggleTodo}
                setToggleTodo={setToggleTodo}
                todo={todo}
                loaderClearButton={loaderClearButton}
                selectedDeleteTodo={selectedDeleteTodo}
                tempTodo={tempTodo}
                onSelectedTodo={onSelectedTodo}
                setEditTodo={setEditTodo}
              />
            </CSSTransition>
          ))}

          {tempTodo && (
            <CSSTransition key={0} timeout={300} classNames="temp-item">
              <TodoItem
                selectedUpdateTodo={selectedUpdateTodo}
                setSelectedUpdateTodo={setSelectedUpdateTodo}
                editTodo={editTodo}
                loadingIds={loadingIds}
                toggleTodo={toggleTodo}
                todo={tempTodo}
                loaderClearButton={false}
                selectedDeleteTodo={null}
                tempTodo={tempTodo}
                onSelectedTodo={onSelectedTodo}
                setToggleTodo={setToggleTodo}
                setEditTodo={setEditTodo}
              />
            </CSSTransition>
          )}
        </TransitionGroup>
      </section>
    );
  },
);

TodoAppMain.displayName = 'TodoAppMain';
