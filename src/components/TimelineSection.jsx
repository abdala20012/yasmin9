import { motion } from 'framer-motion'
import './TimelineSection.css'

const milestones = [
  { icon: '♥', tag: 'أول لقاء', title: 'اتقابلنا لأول مرة', date: '14 / 11 / 2020' },
  { icon: '💍', tag: 'خطوبة', title: 'بقينا خطيبين', date: '16 / 2 / 2024' },
  { icon: '👰', tag: 'فرح', title: 'يوم فرحنا', date: '26 / 1 / 2026' },
]

export default function TimelineSection() {
  return (
    <section className="timeline-section" id="timeline">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">محطاتنا</span>
        <h2 className="section-title">قصتنا في تواريخ</h2>
        <p className="section-subtitle">كل تاريخ فيهم بيحكي خطوة من رحلتنا مع بعض ♥</p>
      </motion.div>

      <div className="timeline-track">
        {milestones.map((item, i) => (
          <motion.div
            key={item.tag}
            className="timeline-item"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <span className="timeline-icon">{item.icon}</span>
            <span className="timeline-tag">{item.tag}</span>
            <span className="timeline-item-title">{item.title}</span>
            <span className="timeline-date">{item.date}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
