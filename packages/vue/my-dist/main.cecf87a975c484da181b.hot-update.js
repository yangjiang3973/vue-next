webpackHotUpdate('main', {
  /***/ './playground/main.js':
    /*!****************************!*\
  !*** ./playground/main.js ***!
  \****************************/
    /*! no exports provided */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! vue */ './dist/vue.runtime.esm-bundler.js'
      )
      /* harmony import */ var _dist_vue_runtime_esm_browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../dist/vue.runtime.esm-browser.js */ './dist/vue.runtime.esm-browser.js'
      )

      var app = Object(
        _dist_vue_runtime_esm_browser_js__WEBPACK_IMPORTED_MODULE_1__[
          'createApp'
        ]
      )({
        data: function data() {
          return {
            title: 'hello'
          }
        },
        render: function render() {
          return Object(vue__WEBPACK_IMPORTED_MODULE_0__['createVNode'])(
            'span',
            null,
            [this.title]
          )
        }
      }) // do some necessary preparations

      app.mount('#app')

      /***/
    }
})
//# sourceMappingURL=main.cecf87a975c484da181b.hot-update.js.map
