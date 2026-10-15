import { useState } from 'react'

const Card = ({ title, setHasliked }) => {
  return (
    <div className="Card">
      <h1>{title}</h1>

      <button onClick={() => setHasliked(true)}>
        Like
      </button>
    </div>
  )
}

const Tailwind = () => {
  const [hasliked, setHasliked] = useState(false)

  return (
    <>
      <h2>Hello my name is react</h2>

      <p>
        Liked: {hasliked ? 'Yes' : 'No'}
      </p>

      <Card
        title="lion king"
        setHasliked={setHasliked}
      />

      <Card
        title="teer fire"
        setHasliked={setHasliked}
      />

      <Card
        title="king og jungle"
        setHasliked={setHasliked}
      />
    </>
  )
}

export default Tailwind