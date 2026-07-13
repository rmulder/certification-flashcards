import type { Card } from '../../../core/types'

export const modulesPackagesCards: Card[] = [
  {
    id: 'pcap-001',
    domain: 'modules-packages',
    task: '1',
    tags: ['pcap-python', 'modules-packages'],
    question:
      'What is printed when `import math; print(math.__name__)` runs?',
    options: [
      'math',
      '__main__',
      'math.py',
      'None',
    ],
    correctAnswers: [0],
    explanation:
      '`math.__name__` is the string `\'math\'` — the fully qualified module name.',
  },
  {
    id: 'pcap-002',
    domain: 'modules-packages',
    task: '1',
    tags: ['pcap-python', 'modules-packages'],
    question:
      'Given `if __name__ == \'__main__\':` in a script run directly, the block executes because:',
    options: [
      '__name__ is set to \'__main__\' for the top-level script',
      '__name__ is always None in scripts',
      '__name__ equals the filename without extension',
      '__name__ is set only inside packages',
    ],
    correctAnswers: [0],
    explanation:
      'When a file is executed as the entry point, Python sets `__name__` to `\'__main__\'`.',
  },
  {
    id: 'pcap-003',
    domain: 'modules-packages',
    task: '1',
    tags: ['pcap-python', 'modules-packages'],
    question:
      'What does `from math import pi, sqrt` place in the current namespace?',
    options: [
      'Only `pi` and `sqrt`',
      'The entire `math` module',
      'All public names from math',
      'A copy of the math module object',
    ],
    correctAnswers: [0],
    explanation:
      '`from module import name` binds specific names directly into the current namespace.',
  },
  {
    id: 'pcap-004',
    domain: 'modules-packages',
    task: '1',
    tags: ['pcap-python', 'modules-packages'],
    question: 'What is the effect of `import module as m`?',
    options: [
      'The module is bound to the local name `m`',
      'A deep copy of the module is created',
      'Only public functions become available as `m`',
      'The module is reloaded from disk',
    ],
    correctAnswers: [0],
    explanation:
      '`import ... as` assigns the module object to an alias without copying it.',
  },
  {
    id: 'pcap-005',
    domain: 'modules-packages',
    task: '1',
    tags: ['pcap-python', 'modules-packages'],
    question: 'Which statement about Python packages is TRUE?',
    options: [
      'A package is a directory containing `__init__.py` (or a namespace package)',
      'Every folder on disk is automatically a package',
      'Packages cannot contain subpackages',
      '`__init__.py` must define `__all__`',
    ],
    correctAnswers: [0],
    explanation:
      'Regular packages are directories with `__init__.py`; namespace packages follow PEP 420 rules.',
  },
  {
    id: 'pcap-006',
    domain: 'modules-packages',
    task: '1',
    tags: ['pcap-python', 'modules-packages'],
    question:
      'Inside package `pkg.sub`, which import reaches sibling module `pkg.other`?',
    options: [
      '`from ..other import func`',
      '`from .other import func`',
      '`import other`',
      '`from pkg.sub.other import func`',
    ],
    correctAnswers: [0],
    explanation:
      'Single dot is current package; double dot goes to the parent package.',
  },
  {
    id: 'pcap-007',
    domain: 'modules-packages',
    task: '1',
    tags: ['pcap-python', 'modules-packages'],
    question: 'What does `__all__ = [\'a\', \'b\']` in a module control?',
    options: [
      'Names exported by `from module import *`',
      'Names visible to `dir()` only',
      'Private attributes accessible via dot notation',
      'Which submodules are loaded at import time',
    ],
    correctAnswers: [0],
    explanation:
      '`__all__` defines the public names imported with `from module import *`.',
  },
  {
    id: 'pcap-008',
    domain: 'modules-packages',
    task: '1',
    tags: ['pcap-python', 'modules-packages'],
    question:
      'What is printed?\n```python\nimport sys\nsys.path.insert(0, \'/tmp\')\nimport mymod\n```\nAssume `/tmp/mymod.py` exists and `/tmp` was not previously on `sys.path`.',
    options: [
      'Python finds and loads `/tmp/mymod.py`',
      'ImportError because only site-packages are searched',
      'SyntaxError on insert',
      'The standard library `mymod` is always preferred',
    ],
    correctAnswers: [0],
    explanation:
      '`sys.path` is the module search path; prepending a directory makes it searchable first.',
  },
  {
    id: 'pcap-009',
    domain: 'modules-packages',
    task: '1',
    tags: ['pcap-python', 'modules-packages'],
    question:
      'What is the output?\n```python\nx = 10\ndef f():\n    print(x)\n    x = 20\nf()\n```',
    options: [
      'UnboundLocalError',
      '10',
      '20',
      'None',
    ],
    correctAnswers: [0],
    explanation:
      'Assignment to `x` inside `f` makes `x` local; reading it before assignment fails.',
  },
  {
    id: 'pcap-010',
    domain: 'modules-packages',
    task: '1',
    tags: ['pcap-python', 'modules-packages'],
    question:
      'Which built-in returns a list of names defined in a module object?',
    options: ['dir()', 'list()', 'names()', 'globals() only'],
    correctAnswers: [0],
    explanation:
      '`dir(obj)` returns sorted attribute names of an object, commonly used on modules.',
  },
  {
    id: 'pcap-011',
    domain: 'modules-packages',
    task: '1',
    tags: ['pcap-python', 'modules-packages'],
    question:
      'What does `getattr(mod, \'missing\', 42)` return if `mod` has no attribute `missing`?',
    options: ['42', 'None', 'AttributeError', "''"],
    correctAnswers: [0],
    explanation:
      'The third argument to `getattr` is the default returned when the attribute is absent.',
  },
  {
    id: 'pcap-012',
    domain: 'modules-packages',
    task: '1',
    tags: ['pcap-python', 'modules-packages'],
    question: 'What is true about `importlib.reload(mod)`?',
    options: [
      'It re-executes the module\'s code in the existing module object',
      'It creates a brand-new module with a different name',
      'It clears all imports from other modules automatically',
      'It only works for built-in modules',
    ],
    correctAnswers: [0],
    explanation:
      '`reload()` re-runs module top-level code, updating the existing module namespace.',
  },
  {
    id: 'pcap-013',
    domain: 'modules-packages',
    task: '1',
    tags: ['pcap-python', 'modules-packages'],
    question:
      'What is printed?\n```python\nimport builtins\nprint(\'sum\' in dir(builtins))\n```',
    options: ['True', 'False', 'Error', 'None'],
    correctAnswers: [0],
    explanation: '`sum` is a built-in function exposed on the `builtins` module.',
  },
  {
    id: 'pcap-014',
    domain: 'modules-packages',
    task: '1',
    tags: ['pcap-python', 'modules-packages'],
    question: 'A relative import `from .utils import helper` requires:',
    options: [
      'The importing file to be part of a package',
      'The script to be run with `python script.py` from any directory',
      'An installed pip package only',
      'Python 2 compatibility mode',
    ],
    correctAnswers: [0],
    explanation:
      'Relative imports use dot notation and only work inside package modules, not standalone scripts.',
  },
  {
    id: 'pcap-015',
    domain: 'modules-packages',
    task: '1',
    tags: ['pcap-python', 'modules-packages'],
    question:
      'What happens?\n```python\nimport mod\nimport mod\nprint(mod is mod)\n```',
    options: [
      'True — modules are cached in `sys.modules`',
      'False — each import creates a new module',
      'ImportError on second import',
      'SyntaxError',
    ],
    correctAnswers: [0],
    explanation:
      'Python caches imported modules in `sys.modules`, so repeated imports return the same object.',
  },
  {
    id: 'pcap-016',
    domain: 'modules-packages',
    task: '1',
    tags: ['pcap-python', 'modules-packages'],
    question:
      'Which expression imports submodule `utils` from package `app`?',
    options: [
      'import app.utils',
      'import utils from app',
      'include app.utils',
      'load app::utils',
    ],
    correctAnswers: [0],
    explanation: '`import pkg.submod` loads a submodule using dotted module names.',
  },
  {
    id: 'pcap-017',
    domain: 'modules-packages',
    task: '1',
    tags: ['pcap-python', 'modules-packages'],
    question: 'What is `__package__` set to in module `app.views.home`?',
    options: [
      "'app.views' when run as part of package `app`",
      'Always None',
      "Always '__main__'",
      'The filesystem path to the file',
    ],
    correctAnswers: [0],
    explanation:
      '`__package__` is the parent package name used to resolve relative imports.',
  },
  {
    id: 'pcap-018',
    domain: 'modules-packages',
    task: '1',
    tags: ['pcap-python', 'modules-packages'],
    question:
      'What is printed?\n```python\nM = type(\'M\', (), {\'x\': 1})\nprint(M.x)\n```',
    options: ['1', 'Error', 'None', "{'x': 1}"],
    correctAnswers: [0],
    explanation:
      'The third argument to `type()` becomes the class namespace; `x` becomes a class attribute.',
  },
  {
    id: 'pcap-019',
    domain: 'modules-packages',
    task: '1',
    tags: ['pcap-python', 'modules-packages'],
    question: 'Which statement about `__init__.py` is MOST accurate?',
    options: [
      'It can execute package initialization code and re-export names',
      'It must be empty in Python 3',
      'It prevents importing submodules',
      'It replaces the need for `setup.py`',
    ],
    correctAnswers: [0],
    explanation:
      '`__init__.py` runs on package import and can define package-level API surface.',
  },
  {
    id: 'pcap-020',
    domain: 'modules-packages',
    task: '1',
    tags: ['pcap-python', 'modules-packages'],
    question: 'What is the result of `hasattr(str, \'upper\')`?',
    options: ['True', 'False', 'None', 'TypeError'],
    correctAnswers: [0],
    explanation: 'Strings have an `upper` method, so `hasattr` returns True.',
  },
  {
    id: 'pcap-021',
    domain: 'modules-packages',
    task: '1',
    tags: ['pcap-python', 'modules-packages'],
    question:
      'What does this print?\n```python\ndef outer():\n    x = \'a\'\n    def inner():\n        return x\n    return inner\nprint(outer()())\n```',
    options: ["'a'", 'NameError', 'None', "''"],
    correctAnswers: [0],
    explanation:
      'Nested functions close over enclosing variables; `inner` returns `\'a\'`.',
  },
  {
    id: 'pcap-022',
    domain: 'modules-packages',
    task: '1',
    tags: ['pcap-python', 'modules-packages'],
    question:
      'Which is the correct way to run a module as a script with `-m`?',
    options: [
      '`python -m package.module` from a directory on PYTHONPATH',
      '`python package/module.py` only',
      '`python -m` requires `.py` extension in the argument',
      '`python -m` disables package imports',
    ],
    correctAnswers: [0],
    explanation:
      '`-m` runs a module as `__main__`, setting package context correctly for relative imports.',
  },
  {
    id: 'pcap-023',
    domain: 'modules-packages',
    task: '1',
    tags: ['pcap-python', 'modules-packages'],
    question: 'What is true about circular imports in Python?',
    options: [
      'They can work if module-level code avoids using not-yet-defined names',
      'They are always impossible',
      'Python detects them and raises ImportError immediately at parse time',
      'Only C extensions can circularly import',
    ],
    correctAnswers: [0],
    explanation:
      'Circular imports succeed when initialization does not require fully initialized partner modules at import time.',
  },
]
