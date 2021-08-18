import React, { useState } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

const CreateTaskPopup = ({ modal, toggle, save }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (e) => {
    const { title, value } = e.target;

    if (title === 'taskTitle') {
      setTaskTitle(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave = (e) => {
    const date = new Date();
    e.preventDefault();
    const taskObj = {};
    taskObj.title = taskTitle;
    taskObj.description = description;
    taskObj.status = 0;
    taskObj.createdAt = date.toISOString();
    save(taskObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>

        <div className="form-group">
          <label>Task Name</label>
          <input type="text" className="form-control" value={taskTitle} onChange={handleChange} name="taskName" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea rows="5" className="form-control" value={description} onChange={handleChange} name="description" />
        </div>

      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>Create</Button>
        {' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTaskPopup;
