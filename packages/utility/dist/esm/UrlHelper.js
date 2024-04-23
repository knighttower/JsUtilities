var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var UrlHelper$1 = {exports: {}};

/**
 * URL Object Class with public methods for URL functions and manipulation.
 *
 * @module urlHelper
 */

(function (module) {
	(function (global, factory) {
	    if (module.exports) {
	        // Node.js or CommonJS
	        module.exports = factory;
	    } else {
	        // Browser globals (global is window)
	        global.UrlHelper = factory();
	    }
	})(typeof window !== 'undefined' ? window : commonjsGlobal, function () {

	    /**
	     * The window object from the global scope.
	     * @type {Window}
	     */
	    const win = typeof window !== 'undefined' ? window : this;

	    /**
	     * The document object from the global scope.
	     * @type {Document}
	     */
	    const doc = typeof document !== 'undefined' ? document : {};

	    /**
	     * Protocol part of the URL, without the colon.
	     * @type {string}
	     */
	    const PROTOCOL = win.location.protocol.replace(':', '');

	    /**
	     * Host part of the URL, including hostname and port.
	     * @type {string}
	     */
	    const HOST = win.location.host;

	    /**
	     * Pathname part of the URL.
	     * @type {string}
	     */
	    const PATH = win.location.pathname;

	    /**
	     * Base site URL, constructed from protocol and host.
	     * @type {string}
	     */
	    const SITE_URL = `${PROTOCOL}://${HOST}`;

	    /**
	     * Full URL constructed from protocol, host, and path.
	     * @type {string}
	     */
	    const FULL_URL = `${SITE_URL}${PATH}`;

	    /**
	     * Parses the current URL parameters and caches them for future use.
	     * @returns {Object} Contains various representations of URL parameters.
	     * @private
	     */
	    const parseURLParams = () => {
	        if (cachedURLParams) {
	            return cachedURLParams;
	        }

	        const params = new URLSearchParams(win.location.search);
	        const vars = {};

	        for (const [key, value] of params.entries()) {
	            vars[key] = value;
	        }

	        cachedURLParams = {
	            params,
	            queryString: params.toString(),
	            search: win.location.search,
	            keys: Array.from(params.keys()),
	            values: Array.from(params.values()),
	            collection: vars,
	        };

	        return cachedURLParams;
	    };

	    /**
	     * Cached URL parameters for efficient access.
	     * @type {Object|null}
	     */
	    let cachedURLParams = null;

	    /**
	     * Public methods and properties for URL manipulation and information.
	     * @namespace
	     */
	    const urlHelper = {
	        /**
	         * Retrieves the current page name (last part of the URL).
	         * @return {string} The current page name or 'index' if none is found.
	         */
	        getPage: () => {
	            const cURL = win.location.href.toLowerCase();
	            const page = cURL.split('/').pop().split('.')[0];
	            return page || 'index';
	        },

	        /**
	         * Retrieves parsed URL parameters.
	         * @return {Object} An object with methods and properties to interact with URL parameters.
	         */
	        getParams: () => parseURLParams(),

	        /**
	         * Retrieves the URL's query string.
	         * @return {string} The query string of the current URL.
	         */
	        getQuery: () => parseURLParams().queryString,

	        /**
	         * Adds new parameters to the current URL's query string.
	         * @param {Object} query The new parameters to add.
	         * @return {Object} An object containing the updated query parameters and string.
	         */
	        addToQuery: (query) => {
	            const currentQuery = parseURLParams().collection;
	            Object.assign(currentQuery, query);
	            const qString = Object.entries(currentQuery)
	                .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
	                .join('&');

	            return {
	                collection: currentQuery,
	                queryString: qString,
	            };
	        },

	        /**
	         * Retrieves the hash part of the URL, without the '#' symbol.
	         * @return {string} The current hash value.
	         */
	        getHash: () => win.location.hash.substring(1),

	        /**
	         * Sets the hash part of the URL.
	         * @param {string} h The hash to set.
	         */
	        setHash: (h) => {
	            win.location.hash = h;
	        },

	        /**
	         * Removes the hash part of the URL.
	         */
	        deleteHash: () => {
	            history.pushState('', doc.title, win.location.pathname + win.location.search);
	        },

	        /**
	         * Navigates to a specified URL.
	         * @param {string} url The URL to navigate to.
	         * @return {boolean} Always returns false to prevent default browser behavior.
	         */
	        goTo: (url) => {
	            win.location.href = url;
	            return false;
	        },

	        /**
	         * Opens a URL in a new window or tab.
	         * @param {string} url The URL to open.
	         * @param {string} [name='_blank'] The target window name.
	         * @param {string} [params=''] Parameters for the new window.
	         * @return {Window} The window object of the newly opened window.
	         */
	        open: (url, name = '_blank', params = '') => win.open(url, name, params),

	        /**
	         * Sets up a listener to execute a callback function when the URL hash changes.
	         * @param {Function} callback The function to call when the hash changes.
	         */
	        onChange: (callback) => {
	            if (typeof callback === 'function') {
	                win.addEventListener('hashchange', callback);
	            }
	        },

	        // Exposing constants for easy access
	        fullUrl: FULL_URL,
	        siteUrl: SITE_URL,
	        protocol: PROTOCOL,
	        host: HOST,
	        path: PATH,
	        readUrl: win.location.href,
	    };

	    return urlHelper;
	}); 
} (UrlHelper$1));

var UrlHelperExports = UrlHelper$1.exports;
var UrlHelper = /*@__PURE__*/getDefaultExportFromCjs(UrlHelperExports);

export { UrlHelper as default };
