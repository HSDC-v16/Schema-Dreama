import React from 'react';

const SchemaDisplay = ({ kvpArr, currentDocument }) => {
  // console.log('-----------------', kvpArr)
  
  let schemaArr = [`const ${currentDocument.title} = new Schema ({ `];
  for (const ele of kvpArr) {


    const tempLine = 
      `  ${ele.name}: { type: ${ele.type}, require: ${ele.require ? 'true' : 'false'} ${ele.minmax.string!='null' ? `, ${ele.minmax.string}: ${ele.minmax.value}` : `${``.trim()}`} ${ele.default.value!=`null` ? `, ${ele.default.value}: ${ele.default.placeholder}` : `${``.trim()}`} },` 

    
     ;




    schemaArr.push(tempLine);
  }
  schemaArr.push('});');
  //console.log('schemaArr', schemaArr)
  const schemaStr = schemaArr.join('\n');
  return (
    <div className='codeDiv'>
      <pre>
        <code>{schemaStr}</code>
      </pre>
      <button onClick={() => {
        //console.log('copying text');
        let copyText = document.querySelector('pre');
        // copyText.select();
        //console.log(copyText.innerHTML);
        navigator.clipboard.writeText(copyText.innerText);
      }}>copy!</button>
      <br/>
    </div>

  );
};

export default SchemaDisplay;

