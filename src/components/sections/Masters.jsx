import { MASTERS, MASTERS_INTRO } from '../../data/masters'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import MasterProfile from './MasterProfile'

/** "Memoria de grandes maestros": intro + one profile per master. */
export default function Masters() {
  return (
    <Section id="maestros" tone="sand">
      <SectionHeader {...MASTERS_INTRO} />
      <div className="mt-16">
        {MASTERS.map((master, i) => (
          <MasterProfile key={master.id} master={master} reverse={i % 2 === 1} />
        ))}
      </div>
    </Section>
  )
}