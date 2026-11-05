// import useInView from '../hooks/useInView'

// const hiddenStyles = {
//   up: 'translate-y-10',
//   left: '-translate-x-10',
//   right: 'translate-x-10',
// }

// function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
//   const [ref, inView] = useInView()

//   return (
//     <div
//       ref={ref}
//       style={{ transitionDelay: `${delay}ms` }}
//       className={`transition-all duration-1000 ease-out ${
//         inView
//           ? 'translate-x-0 translate-y-0 opacity-100'
//           : `opacity-0 ${hiddenStyles[direction]}`
//       } ${className}`}
//     >
//       {children}
//     </div>
//   )
// }

// export default Reveal

import useInView from '../hooks/useInView'

/* Phones slide in from a shorter distance so the hidden state never sticks out past the screen edge */
const hiddenStyles = {
  up: 'translate-y-10',
  left: '-translate-x-4 sm:-translate-x-10',
  right: 'translate-x-4 sm:translate-x-10',
}

function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${
        inView
          ? 'translate-x-0 translate-y-0 opacity-100'
          : `opacity-0 ${hiddenStyles[direction] || hiddenStyles.up}`
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default Reveal