import React, { useState, useEffect} from "react";
import AppRoutes from '@/routes/index'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "@/reducers/index";
import intl from "react-intl-universal";
import EN from "@/locales/en.json";
import CH from "@/locales/zh.json";
import getLanguage from "@/utils/getLanguage";

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
const lang = getLanguage();

function App() {
  const [initDone, setInitDone] = useState(false);
  useEffect(() => {
    const locales = {
      en: EN,
      "zh-CN": CH,
    };

    intl
      .init({
        warningHandler: (msg, detail) => {
          //注意该函数开发环境有，打包后就没有了
          console.log(`${msg} ${detail}`);
        },
        currentLocale: lang,
        locales,
      })
      .then((res) => {
        setInitDone(true);
      });
  }, []);

  if (!initDone) return null;
  return (
    <Provider store={store}>
     <AppRoutes />
   </Provider>
  );
}

export default App;