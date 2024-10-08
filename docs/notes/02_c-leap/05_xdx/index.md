# 第一章：参数传递机制（⭐）

## 1.1 函数内变量的传递

* 对于基本数据类型的变量，就是将变量的值传递过去，即：值传递。
* 对于数组，就是将数组的地址传递过去，即：地址传递。
* 对于指针，就是将指针保存的地址传递过去，即：地址传递。



* 示例：

```c {10}
#include <stdio.h>

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    int a = 10;
    // 对于基本数据类型的变量，就是将变量的值传递过去，即：值传递。
    int b = a;

    printf("a = %d\n", a); // a = 10
    printf("b = %d\n", b); // b = 10

    b = 20;

    printf("a = %d\n", a); // a = 10
    printf("b = %d\n", b); // b = 20

    return 0;
}
```



* 示例：

```c {11}
#include <stdio.h>

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    int arr[] = {1, 2, 3, 4, 5};

    // 对于数组，就是将数组的地址传递过去，即：地址传递。
    int *p = arr;

    // 遍历数组
    for (int i = 0; i < sizeof(arr) / sizeof(int); ++i) {
        printf("arr[%d] = %d \n", i, arr[i]);
    }

    printf("\n");

    p[0] = 2;
    p[1] = 4;
    p[2] = 6;
    p[3] = 8;
    p[4] = 10;

    // 遍历数组
    for (int i = 0; i < sizeof(arr) / sizeof(int); ++i) {
        printf("arr[%d] = %d\n", i, arr[i]);
    }

    return 0;
}
```



* 示例：

```c {15}
#include <stdio.h>

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    int num = 10;

    printf("num = %d\n", num); // num = 10

    int *p = &num;

    // 对于指针，就是将指针保存的地址传递过去，即：地址传递。
    int *q = p;

    *q = 20;

    printf("num = %d\n", num); // num = 20

    return 0;
}
```

## 1.2 形参和实参

* `形参`（formal parameter）：在定义函数时，函数名后面括号`()`内声明的`变量`称为`形式参数`，简称为`形参`。
* `实参`（actual parameter）：在调用函数时，函数名后面括号`()`内使用的`值`、`变量`或`表达式`称为实际`参数`，简称`实参`。

> [!NOTE]
>
> * ① `形参`和`实参`的类型相同或赋值兼容，个数相等，并且需要一一对应。
> * ② `形参`只是一个形式，在调用之前并不分配内存。函数调用的时候，系统会为`形参`分配内存，然后将主函数中的实参传递给被调用函数的`形参`。被调函数执行完毕，通过 return 语句返回结果，系统将`形参`的内存单元释放。
> * ③ `形参`和`实参`的主要功能是`数据传递`，按照传递的数据是`值`还是`地址`，分为`值传递`和`地址传递`两种。



* 示例：

```c {9,22}
#include <stdio.h>

/**
 * 求和
 * @param x 形参
 * @param y 形参
 * @return
 */
int add(int x, int y) {
    return x + y;
}

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    int a = 10;
    int b = 20;

    // a 和 b 是实参
    int result = add(a, b);

    printf("%d + %d = %d\n", a, b, result);

    return 0;
}
```

## 1.3 Linux 下 C 语言程序的内存布局

### 1.3.1 概述

* 在 `32` 位操作系统下，一个指针或地址占用的内存空间是 `4` 个字节，理论上能够访问的虚拟内存空间的大小是 `2^32 =  0x100000000 Bytes`，即 `4GB`。
* 在 `64` 位操作系统下，一个指针或地址占用的内存空间是 `8` 个字节，理论上能够访问的虚拟内存空间的大小是 `2^64 =  0x10000000000000000 Bytes`，即 `17,179,869,184GB`或`16,384TB`。

> [!NOTE]
>
> * ① 32 位操作系统，其有效的虚拟地址范围是 `0x00000000` - `0xFFFFFFFF` 。
> * ② 在 64 位操作系统下，由于物理内存不可能达到这么大（16,384TB），CPU 的寻址能力也没有这么大，实现 64 位的虚拟地址只会增加系统的复杂度和地址转换的成本，带不来任何好处，所以 Windows 和 Linux 都对虚拟地址进行了限制，仅使用虚拟地址的低 48 位（6 个字节），即：64 位操作系统的虚拟地址空间大小为 `2^48 = 256TB`。
> * ③  64 位操作系统，其有效的虚拟地址范围是 `0x0000000000000000` - `0xFFFFFFFFFFFFFFFF`  。

### 1.3.2 内核空间和用户空间

* 之前我们也提及过，在现代操作系统中，`用户态（User Mode）`和`内核态（Kernel Mode）`是两种不同的执行模式，它们对系统资源的访问权限有着本质的区别。

> [!NOTE]
>
> 也有人将`内存态`称为`内核空间`，而`用户态`称为`用户空间`。

