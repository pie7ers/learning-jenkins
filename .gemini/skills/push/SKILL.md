---
name: push
description: Pushes local commits to the remote repository.
---

# Push Skill

When the user invokes this skill to push changes:

## Rules

1. **No Main** : Never push to main or master branch
2. **Check Git Status**: Propose running `git status` to verify current branch and check if there are unpushed commits.
3. **Handle Uncommitted Changes**: If there are unstaged or uncommitted changes, gently check with the user if they'd like to commit those first, referring them to the `commit-message` skill if needed.
4. **Determine Branch**: Determine the current branch name (e.g., via `git branch --show-current`).
5. **Propose Push**: Propose executing `git push origin <current-branch>`. If the branch hasn't been pushed before, propose `git push -u origin <current-branch>`.
