function convert(hex, opacity) {
  const opacityRGBA = Math.floor(opacity * 255);
  return `${hex}${opacityRGBA.toString(16)}`;
}

module.exports = convert;
