#!/bin/bash

# From https://gist.github.com/prescottprue/e8f2a437e647285340dea50a495a811b
# Based off https://gist.github.com/wojtekmaj/6defa1f358daae28bd52b7b6dbeb7ab6 with a few fixes and
# additions/removals including no git interactions

# Run on Windows PowerShell:
# Set-Alias -Name bash -Value "C:\Program Files\Git\bin\bash.exe"
# bash
# .\jest-to-vitest.sh

# Windows compatibility for sed -i option
replaceInline() {
  local file=$1
  local from=$2
  local to=$3

  if [[ "$OSTYPE" == "darwin"* ]]; then
    sed -i '' -e "s+${from}+${to}+g" $file
  else
    sed -i -e "s+${from}+${to}+g" $file
  fi
}

join_by() {
  local d=${1-} f=${2-}
  if shift 2; then
    printf %s "$f" "${@/#/$d}"
  fi
}

# Define functions
add_vitest_config() {
  setupFile=""
  if [ -f "./jest.setup.js" ]; then
    mv jest.setup.js vitest.setup.ts
    setupFile="
    test: {
      setupFiles: 'vitest.setup.ts',
    },"
  fi
  # Add Vitest config
  echo "import { defineConfig } from 'vitest/config';

export default defineConfig({$setupFile
  coverage: {
    reporter: ['lcov', 'json'],
    include: ['src/**'],
  },
});" > vitest.config.ts
  rm jest.config.js
}

add_vitest_setup() {
  # Copy existing jest setup into Vitest setup
  if [ -f "./jest.setup.js" ]; then
    echo "Migrating jest.setup.js file"
    mv jest.setup.js vitest.setup.ts
  fi
}

add_vitest_script() {
  # Replace test command in package.json
  npm pkg delete scripts.test
  npm pkg set scripts.test="vitest"
}

# Add vitest and coverage reporter
yarn add -D --exact vitest @vitest/coverage-v8

# Remove jest and any associated packages
packagesToRemove=jest
if grep -q "@types/jest" package.json; then
  packagesToRemove="${packagesToRemove} @types/jest"
fi

if grep -q "@swc/jest" package.json; then
  packagesToRemove="${packagesToRemove} @swc/jest"
fi

yarn remove $packagesToRemove

# Dedupe dependencies
yarn dedupe

# Add vitest config file and remove jest config
add_vitest_config

# Add Vitest setup
add_vitest_setup

# Add Vitest script to npm scripts
add_vitest_script

# Go to src directory
cd src

# Find all *.spec.js, *.spec.ts, *.spec.jsx, and *.spec.tsx files. For each of them:
# - Replace "jest.*" with "vi.*"
# - Attempt to replace "jest.mock" and "jest.requireActual" with "vi.mock" and "vi.importActual", respectively.
# - Add "import { describe, expect, it, … } from 'vitest';" to the top of the file
files=$(find . -type f -name "*.spec.js" -o -name "*.spec.ts" -o -name "*.spec.jsx" -o -name "*.spec.tsx" -o -name "*.test.js" -o -name "*.test.ts" -o -name "*.test.jsx" -o -name "*.test.tsx" | grep -v "node_modules")

