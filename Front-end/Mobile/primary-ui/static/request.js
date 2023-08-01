export const request = config => {
	return new Promise((resolve,reject) => 
	{
		uni.request({
			url: 'http://10.10.74.224:9090' + config.url,
			method: config.method || 'GET',
			data: config.data || {},
			header: config.url == '/user/login' ? {} : {
				Authorization: uni.getStorageSync('token')
			},
			success: (res) => {
				resolve(res)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}

/*
*
useage:
    〇 url：请求的URL地址。
    〇 method：请求方法，如GET、POST等。
    〇 data：请求参数。
    〇 header：请求头部信息。
    〇 success：请求成功后的回调函数。
    〇 fail：请求失败后的回调函数。
该函数返回一个Promise对象，该对象在请求成功时返回响应数据，在请求失败时返回错误信息。

request函数使用uni.request方法向服务器发出网络请求。
如果config对象中包含method属性，则使用该属性指定的HTTP方法；
否则，默认使用GET方法。如果config对象中包含data属性，则使用该属性指定的数据作为请求参数；
否则，默认使用空对象作为请求参数。如果config对象中包含header属性，则使用该属性指定的HTTP头部信息；
否则，默认使用空对象作为HTTP头部信息。如果config.url等于’/user/login’，则不发送Authorization头部信息
；否则，发送Authorization头部信息，其值为uni.getStorageSync(‘token’)。
*/
/**
 * example:
    
''' 
    // need to import this request function
    import { request } from '@/static/request.js'
    
    //when we need to send a request, we can use this request function example:

    request({
        url: '/user/login',
        method: 'POST',
        data: {
            username: 'admin',
            password: '123456'
        }
    }).then(res => {
        console.log(res)
        uni.setStorageSync('token', res.data.token)

    }).catch(err => {
        console.log(err)
    })

'''
 * 
 */
