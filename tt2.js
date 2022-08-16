function catMouse (map, moves) {
    let x = map.length;
    let y = x/3;

    const trimmedMap = map.replace(/^\.+|\.+$/g, '')
    if (!(trimmedMap.includes('C') & trimmedMap.includes('m') ))  {
        return "boring without two animals"
    }
    const linearDistance = trimmedMap.match(/\./g).length;
    //console.log(linearDistance);
    if (linearDistance <= moves) {
        return 'Caught!';
    } else
    return 'Escaped!'
 }

console.log(catMouse('...C..', 3));