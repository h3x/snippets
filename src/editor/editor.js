import React, {useEffect, useState} from 'react';
import ReactQuill from 'react-quill';
import { useDebounce } from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
// import { useSnackbar } from 'notistack';

const EditorComponent = ({selectedNote, classes, noteUpdate}) => {
    const [text, setText] = useState(selectedNote.body);
    const [title, setTitle] = useState(selectedNote.title);
    const [id, setId] = useState(selectedNote.id);
    // const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const debouncedTitle = useDebounce(title);
    const debouncedText = useDebounce(text);

    useEffect(() => {
        setText(selectedNote.body);
        setTitle(selectedNote.title);
        setId(selectedNote.id);
    }, [selectedNote])

    const updateBody = (val) => {
        setText(val);
    }

    const updateTitle = (txt) => {
        setTitle(txt);
    }

    // TODO: This updates whenever another note is selected. fix dis
    useEffect(() => {
        noteUpdate(id, 
            {
                title: title,
                body: text
            })
    }, [debouncedTitle,debouncedText]);  

    return (
        <div className={classes.editorContainer}>

        <BorderColorIcon 
            className={classes.editIcon}
        />

        <input
            className={classes.titleInput}
            placeholder='Note title...'
            value={title ? title : ''}
            onChange={(e) => updateTitle(e.target.value)}>
        </input>

        <ReactQuill 
            value={text} 
            onChange={updateBody} 
            theme="snow"
        />

        </div>
    );

}

export default withStyles(styles)(EditorComponent);