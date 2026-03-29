@echo off
REM Derma Care - Auto Pull & Push Script
REM This script pulls latest changes and pushes your work

echo.
echo 🔄 Starting Derma Care Update...
echo.

REM First, set up git user if not already configured
git config user.email > nul 2>&1
if %errorlevel% neq 0 (
    echo ⚠️  Setting up git user...
    git config --global user.email "dermacare@example.com"
    git config --global user.name "Derma Care Team"
)

echo.

REM Add all changes first
echo 📝 Adding all changes...
git add .

REM Check if there are changes to commit
git diff --cached --quiet
if %errorlevel% neq 0 (
    echo 💾 Committing changes...
    git commit -m "Update: %date% %time%"
    echo ✅ Changes committed
) else (
    echo 📭 No changes to commit
)

echo.

REM Try to pull with allow-unrelated-histories flag
echo 📥 Pulling latest changes from GitHub...
git pull origin main --allow-unrelated-histories

if %errorlevel% equ 0 (
    echo ✅ Successfully pulled latest changes
) else (
    echo ⚠️  Pull had issues - continuing with push...
)

echo.

REM Push to remote
echo 📤 Pushing changes to GitHub...
git push -u origin master:main

if %errorlevel% equ 0 (
    echo ✅ Successfully pushed to GitHub!
) else (
    echo ❌ Push failed - check your internet and GitHub credentials
)

echo.
echo ✨ Update complete!
pause
