/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");

class HelperRuntimeModule extends RuntimeModule {
	constructor(name) {
		super(name);
	}
}

module.exports = HelperRuntimeModule;
