enum Status {
    Todo = "TODO",
    Doing = "DOING",
    Done = "DONE",
}

type Priority = "low" | "medium" | "high";

interface Task {
    readonly id: number;
    title: string;
    priority: Priority;
    status: Status;
    tags: string[];
}

let tasks: Task[] = [];
let nextId = 1;

function addTask(
    title: string,
    priority: Priority = "medium",
    ...tags: string[]
): Task {
    const task: Task = { id: nextId++, title, priority, status: Status.Todo, tags };
    tasks.push(task);
    return task;
}

function setStatus(id: number, status: Status): void {
    const task = tasks.find((t) => t.id === id);
    if (!task) {
        console.log(`No task with id ${id}`);
        return;
    }
    task.status = status;
}

function byStatus(status: Status): Task[] {
    return tasks.filter((t) => t.status === status);
}

function printTasks(list: Task[], heading: string): void {
    console.log(`\n${heading} (${list.length})`);
    for (const t of list) {
        const tagText = t.tags.length > 0 ? ` [${t.tags.join(", ")}]` : "";
        console.log(` #${t.id} ${t.title} - ${t.priority}${tagText}`);
    }
}

//Challenge: add a removeTask(id) function using filter (remember, tasks is a const array, so you will
//need splice or to change it to let) and a function that counts tasks per priority.

// function removeTask(id: number): Task[] {
//     return tasks.filter((t) => t.id !== id);
// }

//1.
function removeTask1(id: number): Task[] {
    tasks = tasks.filter((t) => t.id !== id);
    return tasks;
}

//2.
function removeTask2(id: number): Task[] {
    const index = tasks.findIndex((t) => t.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
    }
    return tasks;
}
// interface PriorityCounts {
//     high: number;
//     medium: number;
//     low: number;
// }

// function countTasksByPriority(tasks: Task[]): PriorityCounts {
//     const counts: PriorityCounts = {
//         high: 0,
//         medium: 0,
//         low: 0,
//     };

//     for (const task of tasks) {
//         counts[task.priority] += 1;
//     }

//     return counts;
// }
function countTasksByPriority(tasks: Task[]): Record<Priority, number> {
    const counts: Record<Priority, number> = {
        high: 0,
        medium: 0,
        low: 0,
    };

    for (const task of tasks) {
        counts[task.priority] += 1;
    }

    return counts;
}


// ----- Try it -----
addTask("Learn interfaces", "high", "study");
addTask("Buy groceries", "low", "home", "errands");
addTask("Write chapter summary", "medium", "study");
addTask("Call the bank");

setStatus(1, Status.Done);
setStatus(3, Status.Doing);
setStatus(99, Status.Done); // does not exist

printTasks(byStatus(Status.Todo), "To do");
printTasks(byStatus(Status.Doing), "In progress");
printTasks(byStatus(Status.Done), "Finished");

const studyTasks = tasks.filter((t) => t.tags.includes("study"));
console.log(`\nStudy tasks: ${studyTasks.map((t) => t.title).join(" | ")}`);