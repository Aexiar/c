# 第一章：开发环境的安装和配置（⭐）

## 1.1 环境的安装和配置

### 1.1.1 概述

* 要开发 C/C++ 程序，需要安装 C/C++ 编译器，目前有两种主流实现，即：
  * GCC（GNU Compiler Collection）：全平台实现，即支持 Windows、MacOS、Linux 等。
  * MSVC（Microsoft Visual C++）：只支持 Windows 系统。
* GCC 在 Windows 上的版本有很多，如：[MinGW-w64](https://www.mingw-w64.org/)、[Gygwin](https://cygwin.com/)、[MSYS2](https://www.msys2.org/)。它们之间的区别，如下所示：

| 特性         | MinGW-w64                     | Cygwin                                | MSYS2                                                 |
| ------------ | ----------------------------- | ------------------------------------- | ----------------------------------------------------- |
| **简介**     | Minimalist GNU for Windows    | POSIX 兼容环境和工具集                | 结合了 MinGW 和 Cygwin 的工具集                       |
| **编译器**   | 提供 GCC 编译器               | 提供 POSIX 兼容环境，包含大量工具     | 提供 MinGW-w64 工具链和 Cygwin 环境                   |
| **生成文件** | Windows 原生可执行文件        | POSIX 兼容的可执行文件                | 可以生成 Windows 原生可执行文件或 POSIX 文件          |
| **依赖**     | 无需额外依赖                  | 依赖 Cygwin DLL                       | 根据使用工具链决定（MinGW-w64 无依赖，Cygwin 有依赖） |
| **工具和库** | 基本的编译工具                | 丰富的 Unix 工具和库                  | 丰富的工具和库，强大的包管理系统                      |
| **性能**     | 性能较好                      | 可能较低，因为通过兼容层调用系统      | 取决于使用的工具链（MinGW-w64 性能较好）              |
| **复杂度**   | 简单易用                      | 设置和使用相对复杂                    | 较为灵活，复杂度介于 MinGW-w64 和 Cygwin 之间         |
| **适用场景** | 开发 Windows 原生应用         | 运行和开发 Unix 程序                  | 混合使用 Unix 工具和开发 Windows 原生应用             |
| **优点**     | 轻量级，直接生成 Windows 应用 | 完整的 POSIX 兼容环境，丰富的工具     | 灵活的环境，强大的包管理系统                          |
| **缺点**     | 工具和库较少                  | 生成文件依赖 Cygwin DLL，性能可能较低 | 环境较大，占用更多空间，复杂性比 MinGW-w64 高         |

> [!NOTE]
>
> * ① MinGW-w64 、Cygwin 以及 MSYS2 任选其一安装即可。
> * ② 目前的 Win10 和 Win11 版本支持 WSL2 （Windows Sub Linux 2 ，即 Windows 的子系统 Linux），可以实现在 Windows 系统上安装一个 Linux ，然后再运行 Linux 中的 GCC 工具链。

### 1.1.2 MinGW-w64 的安装和配置

#### 1.1.2.1 安装

* 下载到本地：略。

> [!NOTE]
>
> 下载地址在[这里](https://github.com/niXman/mingw-builds-binaries/releases/download/13.2.0-rt_v11-rev1/x86_64-13.2.0-release-posix-seh-ucrt-rt_v11-rev1.7z)。

![](./assets/1.png)

* 解压到指定的目录，即：

![](./assets/2.png)

> [!NOTE]
>
> 本人的解压目录是：`D:\develop\mingw64` 。

#### 1.1.2.2 配置 path 环境变量 

* 配置环境变量，以便任意目录都可以执行 gcc 命令，即：

![](./assets/3.png)

![](./assets/4.png)

![](./assets/5.png)

![](./assets/6.png)

![](./assets/7.png)

> [!NOTE]
>
> 因为，本人安装 MinGW-w64 的目录是 `D:\develop\mingw64`，所以配置 path 环境变量就需要 `D:\develop\mingw64\bin`。

![](./assets/8.png)

* 测试是否安装成功：

```shell
gcc --version
```

![](./assets/9.gif)

### 1.1.3 Cygwin 的安装和配置

#### 1.1.3.1 安装

* 下载到本地：略。

> [!NOTE]
>
> 下载地址在[这里](https://www.cygwin.com/install.html)。

![](./assets/10.png)

* 点击安装：

![](./assets/11.png)

![](./assets/12.png)

![](./assets/13.png)

![](./assets/14.png)

![](./assets/15.png)

![](./assets/16.png)

![](./assets/17.png)

![](./assets/18.png)

> [!NOTE]
>
> 默认是最小化安装，没有 GCC，需要选择 gcc-core、gcc-g++、make、gdb、binutils 。

![](./assets/19.png)

![](./assets/20.png)

![](./assets/21.png)

![](./assets/22.png)

![](./assets/23.png)

![](./assets/24.png)

![](./assets/25.png)

![](./assets/26.png)

![](./assets/27.png)

#### 1.1.3.2 配置 path 环境变量 

* 和 `3.1.2.2 配置 path 环境变量` 步骤相同：略。

### 1.1.4 MSYS2（推荐）

#### 1.1.4.1 安装

* 下载到本地：略。

> [!NOTE]
>
> 下载地址在[这里](https://www.msys2.org/)。

![](./assets/28.png)

* 点击安装：

![](./assets/29.png)

![](./assets/30.png)

![](./assets/31.png)

![](./assets/32.png)

![](./assets/33.png)

* 出现命令终端：

![](./assets/34.png)

* 替换清华镜像源（可选）：

```shell
sed -i "s#https\?://mirror.msys2.org/#https://mirrors.tuna.tsinghua.edu.cn/msys2/#g" /etc/pacman.d/mirrorlist*
```

![](./assets/35.gif)

* 安装 gcc 等相关开发包：

```shell
pacman -Syu --noconfirm # 更新包管理器
```

```shell
pacman -Sy base-devel --noconfirm # 安装开发工具包
```

```shell
pacman -Sy mingw-w64-x86_64-toolchain --noconfirm # 安装开发 gcc 相关工具链
```

![](./assets/36.gif)

#### 1.1.4.2 配置 path 环境变量 

* 和 `3.1.2.2 配置 path 环境变量` 步骤相同：略。

## 1.2 IDE 的安装和配置

### 1.2.1 CLion 

#### 1.2.1.1 概述

* [CLion](https://www.jetbrains.com/clion/) 是一款由 JetBrains 推出的跨平台 C/C++ 集成开发环境（IDE），它具有智能编辑器、CMake 构建支持、调试器、单元测试、代码分析等功能，可以极大提高 C/C++ 开发效率。

#### 1.2.1.2 安装

* 鼠标双击，进入安装：

![](./assets/37.png)

* 下一步：

![](./assets/38.png)

* 下一步：

![](./assets/39.png)

* 下一步：

![](./assets/40.png)

* 安装：

![](./assets/41.png)

* 安装完成：

![](./assets/42.png)

#### 1.2.1.3 配置

* 打开 CLion ：

![](./assets/43.png)

* 安装中文插件（可选）：

![](./assets/44.png)

![](./assets/45.png)

* 配置新 UI ：

![](./assets/46.png)

![](./assets/47.png)

* 新 UI 配置自定义字体（可选）：

![](./assets/48.png)

* 配置`自动保存`功能：

![](./assets/49.png)

* 配置`文件编码` 为 UTF-8：

![](./assets/50.png)

* 配置`控制台编码`为 UTF-8：

![](./assets/51.png)

* 配置`显示方法分隔符`功能：

![](./assets/52.png)

* 配置`编辑器`的字体（可选）：

![](./assets/53.png)

* 检测 GCC 工具链是否安装成功：

![](./assets/54.png)

### 1.2.2 VS Code

#### 1.2.2.1 概述

* [Visual Studio Code (VS Code)](https://code.visualstudio.com/) 是一个免费的开源代码编辑器，适用于 Windows、MacOS 和 Linux 平台。它支持语法高亮、智能代码补全（IntelliSense）、内置调试工具和Git集成。用户可以通过扩展来添加更多功能，如：支持新的编程语言、主题和调试工具。VS Code 还支持在微软 Azure 上进行部署和托管，适用于各种编程语言和框架。

> [!NOTE]
>
> Visual Studio Code 需要安装对应的插件，才能运行 C/C++ 代码。

#### 1.2.2.2 安装

* 鼠标双击，进入安装：

![](./assets/55.png)

* 同意协议：

![](./assets/56.png)

* 下一步：

![](./assets/57.png)

* 下一步：

![](./assets/58.png)

* 下一步：

![](./assets/59.png)

* 安装：

![](./assets/60.png)

* 安装过程：

![](./assets/61.png)

* 安装完成：

![](./assets/62.png)

#### 1.2.2.3 配置

* 安装`中文`插件：

![](./assets/63.png)

![](./assets/64.png)

* 安装 `C/C++` 插件：

![](./assets/65.png)

![](./assets/66.png)

### 1.2.3 Microsoft Visual Studio

#### 1.2.3.1 概述

* [Visual Studio](https://visualstudio.microsoft.com/)（简称 VS）是由微软公司发布的集成开发环境。它包括了整个软件生命周期中所需要的大部分工具，如：UML工具、代码管控工具、集成开发环境（IDE）等。

* Visual Studio 支持 C/C++、C#、F#、VB 等多种程序语言的开发和测试，可以用于生成Web应用程序，也可以生成桌面应用程序，功能十分强大，但下载和安装很可能耗时数小时，还可能会塞满磁盘。

* Visual Studio 2022 有三种版本：社区版(免费，不支持企业使用)，专业版(第一年 1199 美元/ 799 美元续订)和企业版(第一年 5999 美元/ 2569 美元续订)。企业版拥有面向架构师的功能、高级调试和测试，这些功能是另两种 SKU 所没有的。

* Visual Studio 旨在成为世界上最好的 IDE（集成开发环境），目前最新版本为 Visual Studio 2022。

#### 1.2.3.2 安装

* 鼠标双击，进入安装：

![](./assets/67.png)

* 继续：

![](./assets/68.png)

* 等待：

![](./assets/69.png)

* 工作负荷（使用 C++ 的桌面开发）：

![](./assets/70.png)

* 单个组件：

![](./assets/71.png)

* 语言包：

![](./assets/72.png)

* 安装位置（修改默认的安装位置）：

![](./assets/73.png)

* 如果不是第一次安装，可能会出现`共享组件、工具和 SDK`不可以修改，即：

![](./assets/74.png)

* 此时，就需要打开`注册表编辑器`，将如下图中的除了第一个选项，全部删除，然后关闭再重新安装，即：

![](./assets/75.png)

* 开始安装：

![](./assets/76.png)

* 安装中：

![](./assets/77.png)

* 安装完成，然后关闭：

![](./assets/78.png)

#### 1.2.3.3 配置

* 在开始菜单处，启动 VS ：

![](./assets/79.png)

* 登录或跳过该选项（有微软账号就注册，没有就暂时跳过）：

![](./assets/80.png)

* 继续：

![](./assets/81.png)

* 注册 VS ：

![](./assets/82.png)

* 填写注册码：

> [!NOTE]
>
> * ① Pro 版本：`TD244-P4NB7-YQ6XK-Y8MMM-YWV2J`
> * ② Enterprise 版本：`VHF9H-NXBBB-638P6-6JHCY-88JWH`

![](./assets/83.png)

![](./assets/84.png)



# 第二章：C 语言入门（HelloWorld，⭐）

## 2.1 手动版

* ① 新建一个 `HelloWorld.c` 的文件：

![](./assets/85.png)

* ② 通过`记事本`等软件打开该文件，输入如下的代码，并保存：

```c
#include <stdio.h>

int main(){
    printf("Hello World");
    return 0;
}
```

![](./assets/86.gif)

* ③ 通过 `gcc` 命令编译该文件：

```shell
gcc HelloWorld.c -o HelloWorld.exe
```

![](./assets/87.gif)

* ④ 执行：

```shell
./HelloWorld.exe
```

![](./assets/88.gif)

## 2.2 VS Code 版

* ① 新建一个`空`文件夹（目录），用于存放代码：

![](./assets/89.png)

* ② 通过 `vscode` 打开该目录：

![](./assets/90.gif)

* ③ 在 `vscode` 中新建 `HelloWorld.c` 文件：

![](./assets/91.gif)

* ④ 设置 VSCode 中 C/C++ 的代码格式为行尾风格（可选）：

![](./assets/92.png)

![](./assets/93.png)

* ⑤ 编写如下的代码，并保存：

```c
#include <stdio.h>

int main(){
    printf("Hello World");
    return 0;
}
```

![](./assets/94.gif)

* ⑥ 通过 `gcc` 命令编译该文件：

```shell
gcc HelloWorld.c -o HelloWorld.exe
```

![](./assets/95.gif)

* ⑦ 执行：

```shell
./HelloWorld.exe
```

![](./assets/96.gif)

* ⑧ 安装 Code Runner 插件（步骤略），实现右键直接编译执行（可选）：

![](./assets/97.gif)

## 2.3 VS 版

* ① 新建空项目：

![](./assets/98.png)

![](./assets/99.png)

![](./assets/100.png)

![](./assets/101.png)

* ② 打开`解决方案资源管理器`：

![](./assets/102.png)

![](./assets/103.png)

* ③ 新建 `HelloWorld.c` 文件：

![](./assets/104.gif)

* ④ 编写如下代码，并保存：

```c
#include <stdio.h>

int main(){
    printf("Hello World");
    return 0;
}
```

![](./assets/105.gif)

* ⑤ 编译和执行：

![](./assets/106.gif)

## 2.4 CLion 版

* ① 新建空项目：

![](./assets/107.png)

![](./assets/108.png)

![](./assets/109.png)

* ② 编写如下代码，并保存：

```c
#include <stdio.h>

int main(){
    printf("Hello World");
    return 0;
}
```

![](./assets/110.gif)

* ③ 编译和运行：

![](./assets/111.gif)

* ④ 默认情况下，一个项目只能有一个 c 源文件包含 main 函数，但是 CLion 可以有多个，如下：

![](./assets/112.gif)

* ⑤ 如果之后，有中文乱码问题，那么请做如下步骤：

![](./assets/113.png)

![](./assets/114.gif)

> [!NOTE]
>
> 内容如下所示：
>
> ```txt
> -Dfile.encoding=UTF-8
> -Dconsole.encoding=UTF-8
> ```





# 第三章：五花八门的 C 语言编译器（⭐）

## 3.1 概述

* 由于 C 语言的历史比较久，而且早期没有规范，整个计算机产业也都处于拓荒的年代，所以就涌现了很多款 C 语言编译器，它们各有特点，适用于不同的平台。

## 3.2 桌面操作系统

* 目前而言，主流的桌面操作系统就是 Windows、Linux 和 MacOS 。
* 对于 Windows 而言，使用的最多的 C/C++ 编译器是 `MSVC` （Microsoft Visual C++），被集成在 Visual Studio 开发环境中，其特点如下：
  * ① **兼容性**: 与 Windows 操作系统和 Windows API 深度集成，生成的二进制文件为 PE 格式。
  * ② **调试工具**: 提供强大的调试工具，如：Visual Studio Debugger。
  * ③ **优化**: 支持各种编译器优化，特别是针对 Windows 平台的优化。
  * ④ **库支持**: 提供丰富的 Windows 专用库，如：~~MFC（Microsoft Foundation Class Library）~~。

> [!NOTE]
>
> MSVC 不开源，我们可以使用  Visual Studio Community 社区版，但是如果想使用 Visual Studio Community 社区版生成出来的应用进行商用，就需要好好阅读微软的许可证和说明书了。

* 对于 Linux 而言，使用的最多的 C/C++ 编译器是 `GCC`（支持多种架构和语言），并且很多 Linux 发行版本都将 GCC 作为默认的编译器，其特点如下所示：
  * ① **广泛支持**: 支持各种 Linux 发行版，是大多数开源项目的默认编译器。
  * ② **强大的优化**: 提供各种编译优化选项，适合多种性能需求的开发。
  * ③ **丰富的工具链**: 和 GDB（GNU 调试器）、Make、Autoconf 等工具无缝集成。

> [!NOTE]
>
> 目前而言，GCC 已经属于跨平台的项目了，支持 Windows、Linux 和 MacOS ，在 Windows 上 GCC 的移植项目，如：MinGW、Cygwin 以及 MSYS2，其差别如下所示：
>
> * ① MinGW 提供了 GCC 编译器的 Windows 版本，可以生成 Windows 兼容的本地代码。
> * ② Cygwin 是一个在 Windows 上运行的类 Unix 环境，它提供了一套完整的 POSIX 兼容工具，包括 GCC 编译器。
> * ③ MSYS2 是一个在 Windows 上运行的轻量级、开源的 Unix-like 环境，它为 Windows 用户提供了类似于 Linux 的开发环境。MSYS2 是 MinGW 和 Cygwin 的后继者，旨在提供更现代化和更强大的开发工具集。



* 对于 MacOS 而言，使用的最多的 C/C++ 编译器是 `Clang/LLVM`，其特点如下：
  * ① **Xcode 集成**: 深度集成到 Xcode 中，支持 Apple 的所有平台（macOS、iOS、tvOS、watchOS）的开发。
  * ② **优化和兼容**: 生成的代码针对 Apple 的硬件进行优化，并兼容 GCC 的大部分功能。
  * ③ **现代化**: Clang 提供了对 C 语言标准的全面支持，并且以其快速的编译速度和易读的错误报告而著称。

> [!NOTE]
>
> 在 MacOS 中，尽管 Clang 是默认编译器；但是，也可以 Homebrew 等包管理器来安装 GCC ，以便开发 C/C++ 项目。

## 3.3 嵌入式系统

* 在嵌入式系统开发中，可用的 C 语言编译器以及工具链非常丰富， 有很多是免费或开源的，如下所示：

  *  `GCC (GNU Compiler Collection)`：
     *  简介：GCC 是最广泛使用的开源编译器集合之一，支持多种处理器架构，包括 ARM、AVR、MIPS、RISC-V 等。
     *  开源或免费：完全开源且免费，受到广泛的社区支持。
  *  `Clang/LLVM`：
     *  简介：Clang 是基于 LLVM 架构的开源编译器，支持多种架构，并且与 GCC 兼容。
     *  开源或免费：开源且免费，具有快速的编译速度和现代化的代码分析工具。
  *  `SDCC (Small Device C Compiler)`：
     *  简介: SDCC 是一个开源的跨平台 C 编译器，主要用于 8 位和 16 位微控制器，如：8051、Z80、PIC 等。
     *  开源或免费：完全开源且免费，适合教育和小型项目开发。
  *  `MPLAB XC Compilers`：
     *  简介：MPLAB XC 是由 Microchip 提供的编译器系列，专门用于其 PIC 和 dsPIC 微控制器。
     *  开源或免费：提供免费版本（使用标准优化级别），但也有付费版本提供更高级的优化。
  *  `ARM GCC`：
     *  简介：ARM GCC 是 GCC 的一个专门版本，针对 ARM Cortex-M 系列微控制器进行了优化。
     *  开源或免费：完全开源且免费，广泛用于工业、教育和开源项目中。
  *  `PlatformIO` ：
     *  简介：PlatformIO 是一个开源的嵌入式开发生态系统，支持多种开发板、框架和编译器。
     *  开源或免费：基本功能免费，部分高级功能和插件需要订阅服务。
  *  `Eclipse` ：
     *  简介：Eclipse 是一个开源的集成开发环境（IDE），可以通过插件支持嵌入式开发。
     *  开源或免费：Eclipse 和 GCC 都是开源免费的，适合跨平台开发。
  *  `Arduino IDE`：
     *  简介：Arduino IDE 是一个简单易用的开源开发环境，广泛用于 Arduino 开发板和其他兼容开发板。
     *  开源或免费：完全开源且免费，非常适合教育和入门级开发。
  *  ...
* 这些编译器以及工具链各有优势，开发者应根据目标硬件平台、项目需求和开发环境选择最适合的编译器。

## 3.4 C 语言为什么有那么多的编译器？

* C 语言并没有一个官方机构，也不属于哪个公司，它只有一个制定标准的委员会，任何其他组织或者个人都可以开发 C 语言的编译器，而这个编译器要遵守哪个 C 语言标准，是 100% 遵守还是部分遵守，并没有强制性的措施，也没有任何约束。

> [!NOTE]
>
> 各个厂商可以为了自己的利益、根据自己的喜好来开发编译器。

* 这就导致了一个棘手的问题，有的编译器遵守较新的 C 语言标准，有的编译器只能遵守较老的 C 语言标准，有的编译器还进行了很多扩展。比如：
  * GCC、LLVM/Clang 更新非常及时，能够支持最新的 C 语言标准。
  * MSVC 更新比较缓慢，迟迟不能支持新标准，例如：VC6.0、VS2010 都在使用 C89 标准，VS2015 部分支持 C99 标准。

> [!NOTE]
>
> 微软官方给出的答复：最新的标准已经在 C++ 中支持了，C 语言就没必要再重复了。

* 初学者经常会遇到这种情况，有些代码在 MSVC 下能够正常运行，拿到 GCC 下就不行了，一堆报错信息； 或者反过来，在 GCC 上能运行的代码在 MSVC 下不能运行。这是因为不同的编译器支持的标准不同，每个编译器都进行了自己的扩展，假如你使用了 MSVC 自己的扩展函数，那么拿到 GCC 下肯定是不支持的。

> [!IMPORTANT]
>
> 在学习的时候，无所谓使用那个 C 语言编译器了；但是，如果要开发实际项目（开源或商业），最好使用 GCC 编译器，因为其功能最强大、开源、跨平台、免费，支持最新的 C 语言标准。



# 第四章：注释（⭐）

## 4.1 概述

* 编程语言中，`注释`是一种`特殊`的文本，它不会被编译器执行，而仅用于代码的解释和文档说明。

>[!NOTE]
>
>* ① 注释是一个程序员必须有具有的良好编程习惯。
>* ② 在实际开发中，程序员可以将自己的思路通过`注释`整理出来，然后再用`代码`去实现。

## 4.2 单行注释

* C 语言中的单行注释的格式，如下所示：

```c
// 单行注释
```

> [!NOTE]
>
> 在 CLion 中的快捷键是 `Ctrl + /` 。



* 示例：

```c
#include <stdio.h> // 这是编译预处理指令

int main() { // 定义主函数

    printf("你好，世界！！！"); // 输出所指定的一行信息

    return 0;  // 函数执行完毕时返回函数值0
}
```

## 4.3 多行注释

* C 语言中的多行注释的格式，如下所示：

```c
/*
  这是第一行注释
  这是第二行注释
  这是第三行注释
*/
```

>[!NOTE]
>
>* ① 多行注释不能嵌套使用！！！
>* ② 在 CLion 中的快捷键是 `Ctrl + Alt + /` 。 



* 示例：

```c
#include <stdio.h> 

int main() { 
	
    /*
       printf(1);
       printf(2);
    */
    printf("你好，世界！！！"); 

    return 0;  
}
```



# 第五章：HelloWorld 的规范（⭐）

## 5.1 规范的代码风格

### 5.1.1 正确的缩进和空白

* ① 使用一次 `tab` 操作，实现缩进，默认整体向右边移动；如果使用 `shift + tab` 则整体向左移动。
* ② 运算符两边习惯各加一个空格，如：`2 + 4 = 6`。

> [!NOTE]
>
> 各种 IDE 都有格式化的快捷键，如：CLion 的格式化快捷键是 `Ctrl + Alt + L` 。



* 示例：

```c
#include <stdio.h>

int main() {

    int a = 1;
    int b = 2;
    int c = a + b;

    printf("c = %d", c);

    return 0;
}
```

### 5.1.2 代码风格

* 在 C 语言中，有两种代码风格：`行尾风格`和`次行风格`。

>[!NOTE]
>
>看个人爱好，任选一种即可，本人喜欢`行尾分格`！！！



* 示例：行尾风格

```c
int main(){                                      
    if(a > b) {
		return a;
	} else {
		return b;
	}  
  	return 0;                   
}  
```



* 示例：次行风格

```c
int main()
{                                      
    if(a > b) 
	{
		return a;
	} 
	else 
	{
		return b;
	}  
  	return 0;                   
} 
```

## 5.2 代码细节剖析

### 5.2.1 main() 函数

* 在 C 语言中，一个程序或工程可以定义很多函数，但是有且只有一个 main() 函数，作为程序执行的入口，并且在 main() 函数结尾结束整个程序的运行，即：

```c
int main(){
    return 0;
}
```

* 如果 main() 函数是空括号，即表示 main() 函数不接收任何参数。
* 在 main() 函数之前的 `int` 称为关键字，代表数据类型是`整型`，它是 main() 函数的返回值的类型，即在执行 main() 函数之后一定会得到一个整数类型的值，即函数值。

> [!NOTE]
>
> * ① 在 C 语言中，人们约定，如果 `return 0`，就表示 main() 函数终止运行，且运行成功；如果返回其它非零整数，则表示运行失败。
> * ② 默认情况下，如果 main() 函数中省略 `return 0` ，则编译器会自动加上；但是，为了保持统一的代码风格，不建议省略。

### 5.2.2 函数体

* ① 一对花括号 `{}` 定义了函数的主体，所有函数都必须以大括号开头和结尾，成对出现。
* ② C 程序中的函数体指的是作为该函数一部分的语句。它可以是任何操作，比如：搜索、排序、打印等。
* ③ 每一个执行语句后面都会有一个英文分号`;`作为语句结束的标志。
* ④ 一行内可写几条语句，一条语句也可写在几行上。

### 5.2.3 printf() 函数

* printf() 函数的格式，如下所示：

```c
printf (const char *__format, ...)
```

* printf() 函数是产生格式化输出的函数，作用是将参数文本输出到屏幕，f 表示 format（格式化），表示可以指定输出文本的格式，即：

```c
printf ("Hello World"); // 将字符串输出到控制台，行尾不换行
```

* 如果想让光标移动到下一行的开头，可以在输出文本的结尾，可以添加一个换行符 `\n`，即：

```c
printf("Hello World\n");
```

### 5.2.4 标准库和头文件

#### 5.2.4.1 概述

* printf() 函数是在标准库的头文件 `stdio.h` 中定义的，要想在程序中使用这个函数，必须在源文件的头部引入该头文件，即：

```c
#include <stdio.h>
```

#### 5.2.4.2 标准库（Standard Library）

* C 语言的`标准库`是由一组函数组成，这些函数提供了许多常用的操作和功能，如：输入输出、字符串处理、内存管理、数学计算等。标准库中的函数由编译器提供，遵循 ANSI C 标准（如：C89/C90、C99、C11等）。
* 换言之，C 语言的`标准库`就是包含函数的实际代码，这些代码在编译的时候被链接到我们的程序中，无需手动包含。C 语言的`标准库`提供了可重用的函数实现，使得程序员不必编写常用的功能。

> [!NOTE]
>
> 实际的 printf() 函数的实现代码通常位于标准库的实现文件中，如：在 Linux 中的标准库`libc.so.6` 就包含了 printf() 函数的实现。

#### 5.2.4.3 头文件（Header Files）

* `头文件`是包含函数声明、宏定义、数据类型定义等内容的文件。头文件的作用是为源代码提供必要的声明和定义，以便编译器能够正确解析和链接函数调用。头文件通常以`.h`作为文件扩展名。
* 换言之，头文件包含函数声明、宏定义和数据类型定义，但不包含函数的实现。头文件告知编译器如何使用标准库中的函数和定义，确保编译时的正确性。头文件需要在源代码文件中使用`#include`指令显式包含，如：`#include <stdio.h>`。

* 常见的 C 语言头文件及其功能和常用函数、宏等，如下所示：

| 头文件        | 功能说明                                                   | 常用函数和宏                                                 |
| ------------- | ---------------------------------------------------------- | ------------------------------------------------------------ |
| **stdio.h**   | 标准输入输出库                                             | `printf`， `scanf`， `fprintf`，`fscanf`，`fopen`， `fclose`，`fgets`， `fputs` |
| **stdlib.h**  | 标准库，提供内存分配、程序控制、类型转换、随机数生成等功能 | `malloc`， `free`， `exit`， `atoi`， `atof`，`rand`，`srand` |
| **string.h**  | 字符串处理库                                               | `strlen`， `strcpy`， `strncpy`， `strcat`， `strcmp`，`strstr`， `memset`， `memcpy` |
| **math.h**    | 数学库                                                     | `sin`， `cos`， `tan`， `exp`， `log`， `sqrt`， `pow`       |
| **time.h**    | 时间和日期库                                               | `time`， `clock`， `difftime`， `mktime`， `strftime`， `localtime`，`gmtime` |
| **ctype.h**   | 字符处理库                                                 | `isalnum`， `isalpha`， `isdigit`， `islower`， `isupper`， `tolower`， `toupper` |
| **stdbool.h** | 布尔类型库                                                 | `bool`， `true`， `false`                                    |
| **assert.h**  | 断言库                                                     | `assert`                                                     |

#### 5.2.4.4 预处理命令

* `#include` 命令的作用是将指定文件的内容插入到包含该命令的源文件中。这通常用于包含头文件，以便使用头文件中声明的函数、宏和数据类型。
* 语法：

```c
// 用于包含标准库头文件或系统头文件。
// 编译器将在系统的标准头文件目录中查找文件。
#include <filename> 
```

```c
// 用于包含用户自定义的头文件。
// 编译器首先在当前目录中查找文件，如果未找到，再在标准头文件目录中查找。
#include "filename"
```



# 第六章：CLion 高级配置（⭐）

## 6.1 安装和配置 WSL2

### 6.1.1 概述

* WSL 2，全称为 Windows Subsystem for Linux 2，是微软提供的一种技术，允许用户在 Windows 操作系统上运行 Linux 内核。WSL 2  是 WSL 的升级版，它引入了一个真正的 Linux 内核来代替 WSL 1 中使用的兼容层，从而提供更高的性能和更广泛的系统调用支持。
* 其架构图，如下所示：

![](./assets/115.png)

* WSL2 的功能，如下所示：
  * ① **真实的Linux内核**：WSL 2 使用了微软开发的轻量级虚拟机，它包含了一个完整的 Linux 内核。这意味着 WSL 2 能够运行更多的 Linux 应用程序，并且支持更多的系统调用。
  * ② **文件系统性能提升**：WSL 2 的文件系统性能比 WSL 1 有显著提升。对于 I/O 密集型的操作，如：编译代码或数据库操作，WSL 2 能够提供更快的速度。
  * ③ **兼容性增强**：由于使用了真实的 Linux 内核，WSL 2 对 Linux 应用程序的兼容性大幅提高。许多在 WSL 1上不能运行或需要调整的应用程序，可以在 WSL 2上直接运行。
  * ④ **网络功能改进**：WSL 2 提供了更好的网络集成，能够更容易地与 Windows 上的其他网络资源进行交互。
  * ⑤ **资源使用优化**：WSL 2 使用轻量级虚拟机，比传统的虚拟机占用更少的资源，同时提供了类似的隔离和安全性。

* WSL 的用途，如下所示：
  * ① **开发环境**：WSL 2 为开发者提供了一个原生的Linux开发环境，而无需离开 Windows 。这对于需要在 Linux 上开发、测试或运行应用程序的开发者非常有帮助。
  * ② **学习和实验**：用户可以使用 WSL 2 在Windows上学习和实验 Linux 命令行工具和应用程序，而无需设置双重引导系统或安装虚拟机。
  * ③ **多平台开发**：对于跨平台开发者来说，WSL 2 允许他们在一个操作系统上同时进行 Windows 和 Linux 平台的开发和测试，提高工作效率。
  * ④ **运行 Linux 工具和应用程序**：WSL 2 支持在 Windows 上直接运行各种 Linux 工具和应用程序，如：Docker、数据库、编程语言环境等。

### 6.1.2 WSL2 的安装

* ① BIOS 或 UEFI 中，开启虚拟化：步骤略。

![](./assets/116.png)

* ② 查看是否开启了虚拟化：

![](./assets/117.png)

* ③ 启用适用于 Linux 的 Windows 子系统：

```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

> [!IMPORTANT]
>
> 以管理员身份打开 PowerShell 并运行，执行完上述命令之后，如果提示需要重启计算机，那就重启计算机。



![](./assets/118.gif)

* ④ 启用虚拟机功能：

```powershell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

> [!IMPORTANT]
>
> 以管理员身份打开 PowerShell 并运行，执行完上述命令之后，如果提示需要重启计算机，那就重启计算机。

![](./assets/119.gif)

* ⑤ 更新 Linux 内核包：

```powershell
wsl --update
```

> [!NOTE]
>
> wsl2 的最新 Linux 内核包托管在 GitHub 上，某些国家可能会污染 Github 相关的域名，那么就需要手动下载，然后安装即可，下载地址在[这里](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)。

![](./assets/120.gif)

* ⑥ 将 wsl2 设置为默认版本：

```powershell
wsl --set-default-version 2
```

![](./assets/121.gif)

* ⑦ 查看官方在线支持的 Linux 版本：

```powershell
wsl --list --online
```

![](./assets/122.gif)

* ⑧ 安装指定版本的 Linux ：

```powershell
wsl --install Ubuntu-24.04
```

> [!NOTE]
>
> 官方支持的 Linux 版本，托管在 Github 上，某些国家可能会污染 Github 的域名；此时，要么走科学上网，要么在 `Microsoft Store` 中搜索并安装。

![](./assets/123.gif)

* ⑨ 在 Microsoft Store 中搜索并安装（可选）：

![](./assets/124.png)

* ⑩ 查询本地安装的 Linux 版本：

```powershell
wsl --list
```

![](./assets/125.gif)

### 6.1.3 配置 WSL2

* 本人的安装的是 AlmaLinux9 ，所以需要执行如下命令，以便安装 cmake 相关工具链：

```shell
sudo dnf update -y # 更新包管理器 
sudo dnf groupinstall "Development Tools" -y # 安装开发工具包
sudo dnf install gcc gcc-c++ -y # 安装GCC相关工具链
sudo dnf install cmake -y # 安装 cmake
sudo dnf install make -y # 安装 make
sudo dnf install gdb -y # 安装 gdb
```

![](./assets/126.gif)

* 可以通过 CLion 测试是否安装成功：

![](./assets/127.gif)

### 6.1.4 配置 WSL2

* 本人的安装的是 Ubuntu 24.04，所以需要执行如下命令，以便安装 cmake 相关工具链：

```shell
sudo apt update && sudo apt upgrade -y # 更新包管理器
sudo apt install build-essential -y # 安装开发工具包
sudo apt install gcc g++ -y # 安装 GCC 相关工具链
sudo apt install cmake -y # 安装 cmake
sudo apt install gdb -y # 安装 gdb
```

![](./assets/128.gif)

* 可以通过 CLion 测试是否安装成功：

> [!NOTE]
>
> 默认仓库中的 GDB  的版本会很高，CLion 会不支持，那么就需要手动下载源码，自行编译，本次不再演示！！！

![](./assets/129.gif)

## 6.2 切换 CLion 中的 cmake 的工具链

* 可以在 CLoin 中切换 cmake 的工具链，以便支持不同平台的 cmake ，即：

![](./assets/130.gif)

## 6.3 修改 CMakeLists.txt 文件

* 前文也提到了，在一个 C 语言项目中，只能有一个 main() 函数；但是，我们可以修改 `CMakeLists.txt` 文件的内容，以便其支持在一个 C 语言项目中，可以有多个包含 main() 函数的文件，如下所示：

![](./assets/131.png)

* `CMakeLists.txt` 的内容，如下所示：

```txt
cmake_minimum_required(VERSION 3.10)

# 项目名称和版本号
project(c-study VERSION 1.0 LANGUAGES C)

# 设置 C 标准
set(CMAKE_C_STANDARD 23)
set(CMAKE_C_STANDARD_REQUIRED True)

# 辅助函数，用于递归查找所有源文件
function(collect_sources result dir)
    file(GLOB_RECURSE new_sources "${dir}/*.c")
    set(${result} ${${result}} ${new_sources} PARENT_SCOPE)
endfunction()

# 查找顶层 include 目录（如果存在）
if (EXISTS "${CMAKE_SOURCE_DIR}/include")
    include_directories(${CMAKE_SOURCE_DIR}/include)
endif ()

# 查找所有源文件
set(SOURCES)
collect_sources(SOURCES ${CMAKE_SOURCE_DIR})

# 用于存储已经处理过的可执行文件名，防止重复
set(EXECUTABLE_NAMES)

# 创建可执行文件
foreach (SOURCE ${SOURCES})
    # 获取文件的相对路径
    file(RELATIVE_PATH REL_PATH ${CMAKE_SOURCE_DIR} ${SOURCE})
    # 将路径中的斜杠替换为下划线，生成唯一的可执行文件名
    string(REPLACE "/" "_" EXECUTABLE_NAME ${REL_PATH})
    string(REPLACE "\\" "_" EXECUTABLE_NAME ${EXECUTABLE_NAME})
    string(REPLACE "." "_" EXECUTABLE_NAME ${EXECUTABLE_NAME})

    # 处理与 CMakeLists.txt 文件同名的问题
    if (${EXECUTABLE_NAME} STREQUAL "CMakeLists_txt")
        set(EXECUTABLE_NAME "${EXECUTABLE_NAME}_exec")
    endif ()

    # 检查是否已经创建过同名的可执行文件
    if (NOT EXECUTABLE_NAME IN_LIST EXECUTABLE_NAMES)
        list(APPEND EXECUTABLE_NAMES ${EXECUTABLE_NAME})

        # 创建可执行文件
        add_executable(${EXECUTABLE_NAME} ${SOURCE})

        # 查找源文件所在的目录，并添加为包含目录（头文件可能在同一目录下）
        get_filename_component(DIR ${SOURCE} DIRECTORY)
        target_include_directories(${EXECUTABLE_NAME} PRIVATE ${DIR})

        # 检查并添加子目录中的 include 目录（如果存在）
        if (EXISTS "${DIR}/include")
            target_include_directories(${EXECUTABLE_NAME} PRIVATE ${DIR}/include)
        endif ()

        # 检查并添加 module 目录中的所有 C 文件（如果存在）
        if (EXISTS "${DIR}/module")
            file(GLOB_RECURSE MODULE_SOURCES "${DIR}/module/*.c")
            target_sources(${EXECUTABLE_NAME} PRIVATE ${MODULE_SOURCES})
        endif ()
    endif ()
endforeach ()
```

## 6.4 配置 .clang-format 文件

* 配置 `.clang-format` 格式化文件，以便写代码的时候，可以自动保存并格式化 C 程序代码，如下所示：

![](./assets/132.png)

* `.clang-format` 的内容，如下所示：

```txt
BasedOnStyle: Google
IndentWidth: 4
UseTab: Never
ColumnLimit: 0

# 控制大括号的位置
BreakBeforeBraces: Attach

# 控制空行的使用
EmptyLineBeforeAccessModifier: Never
KeepEmptyLinesAtTheStartOfBlocks: true

# 控制短函数、短 if 语句和循环的格式
AllowShortFunctionsOnASingleLine: Empty
AllowShortIfStatementsOnASingleLine: false
AllowShortLoopsOnASingleLine: false

# 控制其他格式选项
AlignConsecutiveAssignments: true
AlignConsecutiveDeclarations: true

# 控制注释的格式化
ReflowComments: true

# 控制包含指令的格式化
IncludeBlocks: Regroup
SortIncludes: CaseInsensitive

SpaceBeforeParens: ControlStatements
SpacesInParentheses: false
SpacesInAngles: false
SpacesInContainerLiterals: false
SpacesInCStyleCastParentheses: false
```

* CLion 中配置`保存`的时候`自动格式化`，即：

![](./assets/133.gif)

## 6.5 配置 .gitignore 文件

* 需要在项目中，配置 `.gitignore` 文件，以便在提交代码到 Git 仓库的时候，忽略某些文件或目录，如下所示：

![](./assets/134.png)

* `.gitignore` 文件的内容，如下所示：

```txt
.vscode
.idea
cmake-build-*
build
```

## 6.6 演示

* 我们可以在项目中，临时创建或复制一个文件，看上述配置是否生效，即：

> [!NOTE]
>
> 如果是复制并粘贴一个文件到项目中，请点击`重新加载 CMake 项目`！！！

![](./assets/135.gif)



# 第七章：C 语言的编译过程（⭐）

## 7.1 概述

* C 程序的编译过程，如下所示：

![](./assets/136.png)

* 过程 ① ：编写（编辑）源代码，即：编写 C 语言源程序代码，并以文件的形式存储在磁盘中。

> [!IMPORTANT]
>
> 源程序需要以 `.c` 作为扩展名。

* 过程 ② ：编译，即：将 C 语言源程序转换为`目标程序（或目标文件）`。如果程序没有错误，没有任何提示，就会生成一个扩展名为 `.obj`或 `.o` 的二进制文件。C 语言中的每条可执行语句经过编译之后，最终都会转换为二进制的机器指令。

> [!IMPORTANT]
>
> * ① 其实，`编译阶段`包含了`预处理`、`编译`和`汇编`。
>
> * ② `预处理`是编译过程的第一个阶段。在这个阶段，预处理器处理源代码中的指令（例如：`#include`、`#define`等），主要任务包括：
>
>   * **头文件包含**：将头文件的内容插入到源文件中。例如：`#include <stdio.h>`会被替换为`stdio.h`文件的内容。
>   * **宏展开**：替换宏定义。例如：`#define PI 3.14`会将代码中的`PI`替换为`3.14`。
>   * **条件编译**：根据条件指令（如：`#ifdef`、`#ifndef`）有选择地编译代码。
>
>   * **删除代码中的注释，但是不会进行语法检查**。
>
>   * 预处理完成后，生成一个扩展名为`.i`的中间文件。
>
> * ③ `编译`是将预处理后的源代码转换为汇编代码的过程。在这个阶段，编译器会检查代码的语法和语义，将其转换为目标机器的汇编语言，生成一个扩展名为`.s`的汇编文件。
>
> * ④ `汇编`是将汇编代码转换为机器代码（也称为目标代码或目标文件）的过程。在这个阶段，汇编器将汇编指令转换为二进制机器指令，生成一个扩展名为`.o`或 `.obj`的目标文件。

* 过程 ③ ：链接（连接），即：将编译形成的目标文件 `*.obj` 或 `*.o`和库函数以及其他目录文件`链接`，形成一个统一的二进制文件 `*.exe`。

>[!IMPORTANT]
>
>* 为什么需要链接库文件？
>* 因为我们的 C 程序会使用 C 程序库中的内容，如：`<stdio.h>` 中的 `printf()` 函数，这些函数不是程序员自己写的，而是 C 程序库中提供的，因此需要链接。其实，在链接过程中，还会加入启动代码，这个启动代码（和系统相关，Linux 下主要有 crt0.c、crti.c 等，它们设置堆栈后，再调用 main() 函数）负责初始化程序运行时的环境。

* 过程 ④ ：执行，即：有了可执行的 `*.exe`文件，我们就可以在控制台上执行运行此 `*.exe` 文件。

> [!IMPORTANT]
>
> 如果`修改`了源代码，还需要重新`编译`、`链接`，并生成新的 `*.exe`文件，再执行，方能生效。

## 7.2 GCC 编译器的介绍

* 编辑器，如：vim 、vscode 等，是指我们用它来编写源程序的（编辑代码），而我们写的代码语句，电脑是不懂的，我们需要把它转成电脑能懂的语句，编译器就是这样的转化工具。换言之，我们用编辑器编写程序，由编译器编译后才可以运行！
* 编译器是将易于编写、阅读和维护的高级计算机语言翻译为计算机能解读、运行的低级机器语言的程序。
* gcc（GNU Compiler Collection，GNU 编译器套件），是由 GNU 开发的编程语言编译器。gcc 原本作为 GNU 操作系统的官方编译器，现已被大多数类 Unix 操作系统（如：Linux、BSD、Mac OS X 等）采纳为标准的编译器，gcc 同样适用于微软的 Windows 。
* gcc 最初用于编译 C 语言，随着项目的发展， gcc 已经成为了能够编译 C、C++、Java、Ada、fortran、Object C、Object C++、Go 语言的编译器大家族。

## 7.3 通过 gcc 直接生成可执行文件

* 示例：进行预处理、编译、汇编和链接

```shell
gcc HelloWorld.c -o HelloWorld.exe
```

![](./assets/137.gif)

## 7.4 通过 gcc 分步编译

### 7.3.1 概述

* 预处理命令：

```shell
gcc -E 源文件.c -o 源文件.i # 通常以 .i 结尾表示这个文件是一个中间状态
```

* 编译（预处理和编译）命令：

```shell
gcc -S 源文件.i -o 源文件.s # 在 Linux 中，通常以 .s 结尾；在 Windows 中，通常以 .asm 结尾
```

* 汇编（预处理、编译和汇编）命令：

```shell
gcc -c 源文件.s -o 源文件.o # 在 Linux 中，通常以 .o 结尾；在 Windows 中，通常以 .obj 结尾
```

* 链接（预处理、编译、汇编和链接）命令：

```shell
gcc 源文件.o -o 源文件.exe # 在 Linux 中，通常以 .out 结尾；在 Windows 中，通常以 .exe 结尾
```

### 7.4.2 应用示例

* 示例：只进行预处理

```shell
gcc -E HelloWorld.c -o HelloWorld.i
```

![](./assets/138.gif)



* 示例：只进行预处理和编译

```shell
gcc -S HelloWorld.i -o HelloWorld.s
```

![](./assets/139.gif)



* 示例：只进行预处理、编译和汇编

```shell
gcc -c HelloWorld.s -o HelloWorld.o
```

![](./assets/140.gif)



* 示例：进行预处理、编译、汇编和链接

```shell
gcc HelloWorld.o -o HelloWorld.exe
```

![](./assets/141.gif)

# 第八章：附录

## 8.1 WSL2 代理问题

* 在安装和配置 WSL2 之后，可能会出现如下的提示，即：

![](./assets/142.png)

* 那么，只需要修改 `%USERPROFILE%\.wslconfig`文件，内容如下：

```txt
[wsl2]
networkingMode=mirrored
dnsTunneling=true
firewall=true
autoProxy=true

[experimental]
# requires dnsTunneling but are also OPTIONAL
bestEffortDnsParsing=true
useWindowsDnsCache=true
```

![](./assets/143.png)

* 在命令行中，执行如下的命令：

```shell
wsl --shutdown
```

![](./assets/144.gif)

* 此时，再打开终端，就没有这种提示了：

![](./assets/145.png)

## 8.2 CLion 调试问题

* 在 CLion 中进行 run（运行）程序的时候，对于 `printf` 函数或 `scanf` 函数很正常，如下所示：

![](./assets/146.gif)

* 但是，当我们 debug（调试） 的时候，对于 `printf` 函数或 `scanf` 函数会一直没有输出，如下所示：

![](./assets/147.gif)

* 原因是 `scanf` 函数并不是直接让用户从键盘输入数据，而是先检查缓冲区，处理缓冲区中的数据；当遇到 `scanf` 函数时，程序会先检查输入缓冲区中是否有数据，所以解决方案就是`禁用缓冲区`，如下所示：

```c
#include <stdio.h>

int main() {
    // 禁用 stdout 缓冲区
    setbuf(stdout, NULL);

    int a, b, c;
    printf("请输入整数 a 、b 和 c 的值：");
    scanf("%d %d %d", &a, &b, &c);

    int result = a * b * c;

    printf("%d × %d × %d = %d", a, b, c, result);

    return 0;
}
```

* 那么，就会达到我们想要的效果了，如下所示：

![](./assets/148.gif)

## 8.3 内存泄露检测

### 8.3.1 概述

* C 语言中的指针是否使用是个颇具争议的话题，现代化的高级编程语言通过各种策略和机制，在编译期就能解决指针危险的问题。但是，遗憾的是，C 语言的指针很大程度上，在运行期才会暴露问题。
* 幸运的是，我们可以使用 `Valgrind` 项目来进行`内存泄露检测`和`性能分析`，而 `Valgrind` 只支持 Linux 。

>[!NOTE]
>
>win 11 中的 WSL2 就是个 Linux 环境，我们可以在上面跑各种 Linux 工具，这样我们就不需要再安装虚拟机软件了，如：VMware Workstation（它会完整的模拟一个硬件系统，并在上面跑各种 Linux ，实在是太笨重了）。

### 8.3.2 安装

* 在 WSL2 上安装 Valgrind ：

```shell
dnf -y upgrade && dnf -y install valgrind # AlmaLinux
```

```shell
apt -y update && apt -y upgrade && apt -y install valgrind # Ubuntu
```

![](./assets/149.gif)

* 查看 valgrind 可执行文件的安装位置：

```shell
which valgrind
```

![](./assets/150.gif)

### 8.3.3 整合

* CLion 中将工具链设置为 WSL2 ：

![](./assets/151.gif)

* CLion 中配置 valgrind 的路径：

![](./assets/152.png)

* 查看 WSL2 中 cmake 的版本：

```shell
cmake --version
```

![](./assets/153.png)

* 修改项目中 CMakeLists.txt 中 cmake 的版本：

```{1} txt
cmake_minimum_required(VERSION 3.26.5) # 3.26.5

# 项目名称和版本号
project(c-study VERSION 1.0 LANGUAGES C)

# 设置 C 标准
set(CMAKE_C_STANDARD 23)
set(CMAKE_C_STANDARD_REQUIRED True)

# 辅助函数，用于递归查找所有源文件
function(collect_sources result dir)
    file(GLOB_RECURSE new_sources "${dir}/*.c")
    set(${result} ${${result}} ${new_sources} PARENT_SCOPE)
endfunction()

# 查找顶层 include 目录（如果存在）
if (EXISTS "${CMAKE_SOURCE_DIR}/include")
    include_directories(${CMAKE_SOURCE_DIR}/include)
endif ()

# 查找所有源文件
set(SOURCES)
collect_sources(SOURCES ${CMAKE_SOURCE_DIR})

# 用于存储已经处理过的可执行文件名，防止重复
set(EXECUTABLE_NAMES)

# 创建可执行文件
foreach (SOURCE ${SOURCES})
    # 获取文件的相对路径
    file(RELATIVE_PATH REL_PATH ${CMAKE_SOURCE_DIR} ${SOURCE})
    # 将路径中的斜杠替换为下划线，生成唯一的可执行文件名
    string(REPLACE "/" "_" EXECUTABLE_NAME ${REL_PATH})
    string(REPLACE "\\" "_" EXECUTABLE_NAME ${EXECUTABLE_NAME})
    string(REPLACE "." "_" EXECUTABLE_NAME ${EXECUTABLE_NAME})

    # 处理与 CMakeLists.txt 文件同名的问题
    if (${EXECUTABLE_NAME} STREQUAL "CMakeLists_txt")
        set(EXECUTABLE_NAME "${EXECUTABLE_NAME}_exec")
    endif ()

    # 检查是否已经创建过同名的可执行文件
    if (NOT EXECUTABLE_NAME IN_LIST EXECUTABLE_NAMES)
        list(APPEND EXECUTABLE_NAMES ${EXECUTABLE_NAME})

        # 创建可执行文件
        add_executable(${EXECUTABLE_NAME} ${SOURCE})

        # 查找源文件所在的目录，并添加为包含目录（头文件可能在同一目录下）
        get_filename_component(DIR ${SOURCE} DIRECTORY)
        target_include_directories(${EXECUTABLE_NAME} PRIVATE ${DIR})

        # 检查并添加子目录中的 include 目录（如果存在）
        if (EXISTS "${DIR}/include")
            target_include_directories(${EXECUTABLE_NAME} PRIVATE ${DIR}/include)
        endif ()

        # 检查并添加 module 目录中的所有 C 文件（如果存在）
        if (EXISTS "${DIR}/module")
            file(GLOB_RECURSE MODULE_SOURCES "${DIR}/module/*.c")
            target_sources(${EXECUTABLE_NAME} PRIVATE ${MODULE_SOURCES})
        endif ()
    endif ()
endforeach ()
```

* 在 CLion 中正常运行代码：

![](./assets/154.gif)

* 在 CLion 中通过 valgrind 运行代码：

![](./assets/155.gif)

## 8.4 性能分析

### 8.4.1 概述

* `perf` 是一个 Linux 下的性能分析工具，主要用于监控和分析系统性能。它可以帮助开发者和系统管理员了解系统中哪些部分在消耗资源、识别性能瓶颈以及分析程序的运行效率。

### 8.4.2 安装

#### 8.4.2.1 AlmaLinux9

* 在 WSL2 中的 AlmaLinux 安装 perf ：

```shell
dnf -y install perf
```

![](./assets/156.gif)

#### 8.4.2.2 Ubuntu 22.04

* 在 WSL2 中的 Ubuntu 安装 perf ：

```shell
apt -y update \
	&& apt -y install linux-tools-common linux-tools-generic linux-tools-$(uname -r)
```

![](./assets/157.gif)

> [!NOTE]
>
> 之所以报错的原因，在于 WSL2 中的 Ubuntu 的内核是定制化的，并非 Ubuntu 的母公司 Canonical 发布的标准内核，所以需要我们手动编译安装。

* 查看内核版本：

```shell
uname -sr
```

![](./assets/158.gif)

* 设置环境变量，方便后续引用：

```shell
export KERNEL_VERSION=$(uname -r | cut -d'-' -f1)
```

![](./assets/159.gif)

* 安装依赖库：

```shell
apt -y update && \
	apt -y install binutils-dev debuginfod default-jdk default-jre libaio-dev \
    libbabeltrace-dev libcap-dev libdw-dev libdwarf-dev libelf-dev libiberty-dev \
    liblzma-dev libnuma-dev libperl-dev libpfm4-dev libslang2-dev libssl-dev \
    libtraceevent-dev libunwind-dev libzstd-dev libzstd1 python3-setuptools python3 \
    python3-dev systemtap-sdt-dev zlib1g-dev bc dwarves bison flex libnewt-dev libdwarf++0 \
    libelf++0 libbfb0-dev python-dev-is-python3
```

![](./assets/160.gif)

* 下载源码：

```shell
git clone \
    --depth 1 \
    --single-branch --branch=linux-msft-wsl-${KERNEL_VERSION} \
    https://github.com/microsoft/WSL2-Linux-Kernel.git
```

![](./assets/161.gif)

* 编译内核代码：

```shell
cd WSL2-Linux-Kernel
```

```shell
make -j $(nproc) KCONFIG_CONFIG=Microsoft/config-wsl
```

![](./assets/162.gif)

* 编译 perf 工具：

```shell
cd tools/perf
```

```shell
make clean && make
```

![](./assets/163.gif)

* 复制到 PATH 变量所指向的路径中：

```shell
cp perf /usr/bin/
```

![](./assets/164.gif)

### 8.4.3 整合

* CLion 中配置 perf 的路径：

![](./assets/165.png)

* 在 CLion 中通过 perf 运行代码：

![](./assets/166.gif)

## 8.5 Win 中文乱码问题

* 前文，我们提及到，在 Win 中，如果出现`中文乱码`问题，就需要去`语言和区别`设置`系统区域`的编码为 UTF-8 ；但是，这样可能会造成其它的软件出现中文乱码问题，如：Xshell 等。

> [!NOTE]
>
> * ① 之所以，修改系统的编码为 UTF-8 会出现问题，是因为早期的 Win 系统的中文默认编码是 GBK（目前也是，Win 并没有强制第三方软件使用 UTF-8 编码） ，而 Xshell 等也使用的这些编码，一旦我们修改为 UTF-8 之后，可能会造成这些第三方软件出现中文乱码问题（第三方软件适配问题，相信将来应该都会切换为 UTF-8 编码），体验较差！！！
> * ② 在 Linux 或 MacOS 之所以不会出现中文乱码的问题，是因为这些系统默认的编码就是 UTF-8 。

* 其实，还有一种解决方案，如下所示：

![](./assets/167.png)

![](./assets/168.png)

![](./assets/169.png)

* 测试一下，是否配置成功：

![](./assets/170.gif)

## 8.6 CLion 中自动导入头文件

* 在 CLion 中，最为强大的功能就是直接输入函数，然后让 IDE 帮我们自动导入头文件，包括自定义的头文件，相当实用。

> [!NOTE]
>
> * ① CLion 中的`自动导入头文件`的`快捷键`是 `Alt + Enter` 。
> * ② CLion 中的`自动提取变量的类型`的`快捷键`是 `Ctrl + Alt + V` 。

![](./assets/171.gif)

* 开启自动导入头文件的步骤，如下所示：

![](./assets/172.png)

![](./assets/173.png)

