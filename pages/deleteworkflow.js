var deleteworkflowCommands = {
   
    clickAlertboxButton:function () {
        this.click('@alertbox')
    },
    clickyesbutton: function () {
        this.click('@yesbutton')
    },
}


module.exports = {
    commands: [deleteworkflowCommands],
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
        deleteButton: {
            selector: '#app > div > div > div > div > div > div.Page-content___1XSUbp > div > div > div > div.My-flows___29aOzF.Section-dashboard___119-aG.Section-dashboard--open___eKqqzj.Section-dashboard--no-bottom-padding___2utTCF > div.Section-dashboard-container___2RnKOx > section > div.List___xucddv > ul > li.FilterableListItem.FilterableFlowListItem___iatfeO.Disabled___1Xh4lH > div > div > ul > li:nth-child(5) > a'
    },
        yesbutton:{
            selector:'#modal-undefined > div > div > div.Dialog-footer___27k2jT > div.Dialog-footer-button___31Yis7.button___1PSJhJ.success___3Tf3_d.uppercase___2hcvEE'
        },

        closeButton: {
            selector: '#menu-item-4231'
        },

        dashboardpage: {
            selector: '#app > div > div > div > div > div > div.Page-content___1XSUbp > div > div > div > div.Dashboard-fixed-header-wrapper___fQHmV7 > div > div.Dashboard-fixed-header--title___1DThTq'
        },
        
        triggerpage:{
            selector:'#app > div > div > div > div > div.Trigger-selector-intro___1qeo16 > h1'

        },
        hamburgermenu:{
            selector:'#app > div > div > div > div > div > div.Page-content___1XSUbp > div > div > div > div.My-flows___29aOzF.Section-dashboard___119-aG.Section-dashboard--open___eKqqzj.Section-dashboard--no-bottom-padding___2utTCF > div.Section-dashboard-container___2RnKOx > section > div.List___xucddv > ul > li:nth-child(2) > div > div'
        },
        removeworkflow:{
            selector:'#modal-undefined > div > div > div.Dialog-header___hSCB8b'

        }
    }

};
