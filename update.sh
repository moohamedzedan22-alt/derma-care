#!/bin/bash

# Derma Care - Auto Pull & Push Script
# This script pulls latest changes and pushes your work

echo "🔄 Starting Derma Care Update..."
echo ""

# Pull latest changes from remote
echo "📥 Pulling latest changes from GitHub..."
git pull origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully pulled latest changes"
else
    echo "⚠️  Pull had issues (this is normal if branch doesn't exist yet)"
fi

echo ""

# Add all changes
echo "📝 Adding all changes..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')"

if [ $? -eq 0 ]; then
    echo "✅ Changes committed"
else
    echo "📭 No changes to commit"
fi

echo ""

# Push to remote
echo "📤 Pushing changes to GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to GitHub!"
else
    echo "❌ Push failed - check your internet and GitHub credentials"
fi

echo ""
echo "✨ Update complete!"
