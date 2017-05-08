
function visit(old) {

  if (typeof old !== 'object' || old === null) {
    return old;
  }

  const isArray = Array.isArray(old);
  const copy = isArray ? [] : {};
  const keys = Object.keys(old).sort();
  keys.forEach(function (key) {
    copy[key] = visit(old[key]);
  });

  return copy;
}


function visitArrays(old) {

  if (typeof old !== 'object' || old === null) {
    return old;
  }

  const isArray = Array.isArray(old);
  const copy = isArray ? [] : {};
  const keys = Object.keys(old).sort();
  keys.forEach(function (key) {
    copy[key] = visitArrays(old[key]);
  });

  if (isArray && old[0] && (typeof old[0] === 'string'||typeof old[0] === 'number')) {
    copy.sort();
  }

  return copy;
}
module.exports.sortObjectProperties = visit;
module.exports.sortObjectPropertiesAndArrays = visitArrays;
