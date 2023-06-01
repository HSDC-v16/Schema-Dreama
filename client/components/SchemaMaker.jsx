import React from 'react';
import SchemaRow from './SchemaRow.jsx';
import SchemaDisplay from './SchemaDisplay.jsx';

const SchemaMaker = ({ kvpArr, schemaFunc, currentDocument }) => {
  //console.log(currentDocument.title, 'currentDocument');
  const { title } = currentDocument;
  //console.log(title, typeof title);
  return (
    <div id="schemaMaker">
      Schema - {title}
      {kvpArr.map((ele, index) => (
        <SchemaRow
          schemaObj={ele}
          key={index}
          rowNum={index}
          updateKvpSchema={schemaFunc.updateKvpSchema}
        />
      ))}
      <div id="editRows">
        <button title="add row" onClick={schemaFunc.addRow}>
          +
        </button>
        <button title="minus row" onClick={schemaFunc.minusRow}>
          -
        </button>
      </div>
      <SchemaDisplay kvpArr={kvpArr} currentDocument={currentDocument} />
      <div id="schemaExporters">
        <button onClick={() => {
          schemaFunc.saveSchema();
          }}>SAVE</button>
        <button id="delete" onClick={() => {
          schemaFunc.deleteSchema();
          }}>DELETE</button>
        {/* <button onClick={schemaFunc.saveSchema}>SAVE</button>
        <button id="delete" onClick={schemaFunc.deleteSchema}>DELETE</button> */}
      </div>
    </div>
  );
};

export default SchemaMaker;
