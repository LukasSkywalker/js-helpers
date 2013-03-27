/******************************************************************************
Useful helper functions for different function manipulations
Copyright (C) 2010 The Otrax Project / Lukas Diener

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*******************************************************************************/

Function.prototype.trace = function () {
    var trace = [];
    var current = this;
    while (current) {
        trace.push(current.signature());
        current = current.caller;
    }
    return trace;
}

Function.prototype.signature = function () {
    var signature = {
        name: this.getName(),
        params: [],
        toString: function () {
            var params = this.params.length > 0 ?
                "'" + this.params.join("', '") + "'" : "";
            return this.name + "(" + params + ")"
        }
    };
    if (this.arguments) {
        for (var x = 0; x < this.arguments.length; x++)
            signature.params.push(this.arguments[x]);
    }
    return signature;
}

Function.prototype.getName = function () {
    if (this.name)
        return this.name;
    var definition = this.toString().split("\n")[0];
    var exp = /^function ([^\s(]+).+/;
    if (exp.test(definition))
        return definition.split("\n")[0].replace(exp, "$1") || "anonymous";
    return "anonymous";
}
