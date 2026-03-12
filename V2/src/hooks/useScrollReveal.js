import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to a container ref.
 * All .reveal children inside it get the .visible class when they enter the viewport.
 */
export function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const els = ref.current?.querySelectorAll('.reveal') ?? []
    els.forEach((el) => observer.observe(el))

    return () => els.forEach((el) => observer.unobserve(el))
  }, [])

  return ref
}
