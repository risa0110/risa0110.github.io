let answer= document.querySelector('#answer');

changeAll();

//ボタン全表示
function changeAll() {
  let outputHtml = '<ul>';
  let i = 0;
  while (i < tweets.length) {
    outputHtml += '<li style="list-style:none"> <img src="${tweets[i].avatar}" alt=""> <b>${tweets[i].name}</b> ${tweets[i].message} <i>${tweets[i].tweetedAt}</i> </li>';
    i++;
  }
  outputHtml += '</ul>';
  answer.innerHTML = outputHtml;
}

//三郎BOTのみ表示
function changeBot(){
  let outputHtml = '<ul>';
  let i = 0;
  while(i<tweets.length){
    if (tweets[i].name === "三郎BOT"){
      outputHtml += '<li style="list-style:none"><img src="${tweets[i].avatar}" alt=""> <b>${tweets[i].name}</b> ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>';
    }
    i++;
  }
  outputHtml+='</ul>';
  answer.innerHTML = outputHtml;
}

//次郎のみ表示
function changeJiro(){
  let outputHtml='<ul>';
  let i = 0;
  while(i<tweets.length){
    if (tweets[i].name==="次郎"){
      outputHtml += '<li style="list-style:none"><img src="${tweets[i].avatar}" alt=""><b>${tweets[i].name}</b> ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>';
    }
    i++;
  }
  outputHtml+='</ul>';
  answer.innerHTML = outputHtml;
}

//太郎のみ表示
function changeTaro(){
  let outputHtml='<ul>';
  let i = 0;
  while(i<tweets.length){
    if (tweets[i].name==="太郎"){
      outputHtml += '<li style="list-style:none"><img src="${tweets[i].avatar}" alt=""> <b>${tweets[i].name}</b> ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>';
    }
    i++;
  }
  outputHtml+='</ul>';
  answer.innerHTML = outputHtml;
}
