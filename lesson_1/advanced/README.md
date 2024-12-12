**Чтобы проверить работу скрипта:**
1. Установить python
2. Сделать файл commit-msg.py исполняемым:
    ``` shell
    chmod 744 commit-msg.py
    ```
3. Выполнить файл и передать первым аргументом файл с сообщением коммита:
    ``` shell
    ./commit-msg.py ./good-commit.txt
    ./commit-msg.py ./bad-commit.txt
    ```
**Чтобы скрипт заработал, нужно:**
1. Создать в корневой директории репозитория каталог `hooks/`
    ``` shell
    mkdir hooks
    ```
2. Задать в конфигурации репозитория путь до хуков:
    ``` shell
    git config set core.hooksPath hooks/
    ```
3. Поместить хук в папку "hooks/" и в терминале переименовать его в `commit-msg`
    ``` shell
    mv commit-msg.py commit-msg
    ```