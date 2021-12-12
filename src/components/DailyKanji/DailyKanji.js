import React from 'react'
import classes from './DailyKanji.module.css'

const DailyKanji = () => {
    return(
        <div className={classes.container}>

            <h3>Daily Kanji</h3>
            <div className={classes.content}>

                <div className={classes.kanjiSquareMaxSize}>
                </div>
                <div className={classes.kanjiInfo}>
                    <div className={classes.infoItem}>
                        <p className={classes.infoHeading}>Definition:</p>
                        {<p>Stuff</p>}
                    </div>
                    <div className={classes.infoItem}>
                        <p className={classes.infoHeading}>On/ Example:</p>
                        {<p>Stuff</p>}
                    </div>
                    <div className={classes.infoItem}>
                        <p className={classes.infoHeading}>Kun:</p>
                        {<p>Stuff</p>}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default DailyKanji