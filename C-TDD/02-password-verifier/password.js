function verify(p) {
  if (p === null) {
    return "Password rejected";
  }
  let p2 = p.length;
  if (p2 < 8) {
    return "Password rejected";
  }
}

module.exports = verify;