* 这种区分是为了提供一个稳定和安全的运行环境，防止用户程序直接操作硬件设备和关键的系统资源，从而可能引起系统的不稳定或安全问题。

![img](./assets/1.png)

* 内核态（Kernel Mode） VS 用户态（User Mode）：

| 类型   | 内核态（Kernel Mode）                                        | 用户态（User Mode）                                          |
| :----- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| 权限   | 内核态是操作系统代码运行的模式，拥有访问系统全部资源和执行硬件操作的`最高权限`。在这种模式下，操作系统的核心部分可以直接访问内存、硬件设备控制、管理文件系统和网络通信等。 | 用户态是普通应用程序运行的模式，具有`较低`的系统资源访问权限。在用户态，程序不能直接执行硬件操作，必须通过操作系统提供的接口（即系统调用）来请求服务。 |
| 安全性 | 由于内核态具有如此高的权限，因此只有可信的、经过严格审查的操作系统核心组件才被允许在此模式下运行。这样可以保护系统不被恶意软件破坏。 | 用户态为系统提供了一层保护，确保用户程序不能直接访问关键的系统资源，防止系统崩溃和数据泄露。 |
| 功能   | 内核态提供了`系统调用`的接口，允许用户态程序安全地请求使用操作系统提供的服务，比如：文件操作、网络通信、内存管理等。 | 用户态保证了操作系统的稳定性和安全性，同时也使得多个程序可以在相互隔离的环境中同时运行，避免相互干扰。 |

### 1.3.3 Linux 下 32 位环境的用户空间内存分布情况

* 对于 32 位的环境而言，理论上程序是可以拥有 4GB 的虚拟地址空间的，在 C 语言中使用到的变量、函数、字符串等都会对应内存中的一块区域。
* 但是，在这 4GB 的地址空间中，要拿出一部分给操作系统内核使用，应用程序无法直接访问这一段内存，这一部分内存地址被称为`内核空间`（Kernel Space）。

> [!NOTE]
>
> * ① Windows 在默认情况下会将高地址的 2GB 空间分配给内核（也可以配置为 1GB）。
> * ② 而 Linux 默认情况下会将高地址的 1GB 空间分配给内核。

* 也就是说，应用程序只能使用剩下的 2GB 或 3GB 的地址空间，称为`用户空间`（User Space）。
* Linux 下 32 位环境的经典内存模型，如下所示：

![](./assets/2.svg)

* 各个内存分区的说明，如下所示：

| 内存分区                  | 说明                                                         |
| ------------------------- | ------------------------------------------------------------ |
| 程序代码区（code）        | 存储程序的执行代码，通常为只读区，包含程序的指令。<br>程序启动时，这部分内存被加载到内存中，并不会在程序执行期间改变。 |
| 常量区（constant）        | 存放程序中定义的常量值，通常也是只读的，这些常量在程序运行期间不可修改。 |
| 全局数据区（global data） | 存储程序中定义的全局变量和静态变量。<br/>这些变量在程序的整个生命周期内存在，且可以被修改。 |
| 堆区（heap）              | 用于动态分配内存，例如：通过 `malloc` 或 `new` 分配的内存块。<br/>堆区的内存由程序员手动管理，负责分配和释放。<br/>如果程序员不释放，程序运行结束时由操作系统回收。 |
| 动态链接库                | 动态链接库（如： `.dll` 或 `.so` 文件）被加载到内存中特定的区域，供程序运行时使用。 |
| 栈区（stack）             | 用于存储函数调用的局部变量、函数参数和返回地址。<br/>栈是自动管理的，随着函数的调用和返回，栈上的内存会自动分配和释放。 |

> [!NOTE]
>
> * ① 程序代码区、常量区、全局数据区在程序加载到内存后就分配好了，并且在程序运行期间一直存在，不能销毁也不能增加（大小已被固定），只能等到程序运行结束后由操作系统收回，所以全局变量、字符串常量等在程序的任何地方都能访问，因为它们的内存一直都在。
> * ② 函数被调用时，会将参数、局部变量、返回地址等与函数相关的信息压入栈中，函数执行结束后，这些信息都将被销毁。所以局部变量、参数只在当前函数中有效，不能传递到函数外部，因为它们的内存不在了。
> * ③ 常量区、全局数据区、栈上的内存由系统自动分配和释放，不能由程序员控制。程序员唯一能控制的内存区域就是堆（Heap）：它是一块巨大的内存空间，常常占据整个虚拟空间的绝大部分，在这片空间中，程序可以申请一块内存，并自由地使用（放入任何数据）。堆内存在程序主动释放之前会一直存在，不随函数的结束而失效。在函数内部产生的数据只要放到堆中，就可以在函数外部使用。

### 1.3.4 Linux 下 64 位环境的用户空间内存分布情况

