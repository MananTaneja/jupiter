function App() {
	return (
		<div>
			{/* Navigation */}
			<nav className='h-10 w-full flex align-middle'>
				<div className='back h-5'>
					<button className='h-5'>
						<div className='image-container h-2'>
							<img
								src='https://i.ibb.co/1fKcJsP/back-4x.png'
								alt=''
								srcset=''
								className='h-5'
							/>
						</div>
					</button>
				</div>
				<div
					id='page-title'
					className='w-full flex align-middle justify-center'
				>
					<p className='text-center leading-10'>Send Money</p>
				</div>
			</nav>
			{/* Top bar */}
			<div className='flex gap-5 justify-around border-t-emerald-200'>
				<div className='h-5 w-5'>
					<img
						src='https://i.ibb.co/tm9WG7c/check-4x.png'
						alt=''
					/>
				</div>
				<div className='user-account'>
					<p>Name</p>
					<p>UPI</p>
				</div>
				<div className='h-5 w-5'>
					<img
						src='https://i.ibb.co/tm9WG7c/check-4x.png'
						alt=''
					/>
				</div>
			</div>
			{/* Page */}
			<div className='payment-page'>
				<div id='amount-container'>
					<p>Enter Amount</p>
					<input
						type='number'
						name='input-amount'
						className='border border-[#DDDDDD]'
					/>
				</div>

				<div
					id='message-container'
					className='border border-[#DDDDDD]'
				>
					<p>Note</p>
					<input
						type='text'
						value='Sent via Jupiter'
					/>
				</div>

				<div id='account-selection'>
					<p>From Account</p>

					<div className='box w-full border border-[#DDDDDD] p-2 flex justify-between'>
						<div
							className='flex gap-3'
							id='left'
						>
							<div className='payment-icon h-8 w-8'>
								<img
									src='https://i.ibb.co/qm27dLS/jupiter-logo-4x.png'
									alt=''
									srcset=''
								/>
							</div>
							<div id='bank-name'>
								<p>Jupiter Bank</p>
								<p id='account-number'>* 3456</p>
							</div>
						</div>
						<div id='right'>
							<div id='bank-balance'>
								<p>Rs. 18, 610</p>
							</div>
						</div>
					</div>

					<div
						id='payment-button'
						className='h-10 w-full mx-4 bg-[#FC7A69] rounded-lg text-center flex align-middle justify-center text-white'
					>
						<button type='submit'>Send</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
