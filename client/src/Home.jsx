import React from 'react'

export default function Home() {
  return (
    <>
      {/* middle of home */}
      <div className="h-homes">
      <div className="h-middle">
        
        {/* profile sections */}
        <div className="h-profilename">
          <h2 className='nameing'>Hi There 👋</h2>
          <p className='nameing'>Good to see you—how is your day going?</p>
          <br />
         <p className="h-random">It offers a wide range of topics, helping users prepare for exams, interviews, and competitive tests.
Users can attempt quizzes, track their scores, and improve their performance over time.
The platform provides instant feedback and explanations for better understanding.
It makes learning interactive, fast, and accessible from anywhere.</p>
<div className="h-catgories"><h3> To Check your knowledge choose categories and play</h3></div>
          
        </div>

        <div className="h-thoughts">
          <div className="quote-box">
            <h2>⚡ Be Motivated</h2>
            <div className="quote-text">Stay strong Stay focus</div>
            <button>Get Next</button>
          </div>
        </div>

      </div>
      </div>
    </>
  )
}
