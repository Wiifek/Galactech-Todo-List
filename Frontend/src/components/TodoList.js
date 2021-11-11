import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import todoService from '../services/todo.service';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    refreshTasksList();
  }, []);

  const refreshTasksList = () => {
    todoService.getAllTodoList()
      .then(response => {
        setTodos(response.data);
      }).catch(err => {
        console.log("ERRRROOOR");
        console.log(err);
      });
  }

  const addTodo = todo => {
    todoService.addTask(todo)
      .then(response => {
        refreshTasksList();
      }).catch(err => {
        console.log(err)
      })
  }

  const updateTodo = (todoId, newValue) => {
    todoService.editTask(todoId, newValue)
      .then(response => {
        refreshTasksList();
      }).catch(err => {
        console.log(err)
      })
  }

  const removeTodo = (id) => {
    todoService.deleteTaskById(id)
      .then(response => {
        refreshTasksList();
      }).catch(err => {
        console.log(err)
      })
  }

  const completeTodo = id => {
    let task = {};
    let isComplete=false;
    todoService.getTaskById(id)
      .then(response => {
        task = response.data;
        isComplete = !task.isComplete;
        todoService.editTask(id, {isComplete})
          .then(res => {
            refreshTasksList();
          })
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <h1>Galactech's ToDo List</h1>
      <TodoForm onSubmit={addTodo} />

      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />

    </>
  );
}

export default TodoList;
