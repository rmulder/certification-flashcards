#!/usr/bin/env python3
"""Generate PCAP Python domain card TypeScript files."""

from __future__ import annotations

import json
import textwrap
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src" / "certifications" / "pcap-python" / "cards"

DOMAINS = [
    {
        "file": "domain1-modules.ts",
        "export": "modulesPackagesCards",
        "domain": "modules-packages",
        "task": "1",
        "count": 23,
        "start": 1,
        "cards": [
            (
                "What is printed when `import math; print(math.__name__)` runs?",
                ["math", "__main__", "math.py", "None"],
                0,
                "`math.__name__` is the string `'math'` — the fully qualified module name.",
            ),
            (
                "Given `if __name__ == '__main__':` in a script run directly, the block executes because:",
                [
                    "__name__ is set to '__main__' for the top-level script",
                    "__name__ is always None in scripts",
                    "__name__ equals the filename without extension",
                    "__name__ is set only inside packages",
                ],
                0,
                "When a file is executed as the entry point, Python sets `__name__` to `'__main__'`.",
            ),
            (
                "What does `from math import pi, sqrt` place in the current namespace?",
                ["Only `pi` and `sqrt`", "The entire `math` module", "All public names from math", "A copy of the math module object"],
                0,
                "`from module import name` binds specific names directly into the current namespace.",
            ),
            (
                "What is the effect of `import module as m`?",
                [
                    "The module is bound to the local name `m`",
                    "A deep copy of the module is created",
                    "Only public functions become available as `m`",
                    "The module is reloaded from disk",
                ],
                0,
                "`import ... as` assigns the module object to an alias without copying it.",
            ),
            (
                "Which statement about Python packages is TRUE?",
                [
                    "A package is a directory containing `__init__.py` (or a namespace package)",
                    "Every folder on disk is automatically a package",
                    "Packages cannot contain subpackages",
                    "`__init__.py` must define `__all__`",
                ],
                0,
                "Regular packages are directories with `__init__.py`; namespace packages follow PEP 420 rules.",
            ),
            (
                "Inside package `pkg.sub`, which import reaches sibling module `pkg.other`?",
                [
                    "`from ..other import func`",
                    "`from .other import func`",
                    "`import other`",
                    "`from pkg.sub.other import func`",
                ],
                0,
                "Single dot is current package; double dot goes to the parent package.",
            ),
            (
                "What does `__all__ = ['a', 'b']` in a module control?",
                [
                    "Names exported by `from module import *`",
                    "Names visible to `dir()` only",
                    "Private attributes accessible via dot notation",
                    "Which submodules are loaded at import time",
                ],
                0,
                "`__all__` defines the public names imported with `from module import *`.",
            ),
            (
                "What is printed?\n```python\nimport sys\nsys.path.insert(0, '/tmp')\nimport mymod\n```\nAssume `/tmp/mymod.py` exists and `/tmp` was not previously on `sys.path`.",
                [
                    "Python finds and loads `/tmp/mymod.py`",
                    "ImportError because only site-packages are searched",
                    "SyntaxError on insert",
                    "The standard library `mymod` is always preferred",
                ],
                0,
                "`sys.path` is the module search path; prepending a directory makes it searchable first.",
            ),
            (
                "What is the output?\n```python\nx = 10\ndef f():\n    print(x)\n    x = 20\nf()\n```",
                [
                    "UnboundLocalError",
                    "10",
                    "20",
                    "None",
                ],
                0,
                "Assignment to `x` inside `f` makes `x` local; reading it before assignment fails.",
            ),
            (
                "Which built-in returns a list of names defined in a module object?",
                ["dir()", "list()", "names()", "globals() only"],
                0,
                "`dir(obj)` returns sorted attribute names of an object, commonly used on modules.",
            ),
            (
                "What does `getattr(mod, 'missing', 42)` return if `mod` has no attribute `missing`?",
                ["42", "None", "AttributeError", "''"],
                0,
                "The third argument to `getattr` is the default returned when the attribute is absent.",
            ),
            (
                "What is true about `importlib.reload(mod)`?",
                [
                    "It re-executes the module's code in the existing module object",
                    "It creates a brand-new module with a different name",
                    "It clears all imports from other modules automatically",
                    "It only works for built-in modules",
                ],
                0,
                "`reload()` re-runs module top-level code, updating the existing module namespace.",
            ),
            (
                "What is printed?\n```python\nimport builtins\nprint('sum' in dir(builtins))\n```",
                ["True", "False", "Error", "None"],
                0,
                "`sum` is a built-in function exposed on the `builtins` module.",
            ),
            (
                "A relative import `from .utils import helper` requires:",
                [
                    "The importing file to be part of a package",
                    "The script to be run with `python script.py` from any directory",
                    "An installed pip package only",
                    "Python 2 compatibility mode",
                ],
                0,
                "Relative imports use dot notation and only work inside package modules, not standalone scripts.",
            ),
            (
                "What happens?\n```python\nimport mod\nimport mod\nprint(mod is mod)\n```",
                ["True — modules are cached in `sys.modules`", "False — each import creates a new module", "ImportError on second import", "SyntaxError"],
                0,
                "Python caches imported modules in `sys.modules`, so repeated imports return the same object.",
            ),
            (
                "Which expression imports submodule `utils` from package `app`?",
                ["import app.utils", "import utils from app", "include app.utils", "load app::utils"],
                0,
                "`import pkg.submod` loads a submodule using dotted module names.",
            ),
            (
                "What is `__package__` set to in module `app.views.home`?",
                [
                    "'app.views' when run as part of package `app`",
                    "Always None",
                    "Always '__main__'",
                    "The filesystem path to the file",
                ],
                0,
                "`__package__` is the parent package name used to resolve relative imports.",
            ),
            (
                "What is printed?\n```python\nM = type('M', (), {'x': 1})\nprint(M.x)\n```",
                ["1", "Error", "None", "{'x': 1}"],
                0,
                "The third argument to `type()` becomes the class namespace; `x` becomes a class attribute.",
            ),
            (
                "Which statement about `__init__.py` is MOST accurate?",
                [
                    "It can execute package initialization code and re-export names",
                    "It must be empty in Python 3",
                    "It prevents importing submodules",
                    "It replaces the need for `setup.py`",
                ],
                0,
                "`__init__.py` runs on package import and can define package-level API surface.",
            ),
            (
                "What is the result of `hasattr(str, 'upper')`?",
                ["True", "False", "None", "TypeError"],
                0,
                "Strings have an `upper` method, so `hasattr` returns True.",
            ),
            (
                "What does this print?\n```python\ndef outer():\n    x = 'a'\n    def inner():\n        return x\n    return inner\nprint(outer()())\n```",
                ["'a'", "NameError", "None", "''"],
                0,
                "Nested functions close over enclosing variables; `inner` returns `'a'`.",
            ),
            (
                "Which is the correct way to run a module as a script with `-m`?",
                [
                    "`python -m package.module` from a directory on PYTHONPATH",
                    "`python package/module.py` only",
                    "`python -m` requires `.py` extension in the argument",
                    "`python -m` disables package imports",
                ],
                0,
                "`-m` runs a module as `__main__`, setting package context correctly for relative imports.",
            ),
            (
                "What is true about circular imports in Python?",
                [
                    "They can work if module-level code avoids using not-yet-defined names",
                    "They are always impossible",
                    "Python detects them and raises ImportError immediately at parse time",
                    "Only C extensions can circularly import",
                ],
                0,
                "Circular imports succeed when initialization does not require fully initialized partner modules at import time.",
            ),
        ],
    },
    {
        "file": "domain2-exceptions.ts",
        "export": "exceptionsCards",
        "domain": "exceptions",
        "task": "2",
        "count": 23,
        "start": 24,
        "cards": [
            (
                "What is printed?\n```python\ntry:\n    print(1)\n    raise ValueError('bad')\n    print(2)\nexcept ValueError:\n    print(3)\nfinally:\n    print(4)\n```",
                ["1, 3, 4", "1, 2, 3, 4", "3, 4", "1, 4"],
                0,
                "Code before the raise runs; except handles ValueError; finally always runs.",
            ),
            (
                "Which exceptions should application code typically catch?",
                [
                    "Subclasses of `Exception`, not `BaseException`",
                    "Only `KeyboardInterrupt`",
                    "Any `BaseException` including `SystemExit`",
                    "Only `Exception` exactly, never subclasses",
                ],
                0,
                "`Exception` is the base for recoverable errors; `BaseException` includes system exits and interrupts.",
            ),
            (
                "What does the `else` clause of a try/except run?",
                [
                    "When no exception occurred in the try block",
                    "Always after the except block regardless of outcome",
                    "Only when an exception is raised",
                    "Only when finally raises",
                ],
                0,
                "`try/except/else`: else runs if the try block completes without exception.",
            ),
            (
                "What is printed?\n```python\ntry:\n    raise TypeError('t')\nexcept Exception as e:\n    print(type(e).__name__)\n```",
                ["TypeError", "Exception", "Error", "t"],
                0,
                "The caught object is a TypeError instance; `type(e).__name__` is `'TypeError'`.",
            ),
            (
                "How do you re-raise the current exception preserving traceback?",
                ["bare `raise` inside except", "`raise e` always", "`raise Exception()`", "`reraise()` built-in"],
                0,
                "A bare `raise` in an except block re-raises the active exception with original context.",
            ),
            (
                "What is the parent of `FileNotFoundError`?",
                ["OSError", "RuntimeError", "ValueError", "ImportError"],
                0,
                "`FileNotFoundError` is a subclass of `OSError` in Python 3.",
            ),
            (
                "What is printed?\n```python\ndef f():\n    try:\n        return 1\n    finally:\n        return 2\nprint(f())\n```",
                ["2", "1", "None", "Error"],
                0,
                "If finally executes a return, it overrides try/except returns.",
            ),
            (
                "Which creates a custom exception type correctly?",
                [
                    "class MyError(Exception): pass",
                    "class MyError: pass",
                    "MyError = Exception('MyError')",
                    "def MyError(): raise Exception",
                ],
                0,
                "Custom exceptions should subclass `Exception` (or a more specific standard exception).",
            ),
            (
                "What does `raise ValueError('x') from KeyError('y')` enable?",
                [
                    "Exception chaining with explicit `__cause__`",
                    "Catching both exceptions in one except tuple automatically",
                    "Silencing the original traceback",
                    "Converting KeyError into ValueError without linkage",
                ],
                0,
                "`raise ... from ...` sets `__cause__`, shown in tracebacks for explicit chaining.",
            ),
            (
                "What is printed?\n```python\ntry:\n    {}['k']\nexcept KeyError:\n    print('A')\nexcept LookupError:\n    print('B')\n```",
                ["A", "B", "A then B", "Nothing"],
                0,
                "KeyError is caught by the first matching handler; LookupError handler is skipped.",
            ),
            (
                "What is the effect of `assert False, 'msg'` when optimization is off (`-O` not used)?",
                ["Raises AssertionError with message", "Prints 'msg' only", "Ignored silently", "Raises SystemExit"],
                0,
                "Assertions raise AssertionError when the condition is false and `-O` is not enabled.",
            ),
            (
                "Which is NOT recommended in modern Python?",
                [
                    "Bare `except:` catching all exceptions including SystemExit",
                    "`except ValueError:`",
                    "`except (TypeError, ValueError):`",
                    "Logging exception with `logging.exception()`",
                ],
                0,
                "Bare except catches BaseException subclasses like KeyboardInterrupt; avoid it.",
            ),
            (
                "What is printed?\n```python\ntry:\n    int('x')\nexcept ValueError as e:\n    print(e.args[0])\n```",
                ["invalid literal for int() with base 10: 'x'", "ValueError", "x", "0"],
                0,
                "Exception args contain the constructor arguments; ValueError includes the message string.",
            ),
            (
                "What happens if an exception is raised in `finally`?",
                [
                    "It propagates, potentially masking an earlier exception",
                    "It is always ignored",
                    "It is converted to Warning",
                    "Only SystemError can be raised in finally",
                ],
                0,
                "An exception in finally replaces any exception being propagated from try/except.",
            ),
            (
                "Which hierarchy relationship is correct?",
                [
                    "ArithmeticError is a subclass of Exception",
                    "Exception is a subclass of BaseException",
                    "KeyboardInterrupt is a subclass of Exception",
                    "SystemExit is a subclass of Exception",
                ],
                1,
                "`BaseException` is the root; `Exception` derives from it. KeyboardInterrupt and SystemExit derive from BaseException directly.",
            ),
            (
                "What is printed?\n```python\ntry:\n    1 / 0\nexcept ZeroDivisionError:\n    print('zero')\nelse:\n    print('else')\n```",
                ["zero", "else", "zero then else", "Nothing"],
                0,
                "ZeroDivisionError triggers except; else is skipped when an exception occurs.",
            ),
            (
                "What does `except ExceptionGroup as eg:` (Python 3.11+) primarily handle?",
                [
                    "Multiple exceptions raised concurrently in task groups",
                    "All strings grouped together",
                    "Only syntax errors",
                    "Import cycles",
                ],
                0,
                "ExceptionGroup bundles multiple exceptions, common with asyncio TaskGroup failures.",
            ),
            (
                "What is true about `StopIteration`?",
                [
                    "It signals iterator exhaustion and subclasses Exception",
                    "It is a BaseException used for sys.exit",
                    "It cannot be caught",
                    "It is raised only by syntax errors",
                ],
                0,
                "Iterators raise StopIteration to end iteration; it is an Exception subclass.",
            ),
            (
                "What is printed?\n```python\ndef g():\n    raise RuntimeError('r')\ntry:\n    g()\nexcept RuntimeError:\n    print('caught')\n    raise\n```",
                ["Prints 'caught' then propagates RuntimeError", "Prints 'caught' only", "Silent exit", "SyntaxError"],
                0,
                "Bare raise after handling re-raises the same RuntimeError.",
            ),
            (
                "Which statement about `else` and `return` in try/except is TRUE?",
                [
                    "A return in try skips else even if no exception occurred",
                    "else runs after return in try",
                    "finally prevents return from try",
                    "else runs before except when exception occurs",
                ],
                0,
                "If try returns, else is not executed; finally still runs before the return completes.",
            ),
            (
                "What exception does `next(iter([]))` raise?",
                ["StopIteration", "IndexError", "ValueError", "RuntimeError"],
                0,
                "Calling next on exhausted iterator raises StopIteration.",
            ),
            (
                "What is the recommended way to raise again with a new message?",
                [
                    "raise NewError('msg') from original",
                    "raise NewError('msg') without from always hides cause",
                    "print then pass",
                    "sys.exit(1)",
                ],
                0,
                "Use `raise New from old` to chain exceptions transparently.",
            ),
            (
                "What is printed?\n```python\ntry:\n    raise KeyError(1)\nexcept KeyError as e:\n    print(1 in e.args)\n```",
                ["True", "False", "Error", "None"],
                0,
                "KeyError(1) stores 1 in args; membership test on args is True.",
            ),
        ],
    },
    {
        "file": "domain3-strings.ts",
        "export": "stringsCards",
        "domain": "strings",
        "task": "3",
        "count": 23,
        "start": 47,
        "cards": [
            (
                "What is `'hello'[::-1]`?",
                ["'olleh'", "'hello'", "Error", "['o','l','l','e','h']"],
                0,
                "Step -1 reverses the string.",
            ),
            (
                "What is `'a,b,c'.split(',', 1)`?",
                ["['a', 'b,c']", "['a', 'b', 'c']", "['a,b,c']", "('a', 'b,c')"],
                0,
                "Maxsplit 1 performs a single split from the left.",
            ),
            (
                "What is `'-=spa=-'.strip('-= ')`?",
                ["'spa'", "'-=spa=-'", "'spa-'", "Error"],
                0,
                "`strip` removes leading/trailing characters in the argument set.",
            ),
            (
                "What is printed?\n```python\ns = 'Py'\nprint(f'{s:>5}')\n```",
                ["'   Py'", "'Py   '", "'  Py '", "'Py'"],
                0,
                "Format spec `>5` right-aligns in width 5.",
            ),
            (
                "What is `'abc'.replace('a', 'z', 1)`?",
                ["'zbc'", "'zbczbc'", "'abc'", "'azc'"],
                0,
                "Count limits replacements; only first 'a' becomes 'z'.",
            ),
            (
                "What is `','.join(['a', 'b'])`?",
                ["'a,b'", "['a,b']", "'ab'", "Error unless all str already"],
                0,
                "`join` concatenates iterables of strings with the separator.",
            ),
            (
                "What is `'café'.encode('utf-8')` type?",
                ["bytes", "str", "list", "bytearray"],
                0,
                "`encode` returns a bytes object.",
            ),
            (
                "What is `b'hi'.decode('ascii')`?",
                ["'hi'", "b'hi'", "['h','i']", "Error always"],
                0,
                "Valid ASCII bytes decode to str.",
            ),
            (
                "What is `ord('A')`?",
                ["65", "'A'", "0", "Error"],
                0,
                "Unicode code point of 'A' is 65.",
            ),
            (
                "What is `chr(8364)`?",
                ["'€'", "'8364'", "b'\\x80'", "Error"],
                0,
                "chr returns the Unicode character for code point 8364 (euro sign).",
            ),
            (
                "What is `'spam'.find('na')`?",
                ["-1", "2", "True", "1"],
                0,
                "Substring 'na' is not in 'spam'; find returns -1.",
            ),
            (
                "What is `'{} {}'.format('a', 'b')`?",
                ["'a b'", "'{} {}'", "Error", "'ab'"],
                0,
                "format substitutes positional arguments.",
            ),
            (
                "What is printed?\n```python\nx = 3\nprint(f'{x=}'.split('=')[0])\n```",
                ["'x'", "'3'", "'x=3'", "Error"],
                0,
                "Debug f-string `f'{x=}'` yields `'x=3'`; split gives `'x'`.",
            ),
            (
                "Which comparison is TRUE for strings?",
                [
                    "'a' < 'b'",
                    "'A' < 'a' in default ASCII/Unicode ordering",
                    "'10' < '2' is False",
                    "'' > 'a'",
                ],
                0,
                "Strings compare lexicographically; 'a' < 'b'. Note '10' < '2' is True lexicographically.",
            ),
            (
                "What is `'%04d' % 7`?",
                ["'0007'", "'7'", "'007'", "'4d'"],
                0,
                "Old-style formatting: zero-pad width 4.",
            ),
            (
                "What is `r'\\n'` equal to?",
                ["'\\\\n' two chars backslash and n", "'\\n' newline", "b'\\n'", "Error"],
                0,
                "Raw strings do not treat backslash as escape except for quote escaping.",
            ),
            (
                "What is `'hello'.partition('l')`?",
                ["('he', 'l', 'lo')", "('h', 'el', 'lo')", "['he','l','lo']", "Error"],
                0,
                "partition splits on first occurrence into three parts.",
            ),
            (
                "What is `'abc' * 0`?",
                ["''", "'abc'", "None", "Error"],
                0,
                "String repetition with 0 yields empty string.",
            ),
            (
                "What is `'\\x41'`?",
                ["'A'", "'x41'", "'\\x41'", "65"],
                0,
                "Hex escape \\x41 is ASCII 'A'.",
            ),
            (
                "What is `'title'.capitalize()`?",
                ["'Title'", "'TITLE'", "'title'", "'T'"],
                0,
                "capitalize uppercases first char, lowercases rest.",
            ),
            (
                "What is `'a\\tb'.expandtabs(4)` if tab stops align 'b' at column 4?",
                [
                    "Spaces replace tab to next tab stop",
                    "Removes tabs leaving 'ab'",
                    "Raises ValueError",
                    "Same as replace('\\t',' ')",
                ],
                0,
                "expandtabs replaces tabs with spaces up to next tab stop width.",
            ),
            (
                "What is `str(1.0) == '1.0'`?",
                ["True", "False", "Error", "None"],
                0,
                "str(1.0) produces '1.0'.",
            ),
            (
                "What is `'mississippi'.count('ss')`?",
                ["2", "1", "3", "0"],
                0,
                "Non-overlapping occurrences of 'ss' appear twice.",
            ),
        ],
    },
]

