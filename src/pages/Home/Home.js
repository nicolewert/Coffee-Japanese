import React from 'react'

const Home = () =>{

    return(
        <div className={classes.container}>
            {/* Todo: Navbar Component & Footer Component */}
            <div className={classes.item}>
                <h2>Welcome to Coffee Japanese -</h2>
                <p>Learn Japanese in small bits just long enough to look over while having a nice coffee!☕</p>
            </div>
            <div className={classes.item}>
                <p>Brew yourself a coffee and click coffee time to start your lesson!</p>
                <div className={classes.buttonContainer}>
                    <button className={classes.coffeeButton}>Coffee Time!</button>
                </div>
            </div>
    )
}

export default Home