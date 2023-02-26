import { toolkit } from '@/data/toolkit'
import HeroSection from '../components/HeroSection'
import PageSection from '../components/PageSection'
import Dock from './Dock'
import ToolkitItem from './ToolkitItem'

export default function Toolkit() {
  return (
    <div className="container pt-32">
      <HeroSection imageSrc="/toolkit.jpg" imageAlt="Toolkit">
        <p>
          Non mollit amet culpa proident nisi ut. Proident aliqua in excepteur
          laborum amet incididunt duis ut sint. Occaecat voluptate aute do do
          veniam mollit voluptate incididunt ut ullamco magna adipisicing
          ullamco. Anim ipsum sit sint eiusmod culpa enim nostrud Lorem anim est
          est quis proident.
        </p>

        <p>
          Non mollit amet culpa proident nisi ut. Proident aliqua in excepteur
          laborum amet incididunt duis ut sint. Occaecat voluptate aute do do
          veniam mollit voluptate incididunt ut ullamco magna adipisicing
          ullamco. Anim ipsum sit sint eiusmod culpa enim nostrud Lorem anim est
          est quis proident.
        </p>
      </HeroSection>

      <PageSection
        name="Dock"
        subtitle="Some of my current favourite and/or most used apps"
      >
        <Dock />
      </PageSection>

      <PageSection name="Tools, gear and what I listen to">
        {toolkit.map((category) => (
          <>
            <h3 className="mb-2 mt-7 font-grotesk text-xl font-bold uppercase text-white">
              {category.name}
            </h3>

            {category.items.map((item, idx) => (
              <ToolkitItem item={item} key={idx} />
            ))}
          </>
        ))}

        <h3 className="mb-2 mt-7 font-grotesk text-xl font-bold uppercase text-white">
          Who I've been listening to lately
        </h3>
      </PageSection>
    </div>
  )
}