* 在 64 位环境下，虚拟地址空间大小为 256TB，Linux 将高 128TB 的空间分配给内核使用，而将低 128TB 的空间分配给用户程序使用。
* Linux 下 64 位环境的经典内存模型，如下所示：

![](./assets/3.svg)

## 1.4 参数的传递机制 1：值传递

* `值传递`：就是把主调函数的`实参值`复制给被调用函数的`形参` ，使形参获得初始值。

> [!NOTE]
>
> * ① 如果在函数内对`形参值`的修改，不会影响`实参值`！！！
> * ② 值传递，是`单向传递` ，只能把实参的值传递给形参，而不能把形参的值再传回给实参。
> * ③ 默认`值传递`的类型是：`基本数据类型 (整型类型、浮点类型，字符类 型)`、`结构体`、`共用体`、`枚举类型`。



* 示例：

```c {3,17}
#include <stdio.h>

void increment(int a) {
    a++;
    printf("increment 中 a = %d\n", a); // increment 中 a = 11
}

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    int i = 10;

    printf("main 中 i = %d\n", i); // main 中 i = 10

    increment(i);

    printf("main 中 i = %d\n", i); // main 中 i = 10

    return 0;
}
```



* 示例：

```c {8,28}
#include <stdio.h>

/**
 * 交换两个变量的值
 * @param x
 * @param y
 */
void swap(int x, int y) {
    int temp = x;
    x        = y;
    y        = temp;

    // swap 函数：x=20，y=10
    printf("swap 函数：x=%d，y=%d\n", x, y);
}

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    int a = 10;
    int b = 20;

    // main 函数：a = 10，b = 20
    printf("main 函数：a = %d，b = %d\n", a, b);

    swap(a, b);

    // main 函数：a = 10，b = 20
    printf("main 函数：a = %d，b = %d\n", a, b);

    return 0;
}
```

## 1.5 参数的传递机制 2：地址传递

### 1.5.1 概述

* `地址传递`：就是把`实参地址常量`进行复制，传送给`形参`，使形参获得初始值。

> [!NOTE]
>
> * ① 默认`地址传递`的类型是：`指针`、`数组`。实参将地址传递给形参，二者地址值相同。
> * ② 当`指针`作为函数的形参时，实参传递给形参的是地址， 在函数中通过形参保存的地址访问实参，进而在函数中通过地址 对实参的修改影响到实参的值。这也称为`双向传递` 。
> * ③ 当传递`数组首元素地址`时，即把实参数组的起始地址传递给形参。这样形参和实参数组就占用了共同的存储空间。在被调函数中，如果通过形参修改了数组元素值，调用函数后实参数组元素值也发生相应变化。

### 1.5.2 简单变量指针作为形参

* 当函数的形参类型是指针类型时，使用该函数时，需要传递指针（内存地址），或者数组给该形参。函数内以指针的方式操作变量(`*指针`)。



* 示例：

```c {3,17}
#include <stdio.h>

void increment(int *a) {
    (*a)++;
    printf("increment 中 a = %d\n", *a); // increment 中 a = 11
}

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    int i = 10;

    printf("main 中 i = %d\n", i); // main 中 i = 10

    increment(&i);

    printf("main 中 i = %d\n", i); // main 中 i = 11

    return 0;
}
```



* 示例：

```c {8,28}
#include <stdio.h>

/**
 * 交换两个变量的值
 * @param x
 * @param y
 */
void swap(int *x, int *y) {
    int temp = *x;
    *x       = *y;
    *y       = temp;

    // swap 函数：x=20，y=10
    printf("swap 函数：x=%d，y=%d\n", *x, *y);
}

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    int a = 10;
    int b = 20;

    // main 函数：a = 10，b = 20
    printf("main 函数：a = %d，b = %d\n", a, b);

    swap(&a, &b);

    // main 函数：a = 20，b = 10
    printf("main 函数：a = %d，b = %d\n", a, b);

    return 0;
}
```

### 1.5.3 数组作为形参

* 当数组名作为函数的参数的时候，会退化为指针。



* 示例：

```c {8,28}
#include <stdio.h>

/**
 * 将数组中的元素 * 2
 * @param arr
 * @param len
 */
void setValue(int arr[], int len) {
    for (int i = 0; i < len; ++i) {
        arr[i] = i * 2;
    }
}

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    int arr[] = {1, 2, 3, 4, 5};

    // 遍历数组
    for (int i = 0; i < 5; i++) {
        printf("arr[%d]=%d\n", i, arr[i]);
    }

    printf("\n");

    setValue(arr, sizeof(arr) / sizeof(int));

    // 遍历数组
    for (int i = 0; i < 5; i++) {
        printf("arr[%d]=%d\n", i, arr[i]);
    }

    return 0;
}
```



* 示例：

