# Hostinger setup – step by step

Use this guide to get **Like / Love reactions** and the **Stats.json** backend working on Hostinger.

---

## Step 1: Log in to Hostinger

1. Go to **https://www.hostinger.com** and log in.
2. Open **hPanel** (your hosting control panel).

---

## Step 2: Upload your site files

1. In hPanel, click **Files** → **File Manager** (or **Website** → **File Manager**).
2. Open **public_html** (this is your website root).
   - If your site lives in a subfolder (e.g. for testing), open that folder instead.
3. Upload your full project so the structure looks like this:
   ```
   public_html/
   ├── api/
   │   └── reaction.php
   ├── article/
   │   ├── JSON/
   │   │   └── Stats.json
   │   ├── assets/
   │   └── ...
   ├── includes/
   ├── index.php
   └── ... (all other files and folders)
   ```
4. Make sure **api/reaction.php** and **article/JSON/Stats.json** are present. If **Stats.json** is missing, create an empty file there and name it **Stats.json** (you can put `{}` inside).

---

## Step 3: Set permissions so the server can write to Stats.json

1. In **File Manager**, go to **public_html** (or your site folder).
2. Open the **article** folder.
3. Open the **JSON** folder.
4. Find **Stats.json**.
5. **Right‑click** **Stats.json** → choose **Permissions** or **Change permissions**.
6. Set the numeric value to **664**:
   - If you see checkboxes: Owner = Read + Write, Group = Read + Write, Others = Read.
   - If you type a number, enter **664**.
7. Click **Save** or **Change**.
8. (Optional) Right‑click the **JSON** folder itself → **Permissions** → set to **775** and save. This helps the server write files in that folder.

---

## Step 4: Check that the API URL works

1. Open a browser.
2. Go to: **https://yourdomain.com/api/reaction.php**  
   - Replace **yourdomain.com** with your real domain (e.g. **top2tenasia.xyz**).
   - If your site is in a subfolder (e.g. **top2tenasia.xyz/Top2TenAsia-Dev/**), use:  
     **https://yourdomain.com/Top2TenAsia-Dev/api/reaction.php**
3. You should see something like: **{"like":0,"love":0}** (or numbers if you already have reactions).  
   - If you see **404** or “File not found”, go back to Step 2 and confirm **api/reaction.php** is in the correct folder (same level as **public_html** or your site root).

---

## Step 5: Set PHP version (optional but recommended)

1. In hPanel, go to **Advanced** → **PHP Configuration** (or **Website** → **PHP Configuration**).
2. Select **PHP 7.4** or **8.0 / 8.1**.
3. Save.

---

## Step 6: Test Like / Love on the site

1. Open any Top 10 article on your live site (e.g. the actors or actresses list).
2. Click **Like** or **Love**.
3. The icon should turn **blue** (Like) or **red** (Love) and the number should increase.
4. Click the same icon again; it should **untick** and the number should decrease.
5. Refresh the page; the reaction should still be there (or gone if you unticked), and the count should match.

---

## If something doesn’t work

| Problem | What to do |
|--------|-------------|
| **404 on api/reaction.php** | Check that the **api** folder and **reaction.php** are inside **public_html** (or your site root). URL must match the folder structure. |
| **Like/Love count doesn’t change** | Set **Stats.json** to **664** and **JSON** folder to **775** again. Clear browser cache and try in a private/incognito window. |
| **“Permission denied” or blank JSON** | Make sure **article/JSON** and **Stats.json** permissions are **775** and **664** (or try **666** for the file only). |
| **Reaction doesn’t stay after refresh** | Check that the cookie is set (browser dev tools → Application → Cookies). Ensure you’re using **https** if your site is HTTPS. |

---

## Quick checklist

- [ ] Logged into Hostinger hPanel  
- [ ] Uploaded **api/reaction.php** and **article/JSON/Stats.json**  
- [ ] **Stats.json** permissions = **664**  
- [ ] **article/JSON** folder permissions = **775**  
- [ ] **yourdomain.com/api/reaction.php** shows `{"like":0,"love":0}` (or with numbers)  
- [ ] PHP 7.4 or 8.x selected  
- [ ] Like/Love tested on a live article  

After these steps, the Hostinger backend for reactions is set up.
