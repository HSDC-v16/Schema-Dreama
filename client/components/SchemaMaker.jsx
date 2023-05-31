import React from 'react';
import SchemaRow from './SchemaRow.jsx';
import SchemaDisplay from './SchemaDisplay.jsx';

const SchemaMaker = ({ kvpArr, schemaFunc, currentDocument }) => {
  console.log(currentDocument.title, 'currentDocument');
  const { title } = currentDocument;
  console.log(title, typeof title);
  return (
  <div id="schemaMaker">
    Schema - {title}
    {console.log('--------------------------------',kvpArr)}
    {console.log('**************', currentDocument.title)}
    {kvpArr.map((ele, index) => (
      <SchemaRow
        schemaObj={ele}
        key={index}
        rowNum={index}
        updateKvpSchema={schemaFunc.updateKvpSchema}
      />
    ))}

    <button onClick={schemaFunc.addRow}>+</button>

    <div id="schemaExporters">
      <button onClick={schemaFunc.saveSchema}>SAVE</button>
      <button onClick={schemaFunc.deleteSchema}>DELETE</button>
    </div>
    <SchemaDisplay kvpArr={kvpArr} currentDocument={currentDocument}/>
  </div>

  )
};

export default SchemaMaker;
