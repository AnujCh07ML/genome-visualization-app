import React from 'react';
import ReactDOM from 'react-dom/client';

const genomeData = {
  name: "Sample Genome",
  sequence: "ATGCGTACGTAGCTAGCTAGCTAGCTAGCTAGCTAGC"
};

const App = () => (
  <div>
    <h1>Genome Visualization App</h1>
    <h2>{genomeData.name}</h2>
    <pre style={{ wordBreak: 'break-all', background: '#f4f4f4', padding: '1em' }}>
      {genomeData.sequence}
    </pre>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);