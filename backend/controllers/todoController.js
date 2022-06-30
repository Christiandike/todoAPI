const Tasks = require("../models/Tasks");

// @desc Get tasks
// @route GET /todos
const getTasks = async (req, res) => {
  try {
    const task = await Tasks.find();
    if (task.length === 0) {
      return res.status(404);
    }

    res.status(200).json({ message: "tasks found", task });
  } catch (err) {
    res.status(500);
  }
};

// @desc add tasks
// @route POST /todos
const addTask = async (req, res) => {
  try {
    const createdTask = await Tasks.create(req.body);

    const task = await req.body.title;

    if (!task) {
      return res.status(400).json({
        message: "Please set a title for the task",
      });
    }

    res.status(200).json({ message: "task created", createdTask });
  } catch (err) {
    res.status(500);
  }
};

// @desc Update tasks
// @route PUT /todos/:id
const updateTask = async (req, res) => {
  try {
    const task = await Tasks.findById(req.params.id);

    if (!task) {
      return res.status(400).json({
        message: "Task not found",
      });
    }

    const updatedTask = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(500);
  }
};

// @desc Delete tasks
// @route DELETE /todos/:id
const deleteTask = async (req, res) => {
  try {
    const task = await Tasks.findById(req.params.id);

    if (!task) {
      return res.status(400).json({
        message: "Task not found",
      });
    }

    await task.remove();

    res.status(200).json({ message: `deleted task with id: ${req.params.id}` });
  } catch (err) {
    res.status(500);
  }
};

module.exports = {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
};
