export default {
  'files': [
    '!backend/beresalexandra/food-types/main-course.spec.ts',
    '!backend/beresalexandra/conversion.spec.ts',
    '!backend/beresalexandra/converted-menu.spec.ts',
    '!test/app.e2e.spec.ts',
  ],
  'extensions': [
    'ts',
  ],
  'require': [
    'ts-node/register',
  ],
  'nodeArguments': [
    '--experimental-modules',
    '--es-module-specifier-resolution=node',
  ],
}