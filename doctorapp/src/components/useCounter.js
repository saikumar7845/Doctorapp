import { useState } from 'react'

// Custom React hook to manage counter state (increment/decrement)
// This is pure logic and will not render anything in the browser directly
function useCounter() {
    // Initialize count state to 0
    const [count, setCount] = useState(0)

    // Function to increase count by 1
    function increment() {
        setCount(count + 1)
    }

    // Function to decrease count by 1
    function decrement() {
        setCount(count - 1)
    }

    // Return the state and control functions in an array
    return [count, increment, decrement]
}

export default useCounter
