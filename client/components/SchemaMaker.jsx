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
      <button onClick={() => {
        schemaFunc.saveSchema
        const fetchData = async () => {
          try {
            const response = await fetch("/getalldocuments", {
              method: "GET",
              headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
                 'Content-type': 'application/json; charset=UTF-8',
              },
              mode: 'cors'
        
            });
            const result = await response.json();
            console.log('result in pastprojects', result);
            setData(result);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        fetchData();
      }
    }>SAVE</button>
      <button onClick={schemaFunc.deleteSchema}>DELETE</button>
    </div>
    <SchemaDisplay kvpArr={kvpArr} currentDocument={currentDocument}/>
  </div>

  )
};

export default SchemaMaker;
