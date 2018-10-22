var backtodashboardCommands = {
   
    clickcloseButton: function () {
        this.click('@close')
    },
    clickAlertboxButton:function () {
        this.click('@alertbox')
    },
}


module.exports = {

    commands: [backtodashboardCommands],
    elements: {

        alertbox: {
            selector:'#app > div > div > div > div > div.Connectors-grid___2jD_DC.Trigger-selector-connectors___1D3EVU > div > div:nth-child(1) > div'
        },
        buildpage:{
            selector:'#app > div > div > div > div > div.editor___qXNj0K > div > div > div.edit-content___X6vn2S > div.Workflow-canvas___hlLaNE > div > div > div > div > div.svg-graph___BrgeXt > svg'
        },
        close:{
            selector:'#app > div > div > div > div > div.editor___qXNj0K > div > div > div.Toolbar___2ftREM.Header___JAfaaT > div.Header-buttons___C1wwvK > a.button___1PSJhJ.danger___2Wv8VA.uppercase___2hcvEE.has-icon___2urrTn'
        },

        triggerpage:{
            selector:'#app > div > div > div > div > div.Trigger-selector-intro___1qeo16 > h1'
        },
        dashboardpage:{
            selector: '#app > div > div > div > div > div > div.Page-content___1XSUbp > div > div > div > div.Dashboard-fixed-header-wrapper___fQHmV7 > div > div.Dashboard-fixed-header--title___1DThTq'
        },


    }

};
