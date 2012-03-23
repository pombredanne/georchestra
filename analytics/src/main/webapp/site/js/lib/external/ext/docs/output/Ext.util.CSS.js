Ext.data.JsonP.Ext_util_CSS({"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.Base' rel='Ext.Base' class='docClass'>Ext.Base</a><div class='subclass '><strong>Ext.util.CSS</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/CSS.html#Ext-util-CSS' target='_blank'>CSS.js</a></div></pre><div class='doc-contents'><p>Utility class for manipulating CSS rules</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-self' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-property-self' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-property-self' class='name expandable'>self</a><span> : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Get the reference to the current class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>\nfor a detailed comparison</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependentOL on 'this'\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(<a href=\"#!/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a>(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-callOverridden' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-callOverridden' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-callOverridden' class='name expandable'>callOverridden</a>( <span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments args</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='deprecated signature'>deprecated</strong><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Call the original method that was previously overridden with override\n\nExt.define('My.Cat', {\n    constructor: functi...</div><div class='long'><p>Call the original method that was previously overridden with <a href=\"#!/api/Ext.Base-static-method-override\" rel=\"Ext.Base-static-method-override\" class=\"docClass\">override</a></p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n        <div class='signature-box deprecated'>\n        <p>This member has been <strong>deprecated</strong> </p>\n        <p>as of 4.1. Use <a href=\"#!/api/Ext.Base-method-callParent\" rel=\"Ext.Base-method-callParent\" class=\"docClass\">callParent</a> instead.</p>\n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments<div class='sub-desc'><p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callOverridden(arguments)</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>Returns the result of calling the overridden method</p>\n</div></li></ul></div></div></div><div id='method-callParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-callParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-callParent' class='name expandable'>callParent</a>( <span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments args</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Call the \"parent\" method of the current method. ...</div><div class='long'><p>Call the \"parent\" method of the current method. That is the method previously\noverridden by derivation or by an override (see <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>).</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Base', {\n     constructor: function (x) {\n         this.x = x;\n     },\n\n     statics: {\n         method: function (x) {\n             return x;\n         }\n     }\n });\n\n <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Derived', {\n     extend: 'My.Base',\n\n     constructor: function () {\n         this.callParent([21]);\n     }\n });\n\n var obj = new My.Derived();\n\n alert(obj.x);  // alerts 21\n</code></pre>\n\n<p>This can be used with an override as follows:</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.DerivedOverride', {\n     override: 'My.Derived',\n\n     constructor: function (x) {\n         this.callParent([x*2]); // calls original My.Derived constructor\n     }\n });\n\n var obj = new My.Derived();\n\n alert(obj.x);  // now alerts 42\n</code></pre>\n\n<p>This also works with static methods.</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Derived2', {\n     extend: 'My.Base',\n\n     statics: {\n         method: function (x) {\n             return this.callParent([x*2]); // calls My.Base.method\n         }\n     }\n });\n\n alert(My.Base.method(10);     // alerts 10\n alert(My.Derived2.method(10); // alerts 20\n</code></pre>\n\n<p>Lastly, it also works with overridden static methods.</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Derived2Override', {\n     override: 'My.Derived2',\n\n     statics: {\n         method: function (x) {\n             return this.callParent([x*2]); // calls My.Derived2.method\n         }\n     }\n });\n\n alert(My.Derived2.method(10); // now alerts 40\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments<div class='sub-desc'><p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>Returns the result of calling the parent method</p>\n</div></li></ul></div></div></div><div id='method-createStyleSheet' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.CSS'>Ext.util.CSS</span><br/><a href='source/CSS.html#Ext-util-CSS-method-createStyleSheet' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.CSS-method-createStyleSheet' class='name expandable'>createStyleSheet</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> cssText, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> id</span> ) : CSSStyleSheet</div><div class='description'><div class='short'>Creates a stylesheet from a text blob of rules. ...</div><div class='long'><p>Creates a stylesheet from a text blob of rules.\nThese rules will be wrapped in a STYLE tag and appended to the HEAD of the document.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cssText</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The text containing the css rules</p>\n</div></li><li><span class='pre'>id</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>An id to add to the stylesheet for later removal</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>CSSStyleSheet</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getInitialConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-getInitialConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-getInitialConfig' class='name expandable'>getInitialConfig</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> name</span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getRule' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.CSS'>Ext.util.CSS</span><br/><a href='source/CSS.html#Ext-util-CSS-method-getRule' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.CSS-method-getRule' class='name expandable'>getRule</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[] selector, <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> refreshCache</span> ) : CSSStyleRule</div><div class='description'><div class='short'>Gets an an individual CSS rule by selector(s) ...</div><div class='long'><p>Gets an an individual CSS rule by selector(s)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>selector</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[]<div class='sub-desc'><p>The CSS selector or an array of selectors to try. The first selector that is found is returned.</p>\n</div></li><li><span class='pre'>refreshCache</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>true to refresh the internal cache if you have recently updated any rules or added styles dynamically</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>CSSStyleRule</span><div class='sub-desc'><p>The CSS rule or null if one is not found</p>\n</div></li></ul></div></div></div><div id='method-getRules' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.CSS'>Ext.util.CSS</span><br/><a href='source/CSS.html#Ext-util-CSS-method-getRules' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.CSS-method-getRules' class='name expandable'>getRules</a>( <span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> refreshCache</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>Gets all css rules for the document ...</div><div class='long'><p>Gets all css rules for the document</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>refreshCache</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>true to refresh the internal cache</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>An object (hash) of rules indexed by selector</p>\n</div></li></ul></div></div></div><div id='method-initConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-initConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-initConfig' class='name expandable'>initConfig</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Initialize configuration for this class. ...</div><div class='long'><p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>mixins The mixin prototypes as key - value pairs</p>\n</div></li></ul></div></div></div><div id='method-refreshCache' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.CSS'>Ext.util.CSS</span><br/><a href='source/CSS.html#Ext-util-CSS-method-refreshCache' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.CSS-method-refreshCache' class='name expandable'>refreshCache</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>Refresh the rule cache if you have dynamically added stylesheets ...</div><div class='long'><p>Refresh the rule cache if you have dynamically added stylesheets</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>An object (hash) of rules indexed by selector</p>\n</div></li></ul></div></div></div><div id='method-removeStyleSheet' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.CSS'>Ext.util.CSS</span><br/><a href='source/CSS.html#Ext-util-CSS-method-removeStyleSheet' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.CSS-method-removeStyleSheet' class='name expandable'>removeStyleSheet</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> id</span> )</div><div class='description'><div class='short'>Removes a style or link tag by id ...</div><div class='long'><p>Removes a style or link tag by id</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The id of the tag</p>\n</div></li></ul></div></div></div><div id='method-statics' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-statics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-statics' class='name expandable'>statics</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Get the reference to the class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#!/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(<a href=\"#!/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a>(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-swapStyleSheet' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.CSS'>Ext.util.CSS</span><br/><a href='source/CSS.html#Ext-util-CSS-method-swapStyleSheet' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.CSS-method-swapStyleSheet' class='name expandable'>swapStyleSheet</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> id, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> url</span> )</div><div class='description'><div class='short'>Dynamically swaps an existing stylesheet reference for a new one ...</div><div class='long'><p>Dynamically swaps an existing stylesheet reference for a new one</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The id of an existing link tag to remove</p>\n</div></li><li><span class='pre'>url</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The href of the new stylesheet to include</p>\n</div></li></ul></div></div></div><div id='method-updateRule' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.CSS'>Ext.util.CSS</span><br/><a href='source/CSS.html#Ext-util-CSS-method-updateRule' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.CSS-method-updateRule' class='name expandable'>updateRule</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[] selector, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> property, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> value</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>Updates a rule property ...</div><div class='long'><p>Updates a rule property</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>selector</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[]<div class='sub-desc'><p>If it's an array it tries each selector until it finds one. Stops immediately once one is found.</p>\n</div></li><li><span class='pre'>property</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The css property</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The new value for the property</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>true If a rule was found and updated</p>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":[],"extends":"Ext.Base","statics":{"cfg":[],"property":[],"css_var":[],"event":[],"method":[],"css_mixin":[]},"alternateClassNames":[],"tagname":"class","singleton":true,"code_type":"ext_define","inheritable":false,"superclasses":["Ext.Base","Ext.util.CSS"],"component":false,"requires":[],"inheritdoc":null,"mixins":[],"mixedInto":[],"meta":{},"members":{"cfg":[],"property":[{"owner":"Ext.Base","tagname":"property","meta":{"protected":true},"name":"self","id":"property-self"}],"css_var":[],"event":[],"css_mixin":[],"method":[{"owner":"Ext.Base","tagname":"method","meta":{"deprecated":{"text":"as of 4.1. Use {@link #callParent} instead."},"protected":true},"name":"callOverridden","id":"method-callOverridden"},{"owner":"Ext.Base","tagname":"method","meta":{"protected":true},"name":"callParent","id":"method-callParent"},{"owner":"Ext.util.CSS","tagname":"method","meta":{},"name":"createStyleSheet","id":"method-createStyleSheet"},{"owner":"Ext.Base","tagname":"method","meta":{},"name":"getInitialConfig","id":"method-getInitialConfig"},{"owner":"Ext.util.CSS","tagname":"method","meta":{},"name":"getRule","id":"method-getRule"},{"owner":"Ext.util.CSS","tagname":"method","meta":{},"name":"getRules","id":"method-getRules"},{"owner":"Ext.Base","tagname":"method","meta":{"protected":true},"name":"initConfig","id":"method-initConfig"},{"owner":"Ext.util.CSS","tagname":"method","meta":{},"name":"refreshCache","id":"method-refreshCache"},{"owner":"Ext.util.CSS","tagname":"method","meta":{},"name":"removeStyleSheet","id":"method-removeStyleSheet"},{"owner":"Ext.Base","tagname":"method","meta":{"protected":true},"name":"statics","id":"method-statics"},{"owner":"Ext.util.CSS","tagname":"method","meta":{},"name":"swapStyleSheet","id":"method-swapStyleSheet"},{"owner":"Ext.util.CSS","tagname":"method","meta":{},"name":"updateRule","id":"method-updateRule"}]},"allMixins":[],"html_meta":{},"uses":[],"private":false,"name":"Ext.util.CSS","aliases":{},"files":[{"href":"CSS.html#Ext-util-CSS","filename":"CSS.js"}],"id":"class-Ext.util.CSS"});