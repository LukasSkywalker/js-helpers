/******************************************************************************
Useful helper functions for different array manipulations
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

/* sort an array faster than the native Array.sort method */
Array.prototype.insertSort = function() {
  for (var i = 1; i < this.length; i++) {
    var tmp = this[i],
        j = i;
    while (this[j - 1] > tmp) {
      this[j] = this[j - 1];
      --j;
    }
    this[j] = tmp;
  }
}

/* sort an array of objects by a specific property */
Array.prototype.sortBy = function( property ) {
  for (var i = 1; i < this.length; i++) {
    var tmp = this[i],
        j = i;
    while (j > 0 && this[j - 1][property] > tmp[property]) {
      this[j] = this[j - 1];
      --j;
    }
    this[j] = tmp;
  }
}

/* create an array out of the given properties of the source array */
Array.prototype.pluck = function( property ) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    arr.push(this[i][property]);
    console.log(this[i]);
  }
  return arr;
}

/* get the max value of an array */
Array.prototype.max = function () {
    return Math.max.apply(Math, this);
};

/* get the min value of an array */
Array.prototype.min = function () {
    return Math.min.apply(Math, this);
};

/* sum up all elements in the array */
Array.prototype.sum = function() {
	for (var i = 0, sum = 0; i < this.length; sum += this[i++]);
	return sum;
}
