import { EggPlugin } from 'egg';
export default {
  // static: false,
} as EggPlugin;

exports.cors = {
  enable: true,
  package: 'egg-cors',
};
