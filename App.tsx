return (
    <div style={{ minHeight: '100vh', background: 'blue', color: 'white', display: 'block' }}>
      <h1 style={{ fontSize: '50px', padding: '20px' }}>
        正在强制显示：测试文字 123
      </h1>
      
      <div style={{ border: '5px solid yellow', margin: '20px', padding: '20px' }}>
        <p>如果你能看到蓝底白字和黄框，说明 React 渲染没问题，是 Tailwind 样式加载失败了。</p>
      </div>

      <Navbar onNavigate={setCurrentView} currentView={currentView} />
      {/* 暂时把其他的先放下面 */}
      <main className="flex-grow">
        {/* ... 原本的代码 ... */}
      </main>
    </div>
  );
