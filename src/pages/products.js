import React from "react"
import Layout from "../components/Layout"
import styles from "../components/products.module.css"
console.log(styles)

const products = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>products page</h1>
        <p className={styles.text}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    </Layout>
  )
}

export default products
