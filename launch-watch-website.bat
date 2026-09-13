@echo off
title Meridian Flux - Watch Website
cd /d "C:\Users\hp\Desktop\Websites\watch website\premium-watch-landing-page"

echo =======================================================
echo  Meridian Flux - Premium Watch Landing Page
echo  Starting local server and opening browser...
echo =======================================================
echo.
echo Project: %CD%
echo.

where node >nul 2>nul
if %errorlevel% neq 0 goto :no_node

if exist "node_modules" goto :skip_install
echo [1/2] Installing dependencies - first run only, please wait...
call npm install
if %errorlevel% neq 0 goto :install_fail
echo.
:skip_install
echo [1/2] Dependencies ready.

echo [2/2] Starting Vite dev server on http://localhost:5173/
echo Browser will open automatically. Keep this window open.
echo Press Ctrl+C to stop the server.
echo.

call npm run dev -- --port 5173 --open --host localhost
echo.
echo Server stopped. Press any key to close this window.
pause >nul
goto :eof

:no_node
echo [ERROR] Node.js not found. Please install Node.js LTS from https://nodejs.org/
pause
exit /b 1

:install_fail
echo [ERROR] npm install failed. Check your internet connection and try again.
pause
exit /b 1
