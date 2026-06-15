#!/bin/bash

# Check if inside a Git repository
if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
  echo "Error: Not inside a Git repository."
  exit 1
fi

# Iterate through each commit in the Git history
git log --pretty=format:"%H" | while read commit_hash; do
  echo "Commit: $commit_hash"

  # Show the changes in each commit
  git show --numstat --pretty=format: "$commit_hash" | awk '
    NF == 3 { added += $1; removed += $2; files++ }
    END {
      printf "Files changed: %d\n", files
      printf "Lines added: %d\n", added
      printf "Lines removed: %d\n", removed
    }'
  echo "--------------------"
done
