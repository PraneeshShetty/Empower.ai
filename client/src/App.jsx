import React from 'react'
import { Route } from 'react-router-dom'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/ai' element={<Layout />} />
        <Route index element={<Dashboard />} />
        <Route
        <Route path="/blog" element={<BlogTitles />} />

        </Route>
      </Routes>
    </div>
  )
}
