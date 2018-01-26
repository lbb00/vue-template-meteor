/* 引入所有的svg */
const requireAll = r => r.keys().map(r)
requireAll(require.context('./svg', false, /\.svg$/))
