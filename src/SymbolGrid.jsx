function SymbolGrid({ symbols }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        gap: '20px',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '20px'
      }}
    >
      {symbols.map((s, i) => (
        <div
          key={i}
          style={{
            background: '#333',
            borderRadius: '12px',
            padding: '12px',
            textAlign: 'center',
            boxShadow: '0 2px 8px #0004'
          }}
        >
          <img
            src={s.img}
            alt={s.name}
            style={{ width: '48px', height: '48px', marginBottom: '8px' }}
            loading="lazy"
          />
          <div style={{ fontSize: '14px', wordBreak: 'break-all' }}>{s.name}</div>
        </div>
      ))}
    </div>
  );
}

export default SymbolGrid;
