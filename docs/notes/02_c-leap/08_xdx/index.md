# 第一章：共用体

## 1.1 概述

* 有的时候，需要一种数据结构，在不同的场合表示不同的数据类型，如：需要一种数据结构表示学生的成绩，有的时候是`整数`，如：80、90 等；有的时候是`字符`，如：'A'、'B' 等；有的时候是`浮点数`，如：80.5、60.5 等。
* C 语言提供了`共用体`（union，联合）结构类型，用来自定义可以灵活变更的数据类型。它内部可以包含各种属性，但是同一时间只能有一个属性，因为所有的属性都保存在同一个内存地址，后面写入的属性将会覆盖前面的属性。

> [!NOTE]
>
> * ① 之所以，C 语言会提供共用体，就是因为其可以节省内存。
> * ② 在实际开发中，共用体并不会使用很频繁；反而，结构体的使用更加频繁！！！
> * ③ 结构体占用的内存大于等于所有成员占用的内存的总和（成员之间可能会存在缝隙），共用体占用的内存等于最长的成员占用的内存。共用体使用了内存覆盖技术，同一时刻只能保存一个成员的值，如果对新的成员赋值，就会把原来成员的值覆盖掉。

## 1.2 声明共用体

* 语法：

```c
union 共用体名 {
    数据类型1 成员名1;   // 分号结尾
    数据类型2 成员名2;
    ……
    数据类型n 成员名n;
}
```



* 示例：

``` c {4-8}
#include <stdio.h>

// 声明公用体
union Data {
    int    s;  // 整数，如：80、90
    char   g; // 字符，如：'A'、'B'
    double f; // 浮点数，如：80.5、90.5
};

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    return 0;
}
```

## 1.3 定义公用体变量

### 1.3.1 概述

* 定义了新的数据类型（公用体类型）以后，就可以定义该类型的变量，这与定义其他类型变量的写法是一样的。

### 1.3.2 方式一

* 语法：

```c
union 共用体类型名称 共用体变量名;
```

> [!NOTE]
>
> - ① 需要先定义共用体，然后再定义共用体变量。
> - ② `union` 关键字不能省略；否则， C 语言编译器将会报错。

> [!CAUTION]
>
> 在 C 语言中，共用体（union）和共用体变量是两个不同的概念，如下所示：
>
> - ① 共用体是一种自定义的数据类型，像一种模板，定义了数据的格式，不占用内存空间。
> - ② 共用体变量是根据共用体类型创建的变量，代表了一个具体的对象，用于存储数据，需要内存空间来存储。



* 示例：

```c {16}
#include <stdio.h>

// 声明公用体
union Data {
    int    s; // 整数，如：80、90
    char   g; // 字符，如：'A'、'B'
    double f; // 浮点数，如：80.5、90.5
};

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);
    
    // 定义共用体变量
    union Data data ;

    return 0;
}
```

### 1.3.3 方式二

* 语法：

```c
union 共用体名 {
    数据类型1 成员名1;   // 分号结尾
    数据类型2 成员名2;
    ……
    数据类型n 成员名n;
} 共用体变量1，共用体变量2,...;
```

> [!NOTE]
>
> 在声明共用体的同时定义共用体变量。



* 示例：

```c {8}
#include <stdio.h>

// 声明公用体
union Data {
    int    s; // 整数，如：80、90
    char   g; // 字符，如：'A'、'B'
    double f; // 浮点数，如：80.5、90.5
} data1,data2; // 定义共用体变量

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    return 0;
}
```

### 1.3.4 方式三

* 语法：

```c
union {
    数据类型1 成员名1;   // 分号结尾
    数据类型2 成员名2;
    ……
    数据类型n 成员名n;
} 共用体变量1，共用体变量2,...;
```

> [!NOTE]
>
> - ① 在声明共用体的同时定义共用体变量，但是不给共用体名，这种方式的结构体也称为`匿名共用体`。
> - ② 和`方式二`相比，后面的代码将无法通过该共用体来定义变量，因为没有共用体名称，除非使用 `typedef` 关键字。



* 示例：

```c {4,8}
#include <stdio.h>

// 声明公用体
union {
    int    s;   // 整数，如：80、90
    char   g;   // 字符，如：'A'、'B'
    double f;   // 浮点数，如：80.5、90.5
} data1, data2; // 定义共用体变量

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);


    return 0;
}
```

## 1.4 共用体变量中成员的获取和赋值

### 1.4.1 概述

* 成员是共用体的一个组成部分，一般是基本数据类型、也可以是数组、指针、结构体等。共用体的成员也可以称为属性。
* 共用体使用点号 `.` 获取单个成员，可以进行赋值和取值。

### 1.4.2 共用体成员赋值

* 语法：

```c
共用体变量名.成员名 = 值; // 值可以是常量或变量
```

> [!CAUTION]
>
> * ① 共用体使用了内存覆盖技术，同一时刻只能保存一个成员的值，如果对新的成员赋值，就会把原来成员的值覆盖掉。
> * ② 给共用体变量中的成员赋值的时候，尽量每次只给一个成员赋值，防止产生数据覆盖现象！！！



