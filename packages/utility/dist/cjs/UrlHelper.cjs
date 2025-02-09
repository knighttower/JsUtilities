'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * URL Object Class with public methods for URL functions and manipulation.
 * @param {Object} __request - optional: The request object from the server.
 *
 * @module urlHelper
 */
const urlHelper = (__request) => {
    /**
     * The window object from the global scope.
     * @type {Window}
     */
    const win = typeof window !== 'undefined' ? window : undefined;

    /**
     * The document object from the global scope.
     * @type {Document}
     */
    const doc = typeof document !== 'undefined' ? document : {};

    const LOCATION = win?.location ?? __request?.uri;
    let hash = LOCATION?.hash;
    let HREF = LOCATION?.href;
    const SEARCH = LOCATION?.search;

    /**
     * Protocol part of the URL, without the colon.
     * @type {string}
     */
    const PROTOCOL = LOCATION?.protocol?.replace(':', '');

    /**
     * Host part of the URL, including hostname and port.
     * @type {string}
     */
    const HOST = LOCATION?.host;

    /**
     * Pathname part of the URL.
     * @type {string}
     */
    const PATH = LOCATION?.pathname;

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

        const params = new URLSearchParams(SEARCH);
        const vars = {};

        for (const [key, value] of params.entries()) {
            vars[key] = value;
        }

        cachedURLParams = {
            params,
            queryString: params.toString(),
            search: SEARCH,
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
    return {
        /**
         * Retrieves the current page name (last part of the URL).
         * @return {string} The current page name or 'index' if none is found.
         */
        getPage: () => {
            const cURL = HREF?.toLowerCase();
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
        getQueryString: () => parseURLParams().queryString,

        /**
         * Retrieves the URL's query parameters as an object.
         * @return {Object} An object containing the current query parameters.
         * @alias getParams().collection
         * @see {@link getParams}
         * @see {@link getParams().collection}
         */
        getQuery: (key) => (key ? parseURLParams().collection[key] : parseURLParams().collection),

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
        getHash: () => hash?.substring(1),

        /**
         * Sets the hash part of the URL.
         * @param {string} h The hash to set.
         */
        setHash: (h) => {
            hash = h;
        },

        /**
         * Removes the hash part of the URL.
         */
        deleteHash: () => {
            history.pushState('', doc.title, PATH + SEARCH);
        },

        /**
         * Navigates to a specified URL.
         * @param {string} url The URL to navigate to.
         * @return {boolean} Always returns false to prevent default browser behavior.
         */
        goTo: (url) => {
            LOCATION.href = url;
            return false;
        },

        /**
         * Opens a URL in a new window or tab.
         * @param {string} url The URL to open.
         * @param {string} [name='_blank'] The target window name.
         * @param {string} [params=''] Parameters for the new window.
         * @return {Window} The window object of the newly opened window.
         */
        open: (url, name = '_blank', params = '') => win?.open(url, name, params),

        /**
         * Sets up a listener to execute a callback function when the URL hash changes.
         * @param {Function} callback The function to call when the hash changes.
         */
        onChange: (callback) => {
            if (typeof callback === 'function') {
                win?.addEventListener('hashchange', callback);
            }
        },

        // Exposing constants for easy access
        fullUrl: FULL_URL,
        siteUrl: SITE_URL,
        protocol: PROTOCOL,
        host: HOST,
        path: PATH,
        readUrl: HREF,
    };
};

exports.default = urlHelper;
exports.urlHelper = urlHelper;
