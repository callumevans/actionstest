workflow "New workflow" {
  resolves = ["docker://node:12.10-alpine"]
  on = "push"
}

action "docker://node:12.10-alpine" {
  uses = "docker://node:12.10-alpine"
  runs = "npm"
  args = "test"
}
