@SETLOCAL
@DEL /S /Q dist
@CALL yarn install
@CALL yarn tsc
