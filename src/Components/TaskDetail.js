import ProgressBar from "./ProgressBar";
import Paper from '@mui/material/Paper';

export default function TaskDetail({task, setActiveComponent, removeTask}) {
    const comments = task.comments.map((comment) =>
        <div>
            <div>{comment.author}</div>
            <div>{comment.comment}</div>
        </div>
    )

    const subtasks = task.subtasks.map((subtask) =>
        <tr>
            <td>{subtask.item}</td>
            <td>{subtask.status}</td>
        </tr>
    )
    
    const assignees = task.assignees.map((assignee) =>
        <div>
            {assignee}
        </div>
    )

    return (
        <div>
            <button onClick={() => setActiveComponent('TaskList')}>Go back</button>
        {
            task !== null ? 
            <div>
                <div>
                    <span>{task.ticketNumber} {task.item}</span>
                </div>
                <div style={{display: 'flex'}}>
                    <div style={{display: 'flex', flexDirection: 'column', flexBasis: '100%', gap: '50px'}}>
                        <Paper variant="outlined">
                            <span>Description</span>
                            <div>
                                <span>About</span>
                                <div>
                                    <span>{task.about}</span>
                                </div>
                            </div>
                            
                            <div>
                                <span>Assignees</span>
                                {assignees}
                            </div>
                        </Paper>
                        <Paper variant="outlined">
                            <span>Subtasks</span>
                            <ProgressBar items={task.subtasks}/>
                            <table>
                                <tbody>
                                    {subtasks}
                                </tbody>
                            </table>
                        </Paper>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', flexBasis: '100%', gap: '50px'}}>
                        <Paper>
                            <span>Comments</span>
                            {comments}
                        </Paper>
                        <Paper>
                            <span>Delete your task</span>
                            <div>
                                <button onClick={() => {
                                    setActiveComponent('TaskList');
                                    removeTask(task.id)
                                }}>Delete</button>
                            </div>
                        </Paper>
                    </div>
                </div>
            </div> : null
        }
        </div>
    )
}