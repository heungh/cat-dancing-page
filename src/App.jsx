import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import { useAnimation } from './hooks/useAnimation'
import './styles/global.css'

function App() {
  const {
    isAnimating,
    animationSpeed,
    animationType,
    toggleAnimation,
    resetAnimation,
    changeAnimationSpeed,
    changeAnimationType
  } = useAnimation()

  return (
    <div className="app">
      <header className="app-header">
        <h1>🐱 댄싱 캣 🕺</h1>
        <p>고양이의 멋진 댄스를 감상해보세요!</p>
        <div className="keyboard-hints">
          <span>⌨️ 단축키: 스페이스바(재생/정지), R(리셋)</span>
        </div>
      </header>
      <main className="app-main">
        <DancingCat
          isAnimating={isAnimating}
          animationSpeed={animationSpeed}
          animationType={animationType}
        />
        <AnimationControls
          isAnimating={isAnimating}
          animationSpeed={animationSpeed}
          animationType={animationType}
          onToggle={toggleAnimation}
          onReset={resetAnimation}
          onSpeedChange={changeAnimationSpeed}
          onTypeChange={changeAnimationType}
        />
      </main>
    </div>
  )
}

export default App
