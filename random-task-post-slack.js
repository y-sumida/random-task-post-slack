function doPost() {
    var tasks = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('tasks');
    var taskMax = tasks.getLastRow();
    var task = tasks.getRange(getRandomNumber(2, taskMax), 1).getCell(1, 1).getValue();

    var members = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('members');
    var memberMax = members.getLastRow();
    var member = members.getRange(getRandomNumber(2, memberMax), 1).getCell(1, 1).getValue();

    var payload = {
        text : "<@" + member + "> " + task + "お願いします",
        username : 'タスク割り当てbot',
        icon_emoji:':dart:',
        link_names: 1
    }

    var options = {
        method: 'post',
        payload : JSON.stringify(payload)
    };
    var url = "https://hooks.slack.com/services/xxxxxxxxxx/xxxxxxxxxx/xxxxxxxxxx";
    var response = UrlFetchApp.fetch(url, options);

    if (response.getResponseCode() != 200) {
        Logger.log(response);
    }
}

function getRandomNumber(min, max) {
    return Math.floor((Math.random() * ((max + 1) - min)) + min);
}
