# 第一章：枚举（⭐）

## 1.1 回顾 C 语言中的变量

* C 语言中的变量，按照`数据类型`划分，如下所示：

> [!NOTE]
>
> `构造类型`也会被人称为`自定义数据类型`！！！

![](./assets/1.png)

* C 语言中的变量，按照`声明位置`划分，如下所示：

![](./assets/2.png)

* C 语言中的变量，按照`存储方式`分类，如下所示：

![](./assets/3.png)

## 1.2 什么是枚举？

* 在实际生活中，我们经常会遇到一些数据的值是有限的，如：

  * `星期`：Monday (星期一)、......、Sunday (星期天)。

  - `性别`：Man (男)、Woman (女)。

  - `季节`：Spring (春节)......Winter (冬天)。

  - `支付方式`：Cash（现金）、WeChatPay（微信）、Alipay (支付宝)、BankCard (银 行卡)、CreditCard (信用卡)。

  - `就职状态`：Busy、Free、Vocation、Dimission。

  - `订单状态`：Nonpayment（未付款）、Paid（已付款）、Delivered（已发货）、 Return（退货）、Checked（已确认）Fulfilled（已配货）。
  - ...

* 类似上述的场景，我们就可以使用 C 语言提供的一种`构造类型` --- `枚举`（Enumeration） ，其用于`定义`一组相关的`整型常量`。它提供了一种更具可读性和可维护性的方式来定义`常量集合`。

## 1.3 定义枚举

* 语法：

```c
enum 枚举类型 {
    枚举元素1, // 枚举常量1
    枚举元素2, // 枚举常量2
    ...
}
```

> [!NOTE]
>
> `枚举元素`也称为`枚举成员`或`枚举常量`，具有如下的特点：
>
> * ① 枚举元素的值必须在同一枚举中是唯一的。
> * ② 枚举元素的值必须是整数类型，通常是 int 。
> * ③ 如果没有为枚举元素指定值，编译器会自动为它们进行分配，从 0 开始，自动递增。
> * ④ 定义枚举的时候，也可以为枚举元素自定义值，但是需要保证唯一性和整数类型。

> [!IMPORTANT]
>
> CLion 中`选中枚举元素`并使用快捷键 `Ctrl + Q`，或将`鼠标`悬浮在`枚举元素`上，就会自动显示枚举元素对应的值，如下所示：
>
> ![](./assets/4.png)



* 示例：每个枚举常量的值默认为从 0 开始递增的整数

```c
#include <stdio.h>

/**
 * 定义枚举
 */
enum Color {
    RED,   // 0
    GREEN, // 1
    BLUE   // 2
};

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    return 0;
}
```



* 示例：定义带有显式值的枚举，如果给定一个常量的值，后续的常量会依次递增

```c
#include <stdio.h>

/**
 * 定义枚举
 */
enum Color {
    RED = 1,
    GREEN, // 2
    BLUE   // 3
};

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    enum Color color = GREEN;
    printf("color = %d\n", color);

    return 0;
}
```

## 1.4 枚举变量

### 1.4.1 概述

* 定义变量时所指定的类型是我们自定义的枚举类型，那么该变量就称为枚举变量。

### 1.4.2 定义枚举变量

* 可以使用定义好的枚举类型来声明枚举变量。
* 语法：

```c
enum 枚举名 变量名;
```



* 示例：

```c
#include <stdio.h>

/**
 * 定义枚举
 */
enum Color {
    RED = 1,
    GREEN,
    BLUE
};

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);
    
    // 定义枚举变量
    enum Color color ; // [!code highlight]

    return 0;
}
```

### 1.4.3 给枚举变量赋值

* 枚举变量的值应该是枚举类型中的任意一个枚举元素（没有常量），不能是其他的值。
* 语法：

```c
枚举变量 = 枚举常量;
```



* 示例：

```c
#include <stdio.h>

/**
 * 定义枚举
 */
enum Color {
    RED = 1,
    GREEN,
    BLUE
};

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    // 给枚举变量赋值
    enum Color color = BLUE; // [!code highlight]
    
    printf("color = %d\n", color);

    return 0;
}
```

## 1.5 枚举的本质到底是什么？

* 尽管枚举的定义语法看起来像一种新类型，但它的底层实际上是一个整型（通常是 `int` 类型）。C 语言并不强制要求枚举使用特定的整型类型，但编译器通常会选择使用 `int` 来表示枚举。
* 在 C 语言中，枚举类型和整数类型是兼容的。你可以在需要整数的地方使用枚举值，也可以将枚举值赋给整型变量。这是因为枚举成员在编译时就被替换为其对应的整数值。



* 示例：

```c
#include <stdio.h>

/**
 * 定义枚举
 */
enum Color {
    RED = 1,
    GREEN, // 2
    BLUE   // 3
};

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    enum Color color = 0;

    printf("sizeof(color) = %zu \n", sizeof(color)); // sizeof(color) = 4
    printf("sizeof(RED) = %zu \n", sizeof(RED));     // sizeof(RED) = 4
    printf("sizeof(GREEN) = %zu \n", sizeof(GREEN)); // sizeof(GREEN) = 4
    printf("sizeof(BLUE) = %zu \n", sizeof(GREEN));  // sizeof(BLUE) = 4
    printf("sizeof(int) = %zu \n", sizeof(int));     // sizeof(int) = 4

    return 0;
}
```

