// DEFINE UTILS FUNCTIONS
export const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0)

export const capitalize = s => s.toLowerCase().replace(/^./, str => str.toUpperCase())
export const imageRender = (image, size) => `${process.env.REACT_APP_WEBKIT_URL}/${image}/${size}`
export const avatarRender = (image, size) => {
  const isAvatar = image && image.split("/")[1].includes("avatars")
  return isAvatar ? `${process.env.REACT_APP_WEBKIT_URL}${image}/${size}` : image
}

export const removeFalsy = obj => {
  let newObj = {}
  Object.keys(obj).forEach(prop => {
    if (obj[prop]) {
      newObj[prop] = obj[prop]
    }
  })
  return newObj
}

// WARNING RECURSIVE FUNCTION
export const removeEmpty = obj =>
  Array.isArray(obj)
    ? obj.map(v => (v && typeof v === "object" ? removeEmpty(v) : v)).filter(v => !(v == null))
    : Object.entries(obj)
        .map(([k, v]) => [k, v && typeof v === "object" ? removeEmpty(v) : v])
        .reduce((a, [k, v]) => (v == null ? a : ((a[k] = v), a)), {})

export const objectDeepFlat = obj => {
  return Object.keys(obj)
    .filter(key => obj[key] instanceof Object)
    .map(key => objectDeepFlat(obj[key]).map(k => `${key}.${k}`))
    .reduce((x, y) => x.concat(y), Object.keys(obj))
}

export const recursiveClean = {
  doDelete: function (val) {
    return !Boolean(val) || recursiveClean.isEmptyObj(val) || recursiveClean.isEmptyArray(val)
  },
  isEmptyArray: function (val) {
    return Array.isArray(val) && val.length === 0
  },
  isEmptyObj: function (obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object
  },
  hasKeys: function (obj) {
    return Object.keys(obj).length > 0
  },
  clean: function (object) {
    Object.keys(object).forEach(key => {
      const val = object[key]

      // If dealing with an object, clean it.
      if (val && typeof val === "object") {
        recursiveClean.clean(val)
      }
      // If deleteable, delete and return
      if (recursiveClean.doDelete(val)) {
        delete object[key]
        return object
      }
      // If array, loop over entries
      if (Array.isArray(val)) {
        let i = val.length
        // While lets us delete from the array without affecting the loop.
        while (i--) {
          let entry = val[i]
          // If deleteable, delete from the array
          if (recursiveClean.doDelete(entry)) {
            val.splice(i, 1)
          } else if (recursiveClean.hasKeys(entry)) {
            // If an object, clean it
            entry = recursiveClean.clean(entry)
            // Check to see if cleaned object is deleteable
            if (recursiveClean.doDelete(entry)) {
              val.splice(i, 1)
            }
          }
        }
        // Once done with the array, check if deleteable
        if (recursiveClean.doDelete(val)) {
          delete object[key]
        }
      }
    })
    return object
  }
}