```c {8,30}
#include <stdio.h>

/**
 * 数组元素的反转
 * @param arr
 * @param len
 */
void reverse(int arr[], int len) {
    for (int left = 0, right = len - 1; left < right; ++left, --right) {
        int temp   = arr[left];
        arr[left]  = arr[right];
        arr[right] = temp;
    }
}

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    int arr[] = {1, 2, 3, 4, 5};

    // 遍历数组
    for (int i = 0; i < 5; i++) {
        printf("arr[%d]=%d\n", i, arr[i]);
    }

    printf("\n");

    reverse(arr, sizeof(arr) / sizeof(int));

    // 遍历数组
    for (int i = 0; i < 5; i++) {
        printf("arr[%d]=%d\n", i, arr[i]);
    }

    return 0;
}
```

### 1.5.4 字符串作为形参

* 字符串本质上就是字符数组，而字符数组作为函数的参数的时候，会退化为指针。



* 示例：

```c {8,26}
#include <stdio.h>

/**
 * 统计字符串中数字的个数
 * @param p
 * @return
 */
int digitalCount(char *p) {
    int count = 0;
    while (*p != '\0') {
        if (*p >= '0' && *p <= '9') {
            count++;
        }
        p++;
    }
    return count;
}

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    char str[] = "a12bc43hec22b68o";

    int count = digitalCount(str);

    printf("%s 中数字的个数是 %d\n", str, count);

    return 0;
}
```

### 1.5.5 字符串指针数组作为形参

* 字符串指针数组作为函数的参数的时候，会退化为指针。



* 示例：

```c {9,46}
#include <stdio.h>
#include <string.h>

/**
 * 对字符串进行排序
 * @param str
 * @param len
 */
void stringSort(char *str[7], int len) {
    for (int i = 0; i < len - 1; ++i) {
        for (int j = 0; j < len - 1 - i; ++j) {
            if (strcmp(str[j], str[j + 1]) > 0) {
                char *temp = str[j];
                str[j]     = str[j + 1];
                str[j + 1] = temp;
            }
        }
    }
}

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    // 字符串指针数组
    char *days[] = {
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"};

    // 数组的长度
    int len = sizeof(days) / sizeof(days[0]);

    // 遍历字符串指针数组
    for (int i = 0; i < len; ++i) {
        printf("%s\n", days[i]);
    }

    printf("\n");

    stringSort(days, sizeof(days) / sizeof(days[0]));

    // 遍历字符串指针数组
    for (int i = 0; i < len; ++i) {
        printf("%s\n", days[i]);
    }

    return 0;
}
```

## 1.6 应用示例

* 需求：定义函数，求一维数组元素的最大值。

> [!NOTE]
>
> * ① 函数的原型是：`int pMax(int *p,int len);` 
> * ② 函数的功能：在长度为 len ，由 p 指向的一维数组中求元素的最大值。



* 示例：

```c {9,20,28}
#include <stdio.h>

/**
 * 求一维数组元素的最大值
 * @param p
 * @param len
 * @return
 */
int pMax(int *p, int len);

int main() {

    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);
	
    // 定义一维数组
    int arr[] = {1, 2, 3, 43, 5, 6, 7};
	
    // 获取一维数组中元素的最大值
    int max = pMax(arr, sizeof(arr) / sizeof(int));

    // arr 数组元素的最大值为 43
    printf("arr 数组元素的最大值为 %d\n", max);

    return 0;
}

int pMax(int *p, int len) {
    int max = p[0];
    for (int i = 0; i < len; ++i) {
        if (max < p[i]) {
            max = p[i];
        }
    }
    return max;
}
```

## 1.7 应用示例

* 需求：有一个 `3 × 4` 的二维数组，求数组中所有元素中的最大值。

> [!NOTE]
>
> 建议使用`可变长数组`的形式作为参数；否则，`二维数组`作为参数时必须携带`列数`，且`列数`必须是`数字`。
>
> ```c
> /**
> * 不使用变长数组(VLA)作为参数，必须携带列数，且列数必须是数字！！！
> * n ：第一维的长度
> * 4 ：是列数
> */
> int pMax(int array[][4], int n) {
>     ...
> } 
> ```
>
> ```c
> /**
> * 使用变长数组(VLA)作为参数，更加通用！！！
> * 二维数组中的行和列可以根据实参动态开辟。
> */
> int pMax(int rows, int cols, int arr[rows][cols]) {
>     ...
> }
> ```



* 示例：

```c {10,31}
#include <stdio.h>

/**
 * 使用变长数组(VLA) 动态接收列数
 * @param rows 行
 * @param cols 列
 * @param arr 数组名
 * @return 
 */
int pMax(int rows, int cols, int arr[rows][cols]) {
    int max = arr[0][0]; 
    for (int i = 0; i < rows; ++i) {
        for (int j = 0; j < cols; ++j) {
            if (arr[i][j] > max) {
                max = arr[i][j];
            }
        }
    }
    return max;
}

int main() {
    // 定义二维数组
    int arr[3][4] = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}};

    // 获取数组的行和列
    int rows = sizeof(arr) / sizeof(arr[0]);
    int cols = sizeof(arr[0]) / sizeof(arr[0][0]);

    // 获取二维数组中元素的最大值
    int max = pMax(rows, cols, arr);

    // 打印最大值
    printf("max = %d\n", max);

    return 0;
}
```



