## React-typescript-mobx-starter

Данная сборка предназначенна для быстрого старта новых проектов.

Сборку я делал для себя, но если вдруг она вам помогла, кликните на звезду.

## Технологический стек

* [React](https://ru.reactjs.org/) - JS-фреймворк

* [MobX](https://mobx.js.org/README.html) - Стейт-менеджер

  * [Mobx Persist](https://www.npmjs.com/package/mobx-persist) - Сохранение данных в localStorage

* [TypeScript](https://www.typescriptlang.org/) - Типизация

* [Yarn](https://yarnpkg.com/) - Менеджер nodejs-пакетов

### Установка зависимостей

```yarn```

### Запуск локального dev-сервера

```yarn dev```

### Prettier 

Для автоматического форматирования кода используется prettier, конфиг можно поправить в файле .prettierrc

Для работы в продуктах jetbrains нужно установить расширение prettier и в настройках языка JavaScript поставить 
галочку на onSave и указать расширания файлов {**/*,*}.{js,ts,jsx,tsx}

Для vscode [Статья по подключению](https://glebbahmutov.com/blog/configure-prettier-in-vscode/)


## Структура проекта

```pages/``` - страницы

```components/pages/``` - компоненты страниц

```components/common/``` - общие компоненты

```
Компоненты
|-- src/components/
|   |-- common/
|   |-- |-- СommonComponent1/
|   |-- |-- СommonComponent2/
|   |-- |-- СommonComponentN/
|   |-- pages/
|   |-- |-- page1/
|   |-- |-- page2/
|   |-- |-- pageN/

Константы
|-- constans/

Хуки
|-- hooks/

Публичная директория (для статичных файлов)
|-- public/

Стор приложения
|-- src/store/

Стилизация и тема офрмления
|-- styles/

Типизации
|-- types/
```
