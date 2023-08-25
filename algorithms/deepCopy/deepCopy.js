function copy(aObject) {
  // Prevent undefined objects
  // if (!aObject) return aObject;

  let bObject = Array.isArray(aObject) ? [] : {};

  let value;
  for (const key in aObject) {

    // Prevent self-references to parent object
    // if (Object.is(aObject[key], aObject)) continue;
    
    value = aObject[key];

    bObject[key] = (typeof value === "object") ? copy(value) : value;
  }

  return bObject;
}

export default copy;

// Another way
// function cloneObject(obj) {
//   var clone = {};
//   for(var i in obj) {
//       if(typeof(obj[i])=="object" && obj[i] != null)
//           clone[i] = cloneObject(obj[i]);
//       else
//           clone[i] = obj[i];
//   }
//   return clone;
// }
