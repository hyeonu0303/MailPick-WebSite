const Home = ()=> {
  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center">
      <div className="flex-col items-center text-center">
        <p className="text-9xl">Smart AI Email</p>
        <p className="text-3xl info-color pb-5">Mailin은 이메일 이상의 기능을 제공합니다.</p><br/>
        <button className="py-3 px-8 mr-2 bg-main-color rounded-full text-white text-2xl p-3">시작하기</button>
        <button className="font-main-color text-2xl p-3">플랜 및 가격</button>
      </div>
    </div>
  )
}

export default Home;
