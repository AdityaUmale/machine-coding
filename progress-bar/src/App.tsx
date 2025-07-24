
const ProgressBar = ({progress} : { progress: number }) => {

  return (
    <div className="outer">
      <div className="inner" style={{ width: `${progress}%` }}>
        {progress}%
      </div>

    </div>
  )
}


export default function App() {

  return (
    <div className="App">
      <h1>Progress Bar</h1>

      <ProgressBar progress={40} />

    </div>
  )
}