for file in $files; do
  echo "Processing $file"

  # Detect if file contains "from ["']vitest["']". If so, skip it.
  if grep -q "from ['\']vitest['\']" $file; then
    echo "  Test file appears to have already been migrated to Vitest. Skipping"
    continue
  fi

  # Detect if file contains "from ["']@playwright/test["']". If so, skip it.
  if grep -q "from ['\"]@playwright\/test['\"]" $file; then
    echo "  Test file appears to be using Playwright. Skipping"
    continue
  fi

  # Replace "jest.clearAllMocks" with "vi.clearAllMocks"
  # sed -i '' 's/jest.clearAllMocks/vi.clearAllMocks/g' $file
  replaceInline $file "jest.clearAllMocks" "vi.clearAllMocks"

  # Replace "jest.fn" with "vi.fn"
  # sed -i '' 's/jest.fn/vi.fn/g' $file
  replaceInline $file "jest.fn" "vi.fn"

  # Replace "jest.mocked" with "vi.mocked"
  # sed -i '' 's/jest.mocked/vi.mocked/g' $file
  replaceInline $file "jest.mocked" "vi.mocked"

  # Replace "jest.resetAllMocks" with "vi.resetAllMocks"
  # sed -i '' 's/jest.resetAllMocks/vi.resetAllMocks/g' $file
  replaceInline $file "jest.resetAllMocks" "vi.resetAllMocks"
  
  # Replace "jest.restoreAllMocks" with "vi.restoreAllMocks"
  # sed -i '' 's/jest.restoreAllMocks/vi.restoreAllMocks/g' $file
  replaceInline $file "jest.restoreAllMocks" "vi.restoreAllMocks"

  # Replace "jest.resetModules" with "vi.resetModules"
  sed -i '' 's/jest.resetModules/vi.resetModules/g' $file
  replaceInline $file "jest.resetModules" "vi.resetModules"

  # Replace "jest.spyOn" with "vi.spyOn"
  # sed -i '' 's/jest.spyOn/vi.spyOn/g' $file
  replaceInline $file "jest.spyOn" "vi.spyOn"

  # Replace "jest.useFakeTimers" with "vi.useFakeTimers"
  # sed -i '' 's/jest.useFakeTimers/vi.useFakeTimers/g' $file
  replaceInline $file "jest.useFakeTimers" "vi.useFakeTimers"

  # Replace "jest.useRealTimers" with "vi.useRealTimers"
  # sed -i '' 's/jest.useRealTimers/vi.useRealTimers/g' $file
  replaceInline $file "jest.useRealTimers" "vi.useRealTimers"
  
  # Replace "jest.SpyInstance" with "MockInstance"
  # sed -i '' 's/jest.SpyInstance/MockInstance/g' $file
  replaceInline $file "jest.SpyInstance" "MockInstance"

  # Replace "advanceTimers: jest.advanceTimersByTime" with "advanceTimers: vi.advanceTimersByTime.bind(vi)"
  # sed -i '' 's/advanceTimers: jest.advanceTimersByTime/advanceTimers: vi.advanceTimersByTime.bind(vi)/g' $file
  replaceInline $file "advanceTimers: jest.advanceTimersByTime" "advanceTimers: vi.advanceTimersByTime.bind(vi)"

  # Detect jest.mock(). Since vi.mock() uses ESM modules, chances are manual changes
  # are going to be necessary. So, we'll print a warning.
  if grep -q "jest.mock(" $file; then
    echo "  Warning: $file contained jest.mock(). You'll likely need to manually fix vi.mock() implementation."

    # sed -i '' 's/jest.mock/vi.mock/g' $file
    replaceInline $file "jest.mock" "vi.mock"
  fi

  # Detect jest.requireActual(). Since vi.importActual() uses ESM modules, chances are
  # manual changes are going to be necessary. So, we'll print a warning.
  if grep -q "jest.requireActual(" $file; then
    echo "  Warning: $file contained jest.requireActual(). You'll likely need to manually fix vi.importActual() implementation."

    # sed -i '' 's/jest.requireActual/vi.importActual/g' $file
    replaceInline $file "jest.requireActual" "vi.importActual"
  fi

  # Replace jest.setTimeout() with vi.setConfig({ testTimeout: N })
  if grep -q "jest.setTimeout(" $file; then
    echo "  TODO"
  fi

  # Replace any remaining instance of jest with vi (helps jest.* with methods on newline and with tabs)
  # sed -i '' 's/jest/vi/g' $file
  replaceInline $file "jest" "vi"

  # Define list of required imports for each file

  # Clear the array of imports
  imports=()

  # If file contains "afterEach", add it to the list of required imports
  if grep -q "afterEach" $file; then
    imports[0]="afterEach"
  fi
  # If file contains "beforeEach", add it to the list of required imports
  if grep -q "beforeEach" $file; then
    imports[1]="beforeEach"
  fi

  imports[2]="describe"
  imports[3]="expect"
  imports[4]="it"
  # If file contains "vi.", add it to the list of required imports
  if grep -q "vi\." $file; then
    imports[5]="vi"
  fi
  if grep -q "beforeAll" $file; then
    imports[6]="beforeAll"
  fi
  if grep -q "afterAll" $file; then
    imports[7]="afterAll"
  fi
  if grep -q "test\." $file; then
    imports[8]="test"
  fi
  if grep -q "MockInstance" $file; then
    imports[8]="type MockInstance"
  fi
  if grep -q "vi\.Mock" $file; then
    imports[8]="type Mock"
  fi

  # Wait to replace vi.Mock (from jest.Mock) so that Mock type import can be more accuratley detected
  # sed -i '' 's/vi.Mock/Mock/g' $file
  replaceInline $file "vi.Mock" "Mock"

  # Join list of required imports into a string
  imports_string=$(join_by ", " "${imports[@]}")

  # Add "import { … } from 'vitest';" to the top of the file.
  if [[ "$OSTYPE" == "darwin"* ]]; then
  sed -i '' '1i\
import { '"$imports_string"' } from "vitest";
' $file
  else
    sed -i -e '1i\
import { '"$imports_string"' } from "vitest";
' $file
  fi
  echo "  Done"
done

# Return to root directory
cd ../

# Run prettier formatting if prettier exists
if grep -q "prettier" package.json; then
  yarn prettier --write .
fi

# Run lint to be sure everything is working, exit if not
yarn lint || exit 1

# Run tests to be sure everything is working, exit if not
yarn test || exit 1