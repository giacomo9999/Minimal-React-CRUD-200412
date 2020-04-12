import React from "react";

const ComposerList = (props) => {
  const composerTableData = props.composerData.map((composer) => (
    <tr key={`COMP_${composer.id}`}>
      <td>{composer.id}</td>
      <td>{composer.composerName}</td>
      <td>{composer.nation}</td>
      <td>
        <button onClick={() => props.editComposer(composer)}>Edit</button>
      </td>
      <td>
        <button onClick={() => props.deleteComposer(composer.id)}>
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <div className="container-inner">
      <h2>List Of Composers</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody>{composerTableData}</tbody>
      </table>
    </div>
  );
};

export default ComposerList;
