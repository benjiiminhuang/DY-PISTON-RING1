import React from 'react';

const App: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', background: 'blue', color: 'white', display: 'block', padding: '20px' }}>
      <h1 style={{ fontSize: '50px' }}>
        React 引擎启动成功！🚀
      </h1>
      <div style={{ border: '5px solid yellow', marginTop: '20px', padding: '20px' }}>
        <p style={{ fontSize: '24px' }}>如果你能看到这个蓝底黄框，说明打包和路径都修好了。</p>
      </div>
    </div>
  );
};

export default App;
