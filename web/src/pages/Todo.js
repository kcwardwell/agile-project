import { useState } from "react";
import {FormStyled} from '../styled'

const Todo = () => {
  
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [completeDate, setCompleteDate] = useState(null);


  const onSubmitForm = () => {};

  const handleChangeProjectName = (e) => {}

  const handlechangeDueDate = (e) => {
    e.preventDefault();
    setDueDate(e.target.value);
  };

  const handlechangeStartDate = (e) => {
    e.preventDefault();
    setStartDate(e.target.value);
  };

  const handlechangeCompletionDate = (e) => {
    e.preventDefault();
    setCompleteDate(e.target.value);
  };

  const handlechangeTaskName = (e) => {
    e.preventDefault();
    setTaskName(e.target.value);
  };

  return (
    <FormStyled onSubmitHandler={onSubmitForm}>
      <div className="title">create task</div>
      <div className="form-header">
        <div className="form-item">
          <label>Project</label>
          <input type='text' className='form-control' onChange={handleChangeProjectName}/>
        </div>
        <div className="form-item">
          <label>Project</label>
          <input type='text' className='form-control' onChange={handleChangeProjectName}/>
        </div>
      </div>
      <div>
        <button type='submit' >save</button>
        <button type='reset'>cancel</button>
      </div>
    </FormStyled>
  );
};

export default Todo;
