import { useEffect } from "react";
import play from '../playground';

export default function Home() {
  const message: string = "Hello Typescript"
  
  useEffect(() => {
    play()
  }, [])
  return (
    <div>
      {message}
    </div>
  )
}
