/**
 * Created by CoderSong on 17/1/2.
 */
// 引用superagent
import $ from 'jquery'
let root = 'https://ant-express.picfood.cn';

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
function ajaxHeadler(method, url, params, success, failure) {
  var headler = {
    url: url,
    type: method,
    beforeSend: function(request) {
      request.setRequestHeader("Accept", "application/json");
    },
    xhrFields: {
      withCredentials: true
    },
    success: success(data),
    error: failure(data)
  };

  if (params) {
    params = filter_null(params);
    if (method === 'POST' || method === 'PUT') {
      if (toType(params) == 'object') {
        params = JSON.stringify(params);
        headler.data = params;
        $.ajax(headler);
      }
    } else if (method == 'GET' || method === 'DELETE') {
      $.ajax(headler);
    }
  }
}

// 封装get post put delete方法
export default {
  get: function (url, params, success, failure) {
    return ajaxHeadler('GET', root + '/' + url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return ajaxHeadler('POST', root + '/' + url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return ajaxHeadler('PUT', root + '/' + url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return ajaxHeadler('DELETE', root + '/' + url, params, success, failure)
  },
}