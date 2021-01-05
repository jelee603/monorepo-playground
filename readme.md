### Lerna Hompage

https://lerna.js.org/

### Lerna Installation

```
$ npm install --global lerna
$ git init lerna-repo && cd lerna-repo
$ lerna init
```

### Project Setup

packages/ 에 생성된 모든 node_modules 폴더를 삭제해준다.

```
$ lerna clean
```

각 패키지의 devDependencies를 `root`에서 관리해준다.

```
$ lerna link convert
```

`root`에 패키지들의 node_modules 설치 및 Symlink 를 정리해준다.

```
$ lerna bootstrap
```

각 패키지들의 npm 명령어를 실행해준다.

```
$ leran run build
```

Project URL

- http://127.0.0.1:5500/packages/pack-a/index.html
- http://127.0.0.1:5500/packages/pack-b/index.html