# 第二章：函数的高级应用（⭐）

## 2.1 递归函数

### 2.1.1 概述

* `递归`在生活中的举例：

```txt
从前有座山,山上有座庙,庙里有个老和尚,老和尚在给小和尚讲故事,讲的啥?
     从前有座山,山上有座庙,庙里有个老和尚,老和尚在给小和尚讲故事,讲的啥?
         从前有座山,山上有座庙,庙里有个老和尚,老和尚在给小和尚讲故事,讲的啥?
             从前有座山,山上有座庙,庙里有个老和尚,老和尚在给小和尚讲故事,讲的啥?...
   ...
老和尚没了,庙塌了,小和尚还俗结婚了。
```

* `递归函数`调用：函数自己调用自己的现象就称为`递归`。

### 2.1.2 递归的分类和注意事项

* `递归`可以分为`直接递归`和`间接递归`：

  * 直接递归：函数自身调用自己，如下所示：

    ```c
    int func(int a){
        int b,c;
        ...
        int c = func(b);
        ...
    }
    ```

  * 间接递归：可以理解为 `A()` 函数调用 `B()` 函数，`B()` 函数调用 `C()` 函 数，`C()` 函数调用 `A()` 函数，如下所示：

    ```c
    void A(){
        B();
    }
    
    void B(){
        C();
    }
    
    void C(){
        A();
    }
    ```

> [!CAUTION]
>
> * ① 递归函数包含了一种`隐式`的循环。
> * ② 递归函数会`重复执行`某段代码，但这种重复执行无需循环控制。
> * ③ 递归一定要向`已知方向`递归，否则这种递归就变成了`无穷递归`，停不下来，类似于`死循环` ，最终导致 `栈内存溢出`。
> * ④ 递归函数的成功执行，需要满足以下两个条件：
>   * 必须有一个明显的结束条件。
>   * 必须有一个趋近于结束条件的趋势。

### 2.1.3 应用示例

* 需求：计算 1 - n 的和。



* 示例：不使用递归函数

```c
#include <stdio.h>

/**
 * 求 1 - n 的和
 * @param n
 * @return 和
 */
int sum(int n) {
    int total = 0;
    for (int i = 1; i <= n; ++i) {
        total += i;
    }
    return total;
}

int main() {

    int n = 5;

    printf("sum(%d) = %d\n", n, sum(n)); // sum(5) = 15

    return 0;
}
```



* 示例：使用递归函数

```c
#include <stdio.h>

/**
 * 求 1 - n 的和
 * @param n
 * @return 和
 */
int sum(int n) {
    // 当 n == 1 的时候，返回 1
    if (n == 1) {
        return 1;
    }
    // 递归情况：将 n 和 n - 1 的和相加
    return n + sum(n - 1);
}

int main() {

    int n = 5;

    printf("sum(%d) = %d\n", n, sum(n)); // sum(5) = 15

    return 0;
}
```

### 2.1.4 递归调用过程

* 以上面的递归函数为例，其在内存中是这样的，如下所示：

![](./assets/4.svg)

### 2.1.5 应用示例

* 需求：使用递归函数获取阶乘 `n!`  的结果。

> [!NOTE]
>
> * ① 当 n = 0 或 1 的时候，n! 的结果是 1 。
> * ② 当 n > 1 的时候，n! = n × (n-1)! 。



* 示例：

```c
#include <stdio.h>

/**
 * 递归函数，计算 n 的阶乘
 * @param n
 * @return 阶乘
 */
int factorial(int n) {
    // 当 n == 0 或 1 的时候，返回 1
    if (n == 0 || n == 1) {
        return 1;
    }
    // 递归调用
    // n * (n - 1) 的阶乘
    return n * factorial(n - 1);
}

int main() {

    int n = 5;

    printf("%d 的阶乘是 %d\n", n, factorial(n)); // 5 的阶乘是 120

    return 0;
}
```

### 2.1.6 应用示例

* 需求：计算斐波那契数列（Fibonacci）的第 n 个值。

> [!NOTE]
>
> * ① 斐波那契数列满足的规则是：`1,1,2,3,5,8,13,21,34,55,....`，即：前两个数都是 1 ，从第三个数开始，每个数等于前两个数之和。
> * ② 假设 f(n) 代表斐波那契数列的第 n 个值，那么 f(n) 满足： f(n) = f(n-2) + f(n-1); 其中，n >= 3。



* 示例：

