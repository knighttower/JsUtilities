// Knighttower BlockUI v1.0.0
// =========================================
// --> Vendors config
// --------------------------
/**
// -----------------------------------------
// BlockUi defaults
$.blockUI.defaults = {
    loader: false,
    tag: 'div',
    message: '<h4>Please wait...</h4>',
    title: null,
    draggable: true,
    css: {
        padding: 0,
        margin: 0,
        width: '100vw',
        height: '100vh',
        top: '0',
        left: '0',
        textAlign: 'center',
        color: '#000',
        border: '1px dashed #000',
        backgroundColor: 'transparent',
        cursor: 'wait',
        display: 'flex',
    },
    overlayCSS: {
        backgroundColor: '#000',
        opacity: 0.6,
        cursor: 'default',
    },
    cursorReset: 'default',
    iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank',
    forceIframe: false,
    baseZ: 9000,

    allowBodyStretch: true,
    bindEvents: true,
    constrainTabKey: true,
    fadeIn: 200,
    fadeOut: 400,
    timeout: 0,
    showOverlay: true,
    focusInput: true,
    focusableElements: ':input:enabled:visible',
    onBlock: null,
    onUnblock: null,
    onOverlayClick: null,
    quirksmodeOffsetHack: 4,
    blockMsgClass: 'x-block-ui__message',
    ignoreIfBlocked: false,
};
 */
// Example of extending the defaults
/**
    $.extend(true, $.blockUI.defaults, {
    loader: '<div class="loader__top"><div class="loader"></div></div>',
    message: 'Processing, please wait...',
    tag: 'h5',
    css: {
        border: 'none',
        backgroundColor: 'none',
        color: '#888',
        // display: 'flex',
    },
    overlayCSS: {
        backgroundColor: '#000',
        opacity: 0.8,
    },
    baseZ: 9999,
}); */

/**
 * Installs the blocking UI on the given element.
 * @usage
 * --> block the whole page
 * $.blockUI.on('Please wait...');
 * $.blockUI.on({ message: 'Please wait...' });
 * $.blockUI.on({ message: 'Please wait...', loader: '<div class="loader"></div>' });
 * $.blockUI.on({ message: '<h4>Please wait...</h4>', title: 'Loading' });
 * $.blockUI.off();
 * --> block an element
 * $(element).block();
 * $(element).block({ message: 'Please wait...' });
 * $(element).unblock();
 */
