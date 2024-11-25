import React from 'react';

function Pagination({ page, setPage }) {
  return (
    <div
      style={{
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',   
      }}
    >
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        style={{
          padding: '10px 20px',
          marginRight: '10px',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: page === 1 ? '#ccc' : '#007bff',
          color: 'white',
          cursor: page === 1 ? 'not-allowed' : 'pointer',
        }}
      >
        Anterior
      </button>
      <span style={{ margin: '0 10px', fontSize: '16px', fontWeight: 'bold' }}>
        Página {page}
      </span>
      <button
        onClick={() => setPage((prev) => prev + 1)}
        style={{
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: '#007bff',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        Siguiente
      </button>
    </div>
  );
}

export default Pagination;
