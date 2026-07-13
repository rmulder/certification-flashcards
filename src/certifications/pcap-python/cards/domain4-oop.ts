import type { Card } from '../../../core/types'

export const oopCards: Card[] = [
  {
    id: 'pcap-070',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass Dog:\n    def __init__(self, name):\n        self.name = name\n\nd = Dog(\'Rex\')\nprint(d.name)\n```',
    options: ['Rex', 'Dog', 'None', 'AttributeError'],
    correctAnswers: [0],
    explanation:
      '`__init__` binds `name` to the instance via `self`; `d.name` returns `\'Rex\'`.',
  },
  {
    id: 'pcap-071',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass Counter:\n    count = 0\n    def __init__(self):\n        Counter.count += 1\n\na = Counter()\nb = Counter()\nprint(Counter.count)\n```',
    options: ['2', '1', '0', 'AttributeError'],
    correctAnswers: [0],
    explanation:
      '`count` is a class attribute shared by all instances; two instances increment it to 2.',
  },
  {
    id: 'pcap-072',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass A:\n    def greet(self):\n        return \'hi\'\n\nclass B(A):\n    def greet(self):\n        return super().greet() + \'!\'\n\nprint(B().greet())\n```',
    options: ['hi!', 'hi', 'B!', 'AttributeError'],
    correctAnswers: [0],
    explanation:
      '`super().greet()` calls the parent implementation, then the subclass appends `\'!\'`.',
  },
  {
    id: 'pcap-073',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass Animal:\n    def speak(self):\n        return \'...\'\n\nclass Cat(Animal):\n    def speak(self):\n        return \'meow\'\n\nclass Dog(Animal):\n    def speak(self):\n        return \'bark\'\n\nfor a in [Cat(), Dog()]:\n    print(a.speak(), end=\'\')\n```',
    options: ['meowbark', '......', 'meow bark', 'TypeError'],
    correctAnswers: [0],
    explanation:
      'Each subclass overrides `speak`; polymorphism dispatches the correct method per type.',
  },
  {
    id: 'pcap-074',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass Point:\n    def __init__(self, x, y):\n        self._x = x\n        self._y = y\n    @property\n    def x(self):\n        return self._x\n\np = Point(3, 4)\nprint(p.x)\n```',
    options: ['3', '4', 'Point(3, 4)', 'AttributeError'],
    correctAnswers: [0],
    explanation:
      'The `@property` decorator exposes `x` as a read-only attribute accessed without parentheses.',
  },
  {
    id: 'pcap-075',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What happens when this runs?\n```python\nclass Circle:\n    def __init__(self, r):\n        self.r = r\n    @property\n    def r(self):\n        return self._r\n    @r.setter\n    def r(self, value):\n        if value < 0:\n            raise ValueError(\'negative\')\n        self._r = value\n\nc = Circle(5)\nc.r = -1\n```',
    options: ['ValueError is raised', 'r becomes -1', 'AttributeError', 'r stays 5 silently'],
    correctAnswers: [0],
    explanation:
      'The setter validates input and raises `ValueError` when `value < 0`.',
  },
  {
    id: 'pcap-076',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass Util:\n    @staticmethod\n    def add(a, b):\n        return a + b\n\nprint(Util.add(2, 3))\n```',
    options: ['5', 'Util', 'None', 'TypeError'],
    correctAnswers: [0],
    explanation:
      '`@staticmethod` can be called on the class without an instance; `add(2, 3)` returns 5.',
  },
  {
    id: 'pcap-077',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass Person:\n    species = \'human\'\n    def __init__(self, name):\n        self.name = name\n    @classmethod\n    def anonymous(cls):\n        return cls(\'anon\')\n\np = Person.anonymous()\nprint(p.name, Person.species)\n```',
    options: ['anon human', 'anon Person', 'anon anon', 'TypeError'],
    correctAnswers: [0],
    explanation:
      'The classmethod receives `cls` (Person) and constructs an instance with name `\'anon\'`.',
  },
  {
    id: 'pcap-078',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass Box:\n    def __init__(self, v):\n        self.v = v\n    def __str__(self):\n        return f\'Box({self.v})\'\n    def __repr__(self):\n        return f\'Box[{self.v}]\'\n\nb = Box(7)\nprint(str(b), repr(b))\n```',
    options: ['Box(7) Box[7]', 'Box[7] Box(7)', '7 7', 'Box Box'],
    correctAnswers: [0],
    explanation:
      '`str()` calls `__str__`; `repr()` calls `__repr__`, producing different formatted strings.',
  },
  {
    id: 'pcap-079',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n\nv = Vector(1, 2) + Vector(3, 4)\nprint(v.x, v.y)\n```',
    options: ['4 6', '1 2', '3 4', 'TypeError'],
    correctAnswers: [0],
    explanation:
      '`__add__` defines `+` behavior; component-wise addition yields `(4, 6)`.',
  },
  {
    id: 'pcap-080',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass A:\n    pass\n\nclass B(A):\n    pass\n\nclass C(B):\n    pass\n\nprint(issubclass(C, A), isinstance(C(), B))\n```',
    options: ['True True', 'True False', 'False True', 'False False'],
    correctAnswers: [0],
    explanation:
      'C inherits from B which inherits from A, so both `issubclass` and `isinstance` are True.',
  },
  {
    id: 'pcap-081',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass Parent:\n    def __init__(self):\n        self.__secret = 42\n    def get(self):\n        return self.__secret\n\nclass Child(Parent):\n    def leak(self):\n        return self.__secret\n\nprint(Child().get(), end=\' \')\ntry:\n    print(Child().leak())\nexcept Exception as e:\n    print(type(e).__name__)\n```',
    options: ['42 AttributeError', '42 42', 'AttributeError AttributeError', '42 None'],
    correctAnswers: [0],
    explanation:
      'Name mangling renames `__secret` to `_Parent__secret`; subclasses cannot access it directly.',
  },
  {
    id: 'pcap-082',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass Slotty:\n    __slots__ = (\'x\',)\n    def __init__(self, x):\n        self.x = x\n\ns = Slotty(1)\nprint(s.x)\ntry:\n    s.y = 2\nexcept Exception as e:\n    print(type(e).__name__)\n```',
    options: ['1 AttributeError', '1 2', 'AttributeError 1', '1 TypeError'],
    correctAnswers: [0],
    explanation:
      '`__slots__` restricts attributes to `x` only; assigning `y` raises `AttributeError`.',
  },
  {
    id: 'pcap-083',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nfrom dataclasses import dataclass\n\n@dataclass\nclass Point:\n    x: int\n    y: int = 0\n\np = Point(5)\nprint(p.x, p.y)\n```',
    options: ['5 0', '5 None', 'Point(5, 0)', 'TypeError'],
    correctAnswers: [0],
    explanation:
      'Dataclasses auto-generate `__init__`; `y` defaults to 0 when omitted.',
  },
  {
    id: 'pcap-084',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass Multiplier:\n    def __init__(self, factor):\n        self.factor = factor\n    def __call__(self, x):\n        return x * self.factor\n\ndouble = Multiplier(2)\nprint(double(5))\n```',
    options: ['10', '2', '5', 'TypeError'],
    correctAnswers: [0],
    explanation:
      '`__call__` makes instances callable; `double(5)` multiplies 5 by factor 2.',
  },
  {
    id: 'pcap-085',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass Shelf:\n    def __init__(self, items):\n        self.items = items\n    def __getitem__(self, i):\n        return self.items[i]\n\ns = Shelf([\'a\', \'b\', \'c\'])\nprint(s[1])\n```',
    options: ['b', 'a', '1', 'TypeError'],
    correctAnswers: [0],
    explanation:
      '`__getitem__` enables indexing; `s[1]` returns the second list element `\'b\'`.',
  },
  {
    id: 'pcap-086',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass CM:\n    def __enter__(self):\n        print(\'in\')\n        return self\n    def __exit__(self, *args):\n        print(\'out\')\n\nwith CM():\n    print(\'body\')\n```',
    options: ['in, body, out', 'body, in, out', 'in, out', 'body'],
    correctAnswers: [0],
    explanation:
      'Context managers call `__enter__` before the block and `__exit__` after it completes.',
  },
  {
    id: 'pcap-087',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass Meta(type):\n    def __new__(mcs, name, bases, ns):\n        ns[\'tag\'] = \'m\'\n        return super().__new__(mcs, name, bases, ns)\n\nclass A(metaclass=Meta):\n    pass\n\nprint(A.tag)\n```',
    options: ['m', 'Meta', 'A', 'AttributeError'],
    correctAnswers: [0],
    explanation:
      'The metaclass injects `tag` into the class namespace during class creation.',
  },
  {
    id: 'pcap-088',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass A:\n    def f(self):\n        return \'A\'\n\nclass B(A):\n    def f(self):\n        return \'B\'\n\nclass C(A):\n    def f(self):\n        return \'C\'\n\nclass D(B, C):\n    pass\n\nprint(D().f(), D.__mro__[1].__name__)\n```',
    options: ['B B', 'C C', 'B C', 'A A'],
    correctAnswers: [0],
    explanation:
      'MRO for D is D, B, C, A, object; `f` resolves to B\'s method, and `__mro__[1]` is B.',
  },
  {
    id: 'pcap-089',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nfrom abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n\nclass Square(Shape):\n    def __init__(self, s):\n        self.s = s\n    def area(self):\n        return self.s ** 2\n\nprint(Square(3).area())\n```',
    options: ['9', '0', 'TypeError', 'Abstract method error at class definition'],
    correctAnswers: [0],
    explanation:
      'Square implements the abstract `area` method; a concrete instance computes `3**2 = 9`.',
  },
  {
    id: 'pcap-090',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What happens?\n```python\nfrom abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n\ns = Shape()\n```',
    options: ['TypeError when instantiating Shape', 's.area() returns None', 's is created with area=pass', 'AttributeError at import'],
    correctAnswers: [0],
    explanation:
      'ABC prevents instantiation of classes with unimplemented abstract methods.',
  },
  {
    id: 'pcap-091',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass Base:\n    def __init__(self):\n        print(\'B\', end=\'\')\n\nclass Derived(Base):\n    def __init__(self):\n        print(\'D\', end=\'\')\n        super().__init__()\n\nDerived()\n```',
    options: ['DB', 'BD', 'D', 'B'],
    correctAnswers: [0],
    explanation:
      'Derived `__init__` runs first printing D, then `super().__init__()` prints B.',
  },
  {
    id: 'pcap-092',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass A:\n    x = 1\n\nclass B(A):\n    pass\n\nB.x = 2\nprint(A.x, B.x)\n```',
    options: ['1 2', '2 2', '1 1', '2 1'],
    correctAnswers: [0],
    explanation:
      'Assigning `B.x = 2` creates a subclass attribute; `A.x` remains 1.',
  },
  {
    id: 'pcap-093',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass A:\n    def __init__(self, v):\n        self.v = v\n\nclass B(A):\n    def __init__(self, v, w):\n        super().__init__(v)\n        self.w = w\n\nb = B(1, 2)\nprint(b.v, b.w)\n```',
    options: ['1 2', '2 1', '1 None', 'AttributeError'],
    correctAnswers: [0],
    explanation:
      'B\'s `__init__` delegates `v` to A via `super()`, then sets `w`.',
  },
  {
    id: 'pcap-094',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass A:\n    def who(self):\n        return \'A\'\n\nclass B(A):\n    def who(self):\n        return \'B\'\n\nclass C(A):\n    def who(self):\n        return \'C\'\n\nclass D(B, C):\n    def who(self):\n        return super().who()\n\nprint(D().who())\n```',
    options: ['B', 'C', 'A', 'D'],
    correctAnswers: [0],
    explanation:
      'MRO is D, B, C, A; `super().who()` in D skips D and calls B\'s `who`.',
  },
  {
    id: 'pcap-095',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass A:\n    def __len__(self):\n        return 3\n\na = A()\nprint(len(a))\n```',
    options: ['3', '0', 'TypeError', 'A'],
    correctAnswers: [0],
    explanation:
      'Built-in `len()` delegates to the instance\'s `__len__` method.',
  },
  {
    id: 'pcap-096',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass A:\n    def __bool__(self):\n        return False\n\na = A()\nprint(bool(a))\n```',
    options: ['False', 'True', 'None', 'TypeError'],
    correctAnswers: [0],
    explanation:
      '`bool()` calls `__bool__`; returning False makes the instance falsy.',
  },
  {
    id: 'pcap-097',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass A:\n    def __eq__(self, other):\n        return isinstance(other, A)\n\nprint(A() == A(), A() == 1)\n```',
    options: ['True False', 'True True', 'False False', 'False True'],
    correctAnswers: [0],
    explanation:
      'Custom `__eq__` returns True for another A instance and False otherwise.',
  },
  {
    id: 'pcap-098',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass A:\n    def __init__(self):\n        self.items = []\n    def add(self, x):\n        self.items.append(x)\n\na1 = A()\na2 = A()\na1.add(1)\nprint(len(a2.items))\n```',
    options: ['0', '1', '2', 'AttributeError'],
    correctAnswers: [0],
    explanation:
      'Each instance gets its own `items` list in `__init__`; a2\'s list stays empty.',
  },
  {
    id: 'pcap-099',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass A:\n    items = []\n    def add(self, x):\n        self.items.append(x)\n\na1 = A()\na2 = A()\na1.add(1)\nprint(len(a2.items))\n```',
    options: ['1', '0', '2', 'AttributeError'],
    correctAnswers: [0],
    explanation:
      'A mutable class attribute is shared across instances; a1.add affects a2 too.',
  },
  {
    id: 'pcap-100',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass Logger:\n    @classmethod\n    def create(cls, name):\n        return cls(name)\n    def __init__(self, name):\n        self.name = name\n\nclass FileLogger(Logger):\n    pass\n\nf = FileLogger.create(\'app\')\nprint(type(f).__name__, f.name)\n```',
    options: ['FileLogger app', 'Logger app', 'FileLogger Logger', 'TypeError'],
    correctAnswers: [0],
    explanation:
      'Classmethods use `cls`; `FileLogger.create` constructs a FileLogger instance.',
  },
  {
    id: 'pcap-101',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass A:\n    @staticmethod\n    def id_of(obj):\n        return id(obj)\n\na = A()\nprint(A.id_of(a) == id(a))\n```',
    options: ['True', 'False', 'None', 'TypeError'],
    correctAnswers: [0],
    explanation:
      'Static methods do not receive `self`; `id_of` still returns the object\'s identity.',
  },
  {
    id: 'pcap-102',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass Pair:\n    def __init__(self, a, b):\n        self.a = a\n        self.b = b\n    def __iter__(self):\n        yield self.a\n        yield self.b\n\nprint(list(Pair(1, 2)))\n```',
    options: ['[1, 2]', '(1, 2)', '[Pair(1, 2)]', 'TypeError'],
    correctAnswers: [0],
    explanation:
      'Defining `__iter__` makes the object iterable; `list()` collects yielded values.',
  },
  {
    id: 'pcap-103',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass A:\n    def __contains__(self, item):\n        return item in [1, 2, 3]\n\nprint(2 in A(), 5 in A())\n```',
    options: ['True False', 'False True', 'True True', 'False False'],
    correctAnswers: [0],
    explanation:
      'The `in` operator calls `__contains__`; 2 is present, 5 is not.',
  },
  {
    id: 'pcap-104',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass A:\n    def __init__(self, n):\n        self.n = n\n    def __lt__(self, other):\n        return self.n < other.n\n\nprint(sorted([A(3), A(1), A(2)], key=lambda x: x.n)[0].n)\n```',
    options: ['1', '2', '3', 'TypeError'],
    correctAnswers: [0],
    explanation:
      'Sorting by `n` orders instances; the smallest `n` is 1.',
  },
  {
    id: 'pcap-105',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nfrom dataclasses import dataclass\n\n@dataclass(frozen=True)\nclass Point:\n    x: int\n    y: int\n\np = Point(1, 2)\ntry:\n    p.x = 5\nexcept Exception as e:\n    print(type(e).__name__)\n```',
    options: ['FrozenInstanceError', 'AttributeError', 'TypeError', 'ValueError'],
    correctAnswers: [0],
    explanation:
      '`frozen=True` makes dataclass instances immutable; mutation raises `FrozenInstanceError`.',
  },
  {
    id: 'pcap-106',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass A:\n    def __getattr__(self, name):\n        return f\'missing:{name}\'\n\na = A()\nprint(a.foo)\n```',
    options: ['missing:foo', 'AttributeError', 'None', 'foo'],
    correctAnswers: [0],
    explanation:
      '`__getattr__` runs only for missing attributes; it returns a custom string.',
  },
  {
    id: 'pcap-107',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass A:\n    def __setattr__(self, name, value):\n        if name == \'x\' and value < 0:\n            raise ValueError(\'bad\')\n        super().__setattr__(name, value)\n\na = A()\ntry:\n    a.x = -1\nexcept Exception as e:\n    print(type(e).__name__)\n```',
    options: ['ValueError', 'AttributeError', 'TypeError', 'None'],
    correctAnswers: [0],
    explanation:
      'Overriding `__setattr__` allows validation before delegating to `super().__setattr__`.',
  },
  {
    id: 'pcap-108',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass A:\n    def method(self):\n        return \'inst\'\n\na = A()\nprint(A.method(a) == a.method())\n```',
    options: ['True', 'False', 'TypeError', 'None'],
    correctAnswers: [0],
    explanation:
      'Functions accessed via the class are unbound and require `self`; both calls are equivalent.',
  },
  {
    id: 'pcap-109',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass A:\n    pass\n\nclass B(A):\n    pass\n\nprint(isinstance(42, A), issubclass(B, object))\n```',
    options: ['False True', 'True True', 'False False', 'True False'],
    correctAnswers: [0],
    explanation:
      'Integers are not A instances; every new-style class subclasses `object`.',
  },
  {
    id: 'pcap-110',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass A:\n    def __del__(self):\n        print(\'gone\')\n\na = A()\ndel a\n```',
    options: ['gone', 'Nothing is printed', 'AttributeError', 'gone twice'],
    correctAnswers: [0],
    explanation:
      '`__del__` is the finalizer; `del a` drops the reference and may trigger it immediately.',
  },
  {
    id: 'pcap-111',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass A:\n    __slots__ = (\'x\',)\n\nclass B(A):\n    __slots__ = (\'y\',)\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\nb = B(1, 2)\nprint(b.x, b.y)\n```',
    options: ['1 2', '1 AttributeError', 'AttributeError 2', 'TypeError'],
    correctAnswers: [0],
    explanation:
      'Subclass `__slots__` add to parent slots; both `x` and `y` are valid instance attributes.',
  },
  {
    id: 'pcap-112',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass A:\n    def __repr__(self):\n        return \'A()\'\n\nclass B(A):\n    def __repr__(self):\n        return super().__repr__() + \'!\'\n\nprint(repr(B()))\n```',
    options: ['A()!', 'B()!', 'A()', 'B()'],
    correctAnswers: [0],
    explanation:
      'B\'s `__repr__` calls the parent version via `super()` and appends `\'!\'`.',
  },
  {
    id: 'pcap-113',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass A:\n    def __init__(self, **kw):\n        self.__dict__.update(kw)\n\na = A(x=1, y=2)\nprint(a.x, a.y)\n```',
    options: ['1 2', 'AttributeError', 'kw kw', 'None None'],
    correctAnswers: [0],
    explanation:
      '`**kw` collects keyword args; updating `__dict__` sets instance attributes dynamically.',
  },
  {
    id: 'pcap-114',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass A:\n    def __new__(cls, *args, **kwargs):\n        print(\'new\', end=\' \')\n        return super().__new__(cls)\n    def __init__(self):\n        print(\'init\', end=\' \')\n\nA()\n```',
    options: ['new init', 'init new', 'new', 'init'],
    correctAnswers: [0],
    explanation:
      '`__new__` creates the instance before `__init__` initializes it.',
  },
  {
    id: 'pcap-115',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass A:\n    def f(self, x=1):\n        return x\n\nclass B(A):\n    def f(self, x=2):\n        return super().f(x) + 10\n\nprint(B().f())\n```',
    options: ['12', '2', '11', '3'],
    correctAnswers: [0],
    explanation:
      'B\'s default `x=2` is passed to `super().f(x)` which returns 2; adding 10 gives 12.',
  },
  {
    id: 'pcap-116',
    domain: 'oop',
    task: '4',
    tags: ['pcap-python', 'oop'],
    question:
      'What is printed?\n```python\nclass A:\n    pass\n\nprint(type(A), type(A()), A.__bases__)\n```',
    options: [
      "<class 'type'> <class '__main__.A'> (<class 'object'>,)",
      "<class '__main__.A'> <class 'type'> (<class 'object'>,)",
      "<class 'object'> <class 'A'> ()",
      "TypeError",
    ],
    correctAnswers: [0],
    explanation:
      'Classes are instances of `type`; instances are of their class; A subclasses `object`.',
  },
]
