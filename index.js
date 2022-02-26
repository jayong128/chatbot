const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

const apiRouter = express.Router();

app.use(logger('dev', {}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', apiRouter);
const han = ['불고기','오징어 두루치기','닭볶음','쌈밥','비빔밥'];
const tang = ['김치찌개','순두부찌개','된장찌개','부대찌개','동태찌개'];
const joong = ['짜장면','짬뽕','볶음밥','탕수육','마파두부'];
const yang = ['햄버거','피자','리조또','파스타','스테이크'];
const simple = ['떡볶이','김밥','라면','토스트','편의점 도시락'];
const etc = ['쌀국수','닭갈비','수제비','카레','칼국수'];
const hae = ['콩나물국밥','순대국','뼈해장국','우거지국','선지해장국'];
const japan = ['초밥','라멘','돈까스','덮밥','우동'];
const category = [joong,simple,hae,tang,han,japan,yang,etc];
apiRouter.post('/sayHello', function(req, res) {
  var pick = req.body.userRequest.utterance;
  var menu = -1;
  switch(pick){
  	case('중식'):
		  menu = 0;
		  break;
	case('간편식'):
		  menu = 1;
		  break;
	case('해장'):
		  menu = 2;
		  break;
	case('탕,찌개'):
		  menu = 3;
		  break;
	case('한식'):
		  menu = 4;
		  break;
	case('일식'):
		  menu = 5;
		  break;
	case('양식'):
		  menu = 6;
		  break;
	case('기타'):
		  menu = 7;
		  break;
  }
  var detail = Math.floor(Math.random()*5);
  console.log(detail);
  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text:category[menu][detail]+' 은(는) 어떤가요\n다시 선택하고 싶으면 카테고리 다시 선택'
          }
        }
      ],
      quickReplies:[
	      {
	      	messageText:'점메추',
		action:'message',
		label:'다시 선택'
	      }
	]
    }
  };

  res.status(200).send(responseBody);
});

app.listen(80, function() {
  console.log('Example skill server listening on port 3000!');
});
