window.onload = function () {
  let params = {
    active: true,
    currentWindow: true
  }

  chrome.tabs.query(params, gotTabs);

}

function gotTabs(tab) {
  let msg = {
    txt: "Stratus-activate"
  }
  chrome.tabs.sendMessage(tab[0].id, msg)
  }

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  sendResponse({
      data: message
    });
  thinkingWheel = '<div id="loader"></div>'
  document.body.innerHTML = document.body.innerHTML.replace(thinkingWheel, '')
  message.data.forEach(function(item) {
    console.log(item)
    if (item.ID.match(/T[0-9]{4}/)) {
      console.log(item.ID)
      let temporary_div = "<p></p>"
      let attLink = "<a href='https://attack.mitre.org/techniques/" + item.ID + "'>" + "(" + item.ID + ")" + "</a> <span title=\"" + item.match + "\"><i id=\"" + item.ID + "\" class='fa fa-question-circle'></i></span>"
      let change = '<p>' + item.name + ' ' + attLink + '</p><p></p>';
      document.body.innerHTML = document.body.innerHTML.replace(temporary_div, change);

    } else {
      let sampleAddition = '<sample>Identifies entities of interest.</sample>'
      let sampleHolder = '<sample></sample>'
      document.body.innerHTML = document.body.innerHTML.replace(sampleHolder, sampleAddition);


      let temporary_div2 = '<p id="entity"></p>'
      let entityInfo = '<span title="' + item.match + '"><i id="' + item.ID + '" class="fa fa-question-circle"></i></span>'
      let change2 = '<p>' + item.ID + ' (' + item.entity + ') ' + entityInfo + '</p><p id="entity"></p>';
      document.body.innerHTML = document.body.innerHTML.replace(temporary_div2, change2);

      let modalPlaceMarker = '<p1></p1>'
      let modalChange = '<p1>' + item.ID + '</p1><p1></p1>'
      document.body.innerHTML = document.body.innerHTML.replace(modalPlaceMarker, modalChange);
    }
  })
  chrome.runtime.sendMessage({
    data: 'export'
  });
});
