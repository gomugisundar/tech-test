var createworkflowCommands = {
   
    clickCreateNewWorkFlowButton: function () {
        this.click('@CreateNewWorkFlowButton')
    },

    clickCreateButton:function () {
        this.click('@createButton')
    },
}


module.exports = {

    commands: [createworkflowCommands],
    elements: {
        
        //create work flow button 
        CreateNewWorkFlow: {
            selector: '#app > div > div > div > div > div > div.Page-content___1XSUbp > div > div > div > div.Dashboard-fixed-header-wrapper___fQHmV7 > div > div.Dashboard-fixed-header--children___lRGDkG > a'
        },
        CreateNewWorkFlowButton: {
            selector: '#app > div > div > div > div > div > div.Page-content___1XSUbp > div > div > div > div.Dashboard-fixed-header-wrapper___fQHmV7 > div > div.Dashboard-fixed-header--children___lRGDkG > a'
        },
        CreateNewWorkFlowpopupbox: {
            selector: '#portal-prompt-modal > div > div > div.modal-holder___2cAE7h > div > div > div.header___1iolq4 > div'
        },
        
        workflowname: {
            selector: '#portal-prompt-modal > div > div > div.modal-holder___2cAE7h > div > div > div.body___3GZ6O_ > div > div > div > div > div > input'
        },

        createButton: {
            selector: '#portal-prompt-modal > div > div > div.modal-holder___2cAE7h > div > div > div.footer___YVHvoy > div > div.button___20IrAn.button___1PSJhJ.success___3Tf3_d.uppercase___2hcvEE'
        },

    }

};