import focus from '@/directives/focus';
import color from '@/directives/color';
export default {
  install(app) {
    app.direction('focus', focus);
    app.direction('color', color);
  },
};
