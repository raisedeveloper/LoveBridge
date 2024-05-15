import HeaderAside from "../components/HeaderAside";

export default function album({x}) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];  
    console.log('Selected File:', file);
    // 여기서 선택한 파일을 저장하고 앨범에 표시하는 로직을 추가할 수 있습니다.
  };

  return (
    <div>
      <h1>앨범</h1>
      <input type="file" onChange={handleFileChange} />
      <p>앨범에 파일을 추가하세요.</p>
    </div>
  );
}