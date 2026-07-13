import type { Card } from '../../../core/types'

export const exceptionsCards: Card[] = [
  {
    id: 'pcap-024',
    domain: 'exceptions',
    task: '2',
    tags: ['pcap-python', 'exceptions'],
    question:
      'What is printed?\n```python\ntry:\n    print(1)\n    raise ValueError(\'bad\')\n    print(2)\nexcept ValueError:\n    print(3)\nfinally:\n    print(4)\n```',
    options: ['1, 3, 4', '1, 2, 3, 4', '3, 4', '1, 4'],
    correctAnswers: [0],
    explanation:
      'Code before the raise runs; except handles ValueError; finally always runs.',
  },
  {
    id: 'pcap-025',
    domain: 'exceptions',
    task: '2',
    tags: ['pcap-python', 'exceptions'],
    question:
      'Which exceptions should application code typically catch?',
    options: [
      'Subclasses of `Exception`, not `BaseException`',
      'Only `KeyboardInterrupt`',
      'Any `BaseException` including `SystemExit`',
      'Only `Exception` exactly, never subclasses',
    ],
    correctAnswers: [0],
    explanation:
      '`Exception` is the base for recoverable errors; `BaseException` includes system exits and interrupts.',
  },
  {
    id: 'pcap-026',
    domain: 'exceptions',
    task: '2',
    tags: ['pcap-python', 'exceptions'],
    question: 'What does the `else` clause of a try/except run?',
    options: [
      'When no exception occurred in the try block',
      'Always after the except block regardless of outcome',
      'Only when an exception is raised',
      'Only when finally raises',
    ],
    correctAnswers: [0],
    explanation:
      '`try/except/else`: else runs if the try block completes without exception.',
  },
  {
    id: 'pcap-027',
    domain: 'exceptions',
    task: '2',
    tags: ['pcap-python', 'exceptions'],
    question:
      'What is printed?\n```python\ntry:\n    raise TypeError(\'t\')\nexcept Exception as e:\n    print(type(e).__name__)\n```',
    options: ['TypeError', 'Exception', 'Error', 't'],
    correctAnswers: [0],
    explanation:
      'The caught object is a TypeError instance; `type(e).__name__` is `\'TypeError\'`.',
  },
  {
    id: 'pcap-028',
    domain: 'exceptions',
    task: '2',
    tags: ['pcap-python', 'exceptions'],
    question:
      'How do you re-raise the current exception preserving traceback?',
    options: [
      'bare `raise` inside except',
      '`raise e` always',
      '`raise Exception()`',
      '`reraise()` built-in',
    ],
    correctAnswers: [0],
    explanation:
      'A bare `raise` in an except block re-raises the active exception with original context.',
  },
  {
    id: 'pcap-029',
    domain: 'exceptions',
    task: '2',
    tags: ['pcap-python', 'exceptions'],
    question: 'What is the parent of `FileNotFoundError`?',
    options: ['OSError', 'RuntimeError', 'ValueError', 'ImportError'],
    correctAnswers: [0],
    explanation: '`FileNotFoundError` is a subclass of `OSError` in Python 3.',
  },
  {
    id: 'pcap-030',
    domain: 'exceptions',
    task: '2',
    tags: ['pcap-python', 'exceptions'],
    question:
      'What is printed?\n```python\ndef f():\n    try:\n        return 1\n    finally:\n        return 2\nprint(f())\n```',
    options: ['2', '1', 'None', 'Error'],
    correctAnswers: [0],
    explanation: 'If finally executes a return, it overrides try/except returns.',
  },
  {
    id: 'pcap-031',
    domain: 'exceptions',
    task: '2',
    tags: ['pcap-python', 'exceptions'],
    question: 'Which creates a custom exception type correctly?',
    options: [
      'class MyError(Exception): pass',
      'class MyError: pass',
      "MyError = Exception('MyError')",
      'def MyError(): raise Exception',
    ],
    correctAnswers: [0],
    explanation:
      'Custom exceptions should subclass `Exception` (or a more specific standard exception).',
  },
  {
    id: 'pcap-032',
    domain: 'exceptions',
    task: '2',
    tags: ['pcap-python', 'exceptions'],
    question:
      'What does `raise ValueError(\'x\') from KeyError(\'y\')` enable?',
    options: [
      'Exception chaining with explicit `__cause__`',
      'Catching both exceptions in one except tuple automatically',
      'Silencing the original traceback',
      'Converting KeyError into ValueError without linkage',
    ],
    correctAnswers: [0],
    explanation:
      '`raise ... from ...` sets `__cause__`, shown in tracebacks for explicit chaining.',
  },
  {
    id: 'pcap-033',
    domain: 'exceptions',
    task: '2',
    tags: ['pcap-python', 'exceptions'],
    question:
      "What is printed?\n```python\ntry:\n    {}['k']\nexcept KeyError:\n    print('A')\nexcept LookupError:\n    print('B')\n```",
    options: ['A', 'B', 'A then B', 'Nothing'],
    correctAnswers: [0],
    explanation:
      'KeyError is caught by the first matching handler; LookupError handler is skipped.',
  },
  {
    id: 'pcap-034',
    domain: 'exceptions',
    task: '2',
    tags: ['pcap-python', 'exceptions'],
    question:
      'What is the effect of `assert False, \'msg\'` when optimization is off (`-O` not used)?',
    options: [
      'Raises AssertionError with message',
      "Prints 'msg' only",
      'Ignored silently',
      'Raises SystemExit',
    ],
    correctAnswers: [0],
    explanation:
      'Assertions raise AssertionError when the condition is false and `-O` is not enabled.',
  },
  {
    id: 'pcap-035',
    domain: 'exceptions',
    task: '2',
    tags: ['pcap-python', 'exceptions'],
    question: 'Which is NOT recommended in modern Python?',
    options: [
      'Bare `except:` catching all exceptions including SystemExit',
      '`except ValueError:`',
      '`except (TypeError, ValueError):`',
      'Logging exception with `logging.exception()`',
    ],
    correctAnswers: [0],
    explanation:
      'Bare except catches BaseException subclasses like KeyboardInterrupt; avoid it.',
  },
  {
    id: 'pcap-036',
    domain: 'exceptions',
    task: '2',
    tags: ['pcap-python', 'exceptions'],
    question:
      'What is printed?\n```python\ntry:\n    int(\'x\')\nexcept ValueError as e:\n    print(e.args[0])\n```',
    options: [
      "invalid literal for int() with base 10: 'x'",
      'ValueError',
      'x',
      '0',
    ],
    correctAnswers: [0],
    explanation:
      'Exception args contain the constructor arguments; ValueError includes the message string.',
  },
  {
    id: 'pcap-037',
    domain: 'exceptions',
    task: '2',
    tags: ['pcap-python', 'exceptions'],
    question: 'What happens if an exception is raised in `finally`?',
    options: [
      'It propagates, potentially masking an earlier exception',
      'It is always ignored',
      'It is converted to Warning',
      'Only SystemError can be raised in finally',
    ],
    correctAnswers: [0],
    explanation:
      'An exception in finally replaces any exception being propagated from try/except.',
  },
  {
    id: 'pcap-038',
    domain: 'exceptions',
    task: '2',
    tags: ['pcap-python', 'exceptions'],
    question: 'Which hierarchy relationship is correct?',
    options: [
      'ArithmeticError is a subclass of Exception',
      'Exception is a subclass of BaseException',
      'KeyboardInterrupt is a subclass of Exception',
      'SystemExit is a subclass of Exception',
    ],
    correctAnswers: [1],
    explanation:
      '`BaseException` is the root; `Exception` derives from it. KeyboardInterrupt and SystemExit derive from BaseException directly.',
  },
  {
    id: 'pcap-039',
    domain: 'exceptions',
    task: '2',
    tags: ['pcap-python', 'exceptions'],
    question:
      'What is printed?\n```python\ntry:\n    1 / 0\nexcept ZeroDivisionError:\n    print(\'zero\')\nelse:\n    print(\'else\')\n```',
    options: ['zero', 'else', 'zero then else', 'Nothing'],
    correctAnswers: [0],
    explanation:
      'ZeroDivisionError triggers except; else is skipped when an exception occurs.',
  },
  {
    id: 'pcap-040',
    domain: 'exceptions',
    task: '2',
    tags: ['pcap-python', 'exceptions'],
    question:
      'What does `except ExceptionGroup as eg:` (Python 3.11+) primarily handle?',
    options: [
      'Multiple exceptions raised concurrently in task groups',
      'All strings grouped together',
      'Only syntax errors',
      'Import cycles',
    ],
    correctAnswers: [0],
    explanation:
      'ExceptionGroup bundles multiple exceptions, common with asyncio TaskGroup failures.',
  },
  {
    id: 'pcap-041',
    domain: 'exceptions',
    task: '2',
    tags: ['pcap-python', 'exceptions'],
    question: 'What is true about `StopIteration`?',
    options: [
      'It signals iterator exhaustion and subclasses Exception',
      'It is a BaseException used for sys.exit',
      'It cannot be caught',
      'It is raised only by syntax errors',
    ],
    correctAnswers: [0],
    explanation:
      'Iterators raise StopIteration to end iteration; it is an Exception subclass.',
  },
  {
    id: 'pcap-042',
    domain: 'exceptions',
    task: '2',
    tags: ['pcap-python', 'exceptions'],
    question:
      'What is printed?\n```python\ndef g():\n    raise RuntimeError(\'r\')\ntry:\n    g()\nexcept RuntimeError:\n    print(\'caught\')\n    raise\n```',
    options: [
      "Prints 'caught' then propagates RuntimeError",
      "Prints 'caught' only",
      'Silent exit',
      'SyntaxError',
    ],
    correctAnswers: [0],
    explanation: 'Bare raise after handling re-raises the same RuntimeError.',
  },
  {
    id: 'pcap-043',
    domain: 'exceptions',
    task: '2',
    tags: ['pcap-python', 'exceptions'],
    question:
      'Which statement about `else` and `return` in try/except is TRUE?',
    options: [
      'A return in try skips else even if no exception occurred',
      'else runs after return in try',
      'finally prevents return from try',
      'else runs before except when exception occurs',
    ],
    correctAnswers: [0],
    explanation:
      'If try returns, else is not executed; finally still runs before the return completes.',
  },
  {
    id: 'pcap-044',
    domain: 'exceptions',
    task: '2',
    tags: ['pcap-python', 'exceptions'],
    question: 'What exception does `next(iter([]))` raise?',
    options: ['StopIteration', 'IndexError', 'ValueError', 'RuntimeError'],
    correctAnswers: [0],
    explanation: 'Calling next on exhausted iterator raises StopIteration.',
  },
  {
    id: 'pcap-045',
    domain: 'exceptions',
    task: '2',
    tags: ['pcap-python', 'exceptions'],
    question:
      'What is the recommended way to raise again with a new message?',
    options: [
      "raise NewError('msg') from original",
      "raise NewError('msg') without from always hides cause",
      'print then pass',
      'sys.exit(1)',
    ],
    correctAnswers: [0],
    explanation: 'Use `raise New from old` to chain exceptions transparently.',
  },
  {
    id: 'pcap-046',
    domain: 'exceptions',
    task: '2',
    tags: ['pcap-python', 'exceptions'],
    question:
      'What is printed?\n```python\ntry:\n    raise KeyError(1)\nexcept KeyError as e:\n    print(1 in e.args)\n```',
    options: ['True', 'False', 'Error', 'None'],
    correctAnswers: [0],
    explanation: 'KeyError(1) stores 1 in args; membership test on args is True.',
  },
]
