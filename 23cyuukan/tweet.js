let answer= document.querySelector('#answer');

changeAll();

//ボタン全表示
function changeAll() {
  let outputHtml = '<ul style="margin: 0; padding: 0;">';
  let i = 0;
  while (i < tweets.length) {
    outputHtml += `<div style=" border: solid 1px #333333;"><li style="list-style:none; margin-left: 5px;"> <img src="${tweets[i].avatar}" alt="" style="width:10%;" > <b>${tweets[i].name}</b> ${tweets[i].message} <i>${tweets[i].tweetedAt}</i> </li></div>`;
    i++;
  }
  outputHtml += '</ul>';
  answer.innerHTML = outputHtml;
}

//三郎BOTのみ表示
function changeBot(){
  let outputHtml = '<ul style="margin: 0; padding: 0;">';
  let i = 0;
  while(i<tweets.length){
    if (tweets[i].name === "三郎BOT"){
      outputHtml += `<div style=" border: solid 1px #333333;"><li style="list-style:none; margin-left: 5px;"><img src="${tweets[i].avatar}" alt="" width="10%"> <b>${tweets[i].name}</b> ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li></div>`;
    }
    i++;
  }
  outputHtml+='</ul>';
  answer.innerHTML = outputHtml;
}

//次郎のみ表示
function changeJiro(){
  let outputHtml='<ul style="margin: 0; padding: 0;">';
  let i = 0;
  while(i<tweets.length){
    if (tweets[i].name==="次郎"){
      outputHtml += `<div style=" border: solid 1px #333333;"><li style="list-style:none; margin-left: 5px;"><img src="${tweets[i].avatar}" alt="" width="10%"><b>${tweets[i].name}</b> ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li></div>`;
    }
    i++;
  }
  outputHtml+='</ul>';
  answer.innerHTML = outputHtml;
}

//太郎のみ表示
function changeTaro() {
  let outputHtml = '<ul style="margin: 0; padding: 0;">';
  let i = 0;
  while (i < tweets.length) {
    if (tweets[i].name === "太郎") {
      outputHtml += `<div style=" border: solid 1px #333333;"><li style="list-style:none; margin-left: 5px;"><img src="${tweets[i].avatar}" alt="" width="10%"> <b>${tweets[i].name}</b> ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li></div>`;
    }
    i++;
  }
  outputHtml += '</ul>';
  answer.innerHTML = outputHtml;
}