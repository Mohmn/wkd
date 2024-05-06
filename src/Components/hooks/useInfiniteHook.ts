import { type RefObject, useRef, useEffect, } from 'react'


const useInfiniteScroll = (ref: RefObject<HTMLElement | null>, callBackFunc: () => void, delay = 230) => {
  const timeoutRef = useRef<NodeJS.Timeout>()
  useEffect(() => {
    if (!ref.current || !callBackFunc) return;
    const element = ref.current
    function handleScroll(event: Event) {
      const isBottom = Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) < 30
      event.stopPropagation()
      if (isBottom) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(callBackFunc, delay)
      }
    }
    element.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      element.removeEventListener('scroll', handleScroll)
    }
  }, [callBackFunc, delay, ref])

}

export default useInfiniteScroll;
