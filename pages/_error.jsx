import React from "react";

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <div className="bgcolor">
          <style jsx>
            {
                `.bgcolor {
                    background: #494949;
                  }
                  .head404 {
                    width: 580px;
                    height: 234px;
                    margin: 50px auto 0 auto;
                    background: url(https://www.daixiaorui.com/Public/images/head404.png)
                      no-repeat;
                  }
                  
                  .txtbg404 {
                    width: 499px;
                    height: 169px;
                    margin: 10px auto 0 auto;
                    background: url(https://www.daixiaorui.com/Public/images/txtbg404.png)
                      no-repeat;
                  }
                  
                  .txtbg404 .txtbox {
                    width: 390px;
                    position: relative;
                    top: 30px;
                    left: 60px;
                    color: #eee;
                    font-size: 13px;
                  }
                  
                  .txtbg404 .txtbox p {
                    margin: 5px 0;
                    line-height: 18px;
                  }
                  
                  .txtbg404 .txtbox .paddingbox {
                    padding-top: 15px;
                  }
                  
                  .txtbg404 .txtbox p a {
                    color: #eee;
                    text-decoration: none;
                  }
                  
                  .txtbg404 .txtbox p a:hover {
                    color: #fc9d1d;
                    text-decoration: underline;
                  }
                  `
            }
          </style>
        <div className="head404"></div>
        <div className="txtbg404">
          <div className="txtbox">
              {this.props.statusCode}
            <p>对不起，您请求的页面不存在、或已被删除、或暂时不可用</p>

            <p className="paddingbox">请点击以下链接继续浏览网页</p>

            <p>
              - <a href="/">返回网站首页</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
