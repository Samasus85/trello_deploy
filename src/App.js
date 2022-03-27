import Login from './components/Login'
import Container from './UI/Container'
import React, { Suspense } from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import Layout from './UI/Layout'

const Workspace = React.lazy(() => import('./pages/Workspace'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
function App() {
	return (
		<div className='app'>
			<BrowserRouter >
				<Suspense fallback={<div><p>Loading...</p></div>}>

					<Routes>
						<Route path='/' element={<Login />} />
						<Route
							path='/trelloMain'
							element={
								<Layout>
									<Header />
									<Container className='trello__container'>
										<Main />
									</Container>
								</Layout>
							}
						/>
						<Route path='/trelloMain/workspace' element={<Layout>
							{/* <Header /> */}
							<Container className='trello__container'>
								<Workspace />
							</Container>
						</Layout>} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		</div>
	)
}

export default App
