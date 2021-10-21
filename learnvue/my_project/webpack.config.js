const path = require("path");
const base = path.join(__dirname, "..");

module.exports = {
  
  mode: "production",
  entry: path.resolve(base, "src", "index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(base, "dist")
  },
  resolve: {
    extensions: [".js", ".jsx"],
    // 配置相对路径
    alias: {
        "@/src":path.resolve("src"),
        "@/public":path.resolve("public"),
      },
  },
  module: {
    rules: [
    ]
  },
  plugins: [
  ]
};