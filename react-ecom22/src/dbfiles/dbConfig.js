const config = {
    user: 'root',
    password: 'Password',
    server: 'Mysql@localhost:3306',
    database: 'GLA',
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instantname: 'SQLEXPRESS'
    },
    port: 3306
}
module.export = config
