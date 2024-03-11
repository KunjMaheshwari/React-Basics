import './App.css'
import Card from "./components/Card";

function App() {
  let myObj = {
    userName: "Kunj",
    age: 21
  }

  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded">Tailwind test</h1>
      <Card btnText="Click Me"/>
      <Card btnText="Visit Me"/>

      {/* <figure classNameName="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img classNameName="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcQ66qiX-W7O0fU-NHunDGHgwmxVqxOzPZH2JpOXsoFcOCTv6O8gmeULNMm_AJ6objTOE&usqp=CAU" alt="" width="384" height="512" />
  <div classNameName="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p classNameName="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption classNameName="font-medium">
      <div classNameName="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div classNameName="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}
    </>
  )
}

export default App
