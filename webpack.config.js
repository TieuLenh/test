const path = require("path");

module.exports = {
  entry: "./frontend/src/index.js", // File đầu vào
  output: {
    path: path.resolve(__dirname, "frontend/public/dist"), // Thư mục output
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // Với file .js và .jsx
        exclude: /node_modules/,
        use: {
          loader: "babel-loader" // Dùng Babel biên dịch
        }
      },
      {
        test: /\.(css)$/,  // Cho phép import CSS
        use: [
            "style-loader", 
            "css-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Load ảnh
        type: "asset/resource"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"] // Import file không cần ghi đuôi
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 3000
  },
  mode: "development", // hoặc "production"
};