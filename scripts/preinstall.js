// 如果获取到npm命令不是npm安装或者为空字符串给出提示并退出执行，process是Node的一个全局对象
// 感兴趣的话可以去了解一下
if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(
    `\u001b[33mThis repository requires using pnpm as the package manager ` +
      ` for scripts to work properly.\u001b[39m\n`,
  )
  process.exit(1)
}
