const mountTarget = document.querySelector('#yaji-app')

async function mountYaji() {
  try {
    const [{ createApp }, { default: YajiApp }] = await Promise.all([
      import('vue'),
      import('./YajiApp.vue'),
      import('../style.css'),
      import('./style.css'),
    ])

    createApp(YajiApp).mount(mountTarget)
  } catch (error) {
    console.error('Failed to load Poetry Gathering:', error)
    mountTarget.innerHTML = `
      <main class="yaji-load-error" role="alert">
        <span>诗</span>
        <h1>诗趣雅集暂未展开</h1>
        <p>页面资源加载失败，请检查网络后重试。</p>
        <button type="button" onclick="window.location.reload()">重新加载</button>
      </main>
    `
  }
}

mountYaji()