```c
#include <stdio.h>

/**
 * 递归函数，计算第 n 个斐波那契数
 * @param n
 * @return 第 n 个斐波那契数
 */
int fib(int n) {
    if (n == 1 || n == 2) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

int main() {

    int n = 1;
    printf("第 %d 个斐波那契数是 %d\n", n, fib(n)); // 第 1 个斐波那契数是 1
    n = 2;
    printf("第 %d 个斐波那契数是 %d\n", n, fib(n)); // 第 2 个斐波那契数是 1
    n = 3;
    printf("第 %d 个斐波那契数是 %d\n", n, fib(n)); // 第 3 个斐波那契数是 2
    n = 4;
    printf("第 %d 个斐波那契数是 %d\n", n, fib(n)); // 第 4 个斐波那契数是 3
    n = 5;
    printf("第 %d 个斐波那契数是 %d\n", n, fib(n)); // 第 5 个斐波那契数是 5
    n = 6;
    printf("第 %d 个斐波那契数是 %d\n", n, fib(n)); // 第 6 个斐波那契数是 8

    return 0;
}
```

### 2.1.7 应用示例

* 需求：有 5 个学生坐在一起，问第 5 个学生多少岁，他说比第 4 个学生大 2 岁。问第 4 个学生岁数，他说比第 3 个学生大 2 岁。问第 3 个学生，又说比第 2 个学生大 2 岁。问第 2 个学生，说比第 1 个学生大 2 岁。最后问第 1 个学生，他说是 10 岁。请问第 5 个学生多大？

> [!NOTE]
>
> * ① 当 n = 1 的时候， age(n) = 10。
> * ② 当 n > 1 的时候，age(n) = age(n-1) + 2。



* 示例：

```c
#include <stdio.h>

/**
 * 定义递归函数，获取第 n 个学生的年龄
 * @param n
 * @return
 */
int age(int n) {
    if (n == 1) {
        return 10;
    } else {
        return age(n - 1) + 2;
    }
}

int main() {

    int n = 5;

    printf("第 %d 个学生的年龄是 %d\n", n, age(n)); // 第 5 个学生的年龄是 18

    return 0;
}

```

### 2.1.8 应用示例

* 需求：假如有 10 阶楼梯，小朋友每次只能向上走 1 阶或者 2 阶，请问对于 n 阶台阶 一共有多少种不同的走法呢？

> [!NOTE]
>
> * 阶数和走法的关系，如下所示：
>   * 阶数：1 2 3 4 。
>   * 走法：1 2 3 5。
>
> * 公式是：fun(n) = fun(n - 1) + fun(n - 2) 。



* 示例：

```c
#include <stdio.h>

/**
 * 定义递归函数，获取第 n 阶台阶的不同的走法
 * @param n
 * @return
 */
int moves(int n) {
    if (n == 1) {
        return 1;
    }

    if (n == 2) {
        return 2;
    }

    return moves(n - 1) + moves(n - 2);
}

int main() {

    int n = 4;

    // 第 4 阶台阶的走法有 5 种
    printf("第 %d 阶台阶的走法有 %d 种\n", n, moves(n)); 

    return 0;
}
```





### 2.1.9 递归函数的致命缺陷

#### 2.1.9.1 递归函数的空间开销

* 在程序占用的整个内存中，有一块内存区域叫做栈（Stack），它是专门用来给函数分配内存的，每次调用函数，都会将相关数据压入栈中，包括：局部变量、局部数组、形参、寄存器、冗余数据等。
* 栈是针对线程来说的，每个线程都拥有一个栈，如果一个程序包含了多个线程，那么它就拥有多个栈。

> [!NOTE]
>
> 目前我们编写的程序都是单线程的，所以不必考虑多线程的情况。

* 对每个线程来说，栈能使用的内存是有限的，一般是 1M~8M，这在编译时就已经决定了，程序运行期间不能再改变。如果程序使用的栈内存超出最大值，就会发生栈溢出（Stack Overflow）错误。

> [!NOTE]
>
> * ① 栈内存的大小和编译器有关，编译器会为栈内存指定一个最大值，在 Linux GCC 下，默认是 8M。
> * ② 我们也可以通过参数来修改栈内存的大小。

* 发生函数调用时会将相关数据压入栈中，函数调用结束会释放这一部分内存，对于一般的函数来说，这不会有任何问题，但是对于递归函数，这会导致严重的问题！！！

> [!NOTE]
>
> * ① 递归函数内部嵌套了对自身的调用，除非等到最内层的函数调用结束，否则外层的所有函数都不会调用结束。通俗地讲，外层函数被卡住了，它要等待所有的内层函数调用完成后，它自己才能调用完成。
> * ② 每一层的递归调用都会在栈上分配一块内存，有多少层递归调用就分配多少块相似的内存，所有内存加起来的总和是相当恐怖的，很容易超过栈内存的大小限制，这个时候就会导致程序崩溃。



* 示例：演示由于栈溢出而导致程序崩溃

