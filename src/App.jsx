import { useState } from 'react';
import symbols from './assets/symbols.json';
import SymbolGrid from './SymbolGrid';

function App() {
  const [query, setQuery] = useState('');
  const filtered = symbols.filter(
    s => s.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ background: '#222', minHeight: '100vh', color: '#fff' }}>
      <h1 style={{ textAlign: 'center' }}>SF Symbols Search</h1>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <input
          type="text"
          placeholder="Search symbols..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{
            padding: '10px',
            borderRadius: '8px',
            border: 'none',
            width: '300px',
            fontSize: '16px'
          }}
        />
      </div>
      <SymbolGrid symbols={filtered} />
    </div>
  );
}

export default App;
