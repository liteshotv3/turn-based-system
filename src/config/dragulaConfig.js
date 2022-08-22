import Dragula from 'react-dragula';

export const tokenZoneMovmentFunctionality = (componentBackingInstance) => {
    if (componentBackingInstance) {
        // console.log(document.body)
        let options = {
            isContainer: function (el) {
                // console.log(el)
                return false; // only elements in drake.containers will be taken into account
            },
            moves: function (el, source, handle, sibling) {
                // only tokens move
                // console.log("el", el.dataset.type)
                // console.log('el moving is token', el.dataset.type === "token", "el.dataset.type:", el.dataset.type)
                // return el.id === "token"
                return el.dataset.type === "token"; // elements are always draggable by default
            },
            accepts: function (el, target, source, sibling) {
                // console.log("element accepting is zone", el.dataset.type === "zone", "el.dataset.type:", el.dataset.type)
                return target.dataset.type === "zone"; // elements can be dropped in any of the `containers` by default
            },
            invalid: function (el, handle) {
                return false; // don't prevent any drags from initiating by default
            },
            direction: 'horizontal',             // Y axis is considered when determining where an element would be dropped
            copy: false,                       // elements are moved by default, not copied
            copySortSource: false,             // elements in copy-source containers can be reordered
            revertOnSpill: false,              // spilling will put the element back where it was dragged from, if this is true
            removeOnSpill: false,              // spilling will `.remove` the element, if this is true
            mirrorContainer: document.body,    // set the element that gets mirror elements appended
            ignoreInputTextSelection: true,     // allows users to select input text, see details below
            slideFactorX: 0,               // allows users to select the amount of movement on the X axis before it is considered a drag instead of a click
            slideFactorY: 0,               // allows users to select the amount of movement on the Y axis before it is considered a drag instead of a click
        }
        Dragula([...componentBackingInstance.children], options);
    }
}