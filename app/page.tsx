"use client"

import { useState } from "react"
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Clock, 
  Box, 
  Undo2, 
  CheckCircle2, 
  ChevronRight,
  Sparkles,
  Calculator,
  PieChart,
  FileSignature
} from "lucide-react"

export default function CultformInvestorLanding() {
  
  // Calculator state
  const [printers, setPrinters] = useState(1) // 1 printer = $1000
  const [investmentInput, setInvestmentInput] = useState("1000")
  const [reinvest, setReinvest] = useState(false)
  const [term, setTerm] = useState(3)

  // Handlers for calculator (step = $1000)
  const handlePrintersChange = (newCount: number) => {
    const count = Math.max(1, newCount)
    setPrinters(count)
    setInvestmentInput((count * 1000).toString())
  }

  const handleInvestmentChange = (val: string) => {
    setInvestmentInput(val)
    const num = parseInt(val)
    if (!isNaN(num) && num > 0) {
      if (num % 1000 === 0) {
        setPrinters(num / 1000)
      }
    }
  }

  const handleInvestmentBlur = () => {
    let num = parseInt(investmentInput) || 1000
    num = Math.max(1000, Math.round(num / 1000) * 1000)
    setInvestmentInput(num.toString())
    setPrinters(num / 1000)
  }

  // Financial calculations (4-6% monthly range, average 5% monthly = 60% annual)
  const avgMonthlyRate = 0.05 // 5% average
  let monthlyIncome = printers * 1000 * avgMonthlyRate
  let annualIncome = monthlyIncome * 12
  
  const calculateRefund = (printerCount: number) => {
    return printerCount * 1000 // Refund value calculation
  }

  let totalReturn = (annualIncome * term) + calculateRefund(printers)

  if (reinvest) {
    let simPrinters = printers
    let simCash = 0
    let totalGenerated = 0
    
    for (let month = 1; month <= term * 12; month++) {
      const monthProfit = simPrinters * 1000 * avgMonthlyRate
      totalGenerated += monthProfit
      simCash += monthProfit
      
      if (month < term * 12) {
        const newPrinters = Math.floor(simCash / 1000)
        simPrinters += newPrinters
        simCash -= newPrinters * 1000
      }
    }
    
    monthlyIncome = totalGenerated / (term * 12)
    annualIncome = totalGenerated / term
    totalReturn = simCash + calculateRefund(simPrinters)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="bg-background text-foreground min-h-screen font-sans selection:bg-neon-purple/30 selection:text-foreground">
      
      {/* Top Fixed Blur Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => scrollToSection("hero")}
              className="text-lg md:text-xl font-bold tracking-[0.2em] text-foreground hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="text-foreground">CULT<span className="text-neon-purple">FORM</span></span>
            </button>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider bg-neon-purple/10 text-neon-purple border border-neon-purple/30">
              INVEST & 3D PRINT
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-xs tracking-[0.12em] font-medium text-foreground/70">
            <button onClick={() => scrollToSection("model")} className="hover:text-neon-purple transition-colors">
              О МОДЕЛИ
            </button>
            <button onClick={() => scrollToSection("production")} className="hover:text-neon-purple transition-colors">
              B2B ПРОИЗВОДСТВО
            </button>
            <button onClick={() => scrollToSection("calculator")} className="hover:text-neon-purple transition-colors">
              КАЛЬКУЛЯТОР
            </button>
            <button onClick={() => scrollToSection("reliability")} className="hover:text-neon-purple transition-colors">
              ДЕТАЛИ
            </button>
            <button onClick={() => scrollToSection("cases")} className="hover:text-neon-purple transition-colors">
              КЕЙСЫ 2026
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => scrollToSection("calculator")}
              className="px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold tracking-wide bg-gradient-to-r from-neon-purple to-neon-blue text-white shadow-[0_0_20px_rgba(115,109,245,0.4)] hover:shadow-[0_0_30px_rgba(115,109,245,0.7)] hover:scale-105 transition-all duration-300"
            >
              Рассчитать от $1000
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="pt-36 pb-24 px-6 md:px-10 lg:px-16 relative overflow-hidden">
        {/* Glowing background ambient lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-white/10 text-xs text-muted tracking-wider">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse shadow-[0_0_8px_rgba(15,187,66,0.8)]" />
              <span>Доверительное управление 3D-мощностями B2B</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]">
              Инвестиции в <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-blue to-foreground">
                промышленную 3D-ферму
              </span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 font-light leading-relaxed max-w-2xl">
              Приобретите ферму 3D-принтеров под ключ за <strong className="text-white font-semibold">$1000</strong> и получайте пассивный доход <strong className="text-neon-green font-semibold">4–6% в месяц (в среднем ~60% годовых)</strong>, обеспеченный B2B-контрактами на 3D-печать корпусов РЭА и приборов для КБ и R&D предприятий.
            </p>

            {/* Key stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-surface/80 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-bold text-neon-purple">$1000</div>
                <div className="text-xs text-muted mt-1">Шаг входа (1 модуль)</div>
              </div>
              <div className="p-4 rounded-2xl bg-surface/80 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-bold text-neon-green">4–6% / мес</div>
                <div className="text-xs text-muted mt-1">Доходность аренды</div>
              </div>
              <div className="p-4 rounded-2xl bg-surface/80 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-bold text-neon-yellow">24 / 7</div>
                <div className="text-xs text-muted mt-1">Промышленная 3D-ферма</div>
              </div>
              <div className="p-4 rounded-2xl bg-surface/80 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-bold text-neon-blue">B2B R&D</div>
                <div className="text-xs text-muted mt-1">Печать корпусов РЭА</div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button 
                onClick={() => scrollToSection("calculator")}
                className="px-8 py-4 rounded-2xl text-base font-semibold bg-gradient-to-r from-neon-purple to-neon-blue text-white shadow-[0_0_30px_rgba(115,109,245,0.4)] hover:shadow-[0_0_40px_rgba(115,109,245,0.8)] hover:scale-[1.02] transition-all duration-300 flex items-center gap-3"
              >
                <Calculator className="w-5 h-5" />
                Рассчитать доходность
              </button>

              <button 
                onClick={() => scrollToSection("production")}
                className="px-8 py-4 rounded-2xl text-base font-medium border border-white/15 bg-surface/40 hover:bg-surface/80 hover:border-white/30 text-foreground transition-all duration-300 flex items-center gap-2"
              >
                О B2B-производстве
                <ArrowRight className="w-4 h-4 text-neon-purple" />
              </button>
            </div>
          </div>

          {/* Hero right visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-neon-purple/30 shadow-[0_0_50px_rgba(115,109,245,0.2)] group">
              <img 
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/printed_router_batch.jpg`} 
                alt="Промышленный 3D-принтинг корпусов автоматики CULTFORM"
                className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-background/90 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-neon-purple/20 text-neon-purple">
                    <Box className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">B2B-производство 2026</h4>
                    <p className="text-xs text-muted">Опытные корпуса на DIN-рейку для КБ радиоэлектроники</p>
                  </div>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-3">
                  <div className="bg-neon-purple h-full w-[100%] rounded-full shadow-[0_0_10px_#736df5]" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 1: HOW IT WORKS / INVESTMENT MODEL */}
      <section id="model" className="py-24 px-6 md:px-10 lg:px-16 relative border-t border-white/5 bg-surface/20">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest text-neon-purple bg-neon-purple/10 border border-neon-purple/20 uppercase">
              Модель Пассивного Дохода
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Формат взаимодействия с инвестором
            </h2>
            <p className="text-muted text-base md:text-lg">
              Прозрачный процесс от покупки оборудования до ежемесячных арендных выплат
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Покупка оборудования",
                text: "Инвестор приобретает ферму 3D-принтеров под ключ стоимостью $1000 ($697 оборудование + $303 первичные материалы).",
                color: "text-neon-purple",
                borderColor: "border-neon-purple/30",
                bgHover: "hover:bg-neon-purple/5"
              },
              {
                step: "02",
                title: "Официальный договор",
                text: "Подписывается Договор доверительного управления с фиксированным графиком выплат арендной платы.",
                color: "text-neon-green",
                borderColor: "border-neon-green/30",
                bgHover: "hover:bg-neon-green/5"
              },
              {
                step: "03",
                title: "Управление CULTFORM",
                text: "Мы размещаем мощности на 3D-ферме, обеспечиваем производство корпусов РЭА и работу с B2B-заказчиками.",
                color: "text-neon-orange",
                borderColor: "border-neon-orange/30",
                bgHover: "hover:bg-neon-orange/5"
              },
              {
                step: "04",
                title: "Выплаты 4–6% в месяц",
                text: "Ежемесячно с 1-го по 10-е число вы получаете арендную плату (в диапазоне 4–6% в месяц).",
                color: "text-neon-yellow",
                borderColor: "border-neon-yellow/30",
                bgHover: "hover:bg-neon-yellow/5"
              },
              {
                step: "05",
                title: "Возврат / Масштаб",
                text: "Возможность докупки принтеров или 100% возврата стоимости сырья и оборудования по контракту.",
                color: "text-neon-blue",
                borderColor: "border-neon-blue/30",
                bgHover: "hover:bg-neon-blue/5"
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className={`p-6 rounded-3xl bg-surface/60 border ${item.borderColor} ${item.bgHover} transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
              >
                <div>
                  <span className={`text-4xl font-extrabold ${item.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-4 mb-2">{item.title}</h3>
                  <p className="text-xs md:text-sm text-muted leading-relaxed">{item.text}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-white/60 group-hover:text-white transition-colors">
                  <span>Этап {idx + 1}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-muted group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Highlights summary cards */}
          <div className="grid md:grid-cols-2 gap-8 pt-6">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-neon-purple/10 to-transparent border border-neon-purple/30 relative">
              <div className="w-12 h-12 rounded-2xl bg-neon-purple/20 flex items-center justify-center text-neon-purple mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Доходность 4–6% в месяц</h3>
              <p className="text-muted leading-relaxed text-sm md:text-base">
                Приобретенная ферма 3D-принтеров под ключ за <span className="text-neon-purple font-semibold">$1000</span> обеспечивает доход <span className="text-neon-purple font-semibold">4–6% в месяц</span> (в среднем ~60% годовых). Доход формируется от реализационной маржи корпусных изделий.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-neon-green/10 to-transparent border border-neon-green/30 relative">
              <div className="w-12 h-12 rounded-2xl bg-neon-green/20 flex items-center justify-center text-neon-green mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Гарантированный возврат вклада</h3>
              <p className="text-muted leading-relaxed text-sm md:text-base">
                Предусмотрен возврат <span className="text-neon-green font-semibold">100% затрат на материал ($303)</span> и до <span className="text-neon-green font-semibold">50–100% стоимости принтера ($697)</span> по завершении срока контракта.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: B2B PRODUCTION JUSTIFICATION */}
      <section id="production" className="py-24 px-6 md:px-10 lg:px-16 relative">
        <div className="max-w-7xl mx-auto space-y-20">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest text-neon-blue bg-neon-blue/10 border border-neon-blue/20 uppercase">
              B2B Обоснование Дохода
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Чем обеспечена маржинальность проекта?
            </h2>
            <p className="text-muted text-base md:text-lg">
              Направление деятельности — поставка 3D-печатных корпусов РЭА для Конструкторских бюро (КБ), Отделов главного конструктора (ОГК) и R&D-центров.
            </p>
          </div>

          {/* Problem vs CULTFORM comparison */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-surface/50 border border-red-500/20 hover:border-red-500/40 transition-colors">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-red-400 bg-red-500/10 mb-6">
                Традиционный подход рынка
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">1 вариант корпуса из CAD-программы</h3>
              <ul className="space-y-4 text-sm text-foreground/80">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✕</div>
                  <span>Модель выглядит отлично на мониторе, но при сборке реальная плата PCB упирается в элементы.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✕</div>
                  <span>Пластиковые защелки на DIN-рейку деформируются при монтаже из-за некорректных допусков.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✕</div>
                  <span>Ошибки ведут к высоким рискам и долгой переделке стальных пресс-форм.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-surface/50 border border-neon-green/30 hover:border-neon-green/60 transition-colors shadow-[0_0_30px_rgba(15,187,66,0.1)]">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-neon-green bg-neon-green/10 mb-6">
                Подход CULTFORM AI & 3D Print
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Быстрая физическая выклепка образцов</h3>
              <ul className="space-y-4 text-sm text-foreground/80">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                  <span>ИИ помогает модифицировать геометрию защелок, решеток обдува и пломбировочных узлов.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                  <span>Инженеры КБ смогут физически примерить плату и отобрать оптимальную конструкцию.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                  <span>Высокая маржинальность мелкосерийного прототипирования без стальных пресс-форм.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* High Margin Product Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-surface border border-white/10 hover:border-neon-blue/40 transition-all group">
              <div className="text-xs font-semibold text-neon-blue tracking-widest uppercase mb-2">B2B Радиоэлектроника</div>
              <h4 className="text-xl font-bold text-white mb-4">Корпуса на DIN-рейку (РЭА)</h4>
              <p className="text-xs md:text-sm text-muted mb-6">
                Шестимодульные корпуса для контроллеров автоматизации и блоков питания под задачи вендоров.
              </p>
              <div className="p-4 rounded-2xl bg-background/80 border border-white/5 text-xs space-y-1">
                <div className="flex justify-between text-muted">
                  <span>Технология:</span> <strong className="text-white">SLS PA12 (Полиамид)</strong>
                </div>
                <div className="flex justify-between text-muted">
                  <span>Целевой сегмент:</span> <strong className="text-neon-blue">КБ & ОГК Вендоры</strong>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-surface border border-white/10 hover:border-neon-purple/40 transition-all group">
              <div className="text-xs font-semibold text-neon-purple tracking-widest uppercase mb-2">Сетевые устройства</div>
              <h4 className="text-xl font-bold text-white mb-4">Коммутаторы & Маршрутизаторы</h4>
              <p className="text-xs md:text-sm text-muted mb-6">
                Корпуса сетевых устройств с запрессованными резьбовыми латунными втулками M3/M4 и оптическими окнами.
              </p>
              <div className="p-4 rounded-2xl bg-background/80 border border-white/5 text-xs space-y-1">
                <div className="flex justify-between text-muted">
                  <span>Технология:</span> <strong className="text-white">FDM Carbon & SLA</strong>
                </div>
                <div className="flex justify-between text-muted">
                  <span>Особенность:</span> <strong className="text-neon-purple">Повышенная прочность</strong>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-surface border border-white/10 hover:border-neon-orange/40 transition-all group">
              <div className="text-xs font-semibold text-neon-orange tracking-widest uppercase mb-2">Дизайнерские серии</div>
              <h4 className="text-xl font-bold text-white mb-4">Предметы эстетики & Оправы</h4>
              <p className="text-xs md:text-sm text-muted mb-6">
                Опытное изготовление 3D-печатных оправ для салонов оптики и эксклюзивных интерьерных элементов.
              </p>
              <div className="p-4 rounded-2xl bg-background/80 border border-white/5 text-xs space-y-1">
                <div className="flex justify-between text-muted">
                  <span>Применение:</span> <strong className="text-white">Оптика & Интерьеры</strong>
                </div>
                <div className="flex justify-between text-muted">
                  <span>Преимущество:</span> <strong className="text-neon-orange">Кастомизация</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Farm showcase with images */}
          <div className="grid lg:grid-cols-12 gap-8 items-center pt-8">
            <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-white/15 shadow-2xl relative group">
              <img 
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/printer_farm_lab.jpg`} 
                alt="Ферма 3D-принтеров CULTFORM" 
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4">
                <div className="px-4 py-2 rounded-xl bg-background/90 border border-white/10 backdrop-blur-md">
                  <span className="text-xs text-muted block">Скорость печати</span>
                  <span className="text-lg font-bold text-neon-purple">до 500 мм/с</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-background/90 border border-white/10 backdrop-blur-md">
                  <span className="text-xs text-muted block">Точность слоя</span>
                  <span className="text-lg font-bold text-neon-green">0.05 - 0.16 мм</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-background/90 border border-white/10 backdrop-blur-md">
                  <span className="text-xs text-muted block">Режим работы</span>
                  <span className="text-lg font-bold text-neon-yellow">24/7 Без выходных</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-lg">
                <img 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/router_detail_macro.jpg`} 
                  alt="Макро-съемка деталей 3D-печати"
                  className="w-full h-[220px] object-cover"
                />
              </div>
              <div className="p-6 rounded-3xl bg-surface border border-white/10 space-y-3">
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-neon-yellow" />
                  Стандарты качества CULTFORM
                </h4>
                <ul className="text-xs md:text-sm text-muted space-y-2">
                  <li>• <strong>Запрессовка резьб:</strong> Вплавление латунных резьбовых втулок M3/M4</li>
                  <li>• <strong>Маркировка:</strong> Лазерная гравировка номеров модификаций</li>
                  <li>• <strong>ОТК Контроль:</strong> Измерение допусков посадки плат (PCB)</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: INVESTOR YIELD CALCULATOR */}
      <section id="calculator" className="py-24 px-6 md:px-10 lg:px-16 relative bg-surface/30 border-t border-white/5">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest text-neon-purple bg-neon-purple/10 border border-neon-purple/20 uppercase">
              Интерактивный Расчет
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Калькулятор доходности инвестора
            </h2>
            <p className="text-muted text-base md:text-lg">
              Настройте количество модулей фермы (шаг $1000), срок контракта и опцию реинвестирования
            </p>
          </div>

          <div className="p-8 md:p-12 rounded-3xl bg-surface border border-white/15 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
            
            {/* Ambient subtle background blur */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="space-y-10 relative z-10">
              
              {/* Printers selector */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-semibold tracking-widest text-muted uppercase">
                    Количество модулей 3D-фермы в управлении
                  </label>
                  <span className="text-xs text-neon-purple font-mono font-medium">1 модуль = $1000</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handlePrintersChange(printers - 1)}
                    className="w-14 h-14 rounded-2xl border border-white/20 text-2xl font-bold hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center text-white"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={printers}
                    onChange={(e) => handlePrintersChange(parseInt(e.target.value) || 1)}
                    className="w-36 h-14 bg-background/80 rounded-2xl border border-white/20 text-center text-2xl font-bold text-white focus:outline-none focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20 tabular-nums"
                  />
                  <button
                    onClick={() => handlePrintersChange(printers + 1)}
                    className="w-14 h-14 rounded-2xl border border-white/20 text-2xl font-bold hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center text-white"
                  >
                    +
                  </button>
                  
                  <div className="hidden sm:flex flex-col ml-4">
                    <span className="text-sm text-muted">Общая сумма вклада:</span>
                    <span className="text-2xl font-bold text-white">${(printers * 1000).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Direct Investment Amount Input */}
              <div className="space-y-3">
                <label className="text-xs font-semibold tracking-widest text-muted uppercase flex items-center gap-2">
                  Объем вклада ($)
                  <span className="text-neon-purple text-[10px]">*Кратно $1000</span>
                </label>
                <input
                  type="number"
                  step="1000"
                  min="1000"
                  value={investmentInput}
                  onChange={(e) => handleInvestmentChange(e.target.value)}
                  onBlur={handleInvestmentBlur}
                  className="w-full h-14 bg-background/80 rounded-2xl border border-white/20 px-6 text-xl font-bold text-white focus:outline-none focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20 tabular-nums"
                />
              </div>

              {/* Monthly Rate Info Box */}
              <div className="p-5 rounded-2xl bg-neon-purple/10 border border-neon-purple/30 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-neon-purple/20 text-neon-purple flex-shrink-0 mt-0.5">
                  <PieChart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Доходность 4–6% в месяц</h4>
                  <p className="text-xs text-muted leading-relaxed mt-0.5">
                    Доходность варьируется от 4% до 6% в месяц в зависимости от загрузки производственных линий B2B-заказами.
                  </p>
                </div>
              </div>

              {/* Contract Term Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-semibold tracking-widest text-muted uppercase">
                    Срок контракта
                  </label>
                  <span className="text-lg font-bold text-neon-purple font-mono">
                    {term} {term === 1 ? 'год' : term > 4 ? 'лет' : 'года'}
                  </span>
                </div>
                
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={term}
                  onChange={(e) => setTerm(parseInt(e.target.value))}
                  className="w-full h-2 accent-neon-purple bg-white/10 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted">
                  <span>1 год (мин.)</span>
                  <span>3 года</span>
                  <span>5 лет (макс.)</span>
                </div>
              </div>

              {/* Reinvestment Switch */}
              <div className="flex items-center justify-between py-4 border-t border-b border-white/10">
                <div>
                  <h4 className="text-sm font-semibold text-white">Автоматическое реинвестирование</h4>
                  <p className="text-xs text-muted">
                    Докупка новых мощностей по мере накопления каждых $1000 прибыли
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setReinvest(!reinvest)}
                  className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                    reinvest ? 'bg-neon-purple shadow-[0_0_15px_rgba(115,109,245,0.6)]' : 'bg-white/10'
                  }`}
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                      reinvest ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Result cards grid */}
              <div className="grid md:grid-cols-2 gap-6 pt-2">
                <div className="p-6 rounded-2xl bg-background/90 border border-white/10 border-l-4 border-l-neon-purple">
                  <span className="text-xs text-muted tracking-widest uppercase block mb-2">
                    {reinvest ? 'Средний доход в месяц' : 'Ежемесячный доход (при 5% средн.)'}
                  </span>
                  <div className="text-4xl font-bold text-neon-purple tabular-nums">
                    ${monthlyIncome.toFixed(0)}
                  </div>
                  <span className="text-xs text-muted mt-1 block">диапазон выплат 4–6%/мес</span>
                </div>

                <div className="p-6 rounded-2xl bg-background/90 border border-white/10 border-l-4 border-l-neon-purple">
                  <span className="text-xs text-muted tracking-widest uppercase block mb-2">
                    {reinvest ? 'Средний доход в год' : 'Годовой доход'}
                  </span>
                  <div className="text-4xl font-bold text-neon-purple tabular-nums">
                    ${annualIncome.toFixed(0)}
                  </div>
                  <span className="text-xs text-muted mt-1 block">доходность ~60% годовых</span>
                </div>
              </div>

              {/* Final Return Highlight */}
              <div className="p-8 rounded-2xl bg-gradient-to-r from-neon-green/10 via-neon-green/5 to-transparent border border-neon-green/30 text-center space-y-3">
                <span className="text-xs font-semibold text-neon-green tracking-widest uppercase block">
                  Итого на руках через {term} {term === 1 ? 'год' : term > 4 ? 'лет' : 'года'} (включая возврат стоимости оборудования):
                </span>
                <div className="text-4xl md:text-6xl font-extrabold text-neon-green tabular-nums shadow-neon">
                  ${totalReturn.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
                <p className="text-xs text-muted max-w-xl mx-auto">
                  Расчет включает начисленные выплаты и 100% возврат стоимости сырьевого материала ($303/модуль) + выкуп оборудования ($697/модуль).
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: EXACT MATCH OF SCREENSHOT - PRESERVED IMPORTANT DETAILS */}
      <section id="reliability" className="py-24 px-6 md:px-10 lg:px-16 relative">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white">
              Предусмотрены <br />
              важные детали:
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "Соблюдение авторских прав",
                description: "Используем исключительно Open Source (CC BY) материалы и приобретаем расширенные коммерческие лицензии."
              },
              {
                title: "Сохранность при доставке",
                description: "Применяем многослойную защитную упаковку и работаем с пулом проверенных логистических партнеров."
              },
              {
                title: "Бесперебойная поставка сырья",
                description: "Основной материал (PLA+) всегда доступен на рынке, а стратегические закупки исключают любые задержки."
              },
              {
                title: "Стабильность B2B-спроса",
                description: "Ориентация на широкий спектр КБ, производителей радиоэлектроники и систем автоматизации обеспечивает регулярный поток контрактов и высокую загрузку 3D-фермы."
              },
              {
                title: "Безотказная работа оборудования",
                description: "Обеспечение еженедельного ТО и формирование фонда оперативной замены комплектующих (сопла и экструдеры всегда в наличии)."
              },
              {
                title: "Энергонезависимость производства",
                description: "Всё оборудование защищено и подключено к резервным генераторам на случай любых перебоев с электричеством."
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="group relative p-6 md:p-8 lg:p-10 border border-white/10 hover:border-neon-orange/40 hover:shadow-[0_0_20px_rgba(246,96,35,0.15)] hover:bg-foreground/[0.02] transition-all duration-500 rounded-2xl overflow-hidden bg-surface/40"
              >
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[1px] bg-neon-orange shadow-[0_0_10px_rgba(246,96,35,0.8)] transition-all duration-500" />
                <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-4 flex items-start gap-4">
                  <span className="w-2 h-2 bg-neon-orange mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(246,96,35,0.8)]" />
                  <span className="group-hover:text-neon-orange transition-colors duration-500">{item.title}</span>
                </h4>
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed pl-6">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: B2B DIRECTION 2026 */}
      <section id="cases" className="py-24 px-6 md:px-10 lg:px-16 relative bg-surface/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest text-neon-yellow bg-neon-yellow/10 border border-neon-yellow/20 uppercase">
              Перспектива 2026
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              B2B-направления 2026
            </h2>
            <p className="text-muted text-base md:text-lg">
              Направления производства корпусных деталей под задачи отечественных инженеров
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-surface border border-white/10 space-y-6 flex flex-col justify-between hover:border-neon-purple/40 transition-colors">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-neon-purple bg-neon-purple/10">
                  Приборы автоматики
                </div>
                <h3 className="text-xl font-bold text-white">Корпуса ИБП на DIN-рейку</h3>
                <p className="text-xs md:text-sm text-muted leading-relaxed">
                  Изготовление SLS/FDM корпусов для тестирования упругости защелок 35 мм крепления.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-background/80 border border-white/5">
                <div className="text-xs text-muted">Целевой эффект:</div>
                <div className="text-sm font-bold text-neon-green mt-1">Тестирование защелок без поломок</div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-surface border border-white/10 space-y-6 flex flex-col justify-between hover:border-neon-blue/40 transition-colors">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-neon-blue bg-neon-blue/10">
                  IoT-оборудование
                </div>
                <h3 className="text-xl font-bold text-white">Модульный контроллер</h3>
                <p className="text-xs md:text-sm text-muted leading-relaxed">
                  Прототипирование SLA-лицевых панелей с окнами индикации для исключения паразитной засветки.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-background/80 border border-white/5">
                <div className="text-xs text-muted">Целевой эффект:</div>
                <div className="text-sm font-bold text-neon-blue mt-1">Сокращение сроков согласования R&D</div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-surface border border-white/10 space-y-6 flex flex-col justify-between hover:border-neon-yellow/40 transition-colors">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-neon-yellow bg-neon-yellow/10">
                  Сетевые устройства
                </div>
                <h3 className="text-xl font-bold text-white">Промышленный L3-коммутатор</h3>
                <p className="text-xs md:text-sm text-muted leading-relaxed">
                  FDM-макетирование вариантов пространственной компоновки плат PCB и оптимизация охлаждения.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-background/80 border border-white/5">
                <div className="text-xs text-muted">Целевой эффект:</div>
                <div className="text-sm font-bold text-neon-yellow mt-1">Оптимизация пассивного отвода тепла</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 md:px-10 border-t border-white/10 bg-background text-xs text-muted">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-base font-bold text-white tracking-widest">
              CULT<span className="text-neon-purple">FORM</span>
            </div>
            <p className="max-w-md">
              Студия 3D-печати & ИИ-прототипирования опытных партий корпусов РЭА и приборов автоматики. Доверительное управление оборудованием.
            </p>
            <p className="text-[10px] text-muted/60">
              © 2026 CULTFORM (ИП Фон Берг Ю.А., ИНН 233803342844). Все права защищены.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-foreground/70">
            <button onClick={() => scrollToSection("model")} className="hover:text-white transition-colors">О модели</button>
            <button onClick={() => scrollToSection("production")} className="hover:text-white transition-colors">B2B Производство</button>
            <button onClick={() => scrollToSection("calculator")} className="hover:text-white transition-colors">Калькулятор</button>
            <button onClick={() => scrollToSection("reliability")} className="hover:text-white transition-colors">Детали</button>
            <button onClick={() => scrollToSection("cases")} className="hover:text-white transition-colors">Кейсы 2026</button>
          </div>
        </div>
      </footer>

    </div>
  )
}
