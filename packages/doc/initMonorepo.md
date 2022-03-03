# add monorepo

## init workspace in yarn 
- [x] Read dok.spec ->  workspace in yarn 
        https://ichi.pro/pl/obszary-robocze-przedzy-podejscie-monorepo-19394618453089
<hr>

### let's Go!
- [x] init
    1. Inicjalizacja wykonanan za pomocą: 
        https://ichi.pro/pl/obszary-robocze-przedzy-podejscie-monorepo-19394618453089

        1. a. refactor: change name convention => @sharecode
```json
                        {
                            - "name": "common",
                            + "name": "@sharecode/common",
                        }
```   
#### Note 
- [ ] Doczytać o konwencji nazwenictwa => @sharecode NazwęProjektu/NazwaPakietu

  <hr noshade> 

## Lerna & workspace yarn 
- [x] Read dok.spec ->     lerna 2.51 
        https://www.honeybadger.io/blog/monorepo-yarn-workspace-lerna/

    -  Object in lerna.json - react-admin-4-beta.1
```json
                                    {
                                        "lerna": "2.5.1",
                                        "packages": [
                                            "examples/data-generator",
                                            "examples/simple",
                                            "packages/*"
                                            ],
                                        "version": "4.0.0-beta.1.0"
                                    }
```

- my obj in lerna.json 
```json
                            {
                                "lerna": "2.5.1",
                                "useWorkspaces": true,
                                "packages": [
                                    "app/*",
                                    "packages/*"
                                    ],
                                "version": "e-faktury-ra4b",
                                "npmClient": "yarn"
                            }
```