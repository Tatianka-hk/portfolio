import Image from "next/image"

const evidences = [
  {
    id: 1,
    title: "Веб-додаток для управління завданнями",
    description:
      "Підозрювана розробила високоефективний веб-додаток для управління завданнями, використовуючи React та Node.js. Додаток демонструє відмінну продуктивність та інтуїтивно зрозумілий інтерфейс.",
    image: "/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Платформа для візуалізації даних",
    description:
      "Створена підозрюваною платформа дозволяє ефективно візуалізувати складні набори даних, використовуючи передові технології візуалізації.",
    image: "/project2.jpg",
    technologies: ["Vue.js", "D3.js", "Python"],
  },
  // Додайте інші проекти за потреби
]

export default function Evidence() {
  return (
    <div className="min-h-screen bg-amber-100 bg-opacity-80 bg-[url('/paper-texture.jpg')] p-8">
      <div className="max-w-6xl mx-auto bg-amber-50 p-8 shadow-lg rounded-lg border-2 border-amber-900">
        <h2 className="text-3xl font-bold text-amber-900 mb-6">Докази</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {evidences.map((evidence) => (
            <div key={evidence.id} className="bg-white p-6 rounded-lg shadow-md border border-amber-200">
              <h3 className="text-xl font-bold text-amber-800 mb-2">
                Доказ №{evidence.id}: {evidence.title}
              </h3>
              <Image
                src={evidence.image || "/placeholder.svg"}
                alt={evidence.title}
                width={400}
                height={300}
                className="rounded-lg shadow-sm mb-4"
              />
              <p className="text-amber-900 mb-4">{evidence.description}</p>
              <div className="flex flex-wrap gap-2">
                {evidence.technologies.map((tech) => (
                  <span key={tech} className="bg-amber-200 text-amber-800 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