```c
#include <stdio.h>

long sum(int n) {
    // 为了增加每次函数调用的内存，额外增加了一个无用的数组，它占用 1KB 的内存
    int arr[250];

    if (n <= 1) {
        return n;
    } else {
        return  n + sum(n-1);
    }
}

int main() {
    printf("从1加到1000的值为 %ld\n", sum(1000));
    return 0;
}
```

#### 2.1.9.2 递归函数的时间开销

* 每次调用函数都会在栈上分配内存，函数调用结束后再释放这一部分内存，内存的分配和释放都是需要时间的。
* 每次调用函数还会多次修改寄存器的值，函数调用结束后还需要找到上层函数的位置再继续执行，这也是需要时间的。



* 示例：

```c
#include <stdio.h>
#include <time.h>

// 递归计算斐波那契数
long fib(int n) {
    if (n <= 2) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

int main() {
    // 禁用 stdout 缓冲区
    setbuf(stdout, nullptr);

    int     a;
    clock_t time_start, time_end;

    printf("请输入正整数: ");
    scanf("%d", &a);
    time_start = clock();
    // Fib(50) = 12586269025
    printf("Fib(%d) = %ld\n", a, fib(a));
    time_end = clock();
    // 花费的时间: 45.122685s
    printf("花费的时间: %lfs\n", (double)(time_end - time_start) / CLOCKS_PER_SEC);

    return 0;
}
```

#### 2.1.9.3 使用迭代来代替递归函数

* ① 虽然使用递归函数大大简化了算法的编写，但是递归调用会占用大量的系统堆栈，内存耗用多，在递归调用层次多时速度要比循环慢的多，所以在使用递归时要慎重。
* ② 在要求高性能的情况下尽量避免使用递归，递归调用既花时间又耗内存。
* ③ 可以考虑使用循环迭代来代替递归调用（与递归函数相比，迭代不但没有额外的内存开销，也没有额外的时间开销）。

## 2.2 可变参数（了解）

* 有的时候，函数参数的数量是不确定的，就可以使用 C 语言提供的`可变参数函数`，即：在声明可变参数函数的时候，使用省略号 `...` 来表示可变数量的参数。
* 语法：

```c
返回值类型 函数名(int count,...)
```

> [!CAUTION]
>
> * ① 可变参数 `...` 要放在参数列表的结尾，否则将会报错！！！
> * ② 我们经常使用的 `printf` 函数就是一个可变参数函数，即：`extern int printf (const char *__restrict __format, ...);`
> * ③ 可变参数函数，在编写各种工具函数和格式化输出函数时非常有用。但要小心确保传递的参数数量和类型与函数的预期相匹配，以避免运行时错误。



* 示例：

```c
#include <stdarg.h>
#include <stdio.h>
/**
 * 获取平均值
 * @param count
 * @param ...
 * @return
 */
double avg(int count, ...) {
    // ① 声明一个 va_list 变量，该变量将保存遍历可变参数列表所需的信息。
    va_list args;
    // ② 初始化 va_list 变量，使其指向可变参数列表的第一个参数。
    va_start(args, count);
    // ③ 访问可变参数
    double sum = 0;
    for (int i = 0; i < count; i++) {
        /**
         * 1. 获取可变参数的类型和值
         * va_arg(args, int)：返回 args 中的下一个参数，该参数的类型为 int，
         * 并将 args 的位置指向参数列表中的下一个参数。
         * 2. 将获取到的参数值赋给 sum
         */
        sum += va_arg(args, int);
    }
    // ④ 清理 va_list 变量
    va_end(args);
    // 返回平均值
    return sum / count;
}

int main() {

    double avgValue = avg(5, 1, 2, 3, 4, 5);

    printf("avgValue = %.2f\n", avgValue);

    return 0;
}
```

## 2.3 指针函数（返回值是指针）

### 2.3.1 概述

* C 语言允许函数的返回值是一个指针（地址），这样的函数称为指针函数。
* 语法：

```c
返回值类型 * 函数名(形参列表){
    ... // 函数体
}
```

> [!CAUTION]
>
> 指针函数中的函数体 return  必须返回一个指针（地址）。

### 2.3.2 应用示例

* 需求：获取两个字符串中较长的字符串。



* 示例：

```c
#include <stdio.h>
#include <string.h>

/**
 * 获取两个字符串中较长者
 * @param str1
 * @param str2
 * @return
 */
char *maxLengthStr(char *str1, char *str2) {
    if (strlen(str1) >= strlen(str2)) {
        return str1;
    } else {
        return str2;
    }
}

int main() {

    char *str1 = "hello123";
    char *str2 = "world";

    // hello123 和 world 中较长的是：hello123
    printf("%s 和 %s 中较长的是：%s\n", str1, str2, maxLengthStr(str1, str2));

    return 0;
}
```

### 2.3.3 指针函数的注意事项

