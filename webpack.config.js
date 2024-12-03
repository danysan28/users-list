const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Importa el plugin
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Archivo principal de entrada
  output: {
    filename: "bundle.js", // Nombre del archivo JS generado
    path: path.resolve(__dirname, "dist"), // Carpeta de salida
  },
  mode: "development", // Modo de desarrollo
  module: {
    rules: [
      {
        test: /\.css$/, // Regla para archivos CSS
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: [
      path.resolve(__dirname, "dist"), // Carpeta de salida
      path.resolve(__dirname, "public"), // Carpeta pública
    ],
    open: true, // Abre automáticamente en el navegador
    hot: true, // Activar HMR (recarga automática)
    watchFiles: ["./src/**/*"], // Vigila todos los archivos dentro de src/
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Usar el HTML como plantilla
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/db.json", to: "db.json" }, // Copiar data.json de src a dist/
      ],
    }),
  ],
};
