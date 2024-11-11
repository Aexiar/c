# 第一章：前言

* 在 C 语言中， const 关键字用于创建常量，它指示编译器将标识符 （变量、函数参数、指针等）视为不可修改的值。



# 第二章：普通常量

## 2.1 概述

* 如果一个变量使用 const 修饰，就变为常量，语法如下：

```c
const int MAX_NUM = 100; // 都可以，但是这种方式
```

```c
int const MAX_NUM = 100; // 都可以，但是建议上面的方式
```

* 常量一旦被创建后其值就不能再改变，必须在定义的同时赋值（初始化），后面的任何赋值行为都将引发错误。

> [!TIP]
>
> 通常而言，常量名建议使用大驼峰的形式表示，如：`MAX_VALUE`，以便和普通的局部变量区分。

## 2.2 应用示例

* 示例：

```c {11}
#include <stdio.h>

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    const double PI = 3.14;
    
    // 错误，不能修改常量
    PI = 3.1415;  // [!code error]

    return 0;
}
```



# 第三章：指针常量(Pointer to Constant)

## 3.1 概述

* 语法：

```c
const int *p;
```

```c
int const *p;
```

> [!NOTE]
>
> * ① 指针常量就是指向常量的指针，表示该指针所指向的对象的值是不能通过指针修改的，但是指针本身可以指向其它的地址。
> * ② const 离变量名远，就是用来修饰指针指向的数据，即： `const` 在 `*` 号之前，表示 **指向的值不能修改，但是指针本身可以修改**。
> * ③ 其实，从语法上也可以看出来，即：`const` 修饰的是 `*p` ，即 `*p` 是固定的，即：不可以通过 `*p` 来修改数据。

## 3.2 应用示例

* 示例：

```c
#include <stdio.h>

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    const int *p;   // 或者 int const *p;
    int a = 10;
    int b = 20;

    p = &a;  // 合法：可以改变指针指向
    // 错误，不能通过指针修改 a 的值
    *p = 30; // [!code error]
    p = &b;  // 合法：可以改变指针指向

    return 0;
}
```



# 第四章：常量指针(Constant Pointer)

## 4.1 概述

* 语法：

```c
int* const p;
```

> [!NOTE]
>
> * ① 常量指针意味着指针本身是常量，不能指向其他地址，但指针所指向的对象的值可以修改。
> * ② const 离变量名近，就是用来修饰指针变量的，即：`const` 在 `*` 号之后，表示 **指针本身不能改变，但指向的值可以改变**。
> * ③ 其实，从语法上也可以看出来，即：`const` 修饰的是 `p` ，即 `p` 是固定的，即：不可以将 `p` 修改为其他指针。

## 4.2 应用示例

* 示例：

```c
#include <stdio.h>

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    int a = 10;
    int *const p = &a; // p 是常量指针，必须在定义时初始化

    *p = 20; // 合法：可以通过指针修改 a 的值
    // 错误，不能改变指针的指向
    p = &a; // [!code error]  

    return 0;
}
```



# 第五章：指向常量的常量指针 (Constant Pointer to Constant)

## 5.1 概述

* 语法：

```c
const int* const p;
```

```c
int const * const p;
```

> [!NOTE]
>
> * ① 指向常量的常量指针就是指针的指向和指向的数据值都不能修改。
> * ② 在实际开发中，较少使用！！！

## 5.2 应用示例

* 示例：

```c
#include <stdio.h>

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    int a = 10;
    const int *const p = &a; // 必须在定义时初始化

     // 错误，不能修改 a 的值
    *p = 20;  // [!code error]
     // 错误，不能改变指针的指向
    p = &a;   // [!code error]

    return 0;
}
```



# 第六章：指针常量作为函数参数

## 6.1 概述

* 在C语言中，单独定义 const 变量没有明显的优势，完全可以使用`#define`命令代替。

> [!NOTE]
>
> const 通常用在函数形参中，如果形参是一个指针，为了防止在函数内部修改指针指向的数据，就可以用 const 来限制。

* 在 C 语言标准库中，有很多函数的形参都被 `const` 修饰了，下面是部分函数的原型：

```c
size_t strlen ( const char * str );
```

