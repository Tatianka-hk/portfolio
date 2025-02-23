import Link from "next/link"

export default function Contacts() {
  return (
    <div className="min-h-screen bg-amber-100 bg-opacity-80 bg-[url('/paper-texture.jpg')] p-8">
      <div className="max-w-4xl mx-auto bg-amber-50 p-8 shadow-lg rounded-lg border-2 border-amber-900">
        <h2 className="text-3xl font-bold text-amber-900 mb-6">Контакти детективного агентства</h2>
        <p className="text-lg text-amber-800 mb-6">
          Якщо у вас є інформація про підозрюваного, зв'яжіться з детективом:
        </p>
        <form className="mb-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-amber-800 mb-2">
              Ваше ім'я
            </label>
            <input type="text" id="name" className="w-full p-2 border border-amber-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-amber-800 mb-2">
              Ваш email
            </label>
            <input type="email" id="email" className="w-full p-2 border border-amber-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-amber-800 mb-2">
              Ваше повідомлення
            </label>
            <textarea id="message" rows={4} className="w-full p-2 border border-amber-300 rounded"></textarea>
          </div>
          <button
            type="submit"
            className="bg-amber-800 text-white px-6 py-2 rounded hover:bg-amber-700 transition duration-300"
          >
            Відправити
          </button>
        </form>
        <div>
          <h3 className="text-xl font-bold text-amber-800 mb-4">Контакти для зв'язку:</h3>
          <div className="flex space-x-4">
            <Link href="https://github.com/yourusername" className="text-amber-800 hover:text-amber-600">
              GitHub
            </Link>
            <Link href="https://linkedin.com/in/yourusername" className="text-amber-800 hover:text-amber-600">
              LinkedIn
            </Link>
            <Link href="https://t.me/yourusername" className="text-amber-800 hover:text-amber-600">
              Telegram
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

