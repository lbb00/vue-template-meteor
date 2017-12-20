/**
 * 将所有的svg-icons引入
 */
const requireAll = r => r.keys().map(r)
requireAll(require.context('./svg', false, /\.svg$/))
