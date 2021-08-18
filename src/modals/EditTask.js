import React, { useState, useEffect } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

const EditTaskPopup = ({
  modal, toggle, updateTask, taskObj, deleteTask,
}) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'taskName') {
      setTaskTitle(value);
    } else {
      setDescription(value);
    }
  };

  useEffect(() => {
    setTaskTitle(taskObj.title);
    setDescription(taskObj.description);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    const tempObj = {};
    tempObj.title = taskTitle;
    tempObj.description = description;
    updateTask(tempObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Task</ModalHeader>
      <ModalBody>

        <div className="form-group">
          <label>Task Name</label>
          <input type="text" className="form-control" value={taskTitle} onChange={handleChange} name="taskTitle" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea rows="5" className="form-control" value={description} onChange={handleChange} name="description" />
        </div>

      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>Update</Button>
        <Button color="danger" onClick={deleteTask}>Delete</Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTaskPopup;
