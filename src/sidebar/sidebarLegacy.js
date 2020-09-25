// import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import styles from './styles';
// import List from '@material-ui/core/List';
// import {Divider, Button} from '@material-ui/core';
// import SidebarItemComponent from '../sidebaritem/sidebaritem';


// class SidebarComponent extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//             addingNote: false,
//             title: null,
//         }
//     }

//     render() {
//         const { notes, classes, selectedNoteIndex} = this.props;
//         return (
//             <div className={classes.sidebarContainer}>
//                 <Button 
//                     onClick={this.newNoteBtnClick}
//                     className={classes.newNoteBtn}
//                 >
//                     {this.state.addingNote ? 'Cancel' : 'New Note'}
//                 </Button>
//                 {
//                     this.state.addingNote ? 
//                     <div>
//                         <input type='text' 
//                         className={classes.newNoteInput}
//                         placeholder="Enter note title..."
//                         onKeyUp={(e) => this.updateTitle(e.target.value)} 
//                         />
//                         <Button
//                             className={classes.newNoteSubmitBtn}
//                             onClick={this.newNote} 
//                         >
//                             Save
//                         </Button>
//                     </div>
//                     : null
                
//                 }


//                 <List>
//                     {
//                         notes && notes.map((note, _index)=> {
//                             return (
//                                 <div key={_index}>
//                                     <SidebarItemComponent 
                                        
//                                         note={note}
//                                         index={_index}
//                                         selectedNoteIndex={selectedNoteIndex}
//                                         selectNote={this.selectNote}
//                                         deleteNote={this.deleteNote}
//                                     />
//                                     <Divider />
//                                 </div>
//                             )
//                         })
//                     }
//                 </List>
//             </div>
//         );
   
//     }

//     newNoteBtnClick = () => {
//         this.setState({title: null, addingNote: !this.state.addingNote})
//     }

//     updateTitle = (txt) => {
//         this.setState({title: txt})
//     }

//     newNote = () => {
//         this.props.newNote(this.state.title);
//         this.setState({title: null, addingNote: false})
//     }

//     selectNote = (n,i) => this.props.selectNote(n,i)

//     deleteNote = (n) => this.props.deleteNote(n)
// }

// export default withStyles(styles)(SidebarComponent);