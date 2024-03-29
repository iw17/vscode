## 常见问题

0.  **FAQ 是啥？**
    FAQ（Frequently Asked Questions），“常见问题”的英文缩写。
1.  **我不会/不想科学上网，如何流畅地访问 [GitHub](https://github.com)？**
    一个可行的办法是用 [FastGitHub](https://cloud.tsinghua.edu.cn/d/df482a15afb64dfeaff8/)，Windows 用户也可在群文件下载。用法见下载目录下`README.md`文件。
1.  **如何入门 Git？**
    速成可以阅读[南山南](https://git.lug.ustc.edu.cn/CA)的[《git 简单用法》](https://git.lug.ustc.edu.cn/CA/2022ics/-/blob/master/documents/2.git_use_guide)，详细学习可参考 Git 官方文档 _Pro Git_ [简体中文版](https://git-scm.com/book/zh/v2)和[英文版](https://git-scm.com/book/en/v2)，群文件有可下载的 pdf。
1.  **如何入门 Linux？**
    速成可以阅读[南山南](https://git.lug.ustc.edu.cn/CA)的[《Linux 和 Vlab 学习》](https://git.lug.ustc.edu.cn/CA/2022ics/-/blob/master/documents/4.vlab_linux_simple)，详细学习可参考 [USTC LUG](https://lug.ustc.edu.cn) 编写的[《Linux 101》在线讲义](https://101.lug.ustc.edu.cn)。温馨提醒：尝试有风险，玩机需谨慎。
1.  **安装或使用 LaTeX 遇到问题如何解决？**
    可以去 [LaTeX Stack Exchange](https://tex.stackexchange.com) 搜索或提问，安装方面的问题还可以查[这个网站](https://ctan.org/pkg/install-latex-guide-zh-cn)或[这份文档](https://mirrors.pku.edu.cn/ctan/info/install-latex-guide-zh-cn/install-latex-guide-zh-cn.pdf)。
1.  **官网上的 LaTeX 光盘映像文件下载太慢，如何加快下载速度？**
    可以从[科大镜像站](https://mirrors.ustc.edu.cn)下载，选择“获取开源软件”，“选择开源软件”处选择“TeX 排版系统”，“选择软件版本”处选择 TeX Live（若为 Windows 或 Linux 系统）或 MacTeX（若为 macOS 系统），建议在校群友用校园网下载。
1.  **pip 默认下载源速度感人，如何设置为默认从国内源下载？**
    以从 [PyPI 的清华镜像源](https://pypi.tuna.tsinghua.edu.cn/simple)下载为例，按照[清华镜像站](https://mirrors.tuna.tsinghua.edu.cn)上的 [PyPI 镜像使用帮助](https://mirrors.tuna.tsinghua.edu.cn/help/pypi)配置。
1.  **我用 Python 3.x 和 3.y，遇到了 xxx 问题，如何解决？**
    Python 的不同版本之间不保证兼容，若非必要，不建议同时使用多个版本的 Python；若必要，请检查环境变量和包的安装路径是否正确。**特别提醒：除非有十足的把握，否则别动 Linux 系统自带的 Python。**
1.  **某些群友的群名片（如`printf("");`）如图所示的特殊显示效果是如何做到的？**
    ![](../public/images/printf-msg.jpeg)
    ![](../public/images/printf-brief.jpeg)
    找到一条看似是`@printf("test");`的消息，用在线 Unicode 转换器转换，结果为`@printf("\u2067;\u2067 ("\u2067\u202d test`。这里的`\u2067`和`\u202d`是 Unicode 定义的[控制字符](https://baike.baidu.com/item/%E6%8E%A7%E5%88%B6%E5%AD%97%E7%AC%A6/0)。
