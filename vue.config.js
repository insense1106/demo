const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "/",
  lintOnSave: true, // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false, // 开启 CSS source maps?
  css: { sourceMap: false },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@c", resolve("src/components"))
      .set("@v", resolve("src/view"))
      .set("@a", resolve("src/assets"));
  }
};
