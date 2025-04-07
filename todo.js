  // Your dynamic task list (starts empty)
  let todo = [
    { id: 1, title: "go to the gym", completed: false },
    { id: 2, title: "visit granny", completed: true },
    { id: 3, title: "Take a walk", completed: false },
    { id: 4, title: "go to the mall", completed: true },
  ];
  
  // Your dynamic task list (starts empty)
  let tasks = [];
  let nextId = 5; // Start nextId from 5 to avoid conflict with todo list
  
  // Add task to the 'tasks' array with a custom title
  function addTask(title) {
    const newTask = {
      id: nextId++, // id starts from 5 now
      title: title,
      completed: false,
    };
  
    tasks.push(newTask);
  
    console.log(`✅ Added: "${newTask.title}"`);
    console.log("Old task list:", todo);
    console.log("Current tasks:", tasks);
  }
  
  // Add a new task with a custom title
  addTask("go swimming");  // Adds "go swimming"
  addTask("learn JavaScript");  // Adds "learn JavaScript"
  
  // Mark task as done/undone
  function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      console.log(`🔄 Task "${task.title}" is now ${task.completed ? "✅ completed" : "🕒 pending"}`);
    } else {
      console.log("❌ Task not found.");
    }
  }
  
  // Testing toggle
  toggleTask(7);  // Correct task id for "go swimming"
  toggleTask(6);  // Correct task id for "learn JavaScript"


// // Filter tasks
function filterTasks(status) {
  let filtered;
  if (status === 'completed') {
    filtered = tasks.filter(t => t.completed);
    console.log("✅ Completed Tasks:");
  } else if (status === 'pending') {
    filtered = tasks.filter(t => !t.completed);
    console.log("🕒 Pending Tasks:");
  } else {
    filtered = tasks;
    console.log("📋 All Tasks:");
  }
  console.table(filtered);
}



//// Delete task


function deleteLastTask() {
    const removedTask = tasks.pop(); // Removes the last task
    if (removedTask) {
      console.log(`❌ Task "${removedTask.title}" deleted.`);
    } else {
      console.log("❌ No tasks to delete.");
    }
  }
  
  // Delete the last task
  deleteLastTask();  // This will delete "learn JavaScript"
  
  // Check tasks after deletion
  console.log("Remaining tasks:", tasks);