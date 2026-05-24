import { useEffect, useState } from 'react'
import './index.css'

function App() {
  const [task, setTask] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/api/task')
      .then(res => res.json())
      .then(data => setTask(data))
  }, [])

  if (!task) return <div className="loading">Loading...</div>

  return (
    <>
      <div className="header">
        <span>PRODIGY INFOTECH</span>
        <span>05</span>
      </div>

      <div className="container">
        <div>
          <h1 className="title">{task.title}</h1>
          <div className="line"></div>
          <h2 className="subtitle">{task.name}</h2>
        </div>

        <div>
          <div className="quote">“</div>
          <p className="desc">{task.description}</p>
          
          <div>
            <p className="features-title">Optional Features:</p>
            <p className="features">
              Allow users to follow each other, receive notifications for new interactions, and explore trending content.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App