# OOP cards (47) - abbreviated generation with varied topics
OOP_TEMPLATES = [
    ("What is printed?\n```python\nclass A:\n    x = 1\nclass B(A):\n    pass\nprint(B.x)\n```", ["1", "Error", "None", "0"], 0, "Class attributes are inherited by subclasses."),
    ("What is printed?\n```python\nclass C:\n    def __init__(self, v):\n        self.v = v\nprint(C(5).v)\n```", ["5", "None", "Error", "0"], 0, "__init__ sets instance attribute v."),
    ("What is printed?\n```python\nclass D:\n    def show(self):\n        return 'd'\nclass E(D):\n    def show(self):\n        return super().show() + 'e'\nprint(E().show())\n```", ["'de'", "'e'", "'d'", "Error"], 0, "super() calls parent method; concatenation yields 'de'."),
    ("Which method is called by `print(obj)` when no args?", ["__str__", "__repr__ always instead", "__print__", "__format__ only"], 0, "print uses str(); default str calls __str__ if defined, else __repr__."),
    ("What is `isinstance(True, int)`?", ["True", "False", "Error", "None"], 0, "bool is a subclass of int in Python."),
    ("What is printed?\n```python\nclass F:\n    __slots__ = ('a',)\n    def __init__(self):\n        self.a = 1\nf = F()\nf.b = 2\n```", ["AttributeError", "2", "None", "1"], 0, "__slots__ restrict arbitrary attribute assignment."),
    ("What does `@property` on a method enable?", ["Attribute-style access without call parentheses", "Static binding only", "Automatic caching forever", "Private name mangling"], 0, "Property descriptors allow getter/setter access like attributes."),
    ("What is printed?\n```python\nclass G:\n    @classmethod\n    def make(cls):\n        return cls()\nprint(type(G.make()))\n```", ["<class '__main__.G'> or G", "classmethod", "None", "type"], 0, "classmethod receives class and can construct instances."),
    ("What is printed?\n```python\nclass H:\n    @staticmethod\n    def add(a, b):\n        return a + b\nprint(H.add(2, 3))\n```", ["5", "Error", "None", "H"], 0, "Static methods do not receive self/cls automatically."),
    ("What is MRO of `class I(A, B): pass` used for?", ["Method resolution order for multiple inheritance", "Module reload order", "Memory release only", "Import search path"], 0, "MRO determines lookup order for inherited methods."),
    ("What is printed?\n```python\nclass J:\n    def __init__(self):\n        self.__x = 1\n    def get(self):\n        return self.__x\nprint(J().get())\n```", ["1", "Error", "None", "'_J__x'"], 0, "Name mangling rewrites __x to _J__x but remains accessible within class methods."),
    ("What is `object.__subclasshook__` rarely overridden for?", ["Abstract ABC integration", "Every user class", "str formatting", "import hooks"], 0, "Subclass hooks customize issubclass checks for ABCs."),
    ("What is printed?\n```python\nclass K:\n    def __repr__(self):\n        return 'K()'\nprint(repr(K()))\n```", ["'K()'", "K instance", "None", "Error"], 0, "repr() calls __repr__ for developer-friendly representation."),
    ("What is true about `__eq__` without `__hash__` in Python 3?", ["Instances become unhashable if __eq__ is defined", "Nothing changes", "__hash__ auto-generated always", "Only affects strings"], 0, "Defining __eq__ sets __hash__ to None unless __hash__ is explicitly defined."),
    ("What is printed?\n```python\nclass L(list):\n    pass\nprint(L([1,2]) + L([3]))\n```", ["[1, 2, 3]", "Error", "L([1,2,3])", "[1,2][3]"], 0, "Subclass inherits list __add__ behavior producing concatenated list."),
    ("What is `type(42)`?", ["<class 'int'>", "int", "'int'", "type"], 0, "type() returns the class object of an instance."),
    ("What is printed?\n```python\nclass M:\n    count = 0\n    def __init__(self):\n        M.count += 1\nM(); M()\nprint(M.count)\n```", ["2", "0", "1", "Error"], 0, "Class variable increments on each instantiation."),
    ("What is printed?\n```python\nclass N:\n    def __init__(self, x):\n        self.x = x\n    def __lt__(self, other):\n        return self.x < other.x\nprint(N(1) < N(2))\n```", ["True", "False", "Error", "None"], 0, "Rich comparison method __lt__ enables < operator."),
    ("What does `dataclass` decorator primarily generate?", ["__init__, __repr__, __eq__ among others", "GUI bindings", "SQL schema", "Thread locks"], 0, "dataclasses auto-generate boilerplate special methods."),
    ("What is printed?\n```python\nclass P:\n    def __call__(self, x):\n        return x * 2\np = P()\nprint(p(3))\n```", ["6", "Error", "None", "3"], 0, "__call__ makes instances callable like functions."),
    ("What is `issubclass(bool, object)`?", ["True", "False", "Error", "None"], 0, "All new-style classes inherit from object."),
    ("What is printed?\n```python\nclass Q:\n    def __init__(self):\n        self.items = []\n    def add(self, x):\n        self.items.append(x)\na = Q(); b = Q()\na.add(1)\nprint(b.items)\n```", ["[]", "[1]", "Error", "None"], 0, "Each instance gets its own list via __init__; no shared mutable default bug here."),
    ("What is printed?\n```python\nclass R:\n    def __init__(self):\n        self.items = []\nclass Bad:\n    items = []\n    def add(self, x):\n        self.items.append(x)\nBad().add(1); print(Bad().items)\n```", ["[1]", "[]", "Error", "[1,1]"], 0, "Mutable class attribute is shared across instances; second instance sees [1]."),
    ("What is `self` in instance methods?", ["Reference to the instance", "Reference to the class", "Global namespace", "Always None"], 0, "First parameter of instance methods is the instance, by convention named self."),
    ("What is printed?\n```python\nclass S:\n    def __init__(self, v=[]):  # anti-pattern\n        self.v = v\nx = S(); y = S()\nx.v.append(1)\nprint(y.v)\n```", ["[1]", "[]", "Error", "None"], 0, "Mutable default is shared; both instances share same list object."),
    ("What is printed?\n```python\nclass T:\n    def __len__(self):\n        return 0\nprint(bool(T()))\n```", ["False", "True", "Error", "0"], 0, "Objects with __len__ returning 0 are falsy."),
    ("What is printed?\n```python\nclass U:\n    def __bool__(self):\n        return False\n    def __len__(self):\n        return 5\nprint(bool(U()))\n```", ["False", "True", "5", "Error"], 0, "__bool__ takes precedence over __len__ for truth value."),
    ("What is printed?\n```python\nclass V:\n    def __getitem__(self, i):\n        return i * 2\nprint(V()[3])\n```", ["6", "3", "Error", "None"], 0, "Bracket access invokes __getitem__."),
    ("What is printed?\n```python\nclass W:\n    def __setitem__(self, k, v):\n        print(k, v)\nW()[0] = 9\n```", ["Prints '0 9'", "Error", "None", "9"], 0, "Assignment to subscript calls __setitem__."),
    ("What is printed?\n```python\nclass X:\n    def __iter__(self):\n        return iter([1, 2])\nprint(list(X()))\n```", ["[1, 2]", "X()", "Error", "[1]"], 0, "__iter__ returning iterator enables list() conversion."),
    ("What is printed?\n```python\nclass Y:\n    def __enter__(self):\n        return self\n    def __exit__(self, *args):\n        return False\nwith Y() as y:\n    pass\n```", ["No exception; context exits normally", "AttributeError", "Always raises", "SyntaxError"], 0, "Context manager protocol: __enter__/__exit__ used by with statement."),
    ("What is `classmethod` first argument?", ["cls", "self", "instance", "module"], 0, "classmethods receive the class as first argument."),
    ("What is printed?\n```python\nclass Z(A := type('A', (), {'v': 1})):\n    pass\nprint(Z.v)\n```", ["1", "Error", "None", "0"], 0, "Inherited class attribute v is visible on subclass."),
    ("What is printed?\n```python\nclass Base:\n    def f(self):\n        return 1\nclass Mid(Base):\n    pass\nclass Top(Mid):\n    def f(self):\n        return super().f() + 1\nprint(Top().f())\n```", ["2", "1", "3", "Error"], 0, "super in Top follows MRO to Mid/Base f returning 1, plus 1 equals 2."),
    ("What is true about abstract base classes (`abc.ABC`)?", ["@abstractmethod requires subclasses to override", "They cannot be subclassed", "They disable inheritance", "They auto-implement all methods"], 0, "ABC enforces implementation of abstract methods in concrete subclasses."),
    ("What is printed?\n```python\nclass C1:\n    def __init__(self):\n        self.__secret = 42\nprint(hasattr(C1(), '_C1__secret'))\n```", ["True", "False", "Error", "None"], 0, "Name mangling exposes _ClassName__attr externally though conventionally 'private'."),
    ("What is printed?\n```python\nclass C2:\n    x = 10\n    def __init__(self):\n        self.x = 20\nprint(C2.x, C2().x)\n```", ["10 20", "20 20", "10 10", "20 10"], 0, "Class attr x remains 10; instance shadows with 20."),
    ("What is printed?\n```python\nclass C3:\n    def __del__(self):\n        print('del')\nc = C3()\ndel c\n```", ["May print 'del' at refcount zero", "Always prints twice", "SyntaxError", "Never runs in CPython"], 0, "__del__ is destructor; CPython may call it when refcount hits zero."),
    ("What is `Enum` member comparison `Color.RED == 1`?", ["False in standard Enum", "True always", "Error", "None"], 0, "Enum members are not equal to arbitrary values unless IntEnum etc."),
    ("What is printed?\n```python\nfrom functools import total_ordering\n@total_ordering\nclass C4:\n    def __init__(self, n): self.n = n\n    def __eq__(self, o): return self.n == o.n\n    def __lt__(self, o): return self.n < o.n\nprint(C4(1) <= C4(2))\n```", ["True", "False", "Error", "None"], 0, "total_ordering synthesizes other comparisons from __eq__ and __lt__."),
    ("What is printed?\n```python\nclass C5:\n    def __init_subclass__(cls, **kw):\n        cls.tag = 'sub'\nclass C6(C5):\n    pass\nprint(C6.tag)\n```", ["'sub'", "Error", "None", "'C6'"], 0, "__init_subclass__ hook runs when class is subclassed."),
    ("What is printed?\n```python\nclass C7:\n    __init__ = lambda self: None\nprint(C7())\n```", ["C7 instance", "None only", "Error", "True"], 0, "Assigning lambda to __init__ still constructs instance; lambda ignores args beyond self."),
    ("What is printed?\n```python\nclass Meta(type):\n    def __new__(mcls, name, bases, ns):\n        ns['added'] = 1\n        return super().__new__(mcls, name, bases, ns)\nclass C8(metaclass=Meta):\n    pass\nprint(C8.added)\n```", ["1", "Error", "None", "Meta"], 0, "Metaclass __new__ can inject class namespace entries before class creation."),
    ("What is printed?\n```python\nclass C9:\n    def f(self, a, b=2, *, c=3):\n        return a + b + c\nprint(C9().f(1, c=4))\n```", ["7", "6", "Error", "5"], 0, "Keyword-only c=4; a=1, b default 2 → 1+2+4=7."),
    ("What is printed?\n```python\nclass C10:\n    pass\nC10.alias = C10\nprint(C10.alias is C10)\n```", ["True", "False", "Error", "None"], 0, "Class attributes can alias the class object itself."),
    ("What is printed?\n```python\nclass Vector:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\nprint((Vector(1,2) + Vector(3,4)).x)\n```", ["4", "1", "7", "Error"], 0, "Operator + uses __add__; resulting x is 1+3=4."),
    ("What is printed?\n```python\nclass Box:\n    def __init__(self, v):\n        self._v = v\n    @property\n    def v(self):\n        return self._v\n    @v.setter\n    def v(self, val):\n        if val < 0: raise ValueError\n        self._v = val\nBox(1).v = 5\nprint(Box(1).v)\n```", ["1", "5", "Error on second instance", "None"], 0, "Second Box(1) is separate instance; first was mutated to 5 but second still has 1."),
]

