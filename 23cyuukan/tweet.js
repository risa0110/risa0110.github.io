let answer= document.querySelector('#answer');
let outputHtml ='<ul>';

let i = 0;
while (i<tweets.length) {
  outputHtml += '<li><img src="${tweets[i].avatar}"> ${tweets[i].name} ${tweets[i].message}</li>';
  i++;
}
outputHtml+='</ul>';
answer.innerHTML =outputHtml;