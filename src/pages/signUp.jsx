import React from "react";
import { register, userState } from "../api/firebase";

export default function SignUp() {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });  // 별도로 떼어내도 쓸 수 있음Form table에 Data가 많이 들어갈 예정이라 이렇게 써야함
  const [user, setUser] = userState(null);  // 초기엔 빈칸
  const handleChange = e => {
    setUserInfo({...userInfo, [e.target.name]: e.target.value});   // 오브젝트 추가 - 만약 이메일이 들어왔으면 기존에 것에 이메일의 값만 채워넣는 처리과정
  }
    const handleSubmit = e => {
    e.preventDefault();
    register(userInfo)
      .then(result => {
        console.log(result);
        setUser(result);
      })
  }


  return ( // 정보를 받아오는 구간
    <div style={{ margin: '20px' }}>
      <form onSubmit={handleSubmit}>
        <input type="emial" name="emial" value={userInfo.email} placeholder="이메일"
          onChange={handleChange} /><br />
        <input type="password" name="password" value={userInfo.password} placeholder="패스워드"
          onChange={handleChange} /><br />
        <button onClick={handleSubmit}>사용자 등록</button>
      </form>
    </div>
  );
}