# MISC cards (74)
MISC_TEMPLATES = [
    ("What is `[x*x for x in range(4) if x % 2]`?", ["[1, 9]", "[0, 1, 4, 9]", "[1, 4, 9]", "Error"], 0, "Odd x in 0..3: 1 and 3 → squares 1 and 9."),
    ("What is `{x: x**2 for x in range(3)}`?", ["{0:0, 1:1, 2:4}", "[0,1,4]", "{1,4,9}", "Error"], 0, "Dict comprehension maps keys 0..2 to squares."),
    ("What is `(x for x in range(2))` type?", ["generator", "tuple", "list", "range"], 0, "Parentheses with comprehension create generator expression."),
    ("What is printed?\n```python\nf = lambda x, y=2: x + y\nprint(f(3))\n```", ["5", "3", "Error", "None"], 0, "Default y=2; f(3) → 5."),
    ("What is printed?\n```python\ndef make(n):\n    return lambda x: x + n\nprint(make(2)(3))\n```", ["5", "3", "2", "Error"], 0, "Closure captures n=2; 3+2=5."),
    ("What is printed?\n```python\ndef dec(f):\n    def wrapper(*a, **k):\n        return f(*a, **k) * 2\n    return wrapper\n@dec\ndef g(x):\n    return x\nprint(g(4))\n```", ["8", "4", "Error", "None"], 0, "Decorator doubles return value: 4*2=8."),
    ("What is printed?\n```python\nwith open('/dev/null' if False else __file__, 'r') as f:\n    pass\n```", ["Context closes file automatically", "File never closed", "SyntaxError", "Always IOError"], 0, "with ensures __exit__ closes file even if body succeeds."),
    ("What is `list(map(str, [1,2]))`?", ["['1','2']", "[1,2]", "['12']", "Error"], 0, "map applies str to each element."),
    ("What is `list(filter(lambda x: x>0, [-1,0,2]))`?", ["[2]", "[-1,0,2]", "[0,2]", "Error"], 0, "filter keeps elements where predicate is true."),
    ("What is printed?\n```python\nfrom functools import reduce\nprint(reduce(lambda a,b: a+b, [1,2,3], 10))\n```", ["16", "6", "10", "Error"], 0, "reduce with initial 10: ((10+1)+2)+3=16."),
    ("What is printed?\n```python\ndef gen():\n    yield 1\n    yield 2\nprint(list(gen()))\n```", ["[1, 2]", "(1, 2)", "Error", "None"], 0, "Generator function yields values consumed by list()."),
    ("What is printed?\n```python\ndef g2():\n    yield from [3,4]\nprint(list(g2()))\n```", ["[3, 4]", "[3]", "Error", "None"], 0, "yield from delegates to iterable."),
    ("What is `[*range(3), 9]`?", ["[0,1,2,9]", "[3,9]", "Error", "[9,0,1,2]"], 0, "Unpacking range into list literal."),
    ("What is printed?\n```python\ndef f(a, *args, b=9, **kw):\n    print(len(args), kw.get('z'))\nf(1,2,3,z=0)\n```", ["2 0", "3 0", "2 None", "Error"], 0, "args=(2,3) length 2; kw z=0."),
    ("What is printed?\n```python\nx = 1\ndef outer():\n    x = 2\n    def inner():\n        nonlocal x\n        x += 1\n        return x\n    return inner()\nprint(outer())\n```", ["3", "2", "1", "Error"], 0, "nonlocal x refers to outer's x: 2+1=3."),
    ("What is printed?\n```python\ncount = 0\ndef h():\n    global count\n    count += 1\nh(); h()\nprint(count)\n```", ["2", "0", "1", "Error"], 0, "global allows modifying module-level count."),
    ("What is `sorted(['10','2'], key=int)`?", ["['2','10']", "['10','2']", "Error", "['10','2'] numeric"], 0, "key=int compares numerically: 2 before 10."),
    ("What is printed?\n```python\nimport copy\na = [[1], [2]]\nb = copy.copy(a)\nb[0].append(9)\nprint(a[0])\n```", ["[1, 9]", "[1]", "[9]", "Error"], 0, "Shallow copy shares nested lists; mutating b[0] affects a[0]."),
    ("What is printed?\n```python\nimport copy\na = [[1], [2]]\nb = copy.deepcopy(a)\nb[0].append(9)\nprint(a[0])\n```", ["[1]", "[1, 9]", "[9]", "Error"], 0, "Deep copy duplicates nested objects independently."),
    ("What is `(n := 3) + 1`?", ["4", "3", "Error", "None"], 0, "Walrus assigns n=3 then adds 1."),
    ("What is `'a' if True else 'b'`?", ["'a'", "'b'", "True", "Error"], 0, "Conditional expression evaluates true branch."),
    ("What is `[] or [1]`?", ["[1]", "[]", "True", "Error"], 0, "Empty list is falsy; or returns second operand [1]."),
    ("What is `0.1 + 0.2 == 0.3`?", ["False", "True", "Error", "None"], 0, "Floating-point representation causes tiny error."),
    ("What is `3 is 3`?", ["True", "False", "Error", "Depends on platform only always False"], 0, "Small int caching makes is True for small integers in CPython."),
    ("What is `'hello' is 'hello'`?", ["True (often due to interning)", "False always", "Error", "None"], 0, "CPython may intern compile-time string literals making is True."),
    ("What is printed?\n```python\nprint(list(zip([1,2], 'ab')))\n```", ["[(1,'a'),(2,'b')]", "[(1,2),('a','b')]", "Error", "[1,'a',2,'b']"], 0, "zip pairs elements until shortest exhausted."),
    ("What is `list(enumerate(['x','y']))`?", ["[(0,'x'),(1,'y')]", "[('x',0),('y',1)]", "Error", "[0,1]"], 0, "enumerate yields index,value pairs starting 0."),
    ("What is printed?\n```python\nit = iter([1,2])\nprint(next(it), next(it))\n```", ["1 2", "2 1", "Error on second", "[1,2]"], 0, "next retrieves sequential iterator values."),
    ("What is `{1,2} & {2,3}`?", ["{2}", "{1,2,3}", "set()", "Error"], 0, "Set intersection contains common element 2."),
    ("What is `{1,2} | {2,3}`?", ["{1,2,3}", "{2}", "{1,3}", "Error"], 0, "Union combines all unique elements."),
    ("What is `dict.fromkeys(['a','b'], 0)`?", ["{'a':0,'b':0}", "['a','b']", "Error", "{0:['a','b']}"], 0, "fromkeys builds dict with each key mapped to given value."),
    ("What is printed?\n```python\na = {'x': 1}\nb = a\nb['y'] = 2\nprint('y' in a)\n```", ["True", "False", "Error", "None"], 0, "b aliases same dict object as a."),
    ("What is `[1,2,3][-2]`?", ["2", "3", "1", "Error"], 0, "Negative index -2 is second from end → 2."),
    ("What is `{'a':1}.get('b', 9)`?", ["9", "None", "Error", "1"], 0, "get returns default when key missing."),
    ("What is printed?\n```python\nprint([n for n in range(3) for m in range(n)])\n```", ["[0, 0, 1]", "[0,1,2]", "[]", "Error"], 0, "Nested comprehension: n=0 none; n=1 → [0]; n=2 → [0,1] → [0,0,1]."),
    ("What is `(lambda: (yield 1))()`?", ["generator", "1", "Error", "None"], 0, "Lambda containing yield is syntax error — trick: actually invalid. Fix: use gen function"),
]

