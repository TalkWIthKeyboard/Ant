/**
 * Created by CoderSong on 17/1/2.
 */
// 引用superagent
let request = require('superagent');
let root = 'http://ant-express.picfood.cn';

// 自定义判断元素类型JS
function toType(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

// 参数过滤函数
function filter_null(params) {
  for (let key in params) {
    if (params[key] == null) {
      delete params[key]
    }
    if (toType(params[key]) == 'string') {
      params[key] = params[key].trim();
      if (params[key].length == 0) {
        delete params[key]
      }
    }
  }
  return params
}

// 封装api调用
function api_base(method, url, params, success, failure) {
  // 设置头
  let r = request(method, url)
    .type('text/plain')
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json');

  if (params) {
    params = filter_null(params);
    if (method === 'POST' || method === 'PUT') {
      if (toType(params) == 'object') {
        params = JSON.stringify(params);
      }
      r = r.send(params)
    } else if (method == 'GET' || method === 'DELETE') {
      r = r.query(params)
    }
  }
  r.end(function (err, res) {
    if (err) {
      // alert('api error, HTTP CODE: ' + res.status);
      return;
    }
    if (res.body.result) {
      if (success) {
        success(res.body);
      }
    } else {
      if (failure) {
        failure(res.body);
      } else {
        alert('error: ' + JSON.stringify(res.body));
      }
    }
  });
}

// 封装get post put delete方法
export default {
  get: function (url, params, success, failure) {
    return api_base('GET', root + '/' + url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return api_base('POST', root + '/' + url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return api_base('PUT', root + '/' + url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return api_base('DELETE', root + '/' + url, params, success, failure)
  },
}