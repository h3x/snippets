import React from 'react';
import './App.css';

import SidebarComponent from './sidebar/sidebar';
import EditorComponent from './editor/editor';

const firebase  = require('firebase');

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: []
    };
  }

  render() {
    return (
    <div className="app-container">
      <SidebarComponent 
        selectedNoteIndex={this.state.selectedNoteIndex}
        notes={this.state.notes}
        deleteNote={this.deleteNote}
        selectNote={this.selectNote}
        newNote={this.newNote}
        />
        { this.state.selectedNote &&
          <EditorComponent
            selectedNote={this.state.selectedNote}      
            selectedNoteIndex={this.state.selectedNoteIndex}
            notes={this.state.notes}
            noteUpdate={this.noteUpdate}
          />
        }

    </div>
    );
  }

  noteUpdate = (id, noteObj) => {
    firebase
      .firestore()
      .collection('notes')
      .doc(id)
      .update({...noteObj, timestamp: firebase.firestore.FieldValue.serverTimestamp()})
  }

  deleteNote = async (note) => {
    const noteIndex = this.state.notes.indexOf(note);
    await this.setState({notes: this.state.notes.filter( n => n !== note)})
    if(this.state.selectedNoteIndex === noteIndex){
      this.setState({selectedNoteIndex: null, selectNote: null});
    }
    else {
      this.state.notes.length > 1 ?
      this.selectNote(this.state.notes[this.state.selectedNoteIndex -1], this.state.selectedNoteIndex -1):
      this.selectNote(this.setState({selectedNoteIndex: null, selectNote: null}));
    }

    firebase
      .firestore()
      .collection('notes')
      .doc(note.id)
      .delete();
  }

  selectNote = (n,i) => {
    this.setState({selectedNoteIndex: i, selectedNote: n});
  }

  newNote = async (title) => {

    const note = {
      title: title,
      body: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }

    const newFromDB = await firebase
    .firestore()
    .collection('notes')
    .add({...note})

    const newID = newFromDB.id;
    await this.setState({notes: [...this.state.notes, note]});
    const newNoteIndex = this.state.notes.indexOf(this.state.notes.filter(n => n.id === newID)[0])
    this.setState({ selectedNote: this.state.notes[this.newNoteIndex], selectedNoteIndex: newNoteIndex});


  }

  componentDidMount = () => {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data['id'] = _doc.id;
          return data;
        });
        // console.log(notes);
        this.setState({notes: notes});
      })

    }
}

export default App;
