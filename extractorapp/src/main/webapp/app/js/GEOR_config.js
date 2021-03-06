/*
 * Copyright (C) 2009-2016 by the geOrchestra PSC
 *
 * This file is part of geOrchestra.
 *
 * geOrchestra is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free
 * Software Foundation, either version 3 of the License, or (at your option)
 * any later version.
 *
 * geOrchestra is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for
 * more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * geOrchestra.  If not, see <http://www.gnu.org/licenses/>.
 */

Ext.namespace("GEOR");

GEOR.config = (function() {

    /**
     * Internationalization
     */
    var tr = OpenLayers.i18n;

    /**
     * Property: vectorAbility
     * {Number} Integer representing
     *  browser ability to handle features
     */
    var vectorAbility = null;

    /**
     * Property: urlObj.
     * {Object} The URL object as returned by
     * OpenLayers.Util.createUrlObject().
     */
    var urlObj = null;

    /**
     * Method: getUrlObj
     * Get the URL object corresponding to the URL passed as a
     * parameter.
     *
     * Parameters:
     * url - {String}
     *
     * Returns:
     * {Object} The URL object.
     */
    var getUrlObj = function(url) {
        url = url || window.location.href;
        if (urlObj === null) {
            urlObj = OpenLayers.Util.createUrlObject(url,
                {ignorePort80:true}
            );
        }
        return urlObj;
    };

    /**
     * Method: getBrowserVectorAbility
     * Get an empirical integer parameter
     * about this browser's vector handling abilities.
     *
     * Returns:
     * {Number} The parameter
     */
    var getBrowserVectorAbility = function() {
        // TODO: these figures need to be adapted from experiments
        if (vectorAbility) {
            return vectorAbility;
        } else if (Ext.isChrome) {
            vectorAbility = 35;
        } else if (Ext.isGecko) {
            vectorAbility = 25;
        } else if (Ext.isIE) {
            vectorAbility = 5;
        } else if (Ext.isOpera) {
            vectorAbility = 10;
        } else if (Ext.isSafari) {
            vectorAbility = 35;
        } else {
            // we don't want to prevent future browsers
            // from displaying a great number of features
            vectorAbility = 100;
        }
        return vectorAbility;
    };

    /**
     * Method: getComputingPower
     * Get an empirical floating parameter
     * about the client's CPU power (2009 CPU = 1)
     *
     * Returns:
     * {Number} The parameter
     */
    var getComputingPower = function() {
        // not implemented for now.
        // eg: time to load app (not the files) ...
        return 1;
    };

    /**
     * Method: getCustomParameter
     *  If parameter paramName exists in GEOR.custom, returns its value
     *  else defaults to the mandatory defaultValue
     *
     * Parameters:
     * paramName - {String} the parameter name
     * defaultValue - {Mixed} the default value if none is
     *                specified in GEOR.custom
     *
     * Returns:
     * {Mixed} The parameter value
     */
    var getCustomParameter = function(paramName, defaultValue) {
        return (GEOR.custom && GEOR.custom.hasOwnProperty(paramName)) ?
            GEOR.custom[paramName] : defaultValue;
    };

    /*
     * Public
     */
    return {
        /**
         * Constant: HEADER_HEIGHT
         * Integer value representing the header height, as set in the shared maven filters
         * Defaults to 90
         */
        HEADER_HEIGHT: getCustomParameter("HEADER_HEIGHT", 90),

        /**
         * Constant: EXTRACTOR_BATCH_URL
         * The URL to the extractor batch.
         */
        EXTRACTOR_BATCH_URL: "extractor/initiate",

        /**
         * Constant: LOGIN_URL
         * The login url.
         */
        LOGIN_URL: "?login",

        /**
         * Constant: LOGOUT_URL
         * The logout url.
         */
        LOGOUT_URL: "/j_spring_security_logout",

        /**
         * Constant: DOWNLOAD_FORM
         * Boolean: should the app display a form requesting user data and data usage ?
         * If set to yes, setting up the dlform webapp is mandatory.
         * Defaults to false
         */
        DOWNLOAD_FORM: getCustomParameter("DOWNLOAD_FORM",
            false),

        /**
         * Constant: PDF_URL
         * String: the URL to the downloaded data Terms Of Use
         *
         */
        PDF_URL: getCustomParameter("PDF_URL",
            ""),

        /***** Beginning of config options which can be overriden by GEOR.custom *****/

        /**
         * Constant: SUPPORTED_RASTER_FORMATS
         * List of supported raster formats.
         * Defaults to GeoTiff
         */
        SUPPORTED_RASTER_FORMATS: getCustomParameter("SUPPORTED_RASTER_FORMATS", [
            ["geotiff", "GeoTiff"],
            ["tiff", "Tif + TFW"]
        ]),

        /**
         * Constant: SUPPORTED_VECTOR_FORMATS
         * List of supported vector formats.
         * Defaults to SHP, MIF/MID, TAB
         */
        SUPPORTED_VECTOR_FORMATS: getCustomParameter("SUPPORTED_VECTOR_FORMATS", [
            ["shp", "Shapefile"],
            ["mif", "Mif/Mid"],
            ["tab", "TAB"],
            ["kml", "KML"]
        ]),

        /**
         * Constant: SUPPORTED_RESOLUTIONS
         * List of supported resolutions.
         * Defaults to 0.2 0.5 1 2 5 10 meters
         */
        SUPPORTED_RESOLUTIONS: getCustomParameter("SUPPORTED_RESOLUTIONS", [
            ["0.2", "0.2"],
            ["0.5", "0.5"],
            ["1", "1"],
            ["2", "2"],
            ["5", "5"],
            ["10", "10"]
        ]),

        /**
         * Constant: DEFAULT_RESOLUTION
         * Defaults to 10 meters
         * Please read https://github.com/georchestra/georchestra/issues/726
         */
        DEFAULT_RESOLUTION: getCustomParameter("DEFAULT_RESOLUTION", 
            10),

        /**
         * Constant: GEOSERVER_WMS_URL
         * The URL to GeoServer WMS.
         */
        GEOSERVER_WMS_URL: getCustomParameter("GEOSERVER_WMS_URL",
            "/geoserver/wms"),

        /**
         * Constant: GEOSERVER_WFS_URL
         * The URL to GeoServer WFS.
         */
        GEOSERVER_WFS_URL: getCustomParameter("GEOSERVER_WFS_URL",
            "/geoserver/wfs"),

        /**
         * Constant: MAX_FEATURES
         * The maximum number of vector features displayed.
         */
        MAX_FEATURES: getCustomParameter("MAX_FEATURES",
            50*getBrowserVectorAbility()*getComputingPower()),

        /**
         * Constant: MAX_LENGTH
         * The maximum number of chars in a XML response
         * before triggering an alert.
         */
        MAX_LENGTH: getCustomParameter("MAX_LENGTH",
            400/7*1024*getBrowserVectorAbility()*getComputingPower()),

        /**
         * Constant: MAP_DOTS_PER_INCH
         * {Float} Sets the resolution used for scale computation.
         * Defaults to 1000 / 39.37 / 0.28
         * see https://github.com/georchestra/georchestra/issues/736
         */
        MAP_DOTS_PER_INCH: getCustomParameter("MAP_DOTS_PER_INCH",
            1000 / 39.37 / 0.28),

        /**
         * Constant: GLOBAL_EPSG
         * SRS of the map used to select the global extraction parameters
         */
        GLOBAL_EPSG: getCustomParameter("GLOBAL_EPSG",
            "EPSG:4326"),

        /**
         * Constant: GLOBAL_MAX_EXTENT
         * Max extent of the global layer
         * Defaults to OpenLayers.Bounds(-180,-90,180,90)
         */
        GLOBAL_MAX_EXTENT: new OpenLayers.Bounds(
            getCustomParameter("MAP_XMIN",-180),
            getCustomParameter("MAP_YMIN",-90),
            getCustomParameter("MAP_XMAX",180),
            getCustomParameter("MAP_YMAX",90)
        ),

        /**
         * Constant: METRIC_MAP_SCALES
         * {Array} The map scales for the case where the SRS is metric.
         * Defaults to null, which means scales will be automatically computed
         */
        METRIC_MAP_SCALES: getCustomParameter("METRIC_MAP_SCALES", null),

        /**
         * Constant: GEOGRAPHIC_MAP_SCALES
         * {Array} The map scales for the case where the SRS is based on angles.
         * Defaults to null, which means scales will be automatically computed
         */
        GEOGRAPHIC_MAP_SCALES: getCustomParameter("GEOGRAPHIC_MAP_SCALES", null),

        /**
         * Constant: MAP_POS_SRS1
         * {String} The cursor position will be displayed using this SRS.
         * Set to "" if you do not want to have mouse position displayed.
         * Defaults to "EPSG:4326"
         */
        MAP_POS_SRS1: getCustomParameter("MAP_POS_SRS1", "EPSG:4326"),

        /**
         * Constant: MAP_POS_SRS2
         * {String} The cursor position will be displayed using this SRS.
         * Set to "" if you do not want to have mouse position displayed.
         * Defaults to ""
         */
        MAP_POS_SRS2: getCustomParameter("MAP_POS_SRS2", ""),

        /**
         * Constant: BASE_LAYER_NAME
         * The WMS base layer which will be displayed under each extracted layer.
         */
        BASE_LAYER_NAME: getCustomParameter("BASE_LAYER_NAME",
            "geor:countries"),

        /**
         * Constant: NS_LOC
         * {String} The referentials layers' namespace alias as defined in
         *    the GeoServer configuration.
         * Defaults to "geor_loc"
         */
        NS_LOC: getCustomParameter("NS_LOC", "geor_loc"),

        /**
         * Constant: DEFAULT_WCS_EXTRACTION_WIDTH
         * Default width of the extracted image from WCS. This constant
         * is to be used to calculate the default resolution of WCS.
         *
         * FIXME: not sure it is really useful.
         *
         */
        DEFAULT_WCS_EXTRACTION_WIDTH: getCustomParameter("DEFAULT_WCS_EXTRACTION_WIDTH",
            1024),

        /**
         * Constant: SUPPORTED_REPROJECTIONS
         * List of projections that extractor supports for reprojection
         */
        SUPPORTED_REPROJECTIONS: getCustomParameter("SUPPORTED_REPROJECTIONS", [
            ["EPSG:4326", "EPSG:4326 - WGS84"],
            ["EPSG:3857", "Spherical Mercator"]
        ]),

        /**
         * Constant: EXTRACT_BTN_DISABLE_TIME
         * Duration in seconds for the extract button being disabled after an extraction
         */
        EXTRACT_BTN_DISABLE_TIME: getCustomParameter("EXTRACT_BTN_DISABLE_TIME",
            30),

        /**
         * Constant: LAYERS_CHECKED
         * Layers checked by default or not ?
         */
        LAYERS_CHECKED: getCustomParameter("LAYERS_CHECKED",
            true),

        /**
         * Constant: BUFFER_VALUES
         * {Array} Array of buffer values with their display name
         */
        BUFFER_VALUES: getCustomParameter("BUFFER_VALUES", [
            [0, "None"],
            [10, "BUFFER meters"],
            [50, "BUFFER meters"],
            [100, "BUFFER meters"],
            [500, "BUFFER meters"],
            [1000, "BUFFER kilometer"],
            [5000, "BUFFER kilometers"],
            [10000, "BUFFER kilometers"]
        ]),

        /**
         * Constant: DEFAULT_BUFFER_VALUE
         * Default buffer value in meters.
         * Valid values are those from BUFFER_VALUES
         */
        DEFAULT_BUFFER_VALUE: getCustomParameter("DEFAULT_BUFFER_VALUE",
            0),

        /**
         * Constant: METADATA_RESOLUTION_XPATH
         * The XPath to use on the layer metadata 
         * in order to fetch the metric value of raster resolution
         *
         */
        METADATA_RESOLUTION_XPATH: getCustomParameter("METADATA_RESOLUTION_XPATH",
            "/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:spatialResolution/gmd:MD_Resolution/gmd:distance/gco:Distance"),

        /**
         * Constant: STARTUP_LAYERS
         * {Array} OGC layers loaded at startup if none are sent
         */
        STARTUP_LAYERS: getCustomParameter("STARTUP_LAYERS", [
            {
                owstype: "WMS",
                owsurl: "http://geolittoral.application.equipement.gouv.fr/wms/metropole",
                layername: "Sentiers_littoraux"
            }, {
                owstype: "WMS",
                owsurl: "http://sd1878-2.sivit.org/geoserver/wms",
                layername: "topp:RCLC90_L2E"
            }, {
                owstype: "WMS",
                owsurl: "http://geoservices.brgm.fr/risques",
                layername: "BASIAS_LOCALISE"
            }
        ]),

        /**
         * Constant: STARTUP_SERVICES
         * {Array} OGC services loaded at startup if none are sent
         */
        STARTUP_SERVICES: getCustomParameter("STARTUP_SERVICES", [
            {
                text: "BRGM Risques",
                owstype: "WMS",
                owsurl: "http://geoservices.brgm.fr/risques"
            }, {
                text: "Gest'eau",
                owstype: "WMS",
                owsurl: "http://gesteau.oieau.fr/service"
            },{
                text: "Sivit",
                owstype: "WMS",
                owsurl: "http://sd1878-2.sivit.org/geoserver/wms"
            },{
                text: "GeoLittoral",
                owstype: "WMS",
                owsurl: "http://geolittoral.application.equipement.gouv.fr/wms/metropole"
            }
        ]),

        /**
         * Constant: SPLASH_SCREEN
         * {String} The message to display on extractorapp startup
         * Defaults to null, which means no message will be displayed
         */
        SPLASH_SCREEN: getCustomParameter("SPLASH_SCREEN",
            null),

        /**
         * Constant: HELP_URL
         * {String} URL of the help ressource.
         * Defaults to "http://cms.geobretagne.fr/assistance"
         */
        HELP_URL: getCustomParameter("HELP_URL",
            "http://cms.geobretagne.fr/assistance")
        // No trailing comma for the last line (or IE will complain)
    };
})();
