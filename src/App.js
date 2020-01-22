import React, { useState } from 'react'
import './App.css'
import BottomRow from './BottomRow'

function App() {
	//TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
	const [home, setHome] = useState(0)
	const [away, setAway] = useState(0)

	return (
		<div className='container'>
			<section className='scoreboard'>
				<div className='topRow'>
					<div className='home'>
						<h2 className='home__name'>Lions</h2>

						{/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

						<div className='home__score'>{home}</div>
					</div>
					<div className='timer'>00:03</div>
					<div className='away'>
						<h2 className='away__name'>Tigers</h2>
						<div className='away__score'>{away}</div>
					</div>
				</div>
				<BottomRow />
			</section>
			<section className='buttons'>
				<div className='homeButtons'>
					{/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
					<button onClick={() => setHome(home + 7)} className='homeButtons__touchdown'>
						Home Touchdown
					</button>
					<button onClick={() => setHome(home + 3)} className='homeButtons__fieldGoal'>
						Home Field Goal
					</button>
				</div>
				<div className='awayButtons'>
					<button onClick={() => setAway(away + 7)} className='awayButtons__touchdown'>
						Away Touchdown
					</button>
					<button onClick={() => setAway(away + 3)} className='awayButtons__fieldGoal'>
						Away Field Goal
					</button>
				</div>
			</section>
		</div>
	)
}

export default App
