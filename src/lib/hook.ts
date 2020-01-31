import { useRef, useEffect, MutableRefObject } from 'react'

interface Options {
  readonly placeholderSrc?: string
  readonly placeholderSrcset?: string
  readonly imagesSelector?: string
}

export function useLazyImages<T extends HTMLElement>({
  placeholderSrc,
  placeholderSrcset,
  imagesSelector = 'img'
}: Options): MutableRefObject<T | undefined> {
  const ref = useRef<T>()

  useEffect(() => {
    if (!ref.current) {
      return
    }

    if (!('IntersectionObserver' in window)) {
      return
    }

    const lazyImages: NodeListOf<HTMLImageElement> = ref.current.querySelectorAll(
      imagesSelector
    )

    lazyImages.forEach(imageElem => {
      if (imageElem.dataset.src || imageElem.dataset.srcset) {
        return
      }

      imageElem.dataset.src = imageElem.src
      imageElem.dataset.srcset = imageElem.srcset

      if (placeholderSrc) {
        imageElem.src = placeholderSrc
      }

      if (placeholderSrcset) {
        imageElem.srcset = placeholderSrcset
      }
    })

    const lazyImageObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target as HTMLImageElement
          if (lazyImage.dataset.src) {
            lazyImage.src = lazyImage.dataset.src
          }
          if (lazyImage.dataset.srcset) {
            lazyImage.srcset = lazyImage.dataset.srcset
          }
          lazyImageObserver.unobserve(lazyImage)
        }
      })
    })

    lazyImages.forEach(lazyImage => {
      lazyImageObserver.observe(lazyImage)
    })

    return () => {
      lazyImages.forEach(lazyImage => {
        lazyImageObserver.unobserve(lazyImage)
      })
    }
  }, [ref, placeholderSrc, placeholderSrcset])

  return ref
}
