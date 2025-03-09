# Python dev

## Host
- https://modal.com/

## List / Learn
- https://github.com/TheAlgorithms/Python
- https://github.com/Asabeneh/30-Days-Of-Python
- https://github.com/zhiwehu/Python-programming-exercises

## Dependencies

## Global
- install with: pip install -r requirements.txt
- run with: python .\my-script.py >> output.txt

## Local
- use virtualenv to scope deps to the current folder
- Pipenv is a tool that aims to bring the best of all packaging worlds (bundler, composer, npm, cargo, yarn, etc.) to the Python world

### More

- https://stackoverflow.com/questions/7818811/error-import-error-no-module-named-numpy-on-windows
- https://stackoverflow.com/questions/53925660/installing-python-dependencies-locally-in-project


- https://pipenv.readthedocs.io/en/latest/install/#installing-pipenv

### PIP 

```bash
# to check current pip config
pip config debug

# to change pip directory 
pip config set global.target /Users/Bob/Library/Python/3.8/lib/python/site-packages

# to check current version
pip -V

# since python installed the new version in folder specified in ENV: PYTHONUSERBASE
# but python wanted only to use the pip from the /Users/Bob/Library/Python/3.x.x/lib/python/site-packages
# then i have copied/paste the pip folder froml PYTHONUSERBASE to site-packages

```

## ENV
- https://thenewstack.io/why-every-python-dev-needs-virtual-environments-now/


## HTTP Request

- https://www.geeksforgeeks.org/get-post-requests-using-python/

## STARTER
- https://github.com/mirumee/saleor
- https://github.com/FujiwaraChoki/MoneyPrinterV2
- https://github.com/tiangolo/full-stack-fastapi-template

## LIB: DEVTOOLS: CORE
- https://github.com/3b1b/manim
- https://github.com/pyenv/pyenv
- https://github.com/astral-sh/uv
- https://github.com/streamlit/streamlit

## LIB: DEVTOOLS: EXTRA
- https://github.com/astral-sh/ruff

## LIB
- https://github.com/django/django
- https://github.com/apache/superset
- https://github.com/tinygrad/tinygrad
- https://github.com/PrefectHQ/prefect
- https://github.com/allegroai/trains
- https://github.com/tiangolo/fastapi
- https://github.com/pennersr/pulsus
- https://github.com/mckinsey/vizro
- https://github.com/kellyjonbrazil/jc
- https://github.com/Textualize/textual
- https://github.com/swirlai/swirl-search
- https://github.com/vietnh1009/ASCII-generator
- https://github.com/threestudio-project/threestudio

## DATA
- https://github.com/pandas-dev/pandas
- https://github.com/rapidsai/cudf

## UTIL

- https://github.com/aiortc/aiortc
- https://github.com/wishtack/pysynthetic
- https://github.com/joeyism/linkedin_scraper
- https://github.com/JozefJarosciak/X-followers/