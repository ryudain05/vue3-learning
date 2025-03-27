const objPlugins = {
  install(app, options) {
    console.log('objPlugins app', app);
    console.log('objPlugins options', options);

    // app.component() 전역 컴포넌트
    // app.config.globalProperties
    //app.directive 커스텀 디렉티브
    // app.provide 리소스
  },
};

export default objPlugins;
