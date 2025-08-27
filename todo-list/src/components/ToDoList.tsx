import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoSelector } from "../atoms";
import ToDo from "./ToDo";
import Category from "./Category";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  return (
    <>
      <h1>To Do List</h1>
      <hr />
      <Category />
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </>
  );
}

export default ToDoList;
