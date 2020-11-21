@SETLOCAL

@CALL yarn tsc
@CALL yarn node dist\main.js
