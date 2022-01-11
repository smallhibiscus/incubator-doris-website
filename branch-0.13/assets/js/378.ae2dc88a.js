(window.webpackJsonp=window.webpackJsonp||[]).push([[378],{765:function(e,t,a){"use strict";a.r(t);var r=a(43),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[e._v("#")]),e._v(" 编译")]),e._v(" "),a("p",[e._v("本文档主要介绍如何通过源码编译 Doris。")]),e._v(" "),a("h2",{attrs:{id:"使用-docker-开发镜像编译（推荐）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-开发镜像编译（推荐）"}},[e._v("#")]),e._v(" 使用 Docker 开发镜像编译（推荐）")]),e._v(" "),a("h3",{attrs:{id:"使用现成的镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用现成的镜像"}},[e._v("#")]),e._v(" 使用现成的镜像")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("下载 Docker 镜像")]),e._v(" "),a("p",[a("code",[e._v("$ docker pull apachedoris/doris-dev:build-env")])]),e._v(" "),a("p",[e._v("检查镜像下载完成：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ docker images\nREPOSITORY              TAG                 IMAGE ID            CREATED             SIZE\napachedoris/doris-dev   build-env           f8bc5d4024e0        21 hours ago        3.28GB\n")])])])])]),e._v(" "),a("p",[e._v("注: 针对不同的 Doris 版本，需要下载对应的镜像版本")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("image version")]),e._v(" "),a("th",[e._v("commit id")]),e._v(" "),a("th",[e._v("release version")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("apachedoris/doris-dev:build-env")]),e._v(" "),a("td",[e._v("before "),a("a",{attrs:{href:"https://github.com/apache/incubator-doris/commit/ff0dd0d2daa588f18b6db56f947e813a56d8ec81",target:"_blank",rel:"noopener noreferrer"}},[e._v("ff0dd0d"),a("OutboundLink")],1)]),e._v(" "),a("td",[e._v("0.8.x, 0.9.x")])]),e._v(" "),a("tr",[a("td",[e._v("apachedoris/doris-dev:build-env-1.1")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/apache/incubator-doris/commit/ff0dd0d2daa588f18b6db56f947e813a56d8ec81",target:"_blank",rel:"noopener noreferrer"}},[e._v("ff0dd0d"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://github.com/apache/incubator-doris/commit/4ef5a8c8560351d7fff7ff8fd51c4c7a75e006a8",target:"_blank",rel:"noopener noreferrer"}},[e._v("4ef5a8c"),a("OutboundLink")],1)]),e._v(" "),a("td",[e._v("0.10.x, 0.11.x")])]),e._v(" "),a("tr",[a("td",[e._v("apachedoris/doris-dev:build-env-1.2")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/apache/incubator-doris/commit/4ef5a8c8560351d7fff7ff8fd51c4c7a75e006a8",target:"_blank",rel:"noopener noreferrer"}},[e._v("4ef5a8c"),a("OutboundLink")],1),e._v(" or later")]),e._v(" "),a("td",[e._v("0.12.x or later")])])])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[e._v("运行镜像")]),e._v(" "),a("p",[a("code",[e._v("$ docker run -it apachedoris/doris-dev:build-env")])]),e._v(" "),a("p",[e._v("建议以挂载本地 Doris 源码目录的方式运行镜像，这样编译的产出二进制文件会存储在宿主机中，不会因为镜像退出而消失。")]),e._v(" "),a("p",[e._v("同时，建议同时将镜像中 maven 的 "),a("code",[e._v(".m2")]),e._v(" 目录挂载到宿主机目录，以防止每次启动镜像编译时，重复下载 maven 的依赖库。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ docker run -it -v /your/local/.m2:/root/.m2 -v /your/local/incubator-doris-DORIS-x.x.x-release/:/root/incubator-doris-DORIS-x.x.x-release/ apachedoris/doris-dev:build-env\n")])])])]),e._v(" "),a("li",[a("p",[e._v("下载源码")]),e._v(" "),a("p",[e._v("启动镜像后，你应该已经处于容器内。可以通过以下命令下载 Doris 源码（已挂载本地源码目录则不用）：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ wget https://dist.apache.org/repos/dist/dev/incubator/doris/xxx.tar.gz\nor\n$ git clone https://github.com/apache/incubator-doris.git\n")])])])]),e._v(" "),a("li",[a("p",[e._v("编译 Doris")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sh build.sh\n")])])]),a("p",[e._v("编译完成后，产出文件在 "),a("code",[e._v("output/")]),e._v(" 目录中。")])])]),e._v(" "),a("h3",{attrs:{id:"自行编译开发环境镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自行编译开发环境镜像"}},[e._v("#")]),e._v(" 自行编译开发环境镜像")]),e._v(" "),a("p",[e._v("你也可以自己创建一个 Doris 开发环境镜像，具体可参阅 "),a("code",[e._v("docker/README.md")]),e._v(" 文件。")]),e._v(" "),a("h2",{attrs:{id:"直接编译（centos-ubuntu）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直接编译（centos-ubuntu）"}},[e._v("#")]),e._v(" 直接编译（CentOS/Ubuntu）")]),e._v(" "),a("p",[e._v("你可以在自己的 linux 环境中直接尝试编译 Doris。")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("系统依赖")]),e._v(" "),a("p",[a("code",[e._v("GCC 5.3.1+, Oracle JDK 1.8+, Python 2.7+, Apache Maven 3.5+, CMake 3.11+")])]),e._v(" "),a("p",[e._v("如果使用Ubuntu 16.04 及以上系统 可以执行以下命令来安装依赖")]),e._v(" "),a("p",[a("code",[e._v("sudo apt-get install build-essential openjdk-8-jdk maven cmake byacc flex automake libtool-bin bison binutils-dev libiberty-dev zip unzip libncurses5-dev")])]),e._v(" "),a("p",[e._v("安装完成后，自行设置环境变量 "),a("code",[e._v("PATH")]),e._v(", "),a("code",[e._v("JAVA_HOME")]),e._v(" 等。")])]),e._v(" "),a("li",[a("p",[e._v("编译 Doris")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sh build.sh\n")])])]),a("p",[e._v("编译完成后，产出文件在 "),a("code",[e._v("output/")]),e._v(" 目录中。")])])]),e._v(" "),a("h2",{attrs:{id:"特别声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特别声明"}},[e._v("#")]),e._v(" 特别声明")]),e._v(" "),a("p",[e._v("自 0.13 版本开始，默认的编译产出中将取消对 [1] 和 [2] 两个第三方库的依赖。这两个第三方库为 "),a("a",{attrs:{href:"https://www.gnu.org/licenses/gpl-3.0.en.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("GNU General Public License V3"),a("OutboundLink")],1),e._v(" 协议。该协议与 "),a("a",{attrs:{href:"https://www.apache.org/licenses/LICENSE-2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache License 2.0"),a("OutboundLink")],1),e._v(" 协议不兼容，因此默认不出现在 Apache 发布版本中。")]),e._v(" "),a("p",[e._v("移除依赖库 [1] 会导致无法访问 MySQL 外部表。访问 MySQL 外部表的功能会在后续版本中通过 UnixODBC 实现。")]),e._v(" "),a("p",[e._v("移除依赖库 [2] 会导致在无法读取部分早期版本（0.8版本之前）写入的部分数据。因为早期版本中的数据是使用 LZO 算法压缩的，在之后的版本中，已经更改为 LZ4 压缩算法。后续我们会提供工具用于检测和转换这部分数据。")]),e._v(" "),a("p",[e._v("如果有需求，用户可以继续使用这两个依赖库。如需使用，需要在编译时添加如下选项：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("WITH_MYSQL=1 WITH_LZO=1 sh build.sh\n")])])]),a("p",[e._v("注意，当用户依赖这两个第三方库时，则默认不在 Apache License 2.0 协议框架下使用 Doris。请注意 GPL 相关协议约束。")]),e._v(" "),a("ul",[a("li",[e._v("[1] mysql-5.7.18")]),e._v(" "),a("li",[e._v("[2] lzo-2.10")])])])}),[],!1,null,null,null);t.default=s.exports}}]);