// Visitor
function addName (obj) {
  if ('function' === typeof obj) {
    obj.name = 'a function'
  } else if (Array.isArray(obj)) {
    obj.name = 'a array'
  } else if (obj instanceof Date) {
    obj.name = 'a date'
  }
}