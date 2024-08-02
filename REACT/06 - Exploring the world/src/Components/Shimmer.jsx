import '../../style.css'

export const Shimmer = () => (
    <div className='shimmer-container'>
      {[...Array(20)].map((_, i) => (
        <div key={i} className='shimmer-card'></div>
      ))}
    </div>
  );
  