import React from "react";

const EditForm = (props) => {
  return (
    <div className="container-inner">
      <h2>Edit Composer</h2>
      <form className="h-form" onSubmit={props.updateComposer}>
        <label className="h-label">Name</label>
        <input
          className="h-input"
          type="text"
          name="tempComposerName"
          value={props.tempComposerName}
          onChange={props.handleChange}
        />
        <label className="h-label">Nationality</label>
        <input
          className="h-input"
          type="text"
          name="tempNation"
          value={props.tempNation}
          onChange={props.handleChange}
        />
        <br />
        <button>Submit</button>
        <button onClick={props.toggleEditPanel}>Cancel</button>
      </form>
    </div>
  );
};

export default EditForm;
