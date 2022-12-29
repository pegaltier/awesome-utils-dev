
#!/bin/sh
# run: ./tools/migration/bashfunctions.sh
# permission: chmod u+r+x ./tools/migration/bashfunctions.sh
#
REPO=/home/myfolder/myapp/

function function_from_to() {
    local FROMPATH="$1"   # Save first argument in a variable
    shift            # Shift all arguments to the left (original $1 gets lost)
    local TOPATH="$1"   # Save first argument in a variable
    shift            # Shift all arguments to the left (original $1 gets lost)
    rsync -av --progress $REPO$FROMPATH $REPO$TOPATH --remove-source-files --prune-empty-dirs
}


# move things
# function_from_to 'libs/myname/shared-deps-all/src/lib/myfolderfrom' 'libs/myname/shared-deps-all/src/lib/myfolderto/'


###################################################################


function function_mkdir() {
    local FOLDER="$1"   # Save first argument in a variable
    shift            # Shift all arguments to the left (original $1 gets lost)
    mkdir -p $REPO$FOLDER
}

# create folders
# function_mkdir 'libs/myname/shared-deps-all/src/lib/myfolder'


###################################################################


function copyFilesExArray() {
   local msg="$1"   # Save first argument in a variable
   shift            # Shift all arguments to the left (original $1 gets lost)
   local arr=("$@") # Rebuild the array with rest of arguments
   for i in "${arr[@]}";
      do
          echo "$msg $i"
      done
}

# array=("one" "two" "three")
# copyFilesExArray "Copying" "${array[@]}"

###################################################################

# transform jest spec files
function function_replace_jest_mock() {
   local depthPath="$1"   # Save first argument in a variable
   shift            # Shift all arguments to the left (original $1 gets lost)
   local arr=("$@") # Rebuild the array with rest of arguments
   for f in "${arr[@]}";
        do
            # transform multi line to one line 
            perl -i~ -0777 -pe 's/jest(\n)(.*)\.fn\(\)(\n)(.*)\.mockReturnValue+/jest\.fn\(\)\.mockReturnValue/g' ${f%.ts}.ts
            # add a space to pattern to ignore them in the next step
            sed -i '' -E \
            -e "s+jest\.fn\(\)\.mockReturnValue+jest\.fn\(\)\. mockReturnValue+g" \
            -e "s+\)\.mockReturnValue+jest\.fn\(\)\. mockReturnValue+g" \
            ${f%.ts}.ts
            # replace new method by the new one
            sed -i '' -E \
            -e "s+ = (.*) as jest.MockedClass<typeof (.*)>;+: Partial<\1> = {};+g" \
            -e "s+\.mockReturnValue+ = jest\.fn\(\)\.mockReturnValue+g" \
            -e "s+.prototype.+.+g" \
            -e "s+jest.mock(.*);++g" \
            -e "s+useClass+useValue+g" \
            ${f%.ts}.ts
            # https://unix.stackexchange.com/questions/264344/how-to-replace-a-multi-line-code-with-sed
            # transform multi line MockedClass by Partial
            perl -i~ -0777 -pe 's/ = (.*) as jest.MockedClass\<(\n)(.*)typeof (.*)(\n)	\>;+/: Partial<\1> = {};/g' ${f%.ts}.ts

        done
}

# LIST=$(find $REPO/libs -type f -name '*.spec.ts')
# function_replace_jest_mock "-" "${LIST[@]}"

###################################################################

function function_replace_import_to_xxx_in_file() {
    local filePath="$1"   # Save first argument in a variable
    shift            # Shift all arguments to the left (original $1 gets lost)
    sed -i '' -E \
    -e "s+'(.*)\/xxx.client'+'@myname\/shared-deps-all\/core\/gtmcore\/xxx.client'+g" \
    $filePath.ts
}


function function_replace_in_apps_and_libs() {
    local p1="$1"   # Save first argument in a variable
    shift            # Shift all arguments to the left (original $1 gets lost)
    echo '... executing... '$p1
    LIST=$(find $REPO/apps -name "*.ts")
    for f in $LIST
    do
        function_replace_import_to_xxx_in_file ${f%.ts}
    done
    LIST=$(find $REPO/libs -name "*.ts")
    for f in $LIST
    do
        function_replace_import_to_xxx_in_file ${f%.ts}
    done
}

# function_replace_in_apps_and_libs 'function_replace_in_apps_and_libs'



###################################################################


function create_myname_library_configuration() {
    local libname="$1"   # Save first argument in a variable
    shift            # Shift all arguments to the left (original $1 gets lost)

    # update jest setup
    JESTSETUP="import 'jest-preset-angular/setup-jest';\n
    import { defineAndMock } from 'jest.functions';\n\n
    defineAndMock();
    "

    echo $JESTSETUP > $REPO/libs/myname/$libname/src/test-setup.ts

    # update eslint setup
    ESLINTSETUP='{\n
	"extends": ["../../../.eslintrc.json"],\n
	"ignorePatterns": ["!**/*"]\n
    }
    '

    echo $ESLINTSETUP > $REPO/libs/myname/$libname/.eslintrc.json
}

# create_myname_library_configuration "shared-deps-xxx"


###################################################################


function enable_buildable_library() {
    local libname="$1"   # Save first argument in a variable
    shift            # Shift all arguments to the left (original $1 gets lost)

    # create ng-package 
    NGPACKAGE='{
        "$schema": "../../../node_modules/ng-packagr/ng-package.schema.json",\n
        "dest": "../../../dist/libs/myname/'$libname'",\n
        "lib": {\n
            "entryFile": "src/index.ts"\n
        }
    }'
    echo $NGPACKAGE > $REPO/libs/myname/$libname/ng-package.json

    TSCONFPROD='{
        "extends": "./tsconfig.lib.json",\n
        "compilerOptions": {\n
            "declarationMap": false\n
        },\n
        "angularCompilerOptions": {}
    }'
    echo $TSCONFPROD > $REPO/libs/myname/$libname/tsconfig.lib.prod.json
}

# enable_buildable_library "data-access-xxx"