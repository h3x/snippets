import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../helpers'


const SidebarItemComponent = ({note, index, classes, selectedNoteIndex, selectNote,deleteNote}) => {
    const selectThisNote = (n, i) => selectNote(n,i)
    const deleteThisNote = (n) => {
        if(window.confirm(`Are you sure you wish to delete: ${n.title}`)){
            deleteNote(n)
        }
    }

    return (
        <div key={index}>
            <ListItem
                className={classes.listItem}
                selected={selectedNoteIndex === index}
                alignItems='flex-start'
            >
                <div 
                    className={classes.textSection}
                    onClick={() => {selectThisNote(note, index)}}
                >
                    <ListItemText 
                        primary={note.title}
                        secondary={removeHTMLTags(note.body.substring(0, 30) + '...')}
                    />
                </div>
                <DeleteIcon 
                    onClick={()=> {deleteThisNote(note)}}
                    className={classes.deleteIcon}
                />
            </ListItem>

        </div>
    );

}

export default withStyles(styles)(SidebarItemComponent);