import React, { useState } from 'react';
import Layout from './components/layout';
import { appData } from './utils/data';

function App() {
  const [data, setData] = useState(appData);

  return <Layout data={data} setData={setData} />;
}

export default App;
