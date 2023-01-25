//import {useState} from 'react'; or import React from 'react'; 
import React, {useState} from 'react'; 
export function Count({down}) {
  let downUI = null;
//  let countState = React.useState(10); //useState를 만듦,  배열이 return된다.
  let countState = useState(10);  //React 생략 가능 위에서 , {useState} 써줬기 때문에

  //구조 분해 할당
    //수정전
      //let count = countState[0];    //값을 읽을 때 사용
      //let setCount = countState[1]; //겂울 수정할 때 사용

    //수정후
      let [count, setCount] = useState(10); //  jsx 문법
      let [step,  setStep]  = useState(1);

  function upHandler(){
    //console.log("up")
    //count += 1; //변수값이 바뀌어도 함수가 재실행 되는 건 아니기 때문에 변함없다.
    setCount(oldCount=>oldCount+step);  // 동적 값 할당,컴포넌트 함수를 다시 호출한다.
  }

  function downHandler(){
    setCount(oldCount=>oldCount-step);
  }

  if(down) {
    downUI = <input type="button" value="-"></input> 
  }
  return <div>
    {count}
    {/* // 이전의 값에 의존하는 경우에는 함수로 선언해서 사용한다 !!!!!!!!!!!!!!! */}
    <input type="button" value="+" onClick={upHandler}></input>
    <input type="text" value={step} onChange={
      function (event){ // 첫번째 파라미터로 event객체를 넘겨준다.
        console.log(event.target.value);  //기존 text value 값을 가져와야한다.
        setStep(event.target.value);
      }
    }></input>
    {/* <input type="text" value={step} onChange={evt=>setStep(evt.target.value)} > </input> */}
    <input type="button" value="-" onClick={downHandler}></input>
  </div>
}
