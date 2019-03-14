export const AddTask = 'ADD_TASK';
export const DeleteTask = 'DELETE_TASK';
export const EditTask = 'EDIT_TASK';

export function addTask() {
    return {
        type: AddTask,
        data: { title: '', desc: '' }
    }
}

export function deleteTask() {
    return {
        type: DeleteTask,
        data: ''
    }
}

export function editTask() {
    return {
        type: EditTask,
        data: ''
    }
}