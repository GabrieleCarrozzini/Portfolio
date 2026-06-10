"use client"

import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export interface MediaItemType {
  id: number
  type: 'image' | 'video'
  title: string
  desc: string
  url: string
  span: string
}

/* ─── MediaItem ─────────────────────────────────────────────── */
const MediaItem = ({
  item,
  className,
  onClick,
}: {
  item: MediaItemType
  className?: string
  onClick?: () => void
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [isBuffering, setIsBuffering] = useState(true)

  useEffect(() => {
    if (item.type !== 'video' || !videoRef.current) return
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => setIsInView(e.isIntersecting)),
      { rootMargin: '50px', threshold: 0.1 }
    )
    observer.observe(videoRef.current)
    return () => observer.disconnect()
  }, [item.type])

  useEffect(() => {
    if (item.type !== 'video') return
    let mounted = true
    const play = async () => {
      if (!videoRef.current || !isInView || !mounted) return
      try {
        if (videoRef.current.readyState >= 3) {
          setIsBuffering(false)
          await videoRef.current.play()
        } else {
          setIsBuffering(true)
          await new Promise<void>((res) => {
            if (videoRef.current) videoRef.current.oncanplay = () => res()
          })
          if (mounted) { setIsBuffering(false); await videoRef.current?.play() }
        }
      } catch (err) { console.warn('Video playback failed:', err) }
    }
    if (isInView) play()
    else videoRef.current?.pause()
    return () => {
      mounted = false
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.removeAttribute('src')
        videoRef.current.load()
      }
    }
  }, [isInView, item.type])

  if (item.type === 'video') {
    return (
      <div className={`${className} relative overflow-hidden`}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          onClick={onClick}
          playsInline muted loop preload="auto"
          style={{ opacity: isBuffering ? 0.8 : 1, transition: 'opacity 0.2s', willChange: 'transform' }}
        >
          <source src={item.url} type="video/mp4" />
        </video>
        {isBuffering && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-5 h-5 rounded-full animate-spin"
              style={{ border: '2px solid rgba(233,161,36,0.25)', borderTopColor: 'var(--gold-500)' }}
            />
          </div>
        )}
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={item.url}
      alt={item.title}
      className={`${className} object-cover cursor-pointer`}
      onClick={onClick}
      loading="lazy"
      decoding="async"
    />
  )
}

/* ─── GalleryModal ──────────────────────────────────────────── */
interface GalleryModalProps {
  selectedItem: MediaItemType
  isOpen: boolean
  onClose: () => void
  setSelectedItem: (item: MediaItemType | null) => void
  mediaItems: MediaItemType[]
}

