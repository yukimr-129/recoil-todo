import React, { VFC } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { useRecoilValue } from 'recoil';
import { useRecoilState } from 'recoil';

import { taskContentState, taskDeadlineState, taskPriorityState } from '../atoms/RegisterDialogContent';
import { TasksList } from '../atoms/TasksList';
import { RegisterDialogContent } from './RegisterDialogContent';

type Props = {
    open: boolean;
    onClose: () => void;
}

export const RegisterDialog: VFC<Props> = (props) => {
    const { open, onClose } = props

    const taskContent = useRecoilValue(taskContentState)
    const taskDeadline = useRecoilValue(taskDeadlineState)
    const taskPriority = useRecoilValue(taskPriorityState)

    const [tasks, setTasks] = useRecoilState(TasksList)

    //タスク登録
    const handleRegister = () => {
        setTasks([
            ...tasks,
            {
                content: taskContent,
                deadline: taskDeadline,
                priority: taskPriority
            }
        ])
        onClose()
    }




    return (
        <Dialog 
         open={open}
         onClose={onClose}
         aria-labelledby="form-dialog-title"
         fullWidth
        >
            <DialogTitle>タスク登録</DialogTitle>
            <RegisterDialogContent />
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    もどる
                </Button>
                <Button onClick={handleRegister} color="primary">
                    登録
                </Button>
            </DialogActions>
        </Dialog>
    )
}