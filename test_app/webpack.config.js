const path = require('path'); // модуль NodeJs позволит работать с путями в текущей ОС
const HTMLPlugin = require('html-webpack-plugin'); // подключаем пакет
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // для отчистки папки (build) со сборкой подключим пакет
                                                                     // забираем класс у объекта, который импортируется и установливаем этот пакет

module.exports = {
   // входной файл приложения
   entry: './src/app.js',
   // здесь указывается во что в итоге webpack превратит написаный JS-код.
   output: {                
      filename: 'bundle[chunkhash].js', // для того, чтобы bundle.js не хэшировался добавим [chunkhash]
      // устанавливаем путь к файлу куда будут собираться все соединенные JS-файлы
      path: path.resolve(__dirname, 'build'),
   },
   // настройка devServer
   devServer: {
      port: 3000,
   },
   // подключаем плагины
   plugins: [
      new HTMLPlugin({
         template: './src/index.html',
      }),
      new CleanWebpackPlugin(),
   ],
}