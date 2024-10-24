import Image from "next/image"
import { Button } from "@/components/Button"
import { ArrowRight, Mail, Calendar, Search, Check } from "lucide-react"

const Home = ()=> {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Mail className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-gray-900">MailPick</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900">기능</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900">가격</a>
          <a href="#about" className="text-gray-600 hover:text-gray-900">소개</a>
        </nav>
        <Button>다운로드</Button>
      </header>

      <main className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          스마트 AI 이메일
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          MailPick은 AI 기술로 이메일 경험을 혁신합니다.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <Button size="lg" className="w-full md:w-auto">
            시작하기
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="w-full md:w-auto">
            더 알아보기
          </Button>
        </div>
      </main>

      <section className="container mx-auto px-4 py-20">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">주요 기능</h2>
  <div className="grid md:grid-cols-12 gap-8 items-center">
    <div className="md:col-span-7 relative">
      <div className="sticky top-8">
        <Image 
          src="/main.png" 
          alt="MailPick 앱 스크린샷" 
          width={1200}
          height={900}
          className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
          priority
        />
      </div>
    </div>
    <div className="md:col-span-5">
      <div className="grid gap-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100">
            <Mail className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">스마트 받은편지함</h3>
            <p className="text-gray-600 mt-2">AI 기반 이메일 정리 및 우선순위 지정</p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100">
            <Calendar className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">통합 캘린더</h3>
            <p className="text-gray-600 mt-2">이메일과 함께 일정을 원활하게 관리</p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100">
            <Search className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">고급 검색</h3>
            <p className="text-gray-600 mt-2">강력한 검색 기능으로 모든 이메일과 첨부파일을 빠르게 찾기</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="container mx-auto px-4 py-20 bg-gray-50">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">플랜 및 가격</h2>
  <p className="text-center text-blue-600 hover:text-blue-700 mb-12">
    <a href="#" className="flex items-center justify-center gap-1">
      구독 및 지불 정책 자세히 알아보기 
      <span className="text-lg">›</span>
    </a>
  </p>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {/* Basic Plan */}
    <div className="bg-white rounded-lg shadow-lg p-8 relative">
      <h3 className="text-2xl font-bold mb-4">Basic</h3>
      <div className="flex items-end gap-1 mb-6">
        <span className="text-3xl font-bold text-gray-400 line-through">₩0</span>
        <span className="text-gray-600">/월</span>
      </div>
      <ul className="space-y-4 mb-8">
        <li className="flex items-center gap-2">
          <Check className="h-5 w-5 text-blue-600" />
          <span>계정 추가 무제한</span>
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-5 w-5 text-blue-600" />
          <span>캘린더, 기본 메일 서비스</span>
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-5 w-5 text-blue-600" />
          <span>2GB 용량제공</span>
        </li>
      </ul>
      <Button variant="outline" size="lg" className="w-full">시작하기</Button>
    </div>

    {/* Standard Plan */}
    <div className="bg-white rounded-lg shadow-lg p-8 relative">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">Popular</span>
      </div>
      <h3 className="text-2xl font-bold mb-4">Standard</h3>
      <div className="flex items-end gap-1 mb-6">
        <span className="text-3xl font-bold">₩9,900</span>
        <span className="text-gray-600">/월</span>
      </div>
      <ul className="space-y-4 mb-8">
        <li className="flex items-center gap-2">
          <Check className="h-5 w-5 text-blue-600" />
          <span>계정 추가 무제한</span>
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-5 w-5 text-blue-600" />
          <span>20GB 용량제공</span>
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-5 w-5 text-blue-600" />
          <span>AI 메일 요약 및 자동일정추가</span>
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-5 w-5 text-blue-600" />
          <span>대용량 첨부파일 지원</span>
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-5 w-5 text-blue-600" />
          <span>마감 프로모션 자동알림</span>
        </li>
      </ul>
      <Button size="lg" className="w-full">시작하기</Button>
    </div>

    {/* Pro Plan */}
    <div className="bg-white rounded-lg shadow-lg p-8 relative">
      <h3 className="text-2xl font-bold mb-4">Pro</h3>
      <div className="flex items-end gap-1 mb-6">
        <span className="text-3xl font-bold">₩12,900</span>
        <span className="text-gray-600">/월</span>
      </div>
      <ul className="space-y-4 mb-8">
        <li className="flex items-center gap-2">
          <Check className="h-5 w-5 text-blue-600" />
          <span>계정 추가 무제한</span>
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-5 w-5 text-blue-600" />
          <span>50GB 용량제공</span>
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-5 w-5 text-blue-600" />
          <span>AI 메일 요약 및 자동일정추가</span>
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-5 w-5 text-blue-600" />
          <span>대용량 첨부파일 지원</span>
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-5 w-5 text-blue-600" />
          <span>마감 프로모션 자동알림</span>
        </li>
      </ul>
      <Button variant="outline" size="lg" className="w-full">시작하기</Button>
    </div>
  </div>
</section>

      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">이메일 경험을 혁신할 준비가 되셨나요?</h2>
          <Button size="lg" variant="secondary">
            지금 MailPick 다운로드
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home;