# Fix last misc card - replace invalid lambda/yield
MISC_TEMPLATES[-1] = (
    "What is printed?\n```python\ndef gen():\n    yield 1\n    return 2\nprint(list(gen()))\n```",
    ["[1]", "[1, 2]", "[2]", "Error"],
    0,
    "return value in generator ends iteration; list collects only yielded 1.",
)

# Add more misc to reach 74
EXTRA_MISC = [
    ("What is `bytes([65, 66]).decode()`?", ["'AB'", "b'AB'", "[65,66]", "Error"], 0, "bytes from ints decode to ASCII AB."),
    ("What is printed?\n```python\nwith open(__import__('io').StringIO('line\\n') as f:\n    print(f.read())\n```", ["'line\\n'", "Error — StringIO not a path", "None", "''"], 0, "StringIO needs context differently; use StringIO('line\\n') directly:"),
]

# Replace broken StringIO card
EXTRA_MISC[1] = (
    "What is printed?\n```python\nfrom io import StringIO\ns = StringIO('line\\n')\nprint(s.read())\n```",
    ["'line\\n'", "'line'", "Error", "None"],
    0,
    "StringIO.read returns entire buffer including newline.",
)

# Generate remaining misc programmatically
MISC_CODE = [
    ("What is `min([3,1,2], default=0)`?", ["1", "0", "3", "Error"], 0, "min returns smallest element."),
    ("What is `max([], default=5)`?", ["5", "Error", "None", "0"], 0, "default used when iterable empty."),
    ("What is `all([1, '', 3])`?", ["False", "True", "Error", "None"], 0, "Empty string is falsy; all returns False."),
    ("What is `any([0, [], 2])`?", ["True", "False", "Error", "None"], 0, "2 is truthy; any returns True."),
    ("What is `sum([[1],[2]], [])`?", ["[1, 2]", "3", "Error", "[[1],[2]]"], 0, "sum with start [] concatenates lists."),
    ("What is `'  x  '.strip()`?", ["'x'", "'  x  '", "'x  '", "Error"], 0, "strip removes surrounding whitespace."),
    ("What is `list(reversed([1,2]))`?", ["[2, 1]", "reversed object", "[1,2]", "Error"], 0, "reversed returns iterator; list materializes [2,1]."),
    ("What is `{1,1,2}`?", ["{1, 2}", "{1,1,2}", "[1,2]", "Error"], 0, "Sets deduplicate elements."),
    ("What is `(1,2) * 2`?", ["(1, 2, 1, 2)", "(1, 4)", "Error", "(2,4)"], 0, "Tuple repetition duplicates sequence."),
    ("What is `1,` type?", ["tuple", "int", "comma invalid", "list"], 0, "Trailing comma creates one-element tuple."),
    ("What is printed?\n```python\na, *b = [1,2,3]\nprint(b)\n```", ["[2, 3]", "[1]", "[1,2,3]", "Error"], 0, "Star unpack collects rest into list."),
    ("What is printed?\n```python\nprint({i for i in 'aab'})\n```", ["{'a','b'}", "['a','b']", "{'aa','b'}", "Error"], 0, "Set comprehension deduplicates characters."),
    ("What is `divmod(7, 3)`?", ["(2, 1)", "(1, 2)", "2.333", "Error"], 0, "Returns quotient and remainder (2, 1)."),
    ("What is `pow(2, 3, 5)`?", ["3", "8", "2", "Error"], 0, "Modular exponentiation: 8 % 5 = 3."),
    ("What is `'abc'.removesuffix('c')` (Py3.9+)?", ["'ab'", "'abc'", "'a'", "Error"], 0, "removesuffix strips suffix if present."),
    ("What is `'abc'.removeprefix('ab')`?", ["'c'", "'abc'", "''", "Error"], 0, "removeprefix strips leading prefix."),
    ("What is printed?\n```python\nimport itertools\nprint(list(itertools.islice(range(10), 2, 5)))\n```", ["[2, 3, 4]", "[0,1,2,3,4]", "[2,5]", "Error"], 0, "islice selects indices 2,3,4."),
    ("What is `format(255, 'x')`?", ["'ff'", "'255'", "'FF'", "Error"], 0, "Lowercase hex format."),
    ("What is `bin(5)`?", ["'0b101'", "'101'", "5", "Error"], 0, "bin prefix 0b for binary string."),
    ("What is `oct(8)`?", ["'0o10'", "'10'", "8", "Error"], 0, "Octal representation of 8 is 0o10."),
    ("What is `'1' + '2'`?", ["'12'", "3", "Error", "['1','2']"], 0, "String concatenation not numeric addition."),
    ("What is `int('101', 2)`?", ["5", "101", "Error", "3"], 0, "Binary 101 equals decimal 5."),
    ("What is `float('inf') > 1e308`?", ["True", "False", "Error", "None"], 0, "Infinity exceeds any finite float."),
    ("What is printed?\n```python\ntry:\n    print(1/0)\nexcept ZeroDivisionError as e:\n    print('err')\n```", ["'err'", "1", "Error uncaught", "None"], 0, "Division by zero caught; prints err."),
    ("What is `type(lambda x: x)`?", ["function", "lambda", "method", "generator"], 0, "Lambdas are function objects."),
    ("What is printed?\n```python\ndef f():\n    return (yield 1)\nprint(type(f()))\n```", ["generator", "function", "int", "NoneType"], 0, "Function with yield returns generator when called."),
    ("What is `__import__('math').pi > 3`?", ["True", "False", "Error", "None"], 0, "math.pi is approximately 3.14159."),
    ("What is printed?\n```python\nsquares = (n*n for n in range(3))\nprint(next(squares), next(squares))\n```", ["0 1", "1 4", "0 4", "Error"], 0, "Generator yields 0 then 1 on successive next calls."),
    ("What is `list(dict(a=1, b=2).keys())` order (Py3.7+)?", ["Insertion order a then b", "Sorted alphabetically always", "Random", "Error"], 0, "Dict preserves insertion order in modern Python."),
    ("What is `'\\'.join(['a','b'])`?", ["'a\\b'", "'ab'", "Error", "'a,b'"], 0, "join inserts backslash between parts."),
    ("What is printed?\n```python\nfuncs = [lambda i=i: i for i in range(3)]\nprint([f() for f in funcs])\n```", ["[0, 1, 2]", "[2, 2, 2]", "[0, 0, 0]", "Error"], 0, "Default arg i=i binds loop variable per iteration correctly."),
    ("What is printed?\n```python\nfuncs = [lambda: i for i in range(3)]\nprint([f() for f in funcs])\n```", ["[2, 2, 2]", "[0, 1, 2]", "[0, 0, 0]", "Error"], 0, "Late-binding closure: all lambdas share final i=2."),
    ("What is `{'a':1, **{'b':2}}`?", ["{'a':1,'b':2}", "Error", "{'b':2}", "None"], 0, "Dict unpacking merges keys into literal."),
    ("What is `(1,2,3)[1:3]`?", ["(2, 3)", "(1, 2)", "[2,3]", "Error"], 0, "Tuple slicing returns tuple (2,3)."),
    ("What is printed?\n```python\nclass Empty: pass\ne = Empty()\ne.x = 1\nprint(e.x)\n```", ["1", "Error", "None", "0"], 0, "Instances can receive arbitrary attributes unless restricted."),
    ("What is `hash(frozenset([1,2]))` type?", ["int", "frozenset", "Error always", "None"], 0, "hash() returns integer hash value for hashable frozenset."),
    ("What is `[True, False].count(False)`?", ["1", "0", "2", "Error"], 0, "One False in list."),
    ("What is `'py' * 0 + 'thon'`?", ["'thon'", "''", "'python'", "Error"], 0, "Zero repetition yields empty string; concat gives 'thon'."),
    ("What is printed?\n```python\nimport sys\nprint(sys.version_info[0] >= 3)\n```", ["True", "False", "Error", "3"], 0, "Running under Python 3 makes major version >= 3."),
    ("What is `type(None)`?", ["NoneType", "None", "type", "null"], 0, "None has dedicated NoneType."),
    ("What is `bool('')`?", ["False", "True", "None", "Error"], 0, "Empty string is falsy."),
    ("What is `bool('0')`?", ["True", "False", "None", "0"], 0, "Non-empty string '0' is truthy."),
    ("What is `3 < 2 < 4`?", ["False", "True", "Error", "None"], 0, "Chained comparison: 3<2 is False; short-circuits False."),
    ("What is `2 ** 3 ** 2`?", ["512", "64", "36", "Error"], 0, "Exponent right-associative: 2**(3**2)=2**9=512."),
    ("What is `-3 // 2`?", ["-2", "-1", "-1.5", "Error"], 0, "Floor division rounds toward negative infinity."),
    ("What is `3 // 2`?", ["1", "1.5", "2", "Error"], 0, "Integer floor division yields 1."),
    ("What is `'5' + str(5)`?", ["'55'", "10", "Error", "'5 5'"], 0, "Concatenation of string representations."),
    ("What is `list('ab')`?", ["['a','b']", "['ab']", "['a', 'b', '']", "Error"], 0, "str iterable yields single-character strings."),
    ("What is `tuple([1,2])`?", ["(1, 2)", "[1,2]", "(1,2,)", "Error"], 0, "tuple constructor copies sequence to tuple."),
    ("What is `set([1,1,2,2])`?", ["{1, 2}", "[1,2]", "{1,1,2,2}", "Error"], 0, "Set constructor deduplicates."),
    ("What is printed?\n```python\nprint([i for i in range(5) if i % 2 == 0])\n```", ["[0, 2, 4]", "[1,3]", "[0,1,2,3,4]", "Error"], 0, "Even numbers 0,2,4 selected."),
    ("What is `{'a': 1}.values()` type?", ["dict_values view", "list", "tuple", "generator always"], 0, "values() returns dynamic view object."),
    ("What is `'abc'[1:100]`?", ["'bc'", "Error", "'abc'", "''"], 0, "Slice clamps to sequence length; 1:100 → 'bc'."),
    ("What is `not not 0`?", ["False", "True", "0", "Error"], 0, "not 0 is True; not True is False."),
    ("What is `1 < 2 and 3 > 4`?", ["False", "True", "Error", "None"], 0, "Second comparison false makes and false."),
    ("What is `1 or 2 and 3`?", ["1", "3", "2", "True"], 0, "and binds tighter: 1 or (2 and 3) → 1 or 3 → 1."),
    ("What is printed?\n```python\nfor i in range(2):\n    pass\nelse:\n    print('done')\n```", ["'done'", "Nothing", "0 1", "Error"], 0, "for-else runs else when loop completes without break."),
    ("What is printed?\n```python\nfor i in range(2):\n    if i == 1:\n        break\nelse:\n    print('done')\n```", ["Nothing", "'done'", "1", "Error"], 0, "break skips for-else clause."),
    ("What is `';'.join([])`?", ["''", "';'", "Error", "None"], 0, "join on empty iterable returns empty string."),
    ("What is `len({'a':1,'b':2})`?", ["2", "4", "1", "Error"], 0, "len counts key-value pairs."),
    ("What is `object()` equal to `object()`?", ["False", "True", "Error", "None"], 0, "Default object identity unique; == False unless same object."),
    ("What is `[] == []`?", ["True", "False", "Error", "None"], 0, "Equal contents compare equal for lists."),
    ("What is `[1,2] is [1,2]`?", ["False", "True", "Error", "Depends on content"], 0, "Distinct list objects; is checks identity not equality."),
    ("What is printed?\n```python\nimport math\nprint(math.floor(2.7))\n```", ["2", "3", "2.7", "Error"], 0, "floor returns greatest integer <= value."),
    ("What is printed?\n```python\nimport math\nprint(math.ceil(-2.7))\n```", ["-2", "-3", "2", "Error"], 0, "ceil(-2.7) is -2."),
    ("What is `'hello'.index('l')`?", ["2", "3", "1", "-1"], 0, "First 'l' at index 2."),
    ("What is `'hello'.rfind('l')`?", ["3", "2", "4", "-1"], 0, "Rightmost 'l' at index 3."),
    ("What is `bytearray(b'abc')` mutable?", ["True", "False", "Error", "Only in Python 2"], 0, "bytearray is mutable bytes sequence."),
    ("What is `memoryview(b'abc')[0]`?", ["97", "b'a'", "'a'", "Error"], 0, "Indexing memoryview of bytes returns int 97 for 'a'."),
    ("What is printed?\n```python\nimport json\nprint(json.loads('{\"a\": 1}')['a'])\n```", ["1", "'1'", "Error", "None"], 0, "JSON numbers decode to Python int."),
    ("What is `open('file.txt', 'w').write('x')` return?", ["1", "None", "'x'", "True"], 0, "write returns number of characters written."),
    ("What is `'\\n'.splitlines()`?", ["['']", "['\\n']", "[]", "Error"], 0, "Single newline splitlines yields one empty string element."),
    ("What is `import keyword; 'def' in keyword.kwlist`?", ["True", "False", "Error", "None"], 0, "'def' is a reserved keyword."),
    ("What is `__name__` in an imported module?", ["The module's fully qualified name", "Always '__main__'", "Always None", "The filename"], 0, "Imported modules have __name__ set to module path string."),
]

