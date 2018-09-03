import React from 'react'

const BasePage = ({ name, header, children }) => (
  <div className={name}>
    <header className="main-header">
      <h1 className="main-header__title">{header}</h1>
    </header>

    <section className="container">{children}</section>
  </div>
  )

export default BasePage
