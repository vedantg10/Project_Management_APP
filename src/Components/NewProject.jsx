import React, { useRef } from "react";
import Input from "./Input";

const NewProject = ({ onAdd }) => {
  const title = useRef();
  const desciption = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = desciption.current.value;
    const enteredDueDate = dueDate.current.value;
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        <button
          onClick={handleSave}
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        >
          Save
        </button>
      </menu>
      <div>
        <Input type="text" ref={title} label="Title"></Input>
        <Input ref={desciption} label="Description " textArea></Input>
        <Input type="date" ref={dueDate} label="Due Date"></Input>
      </div>
    </div>
  );
};

export default NewProject;