const GalleryModal = ({
  selectedItem,
  isOpen,
  onClose,
  setSelectedItem,
  mediaItems,
}: GalleryModalProps) => {
  const [dockPosition, setDockPosition] = useState({ x: 0, y: 0 })
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40"
        style={{ background: 'rgba(6,6,6,0.85)', backdropFilter: 'blur(12px)' }}
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.97, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.97, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className="fixed inset-4 sm:inset-8 md:inset-12 z-50 flex flex-col overflow-hidden"
        style={{
          background: 'rgba(6,6,6,0.97)',
          border: '1px solid var(--line)',
          backdropFilter: 'blur(20px)',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '14px 20px',
            borderBottom: '1px solid var(--line)',
            flexShrink: 0,
          }}
        >
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.28em', color: 'var(--gold-500)', textTransform: 'uppercase', marginBottom: 4 }}>
              {selectedItem.desc}
            </p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 2vw, 1.4rem)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--white)', textTransform: 'uppercase' }}>
              {selectedItem.title}
            </h3>
          </div>
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 36, height: 36,
              background: 'none',
              border: '1px solid var(--gray-700)',
              color: 'var(--gray-500)',
              cursor: 'pointer',
              transition: 'border-color 200ms ease, color 200ms ease',
            }}
            onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--gold-500)'; e.currentTarget.style.color = 'var(--white)' }}
            onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--gray-700)'; e.currentTarget.style.color = 'var(--gray-500)' }}
            aria-label="Close"
          >
            <X size={14} />
          </motion.button>
        </div>

        {/* Main image */}
        <div className="flex-1 flex items-center justify-center p-4 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedItem.id}
              className="relative w-full h-full max-w-4xl"
              initial={{ y: 16, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 500, damping: 30, mass: 0.5 } }}
              exit={{ y: 16, scale: 0.98, opacity: 0, transition: { duration: 0.15 } }}
              onClick={onClose}
              style={{ cursor: 'pointer' }}
            >
              <MediaItem
                item={selectedItem}
                className="w-full h-full"
                onClick={onClose}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Index counter */}
        <div style={{ padding: '8px 20px', borderTop: '1px solid var(--line)', flexShrink: 0 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.22em', color: 'var(--gray-500)', textTransform: 'uppercase' }}>
            {String(mediaItems.findIndex(i => i.id === selectedItem.id) + 1).padStart(2, '0')} / {String(mediaItems.length).padStart(2, '0')}
          </span>
        </div>
      </motion.div>

      {/* Draggable thumbnail dock */}
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0.1}
        initial={false}
        animate={{ x: dockPosition.x, y: dockPosition.y }}
        onDragEnd={(_, info) =>
          setDockPosition((prev) => ({ x: prev.x + info.offset.x, y: prev.y + info.offset.y }))
        }
        className="fixed z-[60] left-1/2 bottom-6 -translate-x-1/2 touch-none"
      >
        <div
          className="flex items-center -space-x-2 px-3 py-2 cursor-grab active:cursor-grabbing"
          style={{
            background: 'rgba(233,161,36,0.08)',
            border: '1px solid rgba(233,161,36,0.22)',
            backdropFilter: 'blur(16px)',
          }}
        >
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.id}
              onClick={(e) => { e.stopPropagation(); setSelectedItem(item) }}
              style={{
                zIndex: selectedItem.id === item.id ? 30 : mediaItems.length - index,
              }}
              className={`relative flex-shrink-0 w-9 h-9 overflow-hidden cursor-pointer ${
                selectedItem.id === item.id
                  ? 'ring-2 ring-white/60 shadow-lg'
                  : 'hover:ring-1 hover:ring-white/20'
              }`}
              initial={{ rotate: index % 2 === 0 ? -15 : 15 }}
              animate={{
                scale: selectedItem.id === item.id ? 1.2 : 1,
                rotate: selectedItem.id === item.id ? 0 : index % 2 === 0 ? -15 : 15,
                y: selectedItem.id === item.id ? -8 : 0,
              }}
              whileHover={{ scale: 1.3, rotate: 0, y: -10, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
            >
              <MediaItem item={item} className="w-full h-full" onClick={() => setSelectedItem(item)} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
              {selectedItem.id === item.id && (
                <motion.div
                  layoutId="activeGlow"
                  className="absolute -inset-2 blur-xl"
                  style={{ background: 'rgba(233,161,36,0.2)' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  )
}

/* ─── InteractiveBentoGallery ───────────────────────────────── */
interface InteractiveBentoGalleryProps {
  mediaItems: MediaItemType[]
}

const InteractiveBentoGallery: React.FC<InteractiveBentoGalleryProps> = ({ mediaItems }) => {
  const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null)
  const [items, setItems] = useState(mediaItems)
  const [isDragging, setIsDragging] = useState(false)

  return (
    <div>
      <AnimatePresence mode="wait">
        {selectedItem ? (
          <GalleryModal
            selectedItem={selectedItem}
            isOpen={true}
            onClose={() => setSelectedItem(null)}
            setSelectedItem={setSelectedItem}
            mediaItems={items}
          />
        ) : (
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[3px] auto-rows-[90px]"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
            }}
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                layoutId={`media-${item.id}`}
                className={`relative overflow-hidden cursor-pointer ${item.span}`}
                onClick={() => !isDragging && setSelectedItem(item)}
                variants={{
                  hidden: { y: 40, scale: 0.95, opacity: 0 },
                  visible: {
                    y: 0, scale: 1, opacity: 1,
                    transition: { type: 'spring', stiffness: 350, damping: 25, delay: index * 0.04 },
                  },
                }}
                whileHover={{ scale: 1.02, zIndex: 10 }}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={1}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={(_, info) => {
                  setIsDragging(false)
                  const dist = info.offset.x + info.offset.y
                  if (Math.abs(dist) > 50) {
                    const newItems = [...items]
                    const dragged = newItems[index]
                    const target = dist > 0
                      ? Math.min(index + 1, items.length - 1)
                      : Math.max(index - 1, 0)
                    newItems.splice(index, 1)
                    newItems.splice(target, 0, dragged)
                    setItems(newItems)
                  }
                }}
              >
                <MediaItem
                  item={item}
                  className="absolute inset-0 w-full h-full"
                  onClick={() => !isDragging && setSelectedItem(item)}
                />

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="relative p-3">
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.2em', color: 'var(--gold-500)', textTransform: 'uppercase', marginBottom: 3 }}>
                      {item.desc}
                    </p>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(0.75rem, 1.5vw, 1rem)', fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--white)', textTransform: 'uppercase', lineHeight: 1 }}>
                      {item.title}
                    </h3>
                  </div>
                </motion.div>

                {/* HUD corner mark on hover */}
                <motion.div
                  className="absolute top-2 left-2 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{ width: 14, height: 14, borderTop: '1px solid rgba(233,161,36,0.6)', borderLeft: '1px solid rgba(233,161,36,0.6)' }}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default InteractiveBentoGallery
