for /r %%i in (*_test.js) do (
    echo Running test file: %%i
    node %%i
)