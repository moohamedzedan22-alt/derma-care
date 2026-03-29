#!/bin/bash

# Derma Care - Auto Pull & Push Script
# This script pulls latest changes and pushes your work

echo "🔄 Starting Derma Care Update..."
echo ""

# First, set up git user if not already configured
if ! git config user.email > /dev/null 2>&1; then
    echo "⚠️  Setting up git user..."
    git config --global user.email "dermacare@example.com"
    git config --global user.name "Derma Care Team"
fi

echo ""

# Add all changes
echo "📝 Adding all changes..."
git add .

# Commit changes if there are changes to commit
if ! git diff --cached --quiet; then
    echo "💾 Committing changes..."
    git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')"
    echo "✅ Changes committed"
else
    echo "📭 No changes to commit"
fi

echo ""

# Pull with conflict resolution - keep local version
echo "📥 Pulling latest changes from GitHub..."
git pull origin main --allow-unrelated-histories --no-commit

if [ $? -eq 0 ]; then
    # If pull succeeded, commit it
    echo "✅ Merged latest changes"
    git commit -m "Merged remote changes" > /dev/null 2>&1
else
    # If merge conflict, keep local version
    echo "⚠️  Resolving conflicts - keeping local version..."
    git checkout --ours .
    git add .
    git commit -m "Merged remote: kept local version"
fi

echo ""

# Push to remote (master branch to main on GitHub)
echo "📤 Pushing changes to GitHub..."
git push -u origin master:main

if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "Your repository is now sync'd:"
    echo "📍 GitHub: https://github.com/moohamedzedan22-alt/derma-care"
else
    echo "❌ Push failed"
fi

echo ""
echo "✨ Update complete!"
