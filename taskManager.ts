class Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;

    constructor(id: number, title: string, description: string, completed: boolean = false) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
}

class TaskManager {
    private tasks: Task[] = [];

    addTask(task: Task): void {
        this.tasks.push(task);
        console.log(`Added task: "${task.title}" (ID: ${task.id})`);
    }

    getTaskById(id: number): Task | undefined {
        return this.tasks.find(task => task.id === id);
    }

    markTaskComplete(id: number): void {
        const task = this.getTaskById(id);
        if (task) {
            task.completed = true;
            console.log(`Marked task ID ${id} as complete.`);
        } else {
            console.log(`Task with ID ${id} not found.`);
        }
    }

    listAllTasks(): void {
        console.log("\n--- All Tasks ---");
        if (this.tasks.length === 0) {
            console.log("No tasks available.");
            return;
        }

        this.tasks.forEach(task => {
            const status = task.completed ? "[✓] Completed" : "[ ] Pending";
            console.log(`${task.id}. ${task.title} - ${status}`);
            console.log(`   Description: ${task.description}`);
        });
        console.log("-----------------\n");
    }
}

// Demo Execution
const manager = new TaskManager();

// 1. Add tasks
manager.addTask(new Task(1, "Build HTML Layout", "Set up responsive container and grid cards"));
manager.addTask(new Task(2, "Add Bootstrap Utilities", "Apply navbar and background color utility classes"));
manager.addTask(new Task(3, "Implement TaskManager in TS", "Write Task and TaskManager classes with methods"));

// 2. List all tasks
manager.listAllTasks();

// 3. Mark some tasks as complete
manager.markTaskComplete(1);
manager.markTaskComplete(3);

// 4. List all tasks again to verify completion status
manager.listAllTasks();