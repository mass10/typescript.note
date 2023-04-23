@ECHO OFF
@SETLOCAL

REM run --diagnose-each-profiles
REM run --diagnose-local-state


CALL yarn ts-node Main.ts %*
