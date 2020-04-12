import React, { Component } from "react";
import "./App.css";

import ComposerList from "./ComposerList";
import EditForm from "./EditForm";
import AddForm from "./AddForm";

class App extends Component {
  state = {
    runningIdValue: 5,
    editPanelOpen: false,
    tempId: null,
    tempComposerName: "",
    tempNation: "",

    composerData: [
      { id: 1, composerName: "Gustav Holst", nation: "England" },
      { id: 2, composerName: "Arnold Schoenberg", nation: "Germany" },
      { id: 3, composerName: "Bela Bartok", nation: "Hungary" },
      { id: 4, composerName: "Arvo Part", nation: "Estonia" },
      { id: 5, composerName: "Philip Glass", nation: "USA" },
    ],
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleEditPanel = () => {
    this.setState({
      editPanelOpen: !this.state.editPanelOpen,
      tempComposerName: "",
      tempNation: "",
    });
  };

  addComposer = (e) => {
    e.preventDefault();
    console.log(`addComposer...${this.state}`);
    const newComposer = {
      id: this.state.runningIdValue,
      composerName: this.state.tempComposerName,
      nation: this.state.tempNation,
    };

    this.setState({
      runningIdValue: this.state.runningIdValue + 1,
      tempComposerName: "",
      tempNation: "",
      composerData: [...this.state.composerData, newComposer],
    });
  };

  editComposer = (composer) => {
    this.setState({ editPanelOpen: true });
    this.setState({
      tempId: composer.id,
      tempComposerName: composer.composerName,
      tempNation: composer.nation,
    });
  };

  updateComposer = (e) => {
    e.preventDefault();

    const updatedComposer = {
      id: this.state.tempId,
      composerName: this.state.tempComposerName,
      nation: this.state.tempNation,
    };

    const updatedComposerData = this.state.composerData.map((composer) =>
      composer.id === updatedComposer.id ? updatedComposer : composer
    );

    this.setState({
      composerData: updatedComposerData,
    });
    this.toggleEditPanel();
  };

  deleteComposer = (id) => {
    this.setState({
      composerData: this.state.composerData.filter(
        (composer) => composer.id !== id
      ),
    });
  };

  render() {
    return (
      <div>
        <h1>20th Century Composers</h1>
        <ComposerList
          composerData={this.state.composerData}
          editComposer={this.editComposer}
          deleteComposer={this.deleteComposer}
        />
        {this.state.editPanelOpen ? (
          <EditForm
            tempComposerName={this.state.tempComposerName}
            tempNation={this.state.tempNation}
            toggleEditPanel={this.toggleEditPanel}
            handleChange={this.handleChange}
            updateComposer={this.updateComposer}
          />
        ) : (
          <AddForm
            tempComposerName={this.state.tempComposerName}
            tempNation={this.state.tempNation}
            handleChange={this.handleChange}
            addComposer={this.addComposer}
          />
        )}
      </div>
    );
  }
}

export default App;
