import {BASE_URL,AUTH_URL} from '../constant/config'
import API from '../constant/api'

// // START Authenticated
// export const getAuthenticated = () => {
//     return API.post(AUTH_URL+'/getAuthenticated');
// }
// export const REGISTER = (data:any) => {
//     return API.post(AUTH_URL+'/register',data);
// }
// export const LOGIN = (data:any) => {
//     return API.post(AUTH_URL+'/login',data);
// }
// export const SEND_OTP = (data:any) => {
//     return API.post(AUTH_URL+'/sendOTP',data);
// }
// export const GET_NEW_OTP = (data:any) => {
//     return API.post(AUTH_URL+'/getNewOTP',data);
// }
// export const ACCOUNT_CONFIRMATION = (data:any) => {
//     return API.post(AUTH_URL+'/accountConfirmation',data);
// }
// export const ADMIN_LOGIN = (data:any) => {
//     return API.post(AUTH_URL+'/adminLogin',data);
// }
// export const CHANGE_PASSWORD = (data:any) => {
//     return API.post(AUTH_URL+'/changePassword',data);
// }
// END Authenticated
// START USERS
export const PAYMENT = (data:any,cookie:any) => {
    return API.post(BASE_URL+'/cart/payment/'+cookie,data);
}
export const SHIPPING = (data:any,cookie:any) => {
    return API.post(BASE_URL+'/cart/shipping/'+cookie,data);
}
export const ADD_TO_FAVORITE = (data:any,id:any) => {
    return API.post(BASE_URL+'/add/to/favorite/'+id,data);
}
export const DELETE_FROM_CART = (cookie:any,id:any) => {
    return API.get(BASE_URL+'/cart/delete/'+cookie+'/'+id);
}
export const CARTS = (cookie:any) => {
    return API.get(BASE_URL+'/carts/'+cookie);
}
export const EXIST_CART = (data:any) => {
    return API.post(BASE_URL+'/exist/cart',data);
}
export const ADD_TO_CART = (data:any) => {
    return API.post(BASE_URL+'/add/cart',data);
}
export const CHECK_USER_AUHTONTICATION = (data:any) => {
    return API.post(AUTH_URL+'/getAuthenticated',data,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__to_ken")}});
}
export const HOME = () => {
    return API.get(BASE_URL+'/home');
}
export const MAGAZINE = () => {
    return API.get(BASE_URL+'/magazines');
}
export const MAGAZINE_SLUG = (slug:any) => {
    return API.get(BASE_URL+'/magazine/'+slug);
}
export const PRODUCT_SLUG = (slug:any) => {
    return API.get(BASE_URL+'/artwork/'+slug);
}
export const ABOUT = () => {
    return API.get(BASE_URL+'/about');
}
export const CATEGORIES_IN_PRODUCT_LIST = (id:any) => {
    return API.get(BASE_URL+'/category/product/list/'+id);
}
export const CATEGORY_SLUG = (slug:any) => {
    return API.get(BASE_URL+'/category/'+slug);
}
export const FAVORITES = (cookie:any) => {
    return API.get(BASE_URL+'/favorites/'+cookie);
}
export const EVENTS = () => {
    return API.get(BASE_URL+'/events');
}
export const EVENT_SLUG = (slug:any) => {
    return API.get(BASE_URL+'/event/'+slug);
}
export const REGISTERUSER = (data:any) => {
    return API.post(AUTH_URL+'/register/enduser',data);
}
export const LOGINUSER = (data:any) => {
    return API.post(AUTH_URL+'/login/enduser',data);
}
export const USERINFO = (data:any) => {
    return API.post(AUTH_URL+'/userInfo',data,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__to_ken")}});
}
export const USERINFO_UPDATE = (data:any) => {
    return API.post(AUTH_URL+'/userInfo/update',data,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__to_ken")}});
}
// export const SINGLE_USER = (id:number) => {
//     return API.get(BASE_URL+'/users/get/'+id,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// export const USERS_SEARCH = (DATA:any) => {
//     return API.post(BASE_URL+'/users/search/',DATA,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// export const USER_STORE = (DATA:any) => {
//     return API.post(BASE_URL+'/users/store',DATA,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// export const USER_UPDATE = (id:number,DATA:any) => {
//     return API.post(BASE_URL+'/users/update/'+id,DATA,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// export const USER_DELETE = (id:number) => {
//     return API.post(BASE_URL+'/users/delete/'+id,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// END USER

// START SLIDERS
// export const SLIDERS = () => {
//     return API.get(BASE_URL+'/slider',{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// export const SLIDER_STORE = (DATA:any) => {
//     return API.post(BASE_URL+'/slider/store',DATA,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// export const SLIDER_UPDATE = (id:number,DATA:any) => {
//     return API.post(BASE_URL+'/slider/update/'+id,DATA,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// export const SLIDER_DELETE = (id:number) => {
//     return API.post(BASE_URL+'/slider/delete/'+id,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// END SLIDERS
// START BLOGS
// export const BLOGS = () => {
//     return API.get(BASE_URL+'/blog',{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// export const BLOG_STORE = (DATA:any) => {
//     return API.post(BASE_URL+'/blog/store',DATA,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// export const BLOG_UPDATE = (id:number,DATA:any) => {
//     return API.post(BASE_URL+'/blog/update/'+id,DATA,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// export const BLOG_DELETE = (id:number) => {
//     return API.post(BASE_URL+'/blog/delete/'+id,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
//
// export const BLOG_CATEGORIES = () => {
//     return API.get(BASE_URL+'/blog/category/',{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// export const BLOG_CATEGORY_STORE = (DATA:any) => {
//     return API.post(BASE_URL+'/blog/category/store',DATA,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// export const BLOG_CATEGORY_UPDATE = (id:number,DATA:any) => {
//     return API.post(BASE_URL+'/blog/category/update/'+id,DATA,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// export const BLOG_CATEGORY_DELETE = (data:any) => {
//     return API.post(BASE_URL+'/blog/category/delete',data,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// // END BLOGS
//
// // START PRODUCTS
// export const PRODUCTS = () => {
//     return API.get(BASE_URL+'/product',{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// export const PRODUCT_STORE = (DATA:any) => {
//     return API.post(BASE_URL+'/product/store',DATA,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// export const PRODUCT_UPDATE = (id:number,DATA:any) => {
//     return API.post(BASE_URL+'/product/update/'+id,DATA,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// export const PRODUCT_DELETE = (id:number) => {
//     return API.post(BASE_URL+'/product/delete/'+id,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
//
// export const PRODUCT_CATEGORIES = () => {
//     return API.get(BASE_URL+'/product/category',{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// export const PRODUCT_CATEGORY_STORE = (DATA:any) => {
//     return API.post(BASE_URL+'/product/category/store',DATA,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// export const PRODUCT_CATEGORY_UPDATE = (id:number,DATA:any) => {
//     return API.post(BASE_URL+'/product/category/update/'+id,DATA,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// export const PRODUCT_CATEGORY_DELETE = (data:any) => {
//     return API.post(BASE_URL+'/product/category/delete',data,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
//
// export const PRODUCT_SIZES = () => {
//     return API.get(BASE_URL+'/product/sizes',{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// export const PRODUCT_SIZE_STORE = (DATA:any) => {
//     return API.post(BASE_URL+'/product/sizes/store',DATA,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// export const PRODUCT_SIZE_UPDATE = (id:number,DATA:any) => {
//     return API.post(BASE_URL+'/product/sizes/update/'+id,DATA,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// export const PRODUCT_SIZE_DELETE = (id:number) => {
//     return API.post(BASE_URL+'/product/size/delete/'+id,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
//
// export const PRODUCT_STYLES = () => {
//     return API.get(BASE_URL+'/product/styles',{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// export const PRODUCT_STYLE_STORE = (DATA:any) => {
//     return API.post(BASE_URL+'/product/styles/store',DATA,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// export const PRODUCT_STYLE_UPDATE = (id:number,DATA:any) => {
//     return API.post(BASE_URL+'/product/styles/update/'+id,DATA,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// export const PRODUCT_STYLE_DELETE = (id:number) => {
//     return API.post(BASE_URL+'/product/style/delete/'+id,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
//
// export const PRODUCT_SUBJECTS = () => {
//     return API.get(BASE_URL+'/product/subjects',{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// export const PRODUCT_SUBJECT_STORE = (DATA:any) => {
//     return API.post(BASE_URL+'/product/subjects/store',DATA,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// export const PRODUCT_SUBJECT_UPDATE = (id:number,DATA:any) => {
//     return API.post(BASE_URL+'/product/subjects/update/'+id,DATA,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// export const PRODUCT_SUBJECT_DELETE = (id:number) => {
//     return API.post(BASE_URL+'/product/subject/delete/'+id,{headers: {Authorization: 'Bearer ' + localStorage.getItem("__token")}});
// }
// END PRODUCTS
