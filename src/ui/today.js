import users from "./data/users.json";
import tasks from "./data/tasks.json";

export function deployToday(user) {

    const TODAY = "null"; // will review dates later. 

    let root = document.getElementById("root");
    
    let currentUserTasks = getTasks(tasks[root["current-user"]]);

    let todayTasks = [];

    for (let task in currentUserTasks) {

        if (currentUserTasks[task]["dueDate"] === TODAY) {
            
            todayTasks[task] = currentUserTasks[task];

        }

    }

     

}