* 示例：

```c {19}
#include <stdio.h>

// 声明公用体
union Data {
    int    s; // 整数，如：80、90
    char   g; // 字符，如：'A'、'B'
    double f; // 浮点数，如：80.5、90.5
};

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    // 定义共用体变量
    union Data data;

    // 赋值
    data.s = 80;
    printf("data.s = %d\n", data.s); // data.s = 80

    // 给其它成员赋值，会产生数据覆盖现象
    data.g = 'A';
    printf("data.s = %d\n", data.s); // data.s = 65

    return 0;
}
```

### 1.4.3 使用大括号给共用体中的某个成员赋值

* 示例：

```c
union 共用体类型 共用体变量 = {.}; // 只给首成员赋值
```

```c
union 共用体类型 共用体变量 = {.xxx = xxx}; // 给任一成员赋值
```



* 示例：

```c {16}
#include <stdio.h>

// 声明公用体
union Data {
    int    s; // 整数，如：80、90
    char   g; // 字符，如：'A'、'B'
    double f; // 浮点数，如：80.5、90.5
};

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    // 定义共用体变量并进行初始化
    union Data data = {80};

    printf("data.s = %d\n", data.s); // data.s = 80

    return 0;
}
```



* 示例：

```c
#include <stdio.h>

// 声明公用体
union Data {
    int    s; // 整数，如：80、90
    char   g; // 字符，如：'A'、'B'
    double f; // 浮点数，如：80.5、90.5
};

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    // 定义共用体变量并进行初始化
    union Data data = {.g = 'A'};

    printf("data.g = %c\n", data.g); // data.g = A

    return 0;
}
```

## 1.5 错误方式

* 不要向给结构体变量中成员一样，给超过 2 个以上的成员赋值，因为其底层的内存结构是不一样的。

> [!CAUTION]
>
> * ① 结构体占用的内存大于等于所有成员占用的内存的总和（成员之间可能会存在缝隙），共用体占用的内存等于最长的成员占用的内存。
> * ② 共用体使用了内存覆盖技术，同一时刻只能保存一个成员的值，如果对新的成员赋值，就会把原来成员的值覆盖掉。



* 示例：错误演示

```c
#include <stdio.h>

// 声明公用体
union Data {
    int    s; // 整数，如：80、90
    char   g; // 字符，如：'A'、'B'
    double f; // 浮点数，如：80.5、90.5
};

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    // 定义共用体变量并进行初始化
    // 错误方式，因为给超过 2 个以上的成员赋值
    union Data data = {.s = 80, .g = 'A', .f = 80.5}; // [!code error]

    return 0;
}
```

## 1.6 应用示例

* 需求：现有一张关于学生信息和教师信息的表格。

> [!NOTE]
>
> 表格信息，如下所示：
>
> | 姓名 | 编号 | 性别  | 职业 | 分数/ 课程 |
> | ---- | ---- | ----- | ---- | ---------- |
> | 张三 | 1001 | 男(m) | 学生(s) | 89.5       |
> | 李四 | 1101 | 男(m)  | 老师(t) | math       |
> | 王五 | 1002 | 女(f) | 学生(s) | English    |
> | 赵六 | 1102 | 男(m) | 老师(t) | 95.0       |



* 示例：

```c
#include <stdio.h>

struct Person {
    char name[20];
    int  id;
    char gender;     // 性别 m->男 f->女
    char profession; // 职业 s->学生 t->老师
    union {
        float score;
        char  course[20];
    } sc; // sc 是一个共用体变量
};

#define TOTAL 5
int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    // 定义共用体变量并进行初始化
    struct Person persons[TOTAL];

    printf("----------请输入学生和老师的信息-----------\n\n");
    
    // 输入人员信息
    for (int i = 0; i < TOTAL; i++) {
        printf("请输入姓名：");
        scanf("%s", persons[i].name);
        printf("请输入编号：");
        scanf("%d", &(persons[i].id));
        printf("请输入性别：");
        scanf(" %c", &(persons[i].gender));
        printf("请输入职业：");
        scanf(" %c", &(persons[i].profession));
        if (persons[i].profession == 's') { // 如果是学生
            printf("请输入学生成绩：");
            scanf("%f", &persons[i].sc.score);
        } else { // 如果是老师
            printf("请输入老师课程：");
            scanf("%s", persons[i].sc.course);
        }
        printf("\n");
    }

    printf("----------学生和老师的信息，如下所示：-----------\n\n");

    // 输出人员信息
    for (int i = 0; i < TOTAL; i++) {
        printf("姓名：%s ", persons[i].name);
        printf("编号：%d ", persons[i].id);
        printf("性别：%c ", persons[i].gender);
        printf("职业：%c ", persons[i].profession);
        if (persons[i].profession == 's') { // 如果是学生
            printf("成绩：%f ", persons[i].sc.score);
        } else { // 如果是老师
            printf("课程：%s ", persons[i].sc.course);
        }

        printf("\n");
    }

    return 0;
}
```



# 第二章：typedef（⭐）