## 1.6 应用示例

* 如果枚举常量的值是连续的，我们可以使用循环遍历；如果枚举常量的值不是连续的，则无法遍历。



* 示例：

```c
#include <stdio.h>
// 定义枚举类型
enum Weekday {
    MONDAY = 1,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
};
int main() {

    // 定义枚举变量
    enum Weekday day;

    // 使用循环遍历出所有的枚举常量
    for (day = MONDAY; day <= SUNDAY; day++) {
        printf("%d \n", day);
    }

    return 0;
}
```

## 1.7 应用示例

* 枚举变量通常用于控制语句中，如：switch 语句。



* 示例：

```c
#include <stdio.h>

/**
 * 定义枚举
 */
enum Color {
    RED = 1,
    GREEN, // 2
    BLUE   // 3
};

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    enum Color color;
    
    printf("请输入颜色(1-3)：");
    scanf("%d", &color);
    switch (color) {
        case RED:
            printf("红色\n");
            break;
        case GREEN:
            printf("绿色\n");
            break;
        case BLUE:
            printf("蓝色\n");
            break;
        default:
            printf("输入错误\n");
            break;
    }

    return 0;
}
```



# 第二章：结构体（⭐）







在C语言、C++等编程语言中，结构体（`struct`）是一种用户自定义的数据类型，可以包含不同类型的数据字段。结构体的目的是将多个不同类型的数据组合在一起形成一个整体。结构体中可以包含以下数据类型：

1. **基本数据类型**：
   - 整型 (`int`, `short`, `long`, `unsigned int`, `unsigned long` 等)
   - 浮点型 (`float`, `double`)
   - 字符型 (`char`)
   - 布尔类型 (`bool`，通常在C++中使用)

2. **指针类型**：
   - 指向特定数据类型的指针（如 `int*`, `char*` 等）
   - 函数指针（如 `int (*funcPtr)(int, int)`）

3. **数组类型**：
   - 定长数组（如 `int arr[10]`, `char str[50]`）
   - 字符串数组（C语言中的字符数组用于存储字符串）

4. **枚举类型**：
   - 枚举类型（如 `enum day {SUN, MON, TUE}`）

5. **结构体类型**：
   - 可以包含其他结构体作为成员（称为嵌套结构体）
   - 结构体指针

6. **联合体类型（union）**：
   - 可以包含联合体（`union`），用于多个成员共享同一块内存。

7. **位域（Bit fields）**：
   - 在C语言中，结构体中可以使用位域来精确控制字段占用的比特位。

示例代码：

```c
#include <stdio.h>

// 定义结构体
struct Person {
    char name[50];     // 字符数组
    int age;           // 整型
    float height;      // 浮点型
    struct Address {   // 嵌套结构体
        char city[50];
        int zipCode;
    } address;
};

int main() {
    // 创建结构体变量
    struct Person person1 = {"Alice", 30, 5.6, {"New York", 10001}};
    
    // 访问结构体成员
    printf("Name: %s\n", person1.name);
    printf("Age: %d\n", person1.age);
    printf("Height: %.1f\n", person1.height);
    printf("City: %s\n", person1.address.city);
    
    return 0;
}
```

结构体是灵活且强大的工具，允许我们将各种类型的数据组合在一起，便于代码管理与逻辑抽象。





结构体不能直接包含自己作为成员，这是因为这样会导致**无限递归定义**，结构体的大小无法确定，编译器无法正确分配内存。

### 原因详解：

1. **内存分配问题**：
   假设你定义一个结构体`struct A`，其中包含一个类型为`struct A`的成员：
   
   ```c
   struct A {
       int data;
       struct A self; // 错误，结构体不能包含自己
   };
   ```

   编译器会试图计算结构体`A`的大小，但是因为`A`中包含另一个`A`，这个`A`中又包含另一个`A`，这种嵌套会无限递归下去。编译器无法确定最终的大小，因为这个定义永远不会结束。

2. **逻辑上的循环**：
   如果结构体包含自己，这意味着每个结构体实例会包含另一个结构体实例，后者又包含另一个结构体实例，导致逻辑上的循环引用。这是不可能实现的，因为系统的内存和逻辑不能支持这种无穷递归。

### 可行的解决方案：

虽然不能直接包含自己，但是可以通过**指针**来引用自身。指针有固定的大小（通常是4字节或8字节，取决于系统架构），因此不会造成上述的无限递归问题。

### 示例：通过指针包含自身
```c
#include <stdio.h>

// 定义结构体
struct Node {
    int data;
    struct Node* next;  // 使用指针引用自己
};

int main() {
    // 创建结构体节点
    struct Node node1;
    struct Node node2;
    
    // 初始化数据
    node1.data = 1;
    node2.data = 2;
    
    // 链接节点
    node1.next = &node2;
    node2.next = NULL;  // 最后一个节点的 next 指针为 NULL

    // 访问节点
    printf("Node 1 data: %d\n", node1.data);
    printf("Node 2 data: %d\n", node1.next->data);

    return 0;
}
```

在这个例子中，`struct Node`中包含了一个指向同类型结构体的指针`next`，这样可以形成链表等数据结构。通过使用指针，避免了无限递归定义，并且能达到引用自身的目的。

### 总结：
- 结构体不能直接包含自身作为成员，因为会导致编译器无法确定结构体的大小，产生无限递归。
- 可以通过使用指针来实现结构体引用自身的需求。