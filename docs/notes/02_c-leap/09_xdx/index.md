# 第一章：概述

## 1.1 介绍

* [库函数](/C标准库参考手册.pdf)并非 C 语言本身的组成部分，而是 C 语言编译系统为方便用户使用而提供的公共函数。 

> [!CAUTION]
>
> 不同的编译系统提供的函数数量和函数名、函数功能都不尽相同， 使用时要小心，必要时需要查一下库函数手册。

* C 标准库的头文件，如下所示：

![](./assets/1.png)

## 1.2 常见的头文件和库函数

* 我们完全没必要记住所有的 C 语言头文件和库函数（也记不住），只需要熟悉常用的头文件和库函数。

| 头文件        | 功能说明                                                   | 常用函数和宏                                                 |
| :------------ | :--------------------------------------------------------- | :----------------------------------------------------------- |
| **stdio.h**   | 标准输入输出库                                             | `printf`， `scanf`， `fprintf`，`fscanf`，`fopen`， `fclose`，`fgets`， `fputs` |
| **stdlib.h**  | 标准库，提供内存分配、程序控制、类型转换、随机数生成等功能 | `malloc`， `free`， `exit`， `atoi`， `atof`，`rand`，`srand` |
| **string.h**  | 字符串处理库                                               | `strlen`， `strcpy`， `strncpy`， `strcat`， `strcmp`，`strstr`， `memset`， `memcpy` |
| **math.h**    | 数学库                                                     | `sin`， `cos`， `tan`， `exp`， `log`， `sqrt`， `pow`       |
| **time.h**    | 时间和日期库                                               | `time`， `clock`， `difftime`， `mktime`， `strftime`， `localtime`，`gmtime` |
| **ctype.h**   | 字符处理库                                                 | `isalnum`， `isalpha`， `isdigit`， `islower`， `isupper`， `tolower`， `toupper` |
| **stdbool.h** | 布尔类型库                                                 | `bool`， `true`， `false`                                    |
| **assert.h**  | 断言库                                                     | `assert`                                                     |