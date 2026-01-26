import React from 'react';

const App: React.FC = () => {
  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      background: '#f0f0f0',
      color: '#333'
    }}>
      <h1 style={{ fontSize: '3rem', margin: '0' }}>React 正常运行中！🚀</h1>
      <p style={{ fontSize: '1.5rem' }}>如果你看到了这个页面，说明部署路径和环境都是正确的。</p>
      <div style={{ marginTop: '20px', padding: '10px', border: '2px solid red' }}>
        这是测试文字，用来确认不是样式塌陷导致的问题。
      </div>
    </div>
  );
};

export default App;
