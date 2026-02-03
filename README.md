# Siya Demolitions Projects

I am very sorry for the previous instructions. Let's use a different method that is more direct and should work without any issues.

We will use the built-in terminal to send your code to GitHub.

---

### **Step 1: Open the Terminal in Your Editor**

1.  Look at the top menu bar of your code editor (where you see "File", "Edit", etc.).
2.  Click on **"Terminal"**.
3.  From the dropdown menu that appears, click **"New Terminal"**.

A new panel will open at the bottom of your editor screen. This is your command-line terminal.

---

### **Step 2: Run These Commands**

Copy each command below, one at a time. Paste it into the terminal, and press **Enter**. Wait for each one to finish before doing the next.

1.  Copy and run this command first:
    ```bash
    git add .
    ```

2.  Copy and run this command second:
    ```bash
    git commit -m "Initial commit"
    ```
    *(If this command gives an error about `user.email` or `user.name`, please copy the `git config` commands it tells you to run, run them, and then run the `git commit` command again.)*

3.  Copy and run this final command:
    ```bash
    git push -u origin main
    ```

After the last command finishes, your code will be successfully uploaded to GitHub.

---

### **Step 3: Finish Firebase Setup**

Now, you can go back to the Firebase page ([https://console.firebase.google.com/project/siya-demolitions-projects/apphosting](https://console.firebase.google.com/project/siya-demolitions-projects/apphosting)).

Refresh the page. The error message will be gone. You can then click **"Next"** to finish and get your website link.
