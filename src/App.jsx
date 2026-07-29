import { useState } from 'react'
import AuroraBackground from './components/AuroraBackground'
import FloatingHearts from './components/FloatingHearts'
import PasswordGate from './components/PasswordGate'
import HeroSection from './components/HeroSection'
import CounterSection from './components/CounterSection'
import TimelineSection from './components/TimelineSection'
import MeaningSection from './components/MeaningSection'
import MissingYouSection from './components/MissingYouSection'
import GallerySection from './components/GallerySection'
import LoveCardsSection from './components/LoveCardsSection'
import PromiseSection from './components/PromiseSection'
import VoiceMessageSection from './components/VoiceMessageSection'
import VideoMessageSection from './components/VideoMessageSection'
import MessageSection from './components/MessageSection'
import MusicPlayer from './components/MusicPlayer'
import Footer from './components/Footer'

export default function App() {
  const [unlocked, setUnlocked] = useState(false)

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />
  }

  return (
    <>
      <AuroraBackground />
      <FloatingHearts count={20} />

      <main>
        <HeroSection />
        <CounterSection />
        <TimelineSection />
        <MeaningSection />
        <MissingYouSection />
        <GallerySection />
        <LoveCardsSection />
        <PromiseSection />
        <VoiceMessageSection />
        <VideoMessageSection />
        <MessageSection />
        <Footer />
      </main>

      <MusicPlayer />
    </>
  )
}
