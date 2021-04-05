import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useState, VFC } from 'react';
import { RegisterDialog } from './RegisterDialog';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      '&:hover': {
        backgroundColor: '#6666ff'
      }
    }
  })
);

export const TodoList: VFC = () => {
    const classes = useStyles();

    //ダイアログ開閉管理
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <>
            <Box padding='2rem' textAlign='center'>
                <Typography variant="subtitle1" gutterBottom>
                    まだ登録されたタスクはありません。
                </Typography>
                <Button
                    onClick={handleOpen}
                    className={classes.button}
                    variant="contained"
                    color="primary"
                >
                    タスクを登録する
                </Button>
            </Box>
            <RegisterDialog open={open} onClose={handleClose}/>
        </>
    )
}