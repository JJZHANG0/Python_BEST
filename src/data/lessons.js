export const lessons = [
  {
    id: 1,
    title: 'Python 语法速通',
    description: '变量、类型、控制流、列表字典与字符串操作',
    isChallenge: false,
    content: `
## 欢迎来到 Python 世界！

Python 是一门优雅、强大且易学的编程语言。让我们从基础开始，快速掌握核心语法。

## 变量与数据类型

### 基本类型

Python 是动态类型语言，不需要声明变量类型：

\`\`\`python
# 整数
age = 25
count = -10

# 浮点数
price = 19.99
temperature = -3.5

# 字符串
name = "小明"
message = '学习 Python 很有趣！'

# 布尔值
is_student = True
has_graduated = False

# 空值
result = None
\`\`\`

### 类型转换

\`\`\`python
# 字符串转整数
num_str = "123"
num = int(num_str)  # 123

# 整数转字符串
age = 25
age_str = str(age)  # "25"

# 字符串转浮点数
price_str = "19.99"
price = float(price_str)  # 19.99
\`\`\`

## 控制流

### 条件判断

\`\`\`python
score = 85

if score >= 90:
    print("优秀")
elif score >= 80:
    print("良好")
elif score >= 60:
    print("及格")
else:
    print("不及格")
\`\`\`

### 循环

**for 循环：**

\`\`\`python
# 遍历范围
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# 遍历列表
fruits = ["苹果", "香蕉", "橙子"]
for fruit in fruits:
    print(fruit)

# 带索引遍历
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")
\`\`\`

**while 循环：**

\`\`\`python
count = 0
while count < 5:
    print(count)
    count += 1
\`\`\`

## 列表 (List)

列表是 Python 中最常用的数据结构：

\`\`\`python
# 创建列表
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]

# 访问元素
first = numbers[0]  # 1
last = numbers[-1]  # 5

# 切片
subset = numbers[1:4]  # [2, 3, 4]
every_other = numbers[::2]  # [1, 3, 5]

# 列表方法
numbers.append(6)  # 添加元素
numbers.extend([7, 8])  # 添加多个元素
numbers.insert(0, 0)  # 在索引 0 插入
numbers.remove(3)  # 删除值为 3 的元素
popped = numbers.pop()  # 删除并返回最后一个元素

# 列表推导式 - 强大的工具！
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]
\`\`\`

## 字典 (Dictionary)

字典存储键值对：

\`\`\`python
# 创建字典
student = {
    "name": "小明",
    "age": 20,
    "major": "计算机科学"
}

# 访问值
name = student["name"]
age = student.get("age")  # 更安全，不会报错
grade = student.get("grade", "A")  # 默认值

# 修改和添加
student["age"] = 21
student["grade"] = "A"

# 字典方法
keys = student.keys()
values = student.values()
items = student.items()

# 字典推导式
squares_dict = {x: x**2 for x in range(5)}
\`\`\`

## 字符串操作

\`\`\`python
text = "Hello Python"

# 常用方法
upper = text.upper()  # "HELLO PYTHON"
lower = text.lower()  # "hello python"
replaced = text.replace("Python", "World")

# 分割和连接
words = text.split()  # ["Hello", "Python"]
joined = " ".join(words)  # "Hello Python"

# 格式化字符串
name = "小明"
age = 20
message = f"我叫{name}，今年{age}岁"

# 字符串切片
sub = text[0:5]  # "Hello"
reversed_text = text[::-1]  # 反转字符串
\`\`\`

## 实用技巧

### 多重赋值

\`\`\`python
x, y, z = 1, 2, 3
a, b = b, a  # 交换值
\`\`\`

### 三元运算符

\`\`\`python
result = "偶数" if x % 2 == 0 else "奇数"
\`\`\`

### in 操作符

\`\`\`python
if "Python" in text:
    print("找到了！")

if 3 in [1, 2, 3, 4]:
    print("存在")
\`\`\`

## 小结

恭喜你完成了第一课！你已经掌握了：
- 变量和基本数据类型
- 条件判断和循环
- 列表、字典和字符串操作
- 切片和推导式

现在进入 Quiz 测试你的理解吧！
`,
    quiz: [
      {
        id: 'q1-1',
        question: '编写函数 get_list_length(my_list)，返回列表的长度。',
        hint: '使用 len() 函数',
        starterCode: 'def get_list_length(my_list):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = get_list_length([1, 2, 3, 4, 5])\nprint(result)',
            expected: '5',
            hidden: false
          },
          {
            code: 'result = get_list_length([10, 20])\nprint(result)',
            expected: '2',
            hidden: true
          }
        ]
      },
      {
        id: 'q1-2',
        question: '编写函数 get_first_and_last(my_list)，返回列表的第一个和最后一个元素组成的新列表。',
        hint: '使用索引 [0] 和 [-1]',
        starterCode: 'def get_first_and_last(my_list):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = get_first_and_last([1, 2, 3, 4, 5])\nprint(result)',
            expected: '[1, 5]',
            hidden: false
          },
          {
            code: 'result = get_first_and_last(["a", "b", "c"])\nprint(result)',
            expected: "[\'a\', \'c\']",
            hidden: true
          }
        ]
      },
      {
        id: 'q1-3',
        question: '编写函数 count_positive(numbers)，统计列表中正数的个数。',
        hint: '使用 for 循环和 if 条件',
        starterCode: 'def count_positive(numbers):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = count_positive([1, -2, 3, -4, 5])\nprint(result)',
            expected: '3',
            hidden: false
          },
          {
            code: 'result = count_positive([-1, -2, -3])\nprint(result)',
            expected: '0',
            hidden: true
          }
        ]
      },
      {
        id: 'q1-4',
        question: '编写函数 create_dict_from_lists(keys, values)，从两个列表创建字典。',
        hint: '使用 zip() 函数和 dict()',
        starterCode: 'def create_dict_from_lists(keys, values):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'import json\nresult = create_dict_from_lists(["a", "b", "c"], [1, 2, 3])\nprint(json.dumps(result, sort_keys=True))',
            expected: '{"a": 1, "b": 2, "c": 3}',
            hidden: false
          },
          {
            code: 'import json\nresult = create_dict_from_lists(["x", "y"], [10, 20])\nprint(json.dumps(result, sort_keys=True))',
            expected: '{"x": 10, "y": 20}',
            hidden: true
          }
        ]
      },
      {
        id: 'q1-5',
        question: '编写函数 get_even_numbers(n)，返回 0 到 n 之间的所有偶数列表。',
        hint: '使用 range() 和步长 2，或使用 if 判断',
        starterCode: 'def get_even_numbers(n):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = get_even_numbers(10)\nprint(result)',
            expected: '[0, 2, 4, 6, 8, 10]',
            hidden: false
          },
          {
            code: 'result = get_even_numbers(5)\nprint(result)',
            expected: '[0, 2, 4]',
            hidden: true
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: '函数、模块、文件与异常',
    description: '函数定义、参数、作用域、模块导入、文件操作和异常处理',
    isChallenge: false,
    content: `
## 函数 (Functions)

函数是可重用的代码块，是组织代码的基本单位。

### 基本函数定义

\`\`\`python
def greet(name):
    """这是一个文档字符串，描述函数功能"""
    return f"你好，{name}！"

result = greet("小明")
print(result)  # 你好，小明！
\`\`\`

### 参数类型

**位置参数和关键字参数：**

\`\`\`python
def introduce(name, age, city="北京"):
    return f"{name}，{age}岁，来自{city}"

# 位置参数
print(introduce("小明", 20))

# 关键字参数
print(introduce(name="小红", age=22, city="上海"))

# 混合使用
print(introduce("小刚", age=21))
\`\`\`

**可变参数：**

\`\`\`python
def sum_all(*args):
    """接收任意数量的位置参数"""
    return sum(args)

print(sum_all(1, 2, 3, 4))  # 10

def build_profile(**kwargs):
    """接收任意数量的关键字参数"""
    return kwargs

profile = build_profile(name="小明", age=20, major="CS")
\`\`\`

### Lambda 函数

简洁的匿名函数：

\`\`\`python
# 普通函数
def square(x):
    return x ** 2

# Lambda 版本
square = lambda x: x ** 2

# 常用于排序和过滤
students = [
    {"name": "小明", "score": 85},
    {"name": "小红", "score": 92},
    {"name": "小刚", "score": 78}
]

# 按分数排序
sorted_students = sorted(students, key=lambda s: s["score"], reverse=True)
\`\`\`

### 作用域

\`\`\`python
global_var = "全局变量"

def outer():
    outer_var = "外部变量"
    
    def inner():
        inner_var = "内部变量"
        # 可以访问所有外层作用域的变量
        print(global_var, outer_var, inner_var)
    
    inner()

# global 和 nonlocal 关键字
count = 0

def increment():
    global count  # 修改全局变量
    count += 1
\`\`\`

## 模块 (Modules)

模块是包含 Python 代码的文件，用于组织和重用代码。

### 导入模块

\`\`\`python
# 导入整个模块
import math
result = math.sqrt(16)

# 导入特定函数
from math import sqrt, pi
result = sqrt(16)

# 导入并重命名
import numpy as np
from datetime import datetime as dt

# 导入所有（不推荐）
from math import *
\`\`\`

### 常用标准库

\`\`\`python
# datetime - 日期和时间
from datetime import datetime, timedelta

now = datetime.now()
tomorrow = now + timedelta(days=1)
formatted = now.strftime("%Y-%m-%d %H:%M:%S")

# random - 随机数
import random

random_num = random.randint(1, 100)
random_choice = random.choice(["苹果", "香蕉", "橙子"])
random.shuffle(my_list)

# json - JSON 处理
import json

data = {"name": "小明", "age": 20}
json_str = json.dumps(data, ensure_ascii=False)
parsed = json.loads(json_str)
\`\`\`

## 文件操作

### 读取文件

\`\`\`python
# 读取整个文件
with open("data.txt", "r", encoding="utf-8") as file:
    content = file.read()

# 按行读取
with open("data.txt", "r", encoding="utf-8") as file:
    for line in file:
        print(line.strip())

# 读取所有行到列表
with open("data.txt", "r", encoding="utf-8") as file:
    lines = file.readlines()
\`\`\`

### 写入文件

\`\`\`python
# 写入（覆盖）
with open("output.txt", "w", encoding="utf-8") as file:
    file.write("第一行\\n")
    file.write("第二行\\n")

# 追加
with open("output.txt", "a", encoding="utf-8") as file:
    file.write("新的一行\\n")

# 写入多行
lines = ["行1\\n", "行2\\n", "行3\\n"]
with open("output.txt", "w", encoding="utf-8") as file:
    file.writelines(lines)
\`\`\`

### 路径操作

\`\`\`python
from pathlib import Path

# 创建 Path 对象
path = Path("data/users.txt")

# 检查存在性
if path.exists():
    print("文件存在")

# 创建目录
Path("data/output").mkdir(parents=True, exist_ok=True)

# 遍历目录
for file in Path("data").glob("*.txt"):
    print(file.name)
\`\`\`

## 异常处理

优雅地处理错误：

### 基本语法

\`\`\`python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("不能除以零！")
except ValueError as e:
    print(f"值错误：{e}")
except Exception as e:
    print(f"发生错误：{e}")
else:
    print("没有错误发生")
finally:
    print("总是执行（清理代码）")
\`\`\`

### 常见异常

\`\`\`python
# FileNotFoundError - 文件不存在
try:
    with open("nonexistent.txt") as f:
        content = f.read()
except FileNotFoundError:
    print("文件未找到")

# KeyError - 字典键不存在
data = {"name": "小明"}
try:
    age = data["age"]
except KeyError:
    age = None

# ValueError - 类型转换失败
try:
    num = int("abc")
except ValueError:
    print("无法转换为整数")

# IndexError - 索引越界
try:
    item = my_list[100]
except IndexError:
    print("索引超出范围")
\`\`\`

### 抛出异常

\`\`\`python
def validate_age(age):
    if age < 0:
        raise ValueError("年龄不能为负数")
    if age > 150:
        raise ValueError("年龄不合理")
    return age

try:
    validate_age(-5)
except ValueError as e:
    print(f"验证失败：{e}")
\`\`\`

### 自定义异常

\`\`\`python
class InvalidScoreError(Exception):
    """分数无效异常"""
    pass

def validate_score(score):
    if not 0 <= score <= 100:
        raise InvalidScoreError(f"分数必须在 0-100 之间，得到：{score}")
    return score
\`\`\`

## 实用模式

### 上下文管理器

\`\`\`python
# with 语句自动处理资源清理
with open("data.txt") as f1, open("output.txt", "w") as f2:
    for line in f1:
        f2.write(line.upper())
\`\`\`

### 装饰器预览

\`\`\`python
def timing_decorator(func):
    import time
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} 耗时：{end - start:.4f}秒")
        return result
    return wrapper

@timing_decorator
def slow_function():
    import time
    time.sleep(1)
\`\`\`

## 小结

你已经掌握了：
- 函数定义、参数和作用域
- 模块导入和标准库使用
- 文件读写和路径操作
- 异常处理和自定义异常

让我们通过 Quiz 来巩固这些知识！
`,
    quiz: [
      {
        id: 'q2-1',
        question: '编写函数 greet_user(name)，返回问候语 "你好，{name}！"。',
        hint: '使用 f-string 格式化字符串',
        starterCode: 'def greet_user(name):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = greet_user("小明")\nprint(result)',
            expected: '你好，小明！',
            hidden: false
          },
          {
            code: 'result = greet_user("Alice")\nprint(result)',
            expected: '你好，Alice！',
            hidden: true
          }
        ]
      },
      {
        id: 'q2-2',
        question: '编写函数 calculate_sum(a, b)，返回两个数的和。',
        hint: '直接返回 a + b',
        starterCode: 'def calculate_sum(a, b):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = calculate_sum(10, 20)\nprint(result)',
            expected: '30',
            hidden: false
          },
          {
            code: 'result = calculate_sum(5, 7)\nprint(result)',
            expected: '12',
            hidden: true
          }
        ]
      },
      {
        id: 'q2-3',
        question: '编写函数 is_even(n)，判断一个数是否为偶数。返回 True 或 False。',
        hint: '使用 n % 2 == 0',
        starterCode: 'def is_even(n):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = is_even(4)\nprint(result)',
            expected: 'True',
            hidden: false
          },
          {
            code: 'result = is_even(7)\nprint(result)',
            expected: 'False',
            hidden: true
          }
        ]
      },
      {
        id: 'q2-4',
        question: '编写函数 read_file_lines(content)，将文件内容字符串按行分割成列表。',
        hint: '使用 content.split("\\n")',
        starterCode: 'def read_file_lines(content):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'content = "line1\\nline2\\nline3"\nresult = read_file_lines(content)\nprint(result)',
            expected: "['line1', 'line2', 'line3']",
            hidden: false
          },
          {
            code: 'content = "hello\\nworld"\nresult = read_file_lines(content)\nprint(result)',
            expected: "['hello', 'world']",
            hidden: true
          }
        ]
      },
      {
        id: 'q2-5',
        question: '编写函数 safe_divide(a, b)，安全地执行除法。如果 b 为 0，返回字符串 "Error"。',
        hint: '使用 if 判断 b 是否为 0',
        starterCode: 'def safe_divide(a, b):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = safe_divide(10, 2)\nprint(result)',
            expected: '5.0',
            hidden: false
          },
          {
            code: 'result = safe_divide(10, 0)\nprint(result)',
            expected: 'Error',
            hidden: true
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'OOP + 进阶语法',
    description: '类与对象、继承、装饰器、生成器、with语句和类型提示',
    isChallenge: false,
    content: `
## 面向对象编程 (OOP)

### 类和对象

\`\`\`python
class Student:
    # 类变量
    school = "Python 大学"
    
    def __init__(self, name, age, major):
        # 实例变量
        self.name = name
        self.age = age
        self.major = major
        self.courses = []
    
    def introduce(self):
        return f"我是{self.name}，学习{self.major}"
    
    def enroll(self, course):
        self.courses.append(course)
        return f"已注册课程：{course}"

# 创建对象
student = Student("小明", 20, "计算机科学")
print(student.introduce())
student.enroll("Python 编程")
\`\`\`

### 特殊方法（魔术方法）

\`\`\`python
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
    
    def __str__(self):
        """字符串表示（给用户看）"""
        return f"《{self.title}》by {self.author}"
    
    def __repr__(self):
        """官方字符串表示（给开发者看）"""
        return f"Book('{self.title}', '{self.author}', {self.pages})"
    
    def __len__(self):
        """支持 len() 函数"""
        return self.pages
    
    def __eq__(self, other):
        """支持 == 比较"""
        return self.title == other.title
    
    def __lt__(self, other):
        """支持 < 比较（用于排序）"""
        return self.pages < other.pages

book = Book("Python 编程", "张三", 350)
print(str(book))
print(len(book))
\`\`\`

### 继承

\`\`\`python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        return f"我是{self.name}，{self.age}岁"

class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)  # 调用父类构造函数
        self.student_id = student_id
    
    def introduce(self):
        # 方法重写
        return f"{super().introduce()}，学号：{self.student_id}"

class Teacher(Person):
    def __init__(self, name, age, subject):
        super().__init__(name, age)
        self.subject = subject
    
    def introduce(self):
        return f"{super().introduce()}，教授{self.subject}"
\`\`\`

### 属性装饰器

\`\`\`python
class Circle:
    def __init__(self, radius):
        self._radius = radius
    
    @property
    def radius(self):
        """获取半径"""
        return self._radius
    
    @radius.setter
    def radius(self, value):
        """设置半径（带验证）"""
        if value <= 0:
            raise ValueError("半径必须为正数")
        self._radius = value
    
    @property
    def area(self):
        """计算面积（只读属性）"""
        import math
        return math.pi * self._radius ** 2

circle = Circle(5)
print(circle.radius)  # 使用 getter
circle.radius = 10    # 使用 setter
print(circle.area)    # 计算属性
\`\`\`

### 类方法和静态方法

\`\`\`python
class MathUtils:
    PI = 3.14159
    
    @classmethod
    def from_diameter(cls, diameter):
        """类方法 - 替代构造函数"""
        return cls(diameter / 2)
    
    @staticmethod
    def is_even(n):
        """静态方法 - 不需要访问类或实例"""
        return n % 2 == 0

# 使用
print(MathUtils.is_even(4))
\`\`\`

## 装饰器 (Decorators)

装饰器是修改函数行为的强大工具。

### 函数装饰器

\`\`\`python
def timer(func):
    """计时装饰器"""
    import time
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} 耗时 {end - start:.4f} 秒")
        return result
    return wrapper

@timer
def slow_function():
    import time
    time.sleep(1)
    return "完成"

# 等价于：slow_function = timer(slow_function)
result = slow_function()
\`\`\`

### 带参数的装饰器

\`\`\`python
def repeat(times):
    """重复执行装饰器"""
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)
def greet(name):
    print(f"你好，{name}！")

greet("小明")  # 打印 3 次
\`\`\`

### 常用内置装饰器

\`\`\`python
import functools

def smart_divide(func):
    @functools.wraps(func)  # 保留原函数元数据
    def wrapper(a, b):
        if b == 0:
            return "不能除以零"
        return func(a, b)
    return wrapper

@smart_divide
def divide(a, b):
    """执行除法"""
    return a / b
\`\`\`

## 生成器 (Generators)

生成器是内存高效的迭代工具。

### 生成器函数

\`\`\`python
def fibonacci_generator(n):
    """生成斐波那契数列"""
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

# 使用生成器
for num in fibonacci_generator(10):
    print(num, end=" ")

# 生成器表达式（类似列表推导式）
squares = (x**2 for x in range(1000000))  # 不会立即计算所有值
\`\`\`

### 实用示例

\`\`\`python
def read_large_file(filename):
    """逐行读取大文件，节省内存"""
    with open(filename) as f:
        for line in f:
            yield line.strip()

def batch_processor(items, batch_size):
    """分批处理数据"""
    batch = []
    for item in items:
        batch.append(item)
        if len(batch) == batch_size:
            yield batch
            batch = []
    if batch:
        yield batch

# 使用
for batch in batch_processor(range(100), 10):
    process_batch(batch)
\`\`\`

## 上下文管理器 (Context Managers)

### 使用 with 语句

\`\`\`python
# 自动关闭文件
with open("data.txt") as f:
    data = f.read()

# 多个上下文
with open("input.txt") as fin, open("output.txt", "w") as fout:
    for line in fin:
        fout.write(line.upper())
\`\`\`

### 自定义上下文管理器

\`\`\`python
class Timer:
    def __enter__(self):
        import time
        self.start = time.time()
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        import time
        self.end = time.time()
        self.elapsed = self.end - self.start
        print(f"耗时：{self.elapsed:.4f}秒")
        return False  # 不抑制异常

with Timer():
    # 执行一些操作
    sum(range(1000000))
\`\`\`

### 使用 contextlib

\`\`\`python
from contextlib import contextmanager

@contextmanager
def temporary_setting(setting, value):
    """临时修改设置"""
    old_value = get_setting(setting)
    set_setting(setting, value)
    try:
        yield
    finally:
        set_setting(setting, old_value)

with temporary_setting("debug", True):
    # debug 模式下的操作
    pass
# debug 自动恢复原值
\`\`\`

## 类型提示 (Type Hints)

Python 3.5+ 支持类型注解，提高代码可读性。

\`\`\`python
from typing import List, Dict, Optional, Union, Tuple

def greet(name: str) -> str:
    return f"你好，{name}！"

def process_numbers(numbers: List[int]) -> int:
    return sum(numbers)

def get_user(user_id: int) -> Optional[Dict[str, Union[str, int]]]:
    # 可能返回 None
    if user_id < 0:
        return None
    return {"name": "小明", "age": 20}

def get_coordinates() -> Tuple[float, float]:
    return (39.9, 116.4)

# 类型别名
UserId = int
UserData = Dict[str, Union[str, int]]

def fetch_user(uid: UserId) -> Optional[UserData]:
    pass
\`\`\`

## 实用进阶技巧

### 数据类

\`\`\`python
from dataclasses import dataclass

@dataclass
class Product:
    name: str
    price: float
    quantity: int = 0
    
    def total_value(self) -> float:
        return self.price * self.quantity

product = Product("笔记本电脑", 5999.99, 2)
print(product.total_value())
\`\`\`

### 枚举

\`\`\`python
from enum import Enum

class Status(Enum):
    PENDING = 1
    APPROVED = 2
    REJECTED = 3

status = Status.PENDING
if status == Status.PENDING:
    print("等待审批")
\`\`\`

## 小结

你已经掌握了：
- 类、继承和特殊方法
- 装饰器的使用和自定义
- 生成器和内存效率
- 上下文管理器
- 类型提示

准备好挑战 Quiz 了吗？
`,
    quiz: [
      {
        id: 'q3-1',
        question: '创建类 Person，包含 name 和 age 属性，以及 introduce() 方法返回 "我叫{name}，{age}岁"。',
        hint: '使用 __init__ 初始化属性',
        starterCode: 'class Person:\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'p = Person("小明", 20)\nprint(p.introduce())',
            expected: '我叫小明，20岁',
            hidden: false
          },
          {
            code: 'p = Person("Alice", 25)\nprint(p.introduce())',
            expected: '我叫Alice，25岁',
            hidden: true
          }
        ]
      },
      {
        id: 'q3-2',
        question: '编写函数 square_all(numbers)，返回所有数字的平方组成的列表。',
        hint: '使用列表推导式 [x**2 for x in numbers]',
        starterCode: 'def square_all(numbers):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = square_all([1, 2, 3, 4])\nprint(result)',
            expected: '[1, 4, 9, 16]',
            hidden: false
          },
          {
            code: 'result = square_all([5, 6])\nprint(result)',
            expected: '[25, 36]',
            hidden: true
          }
        ]
      },
      {
        id: 'q3-3',
        question: '编写装饰器 add_greeting，在函数返回值前加上 "Hello, "。',
        hint: '装饰器返回一个包装函数',
        starterCode: 'def add_greeting(func):\n    # 你的代码\n    pass\n\n@add_greeting\ndef get_name():\n    return "World"\n',
        testCases: [
          {
            code: 'result = get_name()\nprint(result)',
            expected: 'Hello, World',
            hidden: false
          }
        ]
      },
      {
        id: 'q3-4',
        question: '创建类 Counter，包含 count 属性（初始为 0）和 increment() 方法（count 加 1）。',
        hint: '在 __init__ 中初始化 count',
        starterCode: 'class Counter:\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'c = Counter()\nc.increment()\nc.increment()\nprint(c.count)',
            expected: '2',
            hidden: false
          },
          {
            code: 'c = Counter()\nc.increment()\nprint(c.count)',
            expected: '1',
            hidden: true
          }
        ]
      },
      {
        id: 'q3-5',
        question: '编写函数 filter_positive(numbers)，过滤出所有正数。',
        hint: '使用列表推导式加 if 条件',
        starterCode: 'def filter_positive(numbers):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = filter_positive([1, -2, 3, -4, 5])\nprint(result)',
            expected: '[1, 3, 5]',
            hidden: false
          },
          {
            code: 'result = filter_positive([-1, -2, 0, 1])\nprint(result)',
            expected: '[1]',
            hidden: true
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'HTTP/REST + requests',
    description: 'HTTP 协议、RESTful API 概念和 requests 库实战',
    isChallenge: false,
    content: `
## HTTP 协议基础

### 什么是 HTTP？

HTTP (HyperText Transfer Protocol) 是客户端和服务器之间通信的协议。

**核心概念：**
- **请求 (Request)**：客户端发送给服务器
- **响应 (Response)**：服务器返回给客户端
- **无状态**：每个请求都是独立的

### HTTP 方法

常用的 HTTP 方法（动词）：

- **GET**: 获取资源（只读）
- **POST**: 创建新资源
- **PUT**: 更新整个资源
- **PATCH**: 部分更新资源
- **DELETE**: 删除资源

### HTTP 状态码

\`\`\`
2xx - 成功
  200 OK - 请求成功
  201 Created - 资源已创建
  204 No Content - 成功但无返回内容

3xx - 重定向
  301 Moved Permanently - 永久重定向
  302 Found - 临时重定向

4xx - 客户端错误
  400 Bad Request - 请求格式错误
  401 Unauthorized - 未认证
  403 Forbidden - 无权限
  404 Not Found - 资源未找到
  422 Unprocessable Entity - 验证失败

5xx - 服务器错误
  500 Internal Server Error - 服务器错误
  502 Bad Gateway - 网关错误
  503 Service Unavailable - 服务不可用
\`\`\`

## REST API 设计

### RESTful 原则

REST (Representational State Transfer) 是一种 API 设计风格。

**核心原则：**
1. **资源导向**：URL 表示资源
2. **HTTP 方法**：表示操作
3. **无状态**：每个请求包含所有必要信息
4. **统一接口**：标准化的接口设计

### RESTful URL 设计

\`\`\`
GET    /api/users          - 获取用户列表
GET    /api/users/123      - 获取特定用户
POST   /api/users          - 创建新用户
PUT    /api/users/123      - 更新用户（完整）
PATCH  /api/users/123      - 更新用户（部分）
DELETE /api/users/123      - 删除用户

GET    /api/users/123/posts - 获取用户的文章
POST   /api/users/123/posts - 为用户创建文章
\`\`\`

### JSON 数据格式

API 通常使用 JSON (JavaScript Object Notation) 传输数据：

\`\`\`json
{
  "id": 123,
  "name": "小明",
  "email": "xiaoming@example.com",
  "age": 20,
  "courses": ["Python", "Django"],
  "active": true
}
\`\`\`

## requests 库

Python 最流行的 HTTP 客户端库。

### 安装

\`\`\`bash
pip install requests
\`\`\`

### GET 请求

\`\`\`python
import requests

# 基本 GET 请求
response = requests.get('https://api.example.com/users')

# 状态码
print(response.status_code)  # 200

# JSON 响应
data = response.json()
print(data)

# 查询参数
params = {'page': 1, 'limit': 10, 'search': 'python'}
response = requests.get('https://api.example.com/users', params=params)
# 实际请求：https://api.example.com/users?page=1&limit=10&search=python

# 响应头
print(response.headers)
print(response.headers['Content-Type'])
\`\`\`

### POST 请求

\`\`\`python
# JSON 数据
user_data = {
    'name': '小明',
    'email': 'xiaoming@example.com',
    'age': 20
}

response = requests.post(
    'https://api.example.com/users',
    json=user_data
)

# 检查是否成功
if response.status_code == 201:
    new_user = response.json()
    print(f"用户已创建，ID: {new_user['id']}")

# 表单数据
form_data = {'username': 'xiaoming', 'password': 'secret'}
response = requests.post(
    'https://api.example.com/login',
    data=form_data
)
\`\`\`

### PUT 和 PATCH 请求

\`\`\`python
# PUT - 完整更新
updated_user = {
    'name': '小明',
    'email': 'new@example.com',
    'age': 21
}

response = requests.put(
    'https://api.example.com/users/123',
    json=updated_user
)

# PATCH - 部分更新
partial_update = {'age': 21}

response = requests.patch(
    'https://api.example.com/users/123',
    json=partial_update
)
\`\`\`

### DELETE 请求

\`\`\`python
response = requests.delete('https://api.example.com/users/123')

if response.status_code == 204:
    print("用户已删除")
\`\`\`

### 请求头

\`\`\`python
headers = {
    'Authorization': 'Bearer YOUR_TOKEN_HERE',
    'User-Agent': 'MyApp/1.0',
    'Accept': 'application/json'
}

response = requests.get(
    'https://api.example.com/protected',
    headers=headers
)
\`\`\`

### 错误处理

\`\`\`python
try:
    response = requests.get('https://api.example.com/users')
    response.raise_for_status()  # 4xx/5xx 会抛出异常
    data = response.json()
except requests.exceptions.HTTPError as e:
    print(f"HTTP 错误: {e}")
except requests.exceptions.ConnectionError:
    print("连接错误")
except requests.exceptions.Timeout:
    print("请求超时")
except requests.exceptions.RequestException as e:
    print(f"请求错误: {e}")
\`\`\`

### 超时和重试

\`\`\`python
# 设置超时（秒）
response = requests.get(
    'https://api.example.com/users',
    timeout=5
)

# 使用 Session 保持连接
session = requests.Session()
session.headers.update({'Authorization': 'Bearer TOKEN'})

response1 = session.get('https://api.example.com/users')
response2 = session.get('https://api.example.com/posts')
\`\`\`

## 实战示例

### API 客户端类

\`\`\`python
class APIClient:
    def __init__(self, base_url, token=None):
        self.base_url = base_url
        self.session = requests.Session()
        if token:
            self.session.headers.update({
                'Authorization': f'Bearer {token}'
            })
    
    def get(self, endpoint, params=None):
        url = f"{self.base_url}/{endpoint}"
        response = self.session.get(url, params=params)
        response.raise_for_status()
        return response.json()
    
    def post(self, endpoint, data):
        url = f"{self.base_url}/{endpoint}"
        response = self.session.post(url, json=data)
        response.raise_for_status()
        return response.json()
    
    def delete(self, endpoint):
        url = f"{self.base_url}/{endpoint}"
        response = self.session.delete(url)
        response.raise_for_status()
        return response.status_code == 204

# 使用
client = APIClient('https://api.example.com/v1', token='YOUR_TOKEN')
users = client.get('users', params={'limit': 10})
new_user = client.post('users', {'name': '小明', 'age': 20})
\`\`\`

### 分页处理

\`\`\`python
def fetch_all_pages(url, params=None):
    """获取所有分页数据"""
    all_data = []
    page = 1
    
    while True:
        params = params or {}
        params['page'] = page
        
        response = requests.get(url, params=params)
        response.raise_for_status()
        data = response.json()
        
        all_data.extend(data['results'])
        
        if not data.get('next'):
            break
        
        page += 1
    
    return all_data

# 使用
all_users = fetch_all_pages('https://api.example.com/users')
\`\`\`

### 并发请求

\`\`\`python
from concurrent.futures import ThreadPoolExecutor

def fetch_user(user_id):
    response = requests.get(f'https://api.example.com/users/{user_id}')
    return response.json()

user_ids = [1, 2, 3, 4, 5]

with ThreadPoolExecutor(max_workers=5) as executor:
    users = list(executor.map(fetch_user, user_ids))
\`\`\`

## 调试技巧

\`\`\`python
import requests

# 启用调试日志
import logging
logging.basicConfig(level=logging.DEBUG)

# 查看请求详情
response = requests.get('https://api.example.com/users')

print(f"请求 URL: {response.request.url}")
print(f"请求方法: {response.request.method}")
print(f"请求头: {response.request.headers}")
print(f"响应状态码: {response.status_code}")
print(f"响应时间: {response.elapsed.total_seconds()}秒")
\`\`\`

## 小结

你已经掌握了：
- HTTP 协议和方法
- RESTful API 设计原则
- requests 库的全面使用
- 错误处理和最佳实践
- 实用的 API 客户端模式

准备测试你的知识吧！
`,
    quiz: [
      {
        id: 'q4-1',
        question: '编写函数 fetch_json(url)，使用 requests 模拟 GET 请求（返回固定数据），返回 JSON 数据。如果失败返回 None。',
        hint: '模拟返回 {"status": "ok", "data": [1, 2, 3]}',
        starterCode: 'def fetch_json(url):\n    # 模拟返回 JSON\n    import json\n    return {"status": "ok", "data": [1, 2, 3]}\n',
        testCases: [
          {
            code: 'import json\nresult = fetch_json("https://api.example.com")\nprint(json.dumps(result, sort_keys=True))',
            expected: '{"data": [1, 2, 3], "status": "ok"}',
            hidden: false
          }
        ]
      },
      {
        id: 'q4-2',
        question: '编写函数 build_url(base, endpoint, params)，拼接 URL 和查询参数。例如：base="https://api.com", endpoint="users", params={"page": 1} → "https://api.com/users?page=1"',
        hint: '使用字符串拼接和 join',
        starterCode: 'def build_url(base, endpoint, params):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = build_url("https://api.com", "users", {"page": "1"})\nprint(result)',
            expected: 'https://api.com/users?page=1',
            hidden: false
          },
          {
            code: 'result = build_url("https://api.com", "posts", {"limit": "10", "sort": "date"})\nprint(result)',
            expected: 'https://api.com/posts?limit=10&sort=date',
            hidden: true
          }
        ]
      },
      {
        id: 'q4-3',
        question: '编写函数 parse_status(code)，返回 HTTP 状态码的类别："2xx Success", "4xx Client Error", "5xx Server Error", "Other"。',
        hint: '检查状态码的范围',
        starterCode: 'def parse_status(code):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = parse_status(200)\nprint(result)',
            expected: '2xx Success',
            hidden: false
          },
          {
            code: 'result = parse_status(404)\nprint(result)',
            expected: '4xx Client Error',
            hidden: false
          },
          {
            code: 'result = parse_status(500)\nprint(result)',
            expected: '5xx Server Error',
            hidden: true
          }
        ]
      },
      {
        id: 'q4-4',
        question: '编写函数 extract_json_field(json_str, field)，从 JSON 字符串中提取指定字段的值。如果字段不存在返回 None。',
        hint: '使用 json.loads 和字典的 get 方法',
        starterCode: 'import json\n\ndef extract_json_field(json_str, field):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = extract_json_field(\'{"name": "Tom", "age": 20}\', "name")\nprint(result)',
            expected: 'Tom',
            hidden: false
          },
          {
            code: 'result = extract_json_field(\'{"name": "Tom", "age": 20}\', "missing")\nprint(result)',
            expected: 'None',
            hidden: true
          }
        ]
      },
      {
        id: 'q4-5',
        question: '编写函数 batch_fetch(urls)，接收 URL 列表，返回成功获取数据的数量（模拟：长度 > 10 的 URL 成功）。',
        hint: '遍历 URLs，检查长度',
        starterCode: 'def batch_fetch(urls):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = batch_fetch(["https://a.com", "https://example.com"])\nprint(result)',
            expected: '1',
            hidden: false
          },
          {
            code: 'result = batch_fetch(["https://verylongurl.com", "https://another.com"])\nprint(result)',
            expected: '2',
            hidden: true
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'Django 核心',
    description: '项目结构、URL路由、视图函数和模板系统',
    isChallenge: false,
    content: `## Django 简介

Django 是一个高级 Python Web 框架，鼓励快速开发和简洁实用的设计。

**核心理念：**
- Don't Repeat Yourself (DRY)
- 约定优于配置
- 电池内置（Batteries Included）

## 创建 Django 项目

\\\`\\\`\\\`bash
# 安装 Django
pip install django

# 创建项目
django-admin startproject myproject
cd myproject

# 创建应用
python manage.py startapp blog

# 运行开发服务器
python manage.py runserver
\\\`\\\`\\\`

## 项目结构

\\\`\\\`\\\`
myproject/
  manage.py           # 命令行工具
  myproject/          # 项目包
    __init__.py
    settings.py       # 配置文件
    urls.py           # URL 路由
    wsgi.py           # WSGI 部署
    asgi.py           # ASGI 部署
  blog/               # 应用
    __init__.py
    admin.py          # 管理后台
    apps.py           # 应用配置
    models.py         # 数据模型
    views.py          # 视图函数
    urls.py           # 应用 URL
    templates/        # 模板
    static/           # 静态文件
    migrations/       # 数据库迁移
\\\`\\\`\\\`

## 配置应用

**settings.py:**

\\\`\\\`\\\`python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'blog',  # 添加你的应用
]

# 数据库配置
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# 语言和时区
LANGUAGE_CODE = 'zh-hans'
TIME_ZONE = 'Asia/Shanghai'
USE_TZ = True
\\\`\\\`\\\`

## URL 路由

### 项目 urls.py

\\\`\\\`\\\`python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('blog/', include('blog.urls')),
]
\\\`\\\`\\\`

### 应用 urls.py

\\\`\\\`\\\`python
from django.urls import path
from . import views

app_name = 'blog'

urlpatterns = [
    path('', views.index, name='index'),
    path('posts/', views.post_list, name='post_list'),
    path('posts/<int:post_id>/', views.post_detail, name='post_detail'),
    path('posts/create/', views.post_create, name='post_create'),
]
\\\`\\\`\\\`

### URL 模式

\\\`\\\`\\\`python
# 路径参数
path('posts/<int:pk>/', views.post_detail)
path('users/<str:username>/', views.user_profile)
path('posts/<slug:slug>/', views.post_by_slug)

# 正则表达式（需要 re_path）
from django.urls import re_path
re_path(r'^articles/(?P<year>[0-9]{4})/$', views.year_archive)
\\\`\\\`\\\`

## 视图函数

### 基本视图

\\\`\\\`\\\`python
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect, get_object_or_404

def index(request):
    \"\"\"返回 HTML\"\"\"
    return HttpResponse(\"<h1>欢迎来到博客</h1>\")

def api_data(request):
    \"\"\"返回 JSON\"\"\"
    data = {'message': '成功', 'count': 10}
    return JsonResponse(data)

def post_list(request):
    \"\"\"渲染模板\"\"\"
    posts = [
        {'id': 1, 'title': '第一篇文章'},
        {'id': 2, 'title': '第二篇文章'},
    ]
    context = {
        'posts': posts,
        'title': '文章列表'
    }
    return render(request, 'blog/post_list.html', context)
\\\`\\\`\\\`

### 处理请求

\\\`\\\`\\\`python
def post_create(request):
    if request.method == 'POST':
        # 处理表单提交
        title = request.POST.get('title')
        content = request.POST.get('content')
        
        # 保存到数据库（简化示例）
        post = {'id': 1, 'title': title, 'content': content}
        
        return redirect('blog:post_detail', post_id=1)
    
    # GET 请求显示表单
    return render(request, 'blog/post_form.html')

def post_detail(request, post_id):
    \"\"\"获取对象或 404\"\"\"
    post = get_object_or_404(Post, id=post_id)
    return render(request, 'blog/post_detail.html', {'post': post})
\\\`\\\`\\\`

### 查询参数

\\\`\\\`\\\`python
def search(request):
    query = request.GET.get('q', '')
    page = request.GET.get('page', 1)
    
    # 执行搜索逻辑
    results = []
    
    return render(request, 'blog/search.html', {
        'results': results,
        'query': query
    })
\\\`\\\`\\\`

## 模板系统

### 模板语法

**templates/blog/post_list.html:**

\\\`\\\`\\\`html
<!DOCTYPE html>
<html>
<head>
    <title>{{ title }}</title>
</head>
<body>
    <h1>{{ title }}</h1>
    
    {% if posts %}
        <ul>
        {% for post in posts %}
            <li>
                <a href=\"{% url 'blog:post_detail' post.id %}\">
                    {{ post.title }}
                </a>
                <small>{{ post.created_at|date:\"Y-m-d\" }}</small>
            </li>
        {% endfor %}
        </ul>
    {% else %}
        <p>暂无文章</p>
    {% endif %}
</body>
</html>
\\\`\\\`\\\`

### 模板继承

**base.html:**

\\\`\\\`\\\`html
<!DOCTYPE html>
<html>
<head>
    <title>{% block title %}我的博客{% endblock %}</title>
    {% load static %}
    <link rel=\"stylesheet\" href=\"{% static 'css/style.css' %}\">
</head>
<body>
    <nav>
        <a href=\"{% url 'blog:index' %}\">首页</a>
        <a href=\"{% url 'blog:post_list' %}\">文章</a>
    </nav>
    
    <main>
        {% block content %}
        {% endblock %}
    </main>
</body>
</html>
\\\`\\\`\\\`

**post_list.html:**

\\\`\\\`\\\`html
{% extends 'base.html' %}

{% block title %}文章列表{% endblock %}

{% block content %}
    <h1>文章列表</h1>
    {% for post in posts %}
        <article>
            <h2>{{ post.title }}</h2>
            <p>{{ post.content|truncatewords:30 }}</p>
        </article>
    {% endfor %}
{% endblock %}
\\\`\\\`\\\`

### 模板过滤器

\\\`\\\`\\\`html
{{ post.title|upper }}               <!-- 大写 -->
{{ post.content|truncatewords:50 }}  <!-- 截断 -->
{{ post.created_at|date:\"Y-m-d\" }}   <!-- 日期格式化 -->
{{ post.price|floatformat:2 }}       <!-- 小数格式化 -->
{{ post.content|safe }}              <!-- 不转义 HTML -->
{{ post.content|linebreaks }}        <!-- 换行转 <p> -->
\\\`\\\`\\\`

### 模板标签

\\\`\\\`\\\`html
{% for post in posts %}
    {{ forloop.counter }}. {{ post.title }}
    {% if forloop.last %}<hr>{% endif %}
{% empty %}
    <p>没有文章</p>
{% endfor %}

{% with total=posts.count %}
    共 {{ total }} 篇文章
{% endwith %}

{% url 'blog:post_detail' post.id %}
{% static 'images/logo.png' %}
\\\`\\\`\\\`

## 静态文件

**settings.py:**

\\\`\\\`\\\`python
STATIC_URL = '/static/'
STATICFILES_DIRS = [
    BASE_DIR / 'static',
]
\\\`\\\`\\\`

**使用静态文件:**

\\\`\\\`\\\`html
{% load static %}

<link rel=\"stylesheet\" href=\"{% static 'css/style.css' %}\">
<img src=\"{% static 'images/logo.png' %}\" alt=\"Logo\">
<script src=\"{% static 'js/app.js' %}\"></script>
\\\`\\\`\\\`

## 小结

你已经掌握了：
- Django 项目结构
- URL 路由配置
- 视图函数编写
- 模板系统和继承
- 静态文件管理

继续挑战 Quiz！`,
    quiz: [
      {
        id: 'q5-1',
        question: '编写函数 parse_url_params(url)，从 URL 中提取路径参数。例如：\"/posts/123/\" → {\"post_id\": \"123\"}，\"/users/john/\" → {\"username\": \"john\"}',
        hint: '分割路径，提取非空部分',
        starterCode: 'def parse_url_params(url):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'import json\nresult = parse_url_params(\"/posts/123/\")\nprint(json.dumps(result, sort_keys=True))',
            expected: '{\"post_id\": \"123\"}',
            hidden: false
          },
          {
            code: 'import json\nresult = parse_url_params(\"/users/john/\")\nprint(json.dumps(result, sort_keys=True))',
            expected: '{\"username\": \"john\"}',
            hidden: true
          }
        ]
      },
      {
        id: 'q5-2',
        question: '编写函数 build_context(data_dict)，构建模板上下文。接收字典，添加 \"timestamp\" 键（值为 \"2024-01-01\"），返回新字典。',
        hint: '复制字典，添加新键',
        starterCode: 'def build_context(data_dict):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'import json\nresult = build_context({\"title\": \"Test\"})\nprint(json.dumps(result, sort_keys=True))',
            expected: '{\"timestamp\": \"2024-01-01\", \"title\": \"Test\"}',
            hidden: false
          }
        ]
      },
      {
        id: 'q5-3',
        question: '编写函数 reverse_url(app_name, view_name, *args)，生成 URL 字符串。格式：\"/{app_name}/{view_name}/{arg1}/{arg2}/\"',
        hint: '使用 join 和 f-string',
        starterCode: 'def reverse_url(app_name, view_name, *args):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = reverse_url(\"blog\", \"post_detail\", 123)\nprint(result)',
            expected: '/blog/post_detail/123/',
            hidden: false
          },
          {
            code: 'result = reverse_url(\"users\", \"profile\", \"john\")\nprint(result)',
            expected: '/users/profile/john/',
            hidden: true
          }
        ]
      },
      {
        id: 'q5-4',
        question: '编写函数 truncate_html(html, length)，截断 HTML 内容到指定长度（不包含标签）。简化：假设没有嵌套标签，只需统计非 <> 之间的字符。',
        hint: '遍历字符，跳过标签内容',
        starterCode: 'def truncate_html(html, length):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = truncate_html(\"<p>Hello World</p>\", 5)\nprint(result)',
            expected: 'Hello',
            hidden: false
          }
        ]
      },
      {
        id: 'q5-5',
        question: '编写函数 validate_view_name(name)，验证视图函数名是否合法（只包含字母、数字、下划线，且以字母开头）。',
        hint: '使用 isalnum() 和字符串方法',
        starterCode: 'def validate_view_name(name):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = validate_view_name(\"post_list\")\nprint(result)',
            expected: 'True',
            hidden: false
          },
          {
            code: 'result = validate_view_name(\"123_invalid\")\nprint(result)',
            expected: 'False',
            hidden: true
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: 'Django 模型与 Admin',
    description: 'ORM、模型定义、查询API和管理后台',
    isChallenge: false,
    content: `## Django ORM

ORM (Object-Relational Mapping) 让你用 Python 代码操作数据库，无需写 SQL。

## 定义模型

**models.py:**

\\\`\\\`\\\`python
from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    name = models.CharField(max_length=100, verbose_name='分类名称')
    slug = models.SlugField(unique=True)
    
    class Meta:
        verbose_name = '分类'
        verbose_name_plural = '分类'
        ordering = ['name']
    
    def __str__(self):
        return self.name

class Post(models.Model):
    # 字段类型
    title = models.CharField(max_length=200, verbose_name='标题')
    content = models.TextField(verbose_name='内容')
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    
    # 自动时间戳
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    # 可选字段
    published = models.BooleanField(default=False)
    views = models.IntegerField(default=0)
    rating = models.DecimalField(max_digits=3, decimal_places=2, null=True, blank=True)
    
    class Meta:
        verbose_name = '文章'
        verbose_name_plural = '文章'
        ordering = ['-created_at']
        db_table = 'blog_post'
        indexes = [
            models.Index(fields=['published', '-created_at']),
        ]
    
    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        from django.urls import reverse
        return reverse('blog:post_detail', args=[self.id])
\\\`\\\`\\\`

### 常用字段类型

\\\`\\\`\\\`python
# 字符串
CharField(max_length=100)
TextField()  # 长文本
EmailField()
URLField()
SlugField()

# 数字
IntegerField()
FloatField()
DecimalField(max_digits=10, decimal_places=2)
PositiveIntegerField()

# 日期时间
DateField()
DateTimeField()
TimeField()

# 布尔
BooleanField()

# 文件
FileField(upload_to='uploads/')
ImageField(upload_to='images/')

# 关系
ForeignKey(OtherModel, on_delete=models.CASCADE)
ManyToManyField(OtherModel)
OneToOneField(OtherModel, on_delete=models.CASCADE)
\\\`\\\`\\\`

### 字段选项

\\\`\\\`\\\`python
models.CharField(
    max_length=100,
    null=True,              # 数据库允许 NULL
    blank=True,             # 表单验证允许空
    default='默认值',
    unique=True,            # 唯一约束
    db_index=True,          # 创建索引
    choices=[               # 选项列表
        ('draft', '草稿'),
        ('published', '已发布'),
    ],
    verbose_name='显示名称',
    help_text='帮助文本',
)
\\\`\\\`\\\`

## 数据库迁移

\\\`\\\`\\\`bash
# 创建迁移文件
python manage.py makemigrations

# 查看 SQL
python manage.py sqlmigrate blog 0001

# 执行迁移
python manage.py migrate

# 回退迁移
python manage.py migrate blog 0001
\\\`\\\`\\\`

## 查询 API

### 创建对象

\\\`\\\`\\\`python
# 方法 1
post = Post(title='标题', content='内容')
post.save()

# 方法 2
post = Post.objects.create(
    title='标题',
    content='内容',
    author=user
)

# 批量创建
Post.objects.bulk_create([
    Post(title='文章1', content='内容1', author=user),
    Post(title='文章2', content='内容2', author=user),
])
\\\`\\\`\\\`

### 查询对象

\\\`\\\`\\\`python
# 获取所有
posts = Post.objects.all()

# 过滤
posts = Post.objects.filter(published=True)
posts = Post.objects.filter(title__icontains='Python')
posts = Post.objects.filter(views__gte=100)

# 排除
posts = Post.objects.exclude(author=user)

# 获取单个对象
post = Post.objects.get(id=1)

# 安全获取
from django.shortcuts import get_object_or_404
post = get_object_or_404(Post, id=1)

# 检查存在
exists = Post.objects.filter(title='测试').exists()

# 计数
count = Post.objects.filter(published=True).count()

# 第一个/最后一个
first_post = Post.objects.first()
last_post = Post.objects.last()
\\\`\\\`\\\`

### 查询条件

\\\`\\\`\\\`python
# 精确匹配
Post.objects.filter(title='Python')
Post.objects.filter(title__exact='Python')

# 不区分大小写
Post.objects.filter(title__iexact='python')

# 包含
Post.objects.filter(title__contains='Django')
Post.objects.filter(title__icontains='django')

# 开始/结束
Post.objects.filter(title__startswith='Django')
Post.objects.filter(title__endswith='教程')

# 比较
Post.objects.filter(views__gt=100)      # 大于
Post.objects.filter(views__gte=100)     # 大于等于
Post.objects.filter(views__lt=100)      # 小于
Post.objects.filter(views__lte=100)     # 小于等于

# 范围
Post.objects.filter(views__range=(100, 1000))

# 列表
Post.objects.filter(id__in=[1, 2, 3])

# 日期
from datetime import date
Post.objects.filter(created_at__date=date.today())
Post.objects.filter(created_at__year=2024)

# NULL
Post.objects.filter(rating__isnull=True)
\\\`\\\`\\\`

### 关系查询

\\\`\\\`\\\`python
# 外键正向查询
post = Post.objects.get(id=1)
author = post.author

# 外键反向查询
user = User.objects.get(id=1)
posts = user.posts.all()

# 跨关系查询
posts = Post.objects.filter(author__username='xiaoming')

# 查找有文章的用户
users = User.objects.filter(posts__published=True).distinct()
\\\`\\\`\\\`

### 排序和限制

\\\`\\\`\\\`python
# 排序
posts = Post.objects.order_by('created_at')
posts = Post.objects.order_by('-created_at')
posts = Post.objects.order_by('-views', 'title')

# 切片
posts = Post.objects.all()[:5]
posts = Post.objects.all()[5:10]
\\\`\\\`\\\`

### 更新和删除

\\\`\\\`\\\`python
# 更新单个对象
post = Post.objects.get(id=1)
post.title = '新标题'
post.save()

# 批量更新
Post.objects.filter(published=False).update(published=True)

# 增加计数
from django.db.models import F
Post.objects.filter(id=1).update(views=F('views') + 1)

# 删除
post = Post.objects.get(id=1)
post.delete()

# 批量删除
Post.objects.filter(views=0).delete()
\\\`\\\`\\\`

### 聚合和注解

\\\`\\\`\\\`python
from django.db.models import Count, Avg, Max, Min, Sum

# 聚合
result = Post.objects.aggregate(
    total=Count('id'),
    avg_views=Avg('views'),
    max_views=Max('views')
)

# 注解
users = User.objects.annotate(
    post_count=Count('posts')
).filter(post_count__gt=5)
\\\`\\\`\\\`

## Django Admin

### 注册模型

**admin.py:**

\\\`\\\`\\\`python
from django.contrib import admin
from .models import Post, Category

# 简单注册
admin.site.register(Category)

# 自定义 Admin
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['title', 'author', 'published', 'created_at']
    list_filter = ['published', 'created_at']
    search_fields = ['title', 'content']
    list_editable = ['published']
    list_per_page = 20
    date_hierarchy = 'created_at'
    readonly_fields = ['created_at', 'updated_at']
    
    fieldsets = [
        ('基本信息', {
            'fields': ['title', 'content', 'author']
        }),
        ('发布设置', {
            'fields': ['published'],
            'classes': ['collapse']
        }),
    ]
\\\`\\\`\\\`

## 小结

你已经掌握了：
- 模型定义和字段类型
- 数据库迁移
- 强大的查询 API
- Admin 后台配置

进入 Quiz 测试！`,
    quiz: [
      {
        id: 'q6-1',
        question: '编写函数 filter_by_year(items, year_field, target_year)，过滤指定年份的项。items 是字典列表，年份格式 \"YYYY-MM-DD\"。',
        hint: '检查日期字符串的前4位',
        starterCode: 'def filter_by_year(items, year_field, target_year):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'items = [{\"date\": \"2024-01-01\"}, {\"date\": \"2023-06-15\"}]\nresult = filter_by_year(items, \"date\", \"2024\")\nprint(len(result))',
            expected: '1',
            hidden: false
          }
        ]
      },
      {
        id: 'q6-2',
        question: '编写函数 group_and_count(items, field)，按字段分组并统计数量。返回 {value: count} 字典。',
        hint: '字典计数',
        starterCode: 'def group_and_count(items, field):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'import json\nitems = [{\"category\": \"tech\"}, {\"category\": \"tech\"}, {\"category\": \"life\"}]\nresult = group_and_count(items, \"category\")\nprint(json.dumps(result, sort_keys=True))',
            expected: '{\"life\": 1, \"tech\": 2}',
            hidden: false
          }
        ]
      },
      {
        id: 'q6-3',
        question: '编写函数 increment_field(item, field, amount)，增加字段值。返回新值。',
        hint: '获取当前值，加上 amount',
        starterCode: 'def increment_field(item, field, amount):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'item = {\"views\": 10}\nresult = increment_field(item, \"views\", 5)\nprint(result)',
            expected: '15',
            hidden: false
          }
        ]
      },
      {
        id: 'q6-4',
        question: '编写函数 find_max_by_field(items, field)，找到字段值最大的项。返回该项。',
        hint: '使用 max() 和 key 参数',
        starterCode: 'def find_max_by_field(items, field):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'items = [{\"id\": 1, \"score\": 85}, {\"id\": 2, \"score\": 92}]\nresult = find_max_by_field(items, \"score\")\nprint(result[\"id\"])',
            expected: '2',
            hidden: false
          }
        ]
      },
      {
        id: 'q6-5',
        question: '编写函数 build_query_filter(filters)，从字典构建 ORM 查询字符串。例如：{\"status\": \"published\", \"views__gte\": 100} → \"status=published&views__gte=100\"',
        hint: '遍历字典，用 & 连接',
        starterCode: 'def build_query_filter(filters):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = build_query_filter({\"status\": \"published\"})\nprint(result)',
            expected: 'status=published',
            hidden: false
          }
        ]
      }
    ]
  },
  {
    id: 7,
    title: 'DRF 入门',
    description: 'Serializer、APIView和基本的API开发',
    isChallenge: false,
    content: `## Django REST Framework 简介

DRF 是构建 Web API 的强大工具包。

**核心功能：**
- 序列化器（Serializer）
- 类视图和函数视图
- 认证和权限
- 限流和分页
- 自动生成 API 文档

## 安装和配置

\\\`\\\`\\\`bash
pip install djangorestframework
\\\`\\\`\\\`

**settings.py:**

\\\`\\\`\\\`python
INSTALLED_APPS = [
    # ...
    'rest_framework',
]

REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10
}
\\\`\\\`\\\`

## Serializer 序列化器

序列化器将复杂数据转换为 Python 数据类型，然后渲染为 JSON。

### 基本序列化器

\\\`\\\`\\\`python
from rest_framework import serializers

class UserSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    username = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    age = serializers.IntegerField(min_value=0, max_value=150)
    is_active = serializers.BooleanField(default=True)
    
    def create(self, validated_data):
        return User.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        instance.save()
        return instance
\\\`\\\`\\\`

### ModelSerializer

\\\`\\\`\\\`python
from rest_framework import serializers

class PostSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(source='author.username', read_only=True)
    
    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'author', 'author_name', 'created_at']
        read_only_fields = ['id', 'created_at']
\\\`\\\`\\\`

### 序列化器验证

\\\`\\\`\\\`python
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'
    
    def validate_title(self, value):
        if len(value) < 5:
            raise serializers.ValidationError(\"标题至少 5 个字符\")
        return value
    
    def validate(self, data):
        if 'title' in data and 'content' in data:
            if data['title'] in data['content']:
                raise serializers.ValidationError(\"标题不能出现在内容中\")
        return data
\\\`\\\`\\\`

## APIView 视图

### 函数视图

\\\`\\\`\\\`python
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET', 'POST'])
def post_list(request):
    if request.method == 'GET':
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
\\\`\\\`\\\`

### 类视图 (APIView)

\\\`\\\`\\\`python
from rest_framework.views import APIView

class PostList(APIView):
    def get(self, request):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(author=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
\\\`\\\`\\\`

### 通用视图 (Generics)

\\\`\\\`\\\`python
from rest_framework import generics

class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
\\\`\\\`\\\`

## Response 和状态码

\\\`\\\`\\\`python
from rest_framework.response import Response
from rest_framework import status

# 成功响应
return Response(data, status=status.HTTP_200_OK)
return Response(data, status=status.HTTP_201_CREATED)

# 错误响应
return Response(errors, status=status.HTTP_400_BAD_REQUEST)
return Response(status=status.HTTP_404_NOT_FOUND)
\\\`\\\`\\\`

## URL 配置

\\\`\\\`\\\`python
from django.urls import path
from . import views

urlpatterns = [
    path('posts/', views.PostList.as_view(), name='post-list'),
    path('posts/<int:pk>/', views.PostDetail.as_view(), name='post-detail'),
]
\\\`\\\`\\\`

## 小结

你已经掌握了：
- Serializer 的定义和验证
- APIView 和通用视图
- 请求处理和响应
- URL 路由配置

继续挑战 Quiz！`,
    quiz: [
      {
        id: 'q7-1',
        question: '编写函数 serialize_dict(data, fields)，只保留指定字段。data 是字典，fields 是字段列表。',
        hint: '字典推导式',
        starterCode: 'def serialize_dict(data, fields):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'import json\ndata = {\"id\": 1, \"name\": \"Tom\", \"age\": 20}\nresult = serialize_dict(data, [\"id\", \"name\"])\nprint(json.dumps(result, sort_keys=True))',
            expected: '{\"id\": 1, \"name\": \"Tom\"}',
            hidden: false
          }
        ]
      },
      {
        id: 'q7-2',
        question: '编写函数 validate_required(data, required_fields)，检查必需字段是否都存在。返回 True/False。',
        hint: '使用 all() 和生成器',
        starterCode: 'def validate_required(data, required_fields):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = validate_required({\"name\": \"Tom\", \"age\": 20}, [\"name\", \"age\"])\nprint(result)',
            expected: 'True',
            hidden: false
          },
          {
            code: 'result = validate_required({\"name\": \"Tom\"}, [\"name\", \"age\"])\nprint(result)',
            expected: 'False',
            hidden: true
          }
        ]
      },
      {
        id: 'q7-3',
        question: '编写函数 build_error_response(field, message)，构建错误响应。返回 {\"field\": [\"message\"]}。',
        hint: '创建嵌套字典，值是列表',
        starterCode: 'def build_error_response(field, message):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'import json\nresult = build_error_response(\"title\", \"This field is required\")\nprint(json.dumps(result, sort_keys=True))',
            expected: '{\"title\": [\"This field is required\"]}',
            hidden: false
          }
        ]
      },
      {
        id: 'q7-4',
        question: '编写函数 extract_nested_field(data, path)，提取嵌套字段。path 是点分隔的字符串，如 \"author.username\"。',
        hint: '分割 path，逐层访问',
        starterCode: 'def extract_nested_field(data, path):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'data = {\"author\": {\"username\": \"john\"}}\nresult = extract_nested_field(data, \"author.username\")\nprint(result)',
            expected: 'john',
            hidden: false
          }
        ]
      },
      {
        id: 'q7-5',
        question: '编写函数 paginate_data(items, page, page_size)，返回分页后的数据和元数据。返回 {\"results\": [...], \"count\": total, \"page\": page}。',
        hint: '切片 + 构建字典',
        starterCode: 'def paginate_data(items, page, page_size):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'import json\nitems = list(range(1, 26))\nresult = paginate_data(items, 2, 10)\nprint(json.dumps({\"count\": result[\"count\"], \"page\": result[\"page\"], \"results_len\": len(result[\"results\"])}, sort_keys=True))',
            expected: '{\"count\": 25, \"page\": 2, \"results_len\": 10}',
            hidden: false
          }
        ]
      }
    ]
  },
  {
    id: 8,
    title: 'ViewSet, Router, 认证与权限',
    description: 'ViewSet、Router自动路由、认证系统和权限控制',
    isChallenge: false,
    content: `## ViewSet

ViewSet 将相关的视图逻辑组合在一起。

### ModelViewSet

\\\`\\\`\\\`python
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset.filter(published=True)
    
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
    
    @action(detail=True, methods=['post'])
    def publish(self, request, pk=None):
        post = self.get_object()
        post.published = True
        post.save()
        return Response({'status': 'published'})
    
    @action(detail=False, methods=['get'])
    def recent(self, request):
        recent_posts = self.queryset.order_by('-created_at')[:5]
        serializer = self.get_serializer(recent_posts, many=True)
        return Response(serializer.data)
\\\`\\\`\\\`

## Router 路由器

\\\`\\\`\\\`python
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('posts', PostViewSet, basename='post')

urlpatterns = router.urls
\\\`\\\`\\\`

## 认证 (Authentication)

### Token 认证

**settings.py:**

\\\`\\\`\\\`python
INSTALLED_APPS = [
    'rest_framework.authtoken',
]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
    ]
}
\\\`\\\`\\\`

**生成 Token:**

\\\`\\\`\\\`python
from rest_framework.authtoken.models import Token
token = Token.objects.create(user=user)
\\\`\\\`\\\`

**客户端使用:**

\\\`\\\`\\\`python
import requests
headers = {'Authorization': 'Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b'}
response = requests.get('http://localhost:8000/api/posts/', headers=headers)
\\\`\\\`\\\`

## 权限 (Permissions)

### 内置权限类

\\\`\\\`\\\`python
from rest_framework.permissions import IsAuthenticated, IsAdminUser

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]
\\\`\\\`\\\`

### 自定义权限

\\\`\\\`\\\`python
from rest_framework import permissions

class IsAuthorOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.author == request.user
\\\`\\\`\\\`

## 限流 (Throttling)

\\\`\\\`\\\`python
REST_FRAMEWORK = {
    'DEFAULT_THROTTLE_CLASSES': [
        'rest_framework.throttling.UserRateThrottle'
    ],
    'DEFAULT_THROTTLE_RATES': {
        'user': '1000/day'
    }
}
\\\`\\\`\\\`

## 小结

你已经掌握了：
- ViewSet 和 ModelViewSet
- Router 自动路由
- Token 认证
- 权限系统和自定义权限
- 限流机制

进入 Quiz 测试！`,
    quiz: [
      {
        id: 'q8-1',
        question: '编写函数 generate_token(length)，生成指定长度的随机 Token（大小写字母+数字）。',
        hint: '使用 random.choices 和 string 模块',
        starterCode: 'import random\nimport string\n\ndef generate_token(length):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'token = generate_token(32)\nprint(len(token))',
            expected: '32',
            hidden: false
          }
        ]
      },
      {
        id: 'q8-2',
        question: '编写函数 check_permission(user_role, required_role)，检查权限。角色优先级：admin > editor > user。',
        hint: '使用字典映射优先级',
        starterCode: 'def check_permission(user_role, required_role):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = check_permission(\"admin\", \"editor\")\nprint(result)',
            expected: 'True',
            hidden: false
          },
          {
            code: 'result = check_permission(\"user\", \"admin\")\nprint(result)',
            expected: 'False',
            hidden: true
          }
        ]
      },
      {
        id: 'q8-3',
        question: '编写函数 parse_auth_header(header)，从 \"Token abcdef123456\" 提取 token。格式错误返回 None。',
        hint: '检查前缀，分割字符串',
        starterCode: 'def parse_auth_header(header):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = parse_auth_header(\"Token abc123\")\nprint(result)',
            expected: 'abc123',
            hidden: false
          },
          {
            code: 'result = parse_auth_header(\"Bearer abc123\")\nprint(result)',
            expected: 'None',
            hidden: true
          }
        ]
      },
      {
        id: 'q8-4',
        question: '编写函数 check_rate_limit(requests_count, limit, window)，检查是否超过速率限制。返回 True（允许）或 False（拒绝）。',
        hint: '比较 requests_count 和 limit',
        starterCode: 'def check_rate_limit(requests_count, limit, window):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = check_rate_limit(50, 100, \"hour\")\nprint(result)',
            expected: 'True',
            hidden: false
          },
          {
            code: 'result = check_rate_limit(101, 100, \"hour\")\nprint(result)',
            expected: 'False',
            hidden: true
          }
        ]
      },
      {
        id: 'q8-5',
        question: '编写函数 build_action_url(base_url, resource, pk, action)，构建自定义动作 URL。格式：\"{base_url}/{resource}/{pk}/{action}/\"',
        hint: '使用 f-string 拼接',
        starterCode: 'def build_action_url(base_url, resource, pk, action):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = build_action_url(\"http://api.com\", \"posts\", 123, \"publish\")\nprint(result)',
            expected: 'http://api.com/posts/123/publish/',
            hidden: false
          }
        ]
      }
    ]
  },
  {
    id: 9,
    title: 'DRF 进阶',
    description: '过滤、分页、搜索、嵌套序列化器和自定义异常',
    isChallenge: false,
    content: `## 过滤 (Filtering)

### django-filter

\\\`\\\`\\\`bash
pip install django-filter
\\\`\\\`\\\`

**settings.py:**

\\\`\\\`\\\`python
INSTALLED_APPS = ['django_filters']

REST_FRAMEWORK = {
    'DEFAULT_FILTER_BACKENDS': [
        'django_filters.rest_framework.DjangoFilterBackend',
        'rest_framework.filters.SearchFilter',
        'rest_framework.filters.OrderingFilter',
    ]
}
\\\`\\\`\\\`

**使用过滤:**

\\\`\\\`\\\`python
from django_filters import rest_framework as filters

class PostFilter(filters.FilterSet):
    title = filters.CharFilter(lookup_expr='icontains')
    min_views = filters.NumberFilter(field_name='views', lookup_expr='gte')
    
    class Meta:
        model = Post
        fields = ['author', 'published']

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filterset_class = PostFilter
\\\`\\\`\\\`

### 搜索

\\\`\\\`\\\`python
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['title', 'content']
\\\`\\\`\\\`

### 排序

\\\`\\\`\\\`python
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['created_at', 'views']
    ordering = ['-created_at']
\\\`\\\`\\\`

## 分页 (Pagination)

### PageNumberPagination

\\\`\\\`\\\`python
from rest_framework.pagination import PageNumberPagination

class StandardPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    pagination_class = StandardPagination
\\\`\\\`\\\`

## 嵌套序列化器

\\\`\\\`\\\`python
class CommentSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    
    class Meta:
        model = Comment
        fields = ['id', 'content', 'author', 'created_at']

class PostDetailSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    comments = CommentSerializer(many=True, read_only=True)
    comment_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'author', 'comments', 'comment_count']
    
    def get_comment_count(self, obj):
        return obj.comments.count()
\\\`\\\`\\\`

## 自定义异常

\\\`\\\`\\\`python
from rest_framework.exceptions import APIException

class ServiceUnavailable(APIException):
    status_code = 503
    default_detail = '服务暂时不可用'

# 使用
if not service_available():
    raise ServiceUnavailable()
\\\`\\\`\\\`

## 性能优化

\\\`\\\`\\\`python
class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    
    def get_queryset(self):
        return Post.objects.select_related('author').prefetch_related('comments')
\\\`\\\`\\\`

## 小结

你已经掌握了：
- 过滤、搜索和排序
- 分页的多种实现
- 嵌套序列化器
- 自定义异常
- 性能优化技巧

挑战最后的 Quiz！`,
    quiz: [
      {
        id: 'q9-1',
        question: '编写函数 apply_filters(items, filters)，应用多个过滤器。filters 是 {field: value} 字典。返回匹配的项。',
        hint: '遍历 filters，检查每个条件',
        starterCode: 'def apply_filters(items, filters):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'items = [{\"status\": \"active\", \"views\": 100}, {\"status\": \"inactive\", \"views\": 50}]\nresult = apply_filters(items, {\"status\": \"active\"})\nprint(len(result))',
            expected: '1',
            hidden: false
          }
        ]
      },
      {
        id: 'q9-2',
        question: '编写函数 search_items(items, query, search_fields)，在多个字段中搜索（不区分大小写）。',
        hint: '检查 query 是否在任何 search_field 中',
        starterCode: 'def search_items(items, query, search_fields):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'items = [{\"title\": \"Python\", \"content\": \"Learn\"}, {\"title\": \"Java\", \"content\": \"Code\"}]\nresult = search_items(items, \"python\", [\"title\", \"content\"])\nprint(len(result))',
            expected: '1',
            hidden: false
          }
        ]
      },
      {
        id: 'q9-3',
        question: '编写函数 create_pagination_response(items, page, page_size)，创建分页响应。返回 {\"count\": total, \"results\": page_items, \"next\": has_next, \"previous\": has_previous}。',
        hint: '计算是否有上一页/下一页',
        starterCode: 'def create_pagination_response(items, page, page_size):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'import json\nitems = list(range(1, 26))\nresult = create_pagination_response(items, 2, 10)\nprint(json.dumps({\"count\": result[\"count\"], \"has_next\": result[\"next\"], \"has_previous\": result[\"previous\"]}, sort_keys=True))',
            expected: '{\"count\": 25, \"has_next\": true, \"has_previous\": true}',
            hidden: false
          }
        ]
      },
      {
        id: 'q9-4',
        question: '编写函数 nest_related_data(parent, children, child_key)，将子数据嵌套到父数据中。',
        hint: '复制 parent，添加 child_key',
        starterCode: 'def nest_related_data(parent, children, child_key):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'import json\nparent = {\"id\": 1, \"title\": \"Post\"}\nchildren = [{\"id\": 1}, {\"id\": 2}]\nresult = nest_related_data(parent, children, \"comments\")\nprint(json.dumps(result, sort_keys=True))',
            expected: '{\"comments\": [{\"id\": 1}, {\"id\": 2}], \"id\": 1, \"title\": \"Post\"}',
            hidden: false
          }
        ]
      },
      {
        id: 'q9-5',
        question: '编写函数 calculate_offset(page, page_size)，计算分页偏移量。page 从 1 开始。',
        hint: 'offset = (page - 1) * page_size',
        starterCode: 'def calculate_offset(page, page_size):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = calculate_offset(3, 10)\nprint(result)',
            expected: '20',
            hidden: false
          },
          {
            code: 'result = calculate_offset(1, 10)\nprint(result)',
            expected: '0',
            hidden: true
          }
        ]
      }
    ]
  },
  {
    id: 10,
    title: '测试与接口规范',
    description: 'pytest、APIClient测试、错误约定和OpenAPI文档',
    isChallenge: false,
    content: `## API 测试

### pytest-django

\\\`\\\`\\\`bash
pip install pytest pytest-django
\\\`\\\`\\\`

**pytest.ini:**

\\\`\\\`\\\`ini
[pytest]
DJANGO_SETTINGS_MODULE = myproject.settings
python_files = tests.py test_*.py *_tests.py
\\\`\\\`\\\`

### 基本测试

\\\`\\\`\\\`python
import pytest
from rest_framework.test import APIClient

@pytest.fixture
def api_client():
    return APIClient()

@pytest.fixture
def user():
    return User.objects.create_user(username='test', password='pass')

@pytest.mark.django_db
def test_get_post_list(api_client):
    response = api_client.get('/api/posts/')
    assert response.status_code == 200

@pytest.mark.django_db
def test_create_post(api_client, user):
    api_client.force_authenticate(user=user)
    data = {'title': 'Test', 'content': 'Content'}
    response = api_client.post('/api/posts/', data)
    assert response.status_code == 201
\\\`\\\`\\\`

### 参数化测试

\\\`\\\`\\\`python
@pytest.mark.parametrize('title,expected', [
    ('Valid', 201),
    ('', 400),
])
@pytest.mark.django_db
def test_create_validation(api_client, user, title, expected):
    api_client.force_authenticate(user=user)
    response = api_client.post('/api/posts/', {'title': title})
    assert response.status_code == expected
\\\`\\\`\\\`

## 错误处理规范

### 统一错误响应

\\\`\\\`\\\`python
{
    \"error\": {
        \"code\": \"validation_error\",
        \"message\": \"Validation failed\",
        \"details\": {
            \"title\": [\"This field is required\"]
        }
    }
}
\\\`\\\`\\\`

### 自定义异常

\\\`\\\`\\\`python
from rest_framework.exceptions import APIException

class ResourceNotFound(APIException):
    status_code = 404
    default_detail = 'Resource not found'
    default_code = 'not_found'
\\\`\\\`\\\`

## API 文档

### drf-spectacular

\\\`\\\`\\\`bash
pip install drf-spectacular
\\\`\\\`\\\`

**settings.py:**

\\\`\\\`\\\`python
INSTALLED_APPS = ['drf_spectacular']

REST_FRAMEWORK = {
    'DEFAULT_SCHEMA_CLASS': 'drf_spectacular.openapi.AutoSchema',
}
\\\`\\\`\\\`

**urls.py:**

\\\`\\\`\\\`python
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

urlpatterns = [
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema')),
]
\\\`\\\`\\\`

## 最佳实践

### 版本控制

\\\`\\\`\\\`python
urlpatterns = [
    path('api/v1/', include('myapp.urls')),
]
\\\`\\\`\\\`

### CORS 配置

\\\`\\\`\\\`bash
pip install django-cors-headers
\\\`\\\`\\\`

\\\`\\\`\\\`python
INSTALLED_APPS = ['corsheaders']
MIDDLEWARE = ['corsheaders.middleware.CorsMiddleware', ...]
CORS_ALLOWED_ORIGINS = [\"http://localhost:3000\"]
\\\`\\\`\\\`

## 小结

你已经掌握了：
- pytest 和 APIClient 测试
- 错误处理规范
- API 文档生成
- 最佳实践

完成基础课程！现在挑战 Quiz！`,
    quiz: [
      {
        id: 'q10-1',
        question: '编写函数 assert_status(actual, expected)，模拟测试断言。相等返回 \"PASS\"，否则返回 \"FAIL: expected {expected}, got {actual}\"。',
        hint: '条件判断 + f-string',
        starterCode: 'def assert_status(actual, expected):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = assert_status(200, 200)\nprint(result)',
            expected: 'PASS',
            hidden: false
          },
          {
            code: 'result = assert_status(404, 200)\nprint(result)',
            expected: 'FAIL: expected 200, got 404',
            hidden: true
          }
        ]
      },
      {
        id: 'q10-2',
        question: '编写函数 build_error_dict(code, message)，构建错误响应。返回 {\"error\": {\"code\": code, \"message\": message}}。',
        hint: '嵌套字典',
        starterCode: 'def build_error_dict(code, message):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'import json\nresult = build_error_dict(\"not_found\", \"Resource not found\")\nprint(json.dumps(result, sort_keys=True))',
            expected: '{\"error\": {\"code\": \"not_found\", \"message\": \"Resource not found\"}}',
            hidden: false
          }
        ]
      },
      {
        id: 'q10-3',
        question: '编写函数 count_test_results(results)，统计测试结果。results 是 \"PASS\"/\"FAIL\" 列表。返回 {\"passed\": x, \"failed\": y, \"total\": z}。',
        hint: '遍历列表计数',
        starterCode: 'def count_test_results(results):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'import json\nresults = [\"PASS\", \"PASS\", \"FAIL\", \"PASS\"]\nresult = count_test_results(results)\nprint(json.dumps(result, sort_keys=True))',
            expected: '{\"failed\": 1, \"passed\": 3, \"total\": 4}',
            hidden: false
          }
        ]
      },
      {
        id: 'q10-4',
        question: '编写函数 generate_api_url(base, version, resource)，生成 API URL。格式：\"{base}/api/{version}/{resource}/\"',
        hint: 'f-string 拼接',
        starterCode: 'def generate_api_url(base, version, resource):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = generate_api_url(\"http://example.com\", \"v1\", \"posts\")\nprint(result)',
            expected: 'http://example.com/api/v1/posts/',
            hidden: false
          }
        ]
      },
      {
        id: 'q10-5',
        question: '编写函数 validate_response_structure(response, required_keys)，验证响应是否包含所有必需键。返回 True/False。',
        hint: '使用 all() 检查所有键',
        starterCode: 'def validate_response_structure(response, required_keys):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'response = {\"id\": 1, \"title\": \"Test\", \"content\": \"Text\"}\nresult = validate_response_structure(response, [\"id\", \"title\"])\nprint(result)',
            expected: 'True',
            hidden: false
          },
          {
            code: 'response = {\"id\": 1}\nresult = validate_response_structure(response, [\"id\", \"title\"])\nprint(result)',
            expected: 'False',
            hidden: true
          }
        ]
      }
    ]
  },
  {
    id: 11,
    title: '挑战一「待揭秘」（第 1 节）',
    description: '神秘项目第一阶段 - 基础架构与核心模型',
    isChallenge: true,
    content: `## 挑战一开启 🎯\n\n本挑战项目将在课堂揭晓，但你现在可以学习完成此类项目的核心技能。\n\n### 复杂模型设计\n\n学习设计多对多关系、嵌套评论、评分系统等复杂模型。\n\n### 查询优化\n\n使用 select_related、prefetch_related 优化数据库查询，使用聚合函数统计数据。\n\n### 状态管理\n\n实现项目状态流转（草稿→审核→发布→归档）。\n\n完成 Quiz 测试你的理解！`,
    quiz: [
      {
        id: 'q11-1',
        question: '编写函数 calculate_avg(numbers)，计算平均值，返回保留2位小数的浮点数。',
        hint: '使用 sum() 和 len()',
        starterCode: 'def calculate_avg(numbers):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = calculate_avg([1, 2, 3, 4, 5])\nprint(result)',
            expected: '3.0',
            hidden: false
          },
          {
            code: 'result = calculate_avg([10, 20, 30])\nprint(result)',
            expected: '20.0',
            hidden: true
          }
        ]
      },
      {
        id: 'q11-2',
        question: '编写函数 group_by_status(items)，按 status 字段分组。items 是字典列表。返回 {status: [items]} 字典。',
        hint: '遍历items，使用字典存储分组',
        starterCode: 'def group_by_status(items):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'import json\nitems = [{"id": 1, "status": "active"}, {"id": 2, "status": "active"}, {"id": 3, "status": "inactive"}]\nresult = group_by_status(items)\nprint(json.dumps({k: len(v) for k, v in result.items()}, sort_keys=True))',
            expected: '{"active": 2, "inactive": 1}',
            hidden: false
          }
        ]
      },
      {
        id: 'q11-3',
        question: '编写函数 filter_published(items)，过滤 status 为 "published" 的项。',
        hint: '列表推导式',
        starterCode: 'def filter_published(items):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'items = [{"id": 1, "status": "published"}, {"id": 2, "status": "draft"}]\nresult = filter_published(items)\nprint(len(result))',
            expected: '1',
            hidden: false
          }
        ]
      },
      {
        id: 'q11-4',
        question: '编写函数 count_by_field(items, field)，统计字段值出现次数。',
        hint: '字典计数',
        starterCode: 'def count_by_field(items, field):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'import json\nitems = [{"type": "A"}, {"type": "B"}, {"type": "A"}]\nresult = count_by_field(items, "type")\nprint(json.dumps(result, sort_keys=True))',
            expected: '{"A": 2, "B": 1}',
            hidden: false
          }
        ]
      },
      {
        id: 'q11-5',
        question: '编写函数 get_top_n(items, field, n)，按字段值降序返回前 n 项。',
        hint: '使用 sorted() 和切片',
        starterCode: 'def get_top_n(items, field, n):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'items = [{"score": 85}, {"score": 92}, {"score": 78}]\nresult = get_top_n(items, "score", 2)\nprint(len(result))',
            expected: '2',
            hidden: false
          }
        ]
      }
    ]
  },
  {
    id: 12,
    title: '挑战一「待揭秘」（第 2 节）',
    description: '神秘项目第二阶段 - API设计与前后端交互',
    isChallenge: true,
    content: `## 挑战一继续 🚀\n\n### RESTful API 设计\n\n学习设计清晰的 API 端点，使用正确的 HTTP 方法和状态码。\n\n### ViewSet 和 Router\n\n使用 ViewSet 组织代码，Router 自动生成 URL。\n\n### 自定义动作\n\n实现发布、点赞、分享等自定义 API 动作。\n\n### 过滤和搜索\n\n添加高级过滤、全文搜索和排序功能。\n\n完成 Quiz 巩固知识！`,
    quiz: [
      {
        id: 'q12-1',
        question: '编写函数 build_url(base, path, params)，构建完整 URL。例如：base="http://api.com", path="/users", params={"page": 1} → "http://api.com/users?page=1"',
        hint: '拼接字符串',
        starterCode: 'def build_url(base, path, params):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = build_url("http://api.com", "/users", {"page": "1"})\nprint(result)',
            expected: 'http://api.com/users?page=1',
            hidden: false
          }
        ]
      },
      {
        id: 'q12-2',
        question: '编写函数 parse_response(response)，从 response 字典提取 data 字段，如果不存在返回空列表。',
        hint: '使用 get() 方法',
        starterCode: 'def parse_response(response):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = parse_response({"data": [1, 2, 3]})\nprint(result)',
            expected: '[1, 2, 3]',
            hidden: false
          },
          {
            code: 'result = parse_response({})\nprint(result)',
            expected: '[]',
            hidden: true
          }
        ]
      },
      {
        id: 'q12-3',
        question: '编写函数 search_by_keyword(items, keyword, field)，在指定字段中搜索关键词（不区分大小写）。',
        hint: '使用 lower() 和 in',
        starterCode: 'def search_by_keyword(items, keyword, field):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'items = [{"title": "Python Guide"}, {"title": "Java Book"}]\nresult = search_by_keyword(items, "python", "title")\nprint(len(result))',
            expected: '1',
            hidden: false
          }
        ]
      },
      {
        id: 'q12-4',
        question: '编写函数 sort_by_field(items, field, reverse)，按字段排序。',
        hint: '使用 sorted() 的 key 和 reverse 参数',
        starterCode: 'def sort_by_field(items, field, reverse=False):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'items = [{"score": 85}, {"score": 92}]\nresult = sort_by_field(items, "score", True)\nprint(result[0]["score"])',
            expected: '92',
            hidden: false
          }
        ]
      },
      {
        id: 'q12-5',
        question: '编写函数 paginate_list(items, page, size)，实现分页。返回指定页的数据。',
        hint: '计算起始索引：(page - 1) * size',
        starterCode: 'def paginate_list(items, page, size):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'items = list(range(1, 21))\nresult = paginate_list(items, 2, 5)\nprint(result)',
            expected: '[6, 7, 8, 9, 10]',
            hidden: false
          }
        ]
      }
    ]
  },
  {
    id: 13,
    title: '挑战二「待揭秘」（第 1 节）',
    description: '进阶项目第一阶段 - 复杂业务逻辑',
    isChallenge: true,
    content: `## 挑战二开启 🎯\n\n更复杂的业务场景等待你！\n\n### 状态机设计\n\n学习设计状态流转系统，实现草稿→提交→审核→发布的完整流程。\n\n### 权限控制\n\n实现基于角色的权限系统（RBAC），不同角色有不同操作权限。\n\n### 业务规则\n\n实现复杂的业务规则验证，如审批流程、配额限制等。\n\n### 事件和通知\n\n实现事件驱动架构，状态变更时触发通知。\n\n挑战你的能力！`,
    quiz: [
      {
        id: 'q13-1',
        question: '编写函数 can_transition(current_state, new_state, rules)，检查状态转换是否合法。rules 是 {state: [allowed_states]} 字典。',
        hint: '检查 new_state 是否在 rules[current_state] 中',
        starterCode: 'def can_transition(current_state, new_state, rules):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'rules = {"draft": ["submitted"], "submitted": ["approved", "rejected"]}\nresult = can_transition("draft", "submitted", rules)\nprint(result)',
            expected: 'True',
            hidden: false
          },
          {
            code: 'rules = {"draft": ["submitted"]}\nresult = can_transition("draft", "approved", rules)\nprint(result)',
            expected: 'False',
            hidden: true
          }
        ]
      },
      {
        id: 'q13-2',
        question: '编写函数 check_permission(user_role, action, permissions)，检查角色是否有权限执行操作。permissions 是 {role: [actions]} 字典。',
        hint: '检查 action 是否在 permissions[user_role] 中',
        starterCode: 'def check_permission(user_role, action, permissions):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'perms = {"admin": ["create", "delete"], "user": ["create"]}\nresult = check_permission("admin", "delete", perms)\nprint(result)',
            expected: 'True',
            hidden: false
          },
          {
            code: 'perms = {"user": ["create"]}\nresult = check_permission("user", "delete", perms)\nprint(result)',
            expected: 'False',
            hidden: true
          }
        ]
      },
      {
        id: 'q13-3',
        question: '编写函数 validate_quota(current_count, limit)，检查是否超过配额。返回 True（未超过）或 False（已超过）。',
        hint: '比较 current_count 和 limit',
        starterCode: 'def validate_quota(current_count, limit):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = validate_quota(5, 10)\nprint(result)',
            expected: 'True',
            hidden: false
          },
          {
            code: 'result = validate_quota(10, 10)\nprint(result)',
            expected: 'False',
            hidden: true
          }
        ]
      },
      {
        id: 'q13-4',
        question: '编写函数 create_notification(user_id, message, type)，创建通知字典。包含 user_id、message、type 和 timestamp（使用 "2024-01-01" 作为固定值）。',
        hint: '返回包含四个键的字典',
        starterCode: 'def create_notification(user_id, message, type):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'import json\nresult = create_notification(1, "Hello", "info")\nprint(json.dumps(result, sort_keys=True))',
            expected: '{"message": "Hello", "timestamp": "2024-01-01", "type": "info", "user_id": 1}',
            hidden: false
          }
        ]
      },
      {
        id: 'q13-5',
        question: '编写函数 filter_by_date_range(items, date_field, start, end)，过滤日期在范围内的项。日期格式：YYYY-MM-DD。',
        hint: '使用字符串比较',
        starterCode: 'def filter_by_date_range(items, date_field, start, end):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'items = [{"date": "2024-01-05"}, {"date": "2024-01-15"}]\nresult = filter_by_date_range(items, "date", "2024-01-01", "2024-01-10")\nprint(len(result))',
            expected: '1',
            hidden: false
          }
        ]
      }
    ]
  },
  {
    id: 14,
    title: '挑战二「待揭秘」（第 2 节）',
    description: '进阶项目第二阶段 - 性能优化与部署',
    isChallenge: true,
    content: `## 挑战二继续 🚀\n\n### 查询优化\n\n使用 select_related、prefetch_related 减少数据库查询，添加索引优化性能。\n\n### 缓存策略\n\n使用 Redis 缓存热点数据，实现缓存失效策略。\n\n### 异步任务\n\n使用 Celery 处理耗时任务，如发送邮件、生成报表等。\n\n### API 限流\n\n实现请求限流，防止滥用API。\n\n### 部署准备\n\n配置生产环境设置，使用环境变量管理敏感信息。\n\n完成最后的测试！`,
    quiz: [
      {
        id: 'q14-1',
        question: '编写函数 calculate_cache_key(prefix, id)，生成缓存键。格式："{prefix}:{id}"',
        hint: '使用 f-string',
        starterCode: 'def calculate_cache_key(prefix, id):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = calculate_cache_key("user", 123)\nprint(result)',
            expected: 'user:123',
            hidden: false
          }
        ]
      },
      {
        id: 'q14-2',
        question: '编写函数 should_refresh_cache(last_updated, ttl)，判断是否需要刷新缓存。last_updated 和 ttl 都是秒数。如果距上次更新超过 ttl 返回 True。',
        hint: '比较时间差',
        starterCode: 'def should_refresh_cache(last_updated, ttl):\n    # last_updated 是时间戳秒数\n    # ttl 是过期时间秒数\n    # 模拟：如果 last_updated < ttl 返回 True\n    pass\n',
        testCases: [
          {
            code: 'result = should_refresh_cache(100, 200)\nprint(result)',
            expected: 'True',
            hidden: false
          },
          {
            code: 'result = should_refresh_cache(300, 200)\nprint(result)',
            expected: 'False',
            hidden: true
          }
        ]
      },
      {
        id: 'q14-3',
        question: '编写函数 calculate_rate_limit_key(user_id, window)，生成限流键。格式："ratelimit:{user_id}:{window}"',
        hint: '使用 f-string 拼接',
        starterCode: 'def calculate_rate_limit_key(user_id, window):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = calculate_rate_limit_key(123, "hour")\nprint(result)',
            expected: 'ratelimit:123:hour',
            hidden: false
          }
        ]
      },
      {
        id: 'q14-4',
        question: '编写函数 batch_process(items, batch_size)，将items分批。返回批次列表。',
        hint: '使用切片和循环',
        starterCode: 'def batch_process(items, batch_size):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = batch_process(list(range(1, 11)), 3)\nprint(len(result))',
            expected: '4',
            hidden: false
          }
        ]
      },
      {
        id: 'q14-5',
        question: '编写函数 generate_secret_key(length)，生成随机密钥（大小写字母+数字）。',
        hint: '使用 random 和 string 模块',
        starterCode: 'import random\nimport string\n\ndef generate_secret_key(length):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'key = generate_secret_key(32)\nprint(len(key))',
            expected: '32',
            hidden: false
          }
        ]
      }
    ]
  },
  {
    id: 15,
    title: '挑战三「待揭秘」+ 总结',
    description: '终极项目 + 课程回顾',
    isChallenge: true,
    content: `## 🏆 终极挑战 + 课程总结\n\n### 挑战三\n\n综合运用所有技能，完成一个完整的全栈项目。项目将在课堂揭晓！\n\n### 你已经掌握的技能\n\n#### Python 基础\n- 变量、类型、控制流\n- 列表、字典、字符串操作\n- 函数、模块、异常处理\n- 面向对象编程\n- 装饰器、生成器、类型提示\n\n#### Web 开发\n- HTTP 协议和 REST API\n- requests 库使用\n- Django 框架核心\n- Django ORM 和查询优化\n- Django Admin\n\n#### Django REST Framework\n- Serializer 序列化器\n- APIView 和 ViewSet\n- Router 路由\n- 认证和权限\n- 过滤、分页、搜索\n- 测试和文档\n\n#### 高级技能\n- 复杂模型设计\n- 状态机模式\n- 权限系统\n- 性能优化\n- 缓存策略\n- API 设计最佳实践\n\n### 下一步\n\n- 深入学习前端框架（React/Vue）\n- 学习容器化部署（Docker）\n- 探索微服务架构\n- 学习 GraphQL\n- 深入数据库优化\n\n### 恭喜你完成课程！🎉\n\n你已经具备了构建现代 Web 应用的核心能力。继续实践，不断进步！\n\n完成最后的 Quiz，见证你的成长！`,
    quiz: [
      {
        id: 'q15-1',
        question: '编写函数 summarize_course(lessons_completed, total_lessons)，计算完成百分比（保留整数）。',
        hint: '计算比例并转换为百分比',
        starterCode: 'def summarize_course(lessons_completed, total_lessons):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = summarize_course(15, 15)\nprint(result)',
            expected: '100',
            hidden: false
          },
          {
            code: 'result = summarize_course(10, 15)\nprint(result)',
            expected: '66',
            hidden: true
          }
        ]
      },
      {
        id: 'q15-2',
        question: '编写函数 create_certificate(name, course, date)，创建证书数据字典。',
        hint: '返回包含三个键的字典',
        starterCode: 'def create_certificate(name, course, date):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'import json\nresult = create_certificate("Tom", "Python", "2024-01-01")\nprint(json.dumps(result, sort_keys=True))',
            expected: '{"course": "Python", "date": "2024-01-01", "name": "Tom"}',
            hidden: false
          }
        ]
      },
      {
        id: 'q15-3',
        question: '编写函数 calculate_total_score(quiz_scores)，计算所有测验的总分。quiz_scores 是分数列表。',
        hint: '使用 sum() 函数',
        starterCode: 'def calculate_total_score(quiz_scores):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = calculate_total_score([80, 90, 85, 95, 88])\nprint(result)',
            expected: '438',
            hidden: false
          }
        ]
      },
      {
        id: 'q15-4',
        question: '编写函数 get_skill_level(score)，根据分数返回等级："Beginner"(0-60), "Intermediate"(61-80), "Advanced"(81-100)。',
        hint: '使用条件判断',
        starterCode: 'def get_skill_level(score):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = get_skill_level(85)\nprint(result)',
            expected: 'Advanced',
            hidden: false
          },
          {
            code: 'result = get_skill_level(70)\nprint(result)',
            expected: 'Intermediate',
            hidden: true
          }
        ]
      },
      {
        id: 'q15-5',
        question: '编写函数 generate_completion_message(name, score)，生成完成消息。格式："恭喜 {name}！你的总分是 {score} 分。"',
        hint: '使用 f-string',
        starterCode: 'def generate_completion_message(name, score):\n    # 你的代码\n    pass\n',
        testCases: [
          {
            code: 'result = generate_completion_message("小明", 95)\nprint(result)',
            expected: '恭喜 小明！你的总分是 95 分。',
            hidden: false
          }
        ]
      }
    ]
  }
];
