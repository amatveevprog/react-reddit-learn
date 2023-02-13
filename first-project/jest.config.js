module.exports = {
    preset: 'ts-jest',// при отладке jsx, а не tsx, использовать 'ts-jest/presets/js-with-ts'
    testEnvironment: 'node',
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],//эта опция нужна для того, чтобы наш файл подключился после того, как будет запущена наша среда.
    // для того, чтобы в компонентах, импортящих css : установить identity-obj-proxy в режиме --save-dev
    // - это спец. пакет, которому передается объект, и он возвращает то свойство, что запросили
    moduleNameMapper: {
        "\\.css": "identity-obj-proxy"
    },
    snapshotSerializers: ["enzyme-to-json/serializer"],
}