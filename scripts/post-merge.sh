#!/bin/bash
set -euo pipefail

# Restore dependencies after isolated task changes are merged.
# Avoid running `next build` here because workflow reconciliation restarts the
# active development server after this script completes.
npm install --no-audit --no-fund