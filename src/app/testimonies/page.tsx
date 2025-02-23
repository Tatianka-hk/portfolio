const testimonies = [
  {
    id: 1,
    title: "JavaScript & TypeScript",
    expert: "Майстер коду",
    testimony:
      "Підозрюваний демонструє високий рівень володіння JavaScript та TypeScript. Він здатний створювати складні, оптимізовані та чисті рішення. Його код завжди відповідає сучасним стандартам.",
    evidence: [
      "Розробка повноцінних додатків з використанням Vue, React та Node.js.",
      "Використання TypeScript для підвищення якості коду.",
    ],
  },
  // Додайте інші свідчення за аналогією
]

export default function Testimonies() {
  return (
    <div className="min-h-screen bg-amber-100 bg-opacity-80 bg-[url('/paper-texture.jpg')] p-8">
      <div className="max-w-4xl mx-auto bg-amber-50 p-8 shadow-lg rounded-lg border-2 border-amber-900">
        <h2 className="text-3xl font-bold text-amber-900 mb-2">Свідчення експертів: Навички підозрюваного</h2>
        <p className="text-amber-800 mb-6">
          Детектив зібрав свідчення від фахівців, які підтверджують компетентність підозрюваного у різних галузях.
        </p>

        {testimonies.map((testimony) => (
          <div key={testimony.id} className="mb-8 bg-white p-6 rounded-lg shadow-md border border-amber-200">
            <h3 className="text-xl font-bold text-amber-800 mb-2">
              Свідчення №{testimony.id}: {testimony.title}
            </h3>
            <p className="text-amber-700 font-semibold mb-2">Експерт: "{testimony.expert}"</p>
            <p className="text-amber-900 mb-4">{testimony.testimony}</p>
            <div>
              <h4 className="font-semibold text-amber-800 mb-2">Докази:</h4>
              <ul className="list-disc list-inside text-amber-900">
                {testimony.evidence.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

