# Lesson 2

## Adding Checking to Existing JS Files
- Currenty file `src/app.js` contains some errors
- In order to fix it, we just need to add some config in `tsconfig.json`

| Key   |      Value      |  Description |
|----------|:-------------:|------:|
| Compiler Options - allowJS |    true   |   Allowing TS to scan JS files |
| Compiler Options - checkJS | true |    Enable TS to check types JS files |


## Importing Third Party Types
- In order to able importing 3rd party into project. Just visit `npmjs.com`
- Search 3rd party you want to import, then run the command in specific project folder


## Reference
- https://github.com/LinkedInLearning/typescript-EssT-2428199/blob/main/exercise_files/Ch01/01_03b
- https://www.npmjs.com/package/@types/jquery
