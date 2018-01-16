<doc>
    <h1>my-doc-jsx-plugin-template</h1>
    <p>{`这是一个`}<a href="https://github.com/laden666666/my-doc-jsx">my-doc-jsx</a>{`的一个插件模板，用于创建`}<strong>my-doc-jsx</strong>{`插件。`}</p>
    <h2>使用方法</h2>
    <p>首先下载该模板，记住尽量不要用<strong>git clone</strong>下载该插件，因为这样会生成.git目录，这样会影响你将你的插件上传到git上面。</p>
    <p>然后修改<strong>package.json</strong>文件，修改里面的<strong>name</strong>、<strong>main</strong>和<strong>版本</strong>。</p>
    <p>修改<strong>build/webpack.*.conf.js</strong>里面的插件名称。模板项目的插件名称为<strong>myDocJsxPluginTemplate</strong>,你需要将其改为你插件的名字。</p>
    <p>修改<strong>src</strong>里面的文件，根据hello world的例子完成你的插件</p>

    <h2>调试</h2>
    <p>执行</p>
    <code>
        npm run dev
    </code>
    <p>模板工程会打开一个浏览器页面供你查看插件的效果</p>

    <h2>打包</h2>
    <p>执行</p>
    <code>
        npm run build
    </code>
    <p>这样会在dist目录中输出插件的打包文件。</p>

    <h2>文档编写</h2>
    <p>修改<strong>doc-jsx/README.jsx</strong>里面的文档，这是个doc-jsx文档。然后执行</p>
    <code>
        npm run doc
    </code>
    <p>默认执行是不包含任何插件的，你可以修改<strong>package.json</strong>文件里面的脚本，可以为doc-jsx加插件，甚至可以使用你刚刚开发的插件。</p>
</doc>
