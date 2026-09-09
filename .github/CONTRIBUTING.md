# Contributing to SideQuest

This project uses a simple branch-and-pull-request workflow.

The goal is to keep `main` stable while allowing everyone to work independently on features, fixes, documentation, and other tasks.

---

## Quick Reference

```bash
git checkout main
git pull
git checkout -b feature/my-feature

# make changes

git add .
git commit -m "Describe your change"
git push -u origin feature/my-feature
```

Then open a pull request on GitHub from your branch into `main`.

---

## 1. Get the Latest Version of the Project

Before starting new work, make sure your local copy of `main` is up to date.

```bash
git checkout main
git pull
```

This helps reduce merge conflicts and ensures you are starting from the latest version of the project.

---

## 2. Create a New Branch

Do not work directly on `main`.

Create a new branch for the task you are working on.

```bash
git checkout -b feature/user-login
```

Use a branch name that clearly describes the work being done.

Recommended prefixes:

- `feature/` — new features
- `fix/` — bug fixes
- `docs/` — documentation changes
- `refactor/` — restructuring or cleanup without changing behavior
- `test/` — adding or updating tests

Examples:

```text
feature/user-login
feature/recommendation-page
fix/navbar-overflow
docs/update-readme
refactor/api-routes
```

Keep each branch focused on one task whenever possible.

---

## 3. Make Your Changes

Work normally within your branch.

You can check which files have been modified with:

```bash
git status
```

You can also review your changes before committing:

```bash
git diff
```

Try to avoid making unrelated changes in the same branch.

For example, a branch for fixing the navigation bar should not also contain unrelated backend changes.

---

## 4. Test Your Changes

Before committing or opening a pull request, verify that your changes work as expected.

Depending on the part of the project you are working on, this may include:

- Running the application locally
- Testing the feature manually
- Running automated tests
- Checking for console errors
- Checking responsive layouts
- Verifying links and navigation
- Confirming existing functionality still works

Do not open a pull request for code that you already know is broken unless the PR is intentionally being opened as a draft.

---

## 5. Stage Your Changes

Once your changes are ready, stage the files you want to commit.

To stage all modified files:

```bash
git add .
```

To stage a specific file:

```bash
git add path/to/file
```

Check what is staged:

```bash
git status
```

---

## 6. Commit Your Changes

Create a commit with a short, descriptive message.

```bash
git commit -m "Add user login form"
```

Good commit messages clearly explain what changed.

Examples:

```text
Add user registration form
Fix mobile navigation overflow
Update project setup instructions
Refactor authentication middleware
Add validation to email signup form
```

Avoid vague commit messages such as:

```text
changes
stuff
fix
update
working version
```

Try to keep each commit focused on one logical change.

---

## 7. Push Your Branch

The first time you push a new branch, use:

```bash
git push -u origin feature/user-login
```

Replace `feature/user-login` with your actual branch name.

After the branch has been pushed once, you can usually use:

```bash
git push
```

---

## 8. Open a Pull Request

After pushing your branch, open a pull request on GitHub.

1. Open the SideQuest repository on GitHub.
2. Click **Pull requests**.
3. Click **New pull request**.
4. Set the base branch to:

```text
main
```

5. Select your branch as the compare branch.
6. Fill out the pull request template.
7. Request a review.
8. Submit the pull request.

Your pull request should briefly explain:

- What changed
- Why the change was made
- How the change was tested
- Any relevant notes, screenshots, or limitations

Do not merge your own pull request unless instructed to do so.

---

## 9. Respond to Review Feedback

A reviewer may request changes before approving the pull request.

If changes are requested, make the changes locally on the same branch.

Then stage, commit, and push them:

```bash
git add .
git commit -m "Address pull request feedback"
git push
```

You do not need to create a new pull request.

The existing pull request will automatically update when new commits are pushed to the branch.

---

## 10. Keep Your Branch Updated

If `main` changes while you are still working on your branch, update your local `main`:

```bash
git checkout main
git pull
```

Then return to your branch:

```bash
git checkout feature/user-login
```

Merge the latest `main` into your branch:

```bash
git merge main
```

If Git reports merge conflicts, resolve them before continuing.

If you are unsure how to resolve a conflict, ask another team member before making changes you are uncertain about.

---

## 11. After Your Pull Request Is Merged

Once your pull request has been merged, switch back to `main`:

```bash
git checkout main
git pull
```

You can then delete your local feature branch:

```bash
git branch -d feature/user-login
```

If the branch was also deleted on GitHub, you can clean up old remote references with:

```bash
git fetch --prune
```

---

## Pull Request Guidelines

Before submitting a pull request:

- Make sure the project runs locally
- Test your changes
- Review your own code
- Remove unnecessary debugging output
- Remove commented-out code that is no longer needed
- Confirm no secrets or credentials were committed
- Make sure the PR only contains changes related to its intended task
- Provide a clear summary of the changes

Small and focused pull requests are easier to review than large pull requests containing many unrelated changes.

---

## General Git Guidelines

### Do Not Commit Directly to `main`

All development work should happen on a separate branch and be merged through a pull request.

### Pull Before Starting New Work

Always begin new work from the latest version of `main`.

```bash
git checkout main
git pull
```

### Keep Branches Focused

A branch should usually represent one feature, fix, or task.

### Use Clear Names

Prefer:

```text
feature/user-profile
fix/login-validation
docs/setup-guide
```

Avoid:

```text
test
new
spencer-branch
stuff
final-final
```

### Use Clear Commit Messages

Describe what the commit actually changes.

Prefer:

```text
Add password validation
```

over:

```text
Fix stuff
```

---

## Security

Never commit sensitive information to the repository.

This includes:

- Passwords
- API keys
- Access tokens
- Private keys
- Database credentials
- `.env` files containing secrets

Use environment variables for sensitive configuration.

A local file may look like:

```text
.env
```

while a safe example file may be committed as:

```text
.env.example
```

The example file should contain variable names but no real credentials.

Example:

```env
DATABASE_URL=
API_KEY=
```

---

## Project Structure

The repository contains multiple applications within the `apps` directory.

```text
.
├── apps/
│   ├── backend/
│   ├── marketing/
│   └── web/
├── docs/
├── .github/
├── .gitignore
├── CONTRIBUTING.md
└── README.md
```

Each application may contain its own README with application-specific setup instructions.

---

## When to Ask Before Making Changes

Check with the team before making large changes involving:

- Major architecture decisions
- Changing the project's primary frameworks
- Replacing major dependencies
- Database schema redesigns
- Authentication architecture
- Large directory restructures
- Deployment infrastructure
- Breaking API changes

Small implementation decisions generally do not require prior approval.

When in doubt, create an issue or ask the team before beginning a large change.

---

## Need Help?

If you are unsure about Git, GitHub, merge conflicts, or the project structure, ask before forcing a change or deleting work.

It is always better to ask than to accidentally overwrite another team member's work.