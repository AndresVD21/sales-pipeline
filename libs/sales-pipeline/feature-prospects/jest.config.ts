/* eslint-disable */
export default {
  displayName: 'sales-pipeline-feature-prospects',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/sales-pipeline/feature-prospects',
};
