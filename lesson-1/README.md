# Lesson 1

## Installation
- Install Typescript via NPM https://www.typescriptlang.org/download
- Test installation when it's completed via `tsc -v`


## Running 1st Project
- Every typescript project has at least one `tsconfig.json`
- Compile TS project via command `tsc`

| Key   |      Value      |  Description |
|----------|:-------------:|------:|
| include |  src/**/* | Typescript project scope will scan files under `src` directory |
| Compiler Options - target |    ESNext   |   Compatible for all version of ES |
| Compiler Options - outDir | build |    Output directory when TS is compiled |
| Compiler Options - noEmit | false |    Typescript will always generate .js file after build |