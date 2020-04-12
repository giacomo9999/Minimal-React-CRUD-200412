import React from "react";

const AddForm = (props) => {
  return (
    <div className="container-inner">
      <h2>Add New Composer</h2>
      <form className="h-form" onSubmit={props.addComposer}>
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
      </form>
    </div>
  );
};

export default AddForm;
