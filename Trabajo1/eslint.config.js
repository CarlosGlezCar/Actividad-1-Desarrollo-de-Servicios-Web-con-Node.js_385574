const js = require('@eslint/js');

module.exports = [
    //Reglas para la verificación del código
    //Las reglas base de ESlint  (Javascript)

    js.configs.recommended, {
        languageOptions : {
            ecmaVersion: 2022,
            sourceType: 'commonjs',
            globals: {
                require: 'readonly',
                module: 'writable',
                exports: 'writable',
                __dirname: 'readonly',
            },
        },

        rules: {
            'no-unused-vars': 'warn',
        },
    },  
        //Configuración adicional (Solo aplica a los archivos de tests.)
        {
            files: ['tests/**/*.js'],
            languageOptions: {
                globals: {
                    require: 'readonly',
                    module: 'writable',
                    exports: 'writable',
                    describe: 'readonly',
                    test:'readonly',
                    expect:'readonly',
                    beforeEach:'readonly',
                    jest:'readonly'
                }
            }
        },

        //Exclusiones Globales (Carpetas o archivos que ESlint no debe analizar)
        {
            ignores: ['node_modules/', 'logs/'],
        },
];