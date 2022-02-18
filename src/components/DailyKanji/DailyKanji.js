import React from 'react'
import classes from './DailyKanji.module.css'

const DailyKanji = ({kanji}) => {

    return(
        <div className={classes.container}>

            <h3>Daily Kanji</h3>
            <div className={classes.content}>

                <div className={classes.kanjiSquareMaxSize}>
                    <div className={classes.kanjiSquare}>
                        <div className={classes.kanji}>{kanji && kanji.kanji}</div>
                    </div>
                </div>

                <div className={classes.kanjiInfo}>
                    <div className={classes.infoItem}>
                        <p className={classes.infoHeading}>Definition:</p>
                        <p>{kanji && kanji.kanjiDetails.kanji.meaning.english}</p>
                    </div>

            
                    <div className={classes.infoItem}>
                        <p className={classes.infoHeading}>On:</p>
                        <p>{kanji && kanji.kanjiDetails.kanji.onyomi.katakana.toString()}</p>
                       
                    </div>

                    {kanji && kanji.kanjiDetails.kanji.kunyomi.hiragana.toString()
                    ?<div className={classes.infoItem}>
                        <p className={classes.infoHeading}>Kun:</p>
                        <p>{kanji.kanjiDetails.kanji.kunyomi.hiragana.toString()}</p>
                    </div>
                    :<></>
                    }

                </div>

            </div>

        </div>
    )
}

export default DailyKanji