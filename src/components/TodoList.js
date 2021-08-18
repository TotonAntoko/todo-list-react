import React, { useEffect, useState } from 'react';
import CreateTask from '../modals/CreateTask';
import Card from './Card';

const fetchData = () => fetch('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list')
  .then((response) => response.json())
  .then((data) => localStorage.setItem('taskList', JSON.stringify(data)));

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    fetchData();
    const object = JSON.parse(localStorage.getItem('taskList'));

    if (object) {
      setTaskList(object);
    }
  }, []);

  const deleteTask = (index) => {
    const tempList = taskList;
    if (tempList[index].status !== 1) {
      tempList.splice(index, 1);
      localStorage.setItem('taskList', JSON.stringify(tempList));
      setTaskList(tempList);
    }
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    const tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem('taskList', JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    const tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem('taskList', JSON.stringify(tempList));
    setTaskList(taskList);
    setModal(false);
  };

  const filterData = (status) => {
    const object = JSON.parse(localStorage.getItem('taskList'));
    const objectFilterByStatus = object.filter((item) => item.status === status);
    const sortByDate = status === 1
      ? objectFilterByStatus.sort((a, b) => new Date(b.date) - new Date(a.date))
      : objectFilterByStatus.sort((a, b) => new Date(b.date) - new Date(a.date)).reverse();

    if (sortByDate) {
      setTaskList(sortByDate);
    }
  };

  return (
    <>
      <div className="header text-center">
        <h3>Todo List</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>Create Task</button>
      </div>
      <div className="d-flex p-2 justify-content-center">
        <button className="btn btn-primary mr-2" onClick={() => filterData(0)}>Active</button>
        <button className="btn btn-primary" onClick={() => filterData(1)}>Complete</button>
      </div>
      <div className="task-container">
        {taskList && taskList.map((obj, index) => (
          <Card
            taskObj={obj}
            index={index}
            deleteTask={deleteTask}
            updateListArray={updateListArray}
          />
        ))}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default TodoList;
