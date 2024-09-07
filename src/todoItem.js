// import React, { useState } from 'react';
// import TodoItem from './todoItem';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState('');

//   const handleAddTodo = () => {
//     if (newTodo.trim()) {
//       setTodos([...todos, { text: newTodo, completed: false }]);
//       setNewTodo('');
//     }
//   };

//   const handleToggleComplete = (index) => {
//     const updatedTodos = todos.map((todo, i) =>
//       i === index ? { ...todo, completed: !todo.completed } : todo
//     );
//     setTodos(updatedTodos);
//   };

//   const handleRemoveTodo = (index) => {
//     const updatedTodos = todos.filter((_, i) => i !== index);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 font-sans">
//       <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
//       <div className="flex mb-4">
//         <input
//           type="text"
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//           placeholder="Add a new to-do"
//           className="flex-1 p-2 border border-gray-300 rounded-l"
//         />
//         <button
//           onClick={handleAddTodo}
//           className="p-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
//         >
//           Add
//         </button>
//       </div>
//       <ul className="list-none p-0">
//         {todos.map((todo, index) => (
//           <TodoItem
//             key={index}
//             index={index}
//             todo={todo}
//             onToggleComplete={handleToggleComplete}
//             onRemove={handleRemoveTodo}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


// import React from 'react';

// function TodoItem({ index, todo, onToggleComplete, onRemove }) {
//   return (
//     <li
//       className={`flex justify-between items-center p-2 border-b border-gray-300 ${
//         todo.completed ? 'line-through text-gray-500' : ''
//       }`}
//     >
//       <span
//         onClick={() => onToggleComplete(index)}
//         className="cursor-pointer"
//       >
//         {todo.text}
//       </span>
//       <button
//         onClick={() => onRemove(index)}
//         className="text-red-500 hover:text-red-700"
//       >
//         Remove
//       </button>
//     </li>
//   );
// }

// export default TodoItem;
