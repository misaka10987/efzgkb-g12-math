#!/bin/sh
set -e

main() {
    prettier --write assignment/**/*.md
}

main
