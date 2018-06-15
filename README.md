# egg-validate

基于 [jsonschema](https://github.com/tdegrunt/jsonschema) 提供数据校验方法。

## 安装

```bash
$ npm i egg-jsonschema --save
```

## 配置

```js
// {app_root}/config/plugin.js
exports.jsonschema = {
  enable: true,
  package: 'egg-jsonschema',
};
```

## 使用方法

- `ctx.validate(rule[, data])`

### 默认验证请求 Body

```js

const Controller = require('egg').Controller;

const createSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      required: true
    }
  }
};

class AppController extends Controller {
  async create() {
    // 校验失败自动返回 422 响应
    this.validate(createSchema);
    // 可以传递自己处理过的数据，默认使用 this.request.body
    // this.validate(createRule[, your_data]);
    // 校验通过
    this.body = {
      code: 200,
      result: {
        pass: true,
      },
    };
  }
}

```

如果验证失败，会返回：

```js
{
  "message": "Validation Failed",
  "errors": [
    ...
  ]
}
```
