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

/* make methods chainable, e.g.
CanvasRenderingContext2D.prototype.fillRect =
    chain(CanvasRenderingContext2D.prototype.fillRect);
    
ctx.fillRect(0, 0, 10, 10).fillRect(90, 90, 10, 10).fillRect(0, 10, 100, 10);
by Mathieu 'P01' Henri */
function chain(fn) {
    return function() {
        return fn.apply(this, arguments) || this;
    }
}
