@echo off
REM Derma Care - Auto Pull & Push Script
REM This script pulls latest changes and pushes your work

echo.
echo 🔄 Starting Derma Care Update...
echo.

REM Pull latest changes from remote
echo 📥 Pulling latest changes from GitHub...
git pull origin main

if %errorlevel% equ 0 (
    echo ✅ Successfully pulled latest changes
) else (
    echo ⚠️  Pull had issues (this is normal if branch doesn't exist yet)
)

echo.

REM Add all changes
echo 📝 Adding all changes...
git add .

REM Commit changes
echo 💾 Committing changes...
git commit -m "Update: %date% %time%"

if %errorlevel% equ 0 (
    echo ✅ Changes committed
) else (
    echo 📭 No changes to commit
)

echo.

REM Push to remote
echo 📤 Pushing changes to GitHub...
git push origin main

if %errorlevel% equ 0 (
    echo ✅ Successfully pushed to GitHub!
) else (
    echo ❌ Push failed - check your internet and GitHub credentials
)

echo.
echo ✨ Update complete!
pause
