const path = require('path'); // модуль NodeJs позволит работать с путями в текущей ОС

module.exports = {
   // входной файл приложения
   entry: './src/app.js',
   // здесь указывается во что в итоге webpack превратит написаный код.
   output: {                
      filename: 'bundle.js',
      // устанавливаем путь к файлу куда будут собираться все соединенные JS-файлы
      path: path.resolve(__dirname, 'build'),
   },
   // настройка devServer
   devServer: {
      port: 3000,
   },
}