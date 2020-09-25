import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import {Divider, Button} from '@material-ui/core';
import SidebarItemComponent from '../sidebaritem/sidebaritem';

const SidebarComponent = ({newNote,selectNote,deleteNote, classes,notes, selectedNoteIndex}) => {
    const [addingNote, setAddingNote] = useState(false);
    const [title, setTitle] = useState(null);

    const _newNote = () => {
        newNote(title);
        setAddingNote(false);
        setTitle(null);
    }

    return (
        <div className={classes.sidebarContainer}>
                <Button 
                    onClick={()=> setAddingNote(!addingNote)}
                    className={classes.newNoteBtn}
                >
                    {addingNote ? 'Cancel' : 'New Note'}
                </Button>
                {
                    addingNote &&
                    <div>
                        <input type='text' 
                        className={classes.newNoteInput}
                        placeholder="Enter Note Title..."
                        onKeyUp={(e) => setTitle(e.target.value)} 
                        />
                        <Button
                            className={classes.newNoteSubmitBtn}
                            onClick={_newNote} 
                        >
                            Save
                        </Button>
                    </div>                
                }

                <List>
                    {
                        notes && notes.map((note, _index)=> (
                                <div key={_index}>
                                    <SidebarItemComponent 
                                        note={note}
                                        index={_index}
                                        selectedNoteIndex={selectedNoteIndex}
                                        selectNote={(n,i) => selectNote(n,i)}
                                        deleteNote={(n) => deleteNote(n)}
                                    />
                                    <Divider />
                                </div>
                        ))
                    }
                </List>
            </div>
    )
}

export default withStyles(styles)(SidebarComponent);