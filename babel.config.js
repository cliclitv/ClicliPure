<<<<<<< HEAD
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
};
=======
module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo']
  }
}
>>>>>>> dcb16171baba251a34cbeb23bfe513dc641ddee5