```c
int strcmp ( const char * str1, const char * str2 );
```

```c
char * strcat ( char * destination, const char * source );
```

```c
char * strcpy ( char * destination, const char * source );
```

```c
int system (const char* command);
```

```c
int puts ( const char * str );
```

```c
int printf ( const char * format, ... );
```

## 6.2 应用示例

* 示例：

```c {6}
#include <stdio.h>

/**
* 查找字符串中某个字符出现的次数
*/
size_t strnchr(const char *str, char ch){
    int i, n = 0, len = strlen(str);

    for(i=0; i<len; i++){
        if(str[i] == ch){
            n++;
        }
    }
   
    return n;
}

int main(){
    char *str = "abcabcabcabcdfafere";
    char ch = 'a';
    int n = strnchr(str, ch);
    printf("%d\n", n);
    return 0;
}
```



# 第七章：深入理解 const 关键字

## 7.1 概述

* const 关键字修饰的变量，即：const 常量，一旦被定义就必须初始化，后面的任何赋值行为都将发生错误。

```c
#include <stdio.h>

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    const double PI = 3.14;
    
    // 错误，不能修改常量
    PI = 3.1415;  // [!code error]

    return 0;
}
```

* 其实，这只是 C 语言的编译器在语法层面的限制而已：`我们无法通过变量名去修改一个 const 常量的取值，否则将会编译失败`。但是，作为程序员，我们可以在程序运行的时候，去修改 const 常量的值。

```c {10,12,14}
#include <stdio.h>

int getNum(){
    return 100;
}

int main(){
    int n = 90;
    
    const int MAX_NUM1 = getNum();  // 运行时初始化
    
    const int MAX_NUM2 = n;  // 运行时初始化
    
    const int MAX_NUM3 = 80;  // 编译时初始化
  
    printf("%d, %d, %d\n", MAX_NUM1, MAX_NUM2, MAX_NUM3);

    return 0;
}
```

* 如果你还不能理解运行时，那么用户输入来修改 const 常量，总会属于运行时吧。

```c
#include <stdio.h>

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    const int num = 10;

    printf("修改 num 的值：");
    scanf("%d", &num); // [!code highlight]

    // const int num = 20
    printf("const int num = %d\n", num);

    return 0;
}
```

> [!CAUTION]
>
> * ① 正因为 C 语言的这种“坑爹”的语法，很多程序员会将 const 修饰的变量，即：const 常量，称为只读变量。
> * ② 但是，对于使用 C 语言的程序员而言，可以使用指针、函数来动态修改 const 修饰的变量（即：const 常量）的值。

## 7.2 const 和 非 const 的转换

* 所谓的指针常量就是指向常量的指针，表示该指针所指向的对象的值是不能通过指针修改的，但是指针本身可以指向其它的地址，例如：`const char* str1`，而普通的指针变量本身既可以指向其他地址，所指向的对象的值也可以改变，例如：`char* str2` 。
* 在 C 语言中，指针常量的类型（`const char*`）是不可以转换为普通的指针类型（`char*`），即：

```c
#include <stdio.h>

void func(char *str) {
    *str = "你好啊"; // [!code error]
}

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    const char *str1 = "我是谁";
    // 不合法
    func(str1); // [!code error]

    return 0;
}
```

> [!NOTE]
>
> * ① 很好理解，`char*`指向的数据有读取和写入权限，而 `const char *`指向的数据只有读取权限，降低数据的权限并不会带来任何问题，但是提升数据的权限就有可能发生危险。
> * ② 在实际开发中，为了安全，权限的范围是越小越好。

* 在 C 语言中，普通的指针类型（`char*`）是可以转换为指针常量的类型（`const char*`），即：

```c
#include <stdio.h>

void func(const char *str) {
    printf("%s\n", str);
}

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    char *str1 = "我是谁";
    
    // 合法
    func(str1); // [!code highlight]

    return 0;
}
```

> [!NOTE]
>
> * ① 很好理解，`char*`指向的数据有读取和写入权限，而 `const char *`指向的数据只有读取权限，降低数据的权限并不会带来任何问题，但是提升数据的权限就有可能发生危险。
> * ② 在实际开发中，为了安全，权限的范围是越小越好。

