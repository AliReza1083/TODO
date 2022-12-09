// Converting TimeStamp
import { convertTimestamp } from "../pages/App";

// Packages
import { motion } from "framer-motion";

const EachTodo = ({ tasks, Completed, Delete }) => {
  return (
    <motion.div
      layout="position"
      exit={{ opacity: 0, scale: 0.6 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: [-40, 10, 0] }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`border-2 p-4 rounded-lg shadow-2xl mt-8 grid grid-cols-2 gap-y-4 md:grid-cols-3 justify-between items-center ${
          tasks.completed ? "bg-green-300" : ""
        } duration-200`}
      >
        {/* First Column */}
        <div>
          <h1>Task: {tasks.todo}</h1>
          <small>Duration: {tasks.duration}</small>
        </div>

        {/* Second Column */}
        <div className="text-right md:text-center text-xs md:text-base">
          {tasks.completed ? <h2>Completed</h2> : <h2>Not Completed</h2>}
          <small>
            {tasks.createdAt && convertTimestamp(tasks.createdAt.seconds)}
          </small>
        </div>

        {/* Third Column */}
        <div className="flex gap-2 md:justify-end">
          {/* CheckBox */}
          <div>
            <input
              onClick={Completed}
              type="checkbox"
              className="checkbox-input"
              value={tasks.id}
              id={tasks.id}
              defaultChecked={tasks.completed}
            />
            <label htmlFor={tasks.id}>
              <span className="checkbox"></span>
            </label>
          </div>

          {/* Button for deleting that task */}
          {tasks.completed == true && (
            <button
              onClick={Delete}
              value={tasks.id}
              className="text-xs bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default EachTodo;