const _blockUI = (function ($, undefined$1) {

    $.fn._fadeIn = $.fn.fadeIn;
    const noOp = $.noop || function () {};

    // -----------------------------------------
    /**
     * Checks if the value is a plain object.
     *
     * @param {any} value The value to check.
     * @returns {boolean} True if the value is a plain object, false otherwise.
     */
    const isPlainObject = (value) =>
        value && typeof value === 'object' && value.constructor === Object;

    /**
     * Merges two or more objects into a single new object. Arrays and other types are overwritten.
     *
     * @param {object} target The target object.
     * @param {...object} sources The source objects.
     * @returns {object} A new merged object.
     */
    const merge = (target, ...sources) => {
        return sources.reduce(
            (acc, source) => {
                if (isPlainObject(source)) {
                    Object.entries(source).forEach(([key, value]) => {
                        acc[key] =
                            isPlainObject(value) && isPlainObject(acc[key])
                                ? merge(acc[key], value)
                                : value;
                    });
                }
                return acc;
            },
            { ...target }
        );
    };

    $.blockUI = $.blockui = {
        on: function (message, options = {}) {
            if (isPlainObject(message)) {
                options = message;
                message = null;
            }
            install(window, { message, ...options });
        },
        off: function (options = {}) {
            remove(window, options);
        },
        defaults: {
            loader: false,
            tag: 'div',
            message: '<h4>Please wait...</h4>',
            title: null,
            draggable: true,
            css: {
                padding: 0,
                margin: 0,
                width: '100vw',
                height: '100vh',
                top: '0',
                left: '0',
                textAlign: 'center',
                color: '#000',
                border: '1px dashed #000',
                backgroundColor: 'transparent',
                cursor: 'wait',
                display: 'flex',
            },
            overlayCSS: {
                backgroundColor: '#000',
                opacity: 0.6,
                cursor: 'default',
            },
            cursorReset: 'default',
            iframeSrc: /^https/i.test(window.location.href || '')
                ? 'javascript:false'
                : 'about:blank',
            forceIframe: false,
            baseZ: 9000,

            allowBodyStretch: true,
            bindEvents: true,
            constrainTabKey: true,
            fadeIn: 200,
            fadeOut: 400,
            timeout: 0,
            showOverlay: true,
            focusInput: true,
            focusableElements: ':input:enabled:visible',
            onBlock: null,
            onUnblock: null,
            onOverlayClick: null,
            quirksmodeOffsetHack: 4,
            blockMsgClass: 'x-block-ui__message',
            ignoreIfBlocked: false,
        },
    };

    $.fn.block = function (opts) {
        if (this[0] === window) {
            $.blockUI.on(opts);
            return this;
        }
        const fullOpts = merge($.blockUI.defaults, opts || {});
        this.each(function () {
            const $el = $(this);
            if (fullOpts.ignoreIfBlocked && $el.data('x-block-ui.isBlocked')) return;
            $el.unblock({ fadeOut: 0 });
            if ($.css(this, 'position') === 'static') {
                this.style.position = 'relative';
                $el.data('x-block-ui.static', true);
            }
            install(this, fullOpts);
        });

        return this;
    };

    $.fn.unblock = function (opts) {
        if (this[0] === window) {
            $.blockUI.off(opts);
            return this;
        }
        return this.each(function () {
            remove(this, opts);
        });
    };

    let pageBlock = null;
    let pageBlockEls = [];

    function install(el, opts) {
        $.blockUI.isOn = true;
        opts = merge($.blockUI.defaults, opts);
        const full = el === window;
        const textBox = [
            '<',
            opts.tag,
            ' class="block-ui-message-box" style="color: #FFF;">',
            opts.message ?? $.blockUI.defaults.message,
            '</',
            opts.tag,
            '>',
        ].join('');
        let msg = (typeof opts.loader === 'string' ? opts.loader : '') + textBox;

        if (opts.ignoreIfBlocked && $(el).data('x-block-ui.isBlocked')) return;

        opts.overlayCSS = { ...$.blockUI.defaults.overlayCSS, ...(opts.overlayCSS || {}) };

        if (opts.onOverlayClick) opts.overlayCSS.cursor = 'pointer';

        if (msg && typeof msg !== 'string' && (msg.parentNode || msg.jquery)) {
            const node = msg.jquery ? msg[0] : msg;
            const data = {};
            $(el).data('x-block-ui.history', data);
            data.el = node;
            data.parent = node.parentNode;
            data.display = node.style.display;
            data.position = node.style.position;
            if (data.parent) data.parent.removeChild(node);
        }

        $(el).data('x-block-ui.onUnblock', opts.onUnblock);
        let z = opts.baseZ;

        let lyr1, lyr2, lyr3;
        if (opts.forceIframe) {
            // prettier-ignore
            lyr1 = $(
                `<iframe class="x-block-ui" style="z-index:${z++};display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="${opts.iframeSrc}"></iframe>`
            );
        }
        // prettier-ignore
        lyr2 = $(
            `<div class="x-block-ui x-block-ui__overlay" style="z-index:${z++};display:none;border:none;margin:0;padding:0;width:100vw;height:100vh;top:0;left:0"></div>`
        );
        // prettier-ignore
        lyr3 = $(
            `<div class="x-block-ui ${opts.blockMsgClass} ${full ? 'block-ui__page' : 'block-ui__element'}" style="z-index:${z + 10};display:none;position:${full ? 'fixed' : 'absolute'};${full ? 'flex-direction: column;align-items: center;justify-content: center;' : ''}"></div>`
        );

        lyr2.css(opts.overlayCSS);
        lyr2.css('position', full ? 'fixed' : 'absolute');
        if (opts.forceIframe) lyr1.css('opacity', 0.0);

        const layers = [lyr1, lyr2, lyr3];
        const $par = full ? $('body') : $(el);
        layers.forEach((layer) => layer && layer.appendTo($par));

        if (msg) {
            lyr3.css({ ...$.blockUI.defaults.css, ...(opts.css || {}) });
            lyr3.append(msg);

            if (msg.jquery || msg.nodeType) $(msg).show();
        }

        if (opts.forceIframe && opts.showOverlay) lyr1.show();
        if (opts.fadeIn) {
            const cb = opts.onBlock || noOp;
            const cb1 = opts.showOverlay && !msg ? cb : noOp;
            const cb2 = msg ? cb : noOp;
            if (opts.showOverlay) lyr2._fadeIn(opts.fadeIn, cb1);
            if (msg) lyr3._fadeIn(opts.fadeIn, cb2);
        } else {
            if (opts.showOverlay) lyr2.show();
            if (msg) lyr3.show();
            if (opts.onBlock) opts.onBlock.bind(lyr3)();
        }

        bind(1, el, opts);

        if (full) {
            pageBlock = lyr3[0];
            pageBlockEls = $(opts.focusableElements, pageBlock);
            if (opts.focusInput) setTimeout(() => focus(false), 20);
        }

        if (opts.timeout) {
            const to = setTimeout(() => {
                if (full) {
                    $.blockUI.off(opts);
                } else {
                    $(el).unblock(opts);
                }
            }, opts.timeout);
            $(el).data('x-block-ui.timeout', to);
        }
    }

    function remove(el, opts) {
        $.blockUI.isOn = false;
        const full = el === window;
        const $el = $(el);
        const data = $el.data('x-block-ui.history');
        const to = $el.data('x-block-ui.timeout');

        if (to) {
            clearTimeout(to);
            $el.removeData('x-block-ui.timeout');
        }

        opts = merge($.blockUI.defaults, opts);
        bind(0, el, opts);

        // Prefer a single fade/hide pass
        const els = full ? $('body').children('.x-block-ui') : $el.children('.x-block-ui');

        // Batch fade-out if required
        if (opts.fadeOut) {
            // Single pass fade-out
            els.stop().fadeOut(opts.fadeOut, () => {
                batchRemove(els, data, opts, el);
            });
        } else {
            // Single pass hide
            els.hide();
            batchRemove(els, data, opts, el);
        }
    }

    function batchRemove(els, data, opts, el) {
        // Batch removal from DOM
        els.each(function () {
            if (this.parentNode) this.parentNode.removeChild(this);
        });

        // Restore any element references and run onUnblock callback
        const $el = $(el);
        if (data?.el) {
            const { el: node, display, position, parent } = data;
            node.style.display = display;
            node.style.position = position;
            if (parent) parent.appendChild(node);
            $el.removeData('x-block-ui.history');
        }

        if (typeof opts.onUnblock === 'function') {
            opts.onUnblock(el, opts);
        }
    }

    function bind(isBlocking, el, opts) {
        const isFullPage = el === window;
        const $el = $(el);

        if (
            !isBlocking &&
            ((isFullPage && !pageBlock) || (!isFullPage && !$el.data('x-block-ui.isBlocked')))
        ) {
            return;
        }

        $el.data('x-block-ui.isBlocked', isBlocking);

        if (!isFullPage || !opts.bindEvents || (isBlocking && !opts.showOverlay)) {
            return;
        }

        const events = 'mousedown mouseup keydown keypress keyup touchstart touchend touchmove';
        $(document)[isBlocking ? 'on' : 'off'](events, opts, handler);
    }

    function handler(e) {
        if (e.type === 'keydown' && e.keyCode === 9) {
            if (pageBlock && e.data.constrainTabKey) {
                const els = pageBlockEls;
                const fwd = !e.shiftKey && e.target === els[els.length - 1];
                const back = e.shiftKey && e.target === els[0];
                if (fwd || back) {
                    setTimeout(() => focus(back), 10);
                    return false;
                }
            }
        }
        const opts = e.data;

        const target = $(e.target);
        if (target.hasClass('x-block-ui__overlay') && opts.onOverlayClick) {
            opts.onOverlayClick(e);
        }

        if (target.parents(`div.${opts.blockMsgClass}`).length > 0) return true;
        return target.parents().children().filter('div.x-block-ui').length === 0;
    }

    function focus(back) {
        if (!pageBlockEls) return;
        const e = pageBlockEls[back === true ? pageBlockEls.length - 1 : 0];
        if (e) e.focus();
    }
})(window.$);

export { _blockUI as blockui, _blockUI as default };
