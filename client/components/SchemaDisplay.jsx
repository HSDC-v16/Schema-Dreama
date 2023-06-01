import React, {useEffect} from 'react';

const SchemaDisplay = ({ kvpArr, currentDocument }) => {
  // console.log('-----------------', kvpArr)
  
  let schemaArr = [`const ${currentDocument.title} = new Schema ({ `];
  for (const ele of kvpArr) {


    const tempLine = 
      `  ${ele.name}: { type: ${ele.type}, require: ${ele.require ? 'true' : 'false'} ${ele.minmax.string!='null' ? `, ${ele.minmax.string}: ${ele.minmax.value}` : ``} ${ele.default.value!=`null` ? `, ${ele.default.value}: ${ele.default.placeholder}` : ``} },` 

    
     ;




    schemaArr.push(tempLine);
  }
  schemaArr.push('});');
  console.log('schemaArr', schemaArr)
  const schemaStr = schemaArr.join('\n');
  return (
    <div className='codeDiv'>
      <pre>
        <code>{schemaStr}</code>
      </pre>
      <button className='copyBtn' onClick={(e) => {
        console.log('copying text');
        let copyText = document.querySelector('pre');
        let codeDiv = document.querySelector('.codeDiv');
        // copyText.select();
        // console.log(copyText.innerText);
        navigator.clipboard.writeText(copyText.innerText);
        e.target.innerText = 'copied!'
        setTimeout(() => e.target.innerText = 'copy', 1000)
      }}>copy</button>
      <br/>
    </div>

  );
};

export default SchemaDisplay;

