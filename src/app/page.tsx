import {SecretComponent, Button} from '../ui'

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-custom-bg p-8 flex items-center justify-center">
      <div className="max-w-4xl mx-auto bg-paper-bg p-8 shadow-lg rounded-lg min-w-[55%]">
        <div className="relative mb-6 flex justify-center">
          <h1 className="text-4xl font-bold text-primary  font-top-secret mb-2">Тetiana Gurkivska</h1>
          <SecretComponent/>
        </div>

        <div className="flex items-start space-x-6 mb-6 flex flex-col items-center">
          <div className="w-2/3">
            <p className="text-2xl text-primary mt-5 font-top-secret mb-2">
     
Suspected of creating innovative solutions, high-quality code and creative projects.
            </p>
            <p className="text-2xl text-primary mb-4 font-top-secret">    The investigation continues...</p>
            </div>
            <div className='flex w-full justify-end mt-[20%]'><Button destination={'suspect'} label='Почати розлідування'/></div>
            
       
        </div>
      </div>
    </div>
  )
}

