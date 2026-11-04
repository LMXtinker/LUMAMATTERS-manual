@echo off
cd /d "%~dp0"
if not exist node_modules call npm ci
call npm run build
if errorlevel 1 pause & exit /b 1
echo Opening http://localhost:4321/LUMAMATTERS-manual/
call npx astro preview --open
pause
