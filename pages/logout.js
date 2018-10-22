var logoutCommands = {
    
    clicklogoutbutton:function () {
        this.click('@yesbutton')
    },

}


module.exports = {
    
    commands: [logoutCommands],
    elements: {

        profilehead:{
            selector:'#userToggle'
        },
        
        logoutbutton: {
            selector:'#app > div > div > div > div > div > div > div > div:nth-child(2) > ul > li:nth-child(2)'
        },
    
    }

};
