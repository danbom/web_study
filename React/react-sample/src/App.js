import logo from './logo.svg';
import './App.css';
import React , { useState, Component } from 'react';
import axios from 'axios';


class Title extends Component {
  render() {
    return(
      <h1 stype="text-align:center;">
        Welcome Trademark Verification
      </h1>
    )
  }
}

class SimilarityText extends Component {
  render() {
    return(
      <div>
      입력하신 상표와 기존 상표 데이터와의 유사도는 00 % 입니다.
      </div>
    )
    
  }
}

class SubTitle extends Component {
  render() {
    return(
      <div> 유사한 상표 목록 </div>
    )
  }
}

class SimilarityImg extends Component {
  render() {
    return(
      <div>
        <img src=""></img>
      </div>
    )
  }
}

class SimilarityDesc extends Component {
  render() {
    return(
      <div>
        단어의 크기가 클수록 ... 와 유사합니다.
      </div>
    )
  }
}

function App() {

  
  
  // class CategoryOption extends Component {
  //   render() {
  //     return(
  //       <p>
  //         <select id="class" onChange = {processNumber}>
  //           <optgroup label="상표 분류 선택">
  //             <option value="1">제1류</option>
  //             <option value="2">제2류</option>
  //             <option value="3">제3류</option>
  //             <option value="4">제4류</option>
  //             <option value="5">제5류</option>
  //             <option value="6">제6류</option>
  //             <option value="7">제7류</option>
  //             <option value="8">제8류</option>
  //             <option value="9">제9류</option>
  //             <option value="10">제10류</option>
  //             <option value="11">제11류</option>
  //             <option value="12">제12류</option>
  //             <option value="13">제13류</option>
  //             <option value="14">제14류</option>
  //             <option value="15">제15류</option>
  //             <option value="16">제16류</option>
  //             <option value="17">제17류</option>
  //             <option value="18">제18류</option>
  //             <option value="19">제19류</option>
  //           </optgroup>
  //         </select>
  //       </p>
  //     )
  //   }
  // }

  const [text, setText] = useState('')
  const [number, setNumber] = useState(0)
    
  const processNumber = (e) => {
      setNumber(e.target.value)
    }

    const processText = (e) => {
      setText(e.target.value)
    }

    

    const sendData = () => {
      let form = new FormData()
      form.append('title',text)
      form.append('category',number)

      axios.post('http://127.0.0.1:5000/api/data_transmit',form)
      .then( response => { 
        console.log('response : ', JSON.stringify(response, null, 2)) 
      }).catch( error => { console.log('failed', error) 
    })
  }


  return (
    <div className="App">
      <Title></Title>
      <SimilarityText></SimilarityText>
      <SubTitle></SubTitle>
      {/* <SimilarityImg></SimilarityImg> */}
      <SimilarityDesc></SimilarityDesc>
      {/* <CategoryOption></CategoryOption> */}
      {/* <p>
          <select id="class" onChange = {processNumber}>
            <optgroup label="상표 분류 선택">
              <option value="1">제1류</option>
              <option value="2">제2류</option>
              <option value="3">제3류</option>
              <option value="4">제4류</option>
              <option value="5">제5류</option>
              <option value="6">제6류</option>
              <option value="7">제7류</option>
              <option value="8">제8류</option>
              <option value="9">제9류</option>
              <option value="10">제10류</option>
              <option value="11">제11류</option>
              <option value="12">제12류</option>
              <option value="13">제13류</option>
              <option value="14">제14류</option>
              <option value="15">제15류</option>
              <option value="16">제16류</option>
              <option value="17">제17류</option>
              <option value="18">제18류</option>
              <option value="19">제19류</option>
            </optgroup>
          </select>
        </p> */}
      {/* <p>
          <input type="text" placeholder="상표명 입력" onChange={processText}/>
      </p> */}
      {/* <p>
        <button onClick={sendData}>
          상표 유사도 확인
        </button>
      </p> */}
    </div>
  );
}

export default App;
