### init Monorepo 
    1. Inicjalizacja wykonanan za pomocą: 
        https://ichi.pro/pl/obszary-robocze-przedzy-podejscie-monorepo-19394618453089

        1. a. refactor: change name convention => @sharecode
                        {
                                - "name": "common",
                                + "name": "@sharecode/common",
                        }   
#### Note 
    [ ] Doczytać o konwencji nazwenictwa => @sharecode NazwęProjektu/NazwaPakietu

### Lerna & workspace yarn 
    2. Inicjalizacja lerna 2.51 
        https://www.honeybadger.io/blog/monorepo-yarn-workspace-lerna/

        2. a. Object in lerna.json - react-admin-4-beta.1
                                    {
                                        "lerna": "2.5.1",
                                        "packages": [
                                            "examples/data-generator",
                                            "examples/simple",
                                            "packages/*"
                                            ],
                                        "version": "4.0.0-beta.1.0"
                                    }