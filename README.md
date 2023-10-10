


# Beginner-Friendly-Contribution

[![Beginner-Friendly Contribution](https://img.shields.io/badge/Visit-Beginner--Friendly%20Contribution-green?style=for-the-badge&logo=appveyor)](https://beginner-friendly-contribution.netlify.app/)

Welcome to **Beginner-Friendly-Contribution**: Your gateway to open-source. We offer accessible tasks, a friendly community, and learning opportunities. Join us to start your open-source journey! 🚀🌟🤗

## Repository Link: [Beginner-Friendly-Contribution](https://github.com/jobayermannan/Beginner-friendly-contribution)


## Introduction 📚

This repository is designed to help beginners make their first contribution to open source projects. If you're new to open source and want to contribute to this project, follow these steps to get started. 🌈

## How to Contribute

### Step 1: Fork and Clone the Repository 🍴

1. Fork this repository by clicking the "Fork" button at the top right corner of the page. 🍽️
2. Copy the URL of your forked repository. 🔗
3. Open your terminal and use the git clone command to clone the repository to your local machine using the copied URL. 💻

#### Step 2: Update the "heros.md" File ✍️

1. Navigate to the root of the cloned repository. 📂
2. Open the "heros.md" file in your text editor. 📝
3. Find the last `<td>` content and copy the data within the `<td>` element, including the `<td>` tag itself.

   Example:
   ```html
   <td>
       <!-- Your GitHub Avatar Image -->
       <img src="https://github.com/your-username.png" alt="Your Name" width="100px" height="100px">
   
       <!-- Your GitHub Profile Link -->
       <a href="https://github.com/your-username">Your Name</a>
   </td>
4. Paste the copied `<td>` tag directly underneath the last one (you can use ALT+SHIFT+down arrow for this). 🔄
5. Modify the information within this new `<td>` tag to match your own GitHub profile. Update the `<a>` tag, image tag, and name as needed. ✨
   
   Note: If you see four existing `<td>` tags under one `<tr>` tag, you cannot add another `<td>` within the same `<tr>`. In this case, create a new `<tr>` tag and add your desired `<td>` within it. 🚧

### Step 3: Update the Contributors Array 📄

1. Navigate to the "script" folder and open the "script.js" file. 📁
2. Inside the "contributors" array, you will find a list of contributors. Copy the last object in the array. 📋
3. Paste the copied object at the end of the array. 🚶
Here is an example: `{ name: 'jobayermannan', github: 'https://api.github.com/users/jobayermannan' }`

4. Replace the "name" field with your GitHub username and the "github" field with your GitHub URL. 🌐

### Step 4: Commit and Push Your Changes 🚢

1. In your terminal (inside the repository folder), initialize a Git repository using the command `git init`. 🔄
2. Add your changes to the Git staging area with `git add .`. ➕
3. Create a commit with a meaningful message, for example: `git commit -m "Added my first contribution"`. 📦
4. Push your changes to your forked repository using `git push`. 🚀

### Step 5: Create a Pull Request 🔄

1. Go to your forked repository on GitHub. 🌐
2. Click the "New Pull Request" button. 🔄
3. Review your changes, provide a descriptive title and comment if necessary, then click "Create Pull Request". 📤

## Congratulations! 🎉

You have successfully made your first contribution to the "beginner friendly-contribution" repository. If you encounter any difficulties or have questions, feel free to reach out to us at jobayermannan777@gmail.com. For a more detailed tutorial, you can refer to this [tutorial link](https://example.com/tutorial) for better understanding. 🙌


## Encouraging Improvement 📈 
We encourage contributors to not only make their first contribution but also to actively participate in the improvement of this repository. You can:

   1. **Suggest Enhancements:** Share your ideas for improving the 
    project in the Discussions section.
   3. **Report Bugs:** If you come across any issues or bugs, report 
   them in the Issues section.
   5. **Review and Comment:** Participate in the review process of   other contributions and provide constructive feedback.

Happy contributing! 🌟👏
