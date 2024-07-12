import React, { useEffect, useState } from 'react'
import 'handsontable/dist/handsontable.full.min.css';
import Handsontable from 'handsontable/base';
import { registerAllModules } from 'handsontable/registry';
import { HotTable } from '@handsontable/react';

registerAllModules();


const App = () => {

  const [data, setData] = useState([]);

  useEffect(
    () => {
        fetch('//dummyjson.com/products')
        .then(res => res.json())
        .then(data => setData(data.products));
    }
  )
  return (
    <div>
    <HotTable
      data={data}
              rowHeaders={true}
              colHeaders={true}
              height="auto"
              autoWrapRow={true}
              autoWrapCol={true}
              filter={true}
              dropdownMenu={true}
              licenseKey="non-commercial-and-evaluation"
/>

    </div>
  )
}

export default App