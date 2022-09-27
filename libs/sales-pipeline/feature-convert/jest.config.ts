/* eslint-disable */
export default {
  displayName: 'sales-pipeline-feature-convert',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/sales-pipeline/feature-convert',
};