MISC_ALL = MISC_TEMPLATES + EXTRA_MISC + MISC_CODE
# Trim/pad to exactly 74
while len(MISC_ALL) < 74:
    i = len(MISC_ALL)
    MISC_ALL.append(
        (
            f"What is `len(range({i}))`?",
            [str(i), str(i - 1), "0", "Error"],
            0,
            f"range({i}) has {i} elements from 0 to {i-1}.",
        )
    )
MISC_ALL = MISC_ALL[:74]

DOMAINS.append(
    {
        "file": "domain4-oop.ts",
        "export": "oopCards",
        "domain": "oop",
        "task": "4",
        "count": 47,
        "start": 70,
        "cards": OOP_TEMPLATES[:47],
    }
)
DOMAINS.append(
    {
        "file": "domain5-misc.ts",
        "export": "miscCards",
        "domain": "misc",
        "task": "5",
        "count": 74,
        "start": 117,
        "cards": MISC_ALL,
    }
)


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace("'", "\\'")


def format_card(card_id: str, domain: str, task: str, tags: list[str], q, opts, correct, expl) -> str:
    opts_ts = ",\n      ".join(f"'{esc(o)}'" for o in opts)
    tags_ts = ", ".join(f"'{t}'" for t in tags)
    correct_ts = ", ".join(str(c) for c in (correct if isinstance(correct, list) else [correct]))
    q_esc = esc(q)
    expl_esc = esc(expl)
    return textwrap.dedent(
        f"""
  {{
    id: '{card_id}',
    domain: '{domain}',
    task: '{task}',
    tags: [{tags_ts}],
    question:
      '{q_esc}',
    options: [
      {opts_ts},
    ],
    correctAnswers: [{correct_ts}],
    explanation:
      '{expl_esc}',
  }}"""
    ).strip()


def write_domain(domain_cfg: dict) -> int:
    cards = domain_cfg["cards"]
    assert len(cards) == domain_cfg["count"]
    lines = [
        "import type { Card } from '../../../core/types'",
        "",
        f"export const {domain_cfg['export']}: Card[] = [",
    ]
    for idx, card in enumerate(cards):
        q, opts, correct, expl = card
        num = domain_cfg["start"] + idx
        card_id = f"pcap-{num:03d}"
        tags = ["pcap-python", domain_cfg["domain"]]
        lines.append(format_card(card_id, domain_cfg["domain"], domain_cfg["task"], tags, q, opts, correct, expl) + ",")
    lines[-1] = lines[-1].rstrip(",")
    lines.append("]")
    lines.append("")
    OUT.mkdir(parents=True, exist_ok=True)
    path = OUT / domain_cfg["file"]
    path.write_text("\n".join(lines), encoding="utf-8")
    return len(cards)


def main() -> None:
    total = 0
    for d in DOMAINS:
        n = write_domain(d)
        total += n
        print(f"Wrote {d['file']}: {n} cards")
    print(f"Total: {total} cards")
    assert total == 190, f"Expected 190 cards, got {total}"


if __name__ == "__main__":
    main()
