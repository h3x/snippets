// import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import styles from './styles';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import DeleteIcon from '@material-ui/icons/Delete';
// import { removeHTMLTags } from '../helpers'

// // material ui dialog here

// class SidebarItemComponent extends React.Component {
//     render() {
//         const { note, index, classes, selectedNoteIndex } = this.props; 

//         return (
//             <div key={index}>
//                 <ListItem
//                     className={classes.listItem}
//                     selected={selectedNoteIndex === index}
//                     alignItems='flex-start'
//                 >
//                     <div 
//                         className={classes.textSection}
//                         onClick={() => {this.selectThisNote(note, index)}}
//                     >
//                         <ListItemText 
//                             primary={note.title}
//                             secondary={removeHTMLTags(note.body.substring(0, 30) + '...')}
//                         />
//                     </div>
//                     <DeleteIcon 
//                         onClick={()=> {this.deleteThisNote(note)}}
//                         className={classes.deleteIcon}
//                     />
//                 </ListItem>

//             </div>
//         );
//     }

    
//     selectThisNote = (n, i) => this.props.selectNote(n,i)
//     deleteThisNote = (n) => {
//         if(window.confirm(`Are you sure you wish to delete: ${n.title}`)){
//             this.props.deleteNote(n)
//         }
//     }
// }

// export default withStyles(styles)(SidebarItemComponent);