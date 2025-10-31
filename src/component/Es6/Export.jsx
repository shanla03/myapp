// Named export

// inline individually

export const name="alice"

// all at once at the bottom

const age="18"
const address="mangalore"

export {age, address}

export const Hello =()=>{
    return <><h2>Good Morning</h2></>
}

// default export

const Greeting =()=>{
    return <><h3>How are you</h3></>
}

export default Greeting