#!/usr/bin/env bash
input=$(cat)

cwd=$(echo "$input" | jq -r '.workspace.current_dir // .cwd // "unknown"')
model=$(echo "$input" | jq -r '.model.display_name // "unknown"')
used=$(echo "$input" | jq -r '.context_window.used_percentage // empty')
five_h=$(echo "$input" | jq -r '.rate_limits.five_hour.used_percentage // empty')
week=$(echo "$input" | jq -r '.rate_limits.seven_day.used_percentage // empty')

# Build context usage segment
ctx_seg=""
if [ -n "$used" ]; then
  ctx_seg="ctx:$(printf '%.0f' "$used")%"
fi

# Build rate limit segment
rate_seg=""
if [ -n "$five_h" ]; then
  rate_seg="5h:$(printf '%.0f' "$five_h")%"
fi
if [ -n "$week" ]; then
  [ -n "$rate_seg" ] && rate_seg="$rate_seg "
  rate_seg="${rate_seg}7d:$(printf '%.0f' "$week")%"
fi

# Assemble the status line with ANSI colors
printf "\033[36m%s\033[0m \033[33m[%s]\033[0m" "$cwd" "$model"

if [ -n "$ctx_seg" ]; then
  printf " \033[32m%s\033[0m" "$ctx_seg"
fi

if [ -n "$rate_seg" ]; then
  printf " \033[35m%s\033[0m" "$rate_seg"
fi

printf "\n"
