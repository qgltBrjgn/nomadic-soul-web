export default function (Vue) {
    Vue.prototype._UTIL = {
        // json类型post请求
        jpost: function (url, body, callback) {
            Vue.http.post(url, body).then(response => {
              console.log(response);
              callback(response);
            });
        },
        // form类型post请求
        fpost: function (url, body, callback) {
            // 请求类型设置
            let options = {emulateJSON: true};
            Vue.http.post(url, body, options).then(response => {
              callback(response.body);
            });
        },
    }
}