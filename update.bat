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

REM Pull with conflict resolution - keep local version
echo 📥 Pulling latest changes from GitHub...
git pull origin main --allow-unrelated-histories --no-commit

if %errorlevel% equ 0 (
    REM If pull succeeded, commit it
    echo ✅ Merged latest changes
    git commit -m "Merged remote changes" > nul 2>&1
) else (
    REM If merge conflict, keep local version
    echo ⚠️  Resolving conflicts - keeping local version...
    git checkout --ours .
    git add .
    git commit -m "Merged remote: kept local version"
)

echo.

REM Push to remote
echo 📤 Pushing changes to GitHub...
git push -u origin master:main

if %errorlevel% equ 0 (
    echo ✅ Successfully pushed to GitHub!
    echo.
    echo Your repository is now sync'd:
    echo 📍 GitHub: https://github.com/moohamedzedan22-alt/derma-care
) else (
    echo ❌ Push failed
)

echo.
echo ✨ Update complete!
echo.
pause
