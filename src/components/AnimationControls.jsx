import '../styles/controls.css'

const AnimationControls = ({
  isAnimating,
  animationSpeed,
  animationType,
  onToggle,
  onReset,
  onSpeedChange,
  onTypeChange
}) => {
  const danceTypes = [
    { value: 'catDance', label: '기본 댄스' },
    { value: 'spinDance', label: '회전 댄스' },
    { value: 'bounceDance', label: '바운스 댄스' },
    { value: 'wiggleDance', label: '흔들기 댄스' }
  ]

  const speedOptions = [
    { value: 0.5, label: '느림' },
    { value: 1, label: '보통' },
    { value: 1.5, label: '빠름' },
    { value: 2, label: '매우 빠름' }
  ]

  return (
    <div className="controls-container">
      <div className="main-controls">
        <button
          className={`control-button ${isAnimating ? 'pause' : 'play'}`}
          onClick={onToggle}
          aria-label={isAnimating ? '댄스 정지' : '댄스 시작'}
        >
          <span className="button-icon">
            {isAnimating ? '⏸️' : '▶️'}
          </span>
          <span className="button-text">
            {isAnimating ? '댄스 정지' : '댄스 시작'}
          </span>
        </button>

        <button
          className="control-button reset"
          onClick={onReset}
          aria-label="리셋"
        >
          <span className="button-icon">🔄</span>
          <span className="button-text">리셋</span>
        </button>
      </div>

      <div className="advanced-controls">
        <div className="control-group">
          <label htmlFor="dance-type">댄스 타입:</label>
          <select
            id="dance-type"
            value={animationType}
            onChange={(e) => onTypeChange(e.target.value)}
            className="control-select"
          >
            {danceTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div className="control-group">
          <label htmlFor="speed">속도:</label>
          <select
            id="speed"
            value={animationSpeed}
            onChange={(e) => onSpeedChange(parseFloat(e.target.value))}
            className="control-select"
          >
            {speedOptions.map((speed) => (
              <option key={speed.value} value={speed.value}>
                {speed.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="dance-info">
        <p className="status-text">
          상태: {isAnimating ? '💃 춤추는 중!' : '😴 휴식 중'}
        </p>
        <div className="rhythm-indicator">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`rhythm-bar ${isAnimating ? 'active' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AnimationControls