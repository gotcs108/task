import ProgressBar from "./ProgressBar"
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function TaskList({tasks, assignees, setActiveComponent, setActiveTask}) {
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    const filterAssignee = (assignees) => {
        if (assignees.length === 0){
            setFilteredTasks(tasks);
        }
        else{
            setFilteredTasks(tasks.filter(task => 
                assignees.every(assignee => task.assignees.includes(assignee)) // look for tasks where all chosen assignees are in
            ))
        }
    }

    const taskList = filteredTasks.map(task => 
        (
            <tr key={task.id} onClick={() => {
                    setActiveTask(task);
                    setActiveComponent("TaskDetail");
                }}>
                <td>{task.ticketNumber}</td>
                <td>{task.item}</td>
                <td><ProgressBar items={task.subtasks}/></td>
                <td>{JSON.stringify(task.assignees)}</td>
            </tr>
        )
    )
    return (
        <div>
        <Autocomplete
            multiple
            options={assignees}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search Assignees"
                    placeholder="Assignees"
                />
            )}
            onChange={(event, values) => {filterAssignee(values)}}
        />
        <table>
            <th>Ticket No.</th>
            <th>Item</th>
            <th>Progress</th>
            <th>Assignees</th>
            <tbody>

            {taskList}
            </tbody>
        </table>
        </div>
    )
}