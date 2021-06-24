import React, { useEffect, useState } from 'react';

import NewTask from '../../component/Tasks/NewTask';
import Tasks from '../../component/Tasks/Tasks';
import useHTTP from '../../hooks/use-http';

const CustomHook = props => {

    const [tasks, setTasks] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(null)



    const {isLoading, error, sendRequest : fetchTask} = useHTTP();

    useEffect(() => {
        const transformeTasks = tasksObject => {
            const tasksLoaded = [];
            for (const key in tasksObject) {
                tasksLoaded.push({
                    id: key,
                    text: tasksObject[key].text
                });
            }
    
            setTasks(tasksLoaded);
        };

        fetchTask({
            url:"https://react-http-64b0d-default-rtdb.firebaseio.com/tasks.json"
        },transformeTasks);
    },[fetchTask])

    const createTask = (taskText, taskData) =>{
        const listTasks = [...tasks];
        listTasks.push({id:taskData.name, text:taskText});
        setTasks(listTasks)
    }

    const addTaskHandler =  taskText =>{
        
        fetchTask({
            url:"https://react-http-64b0d-default-rtdb.firebaseio.com/tasks.json",
            method:"POST",
            body: {text:taskText},
            headers:{
                "Content-type":'application/json'
            }
        }, createTask.bind(null, taskText));
    }

    let content = <h1>No tasks found. Start adding some!</h1>;

    if(error)
        content = <h1>{error}</h1>
    else if(isLoading)
        content = <h1>Loading...</h1>
    else if(tasks.length > 0){
        // content = tasks.map(task => <div key={task.id}><h3>{`${task.id}. ${task.text}`}</h3></div>);
        content = <Tasks tasks={tasks} />
    }

    return <React.Fragment>
        <NewTask onAddTask={addTaskHandler}/>
        {/* <NewTask onAddTask={null}/> */}
        {content}
    </React.Fragment>;
}

export default CustomHook;




// const fetchTask = async () =>{
    //     setIsLoading(true);
    //     setError(null);

    //     try {
            
    //         const response = await fetch("https://react-http-64b0d-default-rtdb.firebaseio.com/tasks.json");
    //         if(!response.ok)
    //             throw new Error("Request failed");
            
    //         const tasks = await response.json()

    //         const tasksLoaded = [];
    //         for (const key in tasks) {
    //             tasksLoaded.push({
    //                 id:key,
    //                 text:tasks[key].text
    //             });
    //         }

    //         setTasks(tasksLoaded);

    //     } catch (error) {
    //         setError(error.message);
    //     }

    //     setIsLoading(false);

    // }


//     const addTaskHandler = async task =>{
//         // setIsLoading(true);
//         // setError(null);

//         try{
//             const response = await fetch("https://react-http-64b0d-default-rtdb.firebaseio.com/tasks.json",{
//                 method:"POST",
//                 body: JSON.stringify({text:task}),
//                 headers:{
//                     "Content-type":'application/json'
//                 }
//             })

//             if(!response.ok)
//                 throw new Error("Failed adding task!!")

//             fetchTask()
// ;
//         } catch(error){
//             // setError(error.message)
//         }

//         // setIsLoading(false);
//     }