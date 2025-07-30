#!/bin/bash

# Deployment script for Muhammad Hassan Ali Portfolio
echo "🚀 Deploying Portfolio to GitHub..."

# Initialize git if not already done
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
fi

# Add remote if not exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Adding GitHub remote..."
    git remote add origin https://github.com/HassanAliMAli/testingportfolios.git
fi

# Stage all files
echo "📦 Staging files..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Add cyberpunk portfolio with dedicated skill sections

- Created individual sections for each core competency
- Full Stack & Web Development section
- Data Science & Analysis section  
- AI & Prompt Engineering section
- Trading & Market Mastery section
- Tech & Support section
- Gaming & Competitive Strategy section
- Enhanced cyberpunk design with animations
- Interactive skill cards with progress bars
- Responsive navigation system"

# Push to GitHub
echo "🌐 Pushing to GitHub..."
git push -u origin main

echo "✅ Portfolio deployed successfully!"
echo "🔗 Repository: https://github.com/HassanAliMAli/testingportfolios"