import React from 'react';

const SchemaDisplay = ({ kvpArr, currentDocument }) => {
  // console.log('-----------------', kvpArr)
  
  let schemaArr = [`const ${currentDocument.title} = new Schema ({ `];
  for (const ele of kvpArr) {
    const tempLine = `    ${ele.name}: {type:${ele.type}, require:${
      ele.require ? 'true' : 'false'
    }},`;
    schemaArr.push(tempLine);
  }
  schemaArr.push('});');
  const schemaStr = schemaArr.join('\n');
  return (
    <div>
      <code>{schemaStr}</code>
    </div>
  );
};

export default SchemaDisplay;
