export const AddTask = 'ADD_TASK';
export const DeleteTask = 'DELETE_TASK';
export const EditTask = 'EDIT_TASK';

export function addTask(data) {
    return {
        type: AddTask,
        data
    }
}

export function deleteTask(id) {
    return {
        type: DeleteTask,
        data: id
    }
}

export function editTask(task) {
    return {
        type: EditTask,
        data: task
    }
}