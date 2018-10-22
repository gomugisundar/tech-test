var loginCommands = {
    clicklogin: function () {
        this.click('@login')
    },
    clickloginButton: function () {
        this.click('@loginButton')
    },
}


module.exports = {
    url: function () {
        return this.api.launchUrl
    },
    commands: [loginCommands],
    elements: {
        wholePageBody: {
            selector: 'body'
        },
        //login button from menu
        login: {
            selector: '#navMenu > li:nth-child(7)'
        },
        //login page verify
        loginpage: {
            selector: '#app > div div.Dialog-header___hSCB8b.ViewLogin-header___3FM_W0'
        },
        emailAddress: {
            selector: '#login-form > div > div:nth-child(1) > div > input'
        },
        password: {
            selector: '#login-form > div > div:nth-child(2) > div > input'
        },
        loginButton: {
            selector: '#login-form > button'
        },

        
    }

};