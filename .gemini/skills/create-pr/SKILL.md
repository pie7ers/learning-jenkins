---
name: create-pr
description: Creates a Pull Request using the GitHub CLI (gh).
---

# Create PR Skill

When the user invokes this skill to create a Pull Request:

1. **Verify Tooling**: Ensure that the GitHub CLI (`gh`) is available. If it's not installed or authenticated using MCP, you may need to ask the user to install or authenticate it.
2. **Determine Branch State**: Run `git status` and `git branch --show-current` to ensure the user is on a feature branch (not main/master) and that all changes are committed and pushed.
3. **Formulate PR Details**:
   - Use `git log main..HEAD` or `git log origin/main..HEAD` to gather context about the commits made in this branch.
   - Propose a concise PR title and a descriptive PR body based on these commits.
4. **Propose PR Creation Command**: create PR base on the tamplate `.github/PULL_REQUEST_TEMPLATE.md`