* 使用指针作为函数返回值的时候，需要注意的是：函数运行结束后会销毁在它内部定义的所有局部数据，包括：局部变量、局部数组和形式参数。

> [!CAUTION]
>
> * ① 函数返回的指针请尽量不要指向这些数据，C 语言没有任何机制来保证这些数据会一直有效，它们在后续使用过程中可能会引发运行时错误。
> * ② 函数运行结束后会销毁所有的局部数据，这个观点并没错，大部分 C 语言教材也都强调了这一点。但是，这里所谓的销毁并不是将局部数据所占用的内存全部抹掉，而是程序放弃对它的使用权限，弃之不理，后面的代码可以随意使用这块内存。



* 示例：错误演示

```c
#include <stdio.h>

int *func(){
    int n = 100;
    return &n;
}

int main(){
    int *p = func(), n;
    n = *p;
    printf("value = %d\n", n);
    return 0;
}
```

## 2.4 函数指针（指向函数的指针）

### 2.4.1 概述

* 一个函数总是占用一段连续的内存区域，函数名在表达式中有时也会被转换为该函数所在内存区域的首地址，这和数组名非常类似。
* 我们可以把函数的这个首地址（或称入口地址）赋予一个指针变量，使指针变量指向函数所在的内存区域，然后通过指针变量就可以找到并调用该函数，这种指针就是函数指针。
* 函数指针声明语法：

```c
返回值类型 (*指针变量名)(参数列表);
```

> [!CAUTION]
>
> - ① 简单来说，函数指针，就是指向函数的指针。
> - ② 参数列表中可以同时给出参数的类型和名称，也可以只给出参数的类型，省略参数的名称。
> - ③ 不可以省略 `()` ，如果写成 `返回值类型 *指针变量名(参数列表);`，就变为了函数原型，而不再是函数指针。

* 函数指针调用语法：

```c
(*指针变量)(实参列表);
```

> [!CAUTION]
>
> - ① C 语言规定，`函数名`本身就是指向函数的指针，通过`函数名`可以获取函数地址。
> - ② 对指向函数的指针变量不能进行算术运算，如：p+n，p++，p-- 等运算是无意义的。
> - ③ 用函数名调用函数，只能调用所指定的一个函数，而通过指针变量调用函数比较灵活，可以根据不同情况先后调用不同的函数。

### 2.4.2 应用示例

* 需求：使用函数指针调用方式来调用函数。



* 示例：

```c
#include <stdio.h>

void print(int n) {
    printf("%d\n", n);
}

int main() {

    // 声明函数指针（变量）
    void (*p)(int);
    // 将函数赋值给函数指针
    p = &print;

    int num = 10;

    // 普通函数调用方式来调用函数
    print(num);

    // 函数指针调用方式来调用函数
    (*p)(num);

    return 0;
}
```

### 2.4.3 应用示例

* 需求：使用函数指针调用方式来调用函数。



* 示例：

```c
#include <stdio.h>

int max(int a, int b) {
    return a > b ? a : b;
}

int main() {

    // 声明函数指针（变量）并赋值
    int (*p)(int, int) = max;

    int a = 10;
    int b = 20;

    // 普通函数调用方式来调用函数
    int maxValue = max(a, b);
    printf("%d 和 %d 中的最大值是 %d\n", a, b, maxValue);

    // 函数指针调用方式来调用函数
    maxValue = (*p)(a, b);
    printf("%d 和 %d 中的最大值是 %d\n", a, b, maxValue);

    return 0;
}
```

## 2.5 回调函数

### 2.5.1 概述

* 所谓的`回调函数`就是将函数作为参数传递给另一个函数的方式，以便该函数在某个事件发生后调用这个函数。

### 2.5.2 JavaScript 语言中的回调函数

* 在 JavaScript 中函数是一等公民（头等公民），这意味着函数可以像变量一样传递。

> [!NOTE]
>
> JavaScript 中的函数广泛应用于异步编程（如：处理用户事件、网络请求等），是因为 JavaScript 是单线程的，异步操作不会阻塞主线程运行，而是通过回调函数在异步任务完成后执行。



* 示例：

```c {20}
/**
* @param name
* @param callback 接受一个回调函数作为参数
*/
function greet(name, callback) {
  console.log('Hello, ' + name);
  callback();
}

/**
* 回调函数
*/
function done() {
  console.log('Callback function executed.');
}

/**
* done 是一个回调函数
*/
greet('John', done);
```

### 2.5.3 C 语言中的回调函数

* C 语言本身没有异步编程的直接支持，回调函数一般用于同步操作中，回调函数往往是立即调用的。异步操作通常通过多线程或事件驱动编程模型实现，回调函数可以通过这种方式延迟执行，如：在操作系统中，回调函数用于处理硬件中断、信号等。





## 2.6 函数说明符

### 2.6.1 内部函数（静态函数）





### 2.6.2 外部函数









# 第三章：再谈变量（⭐）