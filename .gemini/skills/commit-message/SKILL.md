---
name: commit-message
description: Generate a conventional commit message from staged changes.
---


# Commit Message Skill

When the user invokes this skill to generate a commit message:

## Types:

- **feat**: new feature
- **fix**: bug fix
- **docs**: documentation only
- **refactor**: code change that neither fixes a bug nor adds a feature
- **test**: adding or updating tests
- **chore**: build process, dependencies, or tooling changes

## Rules

1. **Check current branch**: Run `git branch --show-current` to see what branch the user is on. if the branch is main or master, create a new branch according to the type of task or changes, in case can not define the type of task or changes, ask the user.
2. **Check Staged Changes**: Run `git diff --cached` to see what changes are ready to be committed.
3. **Handle Empty Stage**: If there are no staged changes, run `git status` to see unstaged changes and suggest that the user stage files first (or offer to run `git add .` if appropriate).
4. **Analyze and Draft**: Analyze the staged changes and draft a commit message that adheres to the **Conventional Commits** specification:
   - Structure: `<type>[optional scope]: <description>`
   - Include an optional body if the changes are complex.
   - Summary line under 50 characters
   - use imperative mood (add not added)
   - No period at the end of the summary
   - Body wrapped at 72 characters
4. **Propose Commit**: Show the generated commit message to the user, and propose running the `git commit -m "..."` command to finalize it.
