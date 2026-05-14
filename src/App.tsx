import { MkButton } from 'moldekit-react';

function App() {

  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-bold text-center text-4xl">mangos</h1>
      <h2 className="text-center text-2xl">under construction !</h2>

        <MkButton iconName="home" variant="filled" color="primary" onClick={() => alert('clicked')}>
          Home
        </MkButton>

    </section>
  )
}

export default App
