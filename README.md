# vue-test project

## Тестовое задание для компании [Platrum](https://platrum.ru/)

Данное миниприложение содержит таблицу со списком сотрудников. В таблице предусмотрена вложенная структура, чтобы
создать иерархию между подчиненным и начальником.

Пользователь может самостоятельно добавить человека в список, указав обязательное имя и номер телефона человека.
Кроме того, для нового сотрудника можно указать начальника, если это необходимо.

Все данные из таблицы сохраняются в localStorage. Так что, после перезагрузки страницы данные не пропадают.

Для удобства тестирования добавлена кнопка, при помощи которой можно установить тестовые данные с тремя уровнями вложенности.

Проект выполнен на vueJs второй версии, для хранения информации используется VueX.
Сторонних библиотек используется по-минимуму.
1. vue fragment для обхода ограничения на обязательный родительский контейнер для реализации вложенности таблицы
2. Vue mask для корректности ввода данных при создании нового пользователя

Порядок запуска проекта
1. Git clone https://github.com/rngqd/platrum
2. cd vue-test
3. npm install
4. npm run dev
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/)
and [docs for vue-loader](http://vuejs.github.io/vue-loader).
