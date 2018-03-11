/**
 * Created by tangdu on 14-3-18.
 * App 配置信息
 */
var app = {
    email: 'tangdu0228yes@163.com',
    appport: 3000,
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'test',
    logger_path: "./bin/logs/error.log",
    logger_level: 'debug' //debug | error
};

global.Sys = new function () {
    var me = this;
    this.cont = {
        //菜单常量
        artideType: [
            { key: '首页', value: 'index' },
            {
                key: '编辑语言',
                child: [
                    { key: 'Java', value: 'java' }, { key: 'Python', value: 'phthon' }, { key: 'GoLang', value: 'gplang' },
                    { key: 'NodeJS', value: 'nodejs' }]
            },
            {
                key: 'Web前端',
                child: [
                    { key: 'JavaScript', value: 'javascript' }, { key: 'Html_Css', value: 'html_css' }, { key: 'Jquery', value: 'jquery' },
                    { key: 'ExtJS', value: 'extjs' }, { key: 'SmartClient', value: 'smartclient' }]
            },
            {
                key: '数据库',
                child: [
                    { key: 'Oracle', value: 'oracle' }, { key: 'MySQL', value: 'mysql' }, { key: 'NoSQL', value: 'nosql' }]
            },
            {
                key: '开发平台',
                child: [
                    { key: 'Spring', value: 'spring' }, { key: 'Hibernate', value: 'hibernate' }, { key: 'MyBatis', value: 'mybatis' },
                    { key: 'Servlet', value: 'servlet' }, { key: 'WebService', value: 'webservice' }, { key: 'Linux', value: 'linux' },
                    { key: 'Weblogic', value: 'weblogic' }, { key: 'Maven', value: 'maven' }]
            },
            { key: '编程感慨', value: 'bcgw' }
        ],
        adminUrls: [{
            key: '系统管理',
            child: [
                { key: '用户管理', value: 'admin/usermanager' },
                { key: '文章管理', value: 'admin/articlemanager' }]
        }],
        getArticleType: function () {
            var temp = [];
            me.cont.artideType.forEach(function (item) {
                if (item.value && item.value != 'index') {
                    temp.push(item);
                }
                if (item.child && item.child.length > 0) {//支持2级。无迭代。
                    item.child.forEach(function (item2) {
                        temp.push(item2);
                    });
                }
            });
            return temp;
        },
        siteName: "IT人生"
    },
        //权限认证
        this.permissionUrls = [
            "/push_article", "/save_article",
            "/add_userattention", "edit_article",
            "/add_artideattention", "/add_comment",
            "/user_up_artide", "/user/info", "/remove_article", "/remove_comment"
        ]
    //管理员权限
    this.adminUrls = [
        "/admin/usermanager", "/admin/articlemanager"
    ]
};
global.logger = require("./utils/logger.js");
global.moment = require('moment');//日期函数全局访问
global.moment.locale('zh-cn');
global.DB = require("./utils/dbutil.js").Instance();

///定义实体
DB.define({ key: 'User', name: 't_ef_user', fields: ['id_', 'username', 'password', 'sex', 'updated', 'status', 'role', 'email', 'integral', 'desc', 'lastlogintime', 'registertime', 'lastloginip'] });
DB.define({ key: 'Article', name: 't_ef_article', fields: ['id_', 'digest', 'title', 'type', 'created', 'updated', 'content', 'order', 'status', 'userid', 'username', 'commentsnum', 'allowcomment', 'readcount', 'keyword', 'istop'] });
DB.define({ key: 'UserAttention', name: 't_ef_user_attention', fields: ['id_', 'userid', 'relid', 'type', 'operationtime'] });
DB.define({ key: 'UserComment', name: 't_ef_user_comment', fields: ['id_', 'userid', 'artideid', 'comment', 'commenttime', 'commendid'] });
DB.define({ key: 'UserReviews', name: 't_ef_user_reviews', fields: ['id_', 'userid', 'relid', 'type', 'flag', 'operationtime'] });


module.exports = app;