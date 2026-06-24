# Arcot Real Estate - Brand Setup & Hosting Guide

Welcome to the branding, codebase, and hosting guide for **Arcot Real Estate**. This project contains a lightweight, responsive, and mobile-friendly single-page website with bilingual (Tamil & English) support, dynamic property filtering, and WhatsApp contact lead redirection.

---

## 📂 Project Folder Structure
All files are stored in the following folder on your computer:
`c:\Users\vishr\Downloads\New folder\New folder\arcot-real-estate\`

Inside this folder, you will find:
- **`index.html`**: Website structure, search engine tags, and fonts.
- **`style.css`**: Styling rules, responsive grids, colors, and layout animations.
- **`script.js`**: Dynamic listing configurations, WhatsApp redirection logic, and contact details.
- **`README.md`**: This guide.

---

## 📧 1. Business Brand Suggestions

### Professional Gmail Name Options:
When creating a business Gmail, aim for names that build credibility and include the location:
1. `arcotrealestateofficial@gmail.com` (Highly Recommended)
2. `arcotrealestate.in@gmail.com`
3. `jayaprakash.arcotrealestate@gmail.com`
4. `info.arcotrealestate@gmail.com`
5. `sales.arcotrealestate@gmail.com`

### GitHub Account Name:
- Use a matching brand handle: `ArcotRealEstate` (or `arcotrealestateofficial`)

### GitHub Repository Name:
- Repository Name: `arcot-real-estate`

---

## 💻 2. Command Line Setup & Git Guide

Follow these steps to upload your website to GitHub using Git.

### Step 2.1: Open Terminal / command prompt
1. Open **Command Prompt** (cmd) or **PowerShell** on your computer.
2. Navigate to your project folder using the `cd` command:
   ```cmd
   cd "C:\Users\vishr\Downloads\New folder\New folder\arcot-real-estate"
   ```

### Step 2.2: Initialize Git and Commit Locally
1. Initialize a new local Git repository:
   ```bash
   git init
   ```
2. Stage all the files for tracking:
   ```bash
   git add .
   ```
3. Commit the files with an initial message:
   ```bash
   git commit -m "Initial commit: Arcot Real Estate launch files"
   ```
4. Rename your default branch to `main`:
   ```bash
   git branch -M main
   ```

### Step 2.3: Connect and Push to GitHub
1. Create a blank repository named `arcot-real-estate` on your GitHub account (`https://github.com/new`).
   > **Note**: Do *not* check the options to add a README, license, or gitignore file (since we already have them).
2. Connect your local folder to your remote GitHub repository (replace `YOUR_GITHUB_USERNAME` with your actual GitHub username):
   ```bash
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/arcot-real-estate.git
   ```
3. Push your files to GitHub:
   ```bash
   git push -u origin main
   ```

---

## 🚀 3. Enable GitHub Pages Hosting (Free Website Hosting)

Once your code is pushed successfully to GitHub, follow these steps to host your site for free:

1. Open your web browser and go to your GitHub repository:
   `https://github.com/YOUR_GITHUB_USERNAME/arcot-real-estate`
2. Click on the **Settings** tab (gear icon at the top right of the repository page).
3. Scroll down the left sidebar menu and click on **Pages** (under the "Code and automation" section).
4. Under the **Build and deployment** section:
   - For **Source**, select **Deploy from a branch**.
   - For **Branch**, select **main** (and leave the folder as `/ (root)`).
   - Click the **Save** button.
5. Wait 1–2 minutes, then refresh the page.
6. A box will appear at the top of the Pages settings showing your live URL:
   👉 **`https://YOUR_GITHUB_USERNAME.github.io/arcot-real-estate/`**

---

## ✏️ 4. Editing Contacts or Properties
To update your phone numbers, agent name, or add new properties, open **`script.js`** in any text editor (like Notepad, VS Code) and update the `CONFIG` object at the top. The website will automatically update to reflect your changes!
