// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"blocks/about/__caption/about__caption.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/about/__card/about__card.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/about/__card-description/about__card-description.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/about/__card-image/about__card-image.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/about/__card-title/about__card-title.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/about/__cards-list/about__cards-list.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/about/about.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./__caption/about__caption.css":"blocks/about/__caption/about__caption.css","./__card/about__card.css":"blocks/about/__card/about__card.css","./__card-description/about__card-description.css":"blocks/about/__card-description/about__card-description.css","./__card-image/about__card-image.css":"blocks/about/__card-image/about__card-image.css","./__card-title/about__card-title.css":"blocks/about/__card-title/about__card-title.css","./__cards-list/about__cards-list.css":"blocks/about/__cards-list/about__cards-list.css","_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/button/_black/button_black.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/button/_white/button_white.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/button/button.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./_black/button_black.css":"blocks/button/_black/button_black.css","./_white/button_white.css":"blocks/button/_white/button_white.css","_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/contact/__form/contact__form.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/contact/__form-button/contact__form-button.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/contact/__info/contact__info.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/contact/__input/contact__input.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/contact/__input-block/contact__input-block.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/contact/__input-block/_margin/contact__input-block_margin.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/contact/__input-caption/contact__input-caption.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/contact/__input-email/contact__input-email.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/contact/__input-message/contact__input-message.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/contact/__input-name/contact__input-name.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/contact/__link/contact__link.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/contact/__link-social-icon/contact__link-social-icon.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/contact/__social-icon/contact__social-icon.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/contact/__social-icons-blocks/contact__social-icons-blocks.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/contact/__text/contact__text.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/contact/__text/_bold/contact__text_bold.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/contact/__wrapper/contact__wrapper.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/contact/contact.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./__form/contact__form.css":"blocks/contact/__form/contact__form.css","./__form-button/contact__form-button.css":"blocks/contact/__form-button/contact__form-button.css","./__info/contact__info.css":"blocks/contact/__info/contact__info.css","./__input/contact__input.css":"blocks/contact/__input/contact__input.css","./__input-block/contact__input-block.css":"blocks/contact/__input-block/contact__input-block.css","./__input-block/_margin/contact__input-block_margin.css":"blocks/contact/__input-block/_margin/contact__input-block_margin.css","./__input-caption/contact__input-caption.css":"blocks/contact/__input-caption/contact__input-caption.css","./__input-email/contact__input-email.css":"blocks/contact/__input-email/contact__input-email.css","./__input-message/contact__input-message.css":"blocks/contact/__input-message/contact__input-message.css","./__input-name/contact__input-name.css":"blocks/contact/__input-name/contact__input-name.css","./__link/contact__link.css":"blocks/contact/__link/contact__link.css","./__link-social-icon/contact__link-social-icon.css":"blocks/contact/__link-social-icon/contact__link-social-icon.css","./__social-icon/contact__social-icon.css":"blocks/contact/__social-icon/contact__social-icon.css","./__social-icons-blocks/contact__social-icons-blocks.css":"blocks/contact/__social-icons-blocks/contact__social-icons-blocks.css","./__text/contact__text.css":"blocks/contact/__text/contact__text.css","./__text/_bold/contact__text_bold.css":"blocks/contact/__text/_bold/contact__text_bold.css","./__wrapper/contact__wrapper.css":"blocks/contact/__wrapper/contact__wrapper.css","_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/footer/__copyright/footer__copyright.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/footer/__item/footer__item.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/footer/__link/footer__link.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/footer/__list/footer__list.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/footer/__logo/footer__logo.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/footer/footer.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./__copyright/footer__copyright.css":"blocks/footer/__copyright/footer__copyright.css","./__item/footer__item.css":"blocks/footer/__item/footer__item.css","./__link/footer__link.css":"blocks/footer/__link/footer__link.css","./__list/footer__list.css":"blocks/footer/__list/footer__list.css","./__logo/footer__logo.css":"blocks/footer/__logo/footer__logo.css","_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/header/__arrow/header__arrow.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/header/__caption/header__caption.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/header/__logo/header__logo.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/header/header.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./__arrow/header__arrow.css":"blocks/header/__arrow/header__arrow.css","./__caption/header__caption.css":"blocks/header/__caption/header__caption.css","./__logo/header__logo.css":"blocks/header/__logo/header__logo.css","./..\\..\\images\\background\\start-page.jpg":[["start-page.0fd96a28.jpg","images/background/start-page.jpg"],"images/background/start-page.jpg"],"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/menu/__item/menu__item.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/menu/__link/menu__link.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/menu/__link/_is-active/menu__link_is-active.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/menu/__list/menu__list.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/menu/__logo/menu__logo.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/menu/__mobile-button/menu__mobile-button.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/menu/__mobile-checkbox/menu__mobile-checkbox.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/menu/__mobile-icon/menu__mobile-icon.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/menu/__wrapper/menu__wrapper.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/menu/menu.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./__item/menu__item.css":"blocks/menu/__item/menu__item.css","./__link/menu__link.css":"blocks/menu/__link/menu__link.css","./__link/_is-active/menu__link_is-active.css":"blocks/menu/__link/_is-active/menu__link_is-active.css","./__list/menu__list.css":"blocks/menu/__list/menu__list.css","./__logo/menu__logo.css":"blocks/menu/__logo/menu__logo.css","./__mobile-button/menu__mobile-button.css":"blocks/menu/__mobile-button/menu__mobile-button.css","./__mobile-checkbox/menu__mobile-checkbox.css":"blocks/menu/__mobile-checkbox/menu__mobile-checkbox.css","./__mobile-icon/menu__mobile-icon.css":"blocks/menu/__mobile-icon/menu__mobile-icon.css","./__wrapper/menu__wrapper.css":"blocks/menu/__wrapper/menu__wrapper.css","_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/page/page.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/partners/__logo/partners__logo.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/partners/__logos-block/partners__logos-block.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/partners/partners.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./__logo/partners__logo.css":"blocks/partners/__logo/partners__logo.css","./__logos-block/partners__logos-block.css":"blocks/partners/__logos-block/partners__logos-block.css","./..\\..\\images\\background\\partners.jpg":[["partners.96f8e85e.jpg","images/background/partners.jpg"],"images/background/partners.jpg"],"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/portfolio/__image/portfolio__image.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/portfolio/__images-block/portfolio__images-block.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/portfolio/portfolio.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./__image/portfolio__image.css":"blocks/portfolio/__image/portfolio__image.css","./__images-block/portfolio__images-block.css":"blocks/portfolio/__images-block/portfolio__images-block.css","_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/title/_size/title_size_l.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/title/_size/_black/title_size_l_black.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/title/_size/_white/title_size_l_white.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/title/_size/title_size_m.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"blocks/title/title.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./_size/title_size_l.css":"blocks/title/_size/title_size_l.css","./_size/_black/title_size_l_black.css":"blocks/title/_size/_black/title_size_l_black.css","./_size/_white/title_size_l_white.css":"blocks/title/_size/_white/title_size_l_white.css","./_size/title_size_m.css":"blocks/title/_size/title_size_m.css","_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"vendor/normalize.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"vendor/fonts.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./fonts\\SourceSansPro-Light.otf.woff2":[["SourceSansPro-Light.otf.e0828db0.woff2","vendor/fonts/SourceSansPro-Light.otf.woff2"],"vendor/fonts/SourceSansPro-Light.otf.woff2"],"./fonts\\SourceSansPro-Light.otf.woff":[["SourceSansPro-Light.otf.5d268e86.woff","vendor/fonts/SourceSansPro-Light.otf.woff"],"vendor/fonts/SourceSansPro-Light.otf.woff"],"./fonts\\SourceSansPro-Regular.otf.woff2":[["SourceSansPro-Regular.otf.f8999eae.woff2","vendor/fonts/SourceSansPro-Regular.otf.woff2"],"vendor/fonts/SourceSansPro-Regular.otf.woff2"],"./fonts\\SourceSansPro-Regular.otf.woff":[["SourceSansPro-Regular.otf.938c3206.woff","vendor/fonts/SourceSansPro-Regular.otf.woff"],"vendor/fonts/SourceSansPro-Regular.otf.woff"],"./fonts\\SourceSansPro-Bold.otf.woff2":[["SourceSansPro-Bold.otf.fc7ffc12.woff2","vendor/fonts/SourceSansPro-Bold.otf.woff2"],"vendor/fonts/SourceSansPro-Bold.otf.woff2"],"./fonts\\SourceSansPro-Bold.otf.woff":[["SourceSansPro-Bold.otf.78a0c3af.woff","vendor/fonts/SourceSansPro-Bold.otf.woff"],"vendor/fonts/SourceSansPro-Bold.otf.woff"],"./fonts\\Lato-Light.woff2":[["Lato-Light.fed57c65.woff2","vendor/fonts/Lato-Light.woff2"],"vendor/fonts/Lato-Light.woff2"],"./fonts\\Lato-Light.woff":[["Lato-Light.09950366.woff","vendor/fonts/Lato-Light.woff"],"vendor/fonts/Lato-Light.woff"],"./fonts\\Lato-Regular.woff2":[["Lato-Regular.046320bb.woff2","vendor/fonts/Lato-Regular.woff2"],"vendor/fonts/Lato-Regular.woff2"],"./fonts\\Lato-Regular.woff":[["Lato-Regular.32d75472.woff","vendor/fonts/Lato-Regular.woff"],"vendor/fonts/Lato-Regular.woff"],"./fonts\\Lato-Bold.woff2":[["Lato-Bold.4fe4cb99.woff2","vendor/fonts/Lato-Bold.woff2"],"vendor/fonts/Lato-Bold.woff2"],"./fonts\\Lato-Bold.woff":[["Lato-Bold.6781f7fa.woff","vendor/fonts/Lato-Bold.woff"],"vendor/fonts/Lato-Bold.woff"],"_css_loader":"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58092" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/vasilich/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/pages.16a54860.js.map