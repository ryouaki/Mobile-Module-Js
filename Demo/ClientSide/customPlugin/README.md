Only test for custom

如何创建自定义plugin

首先创建一个此目录相同结构的文件夹

然后创建一个package.json
{
  "name": "custom-plugin",  // plugin名称
  "version": "0.0.1",       // 版本号
  "description": "Custom plugin",   // 描述
  "cordova": {
    "id": "custom-plugin",  // id
    "platforms": [          // platform
      "ios"
    ]
  },
  "repository": {           // url
    
  },
  "keywords": [             // 搜索关键词
  ],
  "author": "Ryouaki(46517115@qq.com)"  // 作者信息
}

创建plugin.xml
<?xml version="1.0" encoding="UTF-8"?>
<plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
           id="custom-plugin"
      version="0.0.1">
    <name>custom-plugin</name>
    <description>Cordova Custom Plugin</description>
    <platform name="ios">
        <config-file target="config.xml" parent="/*">
            <feature name="customPlugin">
                <param name="ios-package" value="CDVCustomPlugin" />
                <param name="onload" value="true" />
            </feature>
        </config-file>
        <header-file src="src/ios/CDVCustomPlugin.h" />
        <source-file src="src/ios/CDVCustomPlugin.m" />
    </platform>
    <info>
        This plugin is used for demo how to create a custom plugin
    </info>
</plugin>

#关于package.json&plugin.xml我个人建议是从已经安装的apache的plugin拷贝过来修改

创建src目录。下面对应的平台名称。里面对应的src文件
src/
    ios/
        CDVCustomPlugin.h
        CDVCustomPlugin.m





