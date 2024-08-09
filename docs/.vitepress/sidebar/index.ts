import { DefaultTheme } from 'vitepress'
import { commonDirectoryName } from '../utils/constant'
export const sidebar: DefaultTheme.Sidebar = {
  '/notes/': [
    {
      text: 'C 语言基础',
      collapsed: true,
      items: [
        { text: '编程基础', link: `/notes/01_c-basic/00_${commonDirectoryName}/` },
        { text: 'C 语言入门', link: `/notes/01_c-basic/01_${commonDirectoryName}/` },
        { text: '变量和进制', link: `/notes/01_c-basic/02_${commonDirectoryName}/` },
        { text: '数据类型和运算符', link: `/notes/01_c-basic/03_${commonDirectoryName}/` },
        { text: '流程控制', link: `/notes/01_c-basic/04_${commonDirectoryName}/` },
        { text: '数组', link: `/notes/01_c-basic/05_${commonDirectoryName}/` },
        { text: '指针', link: `/notes/01_c-basic/06_${commonDirectoryName}/` },
        { text: '函数', link: `/notes/01_c-basic/07_${commonDirectoryName}/` },
        { text: '预处理器', link: `/notes/01_c-basic/08_${commonDirectoryName}/` },
        { text: '自定义数据类型', link: `/notes/01_c-basic/09_${commonDirectoryName}/` },
        { text: '字符串和时间', link: `/notes/01_c-basic/10_${commonDirectoryName}/` },
        { text: '内存管理', link: `/notes/01_c-basic/11_${commonDirectoryName}/` },
        { text: '文件操作', link: `/notes/01_c-basic/12_${commonDirectoryName}/` },
        { text: '调试工具和调试技巧（gdb和make）', link: `/notes/01_c-basic/13_${commonDirectoryName}/` },
        { text: '常用库函数', link: `/notes/01_c-basic/14_${commonDirectoryName}/` },
      ]
    },
    {
      text: 'C 语言高级',
      collapsed: true,
      items: [
        { text: '变量和内存分布', link: `/notes/02_c-advance/01_${commonDirectoryName}/` },
        { text: '指针强化', link: `/notes/02_c-advance/02_${commonDirectoryName}/` },
        { text: '结构体和文件的高级用法', link: `/notes/02_c-advance/03_${commonDirectoryName}/` },
        { text: '链表和回调函数', link: `/notes/02_c-advance/04_${commonDirectoryName}/` },
        { text: '编译过程和面向接口', link: `/notes/02_c-advance/05_${commonDirectoryName}/` },
      ]
    },
    {
      text: '项目构建工具',
      collapsed: true,
      items: [
        {
          text: 'meson', collapsed: true, items: [
            { text: 'Gradle 入门', link: `/notes/03_build/01_${commonDirectoryName}/` },
          ]
        },
        {
          text: 'cmake', collapsed: true, items: [
            { text: 'Gradle 入门', link: `/notes/03_build/01_${commonDirectoryName}/` },
          ]
        },
        {
          text: 'conan ', link: '/notes/03_build/01_${commonDirectoryName}/'
        },
        {
          text: 'Gradle', collapsed: true, items: [
            { text: 'Gradle 入门', link: `/notes/03_build/01_${commonDirectoryName}/` },
          ]
        },
      ]
    },
    {
      text: 'Linux',
      collapsed: true,
      items: [
        { text: 'Linux 初识和安装', link: `/notes/04_linux/01_${commonDirectoryName}/` },
      ]
    },
    {
      text: 'C++ 核心编程',
      collapsed: true,
      items: [

      ]
    },
    {
      text: 'C++ 标准库',
      collapsed: true,
      items: [

      ]
    },
    {
      text: 'QT 桌面开发',
      collapsed: true,
      items: [

      ]
    },
    {
      text: 'Linux 高并发服务器开发',
      collapsed: true,
      items: [

      ]
    }
  ],
}

export default sidebar