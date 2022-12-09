const Add = ({ Adding }) => {
  return (
    <form
      id="form" // Box shadow Hover effect is in index.css
      onSubmit={Adding} // The function is in Todo.jsx
      className="flex gap-4 flex-wrap"
    >
      {/* User's Task */}
      <input
        className="bg-white bg-opacity-50 px-4 py-2 outline-none rounded-md shadow-lg"
        type="text"
        name="job"
        placeholder="Task"
        autoComplete="off"
        required
      />
      {/* Duration */}
      <input
        className="bg-white bg-opacity-50 px-4 py-2 outline-none rounded-md shadow-lg"
        type="number"
        name="duration"
        placeholder="Duration"
        autoComplete="off"
        required
      />
      <button className="bg-white shadow-2xl px-8 py-2 rounded-lg">Add</button>
    </form>
  );
};

export default Add;
