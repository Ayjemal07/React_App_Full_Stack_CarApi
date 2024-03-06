import Background from '../assets/images/automotives.jpeg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-5 bg-black text-white'>Welcome To Car Inventory</h3>
        </div>
    </div>
  )
}

export default Home